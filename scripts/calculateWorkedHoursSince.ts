const monthDiff = (d1: Date, d2 = new Date()) => {
  let months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

const roundHundred = (num: number) => Math.round(num / 100) * 100;

// ~ 20 work days * 8 hours every day
export function calculateWorkedHoursSince(since: Date) {
  const month = monthDiff(since);
  const workedHours = month * 20 * 8;

  return roundHundred(workedHours);
}
