import { Grid, GridItem } from "@chakra-ui/react"
import DashboardLayout from "../../Componets/DashboardLayout"
import PortfolioSection from "./Components/PortfolioSection"
import PriceSection from "./Components/PriceSection"
import Transactions from "./Components/Transactions"
import InfoCard from "./Components/InfoCard"



const Dashboard = ( {} ) => {
  return (
    <DashboardLayout title="Dashboard">  
<Grid 
gridTemplateColumns={{
  base: "repeat(1, 1fr)",
  xl: "repeat(2, 1fr)",
}}
gap="6"
>
  <GridItem colSpan={{
    base: 1,
    xl: 2,
  }}> 
  <PortfolioSection/>
  </GridItem>
  <GridItem colSpan={1}> <PriceSection/></GridItem>
  <GridItem colSpan={1}> <Transactions/></GridItem>
  <GridItem colSpan={1}> <InfoCard 
  imgUrl="/Mask.png"
  text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
  tagText="Loan"

  /></GridItem>  
   <GridItem colSpan={1}> <InfoCard 
  imgUrl="/Mask.png"
  tagText="Contact"
  text="Learn more about our real estate, mortgage, and  corporate account services"
  /></GridItem>         
</Grid>
 
    </DashboardLayout>
  )
}

export default Dashboard
