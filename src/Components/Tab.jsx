import React from 'react';
import './Tab.css';
import cancel from '../images/icons/cancel.png';

const Tab = ({ tabs, activeTab, onTabChange, onTabClose }) => {
  return (
    <>
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <div key={tab.name} className="tab-header">
            <button
              onClick={() => onTabChange(tab.name)}
              className={activeTab === tab.name ? "active" : ""}
            >
              {tab.name}
            </button>
            <img
              src={cancel}
              alt="Close"
              className="close-icon"
              onClick={() => onTabClose(tab.name)}
            />
          </div>
        ))}
      </div>
      <div className="tab-container">
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
};

export default Tab;