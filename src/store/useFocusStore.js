import { create } from "zustand";

import { Statuses } from "@constants";

import sfx_alert from "@assets/sfx/alert.ogg";
import { playSound } from "@utils/playSound";

const useFocusStore = create((set, get) => {
  const lastUsedFocusTime =
    parseInt(localStorage.getItem("lastUsedFocusTime"), 10) || 5;

  return {
    selectableValues: [5, 10, 15, 25, 30, 45, 60, 90, 120, 180, 240, 300],
    selectedFocusTime: lastUsedFocusTime,
    focusStatus: Statuses.UNSET,
    remainingTime: lastUsedFocusTime * 60,
    enableSounds: true,

    toggleEnableSounds: () =>
      set((state) => ({ enableSounds: !state.enableSounds })),

    setSelectedFocusTime: (time) => {
      localStorage.setItem("lastUsedFocusTime", time);

      set({
        selectedFocusTime: time,
        remainingTime: time * 60,
      });
    },

    setFocusStatus: (status) => set({ focusStatus: status }),

    startTimer: () => {
      set({ focusStatus: Statuses.RUNNING });
    },

    stopTimer: () => {
      const { selectedFocusTime, enableSounds } = get();
      set({
        focusStatus: Statuses.STOPPED,
        remainingTime: selectedFocusTime * 60, // reset to full time
      });
      if (enableSounds) playSound(sfx_alert);
    },

    tick: () => {
      const { focusStatus, remainingTime } = get();
      if (focusStatus === Statuses.RUNNING && remainingTime > 0) {
        set({ remainingTime: remainingTime - 1 });
      } else if (focusStatus === Statuses.RUNNING && remainingTime === 0) {
        set({ focusStatus: Statuses.STOPPED });
        if (enableSounds) playSound(sfx_alert);
      }
    },

    resetTimer: () => {
      const { selectedFocusTime } = get();
      set({
        remainingTime: selectedFocusTime * 60,
        focusStatus: Statuses.RUNNING,
        // FIXME: Adicionar efeito ao resetar o timer
        // if(enableSounds) playSound(sfx_reset);
      });
    },
  };
});

export default useFocusStore;
