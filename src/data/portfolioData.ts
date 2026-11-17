import { Project, SkillItem, EducationItem, CertificationItem, ContactInfo, ExperienceItem } from '../types/portfolio';
import attritionImage from '../assets/images/project_attrition_analytics_1793957633573.jpg';
import faceAttendanceImage from '../assets/images/project_face_detection_attendance_1793957634448.jpg';
import studentManagementImage from '../assets/images/project_student_management_1793957633639.jpg';

export const RESUME_PDF_PATH = '/assets/aistudio/Shayyan_Najath_C_N_Resume_e1f39326.pdf';

export const INITIAL_CONTACT_INFO: ContactInfo = {
  name: 'Shayyan Najath C N',
  email: 'shayyan365@gmail.com',
  location: 'Vaniyambadi, Tamil Nadu, India',
  github: 'https://github.com/shayyannajath',
  linkedin: 'https://www.linkedin.com/in/shayyan-najath-1a4531294',
  college: 'C. Abdul Hakeem College of Engineering and Technology',
  degree: 'B.Tech in Artificial Intelligence and Data Science',
  graduationYear: '2027',
};

export const SUMMARY_TEXT =
  'Final-year B.Tech Artificial Intelligence and Data Science student with foundational knowledge of Python, SQL, and machine learning concepts. Hands-on experience with a Customer Churn Prediction project involving data preprocessing, exploratory data analysis, and model evaluation using Python libraries. Eager to apply analytical and problem-solving skills, strengthen technical expertise, and contribute to real-world AI/ML solutions.';

export const ROTATING_ROLES = [
  'Artificial Intelligence & Data Science',
  'Python & SQL Developer',
  'Machine Learning Enthusiast',
  'Data Analysis & Preprocessing',
];

export const STATS = [
  { value: '3', label: 'Academic Projects', description: 'Streamlit ML, MySQL & Computer Vision' },
  { value: '2027', label: 'Graduation Year', description: 'B.Tech AI & Data Science' },
  { value: '7.9', label: 'CGPA / 10', description: 'C. Abdul Hakeem College' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Data Science Intern',
    company: 'Strydo Technologies',
    location: 'Vellore',
    period: '07/2025 – 08/2025',
    bullets: [
      'Worked on data preprocessing, analysis, visualization, and machine learning tasks using Python.',
      'Gained practical exposure to machine learning workflows and real-world datasets.',
      'Applied analytical and problem-solving techniques to support data-driven solutions.',
    ],
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // Technical Skills
  { name: 'Python', category: 'Technical Skills', description: 'Core Python, scripting, data manipulation, algorithm logic', iconName: 'Terminal' },
  { name: 'SQL', category: 'Technical Skills', description: 'Relational database queries, table structures, operations', iconName: 'Database' },
  { name: 'Microsoft Excel', category: 'Technical Skills', description: 'Spreadsheet management, formula analysis, data organization', iconName: 'FileSpreadsheet' },
  { name: 'Data Analysis', category: 'Technical Skills', description: 'Data examination, pattern discovery, trend evaluation', iconName: 'BarChart3' },
  { name: 'HTML', category: 'Technical Skills', description: 'Semantic structure, elements, accessible markup', iconName: 'Code2' },
  { name: 'CSS', category: 'Technical Skills', description: 'Styling, responsive layouts, interface aesthetics', iconName: 'Palette' },

  // Tools & Design
  { name: 'Visual Studio Code', category: 'Tools & Design', description: 'Primary code editor, debugging, environment workflow', iconName: 'Laptop' },
  { name: 'Figma', category: 'Tools & Design', description: 'UI wireframing, interface layouts, prototype design', iconName: 'Figma' },
  { name: 'Jupyter Notebook', category: 'Tools & Design', description: 'Interactive Python coding, data experiments, documentation', iconName: 'BookOpen' },
  { name: 'Canva', category: 'Tools & Design', description: 'Visual presentation assets, digital graphics, layout design', iconName: 'Layout' },

  // Data Analysis (Libraries)
  { name: 'Pandas', category: 'Data Analysis', description: 'DataFrames, series manipulation, cleaning, aggregation', iconName: 'Layers' },
  { name: 'NumPy', category: 'Data Analysis', description: 'Array computing, multidimensional mathematical operations', iconName: 'Brain' },
  { name: 'Matplotlib', category: 'Data Analysis', description: 'Data plotting, charts, exploratory visualization figures', iconName: 'PieChart' },

  // Core Concepts
  { name: 'Data Structures', category: 'Core Concepts', description: 'Arrays, lists, stacks, queues, hash maps, trees', iconName: 'Layers' },
  { name: 'Object-Oriented Programming (OOP)', category: 'Core Concepts', description: 'Classes, objects, inheritance, encapsulation, polymorphism', iconName: 'Code2' },
  { name: 'Algorithms', category: 'Core Concepts', description: 'Searching, sorting, recursion, problem-solving efficiency', iconName: 'TrendingUp' },
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'employee-attrition-prediction',
    title: 'Employee Attrition Prediction',
    category: 'Machine Learning & Analytics',
    tagline: 'Predictive machine learning model and interactive Streamlit analytics dashboard',
    description:
      'Analyzed IBM HR Analytics data to identify employee attrition patterns. Built a machine learning model to predict employee attrition, and developed an interactive Streamlit dashboard for data visualization and predictions.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit', 'Plotly'],
    githubUrl: 'https://github.com/shayyannajath/employee-attrition-prediction',
    demoUrl: '',
    image: attritionImage,
    highlights: [
      'Analyzed IBM HR Analytics data to identify employee attrition patterns.',
      'Built a machine learning model to predict employee attrition.',
      'Developed an interactive Streamlit dashboard for data visualization and predictions.',
    ],
    keyFeatures: [
      'Exploratory data analysis on IBM HR Analytics dataset',
      'Feature correlation and attrition indicator analysis',
      'Machine learning model training with Scikit-learn',
      'Interactive Streamlit web application with dynamic Plotly visualizations',
    ],
    architecture: [
      'IBM HR Analytics Data Ingestion & Preprocessing (Pandas, NumPy)',
      'Exploratory Data Analysis & Feature Pattern Identification',
      'Machine Learning Model Training & Evaluation (Scikit-learn)',
      'Interactive Dashboard Deployment (Streamlit, Plotly)',
    ],
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    category: 'Database Application',
    tagline: 'Menu-driven student record management application with MySQL database operations',
    description:
      'Developed a menu-driven application to add, view, and search student records. Used Python for application logic and MySQL for database operations, implementing student record management functionality.',
    technologies: ['Python', 'MySQL', 'SQL'],
    githubUrl: 'https://github.com/shayyannajath/student-management-system',
    demoUrl: '',
    image: studentManagementImage,
    highlights: [
      'Developed a menu-driven application to add, view, and search student records.',
      'Used Python for application logic and MySQL for database operations.',
      'Implemented student record management functionality.',
    ],
    keyFeatures: [
      'Menu-driven interactive user console',
      'MySQL relational database integration for persistent records',
      'Add student, query records, and search student history',
      'Structured application logic with error handling',
    ],
    architecture: [
      'Relational Database Schema Setup in MySQL',
      'Database Connector & CRUD Execution Functions',
      'Python Application Logic & Menu Navigation Engine',
      'Record Retrieval and Search Filtering',
    ],
  },
  {
    id: 'face-attendance-system',
    title: 'Real-Time Face Detection and Attendance System',
    category: 'Computer Vision & AI',
    tagline: 'Webcam-based biometric face recognition system with automated CSV attendance logging',
    description:
      'Built a webcam-based face detection and recognition application. Used a trained recognition model to identify registered individuals and designed attendance recording using CSV files.',
    technologies: ['Python', 'OpenCV', 'NumPy', 'Haar Cascade', 'CSV'],
    githubUrl: 'https://github.com/shayyannajath/face-attendance-system',
    demoUrl: '',
    image: faceAttendanceImage,
    highlights: [
      'Built a webcam-based face detection and recognition application.',
      'Used a trained recognition model to identify registered individuals.',
      'Designed attendance recording using CSV files.',
    ],
    keyFeatures: [
      'Real-time webcam video stream processing via OpenCV',
      'Facial detection using Haar Cascade classifier',
      'Trained model recognition for identifying registered students/individuals',
      'Automated attendance logging with timestamps in CSV format',
    ],
    architecture: [
      'Live Webcam Video Stream Ingestion (OpenCV)',
      'Face Detection & Bounding Box Extraction (Haar Cascade)',
      'Trained Model Comparison & Identity Classification',
      'Automated Logging & Attendance Storage (CSV)',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'C. Abdul Hakeem College of Engineering and Technology',
    location: 'Melvisharam',
    period: '2023 – 2027',
    score: '7.9 / 10',
    scoreType: 'CGPA',
    details: [
      'CGPA: 7.9/10',
      'Specializing in Artificial Intelligence and Data Science curriculum',
      'Located in Melvisharam, Tamil Nadu',
    ],
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'Adarsh Matriculation Higher Secondary School',
    location: 'Vaniyambadi',
    period: '2022 – 2023',
    score: '73%',
    scoreType: 'Percentage',
    details: [
      'Percentage: 73%',
      'Higher Secondary education completed in Vaniyambadi, Tamil Nadu',
    ],
  },
];

export const INITIAL_CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-oracle-ai',
    title: 'AI Foundation Associate',
    issuer: 'Oracle',
    type: 'Professional Certification',
    description: 'Foundational certification in Artificial Intelligence concepts, technologies, and applications by Oracle.',
    credentialUrl: 'https://drive.google.com/file/d/16PZTCm3PYU_YtvDhY7a8VxVfylqescV5/view?usp=drivesdk',
  },
  {
    id: 'cert-deloitte-analytics',
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Forage',
    type: 'Job Simulation Certificate',
    description: 'Completed practical simulation tasks in data analysis, dashboarding, and business data interpretation.',
    credentialUrl: 'https://drive.google.com/file/d/12RqelS_2g2DUjf50lMNP3uoa9_5L9YPJ/view?usp=drivesdk',
  },
  {
    id: 'cert-tata-viz',
    title: 'Tata Group : Data Visualisation',
    issuer: 'Forage',
    type: 'Job Simulation Certificate',
    description: 'Data visualization job simulation covering data exploration, executive presentation, and business metric interpretation.',
    credentialUrl: 'https://drive.google.com/file/d/1tiOTUFJbfxqvDVKHPuU14VihHQljkxUB/view?usp=drivesdk',
  },
  {
    id: 'cert-udemy-sql',
    title: 'Relational Databases & SQL',
    issuer: 'Udemy',
    type: 'Course Certificate',
    description: 'Comprehensive study and practical querying of relational database management systems and SQL.',
    credentialUrl: 'https://drive.google.com/file/d/1uPE__2G8Ohi1wgQOVaizxlYSllUDs6-4/view?usp=drivesdk',
  },
];
