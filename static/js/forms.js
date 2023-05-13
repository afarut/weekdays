$(function() {
    let form_register = $('.form_register');
    let form_auth_phone = $('.form_auth_phone');
    let form_auth_email = $('.form_auth_email');
    let other_auto = $('.top_111');
  
    $( "#auto_email" ).click(function() {
        other_auto.addClass('other_auto_inactive');
        form_auth_email.removeClass('form_inactive');
        form_auth_email.addClass('form_active');
    });
  
    $( "#auto_phone" ).click(function() {
        other_auto.addClass('other_auto_inactive');
        form_auth_phone.removeClass('form_inactive');
        form_auth_phone.addClass('form_active');
    });
    $( "#register" ).click(function() {
        form_register.removeClass('form_inactive');
        form_auth_email.removeClass('form_active');
        form_auth_email.addClass('form_inactive');
    });
    $( "#register_2" ).click(function() {
        form_register.removeClass('form_inactive');
        form_auth_phone.removeClass('form_active');
        form_auth_phone.addClass('form_inactive');
    });
    $( "#back_1" ).click(function() {
        other_auto.removeClass('other_auto_inactive');
        form_auth_phone.addClass('form_inactive');
        form_auth_phone.removeClass('form_active');
    });
    $( "#back_2" ).click(function() {
        other_auto.removeClass('other_auto_inactive');
        form_auth_email.addClass('form_inactive');
        form_auth_email.removeClass('form_active');
    });
    $( "#back_3" ).click(function() {
        form_register.addClass('form_inactive');
        form_auth_email.addClass('form_active');
        form_auth_email.removeClass('form_inactive');
    });
  });
  