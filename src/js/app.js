export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return !/(\d+){4,}/gi.test(this.name) && /^[a-z][a-z_-\d]*[a-z]$/gi.test(this.name);
  }
}
