// Exercise #1: The DOM Detective

let title = document.querySelector("title");
let logo = document.querySelector(".navi_banner a");
let findYourCourse = document.querySelector(".navi_menu .highlight a");
let h1 = document.querySelector(".g-row h1").innerHTML;
let coursesName = document.querySelector(".navi_menu_dropdown_nested-dropdown");
let CampusAmt = document.querySelector(".facts_list_item_quantity");
let numInstructors = document.querySelector(".facts_list_item_quantity");
let logos = document.querySelector(".Employers__list___1cuG_");
let gaSocialLink1 = document.querySelector(".navi_footer-social-icons_facebook");
let gaSocialLink2 = document.querySelector(".navi_footer-social-icons_twitter");
let gaSocialLink3 = document.querySelector(".navi_footer-social-icons_linkedin");
let gaSocialLink4 = document.querySelector(".navi_footer-social-icons_instagram");
let gaSocialLink5 = document.querySelector(".navi_footer-social-icons_youtube");
let email = document.querySelector(".navi_footer-signup-email-input")





// Exercises #2: Working with the CSSOM

let logo1 = document.querySelector(".lnXdpd");
let srcImageA = logo.src;

let image = document.querySelectorAll("img")
let srcImageB = image[1].src
image[1].src = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
'https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg'
image[1].srcset = "https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
'https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg'

let search = document.querySelector(".FPdoLc.lJ9FBc .gNO89b")

search = document.querySelector(".FPdoLc.lJ9FBc .gNO89b")
search.value = "Yahoo!";