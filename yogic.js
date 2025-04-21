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
        title: "Agni Ep 1 — Eating with Gratitude!",
        videoId: "7dD4lBhPkLA"  // Replace with actual YouTube video ID
    },
    {
        id: 2,
        title: "Agni Ep 2 — Chewing Food 24 Times!",
        videoId: "oyJ544AgYOc"
    },
    {
        id: 3,
        title: "Agni Ep 3 — Setting the Right Ambience for Eating",
        videoId: "gX44WjfLWcU"
    },
    {
        id: 4,
        title: "Agni Ep 4 — Neem & Turmeric!",
        videoId: "uI8yVzlZAmU"
    },
    {
        id: 5,
        title: "Agni Ep 5 — How Many Meals Can One Have?",
        videoId: "ZIlTmt0zlJg"
    },
    {
        id: 6,
        title: "Agni Ep 6 — Consume At least 50% Raw Food",
        videoId: "TelLzZZ9vSI"
    },
    {
        id: 7,
        title: "Agni Ep 7 — Consuming a Variety of Grains",
        videoId: "tja2Awt3_rU"
    },
    {
        id: 8,
        title: "Agni Ep 8 — Eating Fresh Food",
        videoId: "w7npSa6x1P0"
    },
    {
        id: 9,
        title: "Agni Ep 9 — Eating Locally Grown Food",
        videoId: "7jTgxqqAZGM"
    },
    {
        id: 10,
        title: "Agni Ep 10 — Drinking Water with Reverenceg",
        videoId: "I4Vtaq3oHdU"
    },
    {
        id: 11,
        title: "Agni Ep 11 — Ideal Temperature of Water",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 12,
        title: "Agni Ep 12 — Water in Copper Vessels",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 13,
        title: "Agni Ep 13 — Positve, Negative & Zero Pranic Foods",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 14,
        title: "Agni Ep 14 — Eating Whole Grains",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 15,
        title: "Agni Ep 15 | Jeevarasam - Drink Consecrated Water",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 16,
        title: "Agni Series Ep 16 | Fasting on Ekadashi - a tremendous",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 17,
        title: "Agni Series Ep 17 | Eating Vegetarian Food",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 18,
        title: "Agni Series Ep 18 | Don't Sleep After Your Meals!",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 19,
        title: "Agni Series Ep 19 | Why Yogis avoid milk!",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 20,
        title: "Agni Series Ep 20 | How much water to consume?",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 21,
        title: "Agni Series Ep 21 | Guidelines for Solar and Lunar Eclipses!",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 22,
        title: "Agni Series Ep 22 | Groundnuts - A Yogic Meal!",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 23,
        title: "Agni Series Ep 23 | All About Sprouts - including how to sprout green gram!",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 24,
        title: "Agni Series Ep 24 | Horsegram - Increase Your Ushna! (includes Horsegram - Kollu soup recipe!)",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 25,
        title: "Agni Series Ep 25 | Multigrain Health Drink (includes Sanjeevini Ganji recipe!)",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 26,
        title: "Agni Series Ep 26 | Say NO to White Sugar!",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 27,
        title: "Agni Series Ep 27 | Drumstick - A Miracle Tree!",
        videoId: "YOUTUBE_VIDEO_ID_3"
    },
    {
        id: 28,
        title: "Agni Series Ep 28 | Honey - Take This Daily!",
        videoId: "GLMVkj7hSrU"
    },
    {
        id: 29,
        title: "Agni Series Ep 29 | All About Ragi - Includes Ragi Kanji recipe!",
        videoId: "gTnqLZE-j0I"
    },
    {
        id: 30,
        title: "Agni Series Ep 30 | Ash Gourd - Includes Ash Gourd juice recipe!",
        videoId: "-hWKhKbyQT8"
    },
    {
        id: 31,
        title: "Agni Series Ep 31 | Amla - Boost Your Immunity!",
        videoId: "YSRW_rr4r80"
    },
    {
        id: 32,
        title: "Agni Series Ep 32 | Sesame - Boost Your Energy!",
        videoId: "1e0eV7KqmoE"
    },
    {
        id: 33,
        title: "Agni Series Ep 33 | The Best Way to Heat Water",
        videoId: "AUMeaR-tCzw"
    },
    {
        id: 34,
        title: "Agni Series Ep 34 | Coconut - A Yogi's Choice!",
        videoId: "N3poIUCR68g"
    },
    {
        id: 35,
        title: "Agni Series Ep 35 | Coping With Food Allergies!",
        videoId: "UFHgi2_vHpo"
    },
    {
        id: 36,
        title: "Agni Series Ep 36 | Say No To GMO Foods!",
        videoId: "-9-V_hl6TZU"
    },
    {
        id: 37,
        title: "Agni Series Ep 37 | Eating With Bare Hands",
        videoId: "voaqFGxfMgg"
    },
    {
        id: 38,
        title: "Agni Series Ep 38 | How to make a yogic meal easily?",
        videoId: "lUx8WFFpTbk"
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
