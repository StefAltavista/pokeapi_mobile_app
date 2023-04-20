import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
} from "react-native";
import main from "../graphQL/pokemons";
import DetailModal from "./DetailModal";
import ListControlls from "./ListControlls";

const List: React.FC = (): JSX.Element => {
    const [list, setList] = useState<[]>();
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);
    const [openModal, setOpenModal] = useState<string>("");

    const getList = async () => {
        setError(false);
        try {
            const { data, errors } = await main();
            errors ? setError(true) : setList(data.pokemon_v2_pokemon);
        } catch {
            setError(true);
        }
    };
    getList();

    type ItemProps = { id: string; name: string };

    return (
        <View style={styles.list}>
            {list && (
                <>
                    <ListControlls page={page} setPage={setPage} list={list} />
                    <FlatList
                        data={list.slice(page * 10, 10 * (page + 1))}
                        renderItem={({ item }: { item: ItemProps }) => {
                            return (
                                <TouchableOpacity
                                    style={styles.item}
                                    onPress={() => setOpenModal(item.name)}
                                >
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`,
                                        }}
                                    />
                                    <Text>{item.name.toLocaleUpperCase()}</Text>
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={(item) => item.id}
                    ></FlatList>
                </>
            )}
            {error && <Text>Ops! an error occured</Text>}
            {openModal && (
                <DetailModal
                    name={openModal}
                    closeModal={() => setOpenModal("")}
                ></DetailModal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    list: { width: "100%" },
    item: {
        backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "solid",
        margin: 2,
    },
    tinyLogo: { width: 50, height: 50 },
});

export default List;
