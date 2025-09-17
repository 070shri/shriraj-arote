        // Typing effect
        const roles = ['Developer', 'Programmer', 'Student', 'Innovator'];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const delayBetweenRoles = 2000;

        function typeRole() {
            const currentRole = roles[roleIndex];
            const typingElement = document.querySelector('.typing-text');

            if (isDeleting) {
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => {
                    isDeleting = true;
                }, delayBetweenRoles);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }

            const speed = isDeleting ? deletingSpeed : typingSpeed;
            setTimeout(typeRole, speed);
        }

        // Start typing effect
        typeRole();

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 15, 35, 0.98)';
            } else {
                navbar.style.background = 'rgba(15, 15, 35, 0.95)';
            }
        });

        // Resume download
        document.getElementById('download-resume').addEventListener('click', function(e) {
            e.preventDefault();
            // Create a dummy PDF download
            const link = document.createElement('a');
            link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKFJlc3VtZSkKL0NyZWF0b3IgKFBvcnRmb2xpbykKL1Byb2R1Y2VyIChQb3J0Zm9saW8pCi9DcmVhdGlvbkRhdGUgKEQ6MjAyNDA2MjMxMjAwMDBaKQo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMyAwIFIKPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFs0IDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAzIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0xlbmd0aCA0NAo+PgpzdHJlYW0KQlQKL0YxIDEyIFRmCjEwMCA3MDAgVGQKKFRoaXMgaXMgYSBzYW1wbGUgUERGIHJlc3VtZSkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iago2IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMQovQmFzZUZvbnQgL0hlbHZldGljYQo+PgplbmRvYmoKeHJlZgowIDcKMDAwMDAwMDAwMCA2NTUzNSBmCjAwMDAwMDAwMTAgMDAwMDAgbgowMDAwMDAwMTY5IDAwMDAwIG4KMDAwMDAwMDIxNiAwMDAwMCBuCjAwMDAwMDAyNzMgMDAwMDAgbgowMDAwMDAwMzY0IDAwMDAwIG4KMDAwMDAwMDQ1OCAwMDAwMCBuCnRyYWlsZXIKPDwKL1NpemUgNwovUm9vdCAyIDAgUgo+PgpzdGFydHhyZWYKNTI1CiUlRU9G';
            link.download = 'resume.pdf';
            link.click();
        });

        // Contact form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });

        // Add more particles dynamically
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            document.querySelector('.hero').appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 6000);
        }

        // Create new particles periodically

        setInterval(createParticle, 3000);
