var app = new Vue({
    el: "#app",
    data: {
        
        member: {
            name: "Bruno Gabriel dos Santos",
            email: "bruno.gsantos89@gmail.com",
            resume: "<p>Hi I'm a bachelor in computer science who works in software engineering field with mobile and web development technologies.</p><p>I've more experience using the following programming languages:</p>",
            me: "My hobbies includes street running, watch sports like football and basketball (Corinthians and Los Angeles Lakers fan), watch animes (Dragon Ball and One Piece) and play games."
        },

        socialNetworks: [
            {
                link: "https://steamcommunity.com/id/bruno_john_mcclane",
                cssClass: "fa-steam"
            },
            {
                link: "https://github.com/brunogabriel",
                cssClass: "fa-github"
            },
            {
                link: "https://www.linkedin.com/in/bruno-gabriel-dos-santos-473b0671",
                cssClass: "fa-linkedin"
            }
        ],

        programmingLanguages: [ "Java and Kotlin (Mobile and Web)" , "Python", "NodeJS", "Swift/Objective-C"],

        schools: [
            {
                name: "Universidade Federal de São Paulo (UNIFESP)",
                period: "2010 - 2013",
                degree: "BSC, Computer Science"
            },
            {
                name: "Pontifícia Universidade Católica de Minas Gerais (PUCMINAS)",
                period: "2018 - 2019",
                degree: "Postgraduate, Software Engineering"
            }
        ],

        experiences: [
            {
                company: "XP Inc",
                title: "Senior Android Developer",
                period: "03/2020 - current",
                resume: "Development and maintenance of Android applications, SDKs, Libraries, etc., focused on financial broker Apps.",
                highlights: [
                    "Clean architecture practices using MVP and MVVM architectures",
                    "Modularization",
                    "Reactive Paradigm",
                    "Nice libraries to improve productivity: Firebase Toolset, Retrofit, Dagger2, Room, Flow, etc.",
                    "Integrations with external tools",
                    "Internal company libraries and SDKs development"
                ]
            },
            {
                company: "Guichê Virtual",
                title: "Mobile Tech Lead and Senior Android Developer",
                period: "12/2017 - 02/2020",
                resume: "Helping mobile team to improve knowledge by using nice technologies and solving technical issues in mobile development. Development and maintenance of Android applications focused on bus tickets sales.",
                highlights: [
                    "Help team to decide architectures and solutions to improve team quality",
                    "Android development using emergent technologies, architecture patterns and tools to improve productivity"
                ]
            },
            {
                company: "Guichê Virtual",
                title: "Android Developer",
                period: "01/2017 - 11/2016",
                resume: "Development and maintenance of an Android application focused on bus tickets sales to several companies in brazilian territory. The goal is create a nice platform using frameworks, agile methodologies and newest paradigms.",
                highlights: [
                    "Methodologies: Test-Driven Development (TDD) and Scrum",
                    "Continuos Integrations tools",
                    "Reactive Paradigm",
                    "Emergent Android development concepts: Material Design, RxAndroid, Instrumental Tests, etc.",
                    "Nice libraries to improve productivity: Firebase Toolset, Retrofit, Realm, RxAndroid/Java, EventBus, etc."
                ]
            },
            {
                company: "Simova Tecnologia",
                title: "System Analyst",
                period: "09/2015 - 01/2017",
                resume: "Web and mobile applications development by using frameworks and agile methodologies.",
                highlights: [
                    "Native mobile platforms: Android and Windows Phone",
                    "Backend development: Java, NodeJS and Python (Django and Bottle with Gevent)",
                    "MongoDB",
                    "Kiosk Application: Launcher to block specific uses in smartphones (Kiosk Application)"
                ]
            },
            {
                company: "Phocus Interact",
                title: "Mobile Developer",
                period: "03/2014 - 08/2015",
                resume: "Native mobile applications development for Android and iOS platforms.",
                highlights: [
                    "Google Cloud Messaging (GCM): Push notifications",
                    "In app purchase",
                    "Nice libraries to improve Android productivity: Volley, Glide, GreenDao, AsyncHttp, ZBar, ZXing, Maps, Charts, etc.",
                    "Help development and maintenance of some iOS applications using Objective-C and Swift Language",
                    "Nice libraries to improve iOS productivity: AFNetworking, iCarousel, MBProgressHUD, SDWebImage, Alamofire, etc."
                ]
            },
            {
                company: "Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP)",
                title: "Researcher",
                period: "11/2012 - 10/2013",
                resume: "Work in construction of Collective Intelligence concepts in web and mobile applications focused in Maritaca Project, a form interpreter engine that generates mobile applications for mobile data collection.",
                highlights: [
                    "Form Interpreter Engine",
                    "Barcode processing",
                    "Google Maps",
                    "NoSQL Databases: MongoDB and Apache Cassandra",
                    "Submitted some scientific articles"
                ]
            },
            {
                company: "Conselho Nacional de Desenvolvimento Científico e Tecnológico",
                title: "Researcher",
                period: "12/2011 - 10/2012 ",
                resume: "Development and maintenance of some Android applications.",
                highlights: [
                    "Design patterns (GOF) to create dynamic applications by forms interpretation",
                    "SQLite",
                    "Apache ANT "
                ]
            }
        ],

        publications: [
            {
                title: "Pipeline Architecture for Mobile Data Analysis",
                conference: "2014, Phuket. 28th edition of the International Conference on Information Networking (ICOIN)",
                link: "http://ieeexplore.ieee.org/document/6799730/?reload=true",
                resume: "This paper presents a cloud architecture that allows collecting and analyzing mobile data. The system offers simple and intuitive interfaces to create mobile applications (Apps), without the need for any programming skill to develop them. The platform allows the collection of conventional data, such as numbers and text, and also non-conventional data, such as multimedia files, location information, and barcodes. The collected data can be shared among users on a social network. In addition, we propose a pipeline architecture to data analyzing."
            },
            {
                title: "Empowering Mobile Users: Create Your Own Mobile Application for Data Collection in the Cloud",
                conference: "Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering. 130ed.: Springer International Publishing, 2014, v. , p. 269-272.",
                link: "https://link.springer.com/chapter/10.1007%2F978-3-319-05452-0_21",
                resume: "This paper presents a cloud infrastructure that allows users to create mobile applications to collect and visualize data. The system offers simple and intuitive interfaces to create Apps, without the need for any programming skill to develop them. The platform allows the collection of conventional data, such as numbers and text, and also non-conventional data, such as multimedia files, location information, barcodes, etc. The collected data can be shared among users on a social network, allowing Apps to extract intelligence from the collected data. The system is based on free software."
            },
            {
                title: "Open Architecture for Mobile Data Collection using Cloud Computing",
                conference: "14th IEEE International Conference on Mobile Data Management",
                link: "http://ieeexplore.ieee.org/document/6569083/?arnumber=6569083",
                resume: "Presents the architecture of Maritaca, a cloud infrastructure for mobile data collection. The system allows the user create mobile Apps for data gathering using simple interfaces; no programming skill is needed. The platform collects conventional data and, in addition, allows to collect multimedia, location information, sketches, barcodes, etc. The collected data can be shared, allowing the formation of small networks for sharing of mobile data. The data is stored in a scalable cloud infrastructure, based on Cassandra and Hadoop products."
            },
            {
                title: "Projeto Maritaca: Arquitetura e Infraestrutura para Coleta Móvel de Dados Usando Smartphones",
                conference: "31º Simpósio Brasileiro de Redes de Computadores e Sistemas Distribuídos",
                link: "http://sbrc2013.unb.br/files/anais/salao-ferramentas/artigos/artigo-75.pdf",
                resume: "This paper presents the architecture of Maritaca Project, an infrastructure for collecting data from Android mobile devices. The system enables the creation of mobile applications for data collection without requiring knowledge of programming techniques."
            },
            {
                title: "Ferramentas para Coleta Movel de Dados",
                conference: "IX Simpósio Brasileiro de Sistemas de Informação (SBSI 2013)",
                link: "http://www.lbd.dcc.ufmg.br/colecoes/sbsi/2013/0013.pdf",
                resume: "The usage of mobile devices is growing rapidly. Actually, it is increasingly common to use digital forms for mobile data acquisition using mobile devices (smartphones and tablets). This paper presents the project Maritaca, an open solution for create mobile applications to data gathering using Android mobile devices. By using the platform, no programming skill is needed to create the mobile applications. Moreover, the platform facilitates the sharing of the collected data in the cloud, thus allowing the formation of social networks for gathering and information sharing. The project was designed to support a heavy volume of users and data acquisition."
            },
            {
                title: "Automatic application generation",
                conference: "Fórum Internacional de Software Livre (FISL 2015)",
                link: "https://www.youtube.com/watch?v=gZbJLiLY_w0",
                resume: "The Maritaca Project was selected and presented in FISL by project owner."
            }
        ],

        extraInformations: [
            "Scholarship in Differential and Integral Calculus",
            "Scholarship in Programa de Aperfeiçoamento para Professores de Matemática do Ensino Médio (PAPMEM), association between Universidade Federal de São Paulo (UNIFESP) and Instituto de Matemática Pura e Aplicada (IMPA)",
            "Scholarship to promove opensource tools in university at Programa de Educação em Software Livre (PESL)"
        ]
    }
});