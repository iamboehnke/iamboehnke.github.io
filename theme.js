// Theme toggle — shared across all pages
(function () {
  const root = document.documentElement;
  // Storage can be blocked (private modes, some webviews); the toggle must still work for the session.
  const read = () => { try { return localStorage.getItem('theme'); } catch (e) { return null; } };
  const write = (v) => { try { localStorage.setItem('theme', v); } catch (e) {} };

  const saved = read();
  if (saved) root.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('theme-btn');
    if (!btn) return;
    const label = () => {
      const text = root.getAttribute('data-theme') === 'light' ? 'Switch to dark theme' : 'Switch to light theme';
      btn.setAttribute('aria-label', text);
      btn.setAttribute('title', text);
    };
    label();
    btn.addEventListener('click', function () {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      write(next);
      label();
    });
  });
})();
