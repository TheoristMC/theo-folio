# Theo-Folio

A portfolio website for my Minecraft Bedrock projects.

## Adding cards

Required to put all given properties here at `src/page.js` to add cards.

```js
{
  title: "Title",
  description: "Description here...",
  buttonID: "exampleId",
}
```

To make it interactable, you need to put a link to `CardImages` object at the same file. The key must be same as the `buttonID` you have given.

```js
{
  exampleId: "https://youtube.com/"
}
```