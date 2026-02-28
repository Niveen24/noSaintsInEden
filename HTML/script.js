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
    The corps keep us desperate; they keep us fighting each other for scraps. And we let them, because, well... what's the alternative?
    Realizing that maybe the system is rigged against us? That the game is designed for us to lose...?
    It's a hard pill to swallow when you're drowning in it every day.

    Or maybe that's just the excuse we keep telling ourselves.
    Maybe we like having an enemy to blame for our problems. 
    Maybe we like the rush of pulling each other under, just to stay afloat a little longer.
    Maybe it's easier to hate each other than to admit that we're all in the same sinking boat.

    But who cares about the truth when you're gasping for air?

    Welcome to Eden. 
    
    Your paradise.
    Your prison.
    Your home.
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
    The smell hits you first. That's always been true about coming home to this place. Rotting garbage mixed with chemical runoff from the factories upwind, and underneath it something else, something organic and wrong that you've stopped trying to identify.

    Welcome home.

    Your apartment, if you can call it that, is a glorified box with a mattress and a hotplate that sometimes works, but never when you actually need it to.
    The walls are thin enough to hear your neighbors fighting, fucking, or dying. Sometimes all three. Though, the dying... it's rarer than you'd think.
    People are resilient in Eden. Stubbornly, infuriatingly resilient.

    Outside your cracked window, Eden sprawls like an infected wound. 
    The Spire glitters in the distance, where the corp executives live in their climate-controlled paradise, breathing filtered air and drinking water that doesn't glow faintly green.
    
    That's not you.
    Down here, you get the smog, the violence, and whatever scraps they choose to throw your way. It's like they enjoy watching everyone fight like rats in a cage, clawing for a crumb of safety or comfort.
    They probably do.

    Your datapad buzzes. Three messages. 
    That's three more than usual.
    
    The first is a reminder that your rent is due in 48 hours. 
    
    The second is from Marcus, your old friend who now works as muscle for the Velvet Collective. "Need to talk. It's about your brother." 
    
    The third is an automated job listing: "Movers needed for warehouse transfer. Good pay. NQA."
    Yeah, that's definitely something illegal.

    You stare at the messages. Your brother. You haven't heard from him in three months. Not since the fight. Not since he told you he was taking a job in Helix Industries and you told him he was selling out, and then you both said things you didn't mean and some things you did, and then he left and you let him because that's what you do in this family. You leave.

    But you've got other things to deal with right now.

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
    You pull the thin blanket over your head, but it doesn't help. 
    Especially not when there's someone outside your window screaming about "the end of days". 
    You yell at them to shut up, but they just laugh and keep screaming.
    Finally, around 3 AM, there's a new message that gets you out of bed.

    "Your brother doesn't have much time. Meet me at The Rusty Anchor. Come alone. - M"
    Marcus. Always cryptic when it matters.

    You drag yourself out of bed. The Aether District looks better at night. It's dark, so you can't see the grime and decay as clearly. The neon lights give everything a surreal glow, like the city is underwater.
    It's like you're in a dream. A nightmare, maybe.

    Eh, might as well get it over with.
    It's not like you have anything better to do.
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

    The Rusty Anchor is exactly what it sounds like; a dive bar that should have been condemned years ago but somehow still manages to stay open.
    Marcus is waiting for you in the back booth, the one with a view of both exits, his augmented eye glowing faintly in the darkness. He's gotten heavier since you last saw him, the kind of bulk that comes from corp-grade muscle enhancements. 
    The Velvet Collective pays well, apparently.

    "Took you long enough," he says, not looking up from his drink. "Your brother got himself into some deep shit. Deeper than usual."
    Straight to the point.

    You slide into the booth. "What kind of shit?"

    He takes a drink. Stalling. That's never good.
    You wait. Marcus has always been the kind of person who needs to build up to bad news, like he's trying to soften the blow by taking his time with it. It never works, but he keeps trying anyway.

    "The kind that involves stolen neural-tech from Helix Industries. The kind that has bounty hunters sweeping the lower districts. They're saying he's got classified research data in his head." Marcus finally looks at you, and there's something like pity in his eyes.  "They're offering fifty thousand credits for him. Alive. Double that for just his head."

    Your stomach tightens. Fifty thousand. That kind of money could get you out of the Aether District. And a hundred thousand for his head? Fuckin' hell...
    Marcus is watching you, waiting to see how you'll react. Waiting to see what kind of person you are when the numbers get that high.
    
    You keep still. That's another skill you learn in Eden: how to keep your face from showing what you're thinking.

    `,
    choices:
    [
      {
        text: "[1] I need to help him!",
        effects: { morality: 1},
        next: "markus_meeting1_op1"
      },
            {
        text: "[2] Fifty thousand, you say...?",
        next: "markus_meeting1_op2",
        effects: { morality: -1},
      },
            {
        text: "[3] What's on the neural-tech?",
        next: "markus_meeting_end",
        effects: { dominance: 1}
      }
    ]
  },

  //TODO: Add 3 different nodes for each choice above, that all route back to marcus_meeting_end node

  markus_meeting1_op1:
  {
    title: "The Rusty Anchor",
    art: "images/bar.png",
    text: `
    "I need to help him," you say, and the words come out more forceful than you intended. Almost desperate. "Where is he?"
    Marcus's expression doesn't change, but something in his posture relaxes. Just slightly. You might've missed it if you weren't looking for it.

    "You're sure about this?"

    "Yes."

    "Because once you go looking for him, you're involved. Helix doesn't distinguish between the thief and the accomplice." He's watching you carefully. 

    "I don't care."

    "You should." But there's something in his voice. Not quite approval, but close. "Flood Quarter. Old water treatment plant, Sector 9. That's where he pinged last. Six hours ago."
    Six hours. A lot can happen in six hours.

    "Is he still there?"

    "The signal went dark after that." Marcus leans back. "Could mean his equipment died. Could mean he shut it down deliberately. Could mean-"

    "Could mean someone found him," you finish his sentence. 

    "Yeah." He's quiet for a moment. "But I don't think so. If Helix had him, the contract would be closed. Bounty would be pulled. It's still active."

    "Six hours is a long time," you say. "He could be anywhere by now."

    "He could." Marcus takes a drink. "But if I were on the run with half of Helix on my ass, I'd stick to the places I know well.”
    You think about that. Your brother's never been great at improvising. He plans things out, sometimes too much. Gets stuck in his head.
    Marcus shrugs, like he read the thoughts straight out of your mind. "Or else he's fucked."

    The bluntness of it sits between you.

    "Why are you helping me?" you ask.

    "I'm not." You can't tell if he believes his own words or not.

    "Are you sure about that? All this seems pretty helpful to me."

    Marcus is quiet for a moment. "Why does it matter?" he asks.

    "Because you don't do favors. Everyone knows that." You lean forward. "And you're sitting here giving me information that could get you in trouble with the Collective. Could get them thinking you're playing both sides."

    "Who says I'm not?"

    "Are you?"

    He almost smiles. "No."

    "So why?" It feels like he's avoiding eye contact.

    "Let's just say I owe it," he says finally.

    "Owe what?"

    "Doesn't matter."

    "It matters to me."

    "Why?" Now he looks at you. "You planning to return the favor someday? Keep a ledger of who owes who what in this city?" You don't have an answer for that. "Your brother helped me out once. Long time ago, when I needed it. That's all you need to know."

    "What did he-"

    "That's all you need to know," he repeats, and his voice has that edge now. The one that means the conversation's over. You sit back. Let it drop. "There's something you should know," Marcus says after a moment. "Word is that Helix neural-tech has failsafes built in."

    "What kind?"

    "How would I know? I'm muscle, not a fucking neurologist, [insert name]. All I know is people who steal their tech tend to end up fucked. That's the pattern.”

    Your stomach tightens. "So he might be-"

    Marcus's voice is flat. Professional. "Just thought I should warn you.” He stands, drops credits on the table, and goes to leave. He turns for just a second, "For what it's worth? I hope you find him." Then he's gone.
    
    `
  },



  markus_meeting1_op2:
  {
    title: "The Rusty Anchor",
    art: "images/bar.png", 
    text: `
    "Fifty thousand..." you say slowly, and you can hear the edge in your own voice. The calculation. "That's a lot of money, Marcus."
    Marcus's expression doesn't change, but something shifts in his augmented eye. Recognition, maybe. Or disappointment. Hard to tell with hardware.

    "Yeah," he says flatly. "It is."

    You're doing the math before you can stop yourself. Fifty thousand credits. Clear your debts, all of them. The rent. The loan sharks. That medical bill from two years ago that you've been dodging. You could walk away from the Aether District entirely. Start over somewhere that doesn't smell. 
    Maybe even get out of Eden.
    Okay, maybe not that far.

    "You're thinking about it," Marcus observes.

    "I'm thinking about not being broke for the first time in my adult life." You meet his eyes. "You can't tell me you wouldn't think about it."

    "I'm not judging." But his voice says otherwise.

    You ignore that. "What's the catch? There's always a catch with numbers that high."

    Marcus takes another drink. "The catch is it's your brother. The catch is Helix wants him badly enough to pay double if he comes back in pieces. The catch is-" He stops. Starts again. "The catch is you'd have to live with it."

    "People live with worse in Eden."

    "Yeah. They do." He's watching you carefully now. "But most of them don't have a choice."

    You lean back against the cracked vinyl. "Everyone has a choice, Marcus. Some choices just suck less than others."

    "Philosophical." He signals for another drink. "That what you're gonna tell yourself when you're spending his blood money?"

    "Blood money spends the same as regular money." You're surprised how easy the words come out. How little they catch in your throat. "And it's not like he's some innocent. He stole from Helix. He knew what he was signing up for."

    "Did he?"

    "He's not stupid." You think about your brother, about the fight three months ago. About him standing in your apartment telling you about the job he was offered like it was some big opportunity. 
    You remember what you said to him. How he looked at you when you said it. The way the door sounded when he left.
    "He made his choice," you say, quieter now. "I'm making mine."

    Marcus watches you for a long moment. His augmented eye does that focusing thing, and you wonder what he sees. Whether the hardware can read the parts of you that you're trying not to look at yourself.

    "You don't sound convinced," he says. 
    You don't answer. Can't, really. Because he's right and you both know it.
    The bartender brings Marcus's drink. He stares at it for a moment, then pushes it aside untouched. That's when you know something's actually bothering him. Marcus doesn't waste alcohol. 
    "There's another way," he says finally.

    "Another way to what?"

    "To handle this." He's not looking at you now. Looking at the scarred table instead, at the rings left by a hundred glasses, a thousand conversations that probably ended badly. "The Collective wants what your brother stole. The data."

    "Okay?"

    "So what if..." He stops. Starts again. "What if you found him first. Talked to him. Convinced him to hand over the data voluntarily. The Collective gets what they want, Helix gets their stolen property back, and your brother..." He shrugs. "Maybe he walks away."

    You snort. The sound comes out harder than you meant, sharp enough that the guy two booths over glances in your direction.
    "Yeah. Sure. Because Helix just lets people walk away after stealing corporate secrets." You shake your head. "Come on, Marcus. You don't actually believe that."

    "I said maybe."

    "Maybe is corpo-speak for 'we'll kill you later when you're not paying attention.'" You lean forward. "You know how this works. You hand Helix their data back, they say thank you, then shoot you in between the eyes. Or maybe they say we're square, and then six months later my brother disappears. Gang violence. Wrong place, wrong time. Very tragic."

    Marcus doesn't argue. Because you're right and you both know it.
    "The Collective could protect him," he says, but even he doesn't sound convinced.

    "For how long? A year?" You're doing the math again. Different math this time. Survival odds instead of credits. "Eventually they'd get tired of protecting someone who's more liability than asset. Eventually they'd make a deal with Helix. Trade him for something they actually want."

    "It's still better than turning him in for the bounty."

    "Is it? At least with the bounty I know exactly what I'm getting." You pause. "The other way just takes longer. Prolongs the inevitable"

    Marcus takes a drink. A long one. You think he might be an alcoholic. "You're probably right," he says quietly.

    "I know I'm right. This is Eden. Nobody just walks away."

    Marcus sets down his glass. Looks at you for a long moment. "You know what the difference is between you and your brother?"

    "What?"

    "He still thinks people are worth saving." Marcus stands, drops credits on the table. "You've already decided everyone's dead. Just a matter of when." He heads for the door.

    "That's realism," you call after him. "Not pessimism."

    He stops. Doesn't turn around. "Yeah. That's what everyone says right before they become the thing they hate." He glances back. "Flood Quarter. Sector 9. Water treatment plant. That was his last ping. Six hours ago."

    "You're still giving me the location?"

    "I'm giving you a choice." Marcus's augmented eye focuses on you one last time. "What you do with it says more about you than it does about Eden."
    He leaves.

    You sit there alone, and the bar feels louder now. Someone's laughing too hard at a joke that probably wasn't funny. The music is grinding industrial noise that matches the headache forming behind your eyes.
    Flood Quarter. Sector 9. Six hours ago.

    What you do with it says more about you than it does about Eden.

    Fuck Marcus and his fortune cookie wisdom.
      `
  },

  markus_meeting1_op3:
  {
    title: "The Rusty Anchor",
    art: "images/bar.png",
    text: `
    “What's on the neural-tech?” You ask, “Why does Helix want it so badly?”

    Marcus takes a long drink, then sets down the glass with that careful precision of his. “I don't know.”

    “Come on, The Collective has to-”

    “I don't know,” he repeats again. “Nobody does, that's part of the problem.” You wait, urging him to continue. “There are rumors,” he leans back, oddly relaxed, “some people say its just financial data. Maybe proof of executive embezzlement or fraud. Other's think it's research: illegal experiments, maybe, or tech they're developing that violates dozens of international laws.”  He just shrugs. “I've heard everything from blackmail material to evidence of mass poisoning.” 

    “What do you think it is?” 

    “Does it matter?” Marcus's augmented eye focuses on you. “Whatever it is, Helix is willing to pay a hundred thousand creds to get it back. They've deployed tactical teams, they're running surveillance across half the Aesther District. That's not normal.”

    “So it's bad.”

    “It's worse than bad.” He takes another drink. You think he might be an alcoholic. 

    “And my brother just… what? Stumbled onto it?”

    “[insert name here], your brother worked in their neural research division. Had access to systems most people don't.” 
    You didn't know that. But to be fair, you and him hadn't talked about it much. 
    Marcus pauses. “Whether he stumbled onto it or went looking for it, I couldn't tell you. But he found something, and he copied it directly to his neural implant before running.”

    “Why would he do that?”

    “Because it's the safest place to store it. He can't lose it. Unless he loses his head, I mean. But, one wrong move, and the data dies with him.” Marcus's voice is flat. 
    “It's also the stupidest place to store it, because now he can't get rid of it without risking brain damage or death.” 
    
    You sit with that. With the image of your brother trapped with stolen data literally encoded in his head. 
    
    “There's another rumor,” Marcus says quietly. That Helix neural-tech have failsafes built in.” 

    "What kind?"

    “All I know is people who steal their tech tend to end up fucked. That's the pattern. People with power will do a lot to protect it, including making examples out of everyone else.”

    “And by make an example out of them, you mean kill them.”

    Marcus stands up and heads for the door. “I mean, yeah, if they can't get back what they want, they'd probably prefer he just disappears along with it.” He pauses at the exit.

    “Where is he?” 

    “Flood Quarter. Old water treatment plant, Sector 9. Last ping was six hours ago.” Marcus turns and leaves.

    You sit there alone, and the weight of it settles on you. 

    Your brother stole something. Something big enough that Helix is willing to burn resources and bodies to get it back. 
    You think about the fifty thousand credit bounty. About the rent you can't pay. 
    About the fight three months ago where you called him naive and idealistic and stupid for thinking he could change anything.

    And about the fact that maybe he actually found something worth changing.
    `
  },


























//additional nodes go here, but I'm busy with life so this is just a placeholder for now :) woo future me!









};

//additional functions for game mechanics, like inventory management, quests, etc. go here















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

function transitionRender(callback)
{
  const screen = document.getElementById("game-screen");

  screen.classList.add("screen-fade-out");

  setTimeout(() =>
  {
    callback(); // run your normal render or action

    screen.classList.remove("screen-fade-out");
    screen.classList.add("screen-fade-in");

    setTimeout(() =>
    {
      screen.classList.remove("screen-fade-in");
    }, 250);

  }, 200);
}

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
    "..."
 );

  const options = document.getElementById("creation-options");

  options.innerHTML = `
    <input id="nameInput" type="text" placeholder="Raven">
    <div class="creation-option" id="confirmName">Continue</div>  `;

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
    "Choose your attributes"
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
      transitionRender(finishCharacterCreation);
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
          transitionRender(() =>
          {
            if (choice.action)  //if choice has custom action, call its function
            {
              choice.action();
            }
            else
            {
              applyEffects(choice.effects);
              currentNode = choice.next;
              render();
            }
          });
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
