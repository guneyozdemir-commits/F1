interface LapRecord {
  driverName: string;
  team: string;
  time: string;
  year: number;
}

interface Circuit {
  id: string;
  name: string;
  country: string;
  trackPath: string; // SVG path data
  length: number; // in kilometers
  corners: number;
  lapRecords: LapRecord[];
  raceDate: string; // 2024 race date
  firstGP: number;
}

interface LapTime {
  driverId: string;
  driverName: string;
  team: string;
  year: number;
  lapTime: number; // in milliseconds
  sectors: number[];
}

interface Position {
  x: number;
  y: number;
  progress: number; // 0 to 1
}

interface GhostCar {
  driverId: string;
  driverName: string;
  team: string;
  position: Position;
  delta: number; // time delta to leader
  currentLapTime: number;
}

export type { Circuit, LapTime, Position, GhostCar };

