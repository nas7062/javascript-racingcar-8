export const getWinners = (cars) => {
  const max = Math.max(...cars.map((c) => c.getPosition()));
  const winners = cars.filter((c) => c.position === max).map((c) => c.name);
  console.log(max, winners);
};
