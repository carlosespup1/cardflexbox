const getData = async () => {

    let API = 'https://pokeapi.co/api/v2/pokemon/1';
    const responseData = await fetch(API)
    const jsonResponseData = await responseData.json()

    if (responseData.status !== 200)
        throw Error('El pokemon no existe');

    return jsonResponseData;
}

(async function() {

    try {
        const data = await getData();
        console.log(data.name);
    } catch (e) {

        console.log(e);
    }

})()