const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
// console.log(teamMembers);

// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)
// **Bonus**
// - Rendere l’esercizio responsive, mandando a capo le card
// - Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team


//Prelevo gli elementi dall'Html
 const teamCointainerElem = document.querySelector(".team-container")


//Creo la card
const createCard = ({name, role, email, img}) => {
  return `
  <div class="card col-md-4 p-3 m-2" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="${name}">
        <div class="card-body">
           <h5 class="card-title">${name}</h5>
           <p class="card-text">${role}</p>
        </div>
        <div class="card-body">
           <a href="#" class="card-link">${email}</a>
       </div>
    </div>
 `;
};
// console.log(createCard)


//Stampo le card dinamiche
const renderTeam = () => {
  let items = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const card = createCard(teamMembers[i]);
    items += card;
  }
teamCointainerElem.innerHTML = items;
};

//Invoco la funzione
renderTeam();