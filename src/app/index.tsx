import { colors } from "@/constants/theme";
import { router } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  function handleStart() {
    router.push("/quests");
  }

  return (
    <ImageBackground
      source={require("../../assets/img/awakening-bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.logoContainer}>
            <View style={styles.logoIcon}>
              <Text style={styles.logoSymbol}>+</Text>
            </View>

            <Text style={styles.logo}>AWAKEN</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>
              YOUR{"\n"}
              AWAKENING{"\n"}
              BEGINS NOW!
            </Text>
            <Text style={styles.description}>
              Walk your path. Take action. {"\n"}
              Conquer. Become a legend.
            </Text>

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={handleStart}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(10,6,21,0.30)",
  },

  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 20,
  },

  logoIcon: {
    width: 30,
    height: 30,

    alignItems: "center",
    justifyContent: "center",

    marginRight: 10,

    borderRadius: 8,

    backgroundColor: colors.surface,

    borderWidth: 1,
    borderColor: colors.primary,
  },

  logoSymbol: {
    color: colors.primaryLight,
    fontSize: 18,
  },

  logo: {
    color: colors.text,

    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 4,
  },

  content: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
  },

  title: {
    color: colors.text,
    fontSize: 38,
    lineHeight: 43,
    fontWeight: "700",
    letterSpacing: 1,
  },

  description: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 23,

    marginTop: 18,
  },

  button: {
    height: 56,
    marginTop: 32,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 28,

    backgroundColor: colors.primary,
  },

  buttonText: {
    color: colors.background,
    fontSize: 17,
    fontWeight: "700",
  },
});
