import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";


export default function Chart() {
    const screenWidth = Dimensions.get("window").width - 32; // padding
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                data: [45, 60, 72, 90, 110, 135, 160],
                color: (opacity = 1) => `rgba(34, 128, 176, ${opacity})`,
                strokeWidth: 2,
            },
        ],
        legend: ["Number of customers"], // legend displayed by react-native-chart-kit
    };

    const chartConfig = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        color: (opacity = 1) => `rgba(34, 128, 176, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
        decimalPlaces: 0,
        propsForDots: {
            r: "4",
            strokeWidth: "2",
            stroke: "#1e90ff",
        },
        propsForBackgroundLines: {
            strokeDasharray: "", // solid background grid lines
        },
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Customers Over Time</Text>

            <View style={styles.chartRow}>
                <Text style={styles.yLabel}>Customers</Text>

                <LineChart
                    data={data}
                    width={screenWidth}
                    height={260}
                    chartConfig={chartConfig}
                    bezier
                    style={styles.chart}
                    fromZero
                    verticalLabelRotation={-45}
                    yLabelsOffset={6}
                />
            </View>

            <Text style={styles.xLabel}>Time (months)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 16,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 8,
        textAlign: "center",
    },
    chartRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    yLabel: {
        transform: [{ rotate: "-90deg" }],
        width: 20,
        marginRight: 6,
        textAlign: "center",
        fontSize: 12,
        color: "#333",
    },
    chart: {
        borderRadius: 8,
        paddingRight: 12,
    },
    xLabel: {
        marginTop: 8,
        textAlign: "center",
        fontSize: 12,
        color: "#333",
    },
});



