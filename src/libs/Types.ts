/**
 * Data that makes up a sidebar link
 */
export type SidebarLink = {
  title: string;
  icon: string;
  items: { link?: string; text: string }[]; // TODO: This can potentially be simplified into a `ResourceLink`
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

/**
 * Resource link which includes a platform and the actual link.
 */
export type ResourceLink = {
  platform: string;
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
  color?: string;
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
