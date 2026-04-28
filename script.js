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

    const downloadBtn = document.getElementById('downloadBtn');
    const otherOsBtn = document.getElementById('otherOsBtn');
    const osDropdown = document.getElementById('osDropdown');

    function getOS() {
        const userAgent = window.navigator.userAgent;
        const platform = window.navigator.platform;
        const mac = { win: /Win/i, mac: /Mac/i, linux: /Linux/i };
        
        if (mac.win.test(platform) || mac.win.test(userAgent)) return 'windows';
        if (mac.mac.test(platform) || mac.mac.test(userAgent)) return 'macos';
        if (mac.linux.test(platform) || mac.linux.test(userAgent)) return 'linux';
        return 'unknown';
    }

    function updateDownloadButton() {
        const os = getOS();
        const icon = downloadBtn.querySelector('svg');
        let osIcon = '';
        
        if (os === 'windows') {
            osIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>';
        } else if (os === 'macos') {
            osIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.99-.79-3.33-.79-1.33 0-2 .74-3.32.8-1.31.04-2.3-1.06-3.05-2.25-.76-1.19-1.38-2.9-1.38-5.29 0-4.13 3.23-6.58 6.89-6.58 3.63 0 5.69 2.44 5.69 6.58 0 2.39-.62 4.1-1.45 5.96zM9.03 8.5c-2.73 0-4.95 2.23-4.95 4.96s2.22 4.96 4.95 4.96 4.95-2.23 4.95-4.96-2.22-4.96-4.95-4.96z"/></svg>';
        } else if (os === 'linux') {
            osIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008.48.475 4.249 2.477 8.754 4.832 10.606 5.55.353.135.687.235 1.063.236.376 0 .72-.1 1.063-.236 1.852-.718 6.357-3.073 10.607-5.55.794-.467.634-1.32-.161-1.475-2.058-.403-6.78-1.018-9.502-1.335-.316-.097-.633-.175-.96-.254-1.427.336-2.807.66-3.59.844-.83.195-1.74-.356-1.734-.844-.006-.488 2.113-.812 4.406-1.168-.68-.18-2.206-.522-2.917-.726-.66-.19-1.381-.388-2.002-.58-1.03.26-2.218.588-2.752.843z"/></svg>';
        } else {
            osIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>';
        }
        
        icon.outerHTML = osIcon;
    }

    if (downloadBtn) {
        updateDownloadButton();
    }

    if (otherOsBtn && osDropdown) {
        otherOsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            osDropdown.classList.toggle('active');
            otherOsBtn.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!otherOsBtn.contains(e.target) && !osDropdown.contains(e.target)) {
                osDropdown.classList.remove('active');
                otherOsBtn.classList.remove('active');
            }
        });
    }

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
