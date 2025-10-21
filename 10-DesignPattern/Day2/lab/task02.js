// 2-Suppose that we play playstation football game and during the game we want to
// change the game plan: (attack -defence - meduim)

/* --- --- --- Strategy Pattern --- --- --- */

// Game Plans --- --- ---
class Attack {
  play() {
    console.log("Playing Attack...");
  }
}

class Defence {
  play() {
    console.log("Playing Defence...");
  }
}

class Medium {
  play() {
    console.log("Playing Medium...");
  }
}

// Team Strategy --- --- ---
class SoccerTeam {
  setPlan(_plan) {
    this.plan = _plan;
  }

  play() {
    this.plan.play();
  }
}

// test

const team = new SoccerTeam();
team.setPlan(new Attack()); // Playing Attack...
team.play();
team.setPlan(new Defence()); // Playing Defence...
team.play();
