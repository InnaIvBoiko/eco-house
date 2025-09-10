import { lazy } from 'react';
import Layout from '../Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import TrackingSession from '../Tracking/Tracking.jsx';


const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage.jsx'));
const ModularDreamPage = lazy(() => import('../../pages/ModularDreamPage/ModularDreamPage.jsx'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage.jsx'));
const HouseCompactPage = lazy(() => import('../../pages/HouseCompactPage/HouseCompactPage.jsx'));
const HouseDetailsPageInProgress = lazy(() => import('../../pages/HouseDetailsPageInProgress/HouseDetailsPageInProgress.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));

export default function App() {
  return (
    <Layout>
      <TrackingSession />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/modular-dream" element={<ModularDreamPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/house/compact" element={<HouseCompactPage />} />
        <Route path="/house/in-progress" element={<HouseDetailsPageInProgress />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
