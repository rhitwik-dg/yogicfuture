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

