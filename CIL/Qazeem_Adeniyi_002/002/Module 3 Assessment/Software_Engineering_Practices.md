# SOME SOFTWARE ENGINEERING PRACTICES FOR DATA ENGINEER
Everybody codes differently. There are no hard and fast rules of how you must approach a problem, how you should implement it, however there are some certain standards. Often, you will be working on a team, or might be working in an open source project where many others will work on the same program with you. Your code might even be used as production code. So there needs to be a certain standards to follow.

Data Engineers might come from different backgrounds. While working with other software engineers, you might need to adopt some common coding practices that can help you to become a better developer and work well with each other. In this article, I will discuss some of these common practices.

## Write Clean Code
Writing clean code means writing readable, simple, and concise code. Clean code is the foundation of a script that is easy to maintain.
Believe me, you’ll make the life of your teammates easier by writing code that is easy to understand. Simple is better than complex, so don’t write complex code that even you might struggle to understand.

## Use Meaningful Variable Names
Make your variable names explanatory and descriptive. A variable named end isn't as explanatory as end_time. A boolean variable single isn’t as descriptive as is_single.
Don’t use abbreviations in a variable name that no one will understand (e.g.,t andc).
Don’t write too long variable names that no one will remember.
Use indentation and whitespaces properly: There are many conventions here like using four spaces for indentation or separating sections with a blank line. They might be hard to remember; fortunately, IDEs like Pycharm will suggest you follow such conventions and show how to do it.

## Write Modular Code
Modular code means writing code that can be separated into functions and modules. A program that can be broken into modules helps when debugging. As a program grows in size, it’s a good practice to split your code into modules. This lets you easily pinpoint the source of errors.
  Also, modular code will help you avoid repetition and write efficient and reusable code.

Here‘s some advice to start writing modular code:
Don’t repeat yourself: If you’re using the same function/method to accomplish a single task, consider creating a function or a for loop instead.

## Optimize Your Code
Writing code that works is good, but you know what’s better? Writing efficient code that runs fast and consumes little memory and storage. This is why you should optimize your code (even if it already does the job).

## Test Your Code
Nowadays employers are looking for data scientists who are able to prepare their code for an industry setting; this is why you need to test your code.
There are many problems that can occur in a data science process that aren’t as easy to detect as an error that crashes a program. Your code might run just fine with you unaware that some values were encoded incorrectly. This is why it’s a good practice to test your code in order to avoid unexpected results and have confidence in the final output.
There are different ways to test your code in Python. You could use the console to test your code, but you’ll have to do most of the job manually, which isn’t ideal when running a large number of unit tests.

## Refactor Your Code
Refactoring aims at reorganizing the internal structure of the code without altering its functionalities. It’s usually done on a working (but still not fully organized) version of the code. It helps de-duplicate functions, reorganize the file structure, and add more abstraction.

## Use GIT Or Any Other Version Control System
 In my personal experience, using GIT + Github helped me improve my coding skills and better organize my projects. Since I used it while collaborating with friends and/or colleagues, it made me stick to standards I didn’t obey to in the past.
There are lots of benefits to using a version control system, be it in data science or software development.
- Keeping track of your changes
- Rolling back to any previous version of the code
- Efficient collaboration between team members via merge and pull requests
- Increase of code quality
- Code review
- Assigning tasks to team members and monitoring their progress over time
- Platforms such as Github or Gitlab go even further and provide, among other things, Continuous Integration and Continuous Delivery hooks to automatically build and deploy your projects.


## Debugging
This is one of the most critical responsibilities of a data engineer. The ability to write code quickly is meaningless if that code is not properly debugged and/or tested. Though AI programs have extracted some of the manual nature of this process, it remains important to the role.