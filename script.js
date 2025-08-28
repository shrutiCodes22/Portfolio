const tabButtons = document.querySelectorAll(".tab-btn");
      const tabContents = document.querySelectorAll(".tab-content");

      tabButtons.forEach(button => {
        button.addEventListener("click", () => {
          const target = button.getAttribute("data-tab");

          tabContents.forEach(content => {
            content.classList.add("translate-x-full");
            if (content.id === target) {
              content.classList.remove("translate-x-full");
              content.classList.add("translate-x-0");
            }
          });
        });
      });


      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

       tsParticles.load("tsparticles", {
        background: { color: "purple" },
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 1 }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
          }
        }
      });
