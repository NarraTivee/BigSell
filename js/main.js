var navbar = document.querySelector('.nav_bar_close');
var burger = document.querySelector('.burger_btn');
var abou_us_info_block = document.querySelector('.about_us_info_close');
var contacts_info_block = document.querySelector('.Contacts_info_close');
var news_info_block = document.querySelector('.News_info_close');

function myfunction(){
    navbar.classList.toggle('nav_bar_open');
    burger.classList.toggle('burger_open');
    if (abou_us_info_block.classList.contains('about_us_info_open')){
        abou_us_info_block.classList = 'about_us_info_close'
    }
    if (contacts_info_block.classList.contains('Contacts_info_open')){
        contacts_info_block.classList = 'Contacts_info_close'
    }
    if (news_info_block.classList.contains('News_info_open')){
        news_info_block.classList = 'News_info_close'
    }
}

function about_us_function(){
    abou_us_info_block.classList.toggle('about_us_info_open');
    if (contacts_info_block.classList.contains('Contacts_info_open')){
        contacts_info_block.classList = 'Contacts_info_close'
    }
    if (news_info_block.classList.contains('News_info_open')){
        news_info_block.classList = 'News_info_close'
    }
}

function Contacts_function(){
    contacts_info_block.classList.toggle('Contacts_info_open');
    if (abou_us_info_block.classList.contains('about_us_info_open')){
        abou_us_info_block.classList = 'about_us_info_close'
    }
    if (news_info_block.classList.contains('News_info_open')){
        news_info_block.classList = 'News_info_close'
    }
}

function News_function(){
    news_info_block.classList.toggle('News_info_open');
    if (contacts_info_block.classList.contains('Contacts_info_open')){
        contacts_info_block.classList = 'Contacts_info_close'
    }
    if (abou_us_info_block.classList.contains('about_us_info_open')){
        abou_us_info_block.classList = 'about_us_info_close'
    }
}