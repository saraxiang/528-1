# CharTracker

This is a custom character tracker web application for role-playing games, similar in look and feel to the Character creator on D&DBeyond.com. The application allows players to create and track the characters of their worlds.

## Project Overview

CharTracker is a full-stack web application built with Next.js, Tailwind CSS, and PostgreSQL. It provides the following features:
- Create a character with fields for Character Name, Race, Class, Abilities, Description, and Equipment.
- View a dashboard for previously created characters with a dropdown to select characters.
- Save all character data in a PostgreSQL database.
- Navigate using a navbar with links to "Dashboard" and "Create a Character".
- A footer with a simple message.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd chartracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the PostgreSQL database:**
   - Create a new PostgreSQL database and user.
   - Update the `.env.local` file with the database credentials.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

## Usage Guidelines

- **Create a Character:**
  - Navigate to the "Create a Character" page using the navbar.
  - Fill in the fields for Character Name, Race, Class, Abilities, Description, and Equipment.
  - Submit the form to create a new character.

- **View Dashboard:**
  - Navigate to the "Dashboard" page using the navbar.
  - Select a character from the dropdown to view its details.

## Deployment

The application is deployed on Vercel. You can access the deployed application here:
- **Live Application:** [CharTracker](https://chartracker-bsrv8xf6t-saraxiangs-projects.vercel.app)

## Learn More

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
