/**
 * Formata o tempo em formato HH:MM:SS e MM:SS
 * @param {number} totalSeconds - Tempo em segundos
 */
export const displayTimeFormat = (totalSeconds) => {
  if (isNaN(totalSeconds) || totalSeconds < 0) totalSeconds = 0;

  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  const paddedHrs = String(hrs).padStart(2, "0");
  const paddedMins = String(mins).padStart(2, "0");
  const paddedSecs = String(secs).padStart(2, "0");

  return hrs > 0
    ? `${paddedHrs}:${paddedMins}:${paddedSecs}` // HH:MM:SS
    : `${paddedMins}:${paddedSecs}`; // MM:SS
};
