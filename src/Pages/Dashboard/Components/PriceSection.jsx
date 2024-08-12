import { Button, Card, Flex, HStack, Icon, Img, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../Chakra/CustomCard"
import { BsArrowUpRight } from "react-icons/bs"
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci"


const PriceSection = () => {

    const timeStamps = ["1:12 PM", "2:12 PM", "3:12 PM", "4:12 PM", "5:12 PM" ];
  return (
    <CustomCard>
    <Flex justify="space-between" align="start">
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
       <Text textStyle="h2"  fontWeight="medium">22.39401000</Text> 
      <HStack fontWeight="medium" color="green">
        <Icon as={BsArrowUpRight}/>
      <Text fontSize="sm"  fontWeight="medium">22%</Text> 
      </HStack>
       </HStack>
       
      </HStack>
      </Stack>
      <HStack>
        <Button leftIcon={< Icon as={CiCirclePlus}/>}>Buy</Button>
        <Button leftIcon={< Icon as={CiCircleMinus}/>}>Sell</Button>


      </HStack>
    </Flex>
    <Tabs variant='soft-rounded' >
  <Flex justify="end">
  <TabList bg="black.5" p="3px">
    {
        ["1H", "1D", "1W", "1M"].map((tab) => (
            <Tab _selected={{bg: "white"}}
             key={tab} fontSize="sm" p="6px" borderRadius="4">{tab}</Tab>
        ))
    }
   
  </TabList>
  </Flex>
  <TabPanels>
    <TabPanel>
    <Img src="/graph.png" mt="3rem" width="100%"  />
<HStack justify="space-between">
    {timeStamps.map((timeStamps) => (
        <Text key={timeStamps} fontSize="sm" color="black.80">
        {timeStamps}
        </Text>
    ))}
</HStack>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  
    </CustomCard>

  )
}

export default PriceSection
