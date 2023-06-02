import { createMachine, interpret } from "xstate";

export const toggleMachine = createMachine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: { on: { TOGGLE: "active" } },
    active: { on: { TOGGLE: "inactive" } },
  },
});

export const toggleService = interpret(toggleMachine)
  .onTransition((state) => console.log(state.value))
  .start();
