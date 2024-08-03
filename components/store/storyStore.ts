import { create } from "zustand";
import { produce } from "immer";
const DEFAULT_PROPS = {
  showDetails: true,
};

export const useStoryStore = create((set) => ({
  ...DEFAULT_PROPS,
  toggleShowDetails: (isShowing: boolean) =>
    set(produce((state) => ({ showDetails: isShowing }))),
}));
