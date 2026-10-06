import { colors } from "@/constants/theme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface QuestCardProps {
  title: string;
  subtitle: string;
  onPress?: () => void;
}

export function QuestCard({ title, subtitle, onPress }: QuestCardProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <View>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subTible}>{subtitle}</Text>
      </View>

      <Text style={styles.arrow}> - </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: colors.surface,
  },

  title: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "700",
  },

  subTible: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 6,
  },

  arrow: {
    color: colors.primary,
    fontSize: 30,
  },
});
