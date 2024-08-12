import { Button, Card, Flex, Icon, Tag } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../Componets/DashboardLayout'
import { IoMdCloudDownload } from 'react-icons/io'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from './Components/TransactionTable'

const TransactionPage = () => {
const tabs = [
 {
  name: "All",
  count: 349,
 },
 {
  name: "Deposit",
  count: 114,
 },
 {
  name: "Withdraw",
  count: 55,
 },
 {
  name: "Trade",
  count: 50,
 },
]

  return (
    <DashboardLayout>
     
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={IoMdCloudDownload}/>}>Export CSV</Button>
      </Flex>
     <Card>
     <Tabs>
  <TabList pt="4">
    {
      tabs.map((tab) => <Tab key={tab.name} 
      display="flex" gap="2"
      >{tab.name} <Tag borderRadius="full" colorScheme='gray'>{tab.count}</Tag></Tab>)
    }
           
  </TabList>

  <TabPanels>
    <TabPanel>
      <TransactionTable/>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
       </Card>
    </DashboardLayout>
  )
}

export default TransactionPage
