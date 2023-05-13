$(function() {
    let button_area_articles = $('#button_area_articles');
    let button_area_topic = $('#button_area_topic');
    let button_area_setting = $('#button_area_setting');
    let content_area_articles = $('#content_area_articles');
    let content_area_topic = $('#content_area_topic');
    let content_area_setting = $('#content_area_setting');
  
    $( "#button_area_articles" ).click(function() {
        button_area_articles.removeClass('button_inactive');
        button_area_articles.addClass('button_active');
        
        button_area_topic.removeClass('button_active');
        button_area_setting.removeClass('button_active');
        button_area_topic.addClass('button_inactive');
        button_area_setting.addClass('button_inactive');

        content_area_articles.removeClass('content_area_inactive');
        content_area_articles.addClass('content_area_active');

        content_area_topic.removeClass('content_area_active');
        content_area_setting.removeClass('content_area_active');
        content_area_topic.addClass('content_area_inactive');
        content_area_setting.addClass('content_area_inactive');
    });
  
    $( "#button_area_topic" ).click(function() {
        button_area_topic.removeClass('button_inactive');
        button_area_topic.addClass('button_active');

        button_area_articles.removeClass('button_active');
        button_area_setting.removeClass('button_active');
        button_area_articles.addClass('button_inactive');
        button_area_setting.addClass('button_inactive');

        content_area_topic.removeClass('content_area_inactive');
        content_area_topic.addClass('content_area_active');

        content_area_articles.removeClass('content_area_active');
        content_area_setting.removeClass('content_area_active');
        content_area_articles.addClass('content_area_inactive');
        content_area_setting.addClass('content_area_inactive');
    });
    $( "#button_area_setting" ).click(function() {
        button_area_setting.removeClass('button_inactive');
        button_area_setting.addClass('button_active');

        button_area_topic.removeClass('button_active');
        button_area_articles.removeClass('button_active');
        button_area_topic.addClass('button_inactive');
        button_area_articles.addClass('button_inactive');

        content_area_setting.removeClass('content_area_inactive');
        content_area_setting.addClass('content_area_active');

        content_area_topic.removeClass('content_area_active');
        content_area_articles.removeClass('content_area_active');
        content_area_topic.addClass('content_area_inactive');
        content_area_articles.addClass('content_area_inactive');
    });
  });
  