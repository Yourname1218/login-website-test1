const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const loginlink_student = document.querySelector('.login-link2');
const loginlink_teacher = document.querySelector('.login-link3');
const registerlink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon-close');
const butteach = document.querySelector('.butteach');
const butstud = document.querySelector('.butstud');


/*---------------------------------------------------------------*/ 
// 跳轉到學生老師選擇
registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

/*---------------------------------------------------------------*/ 
// 跳轉到學生註冊介面與跳轉至老師介面
butstud.addEventListener('click', ()=>{
    wrapper.classList.add('active-student');
});

butteach.addEventListener('click', ()=>{
    wrapper.classList.add('active-teacher');
});

loginlink_student.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-student');
});

loginlink_teacher.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-teacher');
});

/*----------------------------------------------------------------*/

btnLogin.addEventListener('click', ()=>{
    wrapper.classList.add('active-login');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-login');
});