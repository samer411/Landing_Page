/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let all_sections = document.querySelectorAll("body section");
let navigation_bar = document.querySelector("header nav ul");
let navigation_bar_place = document.getElementsByClassName("navbar__menu");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function Building_Navigation_Bar(page_sections) {
  let i = 1;
  for (let single_section of page_sections) {
    let li_number = i;
    navigation_bar.innerHTML += `<li>  <a href="#${single_section.id}"  class="menu__link">Section ${li_number}  </a>  </li>`;
    i++;
  }
}

// Add class 'active' to section when near top of viewport
function Adding_Active_Class(page_sections) {
  page_sections.forEach((section) => {
    let section_id = String(section.id);
    let current = document.getElementById(section_id);
    let current_h2 = document.querySelector(`#${section_id} h2`);
    let navElement = document.querySelector(`[href="#${section_id}"]`);
    window.addEventListener("scroll", () => {
      if (
        current.getBoundingClientRect().top >= -100 &&
        current.getBoundingClientRect().top < 400
      ) {
        // Styling Navigation bar && adding the class "active"
        navElement.classList.add("active");
        navElement.style.color = "#FFF";
        navElement.style.backgroundColor = "#333";
        navElement.style.transition = " all .5s ease-in-out";

        current.classList.add("your-active-class");
        // Styling h2 element
        current_h2.style.color = "#CC1";
        current.style.transition = "all 2s ease-in-out";
      } else {
        navElement.classList.remove("active");
        navElement.style.color = "#333";
        navElement.style.backgroundColor = "#FFF";
        current.classList.remove("your-active-class");
        current_h2.style.color = "#FFF";
      }
    });
  });
}

// Scroll to anchor ID using scrollTO event
function Scrolling_To_Section(links) {
  for (let link of links) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      let current = document.getElementById(
        String(event.target.getAttribute("href")).substring(1)
      );
      window.scrollTo({
        top: current.offsetTop - 50,
        left: 0,
        behavior: "smooth",
      });
    });
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
Building_Navigation_Bar(all_sections);
// Scroll to section on link click
window.onload = Scrolling_To_Section(document.querySelectorAll(".menu__link"));
// Set sections as active
Adding_Active_Class(all_sections);
