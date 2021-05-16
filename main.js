const burger=document.querySelector('.burger');
const sidebar=document.querySelector('.sidebar');
const close=document.querySelector('.close');
burger.addEventListener('click',()=>{
  sidebar.classList.toggle('-translate-x-full');
});
close.addEventListener('click',()=>{
  sidebar.classList.toggle('-translate-x-full');
});