// accordion
document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach((button, index) => {
    const content = button.nextElementSibling;

    if (index === 0) {
      // Open the first section by default
      content.style.maxHeight = content.scrollHeight + 'px';
      button.classList.add('activeBtn');
    }

    button.addEventListener('click', function () {
      // Close all sections except the one that was clicked
      accordionButtons.forEach((btn, i) => {
        if (i !== index) {
          const sectionContent = btn.nextElementSibling;
          sectionContent.style.maxHeight = null;
          btn.classList.remove('activeBtn');
        }
      });

      // Toggle the clicked section
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        button.classList.remove('activeBtn');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        button.classList.add('activeBtn');
      }
    });
  });
});

// slider start
$('.sliderWrapp').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  // fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  // autoplay: true,
  // autoplaySpeed: 2000,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});
// slider start
$('.Feedback').slick({
  dots: false,
  infinite: true,
  speed: 300,
  // fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  // autoplay: true,
  // autoplaySpeed: 2000,
  prevArrow: $('.prev2'),
  nextArrow: $('.next2'),
});

// modal
// Function to open a modal by ID
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'flex';
}

// Function to close a modal by ID
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.classList.add('fadeOut');
  setTimeout(function () {
    modal.style.display = 'none';
    modal.classList.remove('fadeOut');
  }, 500);
}

// When the user clicks outside of a modal, close it with fade-out animation
window.onclick = function (event) {
  var modals = document.querySelectorAll('.modal');
  modals.forEach(function (modal) {
    if (event.target === modal) {
      closeModal(modal.id);
    }
  });
};

// Get the wrapper and content elements
const wrapper = document.getElementById('myWrapper');
const content = document.getElementById('myContent');

let isDragging = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

// Add mousedown event listener to start dragging
wrapper.addEventListener('mousedown', handleStart);
wrapper.addEventListener('touchstart', handleStart);

// Add mouseup event listener to stop dragging
wrapper.addEventListener('mouseup', handleEnd);
wrapper.addEventListener('touchend', handleEnd);

// Add mousemove event listener to handle dragging and scrolling
wrapper.addEventListener('mousemove', handleMove);
wrapper.addEventListener('touchmove', handleMove);

function handleStart(e) {
  isDragging = true;
  startX = e.pageX || e.touches[0].pageX;
  startY = e.pageY || e.touches[0].pageY;
  scrollLeft = wrapper.scrollLeft;
  scrollTop = wrapper.scrollTop;
}

function handleEnd() {
  isDragging = false;
}

function handleMove(e) {
  if (!isDragging) return;

  const x = (e.pageX || e.touches[0].pageX) - startX;
  const y = (e.pageY || e.touches[0].pageY) - startY;

  wrapper.scrollLeft = scrollLeft - x;
  wrapper.scrollTop = scrollTop - y;
}
