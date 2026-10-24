(function(){
  var root=document.documentElement;
  try{var t=localStorage.getItem('mc-theme');if(t)root.setAttribute('data-theme',t);}catch(e){}
  var btn=document.getElementById('theme');
  if(btn)btn.addEventListener('click',function(){
    var dark=root.getAttribute('data-theme')==='dark'||(!root.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme:dark)').matches);
    var next=dark?'light':'dark';root.setAttribute('data-theme',next);
    try{localStorage.setItem('mc-theme',next);}catch(e){}
  });
  var mb=document.getElementById('menu'),ul=document.getElementById('navlinks');
  if(mb&&ul){mb.addEventListener('click',function(){ul.classList.toggle('open');mb.setAttribute('aria-expanded',ul.classList.contains('open'));});
    ul.addEventListener('click',function(e){if(e.target.tagName==='A')ul.classList.remove('open');});}
  document.querySelectorAll('.copy-bib').forEach(function(b){b.addEventListener('click',function(){
    var pre=b.parentElement.querySelector('pre');if(!pre)return;
    navigator.clipboard&&navigator.clipboard.writeText(pre.textContent).then(function(){var o=b.textContent;b.textContent='Copied';setTimeout(function(){b.textContent=o;},1500);});
  });});
})();
