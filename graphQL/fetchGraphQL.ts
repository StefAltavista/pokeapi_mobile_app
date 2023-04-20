async function fetchGraphQL(
    query: string,
    variables: object,
    operationName: string
) {
    const result = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
        method: "POST",
        body: JSON.stringify({
            query: query,
            variables: variables,
            operationName: operationName,
        }),
    });

    return await result.json();
}

export default fetchGraphQL;
