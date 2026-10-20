(()=>{
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
 const isEn=document.documentElement.lang==='en';
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?(isEn?'Close menu':'Menü schließen'):(isEn?'Open menu':'Menü öffnen'))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}})}
 const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in-view')})},{threshold:.1});document.querySelectorAll('.feature,.number-card,.route-step').forEach(e=>observer.observe(e));
})();
