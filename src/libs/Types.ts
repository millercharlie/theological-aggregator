export type SidebarLink = {
  title: string;
  icon: string;
  items: { link?: string; text: string }[];
};

export type BadgeAttributes = {
  text: string;
  icon: string;
  backgroundColor: string;
  textColor: string;
}