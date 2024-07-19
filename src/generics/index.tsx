export function getDateDifference(start: number) {
  const end = new Date().getTime();
  const difference = end - start;

  const msInMinute = 1000 * 60;
  const msInHour = msInMinute * 60;
  const msInDay = msInHour * 24;
  const msInWeek = msInDay * 7;
  const msInMonth = msInDay * 30.44; // Average days in a month
  const msInYear = msInDay * 365.25; // Considering leap years

  if (difference < msInMinute) {
    const seconds = Math.floor(difference / 1000);
    return seconds === 1 ? "one second ago" : `${seconds} seconds ago`;
  } else if (difference < msInHour) {
    const minutes = Math.floor(difference / msInMinute);
    return minutes === 1 ? "one minute ago" : `${minutes} minutes ago`;
  } else if (difference < msInDay) {
    const hours = Math.floor(difference / msInHour);
    return hours === 1 ? "one hour ago" : `${hours} hours ago`;
  } else if (difference < msInWeek) {
    const days = Math.floor(difference / msInDay);
    return days === 1 ? "one day ago" : `${days} days ago`;
  } else if (difference < msInMonth) {
    const weeks = Math.floor(difference / msInWeek);
    return weeks === 1 ? "one week ago" : `${weeks} weeks ago`;
  } else if (difference < msInYear) {
    const months = Math.floor(difference / msInMonth);
    return months === 1 ? "one month ago" : `${months} months ago`;
  } else {
    const years = Math.floor(difference / msInYear);
    return years === 1 ? "one year ago" : `${years} years ago`;
  }
}
