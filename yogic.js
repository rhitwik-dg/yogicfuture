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

const episodes = [
    {
        id: 1,
        title: "How to start an online Yoga Studio in 2025 with Yogicfuture ?",
        videoId: "BUumtgvuJxI"  // Replace with actual YouTube video ID
    },
    {
        id: 2,
        title: "How to attract Potential Yoga clients using Yogicfuture in 2025 ?",
        videoId: "mbnctk5Lfdc"
    },
    {
        id: 3,
        title: "Make your Students come Crawling back to your",
        videoId: "fpL5qta8MEM"
    },
    {
        id: 4,
        title: "How to win on Facebook Ads everytime with yogicfuture",
        videoId: "uI8yVzlZAmU"
    },
    {
        id: 5,
        title: "Cheat code to make money using yogicfuture",
        videoId: "ZIlTmt0zlJg"
    },
    {
        id: 6,
        title: " A step by step process to open your own studio.",
        videoId: "TelLzZZ9vSI"
    },
    {
        id: 7,
        title: "The beauty of One 2 One sessions.",
        videoId: "tja2Awt3_rU"
    },
    {
        id: 8,
        title: "Struggling to get new students ? Lets talk about Leads.",
        videoId: "w7npSa6x1P0"
    },
    {
        id: 9,
        title: "Yogicfuture calender is a cheatcode for getting clients",
        videoId: "7jTgxqqAZGM"
    },
    {
        id: 10,
        title: " Lets solve pricing for you.",
        videoId: "I4Vtaq3oHdU"
    },
    {
        id: 11,
        title: "Manage your team.",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
        
    // Add more episodes as needed...
];

let currentEpisode = 1;
const playlistElement = document.getElementById('playlist');
const videoPlayer = document.getElementById('videoPlayer');

// Function to update the active episode and video
function updateActiveEpisode(episodeId) {
    currentEpisode = episodeId;
    const episode = episodes.find(ep => ep.id === episodeId);
    
    // Update video player
    videoPlayer.src = `https://www.youtube.com/embed/${episode.videoId}`;
    
    // Update active state styling
    document.querySelectorAll('.episode-item').forEach(item => {
        if (parseInt(item.dataset.id) === currentEpisode) {
            item.classList.add('bg-[#9c6f10]', 'text-white');
            item.classList.remove('hover:bg-[#dbaf56]');
        } else {
            item.classList.remove('bg-[#9c6f10]', 'text-white');
            item.classList.add('hover:bg-[#dbaf56]');
        }
    });
}

// Generate playlist items
episodes.forEach(episode => {
    const episodeElement = document.createElement('div');
    episodeElement.className = `episode-item p-3 mb-2 rounded-lg cursor-pointer transition-colors ${
        episode.id === currentEpisode ? 'bg-[#9c6f10] text-white' : 'hover:bg-[#dbaf56]'
    }`;
    episodeElement.dataset.id = episode.id;
    episodeElement.innerHTML = `<p class="text-sm font-medium">${episode.title}</p>`;
    
    episodeElement.addEventListener('click', () => {
        updateActiveEpisode(episode.id);
    });
    
    playlistElement.appendChild(episodeElement);
});

// Initialize first video
if (episodes.length > 0) {
    updateActiveEpisode(episodes[0].id);
}
