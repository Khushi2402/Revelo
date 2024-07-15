import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const state = [{ name: "Maharashtra", href: "#" }];

const district = [ 
  {
    name: "Nagpur",
    href: "#",
    coordinates: [79.0882, 21.1458],
    talukas: [
      { name: "Nagpur Rural", href: "#", coordinates: [79.0997, 21.1557] },
      { name: "Nagpur Urban", href: "#", coordinates: [79.0882, 21.1458] },
      { name: "Hingna", href: "#", coordinates: [79.0658, 21.1652] },
      { name: "Kamptee", href: "#", coordinates: [79.1728, 21.2805] },
      { name: "Katol", href: "#", coordinates: [79.5258, 21.357] },
      { name: "Kalmeshwar", href: "#", coordinates: [79.0695, 21.1522] },
      { name: "Saoner", href: "#", coordinates: [79.1103, 21.2564] },
      { name: "Umred", href: "#", coordinates: [79.1861, 21.287] },
      { name: "Bhiwapur", href: "#", coordinates: [79.2587, 21.1888] },
      { name: "Narkhed", href: "#", coordinates: [79.2331, 21.3142] },
    ],
  },
  {
    name: "Pune",
    href: "#",
    coordinates: [73.8567, 18.5204],
    talukas: [
      { name: "Pune City", href: "#", coordinates: [73.8567, 18.5204] },
      { name: "Haveli", href: "#", coordinates: [73.8686, 18.5291] },
      { name: "Pimpri-Chinchwad", href: "#", coordinates: [73.8194, 18.627] },
      { name: "Khed", href: "#", coordinates: [73.809, 18.6608] },
      { name: "Mulshi", href: "#", coordinates: [73.8042, 18.6175] },
      { name: "Maval", href: "#", coordinates: [73.7236, 18.6475] },
    ],
  },
  {
    name: "Mumbai",
    href: "#",
    coordinates: [72.8777, 19.076],
    talukas: [
      { name: "Mumbai City", href: "#", coordinates: [72.8777, 19.076] },
      { name: "Mumbai Suburban", href: "#", coordinates: [72.8977, 19.0935] },
      { name: "Andheri", href: "#", coordinates: [72.832, 19.135] },
      { name: "Bandra", href: "#", coordinates: [72.8356, 19.0658] },
      { name: "Borivali", href: "#", coordinates: [72.8489, 19.2294] },
      { name: "Dadar", href: "#", coordinates: [72.8356, 19.0372] },
    ],
  },
  {
    name: "Thane",
    href: "#",
    coordinates: [72.9781, 19.2183],
    talukas: [
      { name: "Thane City", href: "#", coordinates: [72.9781, 19.2183] },
      { name: "Kalyan", href: "#", coordinates: [73.1364, 19.2464] },
      { name: "Dombivli", href: "#", coordinates: [73.0801, 19.2212] },
      { name: "Bhiwandi", href: "#", coordinates: [73.0425, 19.3032] },
      { name: "Ulhasnagar", href: "#", coordinates: [73.1569, 19.2147] },
      { name: "Mira-Bhayandar", href: "#", coordinates: [72.873, 19.2864] },
    ],
  },
  {
    name: "Nashik",
    href: "#",
    coordinates: [73.7898, 19.9975],
    talukas: [
      { name: "Nashik City", href: "#", coordinates: [73.7898, 19.9975] },
      { name: "Sinnar", href: "#", coordinates: [73.8314, 20.0055] },
      { name: "Deola", href: "#", coordinates: [73.8704, 20.0175] },
      { name: "Igatpuri", href: "#", coordinates: [73.6575, 19.6534] },
      { name: "Satana", href: "#", coordinates: [73.53, 20.1648] },
      { name: "Malegaon", href: "#", coordinates: [73.8255, 20.5533] },
    ],
  },
  {
    name: "Aurangabad",
    href: "#",
    coordinates: [75.3433, 19.8762],
    talukas: [
      { name: "Aurangabad City", href: "#", coordinates: [75.3433, 19.8762] },
      { name: "Paithan", href: "#", coordinates: [75.497, 19.7793] },
      { name: "Jalna", href: "#", coordinates: [75.8255, 19.8312] },
      { name: "Sillod", href: "#", coordinates: [75.6588, 19.687] },
      { name: "Kannad", href: "#", coordinates: [75.5169, 19.7088] },
      {
        name: "Chhatrapati Sambhajinagar",
        href: "#",
        coordinates: [75.3433, 19.8762],
      },
    ],
  },
  {
    name: "Kolhapur",
    href: "#",
    coordinates: [74.2433, 16.705],
    talukas: [
      { name: "Kolhapur City", href: "#", coordinates: [74.2433, 16.705] },
      { name: "Radhanagari", href: "#", coordinates: [74.5008, 16.7689] },
      { name: "Panhala", href: "#", coordinates: [74.2278, 16.7893] },
      { name: "Hatkanangale", href: "#", coordinates: [74.3215, 16.6784] },
      { name: "Karvir", href: "#", coordinates: [74.2358, 16.7025] },
      { name: "Gargoti", href: "#", coordinates: [74.233, 16.666] },
    ],
  },
  {
    name: "Amravati",
    href: "#",
    coordinates: [77.7523, 20.932],
    talukas: [
      { name: "Amravati City", href: "#", coordinates: [77.7523, 20.932] },
      { name: "Morshi", href: "#", coordinates: [77.8174, 20.9381] },
      { name: "Warud", href: "#", coordinates: [77.6336, 20.8727] },
      { name: "Chikhaldara", href: "#", coordinates: [77.2936, 21.2281] },
      { name: "Teosa", href: "#", coordinates: [77.7523, 20.932] },
      {
        name: "Dhamangaon Railway",
        href: "#",
        coordinates: [77.7024, 20.8825],
      },
    ],
  },
  {
    name: "Solapur",
    href: "#",
    coordinates: [75.9064, 17.6599],
    talukas: [
      { name: "Solapur City", href: "#", coordinates: [75.9064, 17.6599] },
      { name: "Karmala", href: "#", coordinates: [75.7641, 17.5168] },
      { name: "Barshi", href: "#", coordinates: [75.5691, 17.3336] },
      { name: "Mangalvedhe", href: "#", coordinates: [75.804, 17.531] },
      { name: "Pandharpur", href: "#", coordinates: [75.3331, 17.5642] },
      { name: "Solapur South", href: "#", coordinates: [75.9064, 17.6599] },
    ],
  },
  {
    name: "Satara",
    href: "#",
    coordinates: [74.0183, 17.6805],
    talukas: [
      { name: "Satara City", href: "#", coordinates: [74.0183, 17.6805] },
      { name: "Karad", href: "#", coordinates: [74.1376, 17.4172] },
      { name: "Koregaon", href: "#", coordinates: [74.0248, 17.6682] },
      { name: "Mahabaleshwar", href: "#", coordinates: [73.744, 17.9183] },
      { name: "Patan", href: "#", coordinates: [74.0045, 17.6805] },
      { name: "Wai", href: "#", coordinates: [73.9671, 17.929] },
    ],
  },
];

const Dropdown = ({setCoordinates}) => {
  const [selectedState, setSelectedState] = useState(state[0].name);
  const [selectedDistrict, setSelectedDistrict] = useState(district[0].name);
  const [selectedTaluka, setSelectedTaluka] = useState();

  const handleClear = () => {
    setSelectedState(state[0].name);
    setSelectedDistrict(district[0].name);
    setSelectedTaluka("");
    setCoordinates(district[0].coordinates);
  };

  const handleDistrictSelect = (item) => {
    setSelectedDistrict(item.name);
    setSelectedTaluka("");
    setCoordinates(item.coordinates); // Update coordinates on district select
  };

  const handleTalukaSelect = (item) => {
    setSelectedTaluka(item.name);
    setCoordinates(item.coordinates); // Update coordinates on taluka select
  }

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
                    {selectedTaluka || "Select Taluka"}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-gray-400"
                    />
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    {district.find(d => d.name === selectedDistrict)?.talukas.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          onClick={() => handleTalukaSelect(item)}
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
