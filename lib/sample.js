class Sample {
  constructor(printFunc) {
    this.print = printFunc || console.log;
  }

  say() {
    this.print(hello());
  }

  sayBye() {
    bye();
  }
}

function hello() {
  return "Hello TDDBC!";
}

function bye() {
  return "bye";
}

module.exports = Sample;
