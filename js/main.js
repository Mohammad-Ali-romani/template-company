let body = document.getElementsByTagName('body')[0];
let navbar = document.createElement('header');
navbar.innerHTML = `<nav class="navbar navbar-expand-md fixed-top" id="navbarHeader">
<div class="container">
  <a class="navbar-brand" href="#">شركتي</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="تبديل التنقل">
    <i class="fa-solid fa-bars"></i>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
  <hr>
    <ul class="navbar-nav me-auto mb-2 mb-md-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">الصفحة الرئيسية</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="works.html">أعمال</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="aboutMe.html">معلومات عنا</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contactUs.html">راسلنا</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sendUs.html">رأيك عنا</a>
      </li>
    </ul>
  </div>
</div>
</nav>`;
let footer = document.createElement('footer');
footer.classList.add('pt-5');
footer.classList.add('pb-3');
footer.classList.add('text-center');
footer.innerHTML = `
<div class="row">
  <div class="col-lg-6">
    <h5 class="text-center">روابط</h5>
    <hr class="ms-lg-3 me-lg-5">
    <ul class="list-unstyled text-center ">
      <li><a href="#">أعمال</a></li>
      <li><a href="#">خدمات</a></li>
      <li><a href="#">معلومات عنا</a></li>
    </ul>
  </div>
  <div class="col-lg-6">
    <h5 class="text-center mt-sm-0 mt-3">وسائل التواصل</h5>
    <hr class="ms-lg-5 me-lg-3">
    <div class="d-flex justify-content-center align-items-center">
      <ul class="list-unstyled text-end ">
        <li> <span class="icon-social-media"><i class="fa-brands fa-telegram"></i> </span><a href="#">+963 123 234 294</a></li>
        <li><span class="icon-social-media"><i class="fa-brands fa-whatsapp"></i></span> <a href="#">+963 123 234 294</a></li>
        <li><span class="icon-social-media"><i class="fa-regular fa-envelope"></i></span> <a href="#">company@gmail.com</a></li>
      </ul>
    </div>
  </div>
</div>`;
body.prepend(navbar);
body.appendChild(footer);
window.onscroll = function(e){
  if(window.scrollY > 0 ){
    navbarHeader.style.backgroundColor = "rgb(0 0 0 / 77%)";
  }else{
    navbarHeader.style.backgroundColor = "#7c19c7";
  }
}