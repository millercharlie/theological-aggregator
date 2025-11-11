/**
 * Data that makes up a sidebar link
 */
export type SidebarLink = {
  title: string;
  icon: string;
  items: ResourceLink[];
};

/**
 * Account Status
 */
export enum AccountStatus {
  GUEST,
  USER,
  ADMIN,
}

/**
 * All data required for displaying a badge.
 */
export type BadgeAttributes = {
  text: string;
  icon: string;
  backgroundColor: string;
  textColor: string;
};

/**
 * Type of resource (ex: "scholar")
 */
export enum ResourceType {
  SCHOLAR = "scholar",
  CREATOR = "creator",
  MINISTRY = "ministry",
  BOOK = "book",
  TOPIC = "topic",
  QUESTION = "question",
}
export type ResourceIcon = {
  type: ResourceType;
  icon: string;
};

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export type ColorTheme = {
  id: Theme;
  primary: string;
  secondary: string;
  text: string;
  navBar: string;
  navHighlight: string;
  primaryRow: string;
  secondaryRow: string;
};

// TODO: Finish this map
export const BadgeMap: Record<string, string> = {
  video: "video",
};

/**
 * Resource link which includes a platform and the actual link.
 */
export type ResourceLink = {
  platform: string;
  link: string;
  displayText: string;
  icon?: string;
  priority?: boolean;
};

type Content = {
  id: string;
  title: string;
  description?: string;
  thumbnail: string;
  badges: string[]; // TODO: Maybe make badge type an enum or interface
  link: string;
};

/**
 * All data required for displaying a resource.
 */
export type ResourceInfo = {
  id: string;
  name: string;
  ministry?: string;
  type: ResourceType;
  shortDescription: string;
  longDescription?: string;
  recentContent?: Content[];
  recommendedContent?: Content[]; // TODO: This will change as more functionality is added (eg: user recommendations)
  favorite: boolean;
  fullscreen?: boolean;
  dropdown?: boolean;
  badges: string[];
  mediaType: string[];
  links: ResourceLink[];
};

// TODO: Clean up these types

export type DashboardRowData = {
  id: string;
  name: string;
  content: ResourceInfo[];
};

export interface DashboardData {
  accountStatus: AccountStatus;
  rows: DashboardRowData[];
}
