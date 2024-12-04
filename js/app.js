const content = document.getElementById("content");

async function getGameData() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=15&type=multiple"
  );
  console.log(response);
  const data = await response.json();
  console.log(data.results);

  content.innerHTML = data.results.map((triviaquestion) => {
    return `
        <div class="questionbox">
        <h4 class="question"> ${triviaquestion.question}</h2>
        <p class="difficulty"> difficulty: ${triviaquestion.difficulty} </p>
        <p class="correct"> correct answer: ${triviaquestion.correct_answer} </p>
        <p class="incorrect"> incorrect answer: ${triviaquestion.incorrect_answers}</p>
        <button class="answer">Answer<button>
        </div>    
    `;
  });
}

getGameData();

// fetcher bare data her foreløpig, har tenkt til å fortsette med siden,
// multiple choice med sjekk for svarene
// legge til en meny for valg av kategori
