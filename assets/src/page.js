import { CardBuilder } from "./cardBuilder.js";

const projectCardsContainer = document.getElementById("projects-cards");

// Format: ${buttonID}: ${imageSourceLink}
const CardImages = {
  oreUIForms: "https://media.discordapp.net/attachments/1263108593452974121/1263108595680022549/Screenshot_2024-07-14-21-59-07-76_5c8300b655012b1930f2e0a7b81bf6a9.jpg?ex=6809844c&is=680832cc&hm=1a206607a8e23d5da80b0a4d4a5eec9f925add4d75be4938c34b65cb0c3ed153&=&format=webp&width=1896&height=853",
};

new CardBuilder([
  {
    title: "Ore-UI Forms",
    description: "UI Server Forms that are based on the modern ORE-UI style.",
    buttonID: "oreUIForms",
    thumbnail: CardImages.oreUIForms,
  },
]).build();

projectCardsContainer.addEventListener("click", (ev) => {
  const { target } = ev;

  if (target.tagName === "BUTTON") {
    const imageLink = CardImages[target.id];
    if (!imageLink) return;

    window.open(imageLink, "_blank");
  }
});
