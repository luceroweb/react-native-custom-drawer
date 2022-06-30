import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const profileImage = require("../../assets/user-profile.jpg");

  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hello John Doe</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={profileImage} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
  },
  profileIcon: {
    width: 35,
    height: 35,
    borderRadius: 25,
  },
});
