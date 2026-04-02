// Enhanced Dark/Light Mode, Back to Top, Navbar Active, Hero Animations
document.addEventListener('DOMContentLoaded', function() {
  // Dark/Light Mode with localStorage
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;
  
  // Load saved mode
  const savedMode = localStorage.getItem('darkMode') === 'true';
  if (savedMode) {
    body.classList.add('dark-mode');
    toggle.textContent = '🌙';
  }

  toggle.addEventListener('click', function() {
    const isDark = body.classList.contains('dark-mode');
    body.classList.toggle('dark-mode');
    
    
    localStorage.setItem('darkMode', (!isDark).toString());
    
  
    toggle.textContent = isDark ? '☀️' : '🌙';
  });

  // Smooth transitions on mode change
  body.style.transition = 'all 0.3s ease';

  // Back to Top
  const backTop = document.getElementById('backToTop');
  if (backTop) {
    window.addEventListener('scroll', function() {
      backTop.classList.toggle('show', window.scrollY > 300);
    });
    backTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Navbar Active Link
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage || link.dataset.page === currentPage.replace('.html', '')) {
      link.classList.add('active');
    }
  });

  // Hero Entrance Animations (fade + slide)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.hero, #cards, .trends-section').forEach(section => {
    observer.observe(section);
  });
});
