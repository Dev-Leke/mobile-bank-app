import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topNav}>
        <View>
          <Ionicons name="person" size={24} color="black" />
          <View>
            <Text>Signup/Login</Text>
            <Text>Welcome to PalmPay</Text>
          </View>
        </View>
        <View>
          <FontAwesome6 name="headset" size={24} color="#999" />
          <Ionicons name="notifications-outline" size={24} color="#999" />
        </View>
      </View>

      <View style={styles.servicesSection}>
        <View style={styles.servicesHeader}>
          <Text style={styles.servicesHeaderText}>Services</Text>
          <View style={styles.more}>
            <Text>More</Text>
            <FontAwesome5 name="angle-right" size={24} color="black" />
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
            <Ionicons style={{ color: "#167432" }} name="business" size={28} />
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

        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 2 }}
        >
          <View
            style={{
              paddingVertical: 2,
              paddingHorizontal: 10,
              backgroundColor: "#4d1c72",
            }}
          ></View>
          <View
            style={{
              paddingVertical: 2,
              paddingHorizontal: 10,
              backgroundColor: "#ccc",
            }}
          ></View>
        </View>
      </View>

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
    paddingHorizontal: 10,
  },

  contentText: {
    marginTop: 100,
    textAlign: "center",
    fontSize: 20,
  },

  topNav: {
    height: 70,
    backgroundColor: "#fff",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

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
    color: "blue",
    marginTop: 4,
  },

  servicesSection: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  servicesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  servicesHeaderText: {
    fontWeight: 600,
    fontSize: 18,
  },

  more: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  serviceItems: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "25%", // 👈 4 per row
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    gap: 10,
  },
  itemText: {
    fontWeight: 700,
  },

  promo: {
    position: "relative",
  },
  promoBanner: {
    position: "absolute",
    backgroundColor: "orangered",
    top: 5,
    right: 5,
    color: "#fff",
    padding: 2,
    fontSize: 8,
  },
});
