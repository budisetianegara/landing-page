// event pada saat link di-klik
//scroll
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("yellow");

  } else {
    $("nav").removeClass("yellow");
  }

});
// $("#header").on("scroll", function () {
//   if ($("#header").scrollTop()) {
//     $(".navbar").addClass("black");
//   } else {
//     $(".navbar").removeClass("black");
//   }
// })

$(".nav-link").on("click", function (e) {

  // ambil isi href 
  var goTo = $(this).attr("href");
  // tangkap elemen yang bersangkutan 
  var elementGoTo = $(goTo);

  // pindahkan scroll
  $('html, body').animate({
    scrollTop: elementGoTo.offset().top - 30
  }, 1000, 'easeInOutExpo')

  e.preventDefault();

});
// parallax
// about
// $(document).ready(function () {
//   $(".pKiri").addClass("pMuncul");
//   $(".pKanan").addClass("pMuncul");
// })

// $(window).scroll(function () {
//   var wScroll = $(this).scrollTop();
//   console.log(wScroll);

// document.getElementById("cart-info").addEventListener("click", function () {
//   const cart = document.getElementById("cart");
//   cart.classList.toggle("show-cart");
//   console.log(cart);

// });
// });

// show cart
// (function () {
//   const cartInfo = document.getElementById("cart-info");
//   const cart = document.getElementById('cart');
//   cartInfo.addEventListener('click', function () {
//     cart.classList.toggle("show-cart");
//   });
// })();

// //add items to the cart
// (function () {
//   const cartBtn = document.querySelectorAll('.store-item-icon');
//   cartBtn.forEach(function (btn) {
//     btn.addEventListener('click', function (event) {
//       // console.log(event.target);
//       if (event.target.parentElement.classList.contains('store-item-icon')) {
//         let fullPath =
//           event.target.parentElement.previousElementSibling.src;
//         let pos = fullPath.indexOf('img') + 3;
//         let partPath = fullPath.slice(pos);
//         console.log(partPath);
//         const item = {};
//         item.img = `img-cart${partPath}`;
//         let name = event.target.parentElement.parentElement.nextElementSibling;
//         // console.log(name);
//         // console.log(item);
//         innerHTML =







//       }
//     });
//   });


// })();