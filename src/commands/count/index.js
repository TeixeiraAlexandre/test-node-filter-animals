function stringCount(name, items) {
  return `${name} [${items.length}]`;
}

function countPeople(people) {
  return people.map(person => ({
    name: stringCount(person.name, person.animals),
    animals: person.animals
  }));
}

function count(_, data) {
  return data.map(country => ({
    name: stringCount(country.name, country.people),
    people: countPeople(country.people)
  }));
}

module.exports = count;