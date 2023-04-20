import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ListControlls = ({
    page,
    setPage,
    list,
}: {
    page: number;
    setPage: Function;
    list: [];
}): JSX.Element => {
    return (
        <View style={styles.controls}>
            <TouchableOpacity
                onPress={() => {
                    page > 0 || page <= list.length / 16
                        ? setPage(page - 1)
                        : null;
                }}
            >
                <Text>←</Text>
            </TouchableOpacity>

            <Text>
                page {page + 1} of {Math.floor(list.length / 16)}
            </Text>
            <TouchableOpacity
                onPress={() => {
                    page >= 0 || page < list.length / 16
                        ? setPage(page + 1)
                        : null;
                }}
            >
                <Text>→</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    controls: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
});

export default ListControlls;
