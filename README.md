# My Portfolio Application

## About

My personal portfolio website, showcasing my skills, experience, and projects. Built using React + TypeScript and hosted as PWA on Vercel. 

## Development
>**Note**\
> I was using bun as javascript runtime, but node.js should also work, so feel free to test both bun and npm.

### Install all dependencies:
```
bun install
```

### Run the development server:
```
bun run dev
```

### Change personal data
All the personal information about job experience, skills and certifications is stored and loaded from here: `src/assets/portfolio.json`.
You can modify this file as you desire.

### Loading own GitHub repositories
The projects are loaded from the GitHub API. To make this work, you would have to add a `.env` file filled with an environment variable called `VITE_API_TOKEN` that contains your GitHub Access Token.

## Technologies

 - React + TypeScript
 - Tailwind CSS
 - Vite + Vite PWA Plugin
 - Bun

## Icons

FontAwesome + [SimpleIcons](https://github.com/simple-icons/simple-icons)