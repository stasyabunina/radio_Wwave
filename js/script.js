"use strict";new Accordion(".accordion-container",{duration:400}),new Accordion(".guests__ac-container",{duration:400,openOnInit:[0]});var burger=document.querySelector(".burger"),menu=document.querySelector(".header__nav-wrapper"),menuLinks=menu.querySelectorAll(".nav-top__link"),closeNav=document.querySelector(".nav-top__close");burger.addEventListener("click",(function(){menu.classList.toggle("header__nav-wrapper--active"),document.body.classList.toggle("stop-scroll")})),menuLinks.forEach((function(e){e.addEventListener("click",(function(){menu.classList.remove("header__nav-wrapper--active"),document.body.classList.remove("stop-scroll")}))})),closeNav.addEventListener("click",(function(){menu.classList.remove("header__nav-wrapper--active"),document.body.classList.remove("stop-scroll")}));var element=document.querySelector(".broadcasts__select"),choices=new Choices(element,{searchEnabled:!1,itemSelectText:"",allowHTML:!0}),aboutValidation=new JustValidate(".about__form",{successFieldCssClass:"is-valid",errorFieldCssClass:"is-invalid",errorLabelCssClass:"is-label-invalid",errorLabelStyle:{color:"#D52B1E"}});aboutValidation.addField("#name",[{rule:"required",errorMessage:"Вы не ввели имя"},{rule:"minLength",value:2,errorMessage:"Поле должно содержать минимум :value символов"},{rule:"maxLength",value:12,errorMessage:"Поле должно содержать максимум :value символов"},{rule:"customRegexp",value:"^[a-zA-Zа-яА-Я -]+$",errorMessage:"Недопустимый формат"}]).addField("#email",[{rule:"required",errorMessage:"Вы не ввели e-mail"},{rule:"email",errorMessage:"Пожалуйста, введите действительный e-mail"}]).addField("#agree",[{rule:"required",errorMessage:"Обязательное согласие"}]);var modalValidation=new JustValidate(".pop-up__form",{successFieldCssClass:"is-valid",errorFieldCssClass:"is-invalid",errorLabelCssClass:"is-label-invalid",errorLabelStyle:{color:"#D52B1E"}});modalValidation.addField("#login",[{rule:"required",errorMessage:"Вы не ввели логин"},{rule:"minLength",value:2,errorMessage:"Поле должно содержать минимум :value символов"},{rule:"maxLength",value:30,errorMessage:"Поле должно содержать максимум :value символов"}]).addField("#password",[{rule:"required",errorMessage:"Вы не ввели пароль"},{rule:"minLength",value:5,errorMessage:"Пароль должен содержать минимум :value символов"},{rule:"maxLength",value:30,errorMessage:"Пароль должен содержать максимум :value символов"},{rule:"password",errorMessage:"Пароль должен содержать не меньше одной буквы или цифры"}]);var primaryBtn=document.querySelectorAll(".primary-broadcast__button"),secondaryBtn=document.querySelectorAll(".secondary-broadcast__button"),broadcastBtn=document.querySelectorAll(".header__broadcast-btn");secondaryBtn.forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("broadcast-btn--toggle")}))})),primaryBtn.forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("broadcast-btn--toggle")}))})),broadcastBtn.forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("broadcast-btn--toggle")}))}));var openPopUp=document.querySelectorAll(".js-header-btn"),closePopUp=document.querySelector(".pop-up__close-btn"),popUp=document.querySelector(".pop-up"),popUpWrapper=document.querySelector(".pop-up__wrapper");openPopUp.forEach((function(e){e.addEventListener("click",(function(){popUp.classList.toggle("pop-up--visible"),popUpWrapper.classList.toggle("pop-up__wrapper--visible"),document.body.classList.toggle("stop-scroll")}))})),closePopUp.addEventListener("click",(function(){popUp.classList.remove("pop-up--visible"),popUpWrapper.classList.remove("pop-up__wrapper--visible"),document.body.classList.remove("stop-scroll")}));var btnMore=document.querySelector(".podcasts__btn"),items=document.querySelectorAll(".podcasts__item");btnMore.addEventListener("click",(function(){items.forEach((function(e){e.classList.add("podcasts__item--visible"),btnMore.classList.add("podcasts__btn--hidden")}))}));var podcastBtn=document.querySelectorAll(".podcast__btn");function getWindowWidth(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)}function scrollToContent(e,t){if(!(t&&getWindowWidth()>576)){var r=e.dataset.scroll,s=document.getElementById(r).getBoundingClientRect().top;window.scrollBy({top:s,behavior:"smooth"})}}podcastBtn.forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("podcast__btn--toggle")}))}));var openSearch=document.querySelector(".search__btn"),searchForm=document.querySelector(".search__form");openSearch.addEventListener("click",(function(){searchForm.classList.add("search__form--active"),this.classList.add("search__btn--active")})),document.addEventListener("click",(function(e){var t=e.target;t.closest(".search__form")||t.closest(".search__btn")||(searchForm.classList.remove("search__form--active"),openSearch.classList.remove("search__btn--active"))}));var playlistsSwiper=new Swiper(".playlists__swiper",{slidesPerView:"auto",grabCursor:!0,spaceBetween:16}),aboutSwiper=new Swiper(".about__swiper",{slidesPerView:4,grabCursor:!0,spaceBetween:30,breakpoints:{1281:{slidesPerView:4},577:{slidesPerView:2,spaceBetween:30},320:{slidesPerView:"auto",spaceBetween:20}},navigation:{nextEl:".about__slider-btn--next",prevEl:".about__slider-btn--prev"},a11y:{prevSlideMessage:"К предыдущему слайду",nextSlideMessage:"К следующему слайду"}}),tabsBtns=document.querySelectorAll(".guests__ac-item-btn"),tabsItems=document.querySelectorAll(".guests__tab");tabsBtns.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.dataset.path;tabsBtns.forEach((function(e){e.classList.remove("guests__ac-item-btn--active")})),e.currentTarget.classList.add("guests__ac-item-btn--active"),tabsItems.forEach((function(e){e.classList.remove("guests__tab--active")})),document.querySelector('[data-target="'.concat(t,'"]')).classList.add("guests__tab--active"),scrollToContent(this,!0)}))}));var obj={},prop=null==obj?void 0:obj.prop;
//# sourceMappingURL=script.js.map
