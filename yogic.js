document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.querySelector('.carousel-wrapper');
  const pageNumbers = document.querySelectorAll('.page-number');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const nextText = document.querySelector('.next-text');
  let currentPage = 1;

  function slideTo(pageNumber) {
      wrapper.style.transform = `translateX(-${(pageNumber - 1) * 100}%)`;
      
      pageNumbers.forEach(num => {
          num.classList.remove('active');
      });
      
      const targetPageNumber = document.querySelector(`[data-page="${pageNumber}"]`);
      targetPageNumber.classList.add('active');
      currentPage = pageNumber;
  }

  // Event listeners for page numbers
  pageNumbers.forEach(number => {
      number.addEventListener('click', () => {
          slideTo(parseInt(number.dataset.page));
      });
  });

  // Previous button
  prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
          slideTo(currentPage - 1);
      }
  });

  // Next button and text
  function handleNext() {
      if (currentPage < 3) {
          slideTo(currentPage + 1);
      }
  }

  nextBtn.addEventListener('click', handleNext);
  nextText.addEventListener('click', handleNext);
});

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.feature-tab');
    const windows = document.querySelectorAll('.feature-window');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Hide all windows
            windows.forEach(window => {
                window.style.display = 'none';
                window.classList.remove('active');
            });

            // Show selected window
            const targetWindow = document.querySelector(`[data-window="${tab.dataset.tab}"]`);
            targetWindow.style.display = 'block';
            
            // Trigger reflow for animation
            void targetWindow.offsetWidth;
            
            targetWindow.classList.add('active');
        });
    });
});

 const videos = [
            {
                title: "Make your Students come Crawling back to your",
                videoId: "fpL5qta8MEM" // Replace with actual YouTube video ID
            },
            {
                title: "How to treat a Bully ?",
                videoId: "yAord3Vlxi0" // Replace with actual YouTube video ID
            },
            {
                title: "How to make Money using Yogicfuture Events💸",
                videoId: "5owisk2vGVY" // Replace with actual YouTube video ID
            },
            {
                title: "What's the function of Rooms in Yogicfuture ?",
                videoId: "Hs4mnkjMSr4" // Replace with actual YouTube video ID
            },
            {
                title: "How to start an online Yoga Studio in 2025 with Yogicfuture ?",
                videoId: "mbnctk5Lfdc" // Replace with actual YouTube video ID
            },
            {
                title: "How to attract Potential Yoga clients using Yogicfuture in 2025 ?",
                videoId: "BUumtgvuJxI" // Replace with actual YouTube video ID
            }
            // Add new videos here as needed
        ];

        document.addEventListener('DOMContentLoaded', function() {
            const videoListElement = document.getElementById('videoList');
            const currentVideoTitle = document.getElementById('currentVideoTitle');
            
            // Generate video list from the videos array
            function generateVideoList() {
                videoListElement.innerHTML = '';
                videos.forEach((video, index) => {
                    const videoElement = document.createElement('div');
                    videoElement.className = 'video-title' + (index === 0 ? ' active-video' : '');
                    videoElement.setAttribute('data-title', video.title);
                    videoElement.setAttribute('data-video-id', video.videoId);
                    videoElement.textContent = video.title;
                    videoListElement.appendChild(videoElement);
                    
                    // Add click event listener
                    videoElement.addEventListener('click', function() {
                        // Update active state
                        document.querySelectorAll('.video-title').forEach(t => t.classList.remove('active-video'));
                        this.classList.add('active-video');
                        
                        // Update the player title
                        currentVideoTitle.textContent = this.getAttribute('data-title');
                        
                        // In a real implementation, you would update the video src here
                        // For example: 
                        loadYouTubeVideo(this.getAttribute('data-video-id'));
                    });
                });
            }
            
            // Function to load YouTube video (implement as needed)
            function loadYouTubeVideo(videoId) {
                // Replace the player-button with an actual YouTube embed
                // Example:
                const playerContainer = document.querySelector('.player-container');
                playerContainer.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            }
            
            // Initialize the video list
            generateVideoList();
            
            // Set the initial video title
            if (videos.length > 0) {
                currentVideoTitle.textContent = videos[0].title;
                loadYouTubeVideo(videos[0].videoId); // Uncomment to load the first video automatically
            }
        });
        
        // Function to add new videos (can be called from elsewhere)
        function addNewVideo(title, videoId) {
            videos.push({
                title: title,
                videoId: videoId
            });
            
            // Regenerate the video list
            const videoListElement = document.getElementById('videoList');
            if (videoListElement) {
                // Only regenerate if the DOM is loaded
                generateVideoList();
            }
        }
