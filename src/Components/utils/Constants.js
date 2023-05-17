import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export const links = [
    {
        linkName: 'Home',
        to: '/'
    },
    {
        linkName: 'About',
        to: '/about'
    },
    {
        linkName: 'Skills',
        to: '/resume'
    },
    {
        linkName: 'portfolios',
        to: '/portfolio'
    },
    {
        linkName: 'Contact',
        to: '/contact'
    }
]

export const informations = [
    {
        Questions: 'Full Name',
        Answer: 'Hamza Mohamed'
    },
    {
        Questions: 'Age',
        Answer: '16 Years Old'
    },
    {
        Questions: 'Nationality',
        Answer: 'Egyption'
    },
    {
        Questions: 'Languages',
        Answer: 'Arabic , English'
    },
    {
        Questions: 'Address',
        Answer: 'Asala City'
    },
    {
        Questions: 'Freelance',
        Answer: 'Available'
    }
]

export const ServiceBox = [
    {
        icon: <BrushIcon />,
        name: 'Web Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.',
        Aos:  'zoom-in-up'
    },
    
    {
        icon: <CodeIcon />,
        name: 'Web Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.',
        Aos:  'zoom-in'
    },
    
    {
        icon: <PhoneAndroidIcon />,
        name: 'Responsive Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.',
        Aos:  'zoom-in-down'
    }
    
]

export const skills = [
    {
        skillName: 'HTML5',
        percent: '100%',
        Aos: 'fade-up'
    },
    {
        skillName: 'CSS3',
        percent: '95%',
        Aos: 'fade-down'
    },
    {
        skillName: 'Javascript',
        percent: '70%',
        Aos: 'fade-up'
    },
    {
        skillName: 'React Js',
        percent: '90%',
        Aos: 'fade-down'
    },
    {
        skillName: 'Material-Ui',
        percent: '100%',
        Aos: 'fade-up'
    },
    {
        skillName: 'TailWind CSS',
        percent: '70%',
        Aos: 'fade-down'
    },
    {
        skillName: 'Github',
        percent: '100%',
        Aos: 'fade-up'
    },
    {
        skillName: 'Git',
        percent: '100%',
        Aos: 'fade-down'
    }
]

export const LanguageSkills = [
    {
        LanguageName: 'Arabic',
        Fluently: '100%',
        Aos: 'fade-right'
    },
    {
        LanguageName: 'English',
        Fluently: '80%',
        Aos: "fade-right"
    }
]

export const reviews = [
    {
        ClientName: 'Youssef Mohamed',
        Freelancing: 'Fiverr Client',
        clientReview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'
    },
    {
        ClientName: 'Marwan Sadek',
        Freelancing: 'UpWork Client',
        clientReview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'
    },
    {
        ClientName: 'Ahmed Ali',
        Freelancing: 'UpWork CLient',
        clientReview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'
    },
    {
        ClientName: 'Mahmoud Mohamed',
        Freelancing: 'Fiverr Client',
        clientReview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'
    },
    {
        ClientName: 'Ammar Sobhy',
        Freelancing: 'UpWork Client',
        clientReview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'
    },
]

export const Work = [
    {
        image: '/images/Screenshot 2023-03-25 214627.png',
        projectName: 'E-Commerce Store',
        projectVercelLink: 'e-commerce-ten-delta.vercel.app',
        About: '(HTML , CSS , JS , Responsive Media Query)',
        Aos: 'flip-right'
    },
    {
        image: '/images/Screenshot 2023-03-25 215316.png',
        projectName: 'Car Company',
        projectVercelLink: 'car-company.vercel.app',
        About: '(HTML , CSS , Responsive Bootstrap)',
        Aos: 'flip-left'
    },
    {
        image: '/images/Screenshot 2023-04-13 052018.png',
        projectName: 'Portfolio',
        projectVercelLink: 'https://portfolio-two-rho-teal.vercel.app/',
        About: '(React js , Material Ui , Responsive by Material Ui )',
        Aos: 'flip-right'
    },
    {
        image: '/images/Screenshot 2023-04-13 055001.png',
        projectName: "Aisha's Portfolio",
        projectVercelLink: 'https://otere-portfolio-react.vercel.app/',
        About: '(React js , Wow js , Responsive by Bootstrap)',
        Aos: 'flip-left'
    },
    {
        image: '/images/Screenshot 2023-04-13 061349.png',
        projectName: 'Khamsat',
        projectVercelLink: 'https://khamsat-xi.vercel.app/',
        About: '(HTML , CSS)',
        Aos: 'flip-right'
    },
    {
        image: '/images/Screenshot 2023-04-13 062341.png',
        projectName: 'Gaco',
        projectVercelLink: 'https://landscaping-eta.vercel.app/',
        About: '(HTML , CSS , Js)',
        Aos: 'flip-left'
    },
    {
        image: '',
        projectName: '',
        projectVercelLink: '',
        About: '',
        Aos: 'flip-right'
    },
    {
        image: '',
        projectName: '',
        projectVercelLink: '',
        About: '',
        Aos: 'flip-left'
    },
    {
        image: '',
        projectName: '',
        projectVercelLink: '',
        About: '',
        Aos: 'flip-right'
    },
]

export const contactInformation = [
    {
        icon: <LocalPhoneOutlinedIcon />,
        title: 'Phone',
        information: '+2-0100-703-8325'
    },
    {
        icon: <EmailOutlinedIcon />,
        title: 'Email',
        information: 'hamzasadeq41@gmail.com'
    },
    {
        icon: <FmdGoodOutlinedIcon />,
        title: 'Address',
        information: 'Asala City , New Cairo'
    },
]

export const emailForm = [
    {
        label: 'Enter you name*',
        name: 'name'
    },
    {
        label: 'Enter you Email*',
        name: 'email'
    },
    {
        label: 'Enter you Subject*',
        name: 'Subject'
    },
]