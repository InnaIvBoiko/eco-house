import { lazy } from 'react';
import Layout from '../Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage.jsx'));
const DonatePage = lazy(() => import('../../pages/DonatePage/DonatePage.jsx'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage.jsx'));
const HouseCompactPage = lazy(() => import('../../pages/HouseCompactPage/HouseCompactPage.jsx'));
const HouseFamilyPage = lazy(() => import('../../pages/HouseFamilyPage/HouseFamilyPage.jsx'));
const HousePremiumPage = lazy(() => import('../../pages/HousePremiumPage/HousePremiumPage.jsx'));
// const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/house/compact" element={<HouseCompactPage />} />
        <Route path="/house/family" element={<HouseFamilyPage />} />
        <Route path="/house/premium" element={<HousePremiumPage />} />
        {/* <Route path='/*' element={<NotFoundPage />} /> */}
      </Routes>
    </Layout>
  );
}
