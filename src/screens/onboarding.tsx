import { Dimensions, StyleSheet, View } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, IconButton, Typography } from "src/components";
import { GREY, spacing } from "src/theme";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowRightIcon, EmailIcon, LoginIcon } from "src/icons";
import { RootStackScreenProps } from "src/navigation";

const { height, width } = Dimensions.get("screen");

const bg_video = require("src/assets/videos/bg.mp4");
const bg_thumbnail = require("src/assets/videos/bg.thumbnail.png");

const ADORNMENT_SIZE = 44;

const EndAdornment = () => {
  return (
    <IconButton
      style={styles.endAdornment}
      disabled
      variant="outline"
      color="default"
    >
      <ArrowRightIcon color={GREY["50"]} />
    </IconButton>
  );
};

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const handleClick = (type: "signup" | "continue") => {
    return () => {
      navigation.navigate("register");
    };
  };

  return (
    <View style={styles.container}>
      <Video
        source={bg_video}
        rate={1.0}
        volume={0}
        isMuted
        shouldPlay
        isLooping
        style={{ height, width }}
        resizeMode={ResizeMode.COVER}
        useNativeControls={false}
        usePoster
        posterSource={bg_thumbnail}
      />

      <SafeAreaView style={styles.absoluteContainer}>
        <Typography
          variant="header"
          color="common.white"
          fontFamily="PlusJakartaSans-ExtraBold"
          style={styles.title}
        >
          Soo{"\n"}
          and Carrots
        </Typography>

        <View style={styles.spacer} />

        <LinearGradient
          style={styles.footer}
          colors={["#16171800", "#161718"]}
          locations={[0, 0.6]}
        >
          <Button
            variant="contained"
            rounded
            endAdornment={<EndAdornment />}
            containerStyles={styles.buttons}
            typographyStyles={styles.buttonTypography}
            startAdornment={<LoginIcon />}
            onPress={handleClick("signup")}
          >
            Sign up for free
          </Button>

          <Button
            variant="contained"
            color="secondary"
            rounded
            containerStyles={styles.buttons}
            endAdornment={<EndAdornment />}
            startAdornment={<EmailIcon />}
            typographyStyles={styles.buttonTypography}
            onPress={handleClick("continue")}
          >
            Continue with Email
          </Button>
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  spacer: {
    flexGrow: 1,
  },

  absoluteContainer: StyleSheet.absoluteFillObject,
  title: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  footer: {
    paddingBottom: spacing["2xl"],
    paddingTop: spacing["2xl"],
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal: spacing.lg,
    // borderWidth: 1,
  },
  endAdornment: {
    height: ADORNMENT_SIZE,
    width: ADORNMENT_SIZE,
  },
  buttons: {
    marginTop: spacing.md,
    paddingVertical: spacing.sm,
    paddingRight: spacing.sm,
  },
  buttonTypography: {
    textAlign: "left",
    paddingLeft: spacing.md,
  },
});

type OnboardingScreenProps = RootStackScreenProps<"onboarding">;

export default OnboardingScreen;
