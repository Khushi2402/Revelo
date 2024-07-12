export const layoutConfig = {
  header: {
    component: [
      {
        name: "Header",
        style: {
          height: "100%",
          backgroundColor: "#f0f0f0",
        },
      },
      {
        name: "Dropdown",
        style: {
          height: "100%",
          backgroundColor: "#c9ffd8",
        },
      },
    ],
    style: {
      width: "100%",
      height: "100%",
    },
  },
  lhs: {
    component: [
      {
        name: "SidebarTop",
        style: {
          height: "100%",
          backgroundColor: "#E6FBFF",
        },
      },
      {
        name: "SidebarBottom",
        style: {
          height: "100%",
          backgroundColor: "#D7F9FF ",
        },
      },
    ],
    style: {
      width: "3%",
      height: "100%",
    },
  },
  center: {
    component: [
      {
        name: "MapComponent",
        style: {
          width: "100%",
          height: "100%",
          backgroundColor: "#f0f0f0",
        },
      },
    ],
    style: {
      width: "94%",
      height: "100%",
    },
  },
  rhs: {
    component: [
      {
        name: "ToolbarTop",
        style: {
          height: "100%",
          backgroundColor: "#c8ffa1",
        },
      },
      {
        name: "ToolbarBottom",
        style: {
          height: "100%",
          backgroundColor: "#c9ffd8",
        },
      },
    ],
    style: {
      width: "3%",
      height: "100%",
    },
  },
};
