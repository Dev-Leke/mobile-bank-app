import { Image } from "expo-image";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.page}>
        <View style={styles.card}>
          <Text style={styles.title}>Money Transfer</Text>

          <View style={styles.row}>
            <View style={styles.item}>
              <View style={styles.icon} />
              <Text style={styles.label}>To Bank</Text>
            </View>

            <View style={styles.item}>
              <View style={styles.icon} />
              <Text style={styles.label}>To PalmPay</Text>
            </View>

            <View style={styles.item}>
              <View style={styles.icon} />
              <Text style={styles.label}>Withdraw</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.servicesHeader}>
            <Text style={styles.title}>Services</Text>
            <Text style={styles.more}>More ›</Text>
          </View>

          <View style={styles.grid}>
            {[
              "Airtime",
              "Data",
              "Electricity",
              "Insurance",
              "Loan",
              "TV",
              "Refer & Earn",
              "ATM Card",
              "CashBox",
              "SmartEarn",
              "WAEC",
              "Transport",
            ].map((name) => (
              <View key={name} style={styles.gridItem}>
                <View style={styles.serviceIcon} />
                <Text style={styles.gridText}>{name}</Text>
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity
          style={styles.alertBtn}
          onPress={() => Alert.alert("Alert Button pressed")}
        >
          <Text style={styles.alertText}>Alert</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },

  page: {
    paddingBottom: 24,
    backgroundColor: "#F4F5F7",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },

  item: {
    alignItems: "center",
    flex: 1,
  },

  icon: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#EEE6FF",
    marginBottom: 8,
  },

  label: {
    fontSize: 12,
    color: "#222",
  },

  servicesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  more: {
    color: "#9AA0A6",
    fontSize: 13,
    fontWeight: "500",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 18,
  },

  gridItem: {
    width: "25%",
    alignItems: "center",
    marginBottom: 18,
  },

  serviceIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#EEE6FF",
    marginBottom: 6,
  },

  gridText: {
    fontSize: 11,
    textAlign: "center",
    color: "#222",
  },

  alertBtn: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: "#6C1EFF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  alertText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
