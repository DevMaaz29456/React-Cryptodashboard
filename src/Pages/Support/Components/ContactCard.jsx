import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
       <Stack spacing={6}>
       <Text fontWeight="medium" fontSize="sm">You will recieve within 24 hours of time of submit.</Text>
        <HStack 
flexDir={{
    base: "column",
    xl: "row",
}}
        >
        <FormControl>
  <FormLabel>Name</FormLabel>
  <Input _placeholder="Enter Your Name..." />
</FormControl>
<FormControl>
  <FormLabel>Surename</FormLabel>
  <Input _placeholder="Enter Your Surename..." />
</FormControl>
        </HStack>
        <FormControl>
  <FormLabel>Email</FormLabel>
  <Input type="email" _placeholder="Enter Your Email..." />
</FormControl>
<FormControl>
  <FormLabel>Message</FormLabel>
  <Textarea _placeholder="Enter Your Message..." />
</FormControl>
<Checkbox defaultChecked >
   <Text fontSize="xs">
   I agree with
   <Box as="span" color="p.purple"> terms & conditions.</Box>
   </Text>
</Checkbox>
<Stack>
    <Button fontSize="sm">Send a Message</Button>
    <Button fontSize="sm" colorScheme="gray">Book a meeting</Button>

</Stack>
       </Stack>
      </Card>
  )
}

export default ContactCard
