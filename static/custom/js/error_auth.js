$(document).ready(function(){
    $(function(){
        let content_email = document.getElementById("error_alert_email").innerHTML;
        let content_phone = document.getElementById("error_alert_phone").innerHTML;
        let content_register = document.getElementById("error_alert_register").innerHTML;
        if (content_email!=''){
            alert('Ошибка'+content_email);
        }
        if (content_phone!=''){
            alert('Ошибка'+content_phone);
        }
        if (content_register!=''){
            alert('Ошибка' + content_register);
        }
    });
});