"use strict";

import { fetchData } from "./api";


const addEventsOnElements = function (elements, eventType, callback) {
  for (const item of elements) {
    item.addEventListener(eventType, callback);
  }
};

/**
 * header scroll state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[this.window.scroll > 50 ? "add" : "remove"]("active");
});

/**
 * search toggle
 */

const searchToggler = document.querySelector("[data-search-toggler]");
const searchField = document.querySelector("[data-search-field]");

let isExpanded = false;

searchToggler.addEventListener("click", function () {
  header.classList.toggle("search-active");
  isExpanded = isExpanded ? false : true;
  this.setAttribute("aria-expanded", isExpanded);
  searchField.focus();
});

// tab navigation

//nodeList
const tabButtons = document.querySelectorAll("[data-tab-btn]");
const tabPanels = document.querySelectorAll("[data-tab-panel]");

//destructuring the tabButtons array and tabPanels array
let [lastActiveTabBtn] = tabButtons;
let [lastActiveTabPanel] = tabPanels;

addEventsOnElements(tabButtons, "click", function () {
  lastActiveTabBtn.setAttribute("aria-selected", "false");
  lastActiveTabPanel.setAttribute("hidden", "");

  this.setAttribute("aria-selected", "true");
  const currentTabPanel = document.querySelector(
    `#${this.getAttribute("aria-controls")}`
  );
  currentTabPanel.removeAttribute("hidden");

  lastActiveTabBtn = this;
  lastActiveTabPanel = currentTabPanel;
});

// keyboard accessibility

addEventsOnElements(tabButtons, "keydown", function (e) {
  const ToNextElement = this.nextElementSibling;
  const ToPreviousElement = this.previousElementSibling;

  if (e.key === "ArrowRight" && ToNextElement) {
    this.setAttribute("tabindex", "-1");
    ToNextElement.setAttribute("tabindex", "0");
    ToNextElement.focus();
  } else if (e.key === "ArrowLeft" && ToPreviousElement) {
    this.setAttribute("tabindex", "-1");
    ToPreviousElement.setAttribute("tabindex", "0");
    ToPreviousElement.focus();
  }
});


// working with api
// search functionality


const searchSubmit = document.querySelector("[data-search-submit]");

let apiUrl = "https://api.github.com/users/uma002";
let repoUrl, followerUrl, followingUrl = "";

const searchUser = function  () {
  if(!searchField.value) return;
  apiUrl = `https://api.github.com/users/${searchField.value}`;
}


searchSubmit.addEventListener('click', searchUser);

// search when press enter key

searchField.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    searchUser();
  }
})


// profile

const profileCard = document.querySelector("[data-profile-card]");
const repoPanel = document.querySelector("[data-repo-panel]");

console.log(profileCard);