import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.topNav}>
        <View style={styles.topLeft}>
          <Ionicons name="person" size={26} color="#111" />
          <View>
            <Text style={styles.topTitle}>Signup/Login</Text>
            <Text style={styles.topSub}>Welcome to PalmPay</Text>
          </View>
        </View>

        <View style={styles.topRight}>
          <FontAwesome6 name="headset" size={22} color="#999" />
          <Ionicons name="notifications-outline" size={24} color="#999" />
        </View>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner */}
        <View style={styles.bannerWrap}>
          <Image
            source={require("../../assets/images/banner.jpeg")}
            style={styles.banner}
            resizeMode="cover"
          />
        </View>

        {/* Money Transfer */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Money Transfer</Text>

          <View style={styles.moneyRow}>
            <TouchableOpacity
              style={styles.moneyItem}
              onPress={() => Alert.alert("To Bank")}
            >
              <View style={styles.moneyIconBox}>
                <Ionicons name="business" size={26} color="#5B3DF5" />
              </View>
              <Text style={styles.moneyLabel}>To Bank</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.moneyItem}
              onPress={() => Alert.alert("To PalmPay")}
            >
              <View style={styles.moneyIconBox}>
                <Ionicons name="person" size={26} color="#5B3DF5" />
              </View>
              <Text style={styles.moneyLabel}>To PalmPay</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.moneyItem}
              onPress={() => Alert.alert("Withdraw")}
            >
              <View style={styles.moneyIconBox}>
                <Ionicons name="card" size={26} color="#5B3DF5" />
              </View>
              <Text style={styles.moneyLabel}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Services */}
        <View style={styles.card}>
          <View style={styles.servicesHeader}>
            <Text style={styles.sectionTitle}>Services</Text>

            <View style={styles.more}>
              <Text style={styles.moreText}>More</Text>
              <FontAwesome5 name="angle-right" size={18} color="#777" />
            </View>
          </View>

          <View style={styles.grid}>
            <View style={styles.gridItem}>
              <View style={styles.serviceIconBox}>
                <Ionicons name="call" size={26} color="#497ee8" />
                <Text style={styles.badge}>FREE</Text>
              </View>
              <Text style={styles.gridText}>Airtime</Text>
            </View>

            <View style={styles.gridItem}>
              <View style={styles.serviceIconBox}>
                <Ionicons name="server" size={26} color="#167432" />
              </View>
              <Text style={styles.gridText}>Data</Text>
            </View>

            <View style={styles.gridItem}>
              <View style={styles.serviceIconBox}>
                <Ionicons name="flash" size={26} color="#167432" />
              </View>
              <Text style={styles.gridText}>Electricity</Text>
            </View>

            <View style={styles.gridItem}>
              <View style={styles.serviceIconBox}>
                <Ionicons name="shield" size={26} color="#497ee8" />
              </View>
              <Text style={styles.gridText}>Insurance</Text>
            </View>

            <View style={styles.gridItem}>
              <View style={styles.serviceIconBox}>
                <Ionicons name="business" size={26} color="#167432" />
              </View>
              <Text style={styles.gridText}>Loan</Text>
            </View>

            <View style={styles.gridItem}>
              <View style={styles.serviceIconBox}>
                <Ionicons name="tv" size={26} color="#497ee8" />
              </View>
              <Text style={styles.gridText}>TV</Text>
            </View>

            <View style={styles.gridItem}>
              <View style={styles.serviceIconBox}>
                <Ionicons name="person" size={26} color="#4d1c72" />
              </View>
              <Text style={styles.gridText}>Refer & Earn</Text>
            </View>

            <View style={styles.gridItem}>
              <View style={styles.serviceIconBox}>
                <Ionicons name="card-sharp" size={26} color="#4d1c72" />
                <Text style={styles.badge}>FREE</Text>
              </View>
              <Text style={styles.gridText}>ATM card</Text>
            </View>

            <View style={styles.gridItem}>
              <View style={styles.serviceIconBox}>
                <Ionicons name="cash" size={26} color="#4d1c72" />
                <Text style={styles.badge}>Payable</Text>
              </View>
              <Text style={styles.gridText}>Cashbox</Text>
            </View>

            <View style={styles.gridItem}>
              <View style={styles.serviceIconBox}>
                <Ionicons name="wallet" size={26} color="#4d1c72" />
              </View>
              <Text style={styles.gridText}>SmartEarn</Text>
            </View>

            <View style={styles.gridItem}>
              <View style={styles.serviceIconBox}>
                <Ionicons name="stats-chart" size={26} color="#4d1c72" />
              </View>
              <Text style={styles.gridText}>WAEC</Text>
            </View>

            <View style={styles.gridItem}>
              <View style={styles.serviceIconBox}>
                <Ionicons name="bag" size={26} color="#497ee8" />
              </View>
              <Text style={styles.gridText}>Transport</Text>
            </View>
          </View>

          <View style={styles.dots}>
            <View style={styles.dotActive} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Alert */}
        <TouchableOpacity
          style={styles.alertBtn}
          onPress={() => Alert.alert("Alert", "Alert Button pressed")}
        >
          <Text style={styles.alertText}>Alert</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e0e0",
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
    color: "#111",
  },

  topSub: {
    color: "#777",
    fontSize: 12,
    marginTop: 2,
  },

  scrollContent: {
    paddingHorizontal: 12,
    paddingBottom: 110,
    paddingTop: 12,
  },

  bannerWrap: {
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#ddd",
    marginBottom: 12,
  },

  banner: {
    height: 130,
    width: "100%",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111",
  },

  moneyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },

  moneyItem: {
    flex: 1,
    alignItems: "center",
  },

  moneyIconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#EEE6FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  moneyLabel: {
    fontSize: 12,
    color: "#222",
    fontWeight: "600",
  },

  servicesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  more: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  moreText: {
    color: "#777",
    fontWeight: "600",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 14,
  },

  gridItem: {
    width: "25%",
    alignItems: "center",
    marginBottom: 16,
  },

  serviceIconBox: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: "#F4F2FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    position: "relative",
  },

  gridText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
  },

  badge: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "orangered",
    color: "#fff",
    fontSize: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: "hidden",
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    marginTop: 4,
  },

  dotActive: {
    height: 4,
    width: 22,
    backgroundColor: "#4d1c72",
    borderRadius: 999,
  },

  dot: {
    height: 4,
    width: 22,
    backgroundColor: "#ccc",
    borderRadius: 999,
  },

  alertBtn: {
    backgroundColor: "#6C1EFF",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 10,
  },

  alertText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },
});
