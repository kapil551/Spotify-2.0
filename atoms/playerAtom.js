// Recoil Atoms
// https://recoiljs.org/docs/introduction/getting-started#atom
// https://recoiljs.org/docs/basic-tutorial/atoms

import { atom } from "recoil";

// Creating a global storage atom for storing play state
export const playState = atom({
    key: "playState",
    default: false,
}); 

// Creating a global storage atom for storing playing track state
export const playingTrackState = atom({
    key: "playingTrackState",
    default: "",
});