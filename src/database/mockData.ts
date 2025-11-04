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
        displayText: "Young Earth v. Old Earth Creationism",
        platform: "YouTube",
      },
      {
        link: "",
        displayText: "Did Jesus claim to be God in Mark 2?",
        platform: "YouTube",
      },
      {
        link: "",
        displayText: "Noah's Flood: Local or Global?",
        platform: "YouTube",
      },
      {
        link: "",
        displayText: "The Messianic Prophecies of Isaiah",
        platform: "Scholarly Article",
      },
      {
        link: "",
        displayText: "Where was the Garden of Eden?",
        platform: "YouTube",
      },
    ],
  },
  {
    title: "Recently Added",
    icon: "recent_clock.svg",
    items: [
      {
        link: "https://www.gotquestions.org/",
        displayText: "gotquestions.org",
        platform: "Ministry",
      },
      {
        link: "https://biblethinker.org/",
        displayText: "BibleThinker \u2013 Mike Winger",
        platform: "Ministry",
      },
      {
        link: "",
        displayText: "The Case for Christ \u2013 Lee Strobel",
        platform: "Book",
      },
    ],
  },
  {
    title: "Verse of the Day", // TODO: Add indicator for Bible version
    icon: "open_book.svg",
    items: [
      {
        link: "",
        displayText:
          "“Do not be overcome by evil, but overcome evil with good” \u2013 Romans 12:21",
        platform: "",
      },
    ],
  },
  {
    title: "Top-Rated Sources", // TODO: Should the link only appear for external sources?
    icon: "star.svg",
    items: [
      {
        link: "https://biblethinker.org/",
        displayText: "BibleThinker \u2013 Mike Winger",
        platform: "Ministry",
      },
      {
        link: "https://www.inspiringphilosophy.com/",
        displayText: "InspiringPhilosophy \u2013 Michael Jones",
        platform: "Ministry",
      },
      {
        link: "https://truthunites.org/",
        displayText: "Truth Unites \u2013 Gavin Ortlund",
        platform: "Ministry",
      },
      {
        link: "https://www.cslewis.com/us/",
        displayText: "C.S. Lewis",
        platform: "Scholar",
      },
      {
        link: "https://www.voddiebaucham.org/",
        displayText: "VBM \u2013 Voddie Baucham",
        platform: "Ministry",
      },
    ],
  },
  {
    title: "Commentary Starting Verses",
    icon: "message.svg",
    items: [
      {
        link: "",
        displayText: "John 3:16",
        platform: "Commentary",
      },
      {
        link: "",
        displayText: "Acts of the Apostles 2",
        platform: "Commentary",
      },
      {
        link: "https://truthunites.org/",
        displayText: "Revelation 7:1-9",
        platform: "Commentary",
      },
    ],
  },
  {
    title: "By Church",
    icon: "church.svg",
    items: [
      {
        link: "",
        displayText: "Baptist",
        platform: "",
      },
      {
        link: "",
        displayText: "Presbyterian",
        platform: "",
      },
      {
        link: "",
        displayText: "Methodist/Wesleyan",
        platform: "",
      },
      {
        link: "",
        displayText: "Non-Denominational",
        platform: "",
      },
      {
        link: "",
        displayText: "Roman Catholic",
        platform: "",
      },
      {
        link: "",
        displayText: "Eastern Orthodox",
        platform: "",
      },
      {
        link: "",
        displayText: "Anabaptist",
        platform: "",
      },
      {
        link: "",
        displayText: "Anglican",
        platform: "",
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
      shortDescription:
        "\u201CPromoting Gospel Assurance Through Theological Depth\u201D",
      longDescription:
        "Gavin Ortlund (PhD, Fuller Theological Seminary) is President of Truth Unites, Visiting Professor of Historical Theology at Phoenix Seminary, and Theologian-in-Residence at Immanuel Nashville. He is also an Evangelical theologian and content creator focusing on Christian doctrine, with a particular emphasis on the historical church.\n\nHis content includes refuting particular doctrines, such as the Papacy, responding to other theologions such as C.S. Lewis and Trent Horn, and defending Evangelical and Protestant beliefs, such as Sola Scriptura. All of his content is available for free on YouTube and other podcast sites, and he also sells books online",
      color: "#104B88",
      favorite: true,
      fullscreen: true,
      dropdown: true,
      recentContent: [
        {
          id: "go_v1",
          title: "Did Jesus Descend into Hell?",
          description: "...",
          thumbnail: "go_v1.png",
          badge: "question",
        },
        {
          id: "go_v2",
          title: "Should Christians use Profanity?",
          description: "...",
          thumbnail: "go_v2.png",
          badge: "question",
        },
        {
          id: "go_v3",
          title: "Craig and Ortlund Clash on the Eucharist",
          description: "...",
          thumbnail: "go_v3.png",
          badge: "theology",
        },
      ],
      badges: ["video", "podcast", "website", "apologetics", "theology"],
      mediaType: [],
      links: [
        {
          platform: "YouTube",
          link: "https://www.youtube.com/@TruthUnites",
          displayText: "youtube/truthunites",
          icon: "youtube.svg",
          priority: true,
        },
        {
          platform: "Personal Website",
          link: "https://truthunites.org",
          icon: "website.svg",
          displayText: "truthunites.org",
        },
        {
          platform: "X",
          link: "twitter.com/gavinortlund",
          icon: "x.svg",
          displayText: "x/gavinortlund",
        },
        {
          platform: "Instagram",
          link: "instagram.com/truth.unites",
          icon: "instagram.svg",
          displayText: "instagram/truth.unites",
        },
        {
          platform: "Books", // TODO: This may need to be updated
          link: "truthunites.org/mypublications",
          icon: "closed_book.svg",
          displayText: "truthunites.org/mypublications",
        },
        {
          platform: "Spotify",
          link: "",
          icon: "spotify.svg",
          displayText: "spotify/truth-unites",
        },
        {
          platform: "Apple Podcasts",
          link: "",
          icon: "applepodcasts.svg",
          displayText: "apple-podcasts/truth-unites",
        },
        {
          platform: "Patreon",
          link: "",
          icon: "patreon.svg",
          displayText: "patreon/truthunites",
        },
        {
          platform: "Donate",
          link: "",
          icon: "youtube.svg",
          displayText: "donations",
        },
        {
          platform: "Facebook",
          link: "facebook.com/TruthUnitesPage",
          icon: "facebook.svg",
          displayText: "facebook/TruthUnitesPage",
        },
      ],
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
