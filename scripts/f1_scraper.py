import requests
import json
from datetime import datetime
import os
import logging

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('f1_scraper.log'),
        logging.StreamHandler()
    ]
)

class F1Scraper:
    def __init__(self):
        self.url = "https://ergast.com/api/f1/2024.json"
        self.data_file = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'src', 'data', 'race_schedule.json')

    def scrape_races(self):
        try:
            logging.info("Starting race schedule scraping")
            response = requests.get(self.url)
            response.raise_for_status()
            
            data = response.json()
            races = data['MRData']['RaceTable']['Races']
            
            # Process and save the data
            self.save_race_data(races)
            logging.info("Race scraping completed successfully")

        except Exception as e:
            logging.error(f"Error during scraping: {e}")

    def save_race_data(self, races):
        try:
            # Sort races by date
            races.sort(key=lambda x: x['date'])
            
            # Create data directory if it doesn't exist
            os.makedirs(os.path.dirname(self.data_file), exist_ok=True)
            
            # Save to JSON file
            with open(self.data_file, 'w') as f:
                json.dump({'races': races}, f, indent=2)
            logging.info(f"Race data saved to {self.data_file}")
        except Exception as e:
            logging.error(f"Error saving race data: {e}")

if __name__ == "__main__":
    scraper = F1Scraper()
    scraper.scrape_races()