// components/AwardsSection.js
'use client'
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from "react";


const AwardsSection = () => {
  return (
    <motion.div className='text-yellow-300 flex' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      
      
      
      <div className='w-1/2'>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
          Our Awards
        </Text>

      </div>
      <div className='w-1/2'>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
          <Text fontSize="xl" fontWeight="bold" mt={8}>
          Matches played
        </Text>
            <Text fontSize="3xl" fontWeight="bold">
              35
            </Text>
            <Text>Goals</Text>
          </GridItem>
          <GridItem>
            <Text fontSize="3xl" fontWeight="bold">
              12
            </Text>
            <Text>Games Played</Text>
          </GridItem>
          <GridItem>
            <Text fontSize="3xl" fontWeight="bold">
              13
            </Text>
            <Text>Violations</Text>
          </GridItem>
        </Grid>
      </div>
      
     
    </motion.div>
  );
};

export default AwardsSection;
