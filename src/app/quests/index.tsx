import { ProgressCard } from "@/components/ProgressCard";
import { QuestCard } from "@/components/QuestCard";
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

export default function DailyQuestScreen() {
  function openQuest() {
    router.push("/quests/details");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.smallTitle}>WELCOME BACK</Text>
            <Text style={styles.title}>DAILY QUEST</Text>
          </View>

          <View style={styles.level}>
            <Text style={styles.levelSmall}>LV.</Text>
            <Text style={styles.levelNumber}>12</Text>
          </View>
        </View>

        <Text style={styles.section}>TODAY'S QUEST</Text>

        <QuestCard
          title="Strange Training"
          subtitle="Dailt Training * +100XP"
          onPress={openQuest}
        />

        <Text style={styles.section}>PLAN</Text>

        <View style={styles.list}>
          <ProgressCard title="Push-ups" current={20} total={100} />
          <ProgressCard title="Sit-ups" current={50} total={100} />
          <ProgressCard title="Squats" current={70} total={100} />
          <ProgressCard title="Running" current={1} total={5} unit="km" />
        </View>

        <Text style={styles.section}>COMPLETED</Text>

        <View style={styles.completed}>
          <View>
            <Text style={styles.completedTitle}>Yesterday's Training</Text>
            <Text style={styles.completeXP}>+100 XP</Text>
          </View>
          <Text style={styles.check}>✓</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          <Text style={styles.navActive}>◈</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navIcon}>⚔</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navIcon}>✦</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navIcon}>♙</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 32,
  },

  smallTitle: {
    color: colors.textMuted,
    fontSize: 11,
    letterSpacing: 2,
  },

  title: {
    color: colors.text,
    fontSize: 26,

    fontWeight: "700",

    letterSpacing: 1,

    marginTop: 4,
  },

  level: {
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,

    borderWidth: 1,

    borderColor: colors.primary,
    backgroundColor: colors.surface,
  },

  levelSmall: {
    color: colors.textSecondary,
    fontSize: 9,
  },
  levelNumber: {
    color: colors.primaryLight,
    fontSize: 18,
    fontWeight: "700",
  },

  section: {
    color: colors.textSecondary,
    fontSize: 12,
    letterSpacing: 2,
    marginTop: 25,
    marginBottom: 12,
  },

  list: {
    gap: 12,
  },

  completed: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderRadius: 14,

    borderWidth: 1,
    backgroundColor: colors.surface,
  },

  completedTitle: {
    color: colors.border,
    fontSize: 15,
    fontWeight: "600",
  },

  completeXP: {
    color: colors.primaryLight,
    marginTop: 5,
    fontSize: 12,
  },

  check: {
    color: colors.primaryLight,
    fontSize: 24,
    fontWeight: "700",
  },

  bottomNavigation: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderTopWidth: 1,
    borderTopColor: colors.border,

    backgroundColor: colors.surface,
  },

  navIcon: {
    color: colors.textMuted,
    fontSize: 23,
  },

  navActive: {
    color: colors.primary,

    fontSize: 25,
  },
});
