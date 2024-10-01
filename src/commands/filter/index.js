function filterPeopleByAnimals(people, pattern) {
  return people.reduce((peopleAcc, person) => {
    const filteredAnimals = person.animals.filter(animal => animal.name.includes(pattern));

    if (filteredAnimals.length > 0) {
      peopleAcc.push({
        name: person.name,
        animals: filteredAnimals
      });
    }
    return peopleAcc;
  }, []);
}

function filter(pattern, data) {
  return data.reduce((acc, country) => {
    const filteredPeople = filterPeopleByAnimals(country.people, pattern)

    if (filteredPeople.length > 0) {
      acc.push({
        name: country.name,
        people: filteredPeople
      });
    }

    return acc;
  }, []);
}
module.exports = filter;