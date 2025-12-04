import { View, Text, StyleSheet } from 'react-native';
import SummaryCard from './SummaryCard';
import OrdersScreen from './OrdersScreen';

// Dashboard top row of summary cards
const SummaryRow = () => (
  <View style={styles.row}>
    <SummaryCard title="Revenue" value="$120K" />
    <SummaryCard title="Customers" value="320" />
    <SummaryCard title="Orders" value="842" />
  </View>
);

// Main App component
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Business Dashboard</Text>

      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Sales</Text>
          <Text style={styles.cardValue}>$15,000</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>New Customers</Text>
          <Text style={styles.cardValue}>120</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Orders</Text>
          <Text style={styles.cardValue}>75</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android shadow
    elevation: 3,
    width: '30%',
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
});