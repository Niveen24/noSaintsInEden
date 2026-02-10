//player stats, starting values
let player = 
{
  /*morality: 0,
  dominance: 0,
  supplies: 8 
  */
  name: '',
  attributes:
  {
    strength: 0, //physical power for fighting/carrying
    hack: 0, //ability to hack into systems, bypass security
    charisma: 0  //ability to persuade, negotiate, manipulate
  },
  traits: [],
  morality: 5, // -10 bad to +10 good 
  dominance: 5, // -10 sub to +10 dom
  sanity: 10, //0 insane to 10 sane, sanity tests can occur during certain choices and have effects (ex. you choose option 1, low sanity can change choice to option 2, break 4th wall)
  perks: [],
  inventory: [],
  quests:   //quests can be added as player progresses story
  {
    main: 'Insert main quest here',
    side: []
  },
  background: 'poor' //placeholder for starting difficulty, can expand later
};

let currentNode = "title";  //starts game at title screen

//nodes hold each different location/event in game
const nodes =
{

  title:
  {
    title: "No Saints in Eden",
    art: "images/paradisebg.jpg",
    text: `
      They call it a city.
      They call it salvation.
      They call it Eden.
      
      But saints don't survive here, and sinners don't get to repent.
      Everyone's drowning in the same shit.
      The only question is who you pull under to stay afloat.
    `,
    choices:
    [
      { text: "[1] New Game", next: "your_apt" },
      { text: "[2] Continue", next: "your_apt" }
    ]
  },

  your_apt:
  {
    title: "Aether District - Your Apartment",
    art: "https://images.unsplash.com/photo-1556015174-ac6f87f53456?auto=format&fit=crop&q=80&w=1200",
    text: `
    The smell hits you first. Rotting garbage mixed with chemical runoff from the factories upwind. 

    Welcome home.

    Your apartment, if you can call it that, is a glorified box with a mattress and a hotplate that works when it feels like it.
    Outside your cracked window, Eden sprawls like an infected wound. 
    The Spire glitters in the distance, where the corp executives live in their climate-controlled paradise. 
    
    Down here? We get the smog, the violence, and whatever scraps fall from their tables.

    Your datapad buzzes. Three messages. 
    
    The first is a reminder that your rent is due in 48 hours. 
    
    The second is from Marcus, your old friend who now works as muscle for the Velvet Collective. "Need to talk. It's about your brother." 
    
    The third is an automated job listing: "Movers needed for warehouse transfer. Good pay. NQA."

    You've got 200 credits to your name and 1,400 in rent due. 
    In Eden, that's called a problem.

    `,
    choices:
    [
      {
        text: "But first, check on your brother",
        next: "markus_meeting1"
      },
    ]
  },

  markus_meeting1:
  {
    title: "The Dead Road",
    text: `
    Marcus is waiting in the back booth, his augmented eye glowing faintly in the darkness. He's gotten heavier since you last saw him, the kind of bulk that comes from corp-grade muscle enhancements. 
    The Velvet Collective pays well, apparently.

    "Took you long enough," he says, not looking up from his drink. "Your brother got himself into some deep shit. Deeper than usual."
    Straight to the point.

    You slide into the booth. "What kind of shit?"

    "The kind that involves stolen neural-tech from Helix Industries. The kind that has bounty hunters sweeping the lower districts. They're saying he's got classified research data in his head." 
    Marcus finally looks at you, and there's something like pity in his eyes. 
    "They're offering fifty thousand credits for him. Alive. Double that for just his head."

    Your stomach tightens. Fifty thousand. That kind of money could get you out of the Rust District. Hell, maybe even out of Eden entirely.
    `,
    choices:
    [
      {
        text: "[1] Scavenge the wrecks",
        next: "dead_road",
        effects: { supplies: 1 }
      }
    ]
  }

};


































//rendering function; loads up current node and updates page with new text and choices, and applies effects from prev choice
function render() {
  const node = nodes[currentNode];

  document.getElementById("location-title").innerText = node.title;
  document.getElementById("story-text").innerText = node.text;
  document.getElementById("scene-art").src = node.art;

   // Scroll story back to top
  document.getElementById("story-text").scrollTop = 0;

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

    // update right-hand stats
    document.getElementById("morality").innerText = "Morality: " + player.morality;
    document.getElementById("dominance").innerText = "Dominance: " + player.dominance;
    document.getElementById("strength").innerText = "Strength: " + player.attributes.strength;
    document.getElementById("hack").innerText = "Hack: " + player.attributes.hack;
    document.getElementById("charisma").innerText = "Charisma: " + player.attributes.charisma;


  });
}

//save and load functions
//TODO: add support for multiple save slots, save file name, and import/export saves so players can save progress outside of localStorage
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



//TODO: add function for support() button





render();
