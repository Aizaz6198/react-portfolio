import Image from "./assets/images/IMG.JPG";

const logotext = "AIZAZ";
const meta = {
    title: "Aizaz Ahmed",
    description: "I’m Aizaz Ahmed, Full-Stack Web Developer",
};

const introdata = {
    title: "I'm Aizaz Ahmed",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop web apps",
    },
    description: "Innovative web developer with a Computer Applications degree, blending creativity, precision, and expertise in accounting, data management and communication.",
    your_img_url: Image,
};

const dataabout = {
    title: "About myself",
    aboutme: "Hello, I'm Aizaz Ahmed, a passionate web developer with strong foundation in web technologies. I hold a degree in Computer Applications from CCS University, Meerut and I'm dedicated to creating exceptional web experiences.With a creative mindset and a keen eye for detail, I strive to craft websites that are not only visually appealing but also highly functional. My goal is to make the web a better place, one pixel at a time. I'm always eager to take on new challenges and collaborate on exciting projects. If you're looking for a developer who can bring your ideas to life or need assistance with web-related solutions, I'm just a message away. Let's work together to build something amazing."
};
const educationData = [{
    title: "B.Sc.(Computer Applications)",
    where: "CCS University, Meerut",
    date: "2017-2020",
},
{
    title: "Intermediate",
    where: "CBSE",
    date: "2013-2015",
},
{
    title: "Highschool",
    where: "CBSE",
    date: "2011-2013",
},
];
const worktimeline = [{
    jobtitle: "Accountant/Data Entry Operator",
    where: "Uttar Pradesh Panchayati Raj Department",
    date: "Nov. 2021 - Till Present",

}];
const skills = [{
    name: "Python",
    value: 75,
},
{
    name: "HTML",
    value: 85,
},
{
    name: "CSS",
    value: 80,
},
{
    name: "JavaScript",
    value: 70,
},
{
    name: "React",
    value: 80,
},
];

const dataportfolio = [
    {
        img: require("./assets/images/image1.png"),
        description: "Employee Review System enables employees to provide constructive feedback on peer's performance through an intuitive web application.",
        link: "https://employee-review-system-gos5.onrender.com",
    },
    {
        img: require("./assets/images/image4.png"),
        description: "Placement Cell webapp is acomprehensive system to streamline student placement processes, incorporating features like user and company registration, updates, deletions, and advanced search capabilities.",
        link: "https://placement-cell-w2g3.onrender.com",
    },
    {
        img: require("./assets/images/image6.png"),
        description: "Digital Clock with alarm and stopwatch.",
        link: "https://aizaz6198.github.io/Digital-Clock-and-alarmclock/",
    },
    {
        img: require("./assets/images/image2.png"),
        description: "iPod-style app featuring a circular menu with options such as Settings, Games, and Music, providing an interactive user interface.",
        link: "https://ipod-0ic0.onrender.com",
    },
    {
        img: require("./assets/images/image5.png"),
        description: "IMDB Clone helps users to search, view, and save movies to their Favorites, enhancing user engagement and functionality.",
        link: "https://aizaz6198.github.io/IMDB_clone/",
    },
    {
        img: require("./assets/images/image3.png"),
        description: " This project is about creating a simple todo list in which you can add, modify and delete a task.",
        link: "https://todolist-y9ws.onrender.com",
    },
    {
        img: require("./assets/images/image7.png"),
        description: "A simple interactive fishbowl simulation where you need to refill the water to keep the fish alive.",
        link: "https://aizaz6198.github.io/Don-tLetFishDie/",
    }

];


const contactConfig = {
    YOUR_EMAIL: "Aizaz060198@gmail.com",
    YOUR_FONE: "(+91) 98373-84968",
    description: "Feel free to reach out to me.",
    YOUR_SERVICE_ID: "service_hkd0e7c",
    YOUR_TEMPLATE_ID: "template_h3x8kzt",
    YOUR_USER_ID: "0vb0J3vuZXKVue_A9",
};

const socialprofils = {
    github: "https://github.com/Aizaz6198",
    linkedin: "https://www.linkedin.com/in/aizaz-ahmed-06076618b/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    educationData,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};