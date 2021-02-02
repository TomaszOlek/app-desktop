import React, { useState } from "react";
import { Tabs, Tab, TabList, TabPanel, TabPanelList } from "@blend-ui/tabs";
import { Box, Text } from "@blend-ui/core";

export default { title: "Tabs" };

export const tabs = () => {
  // eslint-disable-next-line
  const [activeTab, setActiveTab] = useState(0);
  const tabClick = (e, tab) => {
    console.log("Click", e);
    console.log("TAB", tab);
    setActiveTab(tab);
  };

  return (
    <Tabs activeTab={activeTab} onClick={tabClick} title={"Account Settings"}>
      <TabList>
        <Tab>User Details</Tab>
        <Tab test={true}>Usage</Tab>
        <Tab>Settings</Tab>
        <Tab>Settings2</Tab>
        <Tab>Settings3</Tab>
      </TabList>
      <TabPanelList>
        <TabPanel>
          <Box>
            <Text colorStyle={"error"}>Testing</Text>
          </Box>
        </TabPanel>
        <TabPanel>Toka panel</TabPanel>
        <TabPanel>Kolmas panel</TabPanel>
        <TabPanel>Kolmas2 panel</TabPanel>
        <TabPanel>Kolmas3 panel</TabPanel>
      </TabPanelList>
    </Tabs>
  );
};
tabs.story = {
  name: "Tabs",
};
