var content = ``;
// Đổi sang form signUp
function changeToSignUp(){
    xoaInput();
    document.getElementById('thongBao').style.display='none';
    document.getElementById('signup-success').style.display='none';
    document.getElementById('signIn-container').style.display='none';
    document.getElementById('signUp-container').style.display='block';
}

// Đổi sang form SignIn
function changeToSignIn(){
    document.getElementById('username-signin').value='';
    document.getElementById('pass-signin').value='';
    document.getElementById('signUp-container').style.display='none';
    document.getElementById('signIn-container').style.display='block';
}

// Đăng kí tài khoản
function dangKi(){
    content='';
    var isValidation=true;
    kiemTraUsername('username');
    kiemTraPass("pass");
    kiemTraEmail("email");
    kiemTraJob("job");
    kiemTraAge("age");
    document.getElementById('thongBao').style.display='block';
    document.getElementById('listThongBao').innerHTML=content;
    isValidation &= kiemTraUsername("username") && kiemTraPass("pass") && kiemTraEmail("email") &&  kiemTraJob("job") && kiemTraAge("age");
    if (isValidation){
        changeToSignIn();
        xoaInput();
        document.getElementById('thongBao').style.display='none';
        document.getElementById('signup-success').style.display='block';
    }
    return false;
}

// Clear input khi change form
function xoaInput(){
    document.getElementById('username').value='';
    document.getElementById('pass').value='';
    document.getElementById('email').value='';
    document.getElementById('job').value='';
    document.getElementById('age').value='';

}
/*------------Validation--------------- */
function kiemTraUsername (IdInput,message){
    var text = document.getElementById(IdInput).value;
    if (text.length===0) {
        content+=`<li>Tên đăng nhập không được để trống.</li>`;
        return false;
    } else if (text.length>30) {
        content+=`<li>Tên đăng nhập không được quá 30 kí tự.</li>`;
        return false;
    } 
    return true;
}

function kiemTraPass(IdInput){
    var text = document.getElementById(IdInput).value;
    if (text.length===0) {
        content+=`<li>Mật khẩu không được để trống.</li>`;
        return false;
}   
return true;
}

function kiemTraEmail(IdInput){
    var text = document.getElementById(IdInput).value;
    var pattern = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    if (pattern.test(text)===false){
        content+=`<li>Email chưa hợp lệ.</li>`
        return false;
    }
    return true;
}

function kiemTraJob(IdInput){
    var text = document.getElementById(IdInput).value;
    if (text.length===0){
        content+=`<li>Nghề nghiệp không được để trống</li>`
        return false;
    } return true;
}

function kiemTraAge(IdInput){
    var age = document.getElementById(IdInput).value;
    if (age.length===0) {
        content+=`<li>Tuổi không được để trống.</li>`;
        return false;
    }
    else if(isNaN(age)){
        content+=`<li>Tuổi phải là số</li>`
        return false;
    }
     else if (parseInt(age)<18 || parseInt(age)>40) {
        content+=`<li>Tuổi từ 18 đến 40 tuổi.</li>`;
        return false;
    } 
    return true;
}

