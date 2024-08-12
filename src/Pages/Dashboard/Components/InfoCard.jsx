import React from 'react';
import { CustomCard } from '../../../Chakra/CustomCard';
import { Tag, Text } from '@chakra-ui/react';

const InfoCard = ({ imgUrl, text, tagText,  }) => {
  return (
    <CustomCard 
      bgImage={`url(${imgUrl})`} 
      bgSize="cover" 
      bgRepeat="no-repeat"
      p={4}
    >
      <Tag bg="p.purple" color="white" borderRadius="full">{tagText}</Tag>
      <Text textStyle="h5" mt="4" fontWeight="medium">{text}</Text>
    </CustomCard>
  );
}

export default InfoCard;
