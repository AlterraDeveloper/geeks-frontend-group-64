const tabs = document.getElementsByClassName("tab");
const contentText = document.querySelector("#content-text");
const contentLogo = document.querySelector(".logo");

function selectTab(event) {
  const activeTab = document.querySelector(".tab.active");
  //   if (activeTab) {
  //     activeTab.classList.remove("active");
  //   }
  //   activeTab && activeTab.classList.remove("active");
  activeTab?.classList.remove("active");

  const selectedTab = event.target;
  selectedTab.classList.add("active");

  const tabName = selectedTab.textContent;

  if (tabName === "HTML") {
    showHtmlContent();
  }

  if (tabName === "CSS") {
    showCSSContent();
  }

  if (tabName === "JavaScript") {
    showJSContent();
  }

  if (tabName === "React") {
    showReactContent();
  }
}

for (const tab of tabs) {
  tab.onclick = selectTab;
  //   tab.addEventListener("click", selectTab);
}

function showHtmlContent() {
  contentText.textContent = "HTML это не язык программирования!";
  contentLogo.style.backgroundImage =
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsubI1xnS2EsbFC7IKOtHXy3o2yp5zNGHX8-mLk-0nVw&s')";
}

function showCSSContent() {
  contentText.textContent = "CSS  - отвечает за визуальное оформление сайта";
  contentLogo.style.backgroundImage =
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsncTFXLlGX-7KCUKTv-7QXpe5RfZ-6jIrw5H7BvM6w&s')";
}

function showJSContent() {
  contentText.textContent = "А JavaScript язык программирования))";
  contentLogo.style.backgroundImage =
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScciXlZVIbpIN4acdtqDAIiuI1aH8RMNODDdUp8DwYyw&s=10')";
}

function showReactContent() {
  contentText.textContent = "React - это библиотека по созданию динамических одностраничных сайтов";
  contentLogo.style.backgroundImage =
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZPep3OZOHO5l9R_WRtNhQvMPVFA9veUinjXSAw0t9g&s=10')";
}

// tabs[2].click();
tabs[2].dispatchEvent(new Event("click"));
