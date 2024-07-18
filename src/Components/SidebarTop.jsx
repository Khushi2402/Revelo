import React from "react";

import layer from "../images/icons/layer.png";
import basemap from "../images/icons/basemap.png";

const SidebarTop = ({ onIconClick }) => {
  return (
    <div>
      <ul className="space-y-1">
        <li>
          <a
            href="#"
            className="block rounded-lg px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200"
            onClick={(e) => {
              e.preventDefault();
              onIconClick("LayerTab");
            }}
          >
            <img src={layer} alt="" />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block rounded-lg px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200"
            onClick={(e) => {
              e.preventDefault();
              onIconClick("BasemapTab");
            }}
          >
            <img src={basemap} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarTop;
