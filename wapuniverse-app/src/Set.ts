export interface Change<T> {
}

export class ValueAdded<T> implements Change<T> {
  readonly value: T;

  constructor(value: T) {
    this.value = value;
  }
}

export class ValueRemoved<T> implements Change<T> {
  readonly value: T;

  constructor(value: T) {
    this.value = value;
  }
}

export class Set {

}
