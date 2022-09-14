export const MENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `/dashboard`,
        icon: "home",
        type: "link",
        active: true,
        title: "Dashboard",
      },
      {
        icon: "database",
        type: "sub",
        active: false,
        title: "Master",
        children: [
          {
            path: `/category`,
            type: "link",
            title: "Category",
          },
          {
            path: `/product`,
            type: "link",
            title: "Product",
          },
          {
            path: `/banner/form`,
            type: "link",
            title: "Banner",
          },
          {
            path: `/order/list`,
            type: "link",
            title: "Order",
          },
        ],
      },
    ],
  },
];
