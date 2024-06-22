import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  Progress,
  useToast,
} from "@chakra-ui/react";
import Card from "components/card/Card"; // Assuming you have a Card component
import { MdRefresh } from "react-icons/md";

const PortfolioInsights = () => {
  const { data, isLoading, isError, fetchData } = usePortfolioData(); // Custom hook to fetch portfolio data
  const toast = useToast();
  const [portfolioAllocation, setPortfolioAllocation] = useState(data.allocation);
  const [portfolioPerformance, setPortfolioPerformance] = useState(data.performance);

  // Function to handle refreshing portfolio data
  const refreshPortfolioData = () => {
    fetchData().then((newData) => {
      setPortfolioAllocation(newData.allocation);
      setPortfolioPerformance(newData.performance);
      toast({
        title: "Portfolio data refreshed",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });
  };

  // Function to adjust allocation
  const handleAdjustAllocation = (asset, newAllocation) => {
    const updatedAllocation = portfolioAllocation.map((item) =>
      item.asset === asset ? { ...item, allocation: newAllocation } : item
    );
    setPortfolioAllocation(updatedAllocation);
  };

  return (
    <Card p={6} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading as="h2" size="md" mb={4}>
        Portfolio Insights 📊
      </Heading>
      <Flex direction="column" mb={4}>
        <Text mb={2}>Current portfolio allocation:</Text>
        {portfolioAllocation.map((item, index) => (
          <Flex key={index} justify="space-between" align="center" mb={2}>
            <Text>{item.asset}:</Text>
            <Flex align="center">
              <Text fontWeight="bold">{item.allocation}%</Text>
              <Button
                size="sm"
                colorScheme="blue"
                onClick={() => handleAdjustAllocation(item.asset, item.allocation + 5)}
                ml={2}
              >
                Increase
              </Button>
              <Button
                size="sm"
                colorScheme="red"
                onClick={() => handleAdjustAllocation(item.asset, item.allocation - 5)}
                ml={2}
              >
                Decrease
              </Button>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Flex direction="column" mb={4}>
        <Text mb={2}>Portfolio performance:</Text>
        <Flex justify="space-between" align="center" mb={2}>
          <Text>Annual return:</Text>
          <Text fontWeight="bold">{portfolioPerformance.annualReturn}%</Text>
        </Flex>
        <Flex justify="space-between" align="center" mb={2}>
          <Text>Quarterly profit:</Text>
          <Text fontWeight="bold">{portfolioPerformance.quarterlyProfit}%</Text>
        </Flex>
        <Flex justify="space-between" align="center">
          <Text>Health status:</Text>
          <Text fontWeight="bold">{portfolioPerformance.healthStatus}</Text>
        </Flex>
      </Flex>
      <Button
        colorScheme="teal"
        alignSelf="flex-end"
        leftIcon={<MdRefresh />}
        onClick={refreshPortfolioData}
      >
        Refresh Data
      </Button>
    </Card>
  );
};

// Example custom hook to fetch portfolio data
const usePortfolioData = () => {
  const [data, setData] = useState({
    allocation: [
      { asset: "Stocks", allocation: 50 },
      { asset: "Bonds", allocation: 30 },
      { asset: "Real Estate", allocation: 20 },
    ],
    performance: {
      annualReturn: 8,
      quarterlyProfit: 2,
      healthStatus: "Stable",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Simulated data fetching function
  const fetchData = () => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsLoading(false);
        resolve({
          allocation: [
            { asset: "Stocks", allocation: 55 },
            { asset: "Bonds", allocation: 25 },
            { asset: "Real Estate", allocation: 20 },
          ],
          performance: {
            annualReturn: 7.5,
            quarterlyProfit: 1.5,
            healthStatus: "Stable",
          },
        });
      }, 2000); // Simulating API call delay
    });
  };

  return { data, isLoading, isError, fetchData };
};

export default PortfolioInsights;
