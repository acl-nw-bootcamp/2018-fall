const actors = doctors.map(mapDoctor);

const totalYears = actors.reduce((accumulator, actor) => accumulator + actor.years, 0);

const totalYearsOLDWAY = actors.reduce(function(accumulator, actor){
  return accumulator + actor.years;
}, 0);

const reduceActors = (accumulator, actor) => {
  if (actor.years > 3) {
    accumulator.push(actor);
  }
  return accumulator;
}

const longLivedActors = actors.reduce(reduceActors, []);
