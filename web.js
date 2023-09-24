window.addEventListener("scroll", function () {
            let scrollPosition = window.pageYOffset;
            let backgroundPosition = `center ${50 - scrollPosition / 10}%`;
            document.getElementById("abc").style.backgroundPosition = backgroundPosition;
        });
        function isInViewport(element) {
            var rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
        }

        // Handle the pop-up effect when the right-section is in the viewport
        function handleImagePopUp() {
            var popUpImage = document.getElementById('pop-up-image');
            if (isInViewport(popUpImage)) {
                popUpImage.style.opacity = '1';
            }
        }

        // Add event listener for scrolling to handle the pop-up effect
        window.addEventListener('scroll', handleImagePopUp);
        function handleImageAppearance() {
            var parallax3 = document.querySelector('.parallax-3');

            if (parallax3) {
                var rect = parallax3.getBoundingClientRect();
                if (rect.bottom <= 0) {
                    parallax3.classList.add('hide-image'); // Hide the image by adding the hide-image class
                } else {
                    parallax3.classList.remove('hide-image'); // Show the image by removing the hide-image class
                }
            }
        }

        // Add event listener for scrolling to handle the image appearance effect
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
            // Update the source of the enlarged image
            popUpImage.src = img.src;
            // Show the pop-up overlay
            popUpOverlay.classList.add('active');
        });

        img.addEventListener('mouseout', function () {
            // Hide the pop-up overlay
            popUpOverlay.classList.remove('active');
        });
    });

      // To show the notice box with animation
document.querySelector('.notice-box').classList.add('active');
  
