# Gender Responsive Mechanism - React Frontend

A modern, responsive React application promoting gender equality and responsive mechanisms across all sectors.

## Features

- 🏠 **Landing Page** - Engaging hero section with statistics and visualizations
- 📋 **Campaigns** - Browse and filter active gender equality campaigns
- 📚 **Resources** - Access tools, guides, and materials library
- 💬 **Feedback Form** - Share feedback and suggestions
- 📊 **Data Visualization** - Interactive charts and statistics cards
- 📱 **Fully Responsive** - Works seamlessly on all devices

## Technology Stack

- **Frontend:** React 18.2.0, React Router DOM 6.20.0
- **Data Visualization:** Recharts 2.10.3
- **Backend/Server:** Node.js with Express 4.18.2
- **Data:** Local JSON files served via Express API

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (v6 or higher) - comes with Node.js

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Application

#### Development Mode (with React dev server)
```bash
npm start
# or
npm run dev
```
This starts the React development server with hot-reload at `http://localhost:3000`

#### Production Mode (with Node.js/Express server)
```bash
# Build the React app first
npm run build

# Start the Express server
npm run server
```

Or run both in one command:
```bash
npm run start:prod
```

The app will be available at `http://localhost:3000`

### API Endpoints

The Express server provides the following API endpoints:

- `GET /api/health` - Server health check
- `GET /api/campaigns` - Get campaigns data
- `GET /api/resources` - Get resources data
- `GET /api/statistics` - Get statistics data

### Environment Variables

You can configure the server port using environment variables:

```bash
PORT=5000 npm run server
```

## Project Structure

```
gender-responsive-mechanism/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── LandingPage.js
│   │   ├── Campaigns.js
│   │   ├── Resources.js
│   │   ├── Feedback.js
│   │   ├── StatisticsCards.js
│   │   ├── GenderDistributionChart.js
│   │   └── CampaignProgressChart.js
│   ├── data/
│   │   ├── campaigns.json
│   │   ├── resources.json
│   │   └── statistics.json
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── server.js (Node.js/Express server)
├── package.json
└── README.md
```

## Data

All data is stored in local JSON files:
- `src/data/campaigns.json` - Campaign information
- `src/data/resources.json` - Resource library data
- `src/data/statistics.json` - Statistics and metrics

You can modify these files to update the content without code changes.

## Features in Detail

### Landing Page
- Hero section with call-to-action buttons
- Statistics cards showing key metrics
- Interactive charts (Pie chart and Bar chart)
- Impact metrics showcase
- Call-to-action section

### Campaigns
- Grid view of all campaigns
- Category filtering
- Campaign status indicators
- Participant and date information

### Resources
- Search functionality
- Type-based filtering
- Download count display
- Resource categorization

### Feedback Form
- Multi-field feedback collection
- Category and rating selection
- Anonymous submission option
- Form validation
- Success notification

## Customization

### Colors
The main color scheme uses a purple gradient. You can modify colors in:
- Component CSS files
- CSS custom properties (variables)

### Content
Edit the JSON files in `src/data/` to update:
- Campaign details
- Resources
- Statistics and metrics

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions, issues, and feature requests are welcome!

