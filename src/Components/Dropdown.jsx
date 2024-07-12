import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const state = [{ name: "Maharashtra", href: "#" }];

const district = [
  { name: "Nagpur", href: "#" },
  { name: "Pune", href: "#" },
  { name: "Mumbai", href: "#" },
  { name: "Thane", href: "#" },
  { name: "Nashik", href: "#" },
  { name: "Aurangabad", href: "#" },
  { name: "Kolhapur", href: "#" },
  { name: "Amravati", href: "#" },
  { name: "Solapur", href: "#" },
  { name: "Satara", href: "#" },
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

const Dropdown = ({ name }) => {
  
  const [selectedState, setSelectedState] = useState(state[0].name);
  const [selectedDistrict, setSelectedDistrict] = useState(district[0].name);
  const [selectedTaluka, setSelectedTaluka] = useState(taluka[0].name);

  const handleClear = () => {
    setSelectedState(state[0].name);
    setSelectedDistrict(district[0].name);
    setSelectedTaluka(taluka[0].name);
  };
  
  return (
    <header className="bg-white shadow">
      <div className="mx-auto px-4 py-1">
        <div className="flex items-end ">
          <div className="flex gap-5">
            <div>
              <h1 className="flex">State</h1>
              <Menu as="div" className="relative inline-block text-left ">
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
              <Menu as="div" className="relative inline-block text-left ">
                <MenuButton className="inline-flex w-40 justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  {selectedDistrict}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-gray-400"
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute  z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {district.map((item) => (
                    <MenuItem key={item.name}>
                      <a
                        href={item.href}
                        onClick={() => setSelectedDistrict(item.name)}
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
              <Menu as="div" className="relative inline-block text-left ">
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
          </div>
          <div className="ml-4 flex items-center gap-4">
            <a
              className="inline-block rounded bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:scale-105 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              href="#"
            >
              Apply
            </a>
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
    </header>
  );
};

export default Dropdown;
