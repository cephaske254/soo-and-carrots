import { CompetitionCard as CompetitionCardComponent } from "src/components/CompetitionCard";
import type { Meta, StoryObj } from "@storybook/react";
import { View } from "react-native";

const CompetitionCardMeta: Meta<typeof CompetitionCardComponent> = {
  component: CompetitionCardComponent,
  title: "CompetitionCard",
  argTypes: {
    active: {
      defaultValue: false,
      description: "Whether the card is active",
      control: { type: "boolean" },
    },
  },

  decorators: [
    (Story) => (
      <View
        style={{
          paddingHorizontal: 12,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export const CompetitionCard: StoryObj<typeof CompetitionCardMeta> = {
  args: {
    active: false,
    title: "20th Asian Game - Achi Nagoya 2026 (Winter)",
    description: "Pyeongchang, Gangwon-do, Korea",
    from: "YYYY-MM-DD",
    to: "YYYY-MM-DD",
  },
};
export const CompetitionCardActive: StoryObj<typeof CompetitionCardMeta> = {
  args: {
    active: true,
    title: "20th Asian Game - Achi Nagoya 2026 (Winter)",
    description: "Pyeongchang, Gangwon-do, Korea",
    from: "YYYY-MM-DD",
    to: "YYYY-MM-DD",
  },
};

export default CompetitionCardMeta;
