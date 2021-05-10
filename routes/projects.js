const router = require('express').Router();
 
/* 
 Project schema:
 Title => projectTitle (string)
 Description => projectDescription (string)
 Type => projectType (string)
 Tech Used => projectTechUsed (array)
 Languages => projectLanguages (array)
 Start Date => projectStartDate (date)
 End Date => projectEndDate (date)
 GitHub Link => projectGitLink (string)
*/
 
const projects = [
 
 {
 "projectTitle": "Social Media App",
 "projectDescription": " A small social platform created by team of four people having some cool features like adding and removing friends , making a post , searching for friends and checking the feed.",
 "projectType": "Exam Project",
 "projectTech": {
 "technology1": "Google Docs",
 "technology2": "Git and GitKraken",
 "technology3": "Microsoft Excel",
 "technology4": "Adobe XD",
 "technology5": "MySQL Workbench",
 "technology6": "Visual Paradigm",
 "technology7": "Thymeleaf",
 "technology8": "IntelliJ"
 },
 "projectLanguages": {
 "language1": "Java",
 "language2": "MySql",
 "language3": "CSS",
 "language4": "HTML"
 },
 "projectStartDate": new Date("November 15, 2020"),
 "projectEndDate": new Date("December 18, 2020"),
 "projectGitLink": "https://github.com/DavidKrtolica/SocialMediaApp",
 
 },
 {
 "projectTitle": "Nordic Motorhome Rental",
 "projectDescription": "A motorhome rental app which has features creating space for new motorhome , updating the details of the customer, generating bills ,deleting the motorhome etc .",
 "projectType": "Exam Project",
 "projectTech": {
 "technology1": "Google Docs",
 "technology2": "MySQL Workbench",
 "technology3": "Visual Paradigm",
 "technology4": "IntelliJ"
 },
 "projectLanguages": {
 "language1": "Java",
 "language2": "MySQL",
 "language3": "CSS",
 "language4": "HTML"
 },
 "projectStartDate": new Date("July 2, 2020"),
 "projectEndDate": new Date("June 3, 2020"),
 "projectGitLink": "https://github.com/nirenrawal/NordicMotorhomeProject",
 
 },
 {
 "projectTitle": "Adventure XP",
 "projectDescription": " A system for fun, gym where one can choose the games they like and reserve seat including the feautres for updating and cancellation as well. ",
 "projectType": " Class Mandatory Project",
 "projectTech": {
 "technology1": "MySQL Workbench",
 "technology2": "Git",
 "technology3": "IntelliJ",
 "technology4": "Visual Paradigm",
 "technology5": "Google Docs"
 },
 "projectLanguages": {
 "language1": "Java",
 "language2": "MySQL",
 "language3": "HTML",
 "language4": "CSS"
 },
 "projectStartDate": new Date("October 20, 2020"),
 "projectEndDate": new Date("November 15, 2020"),
 "projectGitLink": "https://github.com/Kwandes/AdventureXP",
 
 },
 {
 "projectTitle": "Book-Store",
 "projectDescription": "A web shop where you can find varities of books of various categories, contains features like adding , updating deleting the books and also places the order and calculates it. ",
 "projectType": " Class Mandatory Project",
 "projectTech": {
 "technology1": "MySQL Workbench",
 "technology2": "Git",
 "technology3": "IntelliJ",
 "technology4": "Visual Paradigm",
 "technology5": "Google Docs"
 },
 "projectLanguages": {
 "language1": "Java",
 "language2": "MySQL",
 "language3": "HTML",
 "language4": "CSS",
 "language5": "React"
 },
 "projectStartDate": new Date("October 20, 2020"),
 "projectEndDate": new Date(" December 15, 2020"),
 "projectGitLink": "https://github.com/nirenrawal/book_store.git",
 
 }
];
 
router.get("/api/projects", (req, res) => {
 res.send({ projects });
});
 
module.exports = {
 router
};