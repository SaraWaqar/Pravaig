
$(document).ready(function () {
// hamza js 

    $('.icon-bar').click(function () {
        $(this).toggleClass('icon-bar-click')
        $('.navbar-collapse').toggleClass('nav-show')
        $('body').toggleClass('overflow-hidden')

    });
    $('.navbar-light .navbar-nav .nav-link').click(function () {
        $('.navbar-collapse').removeClass('nav-show')
        $('body').removeClass('overflow-hidden')
        $('.icon-bar').removeClass('icon-bar-click')
    });
    $('.mobMenu-qa ul li a').click(function () {
        $('.navbar-collapse').removeClass('nav-show')
        $('body').removeClass('overflow-hidden')
        $('.icon-bar').removeClass('icon-bar-click')
    });


});


$('.car-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false
  });


  $('.modal-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false
  });
// slider

$('.multiple-items').slick({

  mobileFirst: true, 
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button className="slide-arrow prev-arrow"><i className="fas fa-chevron-left"></i></button>',
  nextArrow: '<button className="slide-arrow next-arrow"><i className="fas fa-chevron-right"></i></button>',
  arrows:true,
  dots:false,

  responsive: [
     {
        breakpoint: 599,
        settings: "unslick",
        dots: true,
        infinite: false,
       autoplay:false


     }
  ]


});









  var Accordion = function() {
  
    var
      toggleItems,
      items;
    
    var _init = function() {
      toggleItems     = document.querySelectorAll('.accordion__itemTitleWrap');
      toggleItems     = Array.prototype.slice.call(toggleItems);
      items           = document.querySelectorAll('.accordion__item');
      items           = Array.prototype.slice.call(items);
      
      _addEventHandlers();
      TweenLite.set(items, {visibility:'visible'});
      TweenMax.staggerFrom(items, 0.9,{opacity:0, x:-100, ease:Power2.easeOut}, 0.3)
    }
    
    var _addEventHandlers = function() {
      toggleItems.forEach(function(element, index) {
        element.addEventListener('click', _toggleItem, false);
      });
    }
    
    var _toggleItem = function() {
      var parent = this.parentNode;
      var content = parent.children[1];
      if(!parent.classList.contains('is-active')) {
        parent.classList.add('is-active');
        TweenLite.set(content, {height:'auto'})
        TweenLite.from(content, 0.6, {height: 0, immediateRender:false, ease: Back.easeOut})
        
      } else {
        parent.classList.remove('is-active');
        TweenLite.to(content, 0.3, {height: 0, immediateRender:false, ease: Power1.easeOut})
      }
    }
    
    return {
      init: _init
    }
    
  }();
  
  Accordion.init();


// for modal slider refresh

  $('.modal').on('shown.bs.modal', function (e) {
    $('.modal-slider').slick('setPosition');
  
  })