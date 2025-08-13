import axios from 'axios';
import { Race, NextRaceInfo } from '../types/race';

const API_URL = 'http://localhost:3000/api';

export const fetchCurrentSeasonRaces = async (): Promise<Race[]> => {
  const response = await axios.get(`${API_URL}/races`);
  return response.data.races;
};

const adjustDateToCurrentYear = (date: Date): Date => {
  const now = new Date();
  const currentYear = now.getFullYear();
  date.setFullYear(currentYear);
  return date;
};

export const getNextRace = (races: Race[]): NextRaceInfo | null => {
  const now = new Date();
  
  // Filter future races and sort by date
  const futureRaces = races
    .map(race => ({
      ...race,
      adjustedDate: adjustDateToCurrentYear(new Date(race.dateTime))
    }))
    .filter(race => race.adjustedDate > now)
    .sort((a, b) => a.adjustedDate.getTime() - b.adjustedDate.getTime());

  if (futureRaces.length === 0) {
    return null;
  }

  const nextRace = futureRaces[0];
  const timeDiff = nextRace.adjustedDate.getTime() - now.getTime();

  return {
    race: {
      ...nextRace,
      dateTime: nextRace.adjustedDate.toISOString(),
      date: nextRace.adjustedDate.toISOString().split('T')[0]
    },
    timeUntilRace: {
      days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDiff % (1000 * 60)) / 1000)
    }
  };
};