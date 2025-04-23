const projectCardsContainer = document.getElementById("projects-cards");

class CardBuilder {
  constructor(cards) {
    if (!Array.isArray) {
      throw new TypeError(
        `Expected "${cards}" to be an array. Received: ${cards}.`
      );
    }

    this.cards = cards;
  }

  build() {
    this.cards.forEach(({ title, description, buttonID }, index) => {
      if (!(title && description && buttonID)) {
        console.log(
          `Card index: "${index}" is missing either title | description | buttonID. Skipping ${index}...`
        );
        return;
      }

      const card = document.createElement("div");

      const cardTitle = document.createElement("h1");
      cardTitle.textContent = title;

      const cardDescription = document.createElement("p");
      cardDescription.textContent = description;

      const cardViewButton = document.createElement("button");
      cardViewButton.id = buttonID;
      cardViewButton.textContent = "View";
      
      card.append(cardTitle, cardDescription, cardViewButton);
      projectCardsContainer.appendChild(card);
    });
  }
}

export { CardBuilder };
