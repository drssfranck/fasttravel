document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".banner"); 
    let currentSlide = 0; 
    const slideInterval = 5000; 

    function showSlide(index) {
    
        slides.forEach(slide => slide.classList.remove("active"));
        
        slides[index].classList.add("active");
    }

    function nextSlide() {
        
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    
    setInterval(nextSlide, slideInterval);

    
    showSlide(currentSlide);
});