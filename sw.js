// Service worker mínimo: no guarda nada en caché ni cambia el comportamiento offline.
// Su único propósito es cumplir el requisito técnico que pide Android/Chrome para
// poder instalar la página como ícono en el celular ("Agregar a pantalla de inicio").
self.addEventListener("install", function(event){
  self.skipWaiting();
});
self.addEventListener("activate", function(event){
  self.clients.claim();
});
self.addEventListener("fetch", function(event){
  event.respondWith(fetch(event.request));
});
