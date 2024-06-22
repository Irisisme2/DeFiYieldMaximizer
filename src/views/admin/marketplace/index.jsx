import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Select,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import { MdTrendingUp, MdSearch } from "react-icons/md";

// Example yield farming data
const yieldFarmingOpportunities = [
  {
    name: "Farm A",
    apy: "15%",
    liquidity: "$1.2M",
    status: "Active",
    details: "Farm A is a stablecoin yield farming opportunity with moderate risk.",
  },
  {
    name: "Farm B",
    apy: "20%",
    liquidity: "$850K",
    status: "Inactive",
    details: "Farm B offers high APY but is currently inactive.",
  },
  {
    name: "Farm C",
    apy: "10%",
    liquidity: "$2.3M",
    status: "Active",
    details: "Farm C is a low-risk yield farming opportunity with large liquidity.",
  },
];

const YieldFarming = () => {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "light" ? "gray.900" : "white";
  const textColorSecondary = colorMode === "light" ? "gray.600" : "white";
  const boxBg = colorMode === "light" ? "white" : "gray.700";
  const buttonBg = "blue.500";
  const buttonTextColor = "white";

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("apy");

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSortChange = (e) => setSortBy(e.target.value);

  const filteredAndSortedOpportunities = yieldFarmingOpportunities
    .filter((opportunity) =>
      opportunity.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "apy") {
        return parseFloat(b.apy) - parseFloat(a.apy);
      } else if (sortBy === "liquidity") {
        return (
          parseFloat(b.liquidity.slice(1).replace(/,/g, "")) -
          parseFloat(a.liquidity.slice(1).replace(/,/g, ""))
        );
      }
      return 0;
    });

  return (
    <VStack spacing={5} w="100%">
      <Text
        color={textColor}
        fontSize="2xl"
        fontWeight="700"
        lineHeight="100%"
        mb={4}
      >
        Yield Farming Opportunities 🌾
      </Text>
      <Flex w="100%" mb={4} align="center">
        <Input
          placeholder="Search opportunities..."
          value={searchTerm}
          onChange={handleSearchChange}
          mr={2}
          bg={boxBg}
        />
        <Select value={sortBy} onChange={handleSortChange} bg={boxBg}>
          <option value="apy">Sort by APY</option>
          <option value="liquidity">Sort by Liquidity</option>
        </Select>
      </Flex>
      {filteredAndSortedOpportunities.map((opportunity, index) => (
        <Card
          key={index}
          p={6}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          bg={boxBg}
          w="100%"
        >
          <Flex direction="column" mb={4}>
            <Text color={textColorSecondary} mb={2}>
              {opportunity.name}
            </Text>
            <Flex align="center" mb={2}>
              <Icon as={MdTrendingUp} color="green.500" mr={2} />
              <Text color={textColor} fontWeight="bold">
                APY: {opportunity.apy}
              </Text>
            </Flex>
            <Text color={textColorSecondary} mb={2}>
              Liquidity: {opportunity.liquidity}
            </Text>
            <Text
              color={
                opportunity.status === "Active" ? "green.500" : "red.500"
              }
              fontWeight="bold"
              mb={2}
            >
              Status: {opportunity.status}
            </Text>
            <Text color={textColorSecondary} mb={2}>
              {opportunity.details}
            </Text>
          </Flex>
          <Button
            bg={buttonBg}
            color={buttonTextColor}
            _hover={{
              bg: "blue.600",
            }}
            alignSelf="flex-end"
          >
            Invest Now
          </Button>
        </Card>
      ))}
    </VStack>
  );
};

export default YieldFarming;
