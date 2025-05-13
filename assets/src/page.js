import { CardBuilder } from "./cardBuilder.js";

const projectCardsContainer = document.getElementById("projects-cards");
const imageView = document.getElementById("image-view");
const image = document.getElementById("image-view-src");

// Format: ${buttonID}: ${imageSourceLink}
const ButtonLinks = {
  brewing_recipes: "brewing_recipes_ui.png",
  fletching_table_ui: "fletching_table_ui.webp",
  form_ore_ui: "form_ore_ui.webp",
  server_selector_ui: "server_selector_ui.webp",
  entity_monologue_ui: "entity_monologue_ui.webp",
  map_selector_ui: "map_selector_ui.webp",
};

new CardBuilder([
  {
    title: "Brewing Recipes",
    description:
      "Adds the vanilla recipes interface to the brewing stand to help players craft different kinds of potions.",
    buttonID: "brewing_recipes",
    thumbnail: ButtonLinks.brewing_recipes,
  },
  {
    title: "Fletching Table Interface",
    description: "My design guess for the future Fletching Table interface.",
    buttonID: "fletching_table_ui",
    thumbnail: ButtonLinks.fletching_table_ui,
  },
  {
    title: "Server Form",
    description:
      "Creative interfaces that makes use of the modern ORE-UI style.",
    buttonID: "form_ore_ui",
    thumbnail: ButtonLinks.form_ore_ui,
  },
  {
    title: "Server Selector",
    description: "Modern style interface for server selector.",
    buttonID: "server_selector_ui",
    thumbnail: ButtonLinks.server_selector_ui,
  },
  {
    title: "Entity Monologues",
    description:
      'Vanilla NPC UI style for entity monologues. It also has "letter by letter" animation.',
    buttonID: "entity_monologue_ui",
    thumbnail: ButtonLinks.entity_monologue_ui,
  },
  {
    title: "Map Selector Interface",
    description: "Wooden style map-selector interface.",
    buttonID: "map_selector_ui",
    thumbnail: ButtonLinks.map_selector_ui,
  },
]).build();

projectCardsContainer.addEventListener("click", (ev) => {
  const { target } = ev;

  if (target.tagName === "BUTTON") {
    const imageLink = ButtonLinks[target.id];
    if (!imageLink) return;

    image.src = `assets/css/images/card/${imageLink}`;
    imageView.style.display = "block";
  }
});

imageView.addEventListener("click", () => (imageView.style.display = "none"));
document.addEventListener(
  "keydown",
  (ev) => ev.key === "Escape" && (imageView.style.display = "none")
);
image.addEventListener("click", (ev) => ev.stopPropagation());
