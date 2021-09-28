import createCard from "./card.js";

const cardContainer = document.querySelector('.card-container')

const fetchAllReports = async (typeTime) => {
  const response = await fetch("../../data.json");
  await response.json().then((r) => {
    createTotalCards(r, typeTime);
  });
};

const createTotalCards = (reports, typeTime) => {
  const allCards = document.createDocumentFragment();

  reports.map((report) => {
    const { title, timeframes } = report;
    const { current, previous } = timeframes[typeTime];
    const createCardParams = {
      title,
      typeTime,
      current,
      previous,
    };

    allCards.appendChild(createCard(createCardParams));
  });
  cardContainer.appendChild(allCards)
};

fetchAllReports("daily");

const timeBtn = document.querySelectorAll('.main-card__btn')

