document.addEventListener('DOMContentLoaded', function () {
            // Data Lokasi
            const locations = [
                { title: 'PANTAI TEMAJUK', description: 'Ini adalah fakta yang sudah lama diketahui bahwa seorang pembaca akan terganggu oleh konten halaman yang dapat dibaca saat melihat tata letaknya.', image: './resources/logo/pantai.png' },
                { title: 'PANTAI CAMAR BULAN', description: 'Berlawanan dengan kepercayaan populer, Lorem Ipsum bukan sekadar teks acak. Ia berakar pada sebuah karya sastra Latin klasik dari 45 SM.', image: './resources/logo/pantai-sore.png' },
                { title: 'TELUK ATUNG', description: 'Ada banyak variasi dari bagian-bagian Lorem Ipsum yang tersedia, tetapi sebagian besar telah mengalami perubahan dalam beberapa bentuk.', image: './resources/logo/pantai.png' },
            ];

            // DOM
            const backgroundImage = document.getElementById('background-image');
            const mainImage = document.getElementById('main-image');
            const mainTitle = document.getElementById('main-title');
            const mainDescription = document.getElementById('main-description');
            const thumbnailContainer = document.getElementById('thumbnail-container');
            const locationSidebar = document.getElementById('location-sidebar');
            const reviewBox = document.getElementById('review-box');
            const closeReviewBoxBtn = document.getElementById('close-review-box');
            const reviewButton = document.getElementById('review-button');
            const reviewLocationName = document.getElementById('review-location-name');
            const starRatingContainer = document.getElementById('star-rating');
            const ratingValueInput = document.getElementById('rating-value');
            
            let activeLocationIndex = -1;

            function updateLocationDisplay(index) {
                if (index === activeLocationIndex) return;
                const location = locations[index];

                backgroundImage.classList.add('opacity-0');
                setTimeout(() => {
                    backgroundImage.src = location.image;
                    backgroundImage.classList.remove('opacity-0');
                }, 500);

                mainImage.src = location.image;
                mainTitle.textContent = location.title;
                mainDescription.textContent = location.description;
                reviewLocationName.textContent = location.title;
                
                const sidebarItems = document.querySelectorAll('#location-sidebar .location-item');
                if (activeLocationIndex !== -1) {
                    sidebarItems[activeLocationIndex].classList.remove('bg-white/20', 'border-amber-400');
                    sidebarItems[activeLocationIndex].classList.add('bg-black/30', 'hover:bg-white/10');
                }
                sidebarItems[index].classList.add('bg-white/20', 'border-amber-400');
                sidebarItems[index].classList.remove('bg-black/30', 'hover:bg-white/10');

                const thumbnails = thumbnailContainer.children;
                 if (activeLocationIndex !== -1) {
                    thumbnails[activeLocationIndex].classList.remove('border-amber-400', 'opacity-100');
                    thumbnails[activeLocationIndex].classList.add('opacity-60');
                 }
                thumbnails[index].classList.add('border-amber-400', 'opacity-100');
                thumbnails[index].classList.remove('opacity-60');

                activeLocationIndex = index;
            }

            function toggleReviewBox() {
                if (reviewBox.classList.contains('hidden')) {
                    reviewBox.classList.remove('hidden');
                    setTimeout(() => {
                        reviewBox.classList.remove('opacity-0', 'scale-95');
                        reviewBox.classList.add('opacity-100', 'scale-100');
                    }, 10);
                } else {
                    reviewBox.classList.remove('opacity-100', 'scale-100');
                    reviewBox.classList.add('opacity-0', 'scale-95');
                    setTimeout(() => {
                        reviewBox.classList.add('hidden');
                    }, 300); // Match transition duration
                }
            }

            // UI
            function initUI() {
                locations.forEach((location, index) => {
                    const sidebarDiv = document.createElement('div');
                    sidebarDiv.className = 'location-item backdrop-blur-sm rounded-xl p-6 transition-colors cursor-pointer border-2 border-transparent bg-black/30 hover:bg-white/10';
                    sidebarDiv.innerHTML = `<h2 class="font-playfair text-2xl font-semibold">${location.title}</h2>`;
                    sidebarDiv.addEventListener('click', () => updateLocationDisplay(index));
                    locationSidebar.appendChild(sidebarDiv);

                    const thumb = document.createElement('img');
                    thumb.src = location.image;
                    thumb.alt = `Thumbnail untuk ${location.title}`;
                    thumb.className = 'w-full h-20 object-cover rounded-md cursor-pointer border-2 border-transparent transition-all duration-300 opacity-60 hover:opacity-100';
                    thumb.addEventListener('click', () => updateLocationDisplay(index));
                    thumbnailContainer.appendChild(thumb);
                });

                for (let i = 1; i <= 5; i++) {
                    const star = document.createElement('span');
                    star.innerHTML = '&#9733;';
                    star.className = 'star';
                    star.dataset.value = i;
                    star.addEventListener('click', setRating);
                    star.addEventListener('mouseover', hoverRating);
                    star.addEventListener('mouseout', resetRating);
                    starRatingContainer.appendChild(star);
                }
                
                updateLocationDisplay(0);
            }

            // Fungsi rating
            function setRating(e) { ratingValueInput.value = e.target.dataset.value; updateStars(ratingValueInput.value); }
            function hoverRating(e) { updateStars(e.target.dataset.value, true); }
            function resetRating() { updateStars(ratingValueInput.value); }
            function updateStars(value, isHovering = false) {
                 const stars = starRatingContainer.children;
                 for (let i = 0; i < stars.length; i++) {
                     stars[i].style.color = (i < value) ? (isHovering ? '#FBBF24' : '#F59E0B') : '#6B7280';
                 }
            }

            reviewButton.addEventListener('click', toggleReviewBox);
            closeReviewBoxBtn.addEventListener('click', toggleReviewBox);
            document.getElementById('review-form').addEventListener('submit', function(e) {
                e.preventDefault();
                alert(`Terima kasih atas ulasan Anda untuk ${locations[activeLocationIndex].title}!\nNama: ${this.name.value}\nRating: ${this.rating.value} bintang\nUlasan: ${this.review.value}`);
                this.reset();
                ratingValueInput.value = 0;
                resetRating();
                toggleReviewBox();
            });

            initUI();
        });