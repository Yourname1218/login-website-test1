const text_box = document.querySelector('.text-box');
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
    text_box.classList.add('active-text');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-login');
    text_box.classList.remove('active-text');
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-student');
    wrapper.classList.remove('active-teacher');
});


//-------------------以下是驗證三次密碼鎖定功能----------------------------------------- 

var wrongAttempts = 0;
var correctPassword = '123456'; // 正確的密碼

function checkPassword() {
    var inputpwd = document.getElementById('pwd');
    var wrongtext = document.getElementById('wrongtext');
    
    if (inputpwd.value !== correctPassword) {
        wrongAttempts++;
        if (wrongAttempts >= 3) {
            inputpwd.disabled = true;
            alert('You have made an incorrect entry three times. Please try again in 30 seconds.');
            setTimeout(function() {
                inputpwd.disabled = false;
                wrongtext.innerHTML = '';
                wrongAttempts = 0;
            }, 30000);
        } else {
            alert('Password incorrect, please try it again');
            message.innerHTML = 'Format error, please enter again';
        }
    }
    inputpwd.value = '';
}

// -----------------------以下是驗證email是否正確(使用正規表達式)----------------------------

function checkEmail() {
    var intemail = document.getElementById('inputemail');
    var message = document.getElementById('mesemail');
    
    if (intemail.validity.patternMismatch) {
        alert('Format error, please enter again');
        return false;  // 返回 false 表示電子郵件地址不符合規定
    } else {
        message.innerHTML = '';
        return true;  // 返回 true 表示電子郵件地址符合規定
    }
}

// -------------------------以下是將password與email驗證改成同步執行-------------------------------

function checkBoth() {
    if (checkEmail()) {
        checkPassword();
    }
}

document.getElementById('loginButton').onclick = checkBoth;
document.getElementById('signup').onclick = checkEmail;