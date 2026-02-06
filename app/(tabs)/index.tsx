import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Promo Banner (placeholder image) */}
        <View style={styles.bannerWrap}>
          <View style={styles.banner}>
            <View style={styles.bannerTag}>
              <Text style={styles.bannerTagText}>FIRST ORDER: GET ₦100 OFF</Text>
            </View>

            <Text style={styles.bannerTitle}>UNLOCK EXTRA FREE{"\n"}COUPONS!</Text>

            <View style={styles.bannerBtn}>
              <Text style={styles.bannerBtnText}>Get Now</Text>
            </View>

            <View style={styles.bannerBadge}>
              <Text style={styles.bannerBadgeSmall}>UP TO</Text>
              <Text style={styles.bannerBadgeBig}>₦5,450</Text>
            </View>
          </View>
        </View>

        {/* Money Transfer */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Money Transfer</Text>

          <View style={styles.transferRow}>
            <View style={styles.transferItem}>
              <View style={styles.transferIcon}>
                <Ionicons name="business" size={26} color="#6C1EFF" />
              </View>
              <Text style={styles.transferLabel}>To Bank</Text>
            </View>

            <View style={styles.transferItem}>
              <View style={styles.transferIcon}>
                <Ionicons name="person" size={26} color="#6C1EFF" />
              </View>
              <Text style={styles.transferLabel}>To PalmPay</Text>
            </View>

            <View style={styles.transferItem}>
              <View style={styles.transferIcon}>
                <MaterialCommunityIcons name="cash-fast" size={26} color="#6C1EFF" />
              </View>
              <Text style={styles.transferLabel}>Withdraw</Text>
            </View>
          </View>
        </View>

        {/* Services (LEKE'S SECTION - kept) */}
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
              <Ionicons style={{ color: "#4d1c72" }} name="card-sharp" size={28} />
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
              <Ionicons style={{ color: "#4d1c72" }} name="stats-chart" size={28} />
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

        {/* Alert Button */}
        <TouchableOpacity style={styles.alertBtn} onPress={() => alert("Alert Button pressed")}>
          <Text style={styles.alertText}>Alert</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation (LEKE'S FOOTER - kept) */}
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
  container: { flex: 1, backgroundColor: "#e2e0e0" },

  scrollContent: {
    paddingHorizontal: 10,
    paddingBottom: 110, // space for bottom nav
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
  topLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  topRight: { flexDirection: "row", alignItems: "center", gap: 14 },
  topTitle: { fontWeight: "700" },
  topSub: { color: "#777", fontSize: 12 },

  bottomNav: {
    height: 70,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  tabItem: { alignItems: "center", justifyContent: "center" },
  tabLabel: { fontSize: 12, color: "#999", marginTop: 4 },
  tabLabelActive: { fontSize: 12, color: "#1b0a73", marginTop: 4, fontWeight: "700" },

  /* Banner */
  bannerWrap: { marginTop: 12 },
  banner: {
    height: 150,
    borderRadius: 12,
    backgroundColor: "#6C1EFF",
    padding: 12,
    overflow: "hidden",
  },
  bannerTag: {
    alignSelf: "flex-start",
    backgroundColor: "#FFC400",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 10,
  },
  bannerTagText: { fontWeight: "800", fontSize: 11, color: "#2b2b2b" },
  bannerTitle: { color: "#fff", fontWeight: "900", fontSize: 22, lineHeight: 24 },
  bannerBtn: {
    marginTop: 10,
    backgroundColor: "#FFC400",
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
  },
  bannerBtnText: { fontWeight: "900", color: "#2b2b2b" },
  bannerBadge: {
    position: "absolute",
    right: 14,
    bottom: 14,
    backgroundColor: "rgba(255,255,255,0.18)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
  },
  bannerBadgeSmall: { color: "#fff", fontWeight: "800", fontSize: 10, textAlign: "center" },
  bannerBadgeBig: { color: "#fff", fontWeight: "900", fontSize: 20 },

  /* Money Transfer */
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginTop: 12,
  },
  sectionTitle: { fontWeight: "800", fontSize: 20, marginBottom: 10 },
  transferRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 6 },
  transferItem: { alignItems: "center", width: "33%" },
  transferIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#EEE6FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  transferLabel: { fontSize: 12, color: "#222" },

  /* Services */
  servicesSection: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginTop: 12,
  },
  servicesHeader: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10, alignItems: "center" },
  servicesHeaderText: { fontWeight: "600", fontSize: 18 },
  more: { flexDirection: "row", alignItems: "center", gap: 6 },
  moreText: { color: "#777" },
  serviceItems: { flexDirection: "row", flexWrap: "wrap" },
  item: { width: "25%", alignItems: "center", justifyContent: "center", paddingVertical: 16, gap: 10 },
  itemText: { fontWeight: "700", fontSize: 12 },
  promo: { position: "relative" },
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

  dots: { flexDirection: "row", justifyContent: "center", gap: 6, marginTop: 6, marginBottom: 4 },
  dotActive: { height: 4, width: 20, backgroundColor: "#4d1c72", borderRadius: 999 },
  dot: { height: 4, width: 20, backgroundColor: "#ccc", borderRadius: 999 },

  /* Alert */
  alertBtn: {
    marginTop: 14,
    backgroundColor: "#6C1EFF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  alertText: { color: "#fff", fontSize: 16, fontWeight: "800" },
});
