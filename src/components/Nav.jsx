import React, { useContext, useState } from 'react';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure, IconButton, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import {ArrowRightIcon, HamburgerIcon} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';
import { CardContext } from '../CardContext';

function Nav(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    let navigate = useNavigate();
    const {cardData, setCardData} = useContext(CardContext);
    const [compCards, makeCards] = useState([]);
    const previewCards = () => {
        if (cardData){
            sessionStorage.setItem("cards",JSON.stringify(cardData));
            navigate("/preview");
        }
    }
    return (
        <nav className='sticky top-0 z-10'>
        <div className='flex w-full flex-row justify-between items-center bg-[#282c34] p-5'>
            <IconButton
            colorScheme="dark"
            aria-label='menu button'
            icon={<HamburgerIcon />}
            size="lg"
            ref={btnRef}
            onClick={onOpen}
            />
            <a href="/" className="text-3xl font-bold text-white"><span><img className='h-[50px]' src="./cometlogo.png"/></span></a>
            <Menu>
                <MenuButton as={IconButton} icon={<ArrowRightIcon />} colorScheme="dark"/>
                <MenuList>
                    <MenuItem onClick={()=>{previewCards()}}>Preview Cards</MenuItem>
                    <MenuItem onClick={()=>{navigate("/coming-soon")}}>Generate Cards</MenuItem>
                </MenuList>
            </Menu>
        </div>
        <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        >
        <DrawerOverlay />
        <DrawerContent
        maxW="275px"
        backgroundColor="white"
        >
            {/* <DrawerHeader className='pt-5 text-white text-center'>
                <h1 className='font-extrabold text-3xl'>Menu</h1>
            </DrawerHeaer> */}
            <DrawerBody>
            <div className="flex p-5 flex-col w-full">
                <button className="text-start font-bold text-[#282c34] hover:text-[#7D8491] duration-200 text-xl py-1" onClick={()=>{navigate("/")}} >notepad</button>
                <button className="text-start font-bold text-[#282c34] hover:text-[#7D8491] duration-200 text-xl py-1" onClick={()=>{navigate("/coming-soon")}} >flashcards</button>
            </div>
            </DrawerBody>
        </DrawerContent>
        </Drawer>

    </nav>
    );
}

export default Nav;