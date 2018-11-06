const mapDoctor = doctor => {
  const nameParts = doctor.actor.split(' ');
  const years = doctor.end - doctor.begin + 1;
  const actorInfo = {
    first: nameParts[0],
    last: nameParts[1],
    range: `${doctor.begin} - ${doctor.end}`,
    years: years
  }
  return actorInfo;
}
