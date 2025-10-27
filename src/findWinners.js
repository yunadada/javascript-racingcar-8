function findWinners(cars) {
  const positions = cars.map((car) => car.position);
  const maxPosition = Math.max(...positions);

  const topCars = cars.filter((car) => car.position === maxPosition);

  const winnerNames = topCars.map((car) => car.name);
  const winners = winnerNames.join(", ");

  return winners;
}

export default findWinners;
