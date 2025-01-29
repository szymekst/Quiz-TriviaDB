const shuffle = (array: []) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Losowy indeks od 0 do i
        [array[i], array[j]] = [array[j], array[i]]; // Zamiana miejscami elementów
    }

    return array;
};

export default shuffle;
