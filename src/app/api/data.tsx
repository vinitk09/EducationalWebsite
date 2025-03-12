import { title } from "process";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Latest News", herf: "#" },
];

export const Companiesdata: { imgSrc: string }[] = [
  {
    imgSrc: "/images/slickCompany/airbnb.svg",
  },
  {
    imgSrc: "/images/slickCompany/hubspot.svg",
  },
  {
    imgSrc: "/images/slickCompany/microsoft.svg",
  },
  {
    imgSrc: "/images/slickCompany/google.svg",
  },
  {
    imgSrc: "/images/slickCompany/walmart.svg",
  },
  {
    imgSrc: "/images/slickCompany/fedex.svg",
  },
];

export const CourseData: {
  course: string;
  imageSrc: string;
  profession: string;
  iconSrc: string; // Replace price with iconSrc
  category:
    | "mobiledevelopment"
    | "webdevelopment"
    | "datascience"
    | "cloudcomputing";
}[] = [
  {
    course: "Our personalized session at no cost",
    imageSrc: "/images/testi/studysec/Free Counselling.svg",
    profession: "Free Counselling",
    iconSrc: "/images/studygermany/freecousellinIcon.svg", // Path to your icon
    category: "webdevelopment",
  },
  {
    course: "Universities & Courses considering job market fit",
    imageSrc: "/images/testi/studysec/University Shortlisting.svg",
    profession: "University Shortlisting",
    iconSrc: "/images/studygermany/universityIcon.svg", // Path to your icon
    category: "webdevelopment",
  },
  {
    course: "Stand out from the crowd",
    imageSrc: "/images/testi/studysec/Statement of purpose.svg",
    profession: "Statement of purpose",
    iconSrc: "/images/studygermany/statementIcon.svg", // Path to your icon
    category: "webdevelopment",
  },
  {
    course: "Personalised CV for University",
    imageSrc: "/images/testi/studysec/CV.svg",
    profession: "Curriculum Vitae",
    iconSrc: "/images/studygermany/curriculumIcon.svg", // Path to your icon
    category: "webdevelopment",
  },
  {
    course: "“Good” to “Great” - Letter of recommendation",
    imageSrc: "/images/testi/studysec/University Application.svg",
    profession: "Letter of recommendation",
    iconSrc: "/images/studygermany/recommendateIcon.svg", // Path to your icon
    category: "mobiledevelopment",
  },
  {
    course: "Successful and hassle free application",
    imageSrc: "/images/studygermany/recommendateimg.svg",
    profession: "University Application",
    iconSrc: "/images/studygermany/universityapplicantIcon.svg", // Path to your icon
    category: "mobiledevelopment",
  },
  {
    course: "Visa to enter Germany",
    imageSrc: "/images/studygermany/visaimg.svg",
    profession: "Visa Assistance",
    iconSrc: "/images/studygermany/visaIcon.svg", // Path to your icon
    category: "mobiledevelopment",
  },
  {
    course: "Complete assistance for your travel & stay",
    imageSrc: "/images/studygermany/accomodate.svg",
    profession: "Accomodation and travel assistance",
    iconSrc: "/images/studygermany/germanylogo.jpeg", // Path to your icon
    category: "mobiledevelopment",
  },
];

export const MentorData: {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  color: string;
  workingAtImage: string; // Add this field
  studiedAtImage: string; // Add this field
}[] = [
  {
    name: "Product Management",
    href: "#",
    imageSrc: "/images/Mentors/Mentor/p1.png",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Dheeraj Dey",
    workingAtImage: "/images/Mentors/Mentor/c1.png", // Example image path
    studiedAtImage: "/images/Mentors/Mentor/u1.png",
  },
  {
    name: "Human Resources consultant and business development Specialist",
    href: "#",
    imageSrc: "/images/Mentors/Mentor/p2.png",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Safa'a Al-Adwan",
    workingAtImage: "/images/Mentors/Mentor/c2.png", // Example image path
    studiedAtImage: "/images/Mentors/Mentor/u2.png",
  },
  {
    name: "Lead Application Engineer",
    href: "#",
    imageSrc: "/images/Mentors/Mentor/p3.png",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Vijay Rana",
    workingAtImage: "/images/Mentors/Mentor/c3.png", // Example image path
    studiedAtImage: "/images/Mentors/Mentor/u3.png",
  },
  {
    name: "Business & Strategy Development",
    href: "#",
    imageSrc: "/images/Mentors/Mentor/p4.png",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Saurav Sarkar",
    workingAtImage: "/images/Mentors/Mentor/c4.png", // Example image path
    studiedAtImage: "/images/Mentors/Mentor/u4.png",
  },
  {
    name: "Business Analyst at Worldline",
    href: "#",
    imageSrc: "/images/Mentors/Mentor/p5.png",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Himanushu Chanana",
    workingAtImage: "/images/Mentors/Mentor/c5.png", // Example image path
    studiedAtImage: "/images/Mentors/Mentor/u5.png",
  },
  {
    name: "Co-Founder & COO Coracle",
    href: "#",
    imageSrc: "/images/Mentors/Mentor/p6.png",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Samy Thiyagarajan",
    workingAtImage: "/images/Mentors/Mentor/c6.png", // Example image path
    studiedAtImage: "/images/Mentors/Mentor/u6.png",
  },
];

export const TestimonialData: {
  profession: string;
  name: string;
  imgSrc: string;
  starimg: string;
  detail: string;
}[] = [
  {
    profession: "MSc in Data Science",
    name: "Purvanshi Sharma",
    imgSrc: "/images/studentimg/1_preview_rev_1.png", // Updated to person's image
    starimg: "/images/university/universityofeurope.svg", // Updated to university image
    detail:
      "The best part about the Germanywale team is that they don't treat you as a customer.",
  },
  {
    profession: "MSc in Data Science",
    name: "Shagun Shah",
    imgSrc: "/images/studentimg/ShagunShah_preview_rev_1 (1).png", // Updated to person's image
    starimg: "/images/university/universityofeurope.svg", // Updated to university image
    detail:
      "Won't lie. Was a little skeptical about Germanywale in the start. But it proved me wrong in every way possible.",
  },
  {
    profession: "Masters in Management",
    name: "Ayush Baid",
    imgSrc: "/images/studentimg/3_preview_rev_1.png", // Updated to person's image
    starimg: "/images/university/universityofeurope.svg", // Updated to university image
    detail:
      "The mentors are easy to reach and talk to, the process is simplified, and their advice on writing SOPs and shortlisting universities.",
  },
  {
    profession: "Masters in Non-Financials Intensive",
    name: "Shweta Kumar",
    imgSrc: "/images/studentimg/6_preview_rev_1.png", // Updated to person's image
    starimg: "/images/university/universityofeurope.svg", // Updated to university image
    detail:
      "Germanywale is one of the best consulting firms I have come across. Their advice and service were very genuine.",
  },
  {
    profession: "Masters in Agriculture, Ecology and Societies",
    name: "Abhay Ahuja",
    imgSrc: "/images/studentimg/7_preview_rev_1.png", // Updated to person's image
    starimg: "/images/university/zuberlin.png", // Updated to university image
    detail:
      "The whole process was very transparent; it marked my expectations. I was kept well informed about the ongoing developments.",
  },
  {
    profession: "MSc in Biological Resources",
    name: "Naveen Verma",
    imgSrc: "/images/studentimg/naveen1.png", // Updated to person's image
    starimg: "/images/university/zuberlin.png", // Updated to university image
    detail:
      "My experience with Germanywale has been nothing short of my high expectations. Their flexibility with assigning mentors is excellent.",
  },
  {
    profession: "Master's in Molecular Life Science",
    name: "Akanksha Mourya",
    imgSrc: "/images/studentimg/AkankshaMourya_preview_rev_1.png", // Updated to person's image
    starimg: "/images/university/zuberlin.png", // Updated to university image
    detail:
      "Genuinely, I was very worried about my application before joining Germanywale. The team always gives me confidence and assurance that I will get an admit.",
  },
  {
    profession: "International Management and Leadership (MA)",
    name: "Taranjit Kaur",
    imgSrc: "/images/studentimg/Taranjeet (2)_preview_rev_1.png", // Updated to person's image
    starimg: "/images/university/zuberlin.png", // Updated to university image
    detail:
      "I would never forget the key role played by Team Germanywale in university shortlisting. They were available beyond the time, no matter what type of concern I have.",
  },
  {
    profession: "Masters in Intelligent Manufacturing",
    name: "Kripal Kishor",
    imgSrc: "/images/studentimg/9_preview_rev_1.png", // Updated to person's image
    starimg: "/images/university/universityofeurope.png", // Updated to university image
    detail:
      "Whenever I had a doubt, the team was always there to help me out. The team gave me hope and proper guidance and motivated me a lot to go beyond.",
  },
  {
    profession: "Masters in Wind Energy Engineering",
    name: "Prasad Patil",
    imgSrc: "/images/studentimg/prasad.png", // Updated to person's image
    starimg: "/images/university/universityofeurope.png", // Updated to university image
    detail:
      "Germanywale provided exceptional support and engagement, promptly addressing all my questions and doubts. Their patience and reliability eased my journey.",
  },
  {
    profession:
      "Master's in International Business - Focus on Healthcare Management",
    name: "Arshiya Sharma",
    imgSrc: "/images/studentimg/11_preview_rev_1.png", // Updated to person's image
    starimg: "/images/university/universityofeurope.png", // Updated to university image
    detail:
      "Saurabh and the entire team were in touch with me consistently the whole time & were always there if I had any doubts. I would highly recommend Germanywale to everyone.",
  },
  {
    profession: "Master of Business Administration",
    name: "Antony Reddy",
    imgSrc: "/images/studentimg/5_preview_rev_1.png", // Updated to person's image
    starimg: "/images/university/universityofeurope.png", // Updated to university image
    detail:
      "My entire application process with Germanywale has been extremely smooth. Everyone in the team is exceptional and very helpful.",
  },
  {
    profession: "Master’s in Electromobility",
    name: "Shodhan",
    imgSrc: "/images/studentimg/Updated-Testimonal/shodhanupdated.png", // Updated to person's image
    starimg: "/images/university/tuhh.png", // Updated to university image
    detail:
      "Choosing Germanywale for my study abroad journey was the best decision I ever made, as their personalized guidance led me to my dream university with immense support.",
  },
];
