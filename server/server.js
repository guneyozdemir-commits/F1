import express from 'express';
import cors from 'cors';
import { spawn } from 'child_process';
import cron from 'node-cron';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Function to run the Python scraper
const runScraper = () => {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python3', ['../scripts/f1_scraper.py'], {
      cwd: path.join(__dirname, '..', 'scripts')
    });

    pythonProcess.stdout.on('data', (data) => {
      console.log(`Scraper output: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error(`Scraper error: ${data}`);
    });

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        console.log('Scraper completed successfully');
        resolve();
      } else {
        console.error(`Scraper process exited with code ${code}`);
        reject(new Error(`Process exited with code ${code}`));
      }
    });
  });
};

// Schedule scraper to run every 6 hours
cron.schedule('0 */6 * * *', async () => {
  console.log('Running scheduled scrape...');
  try {
    await runScraper();
    console.log('Scheduled scrape completed');
  } catch (error) {
    console.error('Error in scheduled scrape:', error);
  }
});

// API endpoint to get race data
app.get('/api/races', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, '..', 'src', 'data', 'race_schedule.json');
    const data = await fs.readFile(dataPath, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading race data:', error);
    res.status(500).json({ error: 'Failed to fetch race data' });
  }
});

// Run initial scrape when server starts
runScraper().catch(console.error);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
