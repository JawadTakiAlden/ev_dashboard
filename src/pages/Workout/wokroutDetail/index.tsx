import React from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { CgHome } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import WorkOutDetailPage from "./workoutDetail";
import SettingsPannel from "./SettingsPannel";

const MainWorkoutDetail = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab
                iconPosition="end"
                label="Main"
                icon={<CgHome size={30} />}
                value="1"
              />
              <Tab
                iconPosition="end"
                label="Settings"
                icon={<IoSettings size={30} />}
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ px: 0 }}>
            <WorkOutDetailPage />
          </TabPanel>
          <TabPanel value="2" sx={{ px: 0 }}>
            <SettingsPannel />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default MainWorkoutDetail;
