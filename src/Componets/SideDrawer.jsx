import {
    Drawer,
    DrawerBody,
 
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,

    Button
  } from '@chakra-ui/react';
import Sidenav from './Sidenav';
  
  const SideDrawer = ({ isOpen, onClose }) => {
    return (
      <>
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
           
  
            <DrawerBody>
           
            </DrawerBody>
            <Sidenav/>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  export default SideDrawer;
  