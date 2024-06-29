import { view } from "./storybook.requires";

const store: Record<string, any> = {
  lastOpenedStory: "buttons-button--button-default",
};

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: async (key) => {
      return store[key];
    },
    setItem: async (key: string, value: any) => {
      store[key] = value;
    },
  },
});

export default StorybookUIRoot;
