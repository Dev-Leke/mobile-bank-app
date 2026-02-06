import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header */}
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

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Your middle UI can be added above/below this section later */}

        <View style={styles.servicesSection}>
          <View style={styles.servicesHeader}>
            <Text style={styles.servicesHeaderText}>Services</Text>
            <View style={styles.more}>
              <Text style={styles.moreText}>More</Text>
              <FontAwesome5 name="angle-right" size={18} color="#555" />
            </View>
          </View>

          <View style={styles.serviceItems}>
            <View style={[styles.item, styles.promo]}>
              <Ionicons style={{ color: "#497ee8" }} name="call" size={28} />
              <Text style={styles.itemText}>Airtime</Text>
              <Text style={styles.promoBanner}>FREE</Text>
            </View>

            <View style={styles.item}>
              <Ionicons style={{ color: "#167432" }} name="server" size={28} />
              <Text style={styles.itemText}>Data</Text>
            </View>

            <View style={styles.item}>
              <Ionicons style={{ color: "#167432" }} name="flash" size={28} />
              <Text style={styles.itemText}>Electricity</Text>
            </View>

            <View style={styles.item}>
              <Ionicons style={{ color: "#497ee8" }} name="shield" size={28} />
              <Text style={styles.itemText}>Insurance</Text>
            </View>

            <View style={styles.item}>
              <Ionicons
                style={{ color: "#167432" }}
                name="business"
                size={28}
              />
              <Text style={styles.itemText}>Loan</Text>
            </View>

            <View style={styles.item}>
              <Ionicons style={{ color: "#497ee8" }} name="tv" size={28} />
              <Text style={styles.itemText}>TV</Text>
            </View>

            <View style={styles.item}>
              <Ionicons style={{ color: "#4d1c72" }} name="person" size={28} />
              <Text style={styles.itemText}>Refer & Earn</Text>
            </View>

            <View style={[styles.item, styles.promo]}>
              <Ionicons
                style={{ color: "#4d1c72" }}
                name="card-sharp"
                size={28}
              />
              <Text style={styles.itemText}>ATM card</Text>
              <Text style={styles.promoBanner}>FREE</Text>
            </View>

            <View style={[styles.item, styles.promo]}>
              <Ionicons style={{ color: "#4d1c72" }} name="cash" size={28} />
              <Text style={styles.itemText}>Cashbox</Text>
              <Text style={styles.promoBanner}>Payable</Text>
            </View>

            <View style={styles.item}>
              <Ionicons style={{ color: "#4d1c72" }} name="wallet" size={28} />
              <Text style={styles.itemText}>SmartEarn</Text>
            </View>

            <View style={styles.item}>
              <Ionicons
                style={{ color: "#4d1c72" }}
                name="stats-chart"
                size={28}
              />
              <Text style={styles.itemText}>WAEC</Text>
            </View>

            <View style={styles.item}>
              <Ionicons style={{ color: "#497ee8" }} name="bag" size={28} />
              <Text style={styles.itemText}>Transport</Text>
            </View>
          </View>

          <View style={styles.dots}>
            <View style={styles.dotActive} />
            <View style={styles.dot} />
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
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
    backgroundColor: "#e2e0e0",
  },

  scrollContent: {
    paddingHorizontal: 10,
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

  servicesSection: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginTop: 12,
  },

  servicesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },

  servicesHeaderText: {
    fontWeight: "600",
    fontSize: 18,
  },

  more: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  moreText: {
    color: "#777",
  },

  serviceItems: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  item: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    gap: 10,
  },

  itemText: {
    fontWeight: "700",
    fontSize: 12,
  },

  promo: {
    position: "relative",
  },

  promoBanner: {
    position: "absolute",
    backgroundColor: "orangered",
    top: 6,
    right: 6,
    color: "#fff",
    paddingHorizontal: 4,
    paddingVertical: 2,
    fontSize: 8,
    borderRadius: 4,
    overflow: "hidden",
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    marginTop: 6,
    marginBottom: 4,
  },

  dotActive: {
    height: 4,
    width: 20,
    backgroundColor: "#4d1c72",
    borderRadius: 999,
  },

  dot: {
    height: 4,
    width: 20,
    backgroundColor: "#ccc",
    borderRadius: 999,
  },
});
