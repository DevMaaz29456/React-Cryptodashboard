import DashboardLayout from "../../Componets/DashboardLayout"
import ContactCard from "./Components/ContactCard"
import SupportCard from "./Components/SupportCard"


const Support = () => {
  return (
    <DashboardLayout>
      <SupportCard 
      leftComponent= {<ContactCard title="Contact Us" text="Have a question or just wants to know more? Feel free to reach out to us."/>}
      />
    </DashboardLayout>
  )
}

export default Support
