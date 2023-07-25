 window.addEventListener("scroll", function () {
            let scrollPosition = window.pageYOffset;
            let backgroundPosition = `center ${50 - scrollPosition / 10}%`;
            document.getElementById("abc").style.backgroundPosition = backgroundPosition;
        });
        function isInViewport(element) {
            var rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
        }

       
        function handleImagePopUp() {
            var popUpImage = document.getElementById('pop-up-image');
            if (isInViewport(popUpImage)) {
                popUpImage.style.opacity = '1';
            }
        }

        
        window.addEventListener('scroll', handleImagePopUp);
        function handleImageAppearance() {
            var parallax3 = document.querySelector('.parallax-3');

            if (parallax3) {
                var rect = parallax3.getBoundingClientRect();
                if (rect.bottom <= 0) {
                    parallax3.classList.add('hide-image'); 
                } else {
                    parallax3.classList.remove('hide-image'); 
                }
            }
        }

        
        window.addEventListener('scroll', handleImageAppearance);
        
        function openPopUp(imageSrc) {
            var popUpImage = document.getElementById('pop-up-image');
            popUpImage.src = imageSrc;
            document.querySelector('.pop-up-overlay').classList.add('active');
        }

        function closePopUp() {
            document.querySelector('.pop-up-overlay').classList.remove('active');
        }

        var imgPopups = document.querySelectorAll('.img-popup');
    var popUpImage = document.querySelector('.pop-up-image');
    var popUpOverlay = document.querySelector('.pop-up-overlay');

    imgPopups.forEach((img) => {
        img.addEventListener('mouseover', function () {
            
            popUpImage.src = img.src;
            
            popUpOverlay.classList.add('active');
        });

        img.addEventListener('mouseout', function () {
            // Hide the pop-up overlay
            popUpOverlay.classList.remove('active');
        });
    });
