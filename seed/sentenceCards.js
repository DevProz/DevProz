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
    sentence: "ACKCHYUALLY",
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
    sentence: "When someone says, 'Oh, shut up, you kmow you love me!'",
  }),
  new SentenceCard({
    sentence:
      "When your teacher tells you to stop laughing but yoru friends are too funny",
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
    sentence: "Oh lort - I can't even...",
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
    sentence: "So you mean to tell me that you giys hav an orange president?",
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
      "That moment when you raise your handand someone else yells out the answer",
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
    sentence: "When someone bumps into me without without saying 'excuse me'",
  }),
  new SentenceCard({
    sentence: "Bad hair day",
  }),
  new SentenceCard({
    sentence: "Me in California in 80 degree weather",
  }),
];

module.exports = sentenceCards;
