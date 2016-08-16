/**
 * Created by wl on 16/7/11.
 */

// login
export const Login = () => '/Login';
// App
export const App = () => '/App';
// admin
export const Admin = () => '/Admin';

export const appPrefix = (path) => `/App/${path}`;
export const adminPrefix = (path) => `/Admin/${path}`;

export const ProductList = () => adminPrefix('ProductList');
export const DIYsList = () => adminPrefix('DIYsList');
export const DesignList = () => adminPrefix('DesignList');

export const UploadDesign = () => appPrefix('UploadDesign');
export const ProductGrid = () => appPrefix('ProductGrid');
export const DIY = (imgURL) => {
  if (imgURL) return appPrefix(`DIY?imgURL=${imgURL}`);
  return appPrefix('DIY');
};
