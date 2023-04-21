export function createLoader() {
  var doc = document;
  var loader = doc.body.querySelector('.slide-loader');
  [1, 2, 3].forEach(function (n) { 
    var d = doc.createElement('div'); 
    d.style.backgroundColor = window.globals.preloaderColor; 
    d.classList.add('mobile-loader-dot'); 
    d.classList.add('dot' + n); 
    loader.appendChild(d); 
  });
}