import React, { useState } from "react";
import Modal from "react-modal";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import cancel from "../images/icons/cancel.png";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const AboutModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
          </MenuButton>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                JSTALUKAUSER
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                onClick={openModal}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                About
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Log Out
              </a>
            </MenuItem>
          </MenuItems>
        </div>
      </Menu>
      <Modal
        isOpen={modalIsOpen}
        onAftrOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>
          <img src={cancel} className="h-8 w-8" />
        </button>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>About</h2>

        <div>Revelo</div>
        <p>
          Revelo is a Spatial Decision Support System that helps organizations
          visualize, analyze, collect and understand data in the context of
          their business domain and make fruitful use of those data to make
          decisions. Revelo improves decision making capabilities and brings
          forth unique insights to help you make quicker and more effective
          decisions. It is vertical agnostic and provides tools for automatic
          data validation, easy change management, near real time data
          collection and analytics, user tracking, jurisdiction based security
          and geofencing.
        </p>
        <div>6Simplex</div>
        <p>
          6Simplex Software Solutions Pvt. Ltd, Nagpur, Maharashtra, India is a
          geospatial software services and products development company that
          offers geospatial software solutions and consultancy services. We also
          provide consultation services to Government organizations that seek to
          enhance their technological capabilities and ability to use location
          based information to aid smoother functioning and decision making,
          ultimately improving the services they offer to their customers, i.e.
          the citizens.
        </p>
      </Modal>
    </div>
  );
};