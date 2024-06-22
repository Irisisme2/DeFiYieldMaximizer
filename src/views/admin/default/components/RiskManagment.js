import React from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card"; // Assuming you have a Card component
import LineChart from "components/charts/LineChart"; // Assuming you have a LineChart component
import { IoWarning } from "react-icons/io5"; // Icon for alerts
import { MdOutlineCalendarToday, MdBarChart } from "react-icons/md"; // Import MdOutlineCalendarToday and MdBarChart

// Example line chart data and options (you can adjust these to fit your data)
const lineChartDataRisk = [
  {
    name: "Risk Score",
    data: [80, 70, 60, 50, 40, 30],
  },
];

const lineChartOptionsRisk = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#FF6347",
    },
  },
  colors: ["#FF6347"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#FF6347",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"], // Example months
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      colors: ["#FF6347"],
      opacity: 0.5,
    },
  },
  color: ["#FF6347"],
};

const RiskManagement = ({ ...rest }) => {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");

  return (
    <Card
      justifyContent="center"
      align="center"
      direction="column"
      w="100%"
      mb="0px"
      {...rest}
    >
      <Flex justify="space-between" ps="0px" pe="20px" pt="5px">
        <Flex align="center" w="100%">
          <Button
            bg="secondaryGray.300"
            fontSize="sm"
            fontWeight="500"
            color={textColorSecondary}
            borderRadius="7px"
          >
            <Icon
              as={MdOutlineCalendarToday}
              color={textColorSecondary}
              me="4px"
            />
            This month
          </Button>
          <Button
            ms="auto"
            align="center"
            justifyContent="center"
            bg="secondaryGray.300"
            _hover={{ bg: "secondaryGray.400" }}
            _focus={{ bg: "secondaryGray.300" }}
            _active={{ bg: "secondaryGray.300" }}
            w="37px"
            h="37px"
            lineHeight="100%"
            borderRadius="10px"
            {...rest}
          >
            <Icon as={MdBarChart} color="brand.500" w="24px" h="24px" />
          </Button>
        </Flex>
      </Flex>
      <Flex w="100%" flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection="column" me="20px" mt="28px">
          <Text
            color={textColor}
            fontSize="34px"
            textAlign="start"
            fontWeight="700"
            lineHeight="100%"
          >
            Risk Assessment Score
          </Text>
          <Flex align="center" mb="20px">
            <Text
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
              mt="4px"
              me="12px"
            >
              Risk Management Settings
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={IoWarning} color="red.500" me="4px" />
            <Text color="red.500" fontSize="md" fontWeight="700">
              Alerts and Notifications
            </Text>
          </Flex>
        </Flex>
        <Box minH="260px" minW="75%" mt="auto">
          <LineChart chartData={lineChartDataRisk} chartOptions={lineChartOptionsRisk} />
        </Box>
      </Flex>
    </Card>
  );
};

export default RiskManagement;
