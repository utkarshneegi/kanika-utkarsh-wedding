const weddingDate = new Date('2026-10-18T19:00:00+05:30').getTime();
const setCountdown = () => {
  const diff = Math.max(0, weddingDate - Date.now());
  const units = [["days", 86400000], ["hours", 3600000], ["minutes", 60000], ["seconds", 1000]];
  let remainder = diff;
  units.forEach(([id, size]) => { const value = Math.floor(remainder / size); remainder %= size; document.getElementById(id).textContent = String(value).padStart(2, '0'); });
};
setCountdown(); setInterval(setCountdown, 1000);

document.querySelector('.menu-button').addEventListener('click', () => {
  const nav = document.querySelector('.nav'); nav.classList.toggle('menu-open');
  document.querySelector('.menu-button').setAttribute('aria-expanded', nav.classList.contains('menu-open'));
});

document.querySelectorAll('.nav nav a').forEach(link => link.addEventListener('click', () => document.querySelector('.nav').classList.remove('menu-open')));
document.getElementById('rsvpForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const events = data.getAll('event');
  if (!events.length) { alert('Please select at least one celebration.'); return; }
  const message = `Hello Utkarsh & Kanika!%0A%0A*RSVP*%0AName: ${encodeURIComponent(data.get('name'))}%0AGuests: ${encodeURIComponent(data.get('guests'))}%0AEvents: ${encodeURIComponent(events.join(', '))}%0ANote: ${encodeURIComponent(data.get('note') || '—')}`;
  document.querySelector('.toast').classList.add('show');
  setTimeout(() => window.open(`https://wa.me/918750262648?text=${message}`, '_blank'), 350);
  setTimeout(() => document.querySelector('.toast').classList.remove('show'), 3500);
});
