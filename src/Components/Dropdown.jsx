import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const state = [{ name: "Maharashtra", href: "#" }];

const district = [
  { name: "Nagpur", href: "#", coordinates: [79.0882, 21.1458] },
  { name: "Pune", href: "#", coordinates: [73.8567, 18.5204] },
  { name: "Mumbai", href: "#", coordinates: [72.8777, 19.076] },
  { name: "Thane", href: "#", coordinates: [72.9781, 19.2183] },
  { name: "Nashik", href: "#", coordinates: [73.7898, 19.9975] },
  { name: "Aurangabad", href: "#", coordinates: [75.3433, 19.8762] },
  { name: "Kolhapur", href: "#", coordinates: [74.2433, 16.705] },
  { name: "Amravati", href: "#", coordinates: [77.7523, 20.932] },
  { name: "Solapur", href: "#", coordinates: [75.9064, 17.6599] },
  { name: "Satara", href: "#", coordinates: [74.0183, 17.6805] },
];

const taluka = [
  { name: "Nagpur Rural", href: "#" },
  { name: "Nagpur Urban", href: "#" },
  { name: "Hingna", href: "#" },
  { name: "Kamptee", href: "#" },
  { name: "Katol", href: "#" },
  { name: "Kalmeshwar", href: "#" },
  { name: "Saoner", href: "#" },
  { name: "Umred", href: "#" },
  { name: "Bhiwapur", href: "#" },
  { name: "Narkhed", href: "#" },
];

const Dropdown = ({setCoordinates}) => {
  const [selectedState, setSelectedState] = useState(state[0].name);
  const [selectedDistrict, setSelectedDistrict] = useState(district[0].name);
  const [selectedTaluka, setSelectedTaluka] = useState(taluka[0].name);

  const handleClear = () => {
    setSelectedState(state[0].name);
    setSelectedDistrict(district[0].name);
    setSelectedTaluka(taluka[0].name);
    setCoordinates(district[0].coordinates);
  };

  const handleDistrictSelect = (item) => {
    setSelectedDistrict(item.name);
    setCoordinates(item.coordinates); // Update coordinates on district select
  };

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto px-4 py-1">
          <div className="flex items-end">
            <div className="flex gap-5">
              <div>
                <h1 className="flex">State</h1>
                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton className="inline-flex w-40 justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {selectedState}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-gray-400"
                    />
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {state.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          onClick={() => setSelectedState(item.name)}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
              <div>
                <h1 className="flex">District</h1>
                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton className="inline-flex w-40 justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {selectedDistrict}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-gray-400"
                    />
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {district.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          onClick={() => handleDistrictSelect(item)}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
              <div>
                <h1 className="flex">Taluka</h1>
                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton className="inline-flex w-40 justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {selectedTaluka}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-gray-400"
                    />
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {taluka.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          onClick={() => setSelectedTaluka(item.name)}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
              <div className="flex items-end">
                <a
                  className="inline-block rounded border border-current px-4 py-2 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
                  href="#"
                  onClick={handleClear}
                >
                  Clear
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Dropdown;
