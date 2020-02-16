import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "World",
    game: "FFVII"
  }
});

export default app;
