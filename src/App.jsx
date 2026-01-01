import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Error from './ui/Error';

import Menu from './features/menu/Menu';
import { loader as menuLoader } from './features/menu/Menu';

import Order from './features/order/Order';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import { loader as orderLoader } from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';

import Cart from './features/cart/Cart';

const router = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/menu',
        element: <Menu></Menu>,
        loader: menuLoader,
        errorElement: <Error></Error>,
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
      },
      {
        path: '/order/new',
        element: <CreateOrder></CreateOrder>,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order></Order>,
        errorElement: <Error></Error>,
        loader: orderLoader,
        action: updateOrderAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
