// Service Box Hover Effect
const serviceBoxes = document.querySelectorAll('.service-box');

serviceBoxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    box.style.transform = 'scale(1.05)';
    box.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
  });
  box.addEventListener('mouseout', () => {
    box.style.transform = 'scale(1)';
    box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});

// Testimonial Carousel (Automatic Slide Change)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-slide');

function changeTestimonial() {
  testimonials.forEach((testimonial, index) => {
    testimonial.classList.remove('active');
    if (index === currentTestimonial) {
      testimonial.classList.add('active');
    }
  });

  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Start the automatic carousel every 5 seconds
setInterval(changeTestimonial, 5000);

// Initialize the first testimonial
changeTestimonial();

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Floating WhatsApp Button Animation (Optional: A smooth animation when the button comes into view)
const whatsappButton = document.querySelector('.whatsapp-float');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    whatsappButton.style.opacity = '1';
    whatsappButton.style.transform = 'translateX(0)';
  } else {
    whatsappButton.style.opacity = '0';
    whatsappButton.style.transform = 'translateX(100px)';
  }
});
