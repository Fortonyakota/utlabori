class People {
  static count: number = 0;
  id: number;

  constructor() {
    // Increment the static count and assign it to the instance's id
    this.id = People.getNextId();
  }

  // Static method to handle id incrementation
  private static getNextId(): number {
    return ++People.count;
  }
}

// Usage
const person = new People();
console.log(person.id); // Outputs the next unique id
