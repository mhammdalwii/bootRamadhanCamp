import { create } from "zustand";
interface CounterStore {
  count: number;
  incerement: () => void;
  decrement: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  incerement: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
