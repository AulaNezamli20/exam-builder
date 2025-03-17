# 📘 Project Documentation

## 📌 Overview

This project is a Next.js-based application that allows users to create and manage different types of questions. The questions are stored in `localStorage`, and users can add new questions of various types:

- **Text Answer**
- **True/False**
- **One Choice**

## 🛠 Technologies Used

- **Next.js** (React Framework)
- **Tailwind CSS** (for styling)
- **LocalStorage** (for storing questions temporarily)
- **React Hooks** (`useState`, `useRouter`)

## 📁 Project Structure

```
project-root/
│── app/
│   ├── components/       # Reusable UI components
│   ├── add-question/     # Page for adding a new question
│── README.md            # Project documentation
│── package.json         # Project dependencies
│── next.config.js       # Next.js configuration
```

## 🚀 Features

- **Add new questions** with multiple types.
- **Store and retrieve questions** from `localStorage`.
- **Preview a question** before submitting an answer.
- **Client-side navigation** using Next.js' `useRouter`.

## 📜 Key Files & Their Purpose

### `app/add-question/page.jsx`

- Renders a form to add a new question.
- Supports different question types.
- Saves questions to `localStorage`.
- Uses reusable components (`InputField`, `OptionsInput`, `Button`, etc.).

### `app/components/PreviewModal.jsx`

- Displays a preview of a selected question.
- Supports rendering different question types.
- Provides user interaction for answering the question.

### `app/components/Button.jsx`

- A reusable button component used across the project.
- Accepts `label`, `color`, and `onClick` props.

### `app/components/CorrectAnswerInput.jsx`

- Renders an input field for the correct answer.
- Updates the correct answer value using setCorrectAnswer when the text changes.
- correctAnswer: The value of the correct answer being entered.
- setCorrectAnswer: A function to update the correct answer value.

### `app/components/InputField.jsx`

- Renders a reusable input field with a label.
- Updates the input value using the onChange function.
- label: The text label displayed above the input field.
- value: The current value of the input field.
- onChange: A function to handle the change of input value.
- required: A boolean indicating whether the input field is required.
- type: The type of input (e.g., "text", "number", "email").

### `app/components/OptionList.jsx`

- Renders a list of options as radio buttons for users to select from.
- Displays each option with a radio button, and when selected, calls the handleSelection function with the selected option and the correctAnswer.
- options: An array of options that the user can select from.
- handleSelection: A function to handle the selection of an option and compare it with the correctAnswer.
- correctAnswer: The correct answer for comparison when the user selects an option.
- Component Purpose: Displays a list of radio buttons where users can select an option, and triggers the handleSelection function when an option is selected.

### `app/components/OptionsInput.jsx`

- Renders input fields for multiple options, allowing the user to edit them.
- Each option is displayed in a separate input field, and updates are handled by modifying the specific option in the options array.
- options: An array of option values that the user can modify..
- setOptions: A function to update the options array when a user modifies one of the options.
- Component Purpose: Renders a list of input fields for the options, allowing users to edit and update each option in the list. Each change triggers the setOptions function to update the array.

### `app/components/QuestionList.jsx`

- Displays a list of created questions and allows users to preview, edit, and delete them.
- Supports functionality for answering questions and checking if the answer is correct.
- Provides the ability to edit existing questions and save updates.
- Utilizes PreviewModal for previewing questions and their answers.
- Props:
  questions: The list of questions to be displayed.
  setQuestions: A function to update the questions state.

- State:
  previewQuestion: Stores the question currently being previewed.
  userAnswer: Stores the user's selected or typed answer.
  answerResult: Stores the result of the user's answer (Correct/Incorrect).
  editIndex: The index of the question being edited.
  editedQuestion: The question object being edited.

### `app/components/TextAnswerInput.jsx`

- Renders an input field for the user to type their answer to a text-based question.
- Updates the userAnswer state with the value entered by the user.
- Props:
  userAnswer: The current answer entered by the user.
  handleTextAnswer: A function to handle changes to the answer input.

### `app/components/TrueFalseInput.jsx`

- Renders a radio button input for selecting between "True" or "False" options.
- Updates the correctAnswer state based on the selected value.
- props:
  correctAnswer: The current correct answer value, either "True" or "False".
  setCorrectAnswer: A function to update the correct answer when a user selects a new option.
  label: The text label to display next to the radio button (e.g., "True" or "False").
  value: The value for the radio button, typically "True" or "False".

### `app/components/TrueFalseOptions.jsx`

- Renders radio button options for selecting between "True" or "False" answers.
- Calls the handleSelection function to check whether the selected answer matches the correctAnswer.
- props:
  handleSelection: A function to handle the answer selection, comparing the selected value with the correct answer.
  correctAnswer: The correct answer, either "true" or "false".
- Component Purpose:
  Renders two radio buttons for selecting "True" or "False" as answers. When the user selects one of these options, the handleSelection function is called to compare the selected answer with the correct one. This component is useful for True/False type questions.

## 📌 Summary

This project provides an interface for creating and managing different types of questions using localStorage. It is built with Next.js and Tailwind CSS, leveraging React Hooks for state management and navigation.
