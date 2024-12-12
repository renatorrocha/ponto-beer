export const Paths = {
  Home: "/",
  Menu: "menu",
  Dashboard: "/dashboard",
  Products: "/dashboard/products",
  EditProduct: (productId: string) => `/dashboard/products/edit/${productId}`,
  CreateProduct: "/dashboard/products/new",
  Users: "/dashboard/users",
  EditUser: (userId: string) => `/dashboard/users/edit/${userId}`,
  CreateUser: "/dashboard/users/new",
};
