import { useNavigation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader></Loader>}
      <Header></Header>
      <div className="overflow-y-auto">
        <main className="max-w-3xl">
          <Outlet></Outlet>
        </main>
      </div>
      <CartOverview></CartOverview>
    </div>
  );
}
