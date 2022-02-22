const faker = require('faker');

class NoteService {

  constructor(){
    this.note = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.note.push({
        id: faker.datatype.uuid(),
        content: faker.commerce.productName(),
        important: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  create() {

  }

  find() {
    return this.note;
  }

  findOne(id) {
    return this.note.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }

}

module.exports = NoteService;
