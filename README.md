# Sandesh Gurung's React Portfolio

## Introduction

Hello! I'm Sandesh Gurung, a passionate web developer with expertise in React. This repository contains the code for my React portfolio, developed as part of an assignment to showcase my skills and projects to potential employers.

## Technologies Used

- React
- React Router
- JavaScript
- HTML
- CSS

## Design

For the design of my portfolio, I focused on creating a modern and professional look while adhering to mobile-first principles. I carefully selected a color palette to ensure a cohesive and visually appealing appearance throughout the site. The font size is optimized for readability, and the colors are chosen to prevent eye strain.

## Components

### App

- Top-level component responsible for rendering all child components.

### Header

- Rendered across every page component of the site.
- Contains a Navbar for easy navigation.

### Home Page

- Welcome landing page featuring:
  - My name
  - A headshot or avatar
  - My brand statement
  - Indication that it's my portfolio site

### Projects Page

- Renders six instances of the Project component dynamically.
- Project details are stored in a JSON file and imported into the project.

### Project

- Reusable component that renders project details based on JSON data.
- Utilizes Router props to render the correct project based on user selection.
- Renders:
  - Project title
  - Link to deployed version
  - Link to GitHub repository
  - GIF or screenshot of the deployed application

### Contact Page

- Includes contact information:
  - Email address
  - Link to PDF version of my CV
  - Link to my GitHub profile
- Features a contact form for handling events.

## How to Run

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the development server using `npm run dev`.
5. Access the portfolio site in your browser at `http://localhost:3000`.

## Social Media Presence

### GitHub

I have updated my GitHub profile with pinned repositories featuring the projects showcased in this portfolio. You can find my GitHub profile [here](https://github.com/Sandesh2034/React-Portfolio).

## Feedback

I welcome any feedback or suggestions for improvement. Feel free to reach out to me via email at [sandesh2034@gmail.com](mailto:sandesh2034@gmail.com).

Thank you for visiting my portfolio! 🚀
