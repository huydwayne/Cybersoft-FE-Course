// Input
// DOM toi hai the input -> lay duoc value cua username va password
var USERNAME_ERROR_MESSAGE = 'Tên đăng nhập phải từ 4-10 kí tự'
var PASSWORD_ERROR_MESSAGE = 'Password phải từ 4-10 kí tự'

$('#btnSubmit').click(loginForm);
function loginForm(){
    $("#usernameError").html('');
    $("#passwordError").html('');
    var username = $("#txtUserName").val();

    var password = $("#txtPassword").val();
    

    // Kiểm tra đăng nhập
    // Nếu 4 <= value <=10 => log ra đăng nhập thành công
    // Ngược lại => Tạo thẻ span với nội dung là value phải từ 4-10 ký tự
    // Cho span màu đỏ
    // JS
    // var tag = document.createElement("span");
    // tag.innerHTML="Đăng nhập thất bại";


    // Jquery
    // $("<span>Đăng nhập thất bại</span>");
    checkLength(username,USERNAME_ERROR_MESSAGE,"#usernameError")
    checkLength(password,PASSWORD_ERROR_MESSAGE,"#passwordError")
    if (checkLength(username,USERNAME_ERROR_MESSAGE,"#usernameError") &&
    checkLength(password,PASSWORD_ERROR_MESSAGE,"#passwordError"))

    {
      
        alert('Đăng nhập thành công!');
    }
    
    // if (username.length>=4 && username.length<=10){
    //     alert('Đăng nhập thành công!');
    // } else 
    // {
    //    var tag = $("<span>Username phải từ 4 đến 10 kí tự!</span>");
    //    $("#usernameError").html(tag);
    // }

    // if (password.length>=4 && password.length<=10){
    //     alert('Đăng nhập thành công!');
    // } else 
    // {
    //    var tagPass = $("<span>Password phải từ 4 đến 10 kí tự!</span>");
    //    $("#passwordError").html(tagPass);
    // }
}

function checkLength(input,message,divError){
    
    if (input.length>=4 && input.length<=10){
        return true;
    } else 
    {
       var tag = $(`<span>${message}</span>`);
       tag.css('color','red');
       $(divError).html(tag);
       return false;
    }

    
}