import { Box, Button, Container, Flex, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaBars, FaRegCircleUser } from 'react-icons/fa6'


const TopNav = ({title, onOpen}) => {
  return (
   <Box px="4" bg="white">
     <HStack
     maxW="70rem" mx="auto"  h="16" justify="space-between" >
        <Icon as={FaBars} onClick={onOpen} display={{
            base: "block",
            lg: "none",

        }}/>
      
      <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
      <Menu>
<MenuButton as={Button}>   <Icon as={FaRegCircleUser} fontSize="24px "/> </MenuButton>
<MenuList>
  <MenuItem>Logout</MenuItem>
  <MenuItem>Support</MenuItem>
 
</MenuList>
</Menu>
    
  </HStack>
   </Box>
  )
}

export default TopNav
