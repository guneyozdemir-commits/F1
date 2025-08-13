export interface Race {
  season: string;
  round: string;
  raceName: string;
  Circuit: {
    circuitId: string;
    circuitName: string;
    Location: {
      locality: string;
      country: string;
    };
  };
  date: string;
  time: string;
  FirstPractice?: {
    date: string;
    time: string;
  };
  SecondPractice?: {
    date: string;
    time: string;
  };
  ThirdPractice?: {
    date: string;
    time: string;
  };
  Qualifying: {
    date: string;
    time: string;
  };
  Sprint?: {
    date: string;
    time: string;
  };
}

export interface RaceSchedule {
  MRData: {
    RaceTable: {
      Races: Race[];
    };
  };
}

export interface NextRaceInfo {
  race: Race;
  timeUntilRace: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}
