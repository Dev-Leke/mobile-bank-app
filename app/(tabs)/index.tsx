import React from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header (Abimbola) */}
      <View style={styles.topNav}>
        <View style={styles.topLeft}>
          <Ionicons name="person" size={24} color="black" />
          <View>
            <Text style={styles.topTitle}>Signup/Login</Text>
            <Text style={styles.topSub}>Welcome to PalmPay</Text>
          </View>
        </View>

        <View style={styles.topRight}>
          <FontAwesome6 name="headset" size={24} color="#999" />
          <Ionicons name="notifications-outline" size={24} color="#999" />
        </View>
      </View>

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Money Transfer (your work) */}
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

        {/* Services (your work) */}
        <View style={styles.card}>
          <View style={styles.servicesHeader}>
            <Text style={styles.title}>Services</Text>
            <Text style={styles.moreText}>More ›</Text>
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

        {/* Alert button (your work) */}
        <TouchableOpacity
          style={styles.alertBtn}
          onPress={() => Alert.alert("Alert Button pressed")}
        >
          <Text style={styles.alertText}>Alert</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation (footer) */}
      <View style={styles.bottomNav}>
        <View style={styles.tabItem}>
          <Ionicons name="home-sharp" size={24} color="#1b0a73" />
          <Text style={styles.tabLabelActive}>Home</Text>
        </View>

        <View style={styles.tabItem}>
          <Fontisto name="money-symbol" size={24} color="#999" />
          <Text style={styles.tabLabel}>Loan</Text>
        </View>

        <View style={styles.tabItem}>
          <AntDesign name="line-chart" size={24} color="#999" />
          <Text style={styles.tabLabel}>Wealth</Text>
        </View>

        <View style={styles.tabItem}>
          <Ionicons name="gift-outline" size={24} color="#999" />
          <Text style={styles.tabLabel}>Rewards</Text>
        </View>

        <View style={styles.tabItem}>
          <FontAwesome6 name="face-smile" size={24} color="#999" />
          <Text style={styles.tabLabel}>Me</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },

  scrollContent: {
    paddingBottom: 90, // space for bottom nav
  },

  topNav: {
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  topLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  topRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  topTitle: {
    fontWeight: "700",
  },

  topSub: {
    color: "#777",
    fontSize: 12,
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

  moreText: {
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
    marginBottom: 16,
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

  bottomNav: {
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },

  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  tabLabel: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },

  tabLabelActive: {
    fontSize: 12,
    color: "#1b0a73",
    marginTop: 4,
    fontWeight: "700",
  },
});
