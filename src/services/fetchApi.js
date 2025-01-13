const fetchApi = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error! Status: ${response.status}`);
        }

        const data = response.json();
        return data;
    } catch (error) {
        console.error("Fetch error: ", error);
    }
};

export default fetchApi;
