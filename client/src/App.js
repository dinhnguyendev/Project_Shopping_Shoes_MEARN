import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';
import AdminPage from './pages/Admin/AdminPage';
import SizePage from './pages/size/SizePage';
import OutletPages from './components/outlet/OutletPages';
const PayPage = React.lazy(() => import('./pages/pay/PayPage'));
const Profile = React.lazy(() => import('./pages/account/components/profile/Profile'));
const CartPage = React.lazy(() => import('./pages/cart/CartPage'));
const Purchase = React.lazy(() => import('./pages/account/components/purchase/Purchase'));
const Password = React.lazy(() => import('./pages/account/components/password/Password'));
const Notificaton = React.lazy(() => import('./pages/account/components/notification/Notificaton'));
const Order = React.lazy(() => import('./pages/account/components/notification/order/Order'));
const Promotion = React.lazy(() => import('./pages/account/components/notification/promotion/Promotion'));
const HomePage = React.lazy(() => import('./pages/home/HomePage'));
const CollectionPage = React.lazy(() => import('./pages/collection/CollectionPage'));
const LoginPage = React.lazy(() => import('./pages/login/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/register/RegisterPage'));
const DetailsPage = React.lazy(() => import('./pages/details/DetailsPage'));
const AccountPage = React.lazy(() => import('./pages/account/AccountPage'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<OutletPages />}>
              <Route path='/collection' element={<CollectionPage />}>
                <Route path=':slug' element={<CollectionPage />} />
              </Route>
              <Route path='/account' element={<AccountPage />}>
                <Route path='profile' element={<Profile />} />
                <Route path='purchase' element={<Purchase />} />
                <Route path='password' element={<Password />} />
                <Route path='notifications' element={<Notificaton />}>
                  <Route path='order' element={<Order />} />
                  <Route path='promotion' element={<Promotion />} />
                </Route>
              </Route>
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/pay' element={<PayPage />} />
              <Route path='products/:slug' element={<DetailsPage />} />
              <Route path='/huong-dan-chon-size-giay' element={<SizePage />} />
              <Route path='/' element={<HomePage />} />
            </Route>
            <Route path='/admin' element={<AdminPage />} />
          </Routes>

        </BrowserRouter>
      </Suspense>
    </div>
  );
}
export default App;
