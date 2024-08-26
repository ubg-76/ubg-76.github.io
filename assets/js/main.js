let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    const visibleSlides = 5; // Hiển thị 5 sản phẩm trên một hàng
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides - visibleSlides + 1) {
        slideIndex = 0; // Quay về slide đầu tiên khi đến slide cuối
    } else if (index < 0) {
        slideIndex = totalSlides - visibleSlides; // Quay về slide cuối cùng khi về trước quá nhiều
    } else {
        slideIndex = index;
    }

    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

if(document.querySelector('.slides') != undefined){
// Khởi tạo slide đầu tiên
showSlide(slideIndex);    
}


//khi lan chuot xuong > 100px thi hien button
window.onscroll = function() {
    var button = document.querySelector('.scroll-to-top');
    if (document.documentElement.scrollTop > 100) {
        button.style.display = 'flex';
    } else {
        button.style.display = 'none';
    }
};

function scrollToTop(){
     window.scrollTo({ top: 0, behavior: 'smooth' });
}



