import React from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.page}>
      <View style={styles.banner}>
  <Text style={styles.bannerTop}>FIRST ORDER: GET ₦100 OFF</Text>
  <Text style={styles.bannerTitle}>UNLOCK EXTRA FREE COUPONS!</Text>

  <TouchableOpacity style={styles.bannerBtn} onPress={() => {}}>
    <Text style={styles.bannerBtnText}>Get Now</Text>
  </TouchableOpacity>
</View>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },
  banner: {
  marginHorizontal: 16,
  marginTop: 16,
  borderRadius: 16,
  padding: 16,
  backgroundColor: "#6C1EFF", // purple like reference
},

bannerTop: {
  alignSelf: "flex-start",
  paddingHorizontal: 10,
  paddingVertical: 6,
  borderRadius: 10,
  backgroundColor: "#FFD44D", // yellow tag
  fontWeight: "700",
  fontSize: 12,
},

bannerTitle: {
  marginTop: 14,
  fontSize: 22,
  fontWeight: "800",
  color: "#FFFFFF",
},

bannerBtn: {
  marginTop: 14,
  alignSelf: "flex-start",
  backgroundColor: "#FFD44D",
  paddingHorizontal: 18,
  paddingVertical: 10,
  borderRadius: 14,
},

bannerBtnText: {
  fontWeight: "800",
  color: "#3A1A8A",
},
  page: {
    paddingTop: 16,
    paddingBottom: 120,
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
