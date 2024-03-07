# Portfolio Website

This repository contains the code for my personal portfolio website, showcasing my projects, skills, and professional journey. Built with React, JavaScript, HTML, and CSS, the website is designed to be fully responsive, ensuring a seamless viewing experience across various devices and screen sizes. I built this website from scratch without the use of any UI libraries.

## Features

- **Responsive Design**: Adapts to screen sizes from mobile devices to desktops.
- **React Framework**: Utilizes React for efficient UI rendering and state management.
- **Dynamic Content**: JavaScript and React are used to dynamically update the content.
- **Styling**: Styled with CSS for a personalized look and feel.

## Deployment

This website is deployed using **GitHub Pages**, providing a fast and reliable hosting service directly from the GitHub repository. The deployment process is fully automated through **GitHub Actions**, ensuring that every push to the main branch triggers a deployment cycle. This automation enhances the workflow, allowing for seamless updates to the website with minimal manual intervention.

### CI/CD with GitHub Actions

The Continuous Integration and Continuous Deployment (CI/CD) pipeline is set up using GitHub Actions. Here's a brief overview of how it works:

1. **Build**: On every push to the `main` branch, GitHub Actions runs a series of commands to build the React application. This step involves installing dependencies and creating a production-ready build of the website.

2. **Deploy**: Once the build is successful and tests (if any) pass, the CI/CD pipeline deploys the website to GitHub Pages. This is achieved by pushing the build artifacts to the `gh-pages` branch or configuring GitHub Actions to deploy the `build` directory directly.

### GitHub Actions Workflow Configuration

The `.github/workflows/deploy.yml` file contains the configuration for the CI/CD pipeline.
