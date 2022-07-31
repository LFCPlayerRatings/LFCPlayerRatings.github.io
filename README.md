# Liverpool FC Player Ratings

This repository hosts the Liverpool FC Player Ratings website, updated
each match with a new survey and, subsequently, their results. Using 
Google Colab and Google Apps Script we create a Google Form; process 
responses; create the results; and upload them. This code is linked below
and/or contained within the repo

### The Website

The website is written in HTML/JS/CSS with Bootstrap and chart.js,
encompassing an archive of results over the past 4 years as well as the
current seasons ongoing stats and results.

### Creating the Google Form

https://colab.research.google.com/drive/1rENTVn1bmrlPnOSpQywKjFIG30333pbR?usp=sharing

The Google Form is created using Google Apps Script through a Jupyter 
Notebook which can be run in any browser. It requires authorisation across
a number of scopes at the start, and will then proceed to create a Form and
Responses Google Sheet by pulling data from Livescore.

The Apps Script file is available here:

https://script.google.com/d/1sQ6p8F28eLTCEHDrMTqegrz4b4S5Q5HFt9TN3jId2YDAJ97uZfy9Xf15/edit?usp=sharing

I originally wrote the pulling data from Livescore code separately,
available here if it's useful for anyone:
https://colab.research.google.com/drive/1SC1DhHSUhH2OttPkWP3yPrB6snaNtH9D?usp=sharing

### Creating the Results

https://colab.research.google.com/drive/1R987dGXZka0NW-T3qtxgt1OHk0T8Loi4?usp=sharing

The results are created using a Jupyter Notebook which uses the Google
Sheets and Slides APIs, as well as imgur's API to host the result images.
We do follow a Slide template, available here:

https://docs.google.com/presentation/d/1cXdyD_PPDryT3hukyk4dVQ9nJnWBlCPIaYy7A5ZWMQs/edit?usp=sharing

As well as having results sheets and season sheets, examples of which
are available here:

https://docs.google.com/spreadsheets/d/1mhl8kjiCYMx13M_ADLUqxcCOVUqZMdgWl0bjTaFv-XE/edit?usp=sharing

https://docs.google.com/spreadsheets/d/1nhCCLGeu13BVKDjYkeZoApVxuYNitMfKeEPw6oejfig/edit?usp=sharing

### I hope you enjoy the website!
### Luke