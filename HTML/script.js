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
  sanity: 10, 
  creds: 200,//0 insane to 10 sane, sanity tests can occur during certain choices and have effects (ex. you choose option 1, low sanity can change choice to option 2, break 4th wall)
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
    The only question is, who will you pull under to stay afloat?
    `,
    choices:
    [
      { text: "[1] New Game", action: startCharacterCreation },
      { text: "[2] Continue", action: continueGame }
    ]
  },

  your_apt_intro:
  {
    title: "Aether District - Your Apartment",
    art: "images/apt.png",
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
      {
        text: "Ignore everything and take a nap",
        next: "nap1"
      }
    ]
  },

  nap1:
  {
    title: "Aether District - Your Apartment",
    art: "images/apt.png",
    text: `
    You try to sleep, but the datapad keeps buzzing. Rent reminders. It's like the city knows you're trying to ignore your problems.
    Finally, around 3 AM, there's a new message that gets you out of bed.

    "Your brother doesn't have much time. Meet me at The Rusty Anchor. Come alone. - M"
    Marcus. Always cryptic when it matters.

    You drag yourself out of bed. The Aether District looks worse at night—the neon signs casting everything in sickly colors, the streets slick with something that might be rain but probably isn't.

    Let's be real, it's not like you have anything better to do.
    Sleep was a waste of time anyway.
    `,
    choices:
    [
    {
      text: "Head to The Rusty Anchor",
      next: "markus_meeting1"
    }
    ]
  },

  markus_meeting1:
  {
    title: "The Rusty Anchor",
    art: "images/bar.png", 
    text: `
    Marcus is waiting for you in the back booth of a bar called The Rusty Anchor, his augmented eye glowing faintly in the darkness. He's gotten heavier since you last saw him, the kind of bulk that comes from corp-grade muscle enhancements. 
    The Velvet Collective pays well, apparently.

    "Took you long enough," he says, not looking up from his drink. "Your brother got himself into some deep shit. Deeper than usual."
    Straight to the point.

    You slide into the booth. "What kind of shit?"

    "The kind that involves stolen neural-tech from Helix Industries. The kind that has bounty hunters sweeping the lower districts. They're saying he's got classified research data in his head." Marcus finally looks at you, and there's something like pity in his eyes.  "They're offering fifty thousand credits for him. Alive. Double that for just his head."

    Your stomach tightens. Fifty thousand. That kind of money could get you out of the Aether District. Hell, maybe even out of Eden entirely.
    `,
    choices:
    [
      {
        text: "[1] I need to help him!",
        effects: { morality: 1},
        next: "markus_meeting2"
      },
            {
        text: "[2] Fifty thousand, you say...?",
        next: "markus_meeting2",
        effects: { dominance: 1, morality: -1},
      },
            {
        text: "[3] What's on the neural-tech?",
        next: "markus_meeting2",
        effects: { dominance: 1}
      }
    ]
  },

  markus_meeting2:
  {
    title: "The Rusty Anchor",
    art: "images/bar.png", 
    text: `
      continue here

      the options were:

      Where is he? I need to find him before they do.
      Fifty thousand... that's a lot of money, Marcus. What are you really asking me?
      What's on the neural-tech? Why does Helix want it so badly?


    `
  },




























//additional nodes go here, but I'm busy with life so this is just a placeholder for now :) woo future me!









};









function setCreationScreen(title, description)
{
  const storyDiv = document.getElementById("story-text");
  const choicesDiv = document.getElementById("choices");

  document.getElementById("location-title").innerText = "Character Creation";
  document.getElementById("scene-art").src = "images/paradisebg.jpg";

  storyDiv.innerHTML = `
    <div class="creation-panel">
      <div class="creation-title">${title}</div>
      <div class="creation-desc">${description}</div>
      <div id="creation-options"></div>
      <div id="creation-preview" class="stat-preview"></div>
    </div>
  `;

  choicesDiv.innerHTML = "";
}


//additional functions for game mechanics, like inventory management, quests, etc. go here


















function startCharacterCreation() //PART 1 of CC
{
    const storyDiv = document.getElementById("story-text");
    const choicesDiv = document.getElementById("choices");

    document.getElementById("location-title").innerText = "Character Creation";
    document.getElementById("scene-art").src = "images/paradisebg.jpg";

    storyDiv.innerHTML = `
    In a city like Eden, you learn things about yourself.
    Things you'd rather not know. <br><br>
    What you're good at. What you're willing to do. Where your breaking point is.<br><br>
    Better to know now than find out when it's too late. <br><br>
    Your choices will define who you are: dominant or submissive, honorable or corrupt.<br><br>
    Who are you in this city of saints and sinners?
    `;

    choicesDiv.innerHTML = "";

    const btn = document.createElement("div");
    btn.className = "choice";
    btn.innerText = "Begin Creation";
    btn.onclick = nameEntry;

    choicesDiv.appendChild(btn);
}

function nameEntry()  //PART 2 of CC
{
  setCreationScreen
  (
    "Who are you?",
    "Not that it matters much down here. <br>But we've gotta call you something." 
 );

  const options = document.getElementById("creation-options");

  options.innerHTML = `
    <input id="nameInput" type="text" placeholder="Raven" style="
      width:100%;
      padding:10px;
      border-radius:6px;
      border:1px solid rgba(255,255,255,0.15);
      background:#0c0f14;
      color:white;
      margin-top:6px;
    ">
    <div class="creation-option" id="confirmName">Continue</div>
  `;

  document.getElementById("confirmName").onclick = () =>
  {
    player.name = document.getElementById("nameInput").value || "Raven";
    backgroundSelection();
  };
}

function backgroundSelection() //PART 3 of CC
{
  setCreationScreen
  (
    "Background",
    "In places like these, you're either useful or you're dead. So what makes you useful?"
  );

  const options = document.getElementById("creation-options");
  const preview = document.getElementById("creation-preview");

  const backgrounds =
  [
    {
      name: "Pit Fighter",
      desc: "+Strength, -Hack",
      apply: () => {
        player.attributes.strength += 3;
        player.attributes.hack -= 1;
      }
    },
    {
      name: "Wirehead",
      desc: "-Strength, +Hack, -Charisma",
      apply: () => {
        player.attributes.strength -= 1;
        player.attributes.hack += 2;
        player.attributes.charisma -= 1;
      }
    },
    {
      name: "Silver Tongue",
      desc: "-Strength, -Hack, +Charisma",
      apply: () => {
        player.attributes.strength -= 1;
        player.attributes.hack -= 1;
        player.attributes.charisma += 2;
      }
    },
    {
      name: "Corpo Dropout",
      desc: "+Hack, +Charisma",
      apply: () => {
        player.attributes.hack += 1;
        player.attributes.charisma += 1;
      }
    },
    {
      name: "Ghost",
      desc: "-Sanity, +Hack",
      apply: () =>
      {
        player.sanity -= 1;
        player.attributes.hack += 2;
      }
    },
    {
      name: "Jack of Shit",
      desc: "+1 to all attributes",
      apply: () => {
        player.attributes.strength += 1;
        player.attributes.hack += 1;
        player.attributes.charisma += 1;
      }
    }
  ];

  backgrounds.forEach(bg =>
  {
    const card = document.createElement("div");
    card.className = "creation-option";
    card.innerHTML = `
      <div class="option-name">${bg.name}</div>
      <div class="option-desc">${bg.desc}</div>
    `;

    card.onclick = () =>
    {
      bg.apply();
      finishCharacterCreation();
    };

    options.appendChild(card);
  });

}

function flashStatPreview()
{
  const el = document.getElementById("creation-preview");
  if (!el) return;
  el.style.opacity = 0.3;
  setTimeout(() => el.style.opacity = 1, 120);
}

function finishCharacterCreation()
{
    currentNode = "your_apt_intro";
    render();
}

//save and load system with multiple slots, export/import, and save file names
const saveSlots = ["slot1", "slot2", "slot3"];
let selectedSlot = null;
let popupMode = "save";

function openPopup(mode)
{
    popupMode = mode;
    document.getElementById("popupTitle").innerText = mode === "save" ? "Save Game" : "Load Game";
    document.getElementById("slotName").style.display = mode === "save" ? "block" : "none";
    populateSlots();
    document.getElementById("saveLoadPopup").style.display = "flex";
}

function closePopup()
{
    document.getElementById("saveLoadPopup").style.display = "none";
    selectedSlot = null;
}

function populateSlots() {
    const container = document.getElementById("slotsContainer");
    container.innerHTML = "";
    saveSlots.forEach(slot =>
      {
        const data = localStorage.getItem(slot);
        const name = data ? JSON.parse(data).name : "(empty)";
        const btn = document.createElement("button");
        btn.innerText = name;
        btn.onclick = () =>
          {
            selectedSlot = slot;
            if (popupMode === "load")
              {
                if (!data) return alert("Empty slot!");
                const saveData = JSON.parse(data);
                player = saveData.player;
                currentNode = saveData.currentNode;
                render();
                closePopup();
            } else {
                document.getElementById("slotName").value = data ? JSON.parse(data).name : "";
            }
        };
        container.appendChild(btn);
    });
}

document.getElementById("confirmSaveLoad").onclick = () =>
  {
    if (popupMode !== "save") return;
    if (!selectedSlot) selectedSlot = saveSlots[0];
    const name = document.getElementById("slotName").value || "Unnamed";
    const data = { player, currentNode, name };
    localStorage.setItem(selectedSlot, JSON.stringify(data));
    alert(`Saved to ${selectedSlot} as "${name}"`);
    closePopup();
};

document.getElementById("closePopup").onclick = closePopup;
//export function 
document.getElementById("exportSlot").onclick = () =>
  {
    if (!selectedSlot) return alert("Select a slot first");
    const data = localStorage.getItem(selectedSlot);
    if (!data) return alert("Slot empty");
    const blob = new Blob([data], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${selectedSlot}.json`;
    a.click();
};
//import function
document.getElementById("importSlotBtn").onclick = () => document.getElementById("importSlot").click();
document.getElementById("importSlot").onchange = (e) =>
  {
    if (!selectedSlot) selectedSlot = saveSlots[0];
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (ev) =>
      {
        const data = JSON.parse(ev.target.result);
        localStorage.setItem(selectedSlot, JSON.stringify(data));
        alert("Save imported!");
        populateSlots();
    };
    reader.readAsText(file);
};

document.querySelector("button[onclick='saveGame()']").onclick = () => openPopup("save");
document.querySelector("button[onclick='loadGame()']").onclick = () => openPopup("load");


//disables continue button if no saves are present in local storage
function checkContinueButton()
{
    const choicesDiv = document.getElementById("choices");
    if (!choicesDiv) return;

    //find the continue button
    const continueBtn = Array.from(choicesDiv.children)
        .find(c => c.innerText.toLowerCase().includes("continue"));

    if (!continueBtn) return;

    //check if any save slot has data
    const anySave = saveSlots.some(slot => localStorage.getItem(slot));

    //grey button out if therers no saves
    continueBtn.style.pointerEvents = anySave ? "auto" : "none";
    continueBtn.style.opacity = anySave ? 1 : 0.5;
}

function continueGame() {
    //Fidn the most recent save slot with data
    let data = null;
    for (let i = saveSlots.length - 1; i >= 0; i--)
    {
        const slotData = localStorage.getItem(saveSlots[i]);
        if (slotData)
        {
            data = JSON.parse(slotData);
            break;
        }
    }
    if (!data) return alert("No save data found!"); //shouldn't happen since continue button is disabled, but just in case
    player = data.player;
    currentNode = data.currentNode;
    render();
}

//rendering function; loads up current node and updates page with new text and choices, and applies effects from prev choice
function render()
{
  const node = nodes[currentNode];

  document.getElementById("location-title").innerText = node.title;
  document.getElementById("story-text").innerText = node.text || "";
  document.getElementById("scene-art").src = node.art || "";

  document.getElementById("story-text").scrollTop = 0;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  if (node.choices && node.choices.length > 0)
    {
      node.choices.forEach(choice => 
      {
        const div = document.createElement("div");
        div.className = "choice";
        div.innerText = choice.text;

        div.onclick = () =>
        {
          if (choice.action)
          {
            choice.action(); //if choice has a custom action function, call it instead of default behavior
          } 
          else
          {
            applyEffects(choice.effects);
            currentNode = choice.next;
            render();
          }
        };

        choicesDiv.appendChild(div);
      });
    }

  updateStatsUI();

  if (currentNode === "title")
  {
    checkContinueButton();
  }
}

//applies the changes to player stats from choices
function applyEffects(effects)
{
  if (!effects) return;

  for (let stat in effects)
    {
    const amount = effects[stat];

    if (stat in player.attributes)
    {
      player.attributes[stat] += amount;
    }
    else if (stat in player)
    {
      player[stat] += amount;
    }
    else
    {
      console.warn("Unknown stat:", stat); //just in case I accidentally try to apply an effect to a stat that doesn't exist :)
    }
  }
}

//updates the stats that are shown on right sidebar
function updateStatsUI()
{
  document.getElementById("morality").innerText = "Morality: " + player.morality;
  document.getElementById("dominance").innerText = "Dominance: " + player.dominance;
  document.getElementById("strength").innerText = "Strength: " + player.attributes.strength;
  document.getElementById("hack").innerText = "Hack: " + player.attributes.hack;
  document.getElementById("charisma").innerText = "Charisma: " + player.attributes.charisma;
  document.getElementById("sanity").innerText = "Sanity: " + player.sanity;
  document.getElementById("creds").innerText = "Creds: " + player.creds;
}


//TODO: add function for support() button






render();
