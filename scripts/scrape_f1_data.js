import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CIRCUITS_2024 = [
  {
    name: 'Bahrain International Circuit',
    country: 'Bahrain',
    url: 'https://www.formula1.com/en/racing/2024/Bahrain.html',
    svgPath: 'M 20,50 C 30,50 35,40 45,40 L 65,40 C 75,40 80,45 80,50 C 75,50 70,55 65,55 L 45,55 C 35,55 30,50 20,50 Z',
    length: 5.412,
    corners: 15,
    lapRecord: { time: '1:31.447', driver: 'Pedro de la Rosa', team: 'McLaren', year: 2005 }
  },
  {
    name: 'Jeddah Corniche Circuit',
    country: 'Saudi Arabia',
    url: 'https://www.formula1.com/en/racing/2024/Saudi_Arabia.html',
    svgPath: 'M 30,30 C 50,30 60,35 60,45 L 60,65 C 60,75 55,80 45,80 L 35,80 C 25,80 20,75 20,65 L 20,45 C 20,35 25,30 35,30 Z',
    length: 6.174,
    corners: 27,
    lapRecord: { time: '1:30.734', driver: 'Lewis Hamilton', team: 'Mercedes', year: 2021 }
  },
  {
    name: 'Albert Park Circuit',
    country: 'Australia',
    url: 'https://www.formula1.com/en/racing/2024/Australia.html',
    svgPath: 'M 20,40 C 30,40 35,35 45,35 L 65,35 C 75,35 80,40 80,50 C 75,50 70,55 65,55 L 45,55 C 35,55 30,50 20,50 Z',
    length: 5.278,
    corners: 14,
    lapRecord: { time: '1:20.235', driver: 'Sergio Perez', team: 'Red Bull', year: 2023 }
  },
  {
    name: 'Suzuka International Racing Course',
    country: 'Japan',
    url: 'https://www.formula1.com/en/racing/2024/Japan.html',
    svgPath: 'M 20,40 C 30,40 35,30 45,30 L 65,30 C 75,30 80,40 80,50 C 75,50 70,60 60,60 L 40,60 C 30,60 25,50 25,40 C 30,40 35,45 45,45 L 55,45 C 65,45 70,40 70,35 Z',
    length: 5.807,
    corners: 18,
    lapRecord: { time: '1:30.983', driver: 'Lewis Hamilton', team: 'Mercedes', year: 2019 }
  },
  {
    name: 'Shanghai International Circuit',
    country: 'China',
    url: 'https://www.formula1.com/en/racing/2024/China.html',
    svgPath: 'M 20,40 C 40,40 50,30 60,30 C 70,30 80,40 80,50 C 80,60 70,70 60,70 C 50,70 40,60 40,50 C 40,45 45,40 50,40 L 60,40 C 65,40 70,45 70,50 C 70,55 65,60 60,60 L 50,60 C 45,60 40,55 40,50 Z',
    length: 5.451,
    corners: 16,
    lapRecord: { time: '1:32.238', driver: 'Michael Schumacher', team: 'Ferrari', year: 2004 }
  },
  {
    name: 'Miami International Autodrome',
    country: 'United States',
    url: 'https://www.formula1.com/en/racing/2024/Miami.html',
    svgPath: 'M 30,30 C 50,30 60,40 60,50 L 60,60 C 60,70 50,80 40,80 L 30,80 C 20,80 20,70 30,70 L 40,70 C 45,70 50,65 50,60 L 50,50 C 50,45 45,40 40,40 L 30,40 C 20,40 20,30 30,30 Z',
    length: 5.412,
    corners: 19,
    lapRecord: { time: '1:29.708', driver: 'Max Verstappen', team: 'Red Bull', year: 2023 }
  }
  // More circuits to be added...
];

// Save the data to a JSON file
const outputPath = path.join(__dirname, '../src/data/track_data.json');
fs.writeFileSync(outputPath, JSON.stringify(CIRCUITS_2024, null, 2));

console.log('Track data saved successfully!');
