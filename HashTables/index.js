class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null);
  }
  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  set(key, value) {
    const idx = this.hash(key);
    if (!this.hashmap[idx]) {
      this.hashmap[idx] = [];
    }
    this.hashmap[idx].push([key, value]);
  }

  get(key) {
    const idx = this.hash(key);
    const slot = this.hashmap[idx];
    if (slot) {
      for (let i = 0; i < slot.length; i++) {
        if (slot[i][0] === key) return slot[i][1];
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.hashmap.length; i++) {
      const slot = this.hashmap[i];
      if (slot) {
        for (let j = 0; j < slot.length; j++) {
          if (!values.includes(slot[j][0])) {
            values.push(slot[j][0]);
          }
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.hashmap.length; i++) {
      const slot = this.hashmap[i];
      if (slot) {
        for (let j = 0; j < slot.length; j++) {
          if (!values.includes(slot[j][1])) {
            values.push(slot[j][1]);
          }
        }
      }
    }
    return values;
  }
}
