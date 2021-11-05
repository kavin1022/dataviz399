# DataViz399

This project is a software application with different dashboard interfaces for individuals/clinicians to get the visual representations of health data. It pulls data from a dataset based on the input received, and display the data which is easy to comprehend. 

## Installation

You'll need the latest LTS version of Node from https://nodejs.org/en/



All following command are run with Powershell (Windows), Terminal (Linux), and Terminal (MacOS)

### Method 1 - Script Files

This Github repo comes with two prewritten Powershell script file for Windows that installs and launch the application automatically. 

Please run **install.ps1** by right clicking on the file and then selecting "run with Powershell" first to install the dependencies, do not close the window while the installation are still in progess, once the installation is completed the window will close automatically.

Once the dependency are installed, rightclick on **start.ps1** and select "run with Powershell" to start the server and client. 

### Method 2 - PowerShell/Terminal

If you're installing this application for the first time, please run

```bash
npm install
```
in both the Frontend and Backend folder.

To start the application, run the following command in Powershell or Terminal.

```bash
npm run server
```
in the Backend folder
```bash
npm run start
```
in the Frontend folder

## Learn More

You can learn more about the requirement and description of this project here:

https://github.com/kavin1022/dataviz399/blob/main/Wearable%20data%20visualization.pdf

## Technologies Used

MongoDB, Express, Node, React, ChartJS, MaterialUI
