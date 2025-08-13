import requests
from bs4 import BeautifulSoup
import json
from pathlib import Path

def fetch_track_data():
    # Base URL for F1 website
    base_url = "https://www.formula1.com/en/racing/2024"
    
    # Headers to mimic a browser request
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    try:
        # Fetch the main racing page
        response = requests.get(f"{base_url}.html", headers=headers)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find all race links
        race_links = soup.find_all('a', class_='race-hub-link')
        
        track_data = {}
        
        for link in race_links:
            race_url = link.get('href')
            if not race_url:
                continue
                
            # Fetch individual race page
            race_response = requests.get(f"https://www.formula1.com{race_url}", headers=headers)
            race_response.raise_for_status()
            
            race_soup = BeautifulSoup(race_response.text, 'html.parser')
            
            # Extract track information
            track_info = {
                'name': race_soup.find('h1', class_='circuit-name').text.strip(),
                'country': race_soup.find('span', class_='country-name').text.strip(),
                'length': race_soup.find('span', class_='circuit-length').text.strip(),
                'lap_record': {
                    'time': race_soup.find('span', class_='lap-record-time').text.strip(),
                    'driver': race_soup.find('span', class_='lap-record-driver').text.strip(),
                    'year': race_soup.find('span', class_='lap-record-year').text.strip()
                }
            }
            
            # Extract track layout SVG
            track_svg = race_soup.find('svg', class_='circuit-layout')
            if track_svg:
                track_info['svg_path'] = track_svg.find('path')['d']
            
            track_data[track_info['name']] = track_info
            print(f"Fetched data for {track_info['name']}")
            
        # Save to JSON file
        output_path = Path('../src/data/track_data.json')
        with open(output_path, 'w') as f:
            json.dump(track_data, f, indent=2)
            
        print("Track data saved successfully!")
        
    except Exception as e:
        print(f"Error fetching track data: {e}")

if __name__ == '__main__':
    fetch_track_data()
