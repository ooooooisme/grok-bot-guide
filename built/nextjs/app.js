// Simulated React-like hydration and event handling
document.addEventListener('DOMContentLoaded', () => {
  // Tab switching
  document.querySelectorAll('.tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tabs button').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.toggle('active', c.dataset.content === tab));
    });
  });
  // Copy buttons
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pre = btn.parentElement;
      const text = pre.innerText.replace('复制', '').trim();
      navigator.clipboard.writeText(text);
      btn.textContent = '已复制';
      setTimeout(() => btn.textContent = '复制', 1500);
    });
  });
  // Simulate some hydration work
  console.log('Next.js-style hydration complete');
});
