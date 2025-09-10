import { useEffect, useState, useRef, useCallback } from 'react';
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

  const generateId = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `user_${timestamp}_${random}`;
  };

  useEffect(() => {
    let storedId = localStorage.getItem('userId');
    if (!storedId) {
      storedId = generateId();
      localStorage.setItem('userId', storedId);
    }
    setUserId(storedId);
    setSessionStart(Date.now());

    if (!localStorage.getItem('trackingState')) {
      localStorage.setItem('trackingState', JSON.stringify({}));
    }
  }, []);

  const setFlagInStorage = (key) => {
    const stored = localStorage.getItem('trackingState');
    const state = stored ? JSON.parse(stored) : {};
    if (state[key]) return;
    const updated = { ...state, [key]: true };
    localStorage.setItem('trackingState', JSON.stringify(updated));
  };

  useEffect(() => {
    const handleClick = () => {
      const current = parseInt(localStorage.getItem('totalClickCount') || '0', 10);
      localStorage.setItem('totalClickCount', String(current + 1));
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const handleFormSubmit = (e) => {
      if (e.target?.dataset?.track === 'form_submit') {
        setFlagInStorage('formSubmitted');
      }
    };

    const handleClick = (e) => {
      const track = e.target?.dataset?.track;
      if (track === 'donation_click') setFlagInStorage('donationClicked');
      if (track === 'contact_request') setFlagInStorage('contactRequested');
    };

    document.addEventListener('submit', handleFormSubmit);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('submit', handleFormSubmit);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const path = location.pathname;
    const normalizedPath = path.replace(/\/+$/, '') || '/';
    const pageKey = trackedPages[normalizedPath];
    if (pageKey) setFlagInStorage(pageKey);
  }, [location]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setSessionStart(Date.now());
        hasSentDataRef.current = false;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const sendSessionData = useCallback(() => {
    if (hasSentDataRef.current || !userId) return;
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
      .catch(err => console.error('❌ Помилка відправки:', err));
  }, [userId, sessionStart]);

  useEffect(() => {
    window.addEventListener('beforeunload', sendSessionData);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') sendSessionData();
    });

    return () => {
      window.removeEventListener('beforeunload', sendSessionData);
      document.removeEventListener('visibilitychange', sendSessionData);
    };
  }, [sendSessionData]);

  return null;
};

export default TrackingSession;
