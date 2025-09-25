document.addEventListener('DOMContentLoaded', function () {
            // Data Lokasi
            const locations = [
            { 
                title: 'Batu Nenek', 
                description: 'Batu Nenek adalah sebuah ikon geowisata di Kecamatan Paloh yang memikat pengunjung dengan formasi batu granit raksasa yang secara alami menyerupai siluet seorang wanita tua (nenek). Terletak di tepi pantai, batu ini tidak hanya menawarkan pemandangan eksotis yang berpadu dengan laut, tetapi juga diselimuti oleh berbagai cerita rakyat dan legenda lokal yang dituturkan secara turun-temurun, menambahkan nuansa magis dan misterius bagi para pengunjung.', 
                image: './resources/logo/background.png', 
                link:'/asset/Batu Nenek-20250914T061940Z-1-001/Batu Nenek/index.html' 
            },
            { 
                title: 'Camar Bulan', 
                description: 'Sebagai salah satu titik terluar Indonesia di Kalimantan Barat, Pantai Camar Bulan di Dusun Camar Bulan adalah destinasi yang memadukan keindahan alam dengan nuansa nasionalisme. Pantai ini berhadapan langsung dengan Laut Natuna dan berbatasan darat dengan Malaysia, ditandai oleh Patok A47. Pengunjung dapat menikmati hamparan pasir putih yang luas, air laut yang jernih, serta merasakan sensasi berada di garda terdepan negara sambil menyaksikan matahari terbenam yang spektakuler.', 
                image: './resources/logo/pantai-sore.png', 
                link:'asset/Camar Bulan-20250914T061938Z-1-001/Camar Bulan/index.html' 
            },
            { 
                title: 'Hutan Mangrove', 
                description: 'Kawasan ekowisata Hutan Mangrove di Temajuk ini merupakan paru-paru pesisir yang vital dan menawarkan pengalaman edukatif yang mendalam. Pengunjung dapat berjalan di atas jembatan kayu panjang yang berkelok-kelok di antara rimbunnya pohon bakau, sambil mengamati ekosistem unik yang menjadi rumah bagi berbagai jenis kepiting, ikan, dan burung. Tempat ini sangat ideal untuk pecinta alam yang ingin belajar tentang pentingnya konservasi mangrove sambil menikmati udara segar dan suasana yang tenang.', 
                image: './resources/logo/pantai.png', 
                link:'/asset/Hutan Mangrove-20250914T084559Z-1-001/Hutan Mangrove/index.html' 
            },
            { 
                title: 'JLO', 
                description: 'JLO atau Jembatan Lintas Obyek merupakan sebuah jembatan kayu sederhana yang membentang di atas muara sungai kecil di Temajuk. Meskipun fungsinya sebagai penghubung, JLO telah bertransformasi menjadi sebuah spot favorit bagi wisatawan dan masyarakat lokal untuk bersantai, memancing, atau sekadar menikmati pemandangan perahu nelayan yang lalu-lalang. Dari jembatan ini, pengunjung bisa merasakan atmosfer kehidupan pesisir yang otentik dengan latar belakang pemandangan alam yang indah.', 
                image: './resources/logo/pantai.png', 
                link:'/asset/JLCO-20250914T074902Z-1-001/JLCO/index.html' 
            },
            { 
                title: 'Pantai Pak Ping', 
                description: 'Pantai Pak Ping dikenal dengan garis pantainya yang panjang dan hamparan pasir putihnya yang sangat halus. Keunikan pantai ini adalah suasananya yang masih alami dan relatif sepi, menjadikannya lokasi yang sempurna untuk melarikan diri dari keramaian. Ombaknya yang tenang membuat pantai ini aman untuk berenang dan bermain air bersama keluarga, sementara deretan pohon kelapa di tepiannya menyediakan tempat berteduh yang nyaman untuk bersantai menikmati angin laut.', 
                image: './resources/logo/pantai.png', 
                link:'/asset/Pantai Pak Ping-20250914T074859Z-1-001/Pantai Pak Ping/index.html' 
            },
            { 
                title: 'Rumah Terbalik', 
                description: 'Rumah Terbalik di Temajuk adalah sebuah atraksi wisata modern dan kreatif yang dirancang khusus untuk para penggemar fotografi. Dengan konsep bangunan dan seluruh perabotan interior yang dipasang terbalik, tempat ini menciptakan ilusi optik yang membingungkan sekaligus menyenangkan. Pengunjung dapat berpose seolah-olah sedang menantang gravitasi, menghasilkan foto-foto yang unik dan layak dibagikan di media sosial, menjadikannya destinasi hiburan yang berbeda dari wisata alam lainnya.', 
                image: './resources/logo/pantai.png', 
                link:'/asset/Rumah Terbalik-20250914T074857Z-1-001/Rumah Terbalik/index.html' 
            },
            { 
                title: 'Tanjung Datu', 
                description: 'Sebagai bagian dari Taman Nasional, Tanjung Datu adalah permata konservasi yang sering disebut sebagai "surga di ujung Kalimantan". Wilayah ini memiliki ekosistem yang lengkap, mulai dari hutan hujan tropis, perbukitan, hingga pantai berpasir putih yang menjadi lokasi pendaratan dan peneluran penyu. Kekayaan bawah lautnya juga menjadikannya spot yang potensial untuk snorkeling, di mana pengunjung dapat menyaksikan keanekaragaman terumbu karang dan biota laut yang masih sangat terjaga.', 
                image: './resources/logo/pantai.png', 
                link:'/asset/Tanjung Datu-20250914T074854Z-1-001/Tanjung Datu/index.html' 
            },
            { 
                title: 'Teluk Atong Bahari', 
                description: 'Teluk Atong Bahari menawarkan panorama pesisir yang khas dengan teluknya yang tenang, dihiasi oleh formasi bebatuan granit besar yang artistik. Daya tarik utamanya adalah jembatan kayu yang menjorok ke arah laut dan sebuah gazebo di ujungnya, menjadi spot foto ikonik dengan latar belakang perairan teluk yang biru kehijauan. Suasananya yang damai menjadikan tempat ini pilihan tepat untuk menenangkan pikiran, memancing, atau sekadar duduk santai menikmati keindahan alam.', 
                image: './resources/logo/pantai.png', 
                link:'/asset/Teluk Atong Bahari-20250914T074854Z-1-001/Teluk Atong Bahari/index.html' 
            },
            { 
                title: 'Tugu Pancasila', 
                description: 'Berdiri kokoh di area perbatasan, Tugu Pancasila di Desa Temajuk bukan sekadar monumen biasa, melainkan sebuah lambang kedaulatan dan semangat nasionalisme. Tugu ini dibangun sebagai penegas identitas bangsa di beranda depan negara. Lokasinya yang strategis seringkali menjadi latar belakang bagi berbagai acara komunitas dan menjadi titik yang wajib dikunjungi wisatawan untuk berfoto, sebagai tanda bahwa mereka telah menjejakkan kaki di salah satu ujung utara Indonesia.', 
                image: './resources/logo/pantai.png', 
                link:'/asset/Tugu Pancasila-20250914T061935Z-1-001/Tugu Pancasila/index.html' 
            },
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
            const imagelink = document.getElementById('source_link');
            
            let activeLocationIndex = -1;

            function updateLocationDisplay(index) {
                if (index === activeLocationIndex) return;
                const location = locations[index];

                backgroundImage.classList.add('opacity-0');
                setTimeout(() => {
                    backgroundImage.src = location.image;
                    backgroundImage.classList.remove('opacity-0');
                }, 500);

                imagelink.href = location.link;
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