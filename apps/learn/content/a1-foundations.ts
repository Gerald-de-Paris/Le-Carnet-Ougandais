import activity from "../../../src/content/lessons/a1-foundations.json";
export type QuizQuestion={n:number;type:"choice"|"boolean";prompt:string;options:string[];answer:number;why:string};
export const a1Foundations=activity.questions as QuizQuestion[];
export const speakingMissions=activity.speakingMissions;
