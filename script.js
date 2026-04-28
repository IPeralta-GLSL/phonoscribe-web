document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });

    let lastScrollTop = 0;
    const scrollDirectionElement = document.documentElement;

    function handleScrollAnimation() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isScrollingDown = scrollTop > lastScrollTop;
        lastScrollTop = scrollTop;

        document.querySelectorAll('.feature-card').forEach((el, i) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.85;
            
            if (isVisible && !isScrollingDown) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
                el.style.filter = 'blur(0)';
            } else if (isVisible && isScrollingDown) {
                const delay = i * 0.1;
                el.style.transitionDelay = `${delay}s`;
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
                el.style.filter = 'blur(0)';
            } else if (!isVisible && isScrollingDown) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(60px) scale(0.8)';
                el.style.filter = 'blur(4px)';
                el.style.transitionDelay = '0s';
            } else {
                el.style.opacity = '0';
                el.style.transform = 'translateY(40px) scale(0.9)';
                el.style.filter = 'blur(2px)';
                el.style.transitionDelay = '0s';
            }
        });

        document.querySelectorAll('.arch-card').forEach((el, i) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.85;
            
            if (isVisible && !isScrollingDown) {
                el.style.opacity = '1';
                el.style.transform = 'translateX(0) rotate(0deg)';
                el.style.filter = 'blur(0)';
            } else if (isVisible && isScrollingDown) {
                el.style.opacity = '1';
                el.style.transform = 'translateX(0) rotate(0deg)';
                el.style.filter = 'blur(0)';
            } else if (!isVisible && isScrollingDown) {
                el.style.opacity = '0';
                el.style.transform = 'translateX(-50px) rotate(-5deg)';
                el.style.filter = 'blur(4px)';
            } else {
                el.style.opacity = '0';
                el.style.transform = 'translateX(50px) rotate(5deg)';
                el.style.filter = 'blur(2px)';
            }
        });

        document.querySelectorAll('.step').forEach((el, i) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.85;
            
            if (isVisible && !isScrollingDown) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
                el.style.filter = 'blur(0)';
            } else if (isVisible && isScrollingDown) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
                el.style.filter = 'blur(0)';
            } else if (!isVisible && isScrollingDown) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(80px) scale(0.7)';
                el.style.filter = 'blur(6px)';
            } else {
                el.style.opacity = '0';
                el.style.transform = 'translateY(40px) scale(0.8)';
                el.style.filter = 'blur(3px)';
            }
        });

        document.querySelectorAll('.tech-item').forEach((el, i) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.85;
            
            if (isVisible) {
                el.style.opacity = '1';
                el.style.transform = 'scale(1)';
            } else {
                el.style.opacity = '0';
                el.style.transform = 'scale(0.5)';
            }
        });

        const downloadSection = document.querySelector('.download-content');
        if (downloadSection) {
            const rect = downloadSection.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.8;
            
            if (isVisible) {
                downloadSection.style.opacity = '1';
                downloadSection.style.transform = 'scale(1) rotate(0deg)';
            } else {
                downloadSection.style.opacity = '0';
                downloadSection.style.transform = 'scale(0.7) rotate(5deg)';
            }
        }

        document.querySelectorAll('.section-header').forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.8;
            
            if (isVisible && !isScrollingDown) {
                el.querySelector('h2').style.opacity = '1';
                el.querySelector('h2').style.transform = 'translateY(0)';
                el.querySelector('p').style.opacity = '1';
                el.querySelector('p').style.transform = 'translateY(0)';
            } else if (!isVisible) {
                el.querySelector('h2').style.opacity = '0';
                el.querySelector('h2').style.transform = 'translateY(-40px)';
                el.querySelector('p').style.opacity = '0';
                el.querySelector('p').style.transform = 'translateY(30px)';
            }
        });
    }

    window.addEventListener('scroll', handleScrollAnimation, { passive: true });
    handleScrollAnimation();

    const heroElements = document.querySelectorAll('.hero-text > *');
    heroElements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.8s ease ${i * 0.2}s, transform 0.8s ease ${i * 0.2}s`;
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    });

    document.querySelectorAll('.hero-visual').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(60px) scale(0.8)';
        el.style.transition = 'opacity 1s ease 0.6s, transform 1s ease 0.6s';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateX(0) scale(1)';
        }, 300);
    });

    const style = document.createElement('style');
    style.textContent = `
        .feature-card {
            transition: opacity 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                        transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                        filter 0.6s ease;
        }
        .arch-card {
            transition: opacity 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                        transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                        filter 0.7s ease;
        }
        .step {
            transition: opacity 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                        transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                        filter 0.5s ease;
        }
        .tech-item {
            transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .download-content {
            transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .section-header h2, .section-header p {
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
    `;
    document.head.appendChild(style);
});
