       // Create floating particles
       function createParticles() {
        const container = document.getElementById('particles');
        const particleCount = 15;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('span');
            particle.classList.add('particle');
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 10 + 5;
            
            // Random animation delay
            const delay = Math.random() * 10;
            
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = posX + '%';
            particle.style.top = posY + '%';
            particle.style.animationDelay = delay + 's';
            
            container.appendChild(particle);
        }
    }
    
    // Form validation
    document.getElementById('submitBtn').addEventListener('click', function() {
        const phoneInput = document.getElementById('phoneInput');
        const phoneNumber = phoneInput.value.trim();
        
        if (!phoneNumber) {
            alert('الرجاء إدخال رقم الموبايل');
            phoneInput.focus();
            return;
        }
        
        if (!/^\d{10,11}$/.test(phoneNumber)) {
            alert('الرجاء إدخال رقم موبايل صحيح');
            return;
        }
        
        // Show success message
        alert('تم استلام طلبك بنجاح! سنتصل بك قريباً');
        phoneInput.value = '';
    });
    
    // Animate items on scroll
    function animateOnScroll() {
        const cards = document.querySelectorAll('.reward-card, .testimonial-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
    
    // Initialize
    window.addEventListener('load', function() {
        createParticles();
        animateOnScroll();
    });

    document.addEventListener('DOMContentLoaded', function() {
      // Function to check if element is in viewport
      function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
              rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
              rect.bottom >= 0
          );
      }
      
      // Animate elements when they come into view
      function animateOnScroll() {
          const items = document.querySelectorAll('.news-item');
          
          items.forEach(item => {
              if (isInViewport(item)) {
                  item.classList.add('animated');
              }
          });
      }
      
      // Initial animation check
      animateOnScroll();
      
      // Add scroll event listener
      window.addEventListener('scroll', animateOnScroll);
      
      // Add hover effect to buttons
      const buttons = document.querySelectorAll('.cta-button');
      
      buttons.forEach(button => {
          button.addEventListener('mouseover', function() {
              this.style.transform = 'translateY(-3px)';
              this.style.boxShadow = '0 6px 12px rgba(76, 175, 80, 0.25)';
          });
          
          button.addEventListener('mouseout', function() {
              this.style.transform = '';
              this.style.boxShadow = '';
          });
      });
  });