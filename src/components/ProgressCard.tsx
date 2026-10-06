import { colors } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

interface ProgressCardProps {
  title: string;
  current: number;

  total: number;

  unit?: string;
}

export function ProgressCard({
  title,
  current,
  total,
  unit = "",
}: ProgressCardProps) {
  const progress = Math.min(current / total, 1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>
          {current}/{total}
        </Text>
      </View>

      <View style={styles.progressBackground}>
        <View style={[styles.progress, { width: `${progress * 100}%` }]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,

    borderWidth: 1,
    borderColor: colors.border,

    backgroundColor: colors.surface,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  title: {
    color: colors.text,

    fontSize: 15,

    fontWeight: "600",
  },

  value: {
    color: colors.primaryLight,
    fontSize: 13,
  },

  progressBackground: {
    height: 7,

    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: colors.progressBackground,
  },

  progress: {
    height: "100%",
    borderRadius: 10,

    backgroundColor: colors.primary,
  },
});
