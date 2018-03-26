import path fomr 'path';

particlesJS.load('particles-js', path.resolve(__dirname,'particlesjs-config2.json'), function() {
  console.log('callback - particles.js config loaded');
});
