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
        next: "markus_meeting1_op3",
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
    
    `,
    choices:
    [
      {
        text: "Continue",
        next: "markus_meeting1_end"
      }
    ]
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
      `,
    choices:
    [
      {
        text: "Continue",
        next: "markus_meeting1_end"
      }
    ]
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
    `,
    choices:
    [
      {
        text: "Continue",
        next: "markus_meeting1_end"
      }
    ]
  },

    markus_meeting1_end:
  {
    title: "The Rusty Anchor",
    art: "images/bar.png",
    text: `
The air outside tastes like copper and burnt plastic. You stand there for a moment, watching Marcus disappear into the crowd. 

Someone bumps into you, doesn't apologize, and just keeps walking. That's Eden. Everyone's in a hurry to get nowhere. 

Sector 9. You pull up your datapad and stare at the map. The entire sector is just... grey. No street names. No landmarks. The map software gave up trying to catalog it years ago. Just a blob labeled "Sector 9" with a helpful little warning icon that says "Travel Advisory: Extreme." Yeah. Thanks for that. 

Your brother could be somewhere in there. Somewhere in forty square blocks of collapsed infrastructure and people who'd gut you for a half-eaten protein bar. You pocket the datapad. 

Think. Where would he go? If you were running from corpo security and bounty hunters with military-grade tech, where would you hide?

Your brother's not exactly a criminal mastermind. This is the same guy who tried to organize a rent strike in your building and somehow got three people evicted, including himself. His plan for "collective action" lasted about twelve hours before the landlord just changed the locks. But he's not stupid. 
Usually. 
Okay, sometimes he's stupid.

The point is, if he's running scared, he's not going to the quiet parts. Those get searched first. It’s too easy to corner someone when there's no one around to witness it. 

No, you'd go where it's loud. Where it's chaotic. Where there's enough violence and movement that one more person running doesn't stand out. Where corpo security has to actually worry about getting shot. 

You're about to start walking when you notice a crowd forming half a block down. Not the usual type. It’s not uncommon for street preachers, drug dealers, or performers to draw crowds in the Aether District. But this one's different. People are quiet, watching a screen. You drift closer. It's a public newsfeed terminal. The corps installed them years ago, before they realized they didn't need propaganda to control people in the Aether District. Turns out, keeping everyone broke and desperate works just fine on its own. 

Most of the terminals had already been broken or tagged with graffiti, but this one was actually working. On the screen was a reporter. He definitely was not from around here, evident from his clean suit and clean face. 

"—additional security measures in Sector 9 following reports of escalating violence between local factions. The eastern quadrant has seen particularly intense clashes over the past twelve hours, with authorities advising all non-residents to avoid the area—"

Eastern quadrant. Twelve hours of violence.

Someone in the crowd mutters, "Vultures are moving in on Southside territory. Gonna be a bloodbath."

Another voice: "Already is a bloodbath. My cousin lives out there. Said there's corpo mercs everywhere pretending to be neutral."

"Corpo don't go into Sector 9."

"Sure they do; corpo goes where corpo wants.”

Someone else laughs, bitter: "Yeah, and bodies are cheap. Whole lot cheaper than whatever they're looking for."

The crowd starts dispersing. The feed switches to some story about water rationing in the upper districts. Nobody here cares about that. But you're still thinking about what you just heard about the Eastern quadrant. It’s a search operation, that much you’re sure of. It seems like others in the city are aware of it, too. They're stirring shit up, forcing people to move, to scatter. Making it easier to spot someone who doesn't belong. 

But here's the thing: if your brother's smart enough–and he is, mostly– he'd know that too. So maybe he's not in the chaos. Maybe he's near it. Close enough to blend in with the noise, far enough to avoid the actual fighting. Or maybe he's exactly where the violence is, because that's the last place they'd expect someone to hide. You have no clue. 

You look back at the terminal, but it's moved on to some corporate spokesperson talking about "community investment initiatives."

Eastern quadrant. That’s something.

You could go home. Grab the shock-prod you're not supposed to have. That half-broken scanner you lifted from a corpo trash heap. Maybe even eat something that isn't three days expired. But your legs are already moving east. Guess that answers that.


    `,
    choices:
    [
      {
        text: "Continue",
        next: "sector9_1"
      }
    ]
  },


  sector9_1:
  {
    title: "Fletcher Station",
    art: "images/train_station.jpg",
    text: `
The transit station is two blocks over. You head for it on autopilot, swiping your datapad at the turnstile. It beeps angry red. Insufficient funds for Zone 4 travel.

Right. Because of course.

You jump the turnstile. Nobody stops you. The attendant doesn't even look up.

The platform's nearly empty. A few people waiting, all of them looking like they'd rather be anywhere else. The route map on the wall shows the line in faded colors—stops marked in clean white dots until you hit Sector 9. Then nothing. Just a blank space where the rest of the line should be.

Trains used to go all the way through. Then drivers started refusing the route. Too dangerous. Too many incidents. The transit authority tried rotating drivers, offering hazard pay, threatening terminations. 

Didn't matter. Can't make someone drive into Sector 9 if they're too scared to show up for their shift.

Now the trains stop at the border. Last stop: Fletcher Station. After that, you're on your own.

The next train slides in with a mechanical groan. You get on. It's mostly empty—couple of people who look like they've had a long shift, one guy passed out in the corner, smells like he pissed himself.

You grab a seat near the door and watch the city blur past the scratched windows. The lights get dimmer the farther east you go. Buildings more collapsed. Graffiti more aggressive.

The automated voice announces stops in that dead, corporate tone: "Next stop: Fletcher Station. End of line. All passengers must exit."

End of line.

Yeah. That's about right.

The train slows. You stand before it fully stops, because sitting makes you think, and thinking makes you realize how stupid this is.

The doors open. You step onto the platform.

Fletcher Station is a tomb. Flickering lights. Cracked tiles. Half the exits are boarded up. The other half lead into darkness.

There's a gap between here and Sector 9. Maybe half a mile of no-man's-land where the infrastructure just... gave up. No transit. No cabs. Nobody's stupid enough to run a route out there.

You're going to have to walk the rest of the way.

Into the place even the trains won't go.

    `,
    choices:
    [
      {
        text: "Continue",
        next: "dax_meet_1"
      }
    ]
  },

  dax_meet_1:
  {
    title: "Sector 9",
    art: "images/sector9_1.jpg",
    text: `
The platform air is already different. Colder. Damp. It smells of mildew and the metallic tang of old blood, so faint you might think you imagined it if you didn't know better. Every instinct screams at you to turn around, to get back on that train before it lurches away for good. But you don't. You just stand there as the doors slide shut and the train retreats with a weary sigh, taking the last scraps of light and authority with it.
You're in the quiet now. The real quiet. Not the absence of noise, but the presence of listening.
You take the stairs down to street level. The world opens up into a canyon of collapsed concrete and skeletal remains of buildings that never should have been built in the first place. The only light comes from sputtering chemical fires in oil drums, casting long, dancing shadows that make every pile of rubble look like a crouching man. This is the borderlands. The buffer zone.
Movement catches your eye. A figure huddled in the alcove of a shuttered storefront. At first glance, you think it's just another pile of trash, but then you see the shudder, the slow, rhythmic rock. A tremor-junkie. One of the Chroma-Zone fiends. Their skin has that weird, pearlescent sheen, like an oil slick, and their pupils are blown so wide the iris is just a thin ring of color. They're not seeing this street. They're seeing colors, sounds, sensations that aren't there. You keep your distance. They're harmless until they're not, and you can't afford to find out which it is today.
Farther down, two women lean against a graffiti-covered wall, their faces illuminated by the glow of their own datapads. They're not looking at each other. One is barely out of her teens, with cheap synth-skin peeling at her jawline where the graft is starting to reject. She's got a flicker of false hope in her eyes. The other one is older, maybe forty, but worn like she's sixty. 
The older woman's eyes slide over you, assessing. Calculating. She sees the way you're trying to look like you belong here when you clearly don't. Her lips curl; not quite a smile, more like a predator showing teeth.

"You look lost," she calls out, voice like gravel soaked in cheap gin. "Looking for work? Looking to buy? Either way, Mama Vixen's got options." She gestures vaguely at the girl beside her, who doesn't even look up from her datapad. The cheap synth-skin grafts catch the dim light, the peeling edges raw and weeping where her body's rejecting the implant. Probably got them from some back-alley chopshop. Probably thought they'd make her more marketable. "Jinx here does a real nice–"

"I'm not interested," you cut her off.

"Everyone's interested in something, sweetheart." She takes a drag from a thin cigarette, the smoke curling gray and toxic. "Jinx doesn't mind helping you out. Do you, baby?"

The girl finally looks up. Her eyes are flat. Dead. Whatever hope you thought you saw was just a trick of the bad lighting. She's already gone somewhere else in her head.

"I don't mind," she says. The way she tries to act like she doesn’t hate her job is almost convincing. 

A man emerges from the shadows down the block. Heavy boots, heavier gut, the kind of corporate dropout who couldn't hack it in the Spire but still thinks he's better than the rest of the gutter. He's got that look: hungry and ashamed and entitled all at once. He walks right past you.

"How much?" he asks Mama Vixen, not even looking at Jinx. Once he pulls out the creds and hands them over, Jinx stands up. She doesn't look at the man. Doesn't look at anyone. She just walks toward the alley beside the storefront, movements mechanical, like a puppet with half its strings cut. The man follows, already fumbling with his belt.

You look away and keep walking. You've seen worse. Everyone in Eden has seen worse. That doesn't mean it sits right. 

The buffer zone stretches ahead, a maze of collapsed concrete and makeshift shelters cobbled together from scrap metal and desperation. The deeper you go, the more the shadows seem to press in, like the darkness itself has weight. You're maybe a quarter mile from the station when you hear it. Footsteps. Not behind you, but around you. The scrape of boots on broken glass. The whisper of fabric against rubble. You stop.

They emerge from the shadows like cockroaches from cracked walls. Four of them, fanning out in a loose semicircle. All male, all built like they've been fighting since they could walk. Cheap augmentations glint beneath ragged clothes; subdermal armor plating, refurbished eyes, one guy with a crude hydraulic arm that looks like it was salvaged from a construction drone.

"Look what the train dragged in," the one with the hydraulic arm says. His voice is scraped raw, like he's been screaming or smoking or both. 

"Passing through," you say. Keep it even. Don't show fear.

"Passing through." He laughs, and the others echo it. "Nobody passes through Sector 9. You come here to stay, or you come here to die. Those are the options."

One of them circles behind you. You can hear his footsteps, heavy, letting you know he's there. Then you feel it, rough fingers catching a strand of your hair, twirling it slowly.

"Soft," he murmurs, letting out a giggle that makes you raise a brow. "Real soft."  Your instinct tells you to pull out your gun, but your brain says you’re outnumbered, outgunned, and it’s not worth risking. 

Another guy moves in from your left, eyes dragging over you like you're a product on a shelf. He's shorter than the others, but what he lacks in height he makes up for in the way he looks at you. 

The hydraulic-arm guy takes a step closer. His breath smells like rot and synthetic alcohol. "Where you headed? Maybe we can give you an escort. Keep you... safe."

"Fuck off." The word lands like a slap. The circling stops. For a moment, the only sound is the distant crackle of a fire and the low hum of the buildings that cage you in.

Then the short one laughs, high and ugly. "Got a mouth on it. I like that." He reaches toward you, and then freezes.

"Enough." The voice cuts through the dark like a blade. The thugs step back immediately, their postures shifting from predatory to submissive in an instant. You turn toward the voice, and for a moment you think you're hallucinating.

The man standing in the mouth of the alley doesn't belong here. That's your first thought. He's tall, maybe six-foot-two, with a build that suggests regular exercise rather than combat augmentations. His clothes are clean; a fitted gray jacket over a black shirt, tailored pants, boots that actually match. His dark hair is combed back, his jaw clean-shaven.

He looks like he stepped out of an advertisement for middle-management corporate life. Like he should be sipping synthetic coffee in some fancy office in the Midtown District, not walking the corpse-streets of Sector 9. But the way the thugs react to him... that's not fear of a stranger. That's respect.

The hydraulic-arm guy actually lowered his head. "W-we didn't realize she was... we didn't know she was yours."

"She's not," the man says simply. His eyes shift to the one who'd been playing with your hair. "Wren. You know better."

Wren flinches like he's been struck. "Sorry," he whispers, and there's something almost childlike in his voice. "Sorry, sorry, I just—she was so soft, Dax, I didn't mean to. I didn't.”

The well-dressed man, Dax, watches him with an expression you can't quite read. Not anger. Not quite pity. Something in between, tempered by exhaustion.

"I know," Dax says quietly. "Go wait by the cart. I'll deal with you later." Wren nods frantically, relief washing over his features. He scurries off, movements jerky and uncoordinated, muttering something under his breath that sounds like numbers. Counting. Counting what, you don't know.

The short one who'd been eyeing you up snorts. "Fucking glitch-head." Dax's gaze snaps to him, and the thug pales.

Dax turns back to you, and just like that, the thugs are forgotten. Nonexistent. His attention is fully on you now, and it feels like being examined under a microscope. "I apologize. We don't get many visitors here, and my people get... enthusiastic."

"Enthusiastic," you repeat flatly.
He ignores your remark. “Want to tell me what you’re doing here?” 

“Not particularly.”

He tilts his head. "Let me guess: you're not here to buy, you're not here to sell, and you're definitely not here for the ambiance. That leaves three options. You're running from something, you're looking for revenge, or you're looking for someone."

You keep your face neutral. "Maybe I'm just stupid."

Dax laughs. It's a short, sharp sound, devoid of humor. "You're not stupid. You're desperate. There's a difference." You don’t know whether to be offended or… no, you should definitely be offended. "So let's try this again. What are you doing here? And for your own sake, don't waste my time with half-truths.”

You hold his gaze. The temptation to lie, to deflect, to protect yourself… it's there. But he's right about one thing. You're desperate. And desperate people can't afford pride.

"I'm looking for someone," you admit.

"Who?"

"Family." The word lands. Dax doesn't react visibly, but something shifts in his posture. A micro-adjustment. You wouldn't have caught it if you weren't watching for it. Before he can respond, Kovacs snorts from his position by the wall.

"Shit, maybe she's lookin' for the same guy that other bitch was askin' about earlier. The one with the–"

The words die in his throat. Dax hadn’t moved, nor had he raised his voice. But the look on his face was sudden death.

"Kovacs," he says softly. "What have I told you about speaking?"

"I–I was just–"

"You were just about to tell this stranger about private business. Business that doesn't concern her. Business that doesn't concern you, unless you'd like it to become your permanent concern."

Kovacs swallows hard. His bravado from earlier had evaporated completely. "Sorry, boss. Didn't think."

"Thinking isn't your strength. Silence should be. Go check on Wren. Now." Dax turns back to you. The pleasant mask is back in place, but the seams are showing now. “Now, where were we? Ah, yes. Family. Dangerous motivation. Makes people do stupid things for relatives who probably don't deserve it. But if you want to find him–"

You raise an eyebrow. "Him?" Dax pauses, just for a fraction of a second. “I never said I was looking for a guy," you say, crossing your arms. "I could be looking for my sister. My mother. My crazy Aunt Tilda who knits sweaters out of dead rat fur." 

Dax's jaw tightens almost imperceptibly. "I merely–"

"You're right," you interrupt. "I am looking for a guy. But you didn't know that. So either you're psychic, or you know more than you're letting on."

For a moment, Dax doesn't move. Then, incredibly, he laughs. It's a short, sharp sound– genuine amusement breaking through the corporate veneer.

"Well," he says. "You're sharper than you look.” Again, what’s with these insults? ”Most people down here just cower when I talk. It's refreshing to be mocked." He sighs, reaching into his jacket for a thin cigarette. He doesn't light it, just rolls it between his fingers. "Fine. Cards on the table. Kovacs is an idiot, but he's a useful idiot. He overhears things. A woman came through asking questions about a young man matching a certain description. She offered me a small amount of money for information. I declined, mostly because the money wasn't significant enough." He shrugs. "But, whatever your 'family matter' is, it’s suddenly very interesting to a lot of people.” He lights the cigarette. “Now, I might know something, and I’m willing to tell you… for a price.”

"What kind of price?"

Dax gestures behind him, toward the darker depths of Sector 9. "There's a woman. Doctor Krista Kline. She operates out of a lab in a sub-basement about six blocks east. She runs experiments that produce results no ethical scientist would touch." He pauses. "Fuck, even the Velvet Collective pays good money for some of it."

The name hits like a punch. "The Collective?"

"Did I stutter?" Dax takes a drag. "What’s important is: she has something of mine. A data drive. She took it as 'insurance' during our last negotiation, and she's been holding it over my head ever since."

"You want me to steal it back."

"I want you to retrieve it. However you accomplish that is your business." He taps ash onto the ground. "You get me that drive, I tell you what I know. And I give you my word that neither I nor my people will breathe a word of your visit to anyone else. Unless someone pays good money for it, of course– I’m not a charity."

"And if I say no?"

Dax shrugs. "Then maybe you are stupid.”


    `,
    choices:
    [
      {
        text: "[1] Fine, I’ll get your drive.", 
        next: "sector9_2"
      },
      {
      	text: "[2] Negotiate",
        next: "sector9_2",

      }
    ]
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
