const scuberGreetingForFeet = (feet) =>
  feet <= 400
    ? "This one is on me!"
    : feet > 400 && feet <= 2000
    ? "That will be twenty bucks."
    : feet > 2000 && feet<2500
    ? "I will gladly take your thirty bucks."
    : "No can do.";

const ternaryCheckCity = (city) => city == "NYC" ? "Ok, sounds good." : "No go.";


const switchOnCharmFromTip = (tip) => tip == 'generous' ? "Thank you so much." : tip == 'not as generous' ? 'Thank you.' : "Bye.";
