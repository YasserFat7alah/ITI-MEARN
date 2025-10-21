// 4- Make Demo apply facade pattern on freelance system

// DEMO: for freelancing website system where user can post a job , find a freelancer and pays to hire him

/* --- --- --- Facade Pattern --- --- --- */

// Sub-Systems --- --- ---
class Job {
  constructor(_title, _details) {
    this.title = _title;
    this.details = _details;
  }
  post() {
    console.log(`Job posted: ${this.title} - ${this.details}`);
  }
}

class Chat {
  find() {
    console.log("Found A Freelancer...");
  }
}

class Payment {
  pay() {
    console.log("Payment Done!");
  }
}

// Main-System --- --- ---
class FreeLancerFacade {
  constructor(_job) {
    this.job = _job;
    this.chat = new Chat();
    this.payment = new Payment();
  }

  hire() {
    this.job.post();
    this.chat.find();
    this.payment.pay();
    console.log("Freelancer Hired!");
  }
}

// test

const newJob = new Job(
  "Website Design",
  "I want someone with experience to design a website for my local brand"
);

new FreeLancerFacade(newJob).hire();
