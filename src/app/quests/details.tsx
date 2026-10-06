import { colors } from "@/constants/theme";
import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const exercises = [
  { name: "Push-ups", amount: "100" },
  { name: "Sit-ups", amount: "100" },
  { name: "Squats", amount: "100" },
  { name: "Running", amount: "5 km" },
];

export default function QuestDetailsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>

        <Text style={styles.system}>SYSTEM</Text>
        <Text style={styles.title}>DAILY QUEST</Text>
        <Text style={styles.questName}>Strange Training</Text>

        <View style={styles.systemCard}>
          <Text style={styles.systemTitle}>QUEST HAS ARRIVED</Text>
          <Text style={styles.description}>
            Complete all objectives before the daily quest expires
          </Text>
        </View>

        <Text style={styles.section}>OBJECTIVES</Text>

        <View style={styles.exerciseList}>
          {exercises.map((exercise) => (
            <View key={exercise.name} style={styles.exercise}>
              <View style={styles.exerciseLeft}>
                <View style={styles.checkbox} />
                <Text style={styles.exerciseName}>{exercise.name}</Text>
              </View>
              <Text style={styles.amount}>{exercise.amount}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.section}>REWARD</Text>

        <View style={styles.rewardCard}>
          <Text style={styles.rewardIcon}>+</Text>
          <View>
            <Text style={styles.rewardTitle}>Experience</Text>
            <Text style={styles.rewardXP}>+100 XP</Text>
          </View>
        </View>

        <View style={styles.warning}>
          <Text style={styles.warningTitle}>WARNING</Text>
          <Text style={styles.warningText}>
            Failure to complete the daily quest may result in a penalty
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => console.log("Treino iniciado")}
        >
          <Text style={styles.buttonText}>START QUEST</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    padding: 10,

    paddingBottom: 40,
  },

  back: {
    color: colors.textSecondary,
    fontSize: 16,
    marginBottom: 35,
  },

  system: {
    color: colors.primary,
    fontSize: 11,
    letterSpacing: 4,

    textAlign: "center",
  },

  title: {
    color: colors.text,

    fontWeight: "700",

    letterSpacing: 2,
    textAlign: "center",
    marginTop: 8,
  },

  questName: {
    color: colors.primaryLight,
    fontSize: 16,
    marginTop: 8,
    marginBottom: 30,
  },

  systemCard: {
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    backgroundColor: colors.surface,
  },

  systemTitle: {
    color: colors.primaryLight,
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 1,
  },

  description: {
    color: colors.textSecondary,
    lineHeight: 11,
    marginTop: 10,
  },
  section: {
    color: colors.textSecondary,
    fontSize: 12,
    letterSpacing: 2,
    marginTop: 30,
    marginBottom: 12,
  },

  exerciseList: {
    gap: 10,
  },

  exercise: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    backgroundColor: colors.surface,
  },

  exerciseLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 18,
    height: 18,
    marginRight: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  exerciseName: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "700",
  },

  amount: {
    color: colors.primaryLight,
    fontSize: 14,
  },

  rewardCard: {
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.surface,
  },

  rewardIcon: {
    color: colors.primary,
    fontSize: 30,
    marginRight: 15,
  },

  rewardTitle: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  rewardXP: {
    color: colors.primaryLight,
    fontSize: 20,
    fontWeight: "700",
    marginTop: 3,
  },

  warning: {
    padding: 16,
    marginTop: 30,
    borderRadius: 12,
    backgroundColor: "rgba(255,179,71,0.08)",
    borderWidth: 1,
    borderColor: colors.warning,
  },
  warningTitle: {
    color: colors.warning,
    fontWeight: "700",
    letterSpacing: 2,
  },

  warningText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 8,
  },

  button: {
    height: 56,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    backgroundColor: colors.primary,
  },

  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 1,
  },
});
