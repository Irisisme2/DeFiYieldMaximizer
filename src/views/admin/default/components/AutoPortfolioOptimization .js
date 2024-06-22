import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card"; // Assuming Card component is imported correctly

const AutoPortfolioOptimization = ({ currentAllocation, suggestedStrategy }) => {
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Card p={6} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading as="h2" size="md" mb={4} color={textColor}>
        Automatic Portfolio Optimization 🔄
      </Heading>
      <Flex direction="column" mb={4}>
        <Text color={textColor} mb={2}>
          Current portfolio allocation:
        </Text>
        <Text fontWeight="bold" mb={2} color={textColor}>
          {currentAllocation}
        </Text>
      </Flex>
      <Flex direction="column" mb={4}>
        <Text color={textColor} mb={2}>
          Suggested reallocation strategy:
        </Text>
        <Text fontWeight="bold" mb={2} color={textColor}>
          {suggestedStrategy}
        </Text>
      </Flex>
      <Button colorScheme="blue" alignSelf="flex-end">
        Rebalance Portfolio
      </Button>
    </Card>
  );
};

export default AutoPortfolioOptimization;
