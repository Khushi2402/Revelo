import React from 'react'

import location from '../images/icons/location.png';
import geocode from '../images/icons/geocode.png';
import bookmark from '../images/icons/bookmark.png';
import measure  from '../images/icons/measure.png';
const ToolbarTop = () => {
  return (
    <div>
      <ul className="space-y-1">
        <li>
          <a
            href="#"
            className="block rounded-lg px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200"
          >
            <img src={location} alt="" className="w-8"/>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block rounded-lg px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200"
          >
            <img src={geocode} alt="" className="w-8"/>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block rounded-lg px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200"
          >
            <img src={bookmark} alt="" className="w-8"/>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block rounded-lg px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200"
          >
            <img src={measure} alt="" className="w-8"/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ToolbarTop