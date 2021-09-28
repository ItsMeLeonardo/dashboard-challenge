const createCard = (createCardParams) => {
  const { title } = createCardParams;
  const card = document.createElement("div");

  card.classList.add("card");
  card.setAttribute("data-card", title);

  card.appendChild(createCardBack());
  card.appendChild(createContent(createCardParams));

  return card;
};

const createCardBack = () => {
  const element = document.createElement("div"),
    icon = document.createElement("i");

  element.classList.add("card__icon-back");
  icon.classList.add("card__icon");

  element.appendChild(icon);
  
  return element;
};

const createContent = (createContentParams) => {
  const element = document.createElement("div");

  element.classList.add("card__content");

  element.appendChild(createCardHeader(createContentParams));
  element.appendChild(createCardData(createContentParams));

  return element;
};

const createCardHeader = (createHeaderParams) => {
  const { title } = createHeaderParams;
  const element = document.createElement("div"),
    cardTitle = document.createElement("h3"),
    icon = document.createElement("i");

  element.classList.add("card__header");
  cardTitle.classList.add("card__title");
  icon.classList.add("card__icon-circle");

  cardTitle.textContent = title;

  element.appendChild(cardTitle);
  element.appendChild(icon);

  return element;
};

const createCardData = (createDataParams) => {
  const { typeTime, current, previous } = createDataParams;

  const element = document.createElement("div"),
    currentTime = document.createElement("h2");

  element.classList.add("card__data");
  currentTime.classList.add("card__time");

  currentTime.textContent = `${current}hrs`;

  element.appendChild(currentTime);
  element.appendChild(createPrevTime(typeTime, previous));

  return element;
};

const createPrevTime = (typeTime, prevTime) => {
  const element = document.createElement("div"),
    text = document.createElement("span"),
    time = document.createElement("span");

  element.classList.add("card__prev");
  text.classList.add("card__prev-text");
  time.classList.add("card__prev-time");

  text.textContent = `Last ${timeAbbreviation[typeTime]}`;
  time.textContent = ` - ${prevTime}hrs`;
  element.appendChild(text);
  element.appendChild(time);

  return element;
};

const timeAbbreviation = {
  daily: "day",
  weekly: "week",
  monthly: "month",
};

export default createCard;
