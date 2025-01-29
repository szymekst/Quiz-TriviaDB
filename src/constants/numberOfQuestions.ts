const numberOfQuestions = [];

for (let i = 1; i <= 50; i++) {
    numberOfQuestions.push({ id: i, name: `${i}`, value: i });
}

export default numberOfQuestions;
