const content = document.getElementById("content");

async function getData() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=15&type=multiple"
  );
  console.log(response);
  const data = await response.json();
  console.log(data.results);

  content.innerHTML = data.results.map((triviaquestion) => {
    return `
        <div class="questionbox">
        <h2> ${triviaquestion.question} </h2>
        <p> ${triviaquestion.difficulty} </p>
        <p> correct answer: ${triviaquestion.correct_answer} <p>
        <p> incorrect answer: ${triviaquestion.incorrect_answers} </p>
        </div>    
    
    `;
  });
}

getData();

// fetcher bare data her foreløpig, har tenkt til å fortsette med siden,
// buttons for multiple choice med sjekk for svarene
// legge til en meny for valg av kategori
