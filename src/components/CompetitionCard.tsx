import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { Competition } from "src/types/competition";
import { Typography } from "./Typography";
import { BLUE, spacing } from "src/theme";

const competition_bg = require("src/assets/images/competition/bg.png");

export const CompetitionCard: React.FC<CompetitionCardProps> = ({
  active,
  from,
  to,
  description,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, active && styles.containerActive]}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <ImageBackground
        source={competition_bg}
        resizeMethod="scale"
        resizeMode="cover"
        style={styles.innerContainer}
      >
        <Typography
          variant="title3"
          color="common.white"
          fontFamily="PlusJakartaSans-Bold"
          style={styles.title}
        >
          {title}
        </Typography>

        <Typography
          color="common.white"
          fontFamily="PlusJakartaSans-Medium"
          style={styles.date}
        >
          {from} ~ {to}
        </Typography>

        <Typography
          color="blue.200"
          fontFamily="PlusJakartaSans-Medium"
          style={styles.description}
        >
          {description}
        </Typography>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLUE[700],
    width: "100%",
    borderRadius: spacing.md,
    overflow: "hidden",
  },
  containerActive: {
    backgroundColor: BLUE[500],
  },
  innerContainer: {
    padding: spacing.lg,
  },

  title: {
    marginBottom: spacing.sm,
  },
  date: {
    marginBottom: spacing["2xs"],
  },
  description: {},
});

type CompetitionCardProps = {
  active?: boolean;
  onPress?: TouchableOpacity["props"]["onPress"];
} & Competition;
