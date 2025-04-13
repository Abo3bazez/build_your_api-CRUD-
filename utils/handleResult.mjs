export class ResultFormatter {
  constructor({ deletedCount = 0, insertedCount = 0, modifiedCount = 0 } = {}) {
    this.deletedCount = deletedCount;
    this.insertedCount = insertedCount;
    this.modifiedCount = modifiedCount;
  }

  format() {
    return {
      deleted: this.deletedCount,
      inserted: this.insertedCount,
      modified: this.modifiedCount,
    };
  }
}

// Example usage:
// const result = new ResultFormatter({ deletedCount: 1, insertedCount: 0, modifiedCount: 2 });
// console.log(result.format());
