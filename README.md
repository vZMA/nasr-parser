# nasr-parser

# Node Setup

This will require you to install [Node.JS](https://nodejs.org/en/download/).

# Usage
1. Get "current" 28-day NASR subscription data from FAA [here] (https://www.faa.gov/air_traffic/flight_info/aeronav/aero_data/NASR_Subscription/) (download entire file as zip).
1. Unzip, and place _ALL CONTENTS_ in the `data-in` folder.
1. To generate data for sector file, run `npm run sct2` from the command line.
1. Find output data in the `data-out` folder.
