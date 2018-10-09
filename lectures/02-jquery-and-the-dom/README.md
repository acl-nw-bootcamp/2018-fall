## **Week 1: The View**
# Class 2: jQuery and the DOM + some RWD

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives and Stand Up
1. Code Review
1. Agile & MVC
1. jQuery
1. Lab Prep

### Announcements
* Questions? Resources to share?

<hr></hr>

## Learning Objectives
- Describe the different parts of the MVC design pattern.
- Include the jQuery library using a CDN or including it locally.
- Describe the pros and cons of using jQuery.
- Perform DOM manipulations using `append`, `remove`, `clone`, `data`, `html`, `text`.
- Traverse the DOM tree, with `parents`, `children`, `find`.
- Differentiate between certain methods & the process of chaining.
- Include JavaScript files accounting for dependencies by loading `<script>` tags in order.


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| <li>Wrote our scripts with vanilla JavaScript</li><li>Retrieved elements from the DOM using the document object's methods</li><li>Manipulated the DOM using the document object's methods</li></ul> | <ul><li>Write JavaScript with the help of the jQuery library</li><li>Retrieve elements from the DOM using jQuery methods</li><li>Manipulate the DOM using jQuery methods</li></ul> |

<hr></hr>

## Notes

#### Topic 1 - Agile and MVC
* Overview
  * Agile Web Development
    * [Infographic](https://toggl.com/developer-methods-infographic)
    * Compared with the ‘Waterfall’ process
    * Importance of stand-ups and pair programming (driver & navigator roles) in relation to this course
    * Some ways to implement agile:
      * Daily Sprints
      * ‘MVP’ & ‘Stretch’ Goals
      * User (or project stakeholder) stories & Developer stories
      * Iterative Development
      * Agile buzzwords (backlog, sprint demos, retrospective, etc)
  * MVC
    * Why do developers care about separating these concerns?
    * What are some other architectural design patterns?
    * What does each MVC layer do?
    * How does each MVC layer tie together in a modern web application?
    * Additional resources:
      * [MVC Architecture ](https://developer.chrome.com/apps/app_frameworks)
      * [Learning JavaScript Design Patterns: MVC](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvcmvp)

#### Topic 2 - DOM & jQuery / Assignment Prep
* Overview
  * Including jQuery from CDN/locally sourced
  * Vanilla DOM selection & manipulation review
  * Basic jQuery syntax
  * Waiting for DOM load using `$(document).ready()`;
  * Basic CSS selector review - how this works with jQuery selection
    * Each jQuery selection attempts to return a set of matched elements, and if it cannot, will return an empty array-like object.
  * Chaining methods
    * Why are we able to chain in jQuery?
      * Each method returns a jQuery object
  * Understanding the "getter" and “setter” differences between single and double parameter jQuery method calls
    * Ex:`$(‘.el’).data(‘some-data-attribute’)`- gets the data
    * Ex:`$(‘.el’).data(‘some-data-attribute’, ‘some val’)`- sets the data


## Readings
* Javascript & jQuery: pages 293-325
  * (Context: 293-301; Essential: 310-325; Reference: 302-309)

## Lab
[Lab: jQuery & DOM](https://github.com/acl-nw-bootcamp/lab-02-jquery)
