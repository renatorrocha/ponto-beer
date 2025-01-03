export const Paths = {
  Home: "/",
  Menu: "menu",
  login: "/auth/login",
  Dashboard: "/dashboard",
  Products: "/dashboard/products",
  Users: "/dashboard/users",
  Groups: "/dashboard/groups",
  GroupsEdit: (id: string) => `/dashboard/groups/${id}/edit`,
};
