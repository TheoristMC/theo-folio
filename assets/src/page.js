import { CardBuilder } from "./cardBuilder.js";

const projectCardsContainer = document.getElementById("projects-cards");

// Format: ${buttonID}: ${imageSourceLink}
const imgCardPrefix = "assets/css/images/card";
const ButtonLinks = {
  oreUIForm: `${imgCardPrefix}/oreUIForm.jpg`,
  serverSelector: `${imgCardPrefix}/serverSelector.webp`,
  blossomMenu: `${imgCardPrefix}/blossomMenu.webp`,
  mobWatcher: "https://github.com/TheoristMC/Mob-Monitor",
  brewingRecipes: "https://modbay.org/textures/3892-brewing-recipes-ui.html",
  oreUIForm2: `${imgCardPrefix}/oreUIForm2.webp`,
  shopForm: `${imgCardPrefix}/shopForm.webp`,
  fletchingTable: `${imgCardPrefix}/fletchingTable.webp`,
  hudFeatures: `${imgCardPrefix}/hudFeatures.png`,
};

new CardBuilder([
  {
    title: "Ore-UI Forms",
    description: "UI Server Form that is based on the modern ORE-UI style.",
    buttonID: "oreUIForm",
    thumbnail: ButtonLinks.oreUIForm,
  },
  {
    title: "Menu UI",
    description: "Main Menu interface for the server Blossom SMP.",
    buttonID: "blossomMenu",
    thumbnail: ButtonLinks.blossomMenu,
  },
  {
    title: "Server Selector",
    description:
      "Server Selector made for a server that lets you join external servers in consoles.",
    buttonID: "serverSelector",
    thumbnail: ButtonLinks.serverSelector,
  },
  {
    title: "Mob Monitor",
    description:
      "It lets you watch your mobs while you are away. Although you need to find a way to load them.",
    buttonID: "mobWatcher",
    thumbnail: `${imgCardPrefix}/mobMonitor.png`,
  },
  {
    title: "Ore-UI Forms",
    description:
      "A part 2 of the original.\n\nUI Server Form that is based on the modern ORE-UI style.",
    buttonID: "oreUIForm2",
    thumbnail: ButtonLinks.oreUIForm2,
  },
  {
    title: "Brewing Recipes",
    description:
      "Integrated crafting-table like recipes interface to brewing stand.",
    buttonID: "brewingRecipes",
    thumbnail: `${imgCardPrefix}/brewingRecipes.png`,
  },
  {
    title: "HUD Features",
    description:
      "My personal pack which is currently in-development but hoping to release it on the public soon.",
    buttonID: "hudFeatures",
    thumbnail: ButtonLinks.hudFeatures,
  },
  {
    title: "Shop Form",
    description: "Originally made for a commision but is discontinued.",
    buttonID: "shopForm",
    thumbnail: ButtonLinks.shopForm,
  },
  {
    title: "Fletching Table",
    description:
      "My design guess for what Fletching Table interface would probably look like.",
    buttonID: "fletchingTable",
    thumbnail: ButtonLinks.fletchingTable,
  },
]).build();

projectCardsContainer.addEventListener("click", (ev) => {
  const { target } = ev;

  if (target.tagName === "BUTTON") {
    const imageLink = ButtonLinks[target.id];
    if (!imageLink) return;

    window.open(imageLink, "_blank");
  }
});
