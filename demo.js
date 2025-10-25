// Optional: smooth scroll for "Explore Properties" button
document.querySelector('.btn').addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('#properties').scrollIntoView({ behavior: 'smooth' });
});
