import { Circuit } from '../types';

export const circuits: Circuit[] = [
  {
    id: 'bahrain',
    name: 'Bahrain International Circuit',
    country: 'Bahrain',
    // Turn 1-4 complex, hairpin, back straight
    trackPath: 'M 20,50 C 25,50 30,45 35,45 L 55,45 C 60,45 65,50 65,55 L 65,65 C 65,70 60,75 55,75 L 35,75 C 30,75 25,70 25,65 L 25,55 C 25,50 30,45 35,45 Z',
    length: 5.412,
    corners: 15,
    firstGP: 2004,
    raceDate: '2024-02-29',
    lapRecords: [
      { driverName: 'Pedro de la Rosa', team: 'McLaren', time: '1:31.447', year: 2005 },
      { driverName: 'Max Verstappen', team: 'Red Bull', time: '1:32.608', year: 2023 }
    ]
  },
  {
    id: 'jeddah',
    name: 'Jeddah Corniche Circuit',
    country: 'Saudi Arabia',
    // High-speed street circuit with flowing corners
    trackPath: 'M 30,20 C 50,20 60,30 60,50 L 60,70 C 60,80 50,90 30,90 C 20,90 15,85 15,75 L 15,35 C 15,25 20,20 30,20 Z',
    length: 6.174,
    corners: 27,
    firstGP: 2021,
    raceDate: '2024-03-07',
    lapRecords: [
      { driverName: 'Lewis Hamilton', team: 'Mercedes', time: '1:30.734', year: 2021 },
      { driverName: 'Max Verstappen', team: 'Red Bull', time: '1:31.906', year: 2023 }
    ]
  },
  {
    id: 'australia',
    name: 'Albert Park Circuit',
    country: 'Australia',
    // Updated layout with wider corners
    trackPath: 'M 20,30 C 40,30 50,35 50,45 L 50,65 C 50,75 40,80 30,80 C 20,80 15,75 15,65 L 15,45 C 15,35 20,30 30,30 Z',
    length: 5.278,
    corners: 14,
    firstGP: 1996,
    raceDate: '2024-03-24',
    lapRecords: [
      { driverName: 'Charles Leclerc', team: 'Ferrari', time: '1:20.235', year: 2023 }
    ]
  },
  {
    id: 'japan',
    name: 'Suzuka International Racing Course',
    country: 'Japan',
    // Famous figure-8 layout with 130R and Spoon curve
    trackPath: 'M 20,40 C 30,40 35,30 45,30 L 65,30 C 75,30 80,40 80,50 C 75,50 70,60 60,60 L 40,60 C 30,60 25,50 25,40 C 30,40 35,45 45,45 L 55,45 C 65,45 70,40 70,35 Z',
    length: 5.807,
    corners: 18,
    firstGP: 1987,
    raceDate: '2024-04-07',
    lapRecords: [
      { driverName: 'Lewis Hamilton', team: 'Mercedes', time: '1:30.983', year: 2019 }
    ]
  },
  {
    id: 'china',
    name: 'Shanghai International Circuit',
    country: 'China',
    // Distinctive first corner spiral and long back straight
    trackPath: 'M 20,40 C 40,40 50,30 60,30 C 70,30 80,40 80,50 C 80,60 70,70 60,70 C 50,70 40,60 40,50 C 40,45 45,40 50,40 L 60,40 C 65,40 70,45 70,50 C 70,55 65,60 60,60 L 50,60 C 45,60 40,55 40,50 Z',
    length: 5.451,
    corners: 16,
    firstGP: 2004,
    raceDate: '2024-04-21',
    lapRecords: [
      { driverName: 'Michael Schumacher', team: 'Ferrari', time: '1:32.238', year: 2004 }
    ]
  },
  {
    id: 'miami',
    name: 'Miami International Autodrome',
    country: 'United States',
    // Technical sections around Hard Rock Stadium
    trackPath: 'M 30,30 C 50,30 60,40 60,50 L 60,70 C 60,80 50,90 40,90 L 30,90 C 20,90 15,85 15,75 L 15,45 C 15,35 20,30 30,30 Z',
    length: 5.412,
    corners: 19,
    firstGP: 2022,
    raceDate: '2024-05-05',
    lapRecords: [
      { driverName: 'Max Verstappen', team: 'Red Bull', time: '1:29.708', year: 2023 }
    ]
  },
  {
    id: 'imola',
    name: 'Autodromo Enzo e Dino Ferrari',
    country: 'Italy',
    // Classic layout with Tamburello and Acque Minerali
    trackPath: 'M 25,30 C 45,30 55,40 55,50 L 55,70 C 55,80 45,85 35,85 C 25,85 20,80 20,70 L 20,45 C 20,35 25,30 35,30 Z',
    length: 4.909,
    corners: 19,
    firstGP: 1980,
    raceDate: '2024-05-19',
    lapRecords: [
      { driverName: 'Lewis Hamilton', team: 'Mercedes', time: '1:15.484', year: 2020 }
    ]
  },
  {
    id: 'monaco',
    name: 'Circuit de Monaco',
    country: 'Monaco',
    // Iconic street circuit with Casino Square and tunnel
    trackPath: 'M 30,30 L 70,30 C 75,30 75,35 70,35 L 60,35 C 55,35 55,40 60,40 L 70,40 C 75,40 75,45 70,45 L 40,45 C 35,45 35,50 40,50 L 60,50 C 65,50 65,55 60,55 L 30,55 C 25,55 25,50 30,50 L 40,50 C 45,50 45,45 40,45 L 30,45 C 25,45 25,30 30,30 Z',
    length: 3.337,
    corners: 19,
    firstGP: 1950,
    raceDate: '2024-05-26',
    lapRecords: [
      { driverName: 'Lewis Hamilton', team: 'Mercedes', time: '1:12.909', year: 2021 }
    ]
  },
  {
    id: 'canada',
    name: 'Circuit Gilles Villeneuve',
    country: 'Canada',
    // Wall of Champions and hairpin
    trackPath: 'M 20,40 C 40,40 50,45 50,55 L 50,75 C 50,85 40,90 30,90 C 20,90 15,85 15,75 L 15,55 C 15,45 20,40 30,40 Z',
    length: 4.361,
    corners: 14,
    firstGP: 1978,
    raceDate: '2024-06-09',
    lapRecords: [
      { driverName: 'Valtteri Bottas', team: 'Mercedes', time: '1:13.078', year: 2019 }
    ]
  },
  {
    id: 'spain',
    name: 'Circuit de Barcelona-Catalunya',
    country: 'Spain',
    // Technical first sector and long straight
    trackPath: 'M 25,35 C 45,35 55,45 55,55 L 55,75 C 55,85 45,90 35,90 C 25,90 20,85 20,75 L 20,50 C 20,40 25,35 35,35 Z',
    length: 4.675,
    corners: 16,
    firstGP: 1991,
    raceDate: '2024-06-23',
    lapRecords: [
      { driverName: 'Max Verstappen', team: 'Red Bull', time: '1:16.330', year: 2023 }
    ]
  },
  {
    id: 'austria',
    name: 'Red Bull Ring',
    country: 'Austria',
    // Short track with elevation changes
    trackPath: 'M 30,30 C 50,30 60,40 60,50 L 60,70 C 60,80 50,85 40,85 C 30,85 25,80 25,70 L 25,45 C 25,35 30,30 40,30 Z',
    length: 4.318,
    corners: 10,
    firstGP: 1970,
    raceDate: '2024-06-30',
    lapRecords: [
      { driverName: 'Carlos Sainz', team: 'McLaren', time: '1:05.619', year: 2020 }
    ]
  },
  {
    id: 'silverstone',
    name: 'Silverstone Circuit',
    country: 'United Kingdom',
    // Famous Maggots-Becketts sequence
    trackPath: 'M 20,40 L 60,40 C 70,40 75,45 75,55 C 75,65 70,70 60,70 L 40,70 C 30,70 25,65 25,55 C 25,50 27,45 32,43 C 37,41 42,43 45,45 C 48,47 50,50 50,55 C 50,60 45,65 40,65 L 30,65 C 25,65 25,60 30,60 L 40,60 C 42,60 45,57 45,55 C 45,53 42,50 40,50 L 30,50 C 25,50 25,45 30,45 L 40,45 C 45,45 50,47 50,55 Z',
    length: 5.891,
    corners: 18,
    firstGP: 1950,
    raceDate: '2024-07-07',
    lapRecords: [
      { driverName: 'Max Verstappen', team: 'Red Bull', time: '1:27.097', year: 2023 }
    ]
  },
  {
    id: 'hungary',
    name: 'Hungaroring',
    country: 'Hungary',
    // Twisty layout with medium-speed corners
    trackPath: 'M 25,35 C 45,35 55,45 55,55 L 55,75 C 55,85 45,90 35,90 C 25,90 20,85 20,75 L 20,50 C 20,40 25,35 35,35 Z',
    length: 4.381,
    corners: 14,
    firstGP: 1986,
    raceDate: '2024-07-21',
    lapRecords: [
      { driverName: 'Lewis Hamilton', team: 'Mercedes', time: '1:16.627', year: 2020 }
    ]
  },
  {
    id: 'belgium',
    name: 'Circuit de Spa-Francorchamps',
    country: 'Belgium',
    // Iconic Eau Rouge-Raidillon complex
    trackPath: 'M 20,30 C 40,30 50,40 50,50 L 50,70 C 50,80 40,85 30,85 C 20,85 15,80 15,70 L 15,45 C 15,35 20,30 30,30 Z',
    length: 7.004,
    corners: 19,
    firstGP: 1950,
    raceDate: '2024-07-28',
    lapRecords: [
      { driverName: 'Valtteri Bottas', team: 'Mercedes', time: '1:46.286', year: 2018 }
    ]
  },
  {
    id: 'netherlands',
    name: 'Circuit Zandvoort',
    country: 'Netherlands',
    // Banked final corner
    trackPath: 'M 30,30 C 50,30 60,40 60,50 L 60,70 C 60,80 50,85 40,85 C 30,85 25,80 25,70 L 25,45 C 25,35 30,30 40,30 Z',
    length: 4.259,
    corners: 14,
    firstGP: 1952,
    raceDate: '2024-08-25',
    lapRecords: [
      { driverName: 'Lewis Hamilton', team: 'Mercedes', time: '1:11.097', year: 2021 }
    ]
  },
  {
    id: 'monza',
    name: 'Autodromo Nazionale Monza',
    country: 'Italy',
    // High-speed temple of speed
    trackPath: 'M 25,35 C 45,35 55,45 55,55 L 55,75 C 55,85 45,90 35,90 C 25,90 20,85 20,75 L 20,50 C 20,40 25,35 35,35 Z',
    length: 5.793,
    corners: 11,
    firstGP: 1950,
    raceDate: '2024-09-01',
    lapRecords: [
      { driverName: 'Rubens Barrichello', team: 'Ferrari', time: '1:21.046', year: 2004 }
    ]
  },
  {
    id: 'azerbaijan',
    name: 'Baku City Circuit',
    country: 'Azerbaijan',
    // Long straight and castle section
    trackPath: 'M 30,30 L 70,30 C 75,30 75,35 70,35 L 60,35 C 55,35 55,40 60,40 L 70,40 C 75,40 75,45 70,45 L 40,45 C 35,45 35,50 40,50 L 60,50 C 65,50 65,55 60,55 L 30,55 C 25,55 25,30 30,30 Z',
    length: 6.003,
    corners: 20,
    firstGP: 2016,
    raceDate: '2024-09-15',
    lapRecords: [
      { driverName: 'Charles Leclerc', team: 'Ferrari', time: '1:43.009', year: 2019 }
    ]
  },
  {
    id: 'singapore',
    name: 'Marina Bay Street Circuit',
    country: 'Singapore',
    // Night race with tight corners
    trackPath: 'M 25,35 C 45,35 55,45 55,55 L 55,75 C 55,85 45,90 35,90 C 25,90 20,85 20,75 L 20,50 C 20,40 25,35 35,35 Z',
    length: 5.063,
    corners: 23,
    firstGP: 2008,
    raceDate: '2024-09-22',
    lapRecords: [
      { driverName: 'Kevin Magnussen', team: 'Haas', time: '1:41.905', year: 2018 }
    ]
  },
  {
    id: 'austin',
    name: 'Circuit of The Americas',
    country: 'United States',
    // First sector inspired by Silverstone
    trackPath: 'M 20,40 L 60,40 C 70,40 75,45 75,55 C 75,65 70,70 60,70 L 40,70 C 30,70 25,65 25,55 C 25,50 27,45 32,43 C 37,41 42,43 45,45 C 48,47 50,50 50,55 Z',
    length: 5.513,
    corners: 20,
    firstGP: 2012,
    raceDate: '2024-10-20',
    lapRecords: [
      { driverName: 'Charles Leclerc', team: 'Ferrari', time: '1:36.169', year: 2019 }
    ]
  },
  {
    id: 'mexico',
    name: 'Autódromo Hermanos Rodríguez',
    country: 'Mexico',
    // Famous stadium section
    trackPath: 'M 30,30 C 50,30 60,40 60,50 L 60,70 C 60,80 50,85 40,85 C 30,85 25,80 25,70 L 25,45 C 25,35 30,30 40,30 Z',
    length: 4.304,
    corners: 17,
    firstGP: 1963,
    raceDate: '2024-10-27',
    lapRecords: [
      { driverName: 'Valtteri Bottas', team: 'Mercedes', time: '1:17.774', year: 2021 }
    ]
  },
  {
    id: 'brazil',
    name: 'Autódromo José Carlos Pace',
    country: 'Brazil',
    // Interlagos with Senna S
    trackPath: 'M 25,35 C 45,35 55,45 55,55 L 55,75 C 55,85 45,90 35,90 C 25,90 20,85 20,75 L 20,50 C 20,40 25,35 35,35 Z',
    length: 4.309,
    corners: 15,
    firstGP: 1973,
    raceDate: '2024-11-03',
    lapRecords: [
      { driverName: 'Valtteri Bottas', team: 'Mercedes', time: '1:10.540', year: 2018 }
    ]
  },
  {
    id: 'las_vegas',
    name: 'Las Vegas Strip Circuit',
    country: 'United States',
    // High-speed street circuit
    trackPath: 'M 30,30 L 70,30 C 75,30 75,35 70,35 L 60,35 C 55,35 55,40 60,40 L 70,40 C 75,40 75,45 70,45 L 40,45 C 35,45 35,50 40,50 L 60,50 C 65,50 65,55 60,55 L 30,55 C 25,55 25,30 30,30 Z',
    length: 6.201,
    corners: 17,
    firstGP: 2023,
    raceDate: '2024-11-23',
    lapRecords: [
      { driverName: 'Max Verstappen', team: 'Red Bull', time: '1:35.490', year: 2023 }
    ]
  },
  {
    id: 'qatar',
    name: 'Lusail International Circuit',
    country: 'Qatar',
    // Fast flowing layout
    trackPath: 'M 25,35 C 45,35 55,45 55,55 L 55,75 C 55,85 45,90 35,90 C 25,90 20,85 20,75 L 20,50 C 20,40 25,35 35,35 Z',
    length: 5.380,
    corners: 16,
    firstGP: 2021,
    raceDate: '2024-12-01',
    lapRecords: [
      { driverName: 'Max Verstappen', team: 'Red Bull', time: '1:24.180', year: 2023 }
    ]
  },
  {
    id: 'abu_dhabi',
    name: 'Yas Marina Circuit',
    country: 'United Arab Emirates',
    // Modern layout with hotel section
    trackPath: 'M 30,30 C 50,30 60,40 60,50 L 60,70 C 60,80 50,85 40,85 C 30,85 25,80 25,70 L 25,45 C 25,35 30,30 40,30 Z',
    length: 5.281,
    corners: 16,
    firstGP: 2009,
    raceDate: '2024-12-08',
    lapRecords: [
      { driverName: 'Max Verstappen', team: 'Red Bull', time: '1:26.103', year: 2021 }
    ]
  }
];