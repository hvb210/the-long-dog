import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { hotdogs } from "@/data/hotdogs";

export default function ProductScreen() {
  const { brandId } = useLocalSearchParams();
  const router = useRouter();

  const selectedBrand = hotdogs.find(
    (item) => item.id === Number(brandId)
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {selectedBrand?.name}
      </Text>

      <Text style={styles.subtitle}>
        Choose a product
      </Text>

      {selectedBrand?.products.map((product) => (
        <Pressable
          key={product.id}
          style={styles.hotdogButton}
          onPress={() =>
            router.push({
              pathname: "/quantity",
              params: {
                productId: product.id,
                productName: product.name,
              },
            })
          }
        >
          <Text style={styles.buttonText}>
            {product.name}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    paddingTop: 80,
    paddingBottom: 40,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 18,
    marginVertical: 20,
  },

  hotdogButton: {
    backgroundColor: "#F5A623",
    padding: 15,
    borderRadius: 25,
    marginTop: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
