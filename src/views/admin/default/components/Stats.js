import React from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";
import { MdCancel, } from "react-icons/md"; // Import MdOutlineCalendarToday and MdBarChart

// Example data for real-time insights and analysis
const performanceData = {
  returnRate: "+3.5%",
  profitLoss: "$12.5K",
};

const healthStatus = {
  protocols: [
    {
      name: "Protocol A",
      status: "Active",
    },
    {
      name: "Protocol B",
      status: "Inactive",
    },
    {
      name: "Protocol C",
      status: "Active",
    },
  ],
};

const marketTrends = [
  {
    channel: "News",
    trend: "Positive",
  },
  {
    channel: "Social Media",
    trend: "Neutral",
  },
];

// Chart data
const lineChartDataTotalSpent = [
  {
    name: "Return Rate",
    data: [3, 3.5, 4, 4.5, 5, 5.5],
  },
  {
    name: "Profit/Loss",
    data: [12, 12.5, 13, 13.5, 14, 14.5],
  },
];

const lineChartOptionsTotalSpent = {
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
      color: "#4318FF",
    },
  },
  colors: ["#4318FF", "#39B8FF"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#7551FF",
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
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
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
      color: ["#7551FF", "#39B8FF"],
      opacity: 0.5,
    },
  },
  color: ["#7551FF", "#39B8FF"],
};

export default function TotalSpent(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );

  return (
    <Card
      justifyContent='center'
      align='center'
      direction='column'
      w='100%'
      mb='0px'
      {...rest}
    >
      <Flex justify='space-between' ps='0px' pe='20px' pt='5px'>
        <Flex align='center' w='100%'>
          <Button
            bg={boxBg}
            fontSize='sm'
            fontWeight='500'
            color={textColorSecondary}
            borderRadius='7px'
          >
            <Icon
              as={MdOutlineCalendarToday}
              color={textColorSecondary}
              me='4px'
            />
            This month
          </Button>
          <Button
            ms='auto'
            align='center'
            justifyContent='center'
            bg={bgButton}
            _hover={bgHover}
            _focus={bgFocus}
            _active={bgFocus}
            w='37px'
            h='37px'
            lineHeight='100%'
            borderRadius='10px'
            {...rest}
          >
            <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
          </Button>
        </Flex>
      </Flex>
      <Flex w='100%' flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection='column' me='20px' mt='28px'>
          <Text
            color={textColor}
            fontSize='34px'
            textAlign='start'
            fontWeight='700'
            lineHeight='100%'
          >
            {performanceData.profitLoss}
          </Text>
          <Flex align='center' mb='20px'>
            <Text
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'
              mt='4px'
              me='12px'
            >
              Profit/Loss
            </Text>
            <Flex align='center'>
              <Icon as={RiArrowUpSFill} color='green.500' me='2px' mt='2px' />
              <Text color='green.500' fontSize='sm' fontWeight='700'>
                {performanceData.returnRate}
              </Text>
            </Flex>
          </Flex>

          <Flex align='center'>
            <Icon as={IoCheckmarkCircle} color='green.500' me='4px' />
            <Text color='green.500' fontSize='md' fontWeight='700'>
              On track
            </Text>
          </Flex>
        </Flex>
        <Box minH='260px' minW='75%' mt='auto'>
          <LineChart
            chartData={lineChartDataTotalSpent}
            chartOptions={lineChartOptionsTotalSpent}
          />
        </Box>
      </Flex>
      <Flex flexDirection='column' mt='28px' w='100%'>
        <Text
          color={textColor}
          fontSize='22px'
          textAlign='start'
          fontWeight='700'
          mb='16px'
        >
          Health Status of Protocols
        </Text>
        {healthStatus.protocols.map((protocol, index) => (
          <Flex key={index} align='center' mb='10px'>
            <Icon
              as={protocol.status === "Active" ? IoCheckmarkCircle : MdCancel}
              color={protocol.status === "Active" ? "green.500" : "red.500"}
              me='4px'
            />
            <Text color={textColor} fontSize='md' fontWeight='700'>
              {protocol.name}: {protocol.status}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Flex flexDirection='column' mt='28px' w='100%'>
        <Text
          color={textColor}
          fontSize='22px'
          textAlign='start'
          fontWeight='700'
          mb='16px'
        >
          Market Trends and News Feed
        </Text>
        {marketTrends.map((trend, index) => (
          <Flex key={index} align='center' mb='10px'>
            <Text color={textColor} fontSize='md' fontWeight='700'>
              {trend.channel}: {trend.trend}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Card>
  );
}
