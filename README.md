
# IT313 Laboratory 6: Student Directory Viewer

## Project Description

The Student Directory Viewer is a mobile application developed using React Native and Expo. It allows academic advisers to view and search for students who need academic advising.

The application displays student profiles, including their photos, names, and year levels. It also allows advisers to flag students who need advising.

## Objectives

- Create a student directory using React Native core components.
- Display student information using View, Text, and Image.
- Implement a scrollable student list using ScrollView.
- Add a search feature using TextInput.
- Handle user interaction using Pressable.

## Component Structure

### StudentCard

The StudentCard component displays an individual student's information. It receives the student's ID, name, year level, photo URL, flagged status, and toggle function through props.

### StudentDirectory

The StudentDirectory component manages the student data and search query using React state. It filters students based on the search input and displays each student using the StudentCard component.

## React Native Core Components

| Component | Purpose |
|---|---|
| View | Organizes the layout of the application. |
| Text | Displays student information and labels. |
| Image | Displays student profile photos. |
| ScrollView | Allows users to scroll through the student list. |
| TextInput | Accepts the search query. |
| Pressable | Allows users to flag or unflag students. |

## Features

1. Displays five student profiles.
2. Searches students by name.
3. Shows student photos and year levels.
4. Allows advisers to flag and unflag students.
5. Updates the flagged student count.
6. Displays a message when no students match the search.

## Installation and Setup

### Requirements

- Node.js
- Expo Go
- Visual Studio Code

### How to Run

1. Open the project folder in Visual Studio Code.
2. Open the terminal.
3. Install the required packages:

   npm install

4. Start the Expo development server:

   npx expo start

5. Scan the QR code using Expo Go to run the application.

## Developer

Shahanna Moreno

IT313 - Mobile Programming

Laboratory 6: React Native Core Components in Action
