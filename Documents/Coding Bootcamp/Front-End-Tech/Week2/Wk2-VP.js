/*
INTRO TO CSS-------------------------------------------------------

CSS stands for cascading style sheets and allows us to add
 style to our application by selecting certain HTML elements
  and defining how they should be displayed. THis is done by
  using key value pair properties. These properties define 
  different aspects of how the element is displayed.

An element's color, size, and border style are examples of
 its properties.

XX  INLINE CSS ********************************* INLINE CSS ********************************* INLINE CSS

-written in line with the HTML. Its a good way to quickly test a style,
  but not a good way to create pages because it becomes hard to manage. 
   Every time a change is needed, it has to be made in line meaning each
    and every line has to be updated separately.
 This is not only monotonous but makes it easier to miss lines needing the update.

EX: 

XXXXX DO NOT REFERENCE XXXXX

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
 ->   <body style="background-color:blanchedalmond">
 ->     <h1 style="color:goldenrod">Styled Heading</h1>
                        section color            section border style,  border color,   border radius=shape; spx makes it rounded 
 ->       <div style="background-color:cornflowerblue; border-style:dotted; border-color:red; border-radius: 5px;">
 ->          <p style="text-shadow:saddlebrown 1px 1px">This is a styled paragraph</p>
 ->          <p style="font-size: 30px">This is another styled paragraph</p>
          </div>
    </body>
</html> -->


INTERNAL CSS **************************** INTERNAL CSS ********************************* INTERNAL CSS

-allows us to write all of our CSS in one place within one HTML doc.
 That place is inside a style element inside the head. It uses selectors
  to reference what it is styling.

EX: 

XXXXX DO NOT REFERENCE XXXXX

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    ->  <style>
            body {
                background-color:blanchedalmond;
            }
            h1 {
                color:goldenrod;
            }

            div {
                background-color:cornflowerblue;
                border-style:dotted; 
                border-color:red;
                border-radius: 5px;
            }
     
        </style>
    </head>

EXTERNAL STYLE SHEET ************************** EXTERNAL STYLE SHEET ********************** EXTERNAL STYLE SHEET

-If there are multiple HTML pages, Internal CSS creates the same 
 issue as Inline CSS but at the page level instead of the element 
 level where any changes would have to be made manually on each page.
  Creating an External Style Sheet resolves this issue by keeping 
   all the CSS in its own file which we then link to any HTML page
    that uses it. 

EX: 

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    ->  <link rel="stylesheet" href="styles.css"> 
    </head>

CSS BASIC PROPERTIES-----------------------------------------------------

When creating CSS properties, we use *key value pairs*. The key
 on the left hand side is the property we're defining and the 
  value on the right hand side is the value of the property - 
   what we're going to set that property to. The key/value are
   separated by a colon and then each property is separated by
   a semicolon.

Ex   key: value;

   Common Properties:

    color: darkred;
    background-color: cornflowerblue;
    border-style: dotted;
    border-width: 3px;
    border-color: red;
    border-radius: 5px;
    height: 200px;
    text-align: center;

CSS FLOAT-------------------------------------------------------

The CSS float property allows us to float content to the left 
 to the right side and helps us to align it more.

~~~~~*.html*~~~~~~

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
   <p>
->   <img src="cat.jpg"> Here is a bunch of text but our image will float right.
   </p> 
</body>
</html>

~~~~~*.css*~~~~~~~~

img{
    float: right;
}

CSS PSEUDO CLASSES---------------------------------------------

Pseudo classes enable us to style an element based on its current
 state. Element state can be whether a mouse pointer is hovering
  over it, if its a visited/unvisited link, whether its been 
  selected, etc.

  -CSS class is a selector that we can add our own name to

  style selectors are defined by a dot:

            .shadow-text { /*we created the name ".shadow-text" (it is not built in)
            text-shadow: gold 1px 1px;
        }
        
id selectors are defined by #:

        #large-paragraph { /*we created the name "#large-paragraph" (it is not built in)
            font-size: 30px;
        }

    EX:

    </style>
    </head>
    <body>
        <h1>Styled Heading</h1>        
        <div>
            <p class="shadow-text">This is a styled paragraph</p>
            <p id="large-paragraph">This is another styled paragraph</p>
        </div>
    </body>
</html> 

-------creating a hover state-------

~~~~~~~~~~HTML~~~~~~~~~~~~~~
<div class="hov">
    
        </div>

~~~~~~~~~~~~~CSS~~~~~~~~~~~~  
.hov {
    height: 200px;
    width: 200px;
    background-color:blue; *when not in hover state, background is blue
}  

.hov:hover {
  background-color: red; *when it's in the hover state, background is red
}
------------styling every other line---------------

~~~~~~~~~~HTML~~~~~~~~~~~~~~      
        <ul class="every-even">
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>

~~~~~~~~~~~~~CSS~~~~~~~~~~~~  
.every-even li:nth-child(even) {
    background-color: red;
}

/*Styling every third line:
 .every-third li:nth-child(3n) {
    background-color: red;
}        

We can select very specific elements by using multiple
 selectors. We used a a class (every even or every third)
  followed by a space followed by an element selector (li or
    list item) and this means that the style will be applied
     to every li inside of the class that precedes it.
This is useful for styling every image, paragraph or any element
inside of another specific element. This makes it so we can
 display different sections (div/span) of the HTML page differently.

 -class: .every-even or .every-third

-element selector: li (list item)


STYLING A TABLE----------------------------------------------------------

~~~~~~~~~~~~~HTML~~~~~~~~~~~~~~
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <table>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
        </tr>
        <tr>
            <td>Tom</td>
            <td>Sawyer</td>
            <td>tom@gmail.com</td>
        </tr>
        <tr>
            <td>Sam</td>
            <td>Smith</td>
            <td>ssmithy@yahoo.com</td>
        </tr>
        <tr>
            <td>Terry</td>
            <td>Thompson</td>
            <td>tman@gmail.com</td>
        </tr>
        <tr>
            <td>Roger</td>
            <td>Reynolds</td>
            <td>Roger@gmail.com</td>
        </tr>
    </table>
</body>
</html>

~~~~~~~~~~~~~CSS~~~~~~~~~~~~~~
table {
    border-collapse: collapse;
    width: 100%;
}

th, td <- *this means it will apply the header & data* {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid black;
}

*every other Table Row(tr) will have a lt gray background color*

tr:nth-child(even) {
    background-color: rgb(185, 185, 185);
}                        ^light gray^

tr:nth-child(odd) {
    background-color: darkviolet;
}



*background will change to darker gray while being hovered over*

tr:hover {
    background-color:gray;
}


HTML BOX MODEL------------------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
  
    <div id="box-model">
        Content
    </div>

</body>
</html>


*/ 