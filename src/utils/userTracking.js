export default function initUserTracking() {
  const storageKey = 'userSessionData';
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbyYu9gpk_-8C3IyA893byHM0VeihSOewiimGRjyq3gtj9lY2SdySoTFgv5j8bXNgNjt/exec'; // 🔁 Замінити на свій

  // Генерація або завантаження унікального ID
  const getUserId = () => {
    let id = localStorage.getItem('userId');
    if (!id) {
      id = 'user_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('userId', id);
    }
    return id;
  };

  const userId = getUserId();
  const sessionStart = Date.now();
  let clickCount = 0;
  const inputs = {};

  // Відстеження інпутів
  const formInputs = document.querySelectorAll('input[type="text"], textarea');
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      inputs[input.name] = input.value;
    });
  });

  // Відстеження кліків
  document.addEventListener('click', () => {
    clickCount += 1;
  });

  // Відправка даних у Google Sheets
  const sendDataToSheets = () => {
    const sessionEnd = Date.now();
    const durationSec = Math.round((sessionEnd - sessionStart) / 1000);

    const payload = {
      userId,
      timestamp: new Date(sessionStart).toISOString(),
      durationSec,
      clickCount,
      inputs: JSON.stringify(inputs),
    };

    fetch(scriptURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(err => console.error('Send error:', err));
  };

  // Відправка при закритті або переході
  window.addEventListener('beforeunload', sendDataToSheets);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') sendDataToSheets();
  });
}
