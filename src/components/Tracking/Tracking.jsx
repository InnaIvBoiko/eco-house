import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const TrackingSession = () => {
  const location = useLocation();

  const [userId, setUserId] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [sessionStart, setSessionStart] = useState(Date.now());
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [donationClicked, setDonationClicked] = useState(false);
  const [contactRequested, setContactRequested] = useState(false);
  const [pageFlags, setPageFlags] = useState({});
  const hasSentDataRef = useRef(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxdXsDYRymbz0tg-9VvowIeBLkdtZDLw7lc0G2ZZWwb0zdxcG1qBhxEC5UZjw68YJp91A/exec';

  const trackedPages = {
    '': 'home',
    '/modular-dream': 'modular_dream',
    '/catalog': 'catalog',
    '/house/compact': 'house_compact',
    '/contacts': 'contacts',
    '/404': 'not_found'
  };

  useEffect(() => {
    let storedId = localStorage.getItem('userId');
    if (!storedId) {
      storedId = 'user_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('userId', storedId);
    }
    setUserId(storedId);
    setSessionStart(Date.now());
  }, []);

  useEffect(() => {
    const handleClick = () => setClickCount(prev => prev + 1);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const handleFormSubmit = () => setFormSubmitted(true);
    const handleDonationClick = () => setDonationClicked(true);
    const handleContactClick = () => setContactRequested(true);

    const formEls = document.querySelectorAll('[data-track="form_submit"]');
    const donationEls = document.querySelectorAll('[data-track="donation_click"]');
    const contactEls = document.querySelectorAll('[data-track="contact_request"]');

    formEls.forEach(el => el.addEventListener('submit', handleFormSubmit));
    donationEls.forEach(el => el.addEventListener('click', handleDonationClick));
    contactEls.forEach(el => el.addEventListener('click', handleContactClick));

    return () => {
      formEls.forEach(el => el.removeEventListener('submit', handleFormSubmit));
      donationEls.forEach(el => el.removeEventListener('click', handleDonationClick));
      contactEls.forEach(el => el.removeEventListener('click', handleContactClick));
    };
  }, []);

useEffect(() => {
  const path = location.pathname;
  const normalizedPath = path.replace(/\/+$/, ''); // видаляє кінцевий слеш

  console.log('📍 Поточний pathname:', path);
  console.log('🔧 Нормалізований pathname:', normalizedPath);
  console.log('📂 trackedPages:', trackedPages);

  if (trackedPages[normalizedPath]) {
    const pageKey = trackedPages[normalizedPath];
    console.log(`✅ Відмічаємо сторінку: ${pageKey}`);
    setPageFlags(prev => ({
      ...prev,
      [pageKey]: true
    }));
  } else {
    console.warn(`⚠️ Сторінка "${normalizedPath}" не входить до trackedPages`);
  }
}, [location]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setClickCount(0);
        setSessionStart(Date.now());
        setFormSubmitted(false);
        setDonationClicked(false);
        setContactRequested(false);
        setPageFlags({});
        hasSentDataRef.current = false;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!userId) return;

    const sendSessionData = () => {
      if (hasSentDataRef.current) return;
      hasSentDataRef.current = true;

      const durationSec = Math.round((Date.now() - sessionStart) / 1000);

      const query = new URLSearchParams({
        type: 'tracking',
        userId,
        timestamp: new Date(sessionStart).toISOString(),
        durationSec: String(durationSec),
        clickCount: String(clickCount),
        formSubmitted: formSubmitted ? 'true' : 'false',
        donationClicked: donationClicked ? 'true' : 'false',
        contactRequested: contactRequested ? 'true' : 'false',
        page_home: pageFlags['home'] ? 'true' : 'false',
        page_modular_dream: pageFlags['modular_dream'] ? 'true' : 'false',
        page_catalog: pageFlags['catalog'] ? 'true' : 'false',
        page_house_compact: pageFlags['house_compact'] ? 'true' : 'false',
        page_contacts: pageFlags['contacts'] ? 'true' : 'false',
        page_not_found: pageFlags['not_found'] ? 'true' : 'false'
      }).toString();
       console.log({ type: 'tracking',
        userId,
        timestamp: new Date(sessionStart).toISOString(),
        durationSec: String(durationSec),
        clickCount: String(clickCount),
        formSubmitted: formSubmitted ? 'true' : 'false',
        donationClicked: donationClicked ? 'true' : 'false',
        contactRequested: contactRequested ? 'true' : 'false',
        page_home: pageFlags['home'] ? 'true' : 'false',
        page_modular_dream: pageFlags['modular_dream'] ? 'true' : 'false',
        page_catalog: pageFlags['catalog'] ? 'true' : 'false',
        page_house_compact: pageFlags['house_compact'] ? 'true' : 'false',
        page_contacts: pageFlags['contacts'] ? 'true' : 'false',
        page_not_found: pageFlags['not_found'] ? 'true' : 'false'})
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
  }, [userId, clickCount, formSubmitted, donationClicked, contactRequested, pageFlags, sessionStart]);

  return null;
};

export default TrackingSession;