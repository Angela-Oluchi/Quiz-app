let ques = [
    {
        numb: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        answer: "<'script'>",
        options: [ 
           
            "<'script'>",
            "<'js'>",
            "<'scripting'>",
            "<'javascript'>"
        ]
    },
    {
        numb: 2,
        question: "What case is used in Javascript?",
        answer: "Camel Case" ,
        options: [
            "uppercase",
            "lowercase",
            "Paragraphing",
            "Camel Case"
        ]
    },
    {
        numb: 3,
        question: "What data type is supported by JavaScript?",
        answer:  "String",
        options: [
            "String",
            "updated data",
            "True",
            "if statement"
        ]
    },
    {
        numb: 4,
        question: " Which of the following is not JavaScript Data Types",
        answer:  "Float",
        options: [
            "Undefined",
            "Number",
            "Boolean",
            "Float"
        ]
    },
    {
        numb: 5,
        question: "Which company developed JavaScript?",
        answer:  "Netscape",
        options: [
            "Netscape",
            "Bell Labs",
            "Sun Microsystems",
            " IBM"
        ]
    },
    { 
        numb: 6,
        question: "Which of the following is correct about features of JavaScript?",
        answer: "JavaScript is a object-based scripting language.",
        options: [
            " It can not Handling dates and time.",
            "JavaScript is a object-based scripting language.",
            "JavaScript is not interpreter based scripting language.",
            "All of the above"
        ]
    },
    {
        numb: 7,
        question: "How do you call a function in Javascript",
        answer:  "myFunction()",
        options: [
            "myfunction{}",
            "myfunction[]",
            "MyFunction()",
          "myFunction()"
        ]
    },
    {
        numb: 8,
        question: "which of the following are advantages of JavaScript?",
        answer:  "All of the above",
        options: [
            "Less server interaction",
            "Increased interactivity",
            "Richer interfaces",
            "All of the above"
        ]
    },
    {
        numb: 9,
        question: "Which of the following true about Javascript?",
        answer:  "All of the above",
        options: [
            "Client-side JavaScript does not allow the reading or writing of files",
            "JavaScript cannot be used for networking applications",
            "JavaScript doesn't have any multi-threading or multiprocessor capabilities",
            "All of the above"
        ]
    },
    {
        numb: 10,
        question: "JavaScript ignores?",
        answer:  "All of the above",
        options: [
            "spaces",
            "tabs",
            "All of the above",
            "newlines"
        ]
    },
    {
        numb: 11,
        question: " Among the following, which one is a ternary operator in JavaScript?",
        answer:  "?",
        options: [
            "&:",
            "?",
            "::",
            "#"
        ]
    },
    {
        numb: 12,
        question: " What are the three important manipulations done in a for loop on a loop variable in javascript ",
        answer:  "the initialization, the test, and the update",
        options: [
            "the initialization, the test, and Incrementation",
            "the initialization, the Incrementation, and update",
            "the initialization, the test, and the update",
            " All of the above"
        ]
    },
    {
        numb: 13,
        question: "What does javascript use instead of == and !=?",
        answer:  "It uses === and !== instead",
        options: [
            "It uses equalto()",
            "It uses equals() and notequals() instead",
            "It uses === and !== instead",
            "It uses bitwise checking"
        ]
    },
    {
        numb: 14,
        question: "Among the keywords below, which one is not a statement?",
        answer:  "use strict",
        options: [
            "use strict",
            "if",
            "debugger",
            "with"
        ]
    },
    {
        numb: 15,
        question: " Which symbol is used for comments in Javascript?",
        answer:  "//",
        options: [
            "\\",
            "//",
            " \* *\ ",
            " \* */"
        ]
    },
    {
         numb: 16,
        question: " Which of them is not the looping structures in JavaScript?",
        answer:  "forwhich",
        options: [
            "forwhich",
            "dowhile",
            "for",
            "while"
        ]
    },
    {
        numb: 17,
        question: "Which is not the types of Pop up boxes available in JavaScript?",
        answer:  "Border-box",
        options: [
            "Alert",
            "Prompt",
            "Confirm",
            "Border-box"
        ]
    },
    {
        numb: 18,
        question: " what is the disadvantage of using innerHTML in JavaScript?",
        answer:  'Even if you use +=like "innerHTML = innerHTML + "html" " still the old content is replaced by html',
        options: [
            "Content can not be replaced everywhere",
            'Even if you use +=like "innerHTML = innerHTML + "html" " still the old content is replaced by html',
            " The entire innerHTML content is not re-parsed and build into elements, therefore its not slower",
           ' We can use like "appending to innerHTML"'

        ]
    },
    {
        numb: 19,
        question: "What are the two basic groups of dataypes in JavaScript?",
        answer:  "Primitive and  Reference types.",
        options: [
            "Primitive and  Reference types.",
            "True and False",
            "var and let",
            "string and number"
        ]
    },
    {
        numb: 20,
        question: ". Javascript string using double quotes is exactly the same as a string using single quotes?",
        answer:  "True",
        options: [
            "True",
            "False",
            "None of the above",
            "All of the above"
        ]
    },
    {
        numb: 21,
        question: "Which of the following function of Array object applies a function to remove and add a value at the end of an array?",
        answer:  ".pop() and  .push()",
        options: [
            ".unshift() and .shift()",
            ".pop() and  .push()",
            "console.log()",
            ".reduceRight() and .reduce()"
        ]
    },
    {
        numb: 22,
        question: "An Array is?",
        answer:  "An Object",
        options: [
            "A Data Type",
            "An Object",
            "A string",
            "A boolean"
        ]
    },
    {
        numb: 23,
        question: "Which of the following method checks if its argument is not a number?",
        answer:  "isNaN()",
        options: [
            "NaN()",
            "nonNaN()",
            "blockNaN()",
            "isNaN()"
        ]
    },
    {
        numb: 24,
        question: "JavaScript can be written __________",
        answer:  "directly into JS file and included into HTML",
        options: [
            "directly into the css file",
            "directly into HTML pages",
            "directly into JS file and included into HTML",
            "directly on the server page"
        ]
    },
    {
        numb: 25,
        question: "The pop() method of the array does which of the following task ?",
        answer:  "decrements the total length by 1",
        options: [
            "updates the element",
            "prints the first element but no effect on the length",
            " increments the total length by 1",
            "decrements the total length by 1"
        ]
    },
    {
        numb: 26,
        question: "How to get a particular value using the tagged name?",
        answer:  "getElementsbyTagName()",
        options: [
            "getElementsbyId()",
            "getElementsbyClassName()",
            "getElementsbyTagName()",
            "getTagName()"
        ]
    },
    {
        numb: 27,
        question: 'Which of the following is the correct syntax to display "Letsfindcourse" in an alert box using JavaScript?',
        answer:  "alert('Letsfindcourse');",
        options: [
           " alert('Letsfindcourse');",
          ' alert-box("Letsfindcourse")',
         ' confirm("Letsfindcourse");',
        ' msgbox("Letsfindcourse");'
        ]
    },
    {
        numb: 28,
        question:' What is the correct syntax for referring to an external script called "LFC.js"',
        answer:  '<script src="LFC.js">',
        options: [
             "<script type='LFC.js'>",
            "<script source='LFC.js'>",
           "<script src='LFC.js'>",
            "<script ref='LFC.js'>"
        ]
    },
    {
        numb: 29,
        question: "How do you create a function?",
        answer:  "Function myFunction()",
        options: [
            "Function myFunction()",
            "Function myFunction{}",
            "Function: myFunction()",
            "Function(myFunction())"
        ]
    },
    {
        numb: 30,
        question: "How do you call a function named firstName?",
        answer:  "firstName()",
        options: [
            "calling firstName()",
            "call function firstName()",
            "calling function firstname()",
            "firstname()"
        ]
    },
    {
        numb: 31,
        question: "How to write an IF statement in JavaScript?",
        answer:  "if (i == 5)",
        options: [
            "if i == 5 then",
            "if i = 5 then",
            "if (i == 5)",
            "if i = 5"
        ]
    },
    {
        numb: 32,
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answer:  "if( i != 5)",
        options: [
            "if i < > 5",
            "if i =! 5 then",
            "if (i < > 5)",
            "if( i != 5)"
        ]
    },
    {
        numb: 33,
        question: "How does a FOR loop start?",
        answer:  "for (i = 0; i <= 5; i++)",
        options: [
            "for i = 1 to 5",
            "for (i = 0; i <= 5)",
            "for (i = 0; i++)",
            "for (i = 0; i <= 5; i++)"
        ]
    },
    {
        numb: 34,
        question: "How do you round the number 7.25, to the nearest integer?",
        answer:  "Math.round(7.25)",
        options: [
            "Math.rnd(7.25)",
            "Math.round(7.25)",
            "round(7.25)",
            "rnd(7.25)"
        ]
    },
    {
        numb: 35,
        question: "Which event occurs when the user clicks on an HTML element?",
        answer: "onclick",
        options: [
            "onmouseover",
            "onmouseclick",
            "onclick",
            "onchange"
        ]
    },
    {
        numb: 36,
        question: "How do you declare a JavaScript variable?",
        answer:  "var firstName",
        options: [
            "v firstname",
            "variable declare firstname",
            "var firstName",
            "variable firstName"
        ]
    },
    {
        numb: 37,
        question: "Which operator is used to assign a value to a variable?",
        answer:  "=",
        options: [
            "+",
            "/",
            "=",
            "*"
        ]
    },
    {
        numb: 38,
        question: "What will the following code return: Boolean(10 > 9)",
        answer:  "true",
        options: [
            "true",
            "false",
            "NaN",
            "Non of the above"
        ]
    },
    {
        numb: 39,
        question: "Javascript is same as Java?",
        answer:  "False",
        options: [
            "True",
            "Maybe",
            "None",
            "False"
        ]
    },
    {
        numb: 40,
        question: "Which of these is a variable",
        answer:  "All of the above",
        options: [
            "Var",
            "Let",
            "const",
            "All of the above"
        ]
    },
    {
        numb: 41,
        question: "What is the diffrence between 'let' and 'const' ",
        answer:  "'let' is reassignable while 'const' is not",
        options: [
            "'let' is reassignable while 'const' is not",
            "'let' can be used inside a function and 'const' can not be used",
            "They are same thing, no diffrence",
            "The choice of the developer"
        ]
    },
    {
        numb: 42,
        question: "What is the output of the following code? console.log(3 + 2 + '7')",
        answer:  "57",
        options: [
            "12",
            "35",
            "57",
            "327"
        ]
    },
    {
        numb: 43,
        question: "Which of these is wrong in javascript eventListener",
        answer:  "Hyper Text Markup Language",
        options: [
            "onclick",
            "border",
            "mouseup",
            "keydown"
        ]
    },
    {
        numb: 44,
        question: "All these are diffrent ways to access an HTML element in Javascript except?",
        answer:  "class=()",
        options: [
            "getElementById()",
            "getElementByTagName()",
            "querySelectorAll()",
            "class=()"
        ]
    },
    {
        numb: 45,
        question: "Which of these brackets is used for objects?",
        answer:  "{}",
        options: [
            "()",
            "[]",
            "<>",
            "{}"
        ]
    },
    {
        numb: 46,
        question: "Which of these brackets is used for arrays?",
        answer:  "[]",
        options: [
            "()",
            "[]",
            "<>",
            "{}"
        ]
    },
    {
        numb: 47,
        question: "The triple equal to sign === checks for?",
        answer:  "Both data type and value",
        options: [
            "Just value",
            "Just data type",
            "Both data type and value",
            "Neither data type nor value"
        ]
    },
    {
        numb: 48,
        question: "A variable cannot be decleared inside a function?",
        answer:  "False",
        options: [
            "True",
            "False",
            "Maybe",
            "Definetly true"
        ]
    },
    {
        numb: 49,
        question: "What does DOM stand for?",
        answer:  "Document Object Model",
        options: [
            "Document Manipulation",
            "Desktop object Manipulation",
            "Document Object Model",
            "Document Object Manipulation"
        ]
    },
    {
        numb: 50,
        question: "Javascript is used for?",
        answer:  "Making a website functional",
        options: [
            "Making a website functional",
            "it is the makeup of a website",
            "it is used for styling",
            "It is a library"
        ]
    },
    ];