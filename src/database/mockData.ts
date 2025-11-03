import type { SidebarLink } from "@libs/Types";

export const sidebarData: SidebarLink[] = [
  {
    title: "Trending Topics",
    icon: "fire.svg",
    items: [
      {
        link: "https://youtu.be/8AoLYeFi2ms?si=Kl8RD2TAj-jeF11h",
        text: "Young Earth v. Old Earth Creationism",
      },
      {
        link: "",
        text: "Did Jesus claim to be God in Mark 2?",
      },
      {
        link: "",
        text: "Noah's Flood: Local or Global?",
      },
      {
        link: "",
        text: "The Messianic Prophecies of Isaiah",
      },
      {
        link: "",
        text: "Where was the Garden of Eden?",
      },
    ],
  },
  {
    title: "Recently Added",
    icon: "recent_clock.svg",
    items: [
      {
        link: "https://www.gotquestions.org/",
        text: "gotquestions.org",
      },
      {
        link: "https://biblethinker.org/",
        text: "BibleThinker \u2013 Mike Winger",
      },
      {
        link: "",
        text: "The Case for Christ \u2013 Lee Strobel",
      },
    ],
  },
  {
    title: "Verse of the Day", // TODO: Add indicator for Bible version
    icon: "open_book.svg",
    items: [
      {
        link: "",
        text: "“Do not be overcome by evil, but overcome evil with good” \u2013 Romans 12:21",
      },
    ],
  },
  {
    title: "Top-Rated Sources", // TODO: Should the link only appear for external sources?
    icon: "star.svg",
    items: [
      {
        link: "https://biblethinker.org/",
        text: "BibleThinker \u2013 Mike Winger",
      },
      {
        link: "https://www.inspiringphilosophy.com/",
        text: "InspiringPhilosophy \u2013 Michael Jones",
      },
      {
        link: "https://truthunites.org/",
        text: "Truth Unites \u2013 Gavin Ortlund",
      },
      {
        link: "https://www.cslewis.com/us/",
        text: "C.S. Lewis",
      },
      {
        link: "https://www.voddiebaucham.org/",
        text: "VBM \u2013 Voddie Baucham",
      },
    ],
  },
  {
    title: "Commentary Starting Verses",
    icon: "message.svg",
    items: [
      {
        link: "",
        text: "John 3:16",
      },
      {
        link: "",
        text: "Acts of the Apostles 2",
      },
      {
        link: "https://truthunites.org/",
        text: "Revelation 7:1-9",
      },
    ],
  },
  {
    title: "By Church",
    icon: "church.svg",
    items: [
      {
        link: "",
        text: "Baptist",
      },
      {
        link: "",
        text: "Presbyterian",
      },
      {
        link: "",
        text: "Methodist/Wesleyan",
      },
      {
        link: "",
        text: "Non-Denominational",
      },
      {
        link: "",
        text: "Roman Catholic",
      },
      {
        link: "",
        text: "Eastern Orthodox",
      },
      {
        link: "",
        text: "Anabaptist",
      },
      {
        link: "",
        text: "Anglican",
      },
    ],
  },
];
