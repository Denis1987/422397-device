"use strict";




var linkForm = document.querySelector(".search_form");
var linkInput = document.querySelector(".search_form_header");
var linkSubmit = document.querySelector(".search_submit");

linkForm.addEventListener("focus", function (evt) {
    linkInput.classList.add("search_form_header_show");
    linkSubmit.classList.add("search_submit_show");


});



var firstBtn = document.querySelector(".slider_btn_1");
var secondBtn = document.querySelector(".slider_btn_2");
var thirdBtn = document.querySelector(".slider_btn_3");
var firstSlide = document.querySelector(".first_slide");
var secondSlide = document.querySelector(".second_slide");
var thirdSlide = document.querySelector(".third_slide");

firstSlide.classList.add("slide_hidden_show");
firstBtn.classList.add("circle_btn_here");

firstBtn.addEventListener("click", function (evt) {
    firstSlide.classList.add("slide_hidden_show");
    secondSlide.classList.remove("slide_hidden_show");
    thirdSlide.classList.remove("slide_hidden_show");
    firstBtn.classList.add("circle_btn_here");
    secondBtn.classList.remove("circle_btn_here");
    thirdBtn.classList.remove("circle_btn_here");
});

secondBtn.addEventListener("click", function (evt) {
    secondSlide.classList.add("slide_hidden_show");
    firstSlide.classList.remove("slide_hidden_show");
    thirdSlide.classList.remove("slide_hidden_show");
    firstBtn.classList.remove("circle_btn_here");
    secondBtn.classList.add("circle_btn_here");
    thirdBtn.classList.remove("circle_btn_here");
});

thirdBtn.addEventListener("click", function (evt) {
    thirdSlide.classList.add("slide_hidden_show");
    firstSlide.classList.remove("slide_hidden_show");
    secondSlide.classList.remove("slide_hidden_show");
    firstBtn.classList.remove("circle_btn_here");
    secondBtn.classList.remove("circle_btn_here");
    thirdBtn.classList.add("circle_btn_here");
});


var mapBtn = document.querySelector(".map");
var popupMap = document.querySelector(".popup_map");
var popupMapClose = document.querySelector(".popup_close_map");

mapBtn.addEventListener("click", function (evt) {
    popupMap.classList.add("popup_map_show");
});

popupMapClose.addEventListener("click", function (evt) {
    popupMap.classList.remove("popup_map_show");
});


var writeToUs = document.querySelector(".write_to_us");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup_close");

writeToUs.addEventListener("click", function (evt) {
    popup.classList.add("popup_show");

});
popupClose.addEventListener("click", function (evt) {
    popup.classList.remove("popup_show");
});




var deliveryDisplay = document.querySelector(".delivery_display");
var guaranteeDisplay = document.querySelector(".guarantee_display");
var loanDisplay = document.querySelector(".loan_display");

var serviceDelivery = document.querySelector(".service_delivery");
var serviceGuarantee = document.querySelector(".service_guarantee");
var serviceLoan = document.querySelector(".service_loan");

serviceDelivery.classList.add("service_info_show");
deliveryDisplay.classList.add("display_show");


deliveryDisplay.addEventListener("click", function (evt) {
    serviceDelivery.classList.add("service_info_show");
    serviceGuarantee.classList.remove("service_info_show");
    serviceLoan.classList.remove("service_info_show");
    deliveryDisplay.classList.add("display_show");
    guaranteeDisplay.classList.remove("display_show");
    loanDisplay.classList.remove("display_show");
});

guaranteeDisplay.addEventListener("click", function (evt) {
    serviceGuarantee.classList.add("service_info_show");
    serviceDelivery.classList.remove("service_info_show");
    serviceLoan.classList.remove("service_info_show");
    guaranteeDisplay.classList.add("display_show");
    deliveryDisplay.classList.remove("display_show");
    loanDisplay.classList.remove("display_show");
});

loanDisplay.addEventListener("click", function (evt) {
    serviceLoan.classList.add("service_info_show");
    serviceDelivery.classList.remove("service_info_show");
    serviceGuarantee.classList.remove("service_info_show");
    loanDisplay.classList.add("display_show");
    deliveryDisplay.classList.remove("display_show");
    guaranteeDisplay.classList.remove("display_show");
});

var popup = document.querySelector(".popup");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        login.classList.add("not_valid");
        email.classList.add("not_valid");
    }
});
