# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Advice-app](../advice-generator-app/src/images/Screenshots/Advice-App.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - Utility First CSS Framework

### What I learned

In trying to render the advice number in my UI (Advice #), I initially set my useEffect to:

```javascript
useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((advice) => {
        setAdvice(advice.slip.advice);
```
I eventually realised I was losing the id because I was setting the state to the inner advice key:value from my response. I reached out to the reactiflux Discord community
and was corrected to use

```javascript
setAdvice(advice.slip);
```
instead of 
```javascript
setAdvice(advice.slip.advice);
```

By doing this, I figured this would set advice to my initial state which I have as 

```javascript
const [advice, setAdvice] = useState({ id: null, advice: "" });
```

A good friend of mine explained that my initial state should be set to, after I initally set it to an empty string. 

```javascript
{ id: null, advice: "" }
```

It was important that I undersood this as in my console, I could see that each advice had an id and advice.

### Continued development

I wanted to have a go at this project as I am currently going through Jonas Schmedtmann's React course. Its a brillant course and I do recommend it. After going through a section of the course that goes through Data Fetching and effects, I wanted to test my understanding by building this project. Of course, I still feel there's more to learn and I will do so but I can feel my understanding of effects and data fetching has gotten better.

I wanted to use Tailwind as I felt it would it give me good practice to get a feel of it.
I'd been using CSS for sometime and felt it was the right time to use Tailwind.
My main resource was the Tailwind Docs.

### Useful resources
- [How to use the Fetch API with React?](https://rapidapi.com/guides/fetch-api-react) - I initially read this article to understand how to fetch my data

- [How to Fetch Data using API in React](https://www.guvi.in/blog/how-to-fetch-data-using-api-in-react/) - This helped me in helping me fetch the data using the useEffect hook. I initially used the fetch method in my hook which caused confusion for when I wanted to use the onClick handler. I realised I could create a fetch callback function to fetch and store the data. I did so by simply moving my fetch data into my handleGetAdvice function, then calling it in my useEffect

- [Tailwind Installation](https://tailwindcss.com/docs/installation) - Setting Up Tailwind

- [Tailwind Responsiveness](https://tailwindcss.com/docs/responsive-design) - Responsive Design

- [Tailwind Flex](https://tailwindcss.com/docs/flex) - Flex

- [Tailwind Min-Height](https://tailwindcss.com/docs/min-height#setting-the-minimum-height) - Min:Height

## Acknowledgments

@ReactiFlux Discord 
@MrBimWilliams