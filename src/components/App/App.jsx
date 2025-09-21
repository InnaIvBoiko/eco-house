import { lazy } from 'react';
import Layout from '../Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import TrackingSession from '../Tracking/Tracking.jsx';


const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage.jsx'));
const ModularDreamPage = lazy(() => import('../../pages/ModularDreamPage/ModularDreamPage.jsx'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage.jsx'));
const HouseCompactPage = lazy(() => import('../../pages/HouseCompactPage/HouseCompactPage.jsx'));
const HousePremiumPage = lazy(() => import('../../pages/HousePremiumPage/HousePremiumPage.jsx'));
const HouseHarmonyPage = lazy(() => import('../../pages/HouseHarmonyPage/HouseHarmonyPage.jsx'));
const HouseHorizonPage = lazy(() => import('../../pages/HouseHorizonPage/HouseHorizonPage.jsx'));
const HouseBudWorldMiniPage = lazy(() => import('../../pages/HouseBudWorldMiniPage/HouseBudWorldMiniPage.jsx'));
const HouseBudWorldGrandeePage = lazy(() => import('../../pages/HouseBudWorldGrandeePage/HouseBudWorldGrandeePage.jsx'));
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
        <Route path="/house/premium" element={<HousePremiumPage />} />
        <Route path="/house/harmony" element={<HouseHarmonyPage />} />
        <Route path="/house/horizon" element={<HouseHorizonPage />} />
        <Route path="/house/bud-world-mini" element={<HouseBudWorldMiniPage />} />
        <Route path="/house/bud-world-grandee" element={<HouseBudWorldGrandeePage />} />
        <Route path="/house/in-progress" element={<HouseDetailsPageInProgress />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
