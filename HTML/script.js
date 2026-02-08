let player = {
  morality: 0,
  dominance: 0,
  supplies: 8
};

let currentNode = "title";

const nodes = {

  title: {
    title: "",
    text: "",
    choices: [
      { text: "[1] New Game", next: "eden_gate" },
      { text: "[2] Continue", next: "eden_gate" }
    ]
  },

  eden_gate: {
    title: "The Gates of Eden",
    text: `
Eden closes behind you with a sound like final judgment.

They call it a city.
They call it salvation.
They never call it kind.

Beyond the walls, the world remembers what humanity forgot.
    `,
    choices: [
      {
        text: "[1] Walk forward without hesitation",
        next: "dead_road",
        effects: { dominance: 1 }
      },
      {
        text: "[2] Take one last look at Eden",
        next: "dead_road",
        effects: { morality: 1 }
      }
    ]
  },

  dead_road: {
    title: "The Dead Road",
    text: `
Cracked asphalt.
Rusting cars.
The remains of choices made too late.
    `,
    choices: [
      {
        text: "[1] Scavenge the wrecks",
        next: "dead_road",
        effects: { supplies: 1 }
      }
    ]
  }

};

function render() {
  const node = nodes[currentNode];

  document.getElementById("location-title").innerText = node.title;
  document.getElementById("story-text").innerText = node.text;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  node.choices.forEach(choice => {
    const div = document.createElement("div");
    div.className = "choice";
    div.innerText = choice.text;

    div.onclick = () => {
      if (choice.effects) {
        for (let k in choice.effects) {
          player[k] += choice.effects[k];
        }
      }
      currentNode = choice.next;
      render();
    };

    choicesDiv.appendChild(div);
  });
}

function saveGame() {
  localStorage.setItem("eden_save", JSON.stringify({ player, currentNode }));
}

function loadGame() {
  const data = JSON.parse(localStorage.getItem("eden_save"));
  if (!data) return;
  player = data.player;
  currentNode = data.currentNode;
  render();
}

render();
