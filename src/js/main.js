import createCard, { createCardData } from "./card.js";

const cardContainer = document.querySelector(".card-container");

const absolutePath = window.location.href

const fetchAllReports = async () => {
  const response = await fetch(`${absolutePath}src/data/data.json`);
  const reports = await response.json();
  return reports;
};

const createTotalCards = (typeTime) => {
  const allCards = document.createDocumentFragment();
  fetchAllReports().then((reports) => {
    reports.forEach((report) => {
      const createCardParams = makeCardParams(report, typeTime);

      allCards.appendChild(createCard(createCardParams));
    });
    cardContainer.appendChild(allCards);
  });
};

const makeCardParams = (report, typeTime) => {
  const { title, timeframes } = report;
  const { current, previous } = timeframes[typeTime];
  return {
    title,
    typeTime,
    current,
    previous,
  };
};

createTotalCards("daily");

const timeBtn = document.querySelectorAll(".main-card__btn");

timeBtn.forEach((btn) => {
  const classActive = 'main-card__btn--active'
  
  btn.addEventListener("click", () => {
    const typeTime = btn.getAttribute("data-time");
    updateReports(typeTime)

    timeBtn.forEach(otherBtn => otherBtn.classList.remove(classActive))

    btn.classList.add(classActive)
  });
});

const updateReports = (typeTime) => {
  fetchAllReports().then((report) => {
    const cardData = document.querySelectorAll(".card__data");
    report.forEach((report, index) => {
      const createDataParams = makeCardParams(report, typeTime);

      cardData[index].replaceWith(createCardData(createDataParams));
    });
  });
};
