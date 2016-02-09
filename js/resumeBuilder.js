/*
This is empty on purpose! Your code to build the resume will go here.
 */

 $("#main").append('MITA, ');

 var awesomethoughts = "I am Mita and I am awesome";
 
 var funthoughts = awesomethoughts.replace ("awesome", "fun");

 console.log(awesomethoughts);
 console.log(funthoughts);

 $('#main').append(funthoughts);

 var name = "Mita Umalkar";
 var role = "Web Developer";

 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);