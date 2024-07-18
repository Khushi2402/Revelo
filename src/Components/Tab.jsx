import React from 'react';
import './Tab.css';

const Tab = ({tabs, activeTab, onTabChange}) => {
  return (
    <>
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => onTabChange(tab.name)}
            className={activeTab === tab.name ? "active" : ""}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className='tab-container'>
        {tabs.map((tab) => (
          <div 
          key={tab.name}
          className={`tab-content ${activeTab === tab.name ? "active" : ""}`}
          >
            {tab.content}
            </div>
        ))}
      </div>
    </>
  );
}

export default Tab;