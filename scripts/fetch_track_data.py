import fastf1
import json
from pathlib import Path

# Enable caching
fastf1.Cache.enable_cache('cache')

def get_track_data(year, gp_name):
    # Load the session
    session = fastf1.get_session(year, gp_name, 'Q')  # Using qualifying for best lap times
    session.load()
    
    # Get fastest lap
    fastest_lap = session.laps.pick_fastest()
    
    # Get track info
    track_info = {
        'name': session.event['EventName'],
        'country': session.event['Country'],
        'circuit_name': session.event['CircuitName'],
        'length': session.event.get('CircuitLength', 0),
        'fastest_lap': {
            'time': str(fastest_lap['LapTime']),
            'driver': fastest_lap['Driver'],
            'team': fastest_lap['Team'],
            'year': year
        }
    }
    
    return track_info

def main():
    # 2024 races to fetch
    races = [
        ('Bahrain', 2023),  # Using 2023 data as 2024 not available yet
        ('Saudi Arabia', 2023),
        ('Australia', 2023),
        ('Japan', 2023),
        ('China', 2019),  # Last race before COVID
        ('Miami', 2023),
        ('Monaco', 2023),
        ('Spain', 2023),
        ('Canada', 2023),
        ('Austria', 2023),
        ('Great Britain', 2023),
        ('Hungary', 2023),
        ('Belgium', 2023),
        ('Netherlands', 2023),
        ('Italy', 2023),
        ('Singapore', 2023),
        ('United States', 2023),
        ('Mexico', 2023),
        ('Brazil', 2023),
        ('Las Vegas', 2023),
        ('Qatar', 2023),
        ('Abu Dhabi', 2023)
    ]
    
    track_data = {}
    
    for gp_name, year in races:
        try:
            print(f"Fetching data for {gp_name} {year}...")
            track_data[gp_name] = get_track_data(year, gp_name)
        except Exception as e:
            print(f"Error fetching data for {gp_name}: {e}")
    
    # Save to JSON file
    output_path = Path('../src/data/track_data.json')
    with open(output_path, 'w') as f:
        json.dump(track_data, f, indent=2)
    
    print("Track data saved to track_data.json")

if __name__ == '__main__':
    main()
