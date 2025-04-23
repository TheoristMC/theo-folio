# Theo-Folio

A portfolio website for my Minecraft Bedrock projects.

[Click here for the website.](https://theoristmc.github.io/theo-folio/)

## Adding cards

Required to put all given properties here at `src/page.js` to add cards. Excluding thumbnail, it's optional but will show if given.

```js
{
  title: "Title...",
  description: "Description here...",
  buttonID: "exampleId",
  thumbnail: "https://picsum.photos/id/237/300/200"
}
```

To make it interactable, you need to put a link to `ButtonLinks` object at the same file. The key must be same as the `buttonID` you have given.

```js
{
  exampleId: "https://youtube.com/"
}
```