const content = document.getElementById("content");

async function getData() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=15&type=multiple"
  );
  console.log(response);
  const data = await response.json();
  console.log(data.results);

  triviaQuestions = data.results.map((triviaquestion) => {
    return {
      triviaQuestions: triviaquestion.type,
      difficulty: triviaquestion.difficulty,
      category: triviaquestion.category,
      question: triviaquestion.question,
      correctAnswer: triviaquestion.correct_answer,
      incorrectAnswers: triviaquestion.incorrect_answers,
    };
  });
}

getData();
