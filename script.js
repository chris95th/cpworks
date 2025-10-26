document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', () => nav.classList.toggle('show'));

  // nav-dots active highlighting using IntersectionObserver
  const dots = document.querySelectorAll('.nav-dots .dot-link');
  const sections = document.querySelectorAll('.section');
  const options = { root: document.querySelector('#main'), rootMargin: '0px', threshold: 0.5 };
  const mainContainer = document.getElementById('main');

  if ('IntersectionObserver' in window && mainContainer) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const active = entry.isIntersecting;
        const dot = document.querySelector(`.nav-dots .dot-link[data-target="${id}"]`);
        if (dot) dot.classList.toggle('active', active);
      });
    }, options);
    sections.forEach(s => observer.observe(s));
  }

  // nav-dots click: smooth scroll to section
  document.querySelectorAll('.nav-dots .dot-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href')?.slice(1) || link.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (targetEl && mainContainer) {
        // scroll the main container so snap works consistently
        const top = targetEl.offsetTop;
        mainContainer.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Keyboard navigation: up/down arrows
  document.addEventListener('keydown', (e) => {
    if (!['ArrowDown','ArrowUp','PageDown','PageUp'].includes(e.key)) return;
    e.preventDefault();
    const visibleIndex = Array.from(sections).findIndex(s => {
      const rect = s.getBoundingClientRect();
      return rect.top >= 0 && rect.top < window.innerHeight * 0.6;
    });
    let nextIndex = visibleIndex;
    if (e.key === 'ArrowDown' || e.key === 'PageDown') nextIndex = Math.min(sections.length - 1, visibleIndex + 1);
    if (e.key === 'ArrowUp' || e.key === 'PageUp') nextIndex = Math.max(0, visibleIndex - 1);
    const target = sections[nextIndex];
    if (target && mainContainer) mainContainer.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  });

  // Simple testimonial rotator
  const testimonials = [
    { quote: '“Chris shipped a production-ready feature quickly and with great quality.”', author: '— Alex, Product Manager' },
    { quote: '“A reliable teammate who writes maintainable code and cares about tests.”', author: '— Maya, Engineering Lead' },
    { quote: '“Strong problem-solver; great in algorithmic thinking and performance optimization.”', author: '— Sam, CTO' }
  ];
  let tIndex = 0;
  const tQuote = document.querySelector('.testimonial .quote');
  const tAuthor = document.querySelector('.testimonial .author');
  const tPrev = document.getElementById('t-prev');
  const tNext = document.getElementById('t-next');
  const tDots = document.querySelectorAll('.t-controls .dot');
  const tWrap = document.getElementById('testimonial-wrap');
  let tTimer = null;

  function renderTestimonial(i) {
    tIndex = (i + testimonials.length) % testimonials.length;
    if (tQuote) tQuote.textContent = testimonials[tIndex].quote;
    if (tAuthor) tAuthor.textContent = testimonials[tIndex].author;
    tDots.forEach(d => d.classList.toggle('active', Number(d.dataset.index) === tIndex));
  }
  function startT() { tTimer = setInterval(() => renderTestimonial(tIndex + 1), 4500); }
  function stopT() { if (tTimer) clearInterval(tTimer); tTimer = null; }

  // set up dots
  tDots.forEach(d => {
    d.addEventListener('click', () => renderTestimonial(Number(d.dataset.index)));
  });
  tPrev && tPrev.addEventListener('click', () => renderTestimonial(tIndex - 1));
  tNext && tNext.addEventListener('click', () => renderTestimonial(tIndex + 1));
  tWrap && tWrap.addEventListener('mouseenter', stopT);
  tWrap && tWrap.addEventListener('mouseleave', startT);

  // initial render
  renderTestimonial(0);
  startT();

  // Make sure main is focusable so keyboard nav works (for a11y)
  mainContainer && mainContainer.setAttribute('role', 'main');
});
