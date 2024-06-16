import { AppStore } from "./AppStore.svelte";

const app = new AppStore(
  "Animales de adopción",
  "en"
);

export {
  app
}