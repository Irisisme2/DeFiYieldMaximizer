/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdTrendingUp,
  MdPieChart,
  MdInsights,
  MdSecurity,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import Stats from "views/admin/default/components/Stats";
import Tasks from "views/admin/default/components/Tasks";
import RiskManagment from "views/admin/default/components/RiskManagment";
import AutoPortfolioOptimization  from "views/admin/default/components/AutoPortfolioOptimization ";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
  <MiniStatistics
    startContent={
      <IconBox
        w='40px'
        h='40px'
        bg={boxBg}
        icon={
          <Icon w='24px' h='24px' as={MdAttachMoney} color={brandColor} />
        }
      />
    }
    name='Total Portfolio Value'
    value='$350.4'
    nameFontSize='sm'
    valueFontSize='md'
  />
  <MiniStatistics
    startContent={
      <IconBox
        w='40px'
        h='40px'
        bg={boxBg}
        icon={
          <Icon w='24px' h='24px' as={MdBarChart} color={brandColor} />
        }
      />
    }
    name='Current Yield Rate'
    value='12.5%'
    nameFontSize='sm'
    valueFontSize='md'
  />
  <MiniStatistics
    startContent={
      <IconBox
        w='40px'
        h='40px'
        bg={boxBg}
        icon={
          <Icon w='24px' h='24px' as={MdTrendingUp} color={brandColor} />
        }
      />
    }
    name='Daily Earnings'
    value='$25.8'
    nameFontSize='sm'
    valueFontSize='md'
  />
  <MiniStatistics
    startContent={
      <IconBox
        w='40px'
        h='40px'
        bg={boxBg}
        icon={
          <Icon w='24px' h='24px' as={MdPieChart} color={brandColor} />
        }
      />
    }
    name='Asset Allocation'
    value='56% DeFi, 44% Staking'
    nameFontSize='sm'
    valueFontSize='md'
  />
  <MiniStatistics
    startContent={
      <IconBox
        w='40px'
        h='40px'
        bg={boxBg}
        icon={
          <Icon w='24px' h='24px' as={MdInsights} color={brandColor} />
        }
      />
    }
    name='Top Performing Asset'
    value='ETH - 18% APY'
    nameFontSize='sm'
    valueFontSize='md'
  />
  <MiniStatistics
    startContent={
      <IconBox
        w='40px'
        h='40px'
        bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
        icon={<Icon w='20px' h='20px' as={MdAddTask} color='white' />}
      />
    }
    name='New Investment Opportunities'
    value='8'
    nameFontSize='sm'
    valueFontSize='md'
  />
  <MiniStatistics
    startContent={
      <IconBox
        w='40px'
        h='40px'
        bg={boxBg}
        icon={
          <Icon w='24px' h='24px' as={MdSecurity} color={brandColor} />
        }
      />
    }
    name='Risk Assessment Score'
    value='Low'
    nameFontSize='sm'
    valueFontSize='md'
  />
  <MiniStatistics
    endContent={
      <Flex me='-16px' mt='10px'>
        <FormLabel htmlFor='balance'>
          <Avatar src={Usa} />
        </FormLabel>
        <Select
          id='balance'
          variant='mini'
          mt='5px'
          me='0px'
          defaultValue='usd'>
          <option value='usd'>USD</option>
          <option value='eur'>EUR</option>
          <option value='gbp'>GBP</option>
        </Select>
      </Flex>
    }
    name='Your Balance'
    value='$1,000'
    nameFontSize='sm'
    valueFontSize='md'
  />
</SimpleGrid>

<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <RiskManagment />
        <AutoPortfolioOptimization />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <Stats /> 
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <ComplexTable columnsData={columnsDataComplex} tableData={tableDataComplex} />
      </SimpleGrid>
    </Box>
  );
}