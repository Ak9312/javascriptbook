url = "people.json";

fetch(url)
  .then((rep) => rep.json())

  .then((item) => {
    console.log(item);
    item.forEach((person) =>
      console.log(`${person.First},${person.Last}, ${person.Topic} `)
    );
  });
