import {
  AccountStatus,
  ResourceType,
  type DashboardData,
  type DashboardRowData,
  type SidebarLink,
} from "@libs/Types";

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

/**
 * Mock data to be used on the dashboard for a single row of cards.
 */
const dashboardRowData1: DashboardRowData = {
  id: "apologetics_beginners",
  name: "Apologetics for Beginners",
  content: [
    {
      id: "william_lane_craig",
      name: "William Lane Craig",
      type: ResourceType.SCHOLAR,
      shortDescription:
        "Reformed Theologian focusing on apologetics, debates, and more",
      color: "#00679A",
      favorite: true,
      fullscreen: true,
      dropdown: false,
      badges: ["video", "website", "apologetics", "theology"],
      mediaType: [],
      links: [],
    },
    {
      id: "mike_winger",
      name: "Mike Winger",
      type: ResourceType.CREATOR,
      shortDescription: "Think Biblically About Everything",
      color: "#F5B100",
      favorite: true,
      fullscreen: true,
      dropdown: true,
      badges: ["video", "podcast", "apologetics", "theology"],
      mediaType: [],
      links: [],
    },
    {
      id: "jesus_resurrection",
      name: "The Resurrection of Jesus",
      type: ResourceType.TOPIC,
      shortDescription: "Did Jesus really rise from the dead?",
      color: "#FF0000",
      favorite: true,
      fullscreen: true, // TODO: There should likely be some way to separate this so the actual topic page opens rather than the expanded card
      dropdown: false,
      badges: [
        "topic",
        "question",
        "video",
        "website",
        "scholarly_article",
        "article",
        "documentary",
        "book",
        "apologetics",
        "theology",
      ],
      mediaType: [],
      links: [],
    },
    // {
    //   id: "genesis_interpretations",
    //   name: "The Book of Genesis",
    //   type: ResourceType.TOPIC,
    //   shortDescription:
    //     "The Book of Genesis describes how God created the universe, the Earth, and mankind. There are many interpretations of exactly how this happened!",
    //   color: "#9C7453",
    //   favorite: true,
    //   fullscreen: true,
    //   dropdown: false,
    //   badges: [
    //     "topic",
    //     "question",
    //     "video",
    //     "scholarly_article",
    //     "book",
    //     "apologetics",
    //     "theology",
    //   ],
    //   mediaType: [],
    //   links: [],
    // },
  ],
};
const dashboardRowData2: DashboardRowData = {
  id: "theology_intro",
  name: "Introduction to Theology",
  content: [
    {
      id: "gavin_ortlund",
      name: "Truth Unites with Gavin Ortlund",
      type: ResourceType.CREATOR,
      shortDescription: "Promoting Gospel Assurance Through Theological Depth",
      color: "#104B88",
      favorite: true,
      fullscreen: true,
      dropdown: false,
      badges: ["video", "podcast", "website", "apologetics", "theology"],
      mediaType: [],
      links: [],
    },
    {
      id: "john_lennox",
      name: "John Lennox",
      type: ResourceType.SCHOLAR,
      shortDescription:
        "Northern Irish theologian known for his public debates with Atheists",
      color: "#3C8D25",
      favorite: false,
      fullscreen: true,
      dropdown: true,
      badges: ["video", "book", "theology", "apologetics"],
      mediaType: [],
      links: [],
    },
    {
      id: "trinity_explained",
      name: "What is the Trinity?",
      type: ResourceType.QUESTION,
      shortDescription:
        "Discusses the true nature of God, in the form of three co-equal persons in the Trinity",
      color: "#FF6600",
      favorite: true,
      fullscreen: true,
      dropdown: false,
      badges: [
        "topic",
        "question",
        "video",
        "scholarly_article",
        "article",
        "documentary",
        "book",
        "theology",
      ],
      mediaType: [],
      links: [],
    },
  ],
};
const dashboardRowData3: DashboardRowData = {
  id: "topics_new_believers",
  name: "Topics for New Believers",
  content: [
    {
      id: "jesus_resurrection",
      name: "The Resurrection of Jesus",
      type: ResourceType.TOPIC,
      shortDescription: "Did Jesus really rise from the dead?",
      color: "#FF0000",
      favorite: true,
      fullscreen: true,
      dropdown: false,
      badges: [
        "topic",
        "question",
        "video",
        "website",
        "scholarly_article",
        "article",
        "documentary",
        "book",
        "apologetics",
        "theology",
      ],
      mediaType: [],
      links: [],
    },
    {
      id: "gospels_reliability",
      name: "The Reliability of the Gospels",
      type: ResourceType.TOPIC,
      shortDescription:
        "Discusses the reliability of the Gospel accounts according to Matthew, Mark, Luke, and John",
      color: "#FF0000",
      favorite: false,
      fullscreen: true,
      dropdown: false,
      badges: ["topic", "video", "scholarly_article", "book", "apologetics"],
      mediaType: [],
      links: [],
    },
    {
      id: "old_testament_explained",
      name: "The Old Testament: Explained",
      type: ResourceType.TOPIC,
      shortDescription:
        "A high-level overview of the Old Testament, beginning with Genesis",
      color: "#9C7453",
      favorite: false,
      fullscreen: true,
      dropdown: false,
      badges: ["topic", "video", "book", "commentary"],
      mediaType: [],
      links: [],
    },
  ],
};

export const loggedOutDashboardData: DashboardData = {
  accountStatus: AccountStatus.GUEST,
  rows: [dashboardRowData1, dashboardRowData2, dashboardRowData3],
};
