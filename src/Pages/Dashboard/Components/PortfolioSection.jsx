import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import { FaArrowAltCircleUp, FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa'
import { IoIosInformationCircleOutline } from 'react-icons/io'


const PortfolioSection = () => {
  return (
    <HStack justify="space-between" bg="white" borderRadius="xl" p="6" align={
        {
            base: "flex-start",
            xl: "center",
        }
    }
    flexDir={{
        base: "column",
        xl: "row",
    }} 
    spacing={
        {
            base: 4,
            xl: 0,
        }
    }
    >
    <HStack  spacing={{
        base: 0,
        xl: 16,
    }} 
    align={
        {
            base: "flex-start",
            xl: "center",
        }
    }
    flexDir={{
        base: "column",
        xl: "row",
    }}
    >
    <Stack>
        <HStack color="black.80"
        >
            <Text  fontSize="sm">Total Portfolio Value</Text>
            <Icon as={IoIosInformationCircleOutline}/>
        </HStack>
        <Text textStyle="h2"  fontWeight="medium">₹ 112,312.24</Text>
      </Stack>
      <Stack>
        <HStack color="black.80">
            <Text fontSize="14px">Wallet Balances</Text>
           
        </HStack>
      <HStack spacing={4}
       align={
        {
            base: "flex-start",
            sm: "center",
        }
    }
    flexDir={{
        base: "column",
        sm: "row",
    }}
      >
      <HStack>
       <Text textStyle="h2"  fontWeight="medium">22.39401000</Text> <Tag colorScheme='gray'>BTC</Tag>
       </HStack>
       <HStack>
       <Text textStyle="h2"  fontWeight="medium">₹ 1,300.00</Text> <Tag colorScheme='gray'>INR</Tag>
       </HStack>    
      </HStack>
      </Stack>
    </HStack>
      <HStack>
        <Button leftIcon={< Icon as={FaArrowCircleDown}/>}>Deposit</Button>
        <Button leftIcon={< Icon as={FaArrowAltCircleUp}/>}>Withdraw</Button>


      </HStack>
    </HStack>
  )
}

export default PortfolioSection
