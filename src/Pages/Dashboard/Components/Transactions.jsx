import React from 'react';
import { CustomCard } from '../../../Chakra/CustomCard';
import { Box, Button, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { FaBtc, FaRupeeSign } from 'react-icons/fa';

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timeStamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timeStamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timeStamp: "2022-06-09 7:06 PM",
    },
  ];

  return (
    <CustomCard h="full" >
      <Text mb="6" fontSize="sm" color="p.80">Recent Transactions</Text>
      <Stack>
        {transactions.map((transaction) => (
          <Flex key={transaction.id} align="center" justify="space-between" py={2}>
            <Flex align="center">
              <Box boxSize={10} borderRadius="full" bg="gray.200" display="flex" alignItems="center" justifyContent="center">
                <Icon as={transaction.icon} boxSize={6} />
              </Box>
              <Stack ml={4}>
                <Text textStyle="h6" fontWeight="bold">{transaction.text}</Text>
                <Text fontSize="xs" color="gray.500">{transaction.timeStamp}</Text>
              </Stack>
            </Flex>
            <Text fontWeight="bold">{transaction.amount}</Text>
          </Flex>
        ))}
      </Stack>
      <Button width="full" mt="6" colorScheme="gray">View All</Button>
    </CustomCard>
  );
}

export default Transactions;
