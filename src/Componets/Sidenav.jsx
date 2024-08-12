import { Box, Icon, Stack, HStack, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: TbArrowsDoubleNeSw,
      text: "Transactions",
      link: "/transactionpage",
    }
  ];

  const supportLink = {
    icon: BiSupport,
    text: "Support",
    link: "/support",
  };

  return (
    <Stack bg="white" justify="space-between" boxShadow={{
      base: "none",
      lg: "lg",
    }} w={{
      base: "full",
      lg: "16rem",
    }} 
    h="100vh">
      <Box>
        <Heading textAlign="center" pt="3.5rem" fontSize="20px">@CRYPTO</Heading>
        <Box mt="6" mx="3">  
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack py="3" px="4" borderRadius="10px" _hover={{
                bg: "#f3f3f7",
                color: "#171717"
              }} color="#797E82">
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to={supportLink.link}>
          <HStack py="3" px="4" borderRadius="10px" _hover={{
            bg: "#f3f3f7",
            color: "#171717"
          }} color="#797E82">
            <Icon as={supportLink.icon} />
            <Text fontSize="14px" fontWeight="medium">{supportLink.text}</Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
