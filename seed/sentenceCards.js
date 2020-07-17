const SentenceCard = require("../server/db/models/sentenceCard");

const sentenceCards = [
  new SentenceCard({
    sentence: "I may be a sucker, but i'm no lollipop!",
  }),
  new SentenceCard({
    sentence:
      "A word to the wise ain't necessary – it's the stupid ones that need the advice",
  }),
  new SentenceCard({
    sentence: "When your meme gets 11 likes",
  }),
  new SentenceCard({
    sentence: "When you try your best and it still isnt enough",
  }),
  new SentenceCard({
    sentence:
      "When you lean back too far in your chair and hit the point of no return",
  }),
  new SentenceCard({
    sentence:
      "When your shampoo says 'damage repair' but you're still borken on the inside",
  }),
  new SentenceCard({
    sentence: "When someone says, 'Oh, shut up, you know you love me!'",
  }),
  new SentenceCard({
    sentence:
      "When your teacher tells you to stop laughing but your friends are too funny",
  }),
  new SentenceCard({
    sentence: "Hospitals calculating your medical bill",
  }),
  new SentenceCard({
    sentence: "Where's my mask?",
  }),
  new SentenceCard({
    sentence: "It's time to stop",
  }),
  new SentenceCard({
    sentence: "Sips Tea",
  }),
  new SentenceCard({
    sentence: "I just had a great crying sesh",
  }),
  new SentenceCard({
    sentence: "I have achieved comedy",
  }),
  new SentenceCard({
    sentence: "Favorite song comes up on Spotify...accidently hit dislike",
  }),
  new SentenceCard({
    sentence: "When you see another end of decade list",
  }),
  new SentenceCard({
    sentence: "I'm not a regular mom; I'm a cool mom",
  }),
  new SentenceCard({
    sentence: "The face you make when you hit a pothole",
  }),
  new SentenceCard({
    sentence: "When you phone is at one percent",
  }),
  new SentenceCard({
    sentence: "Me after hearing someone cough on my roundtrip flight to Italy",
  }),
  new SentenceCard({
    sentence: "What I'm actually doing underneath my mask",
  }),
  new SentenceCard({
    sentence: "When you google a test question and the whole test comes up",
  }),
  new SentenceCard({
    sentence: "Hearing your own voice",
  }),
  new SentenceCard({
    sentence:
      "When you're hanging out with your friends and your social battery dies",
  }),
  new SentenceCard({
    sentence: "When people start beefing in the group chat",
  }),
  new SentenceCard({
    sentence: "Me at my own tweets",
  }),
  new SentenceCard({
    sentence: "Finally found the perfect background for my Zoom meetings",
  }),
  new SentenceCard({
    sentence: "Getting fired on a day off",
  }),
  new SentenceCard({
    sentence: "Ok boomer",
  }),
  new SentenceCard({
    sentence: "When you find a dank meme to send to your friends",
  }),
  new SentenceCard({
    sentence: "When someone calls me instead of texting like a normal person",
  }),
  new SentenceCard({
    sentence: "'Where do you see yourslf in 50 years?' Me: ",
  }),
  new SentenceCard({
    sentence: "When you die of anxiety over something that ended up fine",
  }),
  new SentenceCard({
    sentence: "What actually happens vs how imma narrate the the story...",
  }),
  new SentenceCard({
    sentence: "Me trying to get out of my comfort zone",
  }),
  new SentenceCard({
    sentence:
      "Me dressing for work when there is an 8 year-old YouTuber that made $26 million this year",
  }),
  new SentenceCard({
    sentence:
      "When you accidently clicked 'open in new window' instead of 'open in new tab'",
  }),
  new SentenceCard({
    sentence:
      "Suspect hiding from police passes gas so loudly it gives up their hiding spot",
  }),
  new SentenceCard({
    sentence:
      "Teacher:'No eating in class!'. Students in the back of the class: ",
  }),
  new SentenceCard({
    sentence: "Ermahgerd",
  }),
  new SentenceCard({
    sentence:
      "I don't always use Internet Explorer...But when I do, it's usually to download a bettter browser",
  }),
  new SentenceCard({
    sentence: "Shut up and take my money!",
  }),
  new SentenceCard({
    sentence: "On my way to a 'party' circa 7th grade",
  }),
  new SentenceCard({
    sentence: "Me at my professor's office hours after failing my midterm",
  }),
  new SentenceCard({
    sentence: "Feelin' cute, might delete later",
  }),
  new SentenceCard({
    sentence:
      "Me: They aplogized, I should just let it go. Also me: bring up that thing that pissed you off three weeks ago. Finish them.",
  }),
  new SentenceCard({
    sentence: "Ain't nobody got time for that",
  }),
  new SentenceCard({
    sentence: "Am I a joke to you?",
  }),
  new SentenceCard({
    sentence: "Who wore it better?",
  }),
  new SentenceCard({
    sentence: "When you're presenting in class and someone asks you speak up",
  }),
  new SentenceCard({
    sentence: "When your grandma finds out you haven't eaten all day",
  }),
  new SentenceCard({
    sentence: "Oh lord - I can't even...",
  }),
  new SentenceCard({
    sentence:
      "When Netflix asks if you're 'still watching' and you see your reflection in the black screen",
  }),
  new SentenceCard({
    sentence:
      "When you see your crush in public and try to act like a normal human being",
  }),
  new SentenceCard({
    sentence:
      "When the caption says 'tag your friends but' you have no friends",
  }),
  new SentenceCard({
    sentence:
      "When your friend is roasting you and it lowkey hurts your feelings",
  }),
  new SentenceCard({
    sentence: "How I feel when my wifi stops working",
  }),
  new SentenceCard({
    sentence: "You're doing amazing, sweetie.",
  }),
  new SentenceCard({
    sentence:
      "When you walk past someone you know but not well enough for you to say 'hello'",
  }),
  new SentenceCard({
    sentence: "i DON'T get why I'm NOT losing weight",
  }),
  new SentenceCard({
    sentence: "So you mean to tell me that you guys have an orange president?",
  }),
  new SentenceCard({
    sentence:
      "When Cinco de Mayo falls on Taco Tuesday in the middle of a pandemic named after a Mexican beer",
  }),
  new SentenceCard({
    sentence:
      "Experts recommend keeping your daily rituals even while working from home",
  }),
  new SentenceCard({
    sentence: "After the quarantine",
  }),
  new SentenceCard({
    sentence: "Trying to find a comfy position in bed",
  }),
  new SentenceCard({
    sentence: "2020 got me like...",
  }),
  new SentenceCard({
    sentence: "Me a few months ago about the Coronavirus vs. me today",
  }),
  new SentenceCard({
    sentence:
      "That moment when you raise your hand and someone else yells out the answer",
  }),
  new SentenceCard({
    sentence: "Me in the corner watching my family argue",
  }),
  new SentenceCard({
    sentence: "New year, new me",
  }),
  new SentenceCard({
    sentence: "How I feel after coding for hours",
  }),
  new SentenceCard({
    sentence:
      "Me waiting for my soulmate to show up at my house cuz my lazy a** doesn't go anywhere",
  }),
  new SentenceCard({
    sentence: "When I smell pee on the sidewalk",
  }),
  new SentenceCard({
    sentence: "When you fart in the online class and your name lights up",
  }),
  new SentenceCard({
    sentence: "Me showing a funny meme to my mom",
  }),
  new SentenceCard({
    sentence:
      "When you're waiting to tell a joke, but the conversation starts to change",
  }),
  new SentenceCard({
    sentence: "Asking the teacher for help vs Sitting there like an idiot",
  }),
  new SentenceCard({
    sentence:
      "When you think of something funny at a really inappropriate time",
  }),
  new SentenceCard({
    sentence:
      "Oh so you were born in 1999, tell me about how much you miss the 90s",
  }),
  new SentenceCard({
    sentence: "I need to poop",
  }),
  new SentenceCard({
    sentence: "Them: 'Mamma Mia', Me: 'HERE I GO AGAIN'",
  }),
  new SentenceCard({
    sentence: "An accurate picture of my social life",
  }),
  new SentenceCard({
    sentence: "Quarantine got me like...",
  }),
  new SentenceCard({
    sentence: `When someone bumps into me without without saying "excuse me"`,
  }),
  new SentenceCard({
    sentence: "Bad hair day",
  }),
  new SentenceCard({
    sentence: "Me in California in 80 degree weather",
  }),
  new SentenceCard({
    sentence: "How to lower your household expenses",
  }),
  new SentenceCard({
  sentence: "FALSE",
  }),
  new SentenceCard({
    sentence: "I’m on a seafood diet. I see food, and then I eat it.",
  }),
  new SentenceCard({
    sentence: "When Aunt Muriel asks when you’re going to have kids",
  }),
  new SentenceCard({
    sentence: "When your friend complains about Weight Watchers",
  }),
  new SentenceCard({
    sentence: "When Beyoncé concert tickets go on sale",
  }),
  new SentenceCard({
    sentence: "When your friends give you the single raised eyebrow",
  }),
  new SentenceCard({
    sentence: "When you’re told to get your butt off the couch",
  }),
  new SentenceCard({
    sentence: "Nope",
  }),
  new SentenceCard({
    sentence: "Can you not?!",
  }),
  new SentenceCard({
    sentence: "When you’re stuck",
  }),
  new SentenceCard({
    sentence: "You can’t have everything",
  }),
  new SentenceCard({
    sentence: "Dude!",
  }),
  new SentenceCard({
    sentence: "My ex",
  }),
  new SentenceCard({
    sentence: "When your dentist suggests adult braces",
  }),
  new SentenceCard({
    sentence: "When your family is concerned about your weight",
  }),
  new SentenceCard({
    sentence: "When people ask why you’re still single",
  }),
  new SentenceCard({
    sentence: "When you finally decide to stop procrastinating",
  }),
  new SentenceCard({
    sentence: "When others second-guess your life choices",
  }),
  new SentenceCard({
    sentence: "When your family jokes about you being over the hill",
  }),
  new SentenceCard({
    sentence: "When your spouse addresses your late-night snacking",
  }),
  new SentenceCard({
    sentence: "When it’s time to get a haircut",
  }),
  new SentenceCard({
    sentence: "When you’re contemplating the advancements of humanity since the dawn of time",
  }),
  new SentenceCard({
    sentence: "When someone asks how you like your job",
  }),
  new SentenceCard({
    sentence: "When someone calls you crazy",
  }),
  new SentenceCard({
    sentence: "When you’re asked about your religious beliefs",
  }),
  new SentenceCard({
    sentence: "When you are the only child",
  }),
  new SentenceCard({
    sentence: "When can we eat?",
  }),
  new SentenceCard({
    sentence: "Rise and shine",
  }),
  new SentenceCard({
    sentence: "When you think what to wear",
  }),
  new SentenceCard({
    sentence: "Did she get a spoonful of virgin period in her tea this morning?",
  }),
  new SentenceCard({
    sentence: "The idea is to die young...as late as possible",
  }),
  new SentenceCard({
    sentence: "Whatever!",
  }),
  new SentenceCard({
    sentence: "Please wash your hands",
  }),
  new SentenceCard({
    sentence: "We lost Tom",
  }),
  new SentenceCard({
    sentence: "That is the key!",
  }),
  new SentenceCard({
    sentence: "My secret dream",
  }),
  new SentenceCard({
    sentence: "Why do not you like me?!",
  }),
  new SentenceCard({
    sentence: "When you think like a proton",
  }),
  new SentenceCard({
    sentence: "Stay off!",
  }),
  new SentenceCard({
    sentence: "When I stepped on a Corn Flake and now I'm a Cereal Killer",
  }),
  new SentenceCard({
    sentence: "When a demonic starbucks napkin stole my goldfish crackers",
  }),
  new SentenceCard({
    sentence: "Banana error",
  }),
  new SentenceCard({
    sentence: "When cloth is yum like paper",
  }),
  new SentenceCard({
    sentence: "Screw world peace, I want a pony",
  }),
  new SentenceCard({
    sentence: "There's a purple mushroom in my backyard, screaming Taco's!",
  }),
  new SentenceCard({
    sentence: "When the person you hooked up with once invites you over to meet their parents",
  }),
  new SentenceCard({
    sentence: "When he says he is going out with his boys at 10pm so you schedule an argument at 9:45pm",
  }),
  new SentenceCard({
    sentence: "When your grandma asks you to help her with technology",
  }),
  new SentenceCard({
    sentence: "When the friend you are supposed to go out with tonight starts talking about how tired they are",
  }),
  new SentenceCard({
    sentence: "When you finally get a text but it is from your service provider saying you have used 90% of your data this month",
  }),
  new SentenceCard({
    sentence: "When you think you have been charging your phone for the last 3 hours but it was not plugged in",
  }),
  new SentenceCard({
    sentence: "When you are a vegan and have not told anyone in 7 minutes",
  }),
  new SentenceCard({
    sentence: "When you find that perfectly ripe avocado at the supermarket",
  }),
  new SentenceCard({
    sentence: "When it is your birthday and your Facebook wall reminds you that you have friends",
  }),
  new SentenceCard({
    sentence: "When your shampoo says 'Damage Control' but you are still broken on the inside",
  }),
  new SentenceCard({
    sentence: "When you are taking a poop and forget your phone outside the bathroom",
  }),
  new SentenceCard({
    sentence: "When you wake up after blacking out and realize your Snapchat story is 11 minutes long",
  }),
  new SentenceCard({
    sentence: "When you are on a first data and they start talking about horoscopes",
  }),
  new SentenceCard({
    sentence: "When you are all ready to go out but your phone's at 6%",
  }),
  new SentenceCard({
    sentence: "When you hear someone say 'moist'",
  }),
  new SentenceCard({
    sentence: "When you accidently get something vegan",
  }),
  new SentenceCard({
    sentence: "When your friends are all starting to have kids, but you can't manage to keep a cactus alive",
  }),
  new SentenceCard({
    sentence: "When you mistake a used pregnancy test for a thermometer",
  }),
  new SentenceCard({
    sentence: "When your gynecologist gives you a high five",
  }),
  new SentenceCard({
    sentence: "When you show up on a blind data and they are wearing a fedora",
  }),
  new SentenceCard({
    sentence: "When your parents forget to leave uou a trust fund",
  }),
  new SentenceCard({
    sentence: "When everyone else at the starting line is Jamaican",
  }),
  new SentenceCard({
    sentence: "When there is no toilet paper left so you have to twerk",
  }),
  new SentenceCard({
    sentence: "When someone congratulates you on being pregnant but you are not pregnant",
  }),
  new SentenceCard({
    sentence: "When you find out you are adopted",
  }),
  new SentenceCard({
    sentence: "When you finally get home and can be ugly in peace",
  }),
  new SentenceCard({
    sentence: "When you see a comma in your bank account",
  }),
  new SentenceCard({
    sentence: "When you thought someone was chill but then you see them put ketchup on their pasta",
  }),
  new SentenceCard({
    sentence: "When your drug dealer starts talking about things other than drugs",
  }),
  new SentenceCard({
    sentence: "When it is Monday morning and you are deciding whether to go to work or call in dead",
  }),
  new SentenceCard({
    sentence: "This Friday mood",
  }),
  new SentenceCard({
    sentence: "When your voice cracks during erotic phone sex",
  }),
  new SentenceCard({
    sentence: "When you finally get some booty after 4 months of quarantine ",
  }),
  new SentenceCard({
    sentence: "When you can't stop smiling during an uncomfortable situation",
  }),
  new SentenceCard({
    sentence: "When restaurants put calorie counts on their menu",
  }),
];

module.exports = sentenceCards;