//navbar
const burger=document.querySelector('.burger');
const sidebar=document.querySelector('.sidebar');
const close=document.querySelector('.close');
burger.addEventListener('click',()=>{
  sidebar.classList.toggle('-translate-x-full');
});
close.addEventListener('click',()=>{
  sidebar.classList.toggle('-translate-x-full');
});
//sidebar-profile
const userfield=document.getElementById('username');
const emailfield=document.getElementById('email');
const imagelink=document.getElementById('image');

//listen for auth status
firebase.auth().onAuthStateChanged(user=>{
  if(user) {
      console.log('User logged in: ',user.uid);
      userfield.innerText=user.displayName;
      emailfield.innerText=user.email;
      imagelink.src=user.photoURL;
  }
  else {
    window.location='./login.html';
  }
});

//router
const router=(controller,context) => {
  const cmd=`new ${controller}_controller('${context}');`
  console.log(cmd);
  eval(cmd);
};
window.onhashchange=()=> {
  const route=window.location.hash.substr(1);
  console.log(route);
  if(route=='' || route=='index') return;
  router(route,null);
};
window.location.hash='';