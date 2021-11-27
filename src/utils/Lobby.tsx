import project1Img1 from '../assets/Project1/Project1-Img1.png';
import project1Img2 from '../assets/Project1/Project1-Img2.png';
import project1Img3 from '../assets/Project1/Project1-Img3.png';
import project1Img4 from '../assets/Project1/Project1-Img4.png';
import project1Img5 from '../assets/Project1/Project1-Img5.png';

import Lobby11 from '../assets/Lobby/Lobby11.png';
import Lobby12 from '../assets/Lobby/Lobby12.png';
import Lobby13 from '../assets/Lobby/Lobby13.png';
import Lobby14 from '../assets/Lobby/Lobby14.jpeg';
import Lobby15 from '../assets/Lobby/Lobby15.png';

import project4Img1 from '../assets/Project4/Project4-Img1.png';
import project4Img2 from '../assets/Project4/Project4-Img2.png';
import project4Img3 from '../assets/Project4/Project4-Img3.png';



export const Lobby1 = {
    name: `Monument for D.Flavin's Monument for V.Tatlin`,
    type: 'Metaverse Installation',
    detail: '',
    link: [],
    Subtitles: [
        'Metaverse Sculpture',
        'A Metaverse for Mars',
        'Chanel Logo',
        'D.Flavin, <Monument for V.Tatlin>',
        'Tilting Metaphysics',
    ],
    TTT: [
        ['36 Elevators', 'Made of 36 metaverse elevators, this sculpture aims to criticize our tendency to simulate the real world inside the virtual world.'],
    ],
    Images: [
        Lobby11,
        Lobby12,
        Lobby13, 
        Lobby14,
        Lobby15,
    ],
    Captions: [
        ['Individual Project(Aug 2020 - Sep 2020)', 'Artist'],
        ['View of Hidden Order'],
        ['Early Draft of Elevator Allocation'],
        ['Photo Credits from The Museum of Contemporary Art'],
        ['View of the Monument'],
    ],
    Paragraphs: [
        {
            'Hidden Order': [
                [`Art Council Korea's <Art Talk>`, `This sculpture was conducted as part of the Art Council Korea(ARKO)'s Emerging Artists Program, Art Talk. The theme of this program is to expand the boundary of artistic expression in a virtual environment. ARKO is a`],
                ['Hidden Order Platform', `Hidden Order is a Metaverse Platform, with its landscape setted as a Mars. Hidden Order is commonly used as a platform for virtual exhibitions, as it were for this time's ARKO Art Talk.`],
            ]
        },
        {
            'Design Process': [
                ['Horizontal Placement', `36 elevators are placed horizontally in a shape of Chanel Logo: Each of the elevators has a random vertical movement, but it's aerial position would not change.`],
                ['Semiotics behind the logo', `The Chanel Logo is acting as a significant signifier in this sculpture. It can be comprehended in two dimensions: First, in a relationship with its naming(<Monument for D.Flavin's Monument for V.Tatlin>), Second, in a relationship with its philosophical criticism on metaphysics.`],
            ]
        },
        {
            'Influences': [
                ['Vladimir Tatlin', `Influenced in a sense of using abstract form and technology, and in a sense of arguing that technology and art should be used for the society's good.`],
                ['Dan Flavin', `Influenced in a sense of creating a collective impression using abstract and elementric forms.`],
                ['Chronological Metaphor', `V.Tatlin-Early Soviet-Metal, D.Flavin-Post War Capitalism-Fluorescent Light Tubes, JYC-Global Capitalism-Chanel Logo`],
            ]
        },
        {
            'Philosophy': [
              [`Liberating Elevators`, `This project liberates elevators from its predetermined purpose as a transporation, resulting in a nonpurposive state of aesthetics, as Kant had declared.`],
              [`Value Creation`, `We tend to simulate the real world inside the virtual domain. This project criticizes this attempt by tilting the purpose of simulated elevators. This enables us to recreate and rejustify the value of an object, and as Nieztsche had declared, revaluating is the source of our creation process. Thus, this monument is not only criticizing the simulative usage of the metaverse itself: it is ultimately attacking the validity of Platonic Metaphysics.`],
            ]
        },
    ]
};


export const Lobby2 = {
    name: 'On Sale',
    type: 'iOS Application',
    detail: 'HCI Design Process + Swift',
    link: [],
    Subtitles: [
        'TTS based iOS Application',
        'Early Stages',
        'Prototyping Stages',
        'Application of various HCI Theories',
        'Quantitative & Qualitative Validation'
    ],
    TTT: [
        ['The Problem', 'At offline supermarkets, merchandisers go over the repetitive task of delivering promotional speeches to the customers.'],
        ['The Purpose', 'Create iOS Application where supermarket merchandisers can easily create natural and dynamic speeches instantly.'],
        ['Target User', 'Supermarket Merchandisers who should minimize the daily inventory of a variety of fresh products.']
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
        ['Developing Low-Fi Prototype Interface with Figma', 'Validating & Handling Leaks for better design'],
        ['Hi-Fi Prototype, developed with Swift'],
        ['Speech Playing Screen Example'],
    ],
    Paragraphs: [
        {
            'Design Process': [
                ['1. Target User Interviews', 'Q. What are the main purposes of promotional speeches? A. In offline retailing spaces, it is important to reduce the size of daily inventory of fresh foods. In order to facilitate the consumption, promotions are done alongside promotional speeches.  Q. What are the limitations of not using an automated program to generate those speeches? A. There are various products that need to be promoted, however, only a few of those products can be handled from our own employees.'],
                ['2. Key Personas', 'Primary Persona: Supermarket merchandisers, with little experience using mobile applications. Served User Persona: Generated TTS should also serve the needs of Served Users. The sound should be authentic and aesthetically attractive.'],
                ['3. Brainstorming', '- Helping primary personas to generate and alternate the speech fast will be crucial. - Connectivity with POS or other product management systems will be useful. - Mixing chimes in the middle of the speech will attract the served users attention.']
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
                ['Information Chunking', `Group 8 options into three groups, chunking the relative information. On the left screen, 8 options of sentences that the user can select as a TTS script are chunked into three groups, each representing product-related, price-related, chime-related sentences.`],
                ['Categorical vs. Continuous Variables', 'Sound Pitch, Speed, Volume and Variance are the four variables that users have to adjust. Display the former two as categorical variables, and the latter two as continuous variables: Users are less experienced adjusting the former variables, thus have rather abstract information on how these variables will affect the speech.'],
                ['Incremental Feedback', `Leverage both of Visual and Numerical feedback to prevent the users' cognitive confusement throughout the process,`],
                [`Fitts Law`, `'Next' Button displayed at the bottom horizontally, minimizing the user's time to click the button.`],
            ]
        },
        {
            'Evaluation & Validation': [
                ['Continuous Debugging', 'Throughout the prototyping phases, keep in touch with the users in order to debug the prototype: Users know the best.'],
                ['Think Aloud', 'Qualitative Validation: Think Aloud method can leverage what the tester immediately thinks while going through the prototype. For instance, the tester had commented that even though there is a lot of information displayed on the left screen, each of the components will be friendly to the repetitive iPhone users, thus causing no significant cognitive distraction.'],
                ['User Surveys', 'Quantitative Validation: 22 Questionnaires divided into 7 parts, 5 parts evaluating the each step of the interface, and the other 2 parts evaluating the overall experiences and design throughout the prototype.'],
            ]
        },

    ]
};



export const Lobby3 = {
    name: 'ISC Showcase',
    type: 'Undergraduate Showcase Website',
    detail: 'ReactJS Web Development',
    link: ['https://iscexhibition.com/main'],
    TTT: [
        ['The Problem', 'Each semester, ISC(Information Science and Culture) presents an end of semester exhibition. This year, it was unable to hold an offline End of Semester Exhibition due to the Covid-19.'],
        ['The Purpose', `A web version of the exhibition, which can still help the ISC members to interact with each other's works.`],
        ['Target Audience', 'Members or prospective members of ISC(Information Science and Culture) @Seoul National University.']
    ],
    Images: [
        project4Img1,
        project4Img2,
        project4Img3, 
    ],
    Captions: [
        ['ISC Exhibition Organization Committee' , '10 Teammates, Apr 2020 - Jun 2020', 'My Role: Frontend Developer'],
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
                ['2. Mac Finder UI', 'To effectively display 70+ different student works in a single site, we have implemented the friendly Mac Finder UI.'],
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



