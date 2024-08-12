import { Box, Button, Card, Checkbox, Flex, FormControl, FormLabel, HStack, Icon, Input, Stack, StackDivider, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { IoMdMailUnread } from 'react-icons/io'

const SupportCard = ({ leftComponent, icon, title, text     }) => {
  return (
    <Flex gap={6} flexDir={
        {
            base: "column",
            xl: "row",
        }
    }> 
      <Stack maxW="380px">
        <Icon as={IoMdMailUnread} boxSize={6} color="p.purple"/>
        <Text as="h1" fontWeight="medium" textStyle="h1">Contact Us</Text>
        <Text fontSize="sm" color="black.60">Have a question or just wants to know more? Feel free to reach out to us.</Text>
      </Stack>
      {leftComponent}
       
    </Flex>
  )
}

export default SupportCard
