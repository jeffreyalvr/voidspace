let audio = null;

/**
 * Play a sound effect once.
 * @param {string} src - Path to audio file
 */
export const playSound = (src) => {
  if (!audio) {
    audio = new Audio(src);
    audio.play();
    audio.onended = () => {
      audio = null;
    };
  }
};
