// dashboard home screen:
// REQUIREMENTS:
// 1. title "Business Dashboard" centered at the top
// 2. row of three summary cards
//    - each card shows a label and a numeric value
// 3. use flexbox to center content
// 4. cards should have backgroundColor "#e8f5e9" and padding
// 5. space cards evenly using justifyContent: 'space-between'
const SummaryRow = () => (
  <View style={styles.row}>
    <SummaryCard title="Revenue" value="$120K" />
    <SummaryCard title="Customers" value="320" />
    <SummaryCard title="Orders" value="842" />
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
});

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Business Dashboard</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
          marginTop: 20,
        }}
      >
        <div
          style={{
            backgroundColor: '#e8f5e9',
            padding: 20,
            borderRadius: 8,
            flex: 1,
            margin: '0 10px',
            textAlign: 'center',
          }}
        >
          <h3>Total Sales</h3>
          <p style={{ fontSize: 24, fontWeight: 'bold' }}>$15,000</p>
        </div>
        <div
          style={{
            backgroundColor: '#e8f5e9',
            padding: 20,
            borderRadius: 8,
            flex: 1,
            margin: '0 10px',
            textAlign: 'center',
          }}
        >
          <h3>New Customers</h3>
          <p style={{ fontSize: 24, fontWeight: 'bold' }}>120</p>
        </div>
        <div
          style={{
            backgroundColor: '#e8f5e9',
            padding: 20,
            borderRadius: 8,
            flex: 1,
            margin: '0 10px',
            textAlign: 'center',
          }}
        >
          <h3>Orders</h3>
          <p style={{ fontSize: 24, fontWeight: 'bold' }}>75</p>
        </div>
      </div>
    </div>
  );
}
import SummaryCard from './SummaryCard';
import { View, StyleSheet } from 'react-native';