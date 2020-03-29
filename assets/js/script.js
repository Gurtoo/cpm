function defaultSwiper(pagination = false) {
    let settings = {
        spaceBetween: 30,
        effect: 'fade',
        speed: 1000,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        fadeEffect: {
            crossFade: true
        },
    }

    if (pagination) {
        settings = Object.assign(settings, {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    }

    return settings;
}

new Swiper('.swiper-top', defaultSwiper());

new Swiper('.swiper-center', defaultSwiper(true));

new Swiper('.swiper-bottom', defaultSwiper(true));

function scrollToElem() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top - 100;
    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
    return false;
}
function defaultSwiper() {
    let settings = {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesPerGroup: 3,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }
    return settings;
}
$('.product__tab').on('shown.bs.tab', function (e) {
    new Swiper('.slider__products', defaultSwiper());
});
$(".search-toggle").click(function (e) {
    e.preventDefault();
    $("#search-toggle").toggle(1000);
});
$(function() {
    var catalogueButton =  $('.button-section button'),
        catalogueItem = $('.check-box-menu');
    function dropDownItem(button,item){
        // item.slideUp();
        button.on('click',function(){
            item.slideToggle();
        });
    }

    dropDownItem(catalogueButton,catalogueItem);

    var slider = document.getElementById('slider'),
        minValueDiv = document.querySelector('.range-slider .min-value'),
        maxValueDiv = document.querySelector('.range-slider .max-value');

    if(slider) {
        noUiSlider.create(slider, {
            start: [0, 30000000],
            connect: true,
            step: 1000,
            range: {
                'min': 0,
                'max': 30000000
            }
        });
        slider.noUiSlider.on('update', function (values, handle) {
            minValueDiv.textContent = parseInt(values[0]);
            maxValueDiv.textContent = parseInt(values[1]);
        });
    }

    $(".content_navigation_product_nav").on("click", "a", scrollToElem);

    $(".content_top_swip_animation").on("click", "a", scrollToElem);

    $(".content_view_wrap_info").on("click", "a", scrollToElem);
});

$(function() {
    $("#menu-transform").on("click", function() {
        $("body").addClass("modal-open")
        $(this)
            .closest(".content_container")
            .find(".content")
            .removeClass("hidden-menu")
            .eq($(this).index())
            .addClass("shown-menu")
        $(".mask").addClass('active_mask')
        $("#menu").addClass('shown-right')
            .eq($(this).index())
            .removeClass("hidden-right")
            .closest(".content_container")
            .find(".header_fixed-top")
            .addClass("shown-menu")
        $(".offcanvas-close, .active_mask").click(function() {
            $("body").removeClass("modal-open")
            $(this).removeClass('shown-menu')
            $(".shown-menu").removeClass('shown-menu')
                .eq($(this).index())
                .addClass("hidden-menu")
            $("#menu").removeClass('shown-right')
                .eq($(this).index())
                .addClass("hidden-right")
            $(".active_mask").removeClass('active_mask')
        });
    });
});
$(function() {
    $(".btn-delete-product").on("click", function(e) {
        e.preventDefault();
        $(this)
            .closest(".content_basket_cart_content_pad-top")
            .remove()
    });
    $(".content_basket_cart_footer_btn-add").on("click", function(e) {
        e.preventDefault();
        $(".content_basket_buy")
            .addClass("active-buy")
        $(".content_basket_cart").hide()
    });
});
$(document).ready(function() {
    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


});
$(window).on("scroll", function() {
    let scrolled = $(this).scrollTop();
    let headerElem = $('.header_index');
    scrolled > 0 ? headerElem.addClass('scrolled') : headerElem.removeClass('scrolled');
});

let gallery = document.getElementById('dynamic');
if (gallery) {
    gallery.addEventListener('click', function() {
        lightGallery(gallery, {
            dynamic: true,
            mode: 'lg-fade',
            dynamicEl: [{
                "src": './assets/img/img-project-modal.jpg',
                'thumb': './assets/img/img-project-modal.jpg'
            }, {
                'src': './assets/img/img-project-modal2.jpg',
                'thumb': './assets/img/img-project-modal2.jpg'
            }, {
                'src': './assets/img/img-project-modal3.jpg',
                'thumb': './assets/img/img-project-modal3.jpg'
            }, {
                'src': './assets/img/img-project-modal4.jpg',
                'thumb': './assets/img/img-project-modal4.jpg'
            }, {
                'src': './assets/img/img-project-modal5.jpg',
                'thumb': './assets/img/img-project-modal5.jpg'
            }]
        })
    });
}

var product_gal_vertical = new Swiper('.product_gal_vertical', {
    direction: 'vertical',
    spaceBetween: 40,
    slidesPerView: 4,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var gallerySingle = lightGallery(document.getElementById('product-gallery-single'));
var product_gal = new Swiper('.product_gal', {
    spaceBetween: 0,
    loop: false,
    loopedSlides: 5, //looped slides should be the same
    thumbs: {
        swiper: product_gal_vertical,
    },
    on: {
        click: function(e) {
            e.preventDefault();

            gallerySingle.slide(product_gal.activeIndex);
        }
    }
});
