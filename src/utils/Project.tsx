import project1Img1 from '../assets/Project1/Project1-Img1.png';
import project1Img2 from '../assets/Project1/Project1-Img2.png';
import project1Img3 from '../assets/Project1/Project1-Img3.png';
import project1Img4 from '../assets/Project1/Project1-Img4.png';
import project1Img5 from '../assets/Project1/Project1-Img5.png';

import project2Img1 from '../assets/Project2/Project2-Img1.png';
import project2Img2 from '../assets/Project2/Project2-Img2.png';
import project2Img3 from '../assets/Project2/Project2-Img3.png';
import project2Img4 from '../assets/Project2/Project2-Img4.png';

import project3Img1 from '../assets/Project3/Project3-Img1.png';
import project3Img2 from '../assets/Project3/Project3-Img2.png';
import project3Img3 from '../assets/Project3/Project3-Img3.png';

export const Project1 = {
    name: 'On Sale',
    type: 'iOS Application',
    detail: 'HCI Design Process + Swift',
    subinfo: ['Individual Project(Apr 2020 - Jun 2020)', 'UX Researcher, Designer, App Developer'],
    Subtitles: [
        'TTS based iOS Application',
        'Early Stages',
        'Prototyping Stages',
        'Application of various HCI Theories',
        'Quantitative & Qualitative Validation'
    ],
    TTT: [
        ['The Problem', 'At offline supermarkets, merchandisers go over repetitive task of delivering promotional speeches to the customers.'],
        ['The Purpose', 'Create iOS Application where supermarket merchandisers can easily create a natural and dynamic speeches instantly.'],
        ['Target User', 'Supermarket Merchandisers who should minimize the daily inventory of variety range of fresh products.']
    ],
    Images: [
        project1Img1,
        project1Img2,
        project1Img3, 
        project1Img4,
        project1Img5,
    ],
    Captions: [
        ['Individual Project(Apr 2020 - Jun 2020)', 'UX Researcher, Designer, App Developer'],
        ['Brainstorming Process', 'Upper Row: Primary Persona', 'Lower Low: Served User'],
        ['Developing Low-Fi Prototype Interface with Figma', 'Validating & Handling Leaks for the better design'],
        ['Hi-Fi Prototype, developed with Swift'],
        ['Speech Playing Screen Example'],
    ],
    Paragraphs: [
        {
            'Design Process': [
                ['1. Target User Interviews', 'Q. What are the main purposes of promotional speeches? A. In offline retailing spaces, it is important to reduce the size of daily inventory of fresh foods. In order to facilitate the consumption, promotions are done alongside with promotional speeches.  Q. What are the limitations of not using automated program to generate those speeches? A. There are various range of products that need to be promoted, however, relatively only few of those products can be handled from our own employees.'],
                ['2. Key Personas', 'Primary Persona: Supermarket merchandisers, with little experience using mobile applications. Served User Persona: Generated TTS should also serve the needs of Served Users. The sound should be authentic and aesthetically attractive.'],
                ['3. Brainstorming', '- Helping primary persona to generate and alternate the speech fast will be crucial. - Connectivity with POS or other product management system will be useful. - Mixing chimes in the middle of the speech will attract the served users attention.']
            ]
        },
        {
            'Design Process': [
                ['4. Low-Fi Prototype', 'Using Figma to design the Low-Fi Prototype. Testing and Debugging process of these prototypes are repetitively done with users. For instance, the interface of inputting the product information had added the Image-Text Recognition Step for the users faster completion of the form.'],
                ['5. Hi-Fi Prototype with SwiftUI', 'Using SwiftUI to develop the Hi-Fi Prototype. Designing Application Frontend and Backend Database Structure.'],
                ['6. Evaluation & Validation', 'Testing the developed Hi-Fi Prototype with users, with iPhone devices under real world constraints.'],
            ]
        },
        {
            'Interface Considerations': [
                ['Information Chunking', `Group 8 options into three groups, chunking the relative information. On the left screen, 8 options of sentences that user can select as a TTS script is chunked into three groups, each representing product-related, price-related, chime-related sentences.`],
                ['Categorical vs. Continuous Variables', 'Sound Pitch, Speed, Volume and Variance are the four variables that user have to adjust. Display the former two as categorical variables, and the latter two as continuous variables: Users are less experienced adjusting the former variables, thus have rather abstract information on how these variables will affect the speech.'],
                ['Incremental Feedback', `Leverage both of Visual and Numerical feedbacks to prevent the users' cognitive confusement throughout the process,`],
                [`Fitt's Law`, `'Next' Button displayed at the bottom horizontally, minimizing the user's time to click the button.`],
            ]
        },
        {
            'Evaluation & Validation': [
                ['Continuous Debugging', 'Throughout the prototyping phases, keep in touch with the users in order to debug the prototype: Users know the best.'],
                ['Think Aloud', 'Qualitative Validation: Think Aloud method can leverage what the tester immediately thinks while going through the prototype. For instance, the tester had commented that even though there are many information displayed on the left screen, each of the component will be friendly to the repetitive iPhone users, thus causing no significant cognitive distraction.'],
                ['User Surveys', 'Quantitative Validation: 22 Questionnaires divided into 7 parts, 5 parts evaluating the each step of the interface, and the other 2 parts evaluating the overall experiences and design throughout the prototype.'],
            ]
        },

    ]
};

export const Project2 = {
    name: 'Scent of a Tulip',
    type: 'Data Visualization',
    detail: 'Stock Price Time Series Visualization',
    TTT: [
        ['The Problem', `Traditional Time Series Data forces the audience to project the future in inductive manner: That the recent trend will continue to the future. Hence in reality, such projection may turned out to be fatally incorrect in wild and unexpected environment of stock market.`],
        ['The Purpose', 'Redesign the Time Series Data in way that user can interpret in regressive manner. Display the recent 5 years of stock data of FAANG companies, and argue that the current price is exaggerated compared to the overall average of recent years.'],
        ['Target Audience', 'The public']
    ],
    Images: [
        project2Img1,
        project2Img2,
        project2Img3, 
        project2Img4,
    ],
    Subtitles: [
        'A different approach to the Time Series Data.',
        'Regressive and Conservative approach.',
        'How to analyze the visualization.',
        'Criticizing the Stock price of 6 major IT companies: FAANG + Microsoft.',
    ],
    Captions: [
        ['Individual Project(May 2020 - Jun 2020)', 'Designer, Processing(Java) Developer'],
        ['Three steps of redesigning the traditional stock graph'],
        ['X-Axis: Dollar-Axis', 'Y-Axis: Longevity of certain price', 'Color: Time(Red: Present Time)'],
        ['From Top-Left:', 'Facebook, Amazon, Apple', 'Netflix, Microsoft, Google'],
    ],
    Paragraphs: [
        {
            'Redesign the graph': [
                ['1. Plain Stock Graph', 'X-Axis: Time(Last 5 Years), Y-Axis: Stock Price in USD'],
                ['2. Rotate 90 degrees', 'X-Axis: Stock Price in USD, Y-Axis: Time(Last 5 Years)'],
                ['3. Project to the dollar axis', 'X-Axis: Stock Price in USD, Y-Axis: Delta-Time(Period of time in which the stock price had staggered)'],
            ]
        },
        {
            'New Interpretation': [
                ['Stock Price Distribution', `This newly designed graph can be interpreted as a stock price distribution, showing the distribution of the Amazon's stock price for the past 5 years.`],
                ['X-Axis shows the price', 'In this graph, x-axis shows that the price had increased about five times fold from the initial price 5 years ago.'],
                ['Y-Axis shows the Period of Time', 'There are three main y-axis peaks in this graph: Approximately on $700, $1500 and $3000, insisting the price had stayed long on that range.'],
                ['Color shows the Point of Time', 'Darker the red, closer to the present time. Strong correlation between the color mapping and the dollar axis shows that the price had consistently increased throughout the past years.']
            ]
        },
        {
            'Implication': [
                ['Rapid Increase in past years', 'All of the 6 graphs show that there was a rapid increase in stock prices of those companies. Notably, one can also notice a rapid price increase around early 2020, most likely to be induced by Covid-19.'],
                ['Regressive, perhaps pessimistic', 'Inductive interpretation focuses on the incremental trend, while this regressive approach signifies the exact opposite: The current stock price is exaggerated.'],
                ['Scent of a Tulip', 'An analogy with the historically famous Dutch Tulip Bubble. This visualization had translated several phases into Dutch, including the following quotation: History teaches us that no man learns from the history - Hegel'],
            ]
        },

    ],
  
};

export const Project3 = {
    name: 'ISC Exhibition',
    type: 'End of Semester Exhibition',
    detail: 'ReactJS Web Development',
    TTT: [
        ['The Problem', 'Each semester, ISC(Information Science and Culture) presents an end of semester exhibition. This year, it was unable to held an offline End of Semester Exhibition due to the Covid-19.'],
        ['The Purpose', `A web version of the exhibition, which can still help the ISC members to interact with each other's works.`],
        ['Target Audience', 'Members or prospective members of ISC(Information Science and Culture) @Seoul National University.']
    ],
    Images: [
        project3Img1,
        project3Img2,
        project3Img3, 
    ],
    Captions: [
        ['ISC Exhibition Organization Committee' , '10 Teammates, Apr 2020 - Jun 2020', 'Frontend Developer'],
        ['Responsive UI: Mobile Version Layout'],
        ['Responsive UI: Desktop Version Layout'],
    ],
    Subtitles: [
        'End of Semester Web Exhibition',
        'With Consideration of the Users',
        'ReactJS + NestJS + MongoDB',
    ],
    Paragraphs: [
        {
            'Concept & Ideas': [
                ['1. Zoom-like UI', 'Zoom UI emphasizes the influence of Covid-19 to the way we interact with each other, which is the reason why the exhibition was held online.'],
                ['2. Mac Finder UI', 'To effectively display 70+ different student works in a single site, we had implemented the friendly Mac Finder UI.'],
                ['3. (Probably) The last online exhibition', 'The title for this exhibition, fulfilled with hope to meet again face to face for the following semester.'],
            ]
        },
        {
            'Web Development': [
                ['Responsive Web', 'Responsive web with consideration that majority of users will come through the Instagram Channels on the mobile devices.'],
                ['Typescript + Sass', 'Two frontend developers worked with ReactJS + Typescript + Sass technical stack.'],
                ['Priority on UX', 'Events, Drag-and-droppable elements, notifications, real-world mocked-up interactions enabled to provide the user best experience, under a solid goal of the exhibition: To help our members come together online as if it were offline.']
            ]
        },

    ]
};

export const Project4 = {
    name: 'Laboratory Occupied',
    type: 'ReactJS Web Application',
    detail: 'HCI Design Process + Swift',
    subinfo: ['Individual Project(Apr 2020 - Jun 2020)', 'UX Researcher, Designer, APp Developer'],
    Subtitles: [
        'TTS based iOS Application',
        'Early Stages',
        'Late Stages',
        'Applicating various HCI Theories',
        'Quantitative & Qualitative Validation'
    ],
    TTT: [
        ['The Problem', 'At offline supermarkets, promotional speeches delivered to the customers'],
        ['The Purpose', 'Hello WOrld'],
        ['Target User', 'Hello WOrld']
    ],
    Images: [
        project1Img1,
        project1Img2,
        project1Img3, 
        project1Img4,
        project1Img5,
    ],
    Captions: [
        ['Individual Project(Apr 2020 - Jun 2020)', 'UX Researcher, Designer, App Developer'],
        ['Brainstorming Process'],
        ['Developing Prototype Interface'],
        ['Hi-Fi Prototype, developed with Swift'],
        ['Speech Playing Screen Example'],
    ],
    Paragraphs: [
        {
            'Deisgn Process': [
                ['Step 1', 'At offline'],
                ['Step 2', 'Brainstorming'],
                ['Step 3', 'Think Aloud'],
                ['4. Low-Fi Prototyping', 'Low-Fi Prototyping']
            ]
        },
        {
            'Evaluation & Validation': [
                ['Main Screen', 'At offline'],
                ['Information Chunking', 'Brainstorming'],
                ['Categorical vs. ', 'Think Aloud'],
                ['Feedback', 'Low-Fi Prototyping']
            ]
        },

    ]
};

export const Project5 = {
    name: 'Born, Live and Die',
    type: 'iOS Application',
    detail: 'HCI Design Process + Swift',
    subinfo: ['Individual Project(Apr 2020 - Jun 2020)', 'UX Researcher, Designer, APp Developer'],
    Subtitles: [
        'TTS based iOS Application',
        'Early Stages',
        'Late Stages',
        'Applicating various HCI Theories',
        'Quantitative & Qualitative Validation'
    ],
    TTT: [
        ['The Problem', 'At offline supermarkets, promotional speeches delivered to the customers'],
        ['The Purpose', 'Hello WOrld'],
        ['Target User', 'Hello WOrld']
    ],
    Images: [
        project1Img1,
        project1Img2,
        project1Img3, 
        project1Img4,
        project1Img5,
    ],
    Captions: [
        ['Individual Project(Apr 2020 - Jun 2020)', 'UX Researcher, Designer, App Developer'],
        ['Brainstorming Process'],
        ['Developing Prototype Interface'],
        ['Hi-Fi Prototype, developed with Swift'],
        ['Speech Playing Screen Example'],
    ],
    Paragraphs: [
        {
            'Deisgn Process': [
                ['Step 1', 'At offline'],
                ['Step 2', 'Brainstorming'],
                ['Step 3', 'Think Aloud'],
                ['4. Low-Fi Prototyping', 'Low-Fi Prototyping']
            ]
        },
        {
            'Deisgn Process(Continued)': [
                ['Step 1', 'At offline'],
                ['Step 2', 'Brainstorming'],
                ['Step 3', 'Think Aloud'],
                ['4. Low-Fi Prototyping', 'Low-Fi Prototyping']
            ]
        },
        {
            'Interface Consdierations': [
                ['Main Screen', 'At offline'],
                ['Information Chunking', 'Brainstorming'],
                ['Categorical vs. ', 'Think Aloud'],
                ['Feedback', 'Low-Fi Prototyping']
            ]
        },
        {
            'Evaluation & Validation': [
                ['Main Screen', 'At offline'],
                ['Information Chunking', 'Brainstorming'],
                ['Categorical vs. ', 'Think Aloud'],
                ['Feedback', 'Low-Fi Prototyping']
            ]
        },

    ]
    
  
};


export const Project6 = {
    name: 'In Coin We Trust',
    type: 'iOS Application',
    detail: 'HCI Design Process + Swift',
    subinfo: ['Individual Project(Apr 2020 - Jun 2020)', 'UX Researcher, Designer, APp Developer'],
    Subtitles: [
        'TTS based iOS Application',
        'Early Stages',
        'Late Stages',
        'Applicating various HCI Theories',
        'Quantitative & Qualitative Validation'
    ],
    TTT: [
        ['The Problem', 'At offline supermarkets, promotional speeches delivered to the customers'],
        ['The Purpose', 'Hello WOrld'],
        ['Target User', 'Hello WOrld']
    ],
    Images: [
        project1Img1,
        project1Img2,
        project1Img3, 
        project1Img4,
        project1Img5,
    ],
    Captions: [
        ['Individual Project(Apr 2020 - Jun 2020)', 'UX Researcher, Designer, App Developer'],
        ['Brainstorming Process'],
        ['Developing Prototype Interface'],
        ['Hi-Fi Prototype, developed with Swift'],
        ['Speech Playing Screen Example'],
    ],
    Paragraphs: [
        {
            'Deisgn Process': [
                ['Step 1', 'At offline'],
                ['Step 2', 'Brainstorming'],
                ['Step 3', 'Think Aloud'],
                ['4. Low-Fi Prototyping', 'Low-Fi Prototyping']
            ]
        },
        {
            'Evaluation & Validation': [
                ['Main Screen', 'At offline'],
                ['Information Chunking', 'Brainstorming'],
                ['Categorical vs. ', 'Think Aloud'],
                ['Feedback', 'Low-Fi Prototyping']
            ]
        },
    ]
  
};

export const Project7 = {
    name: 'Tril.ogy',
    type: 'iOS Application',
    detail: 'HCI Design Process + Swift',
    subinfo: ['Individual Project(Apr 2020 - Jun 2020)', 'UX Researcher, Designer, APp Developer'],
    Subtitles: [
        'TTS based iOS Application',
        'Early Stages',
        'Late Stages',
        'Applicating various HCI Theories',
        'Quantitative & Qualitative Validation'
    ],
    TTT: [
        ['The Problem', 'At offline supermarkets, promotional speeches delivered to the customers'],
        ['The Purpose', 'Hello WOrld'],
        ['Target User', 'Hello WOrld']
    ],
    Images: [
        project1Img1,
        project1Img2,
        project1Img3, 
        project1Img4,
        project1Img5,
    ],
    Captions: [
        ['Individual Project(Apr 2020 - Jun 2020)', 'UX Researcher, Designer, App Developer'],
        ['Brainstorming Process'],
        ['Developing Prototype Interface'],
        ['Hi-Fi Prototype, developed with Swift'],
        ['Speech Playing Screen Example'],
    ],
    Paragraphs: [
        {
            'Deisgn Process': [
                ['Step 1', 'At offline'],
                ['Step 2', 'Brainstorming'],
                ['Step 3', 'Think Aloud'],
                ['4. Low-Fi Prototyping', 'Low-Fi Prototyping']
            ]
        },
        {
            'Evaluation & Validation': [
                ['Main Screen', 'At offline'],
                ['Information Chunking', 'Brainstorming'],
                ['Categorical vs. ', 'Think Aloud'],
                ['Feedback', 'Low-Fi Prototyping']
            ]
        },

    ]
};


