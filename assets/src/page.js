import { CardBuilder } from "./cardBuilder.js";

const projectCardsContainer = document.getElementById("projects-cards");

// Format: ${buttonID}: ${imageSourceLink}
const ButtonLinks = {
  oreUIForm:
    "https://media.discordapp.net/attachments/1263108593452974121/1263108595680022549/Screenshot_2024-07-14-21-59-07-76_5c8300b655012b1930f2e0a7b81bf6a9.jpg?ex=6809844c&is=680832cc&hm=1a206607a8e23d5da80b0a4d4a5eec9f925add4d75be4938c34b65cb0c3ed153&=&format=webp&width=1896&height=853",
  serverSelector:
    "https://media.discordapp.net/attachments/1326386023995015169/1327923002570051584/image.png?ex=6809fbab&is=6808aa2b&hm=4ec7745b8930dcf7b0f49fdde5a50449a94f8738469d162426c194bc4692fe23&=&format=webp&quality=lossless",
  blossomMenu:
    "https://media.discordapp.net/attachments/1326386023995015169/1327923002850934834/image.png?ex=6809fbab&is=6808aa2b&hm=4a626512d66bce6a685c1d8f8752c617ba7369138f0f0f037945e20033902f3e&=&format=webp&quality=lossless",
  mobWatcher: "https://github.com/TheoristMC/Mob-Monitor",
  brewingRecipes: "https://modbay.org/textures/3892-brewing-recipes-ui.html",
  oreUIForm2:
    "https://media.discordapp.net/attachments/1289467940420321333/1289467940651139115/image.png?ex=6809d49a&is=6808831a&hm=66e300241973f42e2d27493aecd11d8c550b8f0e12b463ce84c8273c0c02e0c9&=&format=webp&quality=lossless",
  shopForm:
    "https://media.discordapp.net/attachments/1345372399792558080/1346052634473402389/image.png?ex=680a0534&is=6808b3b4&hm=c5abbb1827a8f57defb7067b1515a7d474cf0fa08a0131b251c1ecd95efd1ca1&=&format=webp&quality=lossless",
  fletchingTable:
    "https://media.discordapp.net/attachments/1348937662945427547/1348937720113659904/image.png?ex=6809f826&is=6808a6a6&hm=bee879ce30eec3d8e9e035fd8af3bb381261ee9601ba56bad83ac7f7e781a395&=&format=webp&quality=lossless",
  hudFeatures:
    "https://media.discordapp.net/attachments/1356125135882424413/1356820636047245352/image.png?ex=6809a4b0&is=68085330&hm=a2456602b7ec4378440c7ad30b0e5c444452448157b1b5a8e04b0e1be774f946&=&format=webp&quality=lossless&width=1664&height=936",
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
    thumbnail:
      "https://media.discordapp.net/attachments/1326386023995015169/1332314197974974484/image.png?ex=68097a89&is=68082909&hm=77a18588ff349a6106455524c767d6ee8d98ca6b91dffe85dbba0875407eb9c4&=&format=webp&quality=lossless",
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
    thumbnail:
      "https://media.discordapp.net/attachments/1326386023995015169/1333617501891989555/image.png?ex=68099b15&is=68084995&hm=492535b1e9304803e3d36983b5621b6a750f2a95909dc3f08a4d8dccc6ce3e30&=&format=webp&quality=lossless",
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
      "My design guess for what would Fletching Table interface would probably look like.",
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
