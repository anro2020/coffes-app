const staticDevCoffe = "dev-coffe-site-v1"
const assets = [
    "/",
    "/inicio.html",
    "/css/styles.css",
    "js/app.js",
    "imagenes/cafe.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffe).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent =>{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})