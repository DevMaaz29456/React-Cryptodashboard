import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  TableContainer,
  Tr,
  Th,
  Td,
  Stack,
  Text,
  Tag,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { IoSearchCircle } from 'react-icons/io5';

const TransactionTable = () => {
  const tableData = [
    {
      id: 'HD82NA2H',
      date: '2024-04-09',
      time: '7:00 PM',
      type: {
        name: 'INR Deposit',
        tag: 'ETransfer',
      },
      amount: '+81,123,10',
      status: 'pending',
    },
    {
      id: 'HD82NA2H',
      date: '2024-04-04',
      time: '7:00 PM',
      type: {
        name: 'INR Withdraw',
        tag: 'Wire transfer',
      },
      amount: '+81,123,10',
      status: 'processing',
    },
    {
      id: 'HD82NA2H',
      date: '2024-04-04',
      time: '7:00 PM',
      type: {
        name: 'Buy',
        tag: '',
      },
      amount: '+81,123,10',
      status: 'cancelled',
    },
    {
      id: 'HD82NA2H',
      date: '2024-04-12',
      time: '7:00 PM',
      type: {
        name: 'Sell',
        tag: 'ETransfer',
      },
      amount: '+81,123,10',
      status: 'completed',
    },
    {
      id: 'HD82NA2H',
      date: '2024-04-12',
      time: '7:00 PM',
      type: {
        name: 'BTC Deposit',
        tag: 'ETransfer',
      },
      amount: '+81,123,10',
      status: 'completed',
    },
  ];

  const statusColor = {
    pending: '#797E82',
    processing: '#F5A50B',
    completed: '#059669',
    cancelled: '#DC2626',
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box p={4} borderRadius="1rem" boxShadow="md" bg="white">
      <Flex justifyContent="space-between" mb={4} direction={{ base: 'column', md: 'row' }} align="center">
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={{ base: 4, md: 0 }}>
          Transactions
        </Text>
        <InputGroup width={{ base: '100%', md: '300px' }}>
          <InputLeftElement pointerEvents="none">
            <IoSearchCircle color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search Transactions" />
        </InputGroup>
      </Flex>

      {isMobile ? (
        tableData.map((data) => (
          <Box key={data.id} p={4} mb={4} border="1px solid" borderColor="gray.200" borderRadius="md">
            <Stack spacing={1}>
              <Text fontSize="md" fontWeight="medium">
                ID: {data.id}
              </Text>
              <Text fontSize="md" fontWeight="medium">
                Date: {data.date}
              </Text>
              <Text fontSize="md" fontWeight="medium">
                Time: {data.time}
              </Text>
              <Text fontSize="md" fontWeight="medium">
                Type: {data.type.name}
              </Text>
              {data.type.tag && (
                <Text fontSize="md">
                  Tag: {data.type.tag}
                </Text>
              )}
              <Text fontSize="md" fontWeight="medium">
                Amount: {data.amount}
              </Text>
              <Tag bg={statusColor[data.status]} color="white" borderRadius="full">
                {data.status}
              </Tag>
            </Stack>
          </Box>
        ))
      ) : (
        <TableContainer>
          <Table variant="simple" colorScheme="gray">
            <Thead>
              <Tr>
                <Th fontSize="md">ID</Th>
                <Th fontSize="md">Date & Time</Th>
                <Th fontSize="md">Type</Th>
                <Th fontSize="md">Amount</Th>
                <Th fontSize="md">Status</Th>
              </Tr>
            </Thead>
            <Tbody color="p.black">
              {tableData.map((data) => (
                <Tr key={data.id}>
                  <Td fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium">
                    {data.id}
                  </Td>
                  <Td>
                    <Stack spacing={1}>
                      <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium">
                        {data.date}
                      </Text>
                      <Text fontSize={{ base: 'sm', md: 'md' }}>{data.time}</Text>
                    </Stack>
                  </Td>
                  <Td>
                    <Stack spacing={1}>
                      <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium">
                        {data.type.name}
                      </Text>
                      {data.type.tag && (
                        <Text fontSize={{ base: 'sm', md: 'md' }}>{data.type.tag}</Text>
                      )}
                    </Stack>
                  </Td>
                  <Td fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium">
                    {data.amount}
                  </Td>
                  <Td fontSize={{ base: 'sm', md: 'md' }} fontWeight="medium">
                    <Tag bg={statusColor[data.status]} color="white" borderRadius="full">
                      {data.status}
                    </Tag>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default TransactionTable;
