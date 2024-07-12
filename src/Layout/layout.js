export const layoutConfig = {
  header: {
    component: [
      {
        name: "Header",
        style: {
          height: "100%",
        },
      },
      {
        name: "Dropdown",
        style: {
          height: "100%",
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
        },
      },
      {
        name: "SidebarBottom",
        style: {
          height: "100%",
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
        name: "MapComp",
        style: {
          width: "100%",
          height: "100%",
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
        },
      },
      {
        name: "ToolbarBottom",
        style: {
          height: "100%",
        },
      },
    ],
    style: {
      width: "3%",
      height: "100%",
    },
  },
};
