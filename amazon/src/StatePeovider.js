import React, { createContext, useContext, useReducer } from "react";

//Step 01
export const StateContext = createContext();
//Step 02  Building a Provider --to wrap entire App inside this provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Step 03 : Wrap App component inside State Provider in index.js

// Step 04 : In Index.js pass props in the   <StateProvider initialState={} reducer={}>

// Step 05 :  create a file reducer.js

// Step 06 : Inside reducer.js declare and define initialState

// Step 07 :  Use initalState inside Index.js    import { initialState } from "./reducer";

// Step 08 : define reducer function inside reducer.js

// Step 09 :  Use reducer inside Index.js    import { initialState } from "./reducer";

// Step 10 : This is how we use it inside  components
export const useStateValue = () => useContext(StateContext);

//Step 11 : inside any component use the code const [{ basket }] = useStateValue();

//Step 12 : {basket.length} can provide the value of basket

//https://www.crio.do/projects/react-amazon-clone/

// 1) Urgent: Position Title: ASP .Net MVC Developers (20+ positions) | E: 3-15Years | S: 120k-200k | Night Shift
// Client: Leading IT Co. in Shahrah E Faisal, Karachi with 100-200 employees
// 2) Urgent: Position Title: VB.Net Developer | E: 1-5Years | S: 60k-100k | Day Shift
// Client: Leading IT Co. in Zamzama, Karachi with 60-70 employees
// 3) Position Title: Remote MERN Stack Developer | E: 3-5Years| S: 100-250K| Day Shift
// Client: Leading IT Co. in UAE with offices in 50+ remote employees in Pakistan
// 3) Position Title: Remote Sitecore Engineers | E: 3-10Years+| S: 150-300K| Day Shift
// Client: Leading IT Co. in UAE with offices in 100+ remote employees in Pakistan
// 3) Position Title: Remote .Net Backend Developer | E: 3-10Years+| S: 100-250K| Day Shift
// Client: Leading IT Co. in UAE with offices in 50+ remote employees in Pakistan
// I will appreciate if you could send/ refer CV at careers@hrworld.org.pk with position title/s in subject line and we'll email back in 5-10 min.
// 1 comments
// Muhammad Khurram
// Timing
//  · Reply · 4 d
// Write a comment…

// Shoaib Khan
// 2gtm9SS SAolpmmgceuposnsmorfilc antreo 04d:48  ·
// AALOGICS is looking for a "Senior SEO Executive"
// Qualification: Graduate
// Experience: 3+ Years
// An Ideal candidate should have the following skillset… See more
// 0 comments
// Write a comment…

// Shoaib Khan
// 2gtm9SS SAolpmmgceuposnsmorfilc antreo 04d:48  ·
// AALOGICS is looking for a "Junior Web Content Writer"
// Qualification: Graduate
// Experience: 2+ Years
// An Ideal candidate should have the following skillset… See more
// 0 comments
// Write a comment…

// Shoaib Khan
// 2gtm9SS SAolpmmgceuposnsmorfilc antreo 02d:34  ·
// AA Logics is looking for a 'Software Engineer-(PHP)' to work with us on cutting-edge development projects.
// Qualification : BSCS
// Experience: 2-3 Years
// An Ideal candidate should have the following skillset… See more
// 0 comments
// Write a comment…

// Shoaib Khan
// 2uS9t AmhSogpofnplrsodilf artefr n0a2:a34mmedS  ·
// AALOGICS is looking for a 'Magento Developer',
// who will be responsible for delivering Magento solutions to e-commerce problems
// • Bachelor’s Degree and 2+ year of Magento backend development experience
// • Referenceable Magento 2 development experience
// Handsome salary package + Perks and benefits… See more
// 0 comments
// Write a comment…

// Shoaib Khan
// 2uS9t AmhSogpofnplrsodilf artefr n0a2:a34mmedS  ·
// AALOGICS is looking for an 'ODOO developer' to work with us on cutting-edge development projects.
// *An ideal candidate should have strong python programming experience
// *Core development of odoo applications using python language
// *PHP development in all major frameworks (Laravel/CI) would be plus
// Qualification : BSCS… See more
// 0 comments
// Write a comment…

// Shoaib Khan
// 2uS9t AmhSogpofnplrsodilf artefr n0a2:a34mmedS  ·
// AALOGICS is looking for a "MERN Stack Developer (with more focus on User interface development)"
// Qualification: BSCS
// Experience: 2+ years
// An Ideal candidate should have… See more
// 0 comments
// Write a comment…

// Mohsin Hasan Usmani
// 2a7ro ttASaoppmonnrigl tasot rie0e4i:f3dfi5ucc  ·
// Paid - Internship program lead to permanent employment for the positions of “Graphics Designer and UI/UX Designer”
// Fresh graduates from field of Software Engineering are encouraged to apply; prior relevant experience will be preferred.
// Working Days: Monday to Friday
// Location: Khalid Bin Waleed Road, Karachi.
// See more
// 0 comments
// Write a comment…

// Raafia Hafeez
// 2a7ro ttASaoppmonnrigl tasot rie0e4i:f3dfi5ucc  ·
// Hello Every One,
// Planning to work in a friendly learning environment with flexible working hours than this is the best opportunity for you all . Grab it at earliest. Limited Positions available.
// Immediate Job Opening!… See more
// 0 comments
// Write a comment…

// Maaz Ahmed
// 2a7ro ttASaoppmonnrigl tasot rie0e4i:f3dfi4ucc  ·
// Be part of our continuous growth journey! [#Senior #ReactJS]
// Folio3 Software is on the lookout for talented individuals to take our engineering team to that next level. [#Karachi & #Lahore]
// • Prior working experience of at-least #Five Years in software development.… See more
// 0 comments
// Write a comment…

// About
// A Platform for all Computer Science professionals of Pakistan
// 1) Sharing Information, News, Even ts … See more
// Private
// Only members can see who's in the group and what they post.
// Visible
// Anyone can find this group.
// Karachi, Pakistan  · Pakistan
// General group
// Popular topics in this group
// #Karachi
// 938 posts
// #lahore
// 283 posts
// #hiring
// 142 posts
// Recent media
