import { EData } from "../db/home-data";

export type RootStackParams = {
  TabNavigation: undefined;
  QuizzResult: undefined;
  QuizzScreen: undefined;
  PracticeScreen: undefined;
  DetailAnimal: {
    animalName: string;
  };
  PracticeResult: {
    point: number;
    level: string;
  };
  Detail: {
    groupSeaName: string;
  };
  DetailWaterArea: {
    waterName: string;
  };
  PuzzleScreen: {
    id: number;
  };
  DetailCommon: {
    id: string;
    dataType: EData;
  };
};

export type BottomTabsParams = {
  Home: undefined;
  Quizz: undefined;
  Practice: undefined;
  Puzzle: undefined;
} & RootStackParams;
