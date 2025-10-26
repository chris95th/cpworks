document.addEventListener('DOMContentLoaded',function(){
  const navToggle=document.getElementById('nav-toggle');
  const nav=document.getElementById('nav');
  navToggle.addEventListener('click',()=>{
    nav.classList.toggle('show');
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const target=document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        nav.classList.remove('show');
      }
    })
  });
});
