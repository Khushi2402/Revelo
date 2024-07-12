import React from 'react';
import { layoutConfig } from './layout';
import Dropdown from '../Components/Dropdown';
import Header from '../Components/Header';
import SidebarTop from '../Components/SidebarTop';
import SidebarBottom from '../Components/SidebarBottom';
import MapComp from '../Components/MapComp';
import ToolbarTop from '../Components/ToolbarTop';
import ToolbarBottom from '../Components/ToolbarBottom';


const componentMap = {
    'Header': Header,
    'Dropdown': Dropdown,
    'SidebarTop': SidebarTop,
    'SidebarBottom': SidebarBottom,
    'MapComp': MapComp,
    'ToolbarTop': ToolbarTop,
    'ToolbarBottom': ToolbarBottom
}

const LayoutComponent = () => {
    const renderComponent = (componentName) => {
        const Component = componentMap[componentName];
        return Component ? <Component /> : null;
    };

  return (
    <>
      <div style={{display: 'flex', height: '14vh'}}>
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
              {renderComponent(item.name)}
            </div>
          ))}
        </div>

        {/* center */}
        <div
          style={{
            ...layoutConfig.center.style,
            display: "flex",
            flexDirection: "column",
          }}
        >
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
}

export default LayoutComponent