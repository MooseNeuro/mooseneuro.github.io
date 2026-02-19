export interface NavItem {
  title: string;
  href?: string;
  dropdown?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    title: "About",
    href: "/",
    dropdown: [
      {
        title: "Features",
        href: "/#features",
      },
      {
        title: "Funders",
        href: "/#funders",
      },
    ],
  },
  {
    title: "Documentation",
    href: "https://moose-doc.readthedocs.io/en/latest/index.html#",
    dropdown: [
      {
        title: "Introduction",
        href: "https://moose-doc.readthedocs.io/en/latest/introduction/introduction.html",
      },
      {
        title: "Quick Start",
        href: "https://moose-doc.readthedocs.io/en/latest/user/py/quickstart/index_qs.html",
      },
      {
        title: "Cookbook Examples",
        href: "https://moose-doc.readthedocs.io/en/latest/user/py/cookbook/index_ckbk.html",
      },
      {
        title: "FAQ",
        href: "/faq",
      },
    ],
  },
  {
    title: "Software",
    href: "https://github.com/mooseneuro/",
    dropdown: [
      {
        title: "Download",
        href: "https://github.com/mooseneuro/moose-core/releases",
      },
      {
        title: "Installation Guide",
        href: "https://github.com/MooseNeuro/moose-core/blob/master/docs/source/install/INSTALL.md",
      },
    ],
  },
  {
    title: "Updates",
    href: "/updates",
    dropdown: [
      {
        title: "News",
        href: "/news",
      },
      {
        title: "Workshops",
        href: "/workshops",
      },
      {
        title: "Activity",
        href: "/activity",
      },
      {
        title: "Blogs",
        href: "/blogs",
      },
    ],
  },
  {
    title: "Community",
    href: "/community",
    dropdown: [
      {
        title: "Discussions and Support",
        href: "/community#support",
      },
      {
        title: "Team",
        href: "/community#team",
      },
      {
        title: "Community Guidelines",
        href: "/community#guidelines",
      },
      {
        title: "Contribute",
        href: "/community#contribute",
      },
    ],
  },
];
