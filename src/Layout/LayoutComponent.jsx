import React, { useState } from "react";
import { layoutConfig as initialConfig } from "./layout";
import Dropdown from "../Components/Dropdown";
import Header from "../Components/Header";
import SidebarTop from "../Components/SidebarTop";
import SidebarBottom from "../Components/SidebarBottom";
import MapComp from "../Components/MapComp";
import ToolbarTop from "../Components/ToolbarTop";
import ToolbarBottom from "../Components/ToolbarBottom";
import Tab from "../Components/Tab";

const componentMap = {
  Header: Header,
  Dropdown: Dropdown,
  SidebarTop: SidebarTop,
  SidebarBottom: SidebarBottom,
  ToolbarTop: ToolbarTop,
  ToolbarBottom: ToolbarBottom,
  Tab: Tab,
};

const LayoutComponent = () => {
  const [coordinates, setCoordinates] = useState([79.0882, 21.1458]); // Default to Nagpur coordinates
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  const handleIconClick = (tabName) => {
    if (!tabs.find((tab) => tab.name === tabName)) {
      setTabs([...tabs, {name: tabName, content: renderComponent(tabName)}]);
    }
    setActiveTab(tabName);
    setIsTabOpen(true);
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  }

  const layoutConfig = {
    ...initialConfig,
    center: {
      ...initialConfig.center,
      style: {
        ...initialConfig.center.style,
        width: isTabOpen ? "82%" : "94%",
      },
    },
    lhs: {
      ...initialConfig.lhs,
      component: [
        {
          name: "SidebarTop",
          style: {
            height: "100%",
          },
        },
        {
          name: "SidebarBottom",
          style: {
            height: "100%",
          },
        },
      ],
      style: {
        width: "3%",
        height: "100%",
      },
    },
    tab: {
      component: [
        {
          name: "Tab",
          style: {
            width: "100%",
            height: "100%",
          },
        },
      ],
      style: {
        width: isTabOpen ? "12%" : "0%",
        height: "100%",
        display: isTabOpen ? "flex" : "none",
      },
    },
  };

  const renderComponent = (componentName) => {
    const Component = componentMap[componentName];
    return Component ? <Component setCoordinates={setCoordinates} /> : null;
  };

  return (
    <>
      <div style={{ display: "flex", height: "14vh" }}>
        {/* Header */}
        <div
          style={{
            ...layoutConfig.header.style,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {layoutConfig.header.component.map((item, index) => (
            <div key={index} style={item.style}>
              {renderComponent(item.name)}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", height: "86vh" }}>
        {/* lhs */}
        <div
          style={{
            ...layoutConfig.lhs.style,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {layoutConfig.lhs.component.map((item, index) => (
            <div key={index} style={item.style}>
              {componentMap[item.name]
                ? React.createElement(componentMap[item.name], {
                    onIconClick: handleIconClick,
                  })
                : null}
            </div>
          ))}
        </div>

        {/* tab */}
        <div
          style={{
            ...layoutConfig.tab.style,
            display: layoutConfig.tab.style.display,
            flexDirection: "column",
          }}
        >
          <Tab 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          />
        </div>

        {/* center */}
        <div
          style={{
            ...layoutConfig.center.style,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden", // Ensure the content does not overflow
          }}
        >
          {/* MapComp directly rendered here with coordinates prop */}
          <div style={{ flex: 1, width: "100%", height: "100%" }}>
            <MapComp coordinates={coordinates} className={isTabOpen ? "map-open" : "map-closed"}/>
          </div>
          {layoutConfig.center.component.map((item, index) => (
            <div key={index} style={item.style}>
              {renderComponent(item.name)}
            </div>
          ))}
        </div>

        {/* rhs */}
        <div
          style={{
            ...layoutConfig.rhs.style,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {layoutConfig.rhs.component.map((item, index) => (
            <div key={index} style={item.style}>
              {renderComponent(item.name)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LayoutComponent;
