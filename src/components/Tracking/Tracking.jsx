import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const TrackingSession = () => {
  const location = useLocation();

  const [userId, setUserId] = useState('');
  const [sessionStart, setSessionStart] = useState(Date.now());
  const hasSentDataRef = useRef(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxdXsDYRymbz0tg-9VvowIeBLkdtZDLw7lc0G2ZZWwb0zdxcG1qBhxEC5UZjw68YJp91A/exec';

  const trackedPages = {
    '/': 'home',
    '/modular-dream': 'modular_dream',
    '/catalog': 'catalog',
    '/house/compact': 'house_compact',
    '/contacts': 'contacts',
    '/404': 'not_found'
  };

  // Ініціалізація userId
  useEffect(() => {
    let storedId = localStorage.getItem('userId');
    if (!storedId) {
      const lastIndex = parseInt(localStorage.getItem('lastUserIndex') || '0', 10);
      storedId = `user_${lastIndex}`;
      localStorage.setItem('userId', storedId);
      localStorage.setItem('lastUserIndex', String(lastIndex + 1));
    }
    setUserId(storedId);
    setSessionStart(Date.now());
  }, []);

  // Збереження флажка в localStorage.trackingState
  const setFlagInStorage = (key) => {
    const stored = localStorage.getItem('trackingState');
    const state = stored ? JSON.parse(stored) : {};
    const updated = { ...state, [key]: true };
    localStorage.setItem('trackingState', JSON.stringify(updated));
  };

  // Клік трекінг (загальний лічильник)
  useEffect(() => {
    const handleClick = () => {
      const current = parseInt(localStorage.getItem('totalClickCount') || '0', 10);
      const updated = current + 1;
      localStorage.setItem('totalClickCount', String(updated));
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Відстеження подій
  useEffect(() => {
    const handleFormSubmit = (e) => {
      if (e.target?.dataset?.track === 'form_submit') {
        console.log('📨 Форма надіслана');
        setFlagInStorage('formSubmitted');
      }
    };

    const handleClick = (e) => {
      const track = e.target?.dataset?.track;
      if (track === 'donation_click') {
        console.log('💰 Клік по донату');
        setFlagInStorage('donationClicked');
      }
      if (track === 'contact_request') {
        console.log('📞 Запит контакту');
        setFlagInStorage('contactRequested');
      }
    };

    document.addEventListener('submit', handleFormSubmit);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('submit', handleFormSubmit);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Відмітка сторінки як відвіданої
  useEffect(() => {
    const path = location.pathname;
    const normalizedPath = path.replace(/\/+$/, '') || '/';

    if (trackedPages[normalizedPath]) {
      const pageKey = trackedPages[normalizedPath];
      const stored = localStorage.getItem('trackingState');
      const state = stored ? JSON.parse(stored) : {};
      if (!state[pageKey]) {
        const updated = { ...state, [pageKey]: true };
        localStorage.setItem('trackingState', JSON.stringify(updated));
      }
    }
  }, [location]);

  // Скидання сесії при поверненні
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setSessionStart(Date.now());
        hasSentDataRef.current = false;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Відправка даних
  useEffect(() => {
    if (!userId) return;

    const sendSessionData = () => {
      if (hasSentDataRef.current) return;
      hasSentDataRef.current = true;

      const durationSec = Math.round((Date.now() - sessionStart) / 1000);
      const rawState = JSON.parse(localStorage.getItem('trackingState') || '{}');
      const totalClicks = parseInt(localStorage.getItem('totalClickCount') || '0', 10);

      const query = new URLSearchParams({
        type: 'tracking',
        userId,
        timestamp: new Date(sessionStart).toISOString(),
        durationSec: String(durationSec),
        clickCount: String(totalClicks),

        formSubmitted: rawState.formSubmitted ? 'true' : 'false',
        donationClicked: rawState.donationClicked ? 'true' : 'false',
        contactRequested: rawState.contactRequested ? 'true' : 'false',

        page_home: rawState.home ? 'true' : 'false',
        page_modular_dream: rawState.modular_dream ? 'true' : 'false',
        page_catalog: rawState.catalog ? 'true' : 'false',
        page_house_compact: rawState.house_compact ? 'true' : 'false',
        page_contacts: rawState.contacts ? 'true' : 'false',
        page_not_found: rawState.not_found ? 'true' : 'false'
      }).toString();

      fetch(`${scriptURL}?${query}`)
        .then(res => res.text())
        .then(text => console.log('✅ Відповідь від Apps Script:', text))
        .catch(err => console.error('❌ Помилка відправки:', err));
    };

    window.addEventListener('beforeunload', sendSessionData);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') sendSessionData();
    });

    return () => {
      window.removeEventListener('beforeunload', sendSessionData);
      document.removeEventListener('visibilitychange', sendSessionData);
    };
  }, [userId, sessionStart]);

  return null;
};

export default TrackingSession;