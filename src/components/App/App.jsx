import { lazy } from 'react';
import Layout from '../Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage.jsx'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage.jsx'));
const HouseCompactPage = lazy(() => import('../../pages/HouseCompactPage/HouseCompactPage.jsx'));
// const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/house/compact" element={<HouseCompactPage />} />
        {/* <Route path='/*' element={<NotFoundPage />} /> */}
      </Routes>
    </Layout>
  );
}
