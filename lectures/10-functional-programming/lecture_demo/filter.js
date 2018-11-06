// const filterActors = actor => {
//   if (actor.years > 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

const filterActors = actor => actor.years > 3;


// const filteredActors = actors.filter(filterActors);

const filteredActors = actors.filter(actor => actor.years <= 3);
