//CHARACTER CLASS ASSIGNMENT
//Character Class
class Character {
  //Define Properties
  constructor(name, phrase1, phrase2) {
    this.name = name;
    this.phrase1 = phrase1;
    this.phrase2 = phrase2;
    this.level = 0;
  }

  //Methods
  speak(phraseNum) {
    switch (phraseNum) {
      case 1:
        console.log(this.phrase1);
        break;
      case 2:
        console.log(this.phrase2);
    }
  }

  setLevel(newLevel) {
    this.level = newLevel;
    console.log(this.level);
  }
}

//Create
let character1 = new Character(
  "Kung Fu Panda",
  "Skadoosh!",
  "I am the dragon warrior!"
);
let character2 = new Character(
  "Spongebob",
  "I'm ready, I'm ready.",
  "Aye-aye, captain!"
);

//Call Methods
character1.speak(1);
character2.setLevel(2);
character2.speak(2);
