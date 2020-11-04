self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('airhorner').then(function(cache) {
      console.log('Opened cache');
      return cache.addAll([
        '/',
        '/App.css',
        '/App.js',
        '/App.test',
        '/index.css',
        '/index.js',
 
        'components/Filtering.js',
        'components/UserProfile.js',
 
        'components/Login/Login.css',
        'components/Login/Login.js',
        'components/Login/logoTask.png',
 
        'components/Task/NewTask.css',
        'components/Task/NewTask.js',
        'components/Task/task.css',
        'components/Task/task.js',
        'components/Task/TaskList.js'
      ]);
    })
  );
 }); 
 
 self.addEventListener('fetch', function(event) {
 
     console.log(event.request.url);
     
     event.respondWith(
       caches.match(event.request).then(function(response) {
         return response || fetch(event.request);    
       })
     );    
 });