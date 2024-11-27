import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { GiHomeGarage } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import DetailPanel from "./detailPanel";
import SettingsPannel from "./settingsPanel";
import { useSearchParams } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{
        width: "100%",
      }}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

type Tasks = "delete" | "update" | "main";

const panelMaps: {
  [key: string]: number;
} = {
  main: 0,
  settings: 1,
};

const ExcerciseDetail = () => {
  const [searchParams] = useSearchParams();
  let task = searchParams.get("task") as Tasks;
  const [tab, setTab] = useState<number>(task ? panelMaps[task] : 0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Tabs
        variant="scrollable"
        value={tab}
        onChange={handleChange}
        aria-label="icon tabs example"
      >
        <Tab
          label="main"
          iconPosition="start"
          icon={<GiHomeGarage size={30} />}
          aria-label="main"
          {...a11yProps(0)}
        />
        <Tab
          label="settings"
          iconPosition="start"
          icon={<IoSettingsOutline size={30} />}
          aria-label="settings"
          {...a11yProps(1)}
        />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <DetailPanel />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <SettingsPannel />
      </TabPanel>
    </Box>
  );
};

export default ExcerciseDetail;
