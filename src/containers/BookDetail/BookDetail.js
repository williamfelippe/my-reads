import React, { Component } from 'react'
import { PageHandler } from '../../components'
import { get } from '../../api/BooksAPI'
import { Row, Col } from 'react-materialize'
import isObjectEmpty from '../../utils/isObjectEmpty'

class BookDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            error: false,
            errorMessage: '',
            book: {}
        }
    }

    componentDidMount() {
        const { match } = this.props
        const { bookId } = match.params

        /**
         * 
         */
        this.fetchBookById(bookId)
    }

    /**
     * 
     * 
     * @param {string} bookId 
     * @memberof BookDetail
     */
    fetchBookById(bookId) {

        this.setState({ loading: true }, () => {

            /**
             * 
             */
            get(bookId)
                .then(book => {
                    this.setState({
                        book,
                        loading: false
                    })
                })
                .catch(error => {
                    console.log(error)

                    this.setState({
                        loading: false,
                        error: true
                    })
                })
        })
    }

    /**
     * {
   "books":[
      {
         "title":"The Linux Command Line",
         "subtitle":"A Complete Introduction",
         "authors":[
            "William E. Shotts, Jr."
         ],
         "publisher":"No Starch Press",
         "publishedDate":"2012",
         "description":"You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\"",
         "industryIdentifiers":[
            {
               "type":"ISBN_13",
               "identifier":"9781593273897"
            },
            {
               "type":"ISBN_10",
               "identifier":"1593273894"
            }
         ],
         "readingModes":{
            "text":true,
            "image":false
         },
         "pageCount":480,
         "printType":"BOOK",
         "categories":[
            "COMPUTERS"
         ],
         "averageRating":4,
         "ratingsCount":2,
         "maturityRating":"NOT_MATURE",
         "allowAnonLogging":true,
         "contentVersion":"1.2.2.0.preview.2",
         "panelizationSummary":{
            "containsEpubBubbles":false,
            "containsImageBubbles":false
         },
         "imageLinks":{
            "smallThumbnail":"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail":"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
         },
         "language":"en",
         "previewLink":"http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
         "infoLink":"https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api",
         "canonicalVolumeLink":"https://market.android.com/details?id=book-nggnmAEACAAJ",
         "id":"nggnmAEACAAJ",
         "shelf":"currentlyReading"
      },
      {
         "title":"Learning Web Development with React and Bootstrap",
         "authors":[
            "Harmeet Singh",
            "Mehul Bhatt"
         ],
         "publishedDate":"2016-12-30",
         "description":"Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.",
         "industryIdentifiers":[
            {
               "type":"ISBN_10",
               "identifier":"1786462494"
            },
            {
               "type":"ISBN_13",
               "identifier":"9781786462497"
            }
         ],
         "readingModes":{
            "text":false,
            "image":false
         },
         "pageCount":278,
         "printType":"BOOK",
         "maturityRating":"NOT_MATURE",
         "allowAnonLogging":false,
         "contentVersion":"preview-1.0.0",
         "panelizationSummary":{
            "containsEpubBubbles":false,
            "containsImageBubbles":false
         },
         "imageLinks":{
            "smallThumbnail":"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail":"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
         },
         "language":"en",
         "previewLink":"http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api",
         "infoLink":"http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api",
         "canonicalVolumeLink":"https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ",
         "id":"sJf1vQAACAAJ",
         "shelf":"currentlyReading"
      },
      {
         "title":"React",
         "subtitle":"Die praktische Einführung in React, React Router und Redux",
         "authors":[
            "Nils Hartmann",
            "Oliver Zeigermann"
         ],
         "publisher":"dpunkt.verlag",
         "publishedDate":"2016-07-07",
         "description":"React ist ein JavaScript-Framework zur Entwicklung von Benutzeroberflächen sowohl im Browser als auch auf Mobilgeräten. Entwickelt und eingesetzt von Facebook ist es mittlerweile als Open-Source-Projekt verfügbar und hat sich bereits im Einsatz bei diversen namhaften Websites, wie z. B. Airbnb und Netflix, bewährt. Dieses Buch stellt Ihnen die Konzepte von React, React Router und Redux anhand eines durchgehenden Beispiels vor. Sie lernen, wie Sie mit React wiederverwendbare UI-Komponenten entwickeln und wie Sie auf Basis der einzelnen Komponenten ganze Anwendungen zusammenbauen. Unter anderem werden folgende Themen behandelt: - Entwickeln und Testen eigener React-Komponenten auf Basis des JavaScript-Standards ECMAScript 2015 (ES6) - Routing mit dem React Router - Das Architektur-Modell Flux und wie damit komplette Anwendungen umgesetzt werden (am Beispiel des Redux-Frameworks) - Serverseitiges Rendern von React-Komponenten und -Anwendungen - Anbindung eines REST-Backends Die im Buch eingesetzten Sprachfeatures aus ES6 werden in einem eigenen Kapitel vorgestellt, sodass zum Verständnis des Buches Kenntnisse von ES5 ausreichen. Nach der Lektüre des Buches werden Sie in der Lage sein, eigene Projekte mit React umzusetzen.",
         "industryIdentifiers":[
            {
               "type":"ISBN_13",
               "identifier":"9783864919640"
            },
            {
               "type":"ISBN_10",
               "identifier":"3864919649"
            }
         ],
         "readingModes":{
            "text":true,
            "image":false
         },
         "pageCount":342,
         "printType":"BOOK",
         "categories":[
            "Computers"
         ],
         "maturityRating":"NOT_MATURE",
         "allowAnonLogging":true,
         "contentVersion":"1.4.3.0.preview.2",
         "panelizationSummary":{
            "containsEpubBubbles":false,
            "containsImageBubbles":false
         },
         "imageLinks":{
            "smallThumbnail":"http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail":"http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
         },
         "language":"de",
         "previewLink":"http://books.google.com/books?id=IOejDAAAQBAJ&dq=redux+react&hl=&cd=15&source=gbs_api",
         "infoLink":"http://books.google.com/books?id=IOejDAAAQBAJ&dq=redux+react&hl=&source=gbs_api",
         "canonicalVolumeLink":"https://books.google.com/books/about/React.html?hl=&id=IOejDAAAQBAJ",
         "id":"IOejDAAAQBAJ",
         "shelf":"currentlyReading"
      },
      {
         "title":"Android Design Patterns",
         "subtitle":"Interaction Design Solutions for Developers",
         "authors":[
            "Greg Nudelman"
         ],
         "publisher":"John Wiley & Sons",
         "publishedDate":"2013-02-19",
         "description":"Master the challenges of Android user interface development with these sample patterns With Android 4, Google brings the full power of its Android OS to both smartphone and tablet computing. Designing effective user interfaces that work on multiple Android devices is extremely challenging. This book provides more than 75 patterns that you can use to create versatile user interfaces for both smartphones and tablets, saving countless hours of development time. Patterns cover the most common and yet difficult types of user interactions, and each is supported with richly illustrated, step-by-step instructions. Includes sample patterns for welcome and home screens, searches, sorting and filtering, data entry, navigation, images and thumbnails, interacting with the environment and networks, and more Features tablet-specific patterns and patterns for avoiding results you don't want Illustrated, step-by-step instructions describe what the pattern is, how it works, when and why to use it, and related patterns and anti-patterns A companion website offers additional content and a forum for interaction Android Design Patterns: Interaction Design Solutions for Developers provides extremely useful tools for developers who want to take advantage of the booming Android app development market.",
         "industryIdentifiers":[
            {
               "type":"ISBN_13",
               "identifier":"9781118417553"
            },
            {
               "type":"ISBN_10",
               "identifier":"1118417550"
            }
         ],
         "readingModes":{
            "text":true,
            "image":true
         },
         "pageCount":456,
         "printType":"BOOK",
         "categories":[
            "Computers"
         ],
         "averageRating":5,
         "ratingsCount":1,
         "maturityRating":"NOT_MATURE",
         "allowAnonLogging":true,
         "contentVersion":"1.4.3.0.preview.3",
         "panelizationSummary":{
            "containsEpubBubbles":false,
            "containsImageBubbles":false
         },
         "imageLinks":{
            "smallThumbnail":"http://books.google.com/books/content?id=Ifg1ZpSo7cwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail":"http://books.google.com/books/content?id=Ifg1ZpSo7cwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
         },
         "language":"en",
         "previewLink":"http://books.google.com/books?id=Ifg1ZpSo7cwC&printsec=frontcover&dq=android&hl=&cd=4&source=gbs_api",
         "infoLink":"https://play.google.com/store/books/details?id=Ifg1ZpSo7cwC&source=gbs_api",
         "canonicalVolumeLink":"https://market.android.com/details?id=book-Ifg1ZpSo7cwC",
         "id":"Ifg1ZpSo7cwC",
         "shelf":"currentlyReading"
      },
      {
         "title":"The Cuckoo's Calling",
         "authors":[
            "Robert Galbraith"
         ],
         "publisher":"Mulholland Books",
         "publishedDate":"2013-04-30",
         "description":"A brilliant debut mystery in a classic vein: Detective Cormoran Strike investigates a supermodel's suicide. After losing his leg to a land mine in Afghanistan, Cormoran Strike is barely scraping by as a private investigator. Strike is down to one client, and creditors are calling. He has also just broken up with his longtime girlfriend and is living in his office. Then John Bristow walks through his door with an amazing story: His sister, thelegendary supermodel Lula Landry, known to her friends as the Cuckoo, famously fell to her death a few months earlier. The police ruled it a suicide, but John refuses to believe that. The case plunges Strike into the world of multimillionaire beauties, rock-star boyfriends, and desperate designers, and it introduces him to every variety of pleasure, enticement, seduction, and delusion known to man. You may think you know detectives, but you've never met one quite like Strike. You may think you know about the wealthy and famous, but you've never seen them under an investigation like this. Introducing Cormoran Strike, this is the acclaimed first crime novel by J.K. Rowling, writing under the pseudonym Robert Galbraith.",
         "industryIdentifiers":[
            {
               "type":"ISBN_13",
               "identifier":"9780316206860"
            },
            {
               "type":"ISBN_10",
               "identifier":"0316206865"
            }
         ],
         "readingModes":{
            "text":true,
            "image":false
         },
         "pageCount":464,
         "printType":"BOOK",
         "categories":[
            "Fiction"
         ],
         "averageRating":3.5,
         "ratingsCount":3037,
         "maturityRating":"NOT_MATURE",
         "allowAnonLogging":true,
         "contentVersion":"1.21.20.0.preview.2",
         "panelizationSummary":{
            "containsEpubBubbles":false,
            "containsImageBubbles":false
         },
         "imageLinks":{
            "smallThumbnail":"http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail":"http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
         },
         "language":"en",
         "previewLink":"http://books.google.com/books?id=evuwdDLfAyYC&printsec=frontcover&dq=rowling&hl=&cd=4&source=gbs_api",
         "infoLink":"https://play.google.com/store/books/details?id=evuwdDLfAyYC&source=gbs_api",
         "canonicalVolumeLink":"https://market.android.com/details?id=book-evuwdDLfAyYC",
         "id":"evuwdDLfAyYC",
         "shelf":"wantToRead"
      },
      {
         "title":"Lords of Finance",
         "subtitle":"The Bankers Who Broke the World",
         "authors":[
            "Liaquat Ahamed"
         ],
         "publisher":"Penguin",
         "publishedDate":"2009-01",
         "description":"Argues that the stock market crash of 1929 and subsequent Depression occurred as a result of poor decisions on the part of four central bankers who jointly attempted to reconstruct international finance by reinstating the gold standard.",
         "industryIdentifiers":[
            {
               "type":"ISBN_10",
               "identifier":"159420182X"
            },
            {
               "type":"ISBN_13",
               "identifier":"9781594201820"
            }
         ],
         "readingModes":{
            "text":false,
            "image":false
         },
         "pageCount":564,
         "printType":"BOOK",
         "categories":[
            "Business & Economics"
         ],
         "averageRating":4.5,
         "ratingsCount":14,
         "maturityRating":"NOT_MATURE",
         "allowAnonLogging":false,
         "contentVersion":"1.0.0.0.preview.0",
         "imageLinks":{
            "smallThumbnail":"http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail":"http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
         },
         "language":"en",
         "previewLink":"http://books.google.com/books?id=74XNzF_al3MC&printsec=frontcover&dq=finance&hl=&cd=1&source=gbs_api",
         "infoLink":"http://books.google.com/books?id=74XNzF_al3MC&dq=finance&hl=&source=gbs_api",
         "canonicalVolumeLink":"https://books.google.com/books/about/Lords_of_Finance.html?hl=&id=74XNzF_al3MC",
         "id":"74XNzF_al3MC",
         "shelf":"wantToRead"
      },
      {
         "title":"Android",
         "subtitle":"Earth Book One of the Android Saga",
         "authors":[
            "Paul J. Ward"
         ],
         "publisher":"Strategic Book Publishing",
         "publishedDate":"2012-11-01",
         "description":"Humans and androids are learning to co-exist as equals, but there are many opposers who seek to subvert their own creations and rule with absolute power ...Humans, with their android creations loyally at their side, have colonised the Moon and Mars. The Earth and Colonies Defence Service (ECDS) keeps the colonies and space lanes safe. On Earth, the Android Protectorate League, led by the enigmatic android leader Traviod Selius, campaign for android rights legislation. However, they are strongly opposed by the Anti-Android Faction (AAF). Following the approval of the Human and Android Cohabitation Act, ECDS Chief of Operations Nakaar Bacvor and co-conspirators form the military wing of the AAF. The AAF attack the Moon and Mars colonies, but are repulsed by ECDS forces. On Earth, with the AAF seemingly defeated, humans and androids unite to create the city of Utopia. Threats from a reformed, more powerful AAF emerges and the crew of the ECDS flagship Harmonia must formulate a defence. The mysterious Evolved Androids appear on Earth with a sytoid child called Eirini, who has strange powers. Utopian Enforcement officer Rul Calibra becomes her unlikely guardian and protector.Humankind's destiny hangs in the balance in the first series installment ANDROID: Earth - Book One of the ANDROID Saga. Paul J. Ward was born in 1969 in Lincolnshire, England, on the day of the historic Apollo 11 moon landing. He has been fascinated by space exploration and technological developments his whole life. This is his first novel. Publisher's website: http: //sbpra.com/PaulJWar",
         "industryIdentifiers":[
            {
               "type":"ISBN_13",
               "identifier":"9781618971241"
            },
            {
               "type":"ISBN_10",
               "identifier":"1618971247"
            }
         ],
         "readingModes":{
            "text":false,
            "image":false
         },
         "pageCount":446,
         "printType":"BOOK",
         "categories":[
            "Fiction"
         ],
         "maturityRating":"NOT_MATURE",
         "allowAnonLogging":false,
         "contentVersion":"preview-1.0.0",
         "imageLinks":{
            "smallThumbnail":"http://books.google.com/books/content?id=xlp6NE2NWecC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail":"http://books.google.com/books/content?id=xlp6NE2NWecC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
         },
         "language":"en",
         "previewLink":"http://books.google.com/books?id=xlp6NE2NWecC&printsec=frontcover&dq=android&hl=&cd=3&source=gbs_api",
         "infoLink":"http://books.google.com/books?id=xlp6NE2NWecC&dq=android&hl=&source=gbs_api",
         "canonicalVolumeLink":"https://books.google.com/books/about/Android.html?hl=&id=xlp6NE2NWecC",
         "id":"xlp6NE2NWecC",
         "shelf":"wantToRead"
      },
      {
         "title":"Needful Things",
         "authors":[
            "Stephen King"
         ],
         "publisher":"Simon and Schuster",
         "publishedDate":"2016-05-03",
         "description":"Now available for the first time in a mass-market premium paperback edition—master storyteller Stephen King presents the classic #1 New York Times bestseller about a mysterious store than can sell you whatever you desire—but not without exacting a terrible price in return. “There are two prices for this. Half…and half. One half is cash. The other is a deed. Do you understand?” The town of Castle Rock, Maine has seen its fair share of oddities over the years, but nothing is a peculiar as the little curio shop that’s just opened for business. Its mysterious proprietor, Leland Gaunt, seems to have something for everyone out on display at Needful Things…interesting items that run the gamut from worthless to priceless. Nothing has a price tag in this place, but everything is certainly for sale. The heart’s desire for any resident of Castle Rock can easily be found among the curiosities…in exchange for a little money and—at the specific request of Leland Gaunt—a whole lot of menace against their fellow neighbors. Everyone in town seems willing to make a deal at Needful Things, but the devil is in the details. And no one takes heed of the little sign handing on the wall: Caveat emptor. In other words, let the buyer beware…",
         "industryIdentifiers":[
            {
               "type":"ISBN_13",
               "identifier":"9781501143786"
            },
            {
               "type":"ISBN_10",
               "identifier":"1501143786"
            }
         ],
         "readingModes":{
            "text":false,
            "image":false
         },
         "pageCount":960,
         "printType":"BOOK",
         "categories":[
            "Fiction"
         ],
         "averageRating":3.5,
         "ratingsCount":28,
         "maturityRating":"NOT_MATURE",
         "allowAnonLogging":false,
         "contentVersion":"1.3.1.0.preview.0",
         "imageLinks":{
            "smallThumbnail":"http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail":"http://books.google.com/books/content?id=jAUODAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
         },
         "language":"en",
         "previewLink":"http://books.google.com/books?id=jAUODAAAQBAJ&printsec=frontcover&dq=king&hl=&cd=8&source=gbs_api",
         "infoLink":"http://books.google.com/books?id=jAUODAAAQBAJ&dq=king&hl=&source=gbs_api",
         "canonicalVolumeLink":"https://books.google.com/books/about/Needful_Things.html?hl=&id=jAUODAAAQBAJ",
         "id":"jAUODAAAQBAJ",
         "shelf":"read"
      },
      {
         "title":"Satire TV",
         "subtitle":"Politics and Comedy in the Post-Network Era",
         "authors":[
            "Jonathan Gray",
            "Jeffrey P. Jones",
            "Ethan Thompson"
         ],
         "publisher":"NYU Press",
         "publishedDate":"2009-04-01",
         "description":"Satirical TV has become mandatory viewing for citizens wishing to make sense of the bizarre contemporary state of political life. Shifts in industry economics and audience tastes have re-made television comedy, once considered a wasteland of escapist humor, into what is arguably the most popular source of political critique. From fake news and pundit shows to animated sitcoms and mash-up videos, satire has become an important avenue for processing politics in informative and entertaining ways, and satire TV is now its own thriving, viable television genre. Satire TV examines what happens when comedy becomes political, and politics become funny. A series of original essays focus on a range of programs, from The Daily Show to South Park, Da Ali G Show to The Colbert Report, The Boondocks to Saturday Night Live, Lil’ Bush to Chappelle’s Show, along with Internet D.I.Y. satire and essays on British and Canadian satire. They all offer insights into what today’s class of satire tells us about the current state of politics, of television, of citizenship, all the while suggesting what satire adds to the political realm that news and documentaries cannot.",
         "industryIdentifiers":[
            {
               "type":"ISBN_10",
               "identifier":"081473216X"
            },
            {
               "type":"ISBN_13",
               "identifier":"9780814732168"
            }
         ],
         "readingModes":{
            "text":true,
            "image":false
         },
         "pageCount":288,
         "printType":"BOOK",
         "categories":[
            "Performing Arts"
         ],
         "maturityRating":"NOT_MATURE",
         "allowAnonLogging":true,
         "contentVersion":"0.6.4.0.preview.2",
         "panelizationSummary":{
            "containsEpubBubbles":false,
            "containsImageBubbles":false
         },
         "imageLinks":{
            "smallThumbnail":"http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail":"http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
         },
         "language":"en",
         "previewLink":"http://books.google.com/books?id=1wy49i-gQjIC&printsec=frontcover&dq=satire&hl=&cd=3&source=gbs_api",
         "infoLink":"https://play.google.com/store/books/details?id=1wy49i-gQjIC&source=gbs_api",
         "canonicalVolumeLink":"https://market.android.com/details?id=book-1wy49i-gQjIC",
         "id":"1wy49i-gQjIC",
         "shelf":"read"
      },
      {
         "title":"The Android Invasion",
         "authors":[
            "Christopher Black"
         ],
         "publisher":"Yearling",
         "publishedDate":"1984-06-01",
         "description":"In this multiple plot adventure, readers and their robot companion must stop armies of attacking androids before they conquer the galaxy.",
         "industryIdentifiers":[
            {
               "type":"ISBN_10",
               "identifier":"0440400813"
            },
            {
               "type":"ISBN_13",
               "identifier":"9780440400813"
            }
         ],
         "readingModes":{
            "text":false,
            "image":false
         },
         "pageCount":117,
         "printType":"BOOK",
         "categories":[
            "Androids"
         ],
         "maturityRating":"NOT_MATURE",
         "allowAnonLogging":false,
         "contentVersion":"0.0.1.0.preview.0",
         "imageLinks":{
            "smallThumbnail":"http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail":"http://books.google.com/books/content?id=tsRhkvo80iUC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
         },
         "language":"en",
         "previewLink":"http://books.google.com/books?id=tsRhkvo80iUC&q=android&dq=android&hl=&cd=2&source=gbs_api",
         "infoLink":"http://books.google.com/books?id=tsRhkvo80iUC&dq=android&hl=&source=gbs_api",
         "canonicalVolumeLink":"https://books.google.com/books/about/The_Android_Invasion.html?hl=&id=tsRhkvo80iUC",
         "id":"tsRhkvo80iUC",
         "shelf":"read"
      },
      {
         "title":"Android Apps Security",
         "authors":[
            "Sheran Gunasekera"
         ],
         "publisher":"Apress",
         "publishedDate":"2012-09-12",
         "description":"Android Apps Security provides guiding principles for how to best design and develop Android apps with security in mind. It explores concepts that can be used to secure apps and how developers can use and incorporate these security features into their apps. This book will provide developers with the information they need to design useful, high-performing, and secure apps that expose end-users to as little risk as possible. Overview of Android OS versions, features, architecture and security. Detailed examination of areas where attacks on applications can take place and what controls should be implemented to protect private user data In-depth guide to data encryption, authentication techniques, enterprise security and applied real-world examples of these concepts What you’ll learn How to identify data that should be secured How to use the Android APIs to ensure confidentiality and integrity of data How to build secure apps for the enterprise About Public Key Infrastructure, encryption APIs and how to implement them in apps About owners, access control lists and permissions to allow user control over App properties About client-server apps and how to manage authentication, transport layer encryption and server-side security Who this book is for This book is for intermediate and experienced Android app developers that are already familiar with writing apps from scratch. It discusses mechanisms on how apps can be secured so that private, end-user data is kept secure on the device and while in transit. If you’re just embarking on the path to Android development, then this book may prove to be a useful companion to other developer guides. Table of Contents Android Architecture & Security Controls The Foundation of an App Who Has Access? Designing and Developing 3 Sample Apps Using PKI & Encryption Interfacing with Web Services Writing for the Enterprise Designing and Developing 3 More Sample Apps Publishing and Selling Your Apps Malware, Spyware and Your End-User API Reference",
         "industryIdentifiers":[
            {
               "type":"ISBN_13",
               "identifier":"9781430240624"
            },
            {
               "type":"ISBN_10",
               "identifier":"1430240628"
            }
         ],
         "readingModes":{
            "text":true,
            "image":true
         },
         "pageCount":248,
         "printType":"BOOK",
         "categories":[
            "Computers"
         ],
         "maturityRating":"NOT_MATURE",
         "allowAnonLogging":true,
         "contentVersion":"1.1.1.0.preview.3",
         "imageLinks":{
            "smallThumbnail":"http://books.google.com/books/content?id=IEk2m00o9_IC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail":"http://books.google.com/books/content?id=IEk2m00o9_IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
         },
         "language":"en",
         "previewLink":"http://books.google.com/books?id=IEk2m00o9_IC&printsec=frontcover&dq=android&hl=&cd=5&source=gbs_api",
         "infoLink":"http://books.google.com/books?id=IEk2m00o9_IC&dq=android&hl=&source=gbs_api",
         "canonicalVolumeLink":"https://books.google.com/books/about/Android_Apps_Security.html?hl=&id=IEk2m00o9_IC",
         "id":"IEk2m00o9_IC",
         "shelf":"read"
      },
      {
         "title":"Android in The Attic",
         "authors":[
            "Nicholas Allan"
         ],
         "publisher":"Hachette UK",
         "publishedDate":"2013-01-03",
         "description":"Aunt Edna has created a no-nonsense nanny android to make sure Billy and Alfie don't have any fun. But then Alfie discovers how to override Auntie Anne-Droid's programming and nothing can stop them eating all the Cheeki Choko Cherry Cakes they like ... until the real aunt Edna is kidnapped!",
         "industryIdentifiers":[
            {
               "type":"ISBN_13",
               "identifier":"9781444905465"
            },
            {
               "type":"ISBN_10",
               "identifier":"1444905465"
            }
         ],
         "readingModes":{
            "text":true,
            "image":false
         },
         "pageCount":192,
         "printType":"BOOK",
         "categories":[
            "Juvenile Fiction"
         ],
         "maturityRating":"NOT_MATURE",
         "allowAnonLogging":false,
         "contentVersion":"1.2.2.0.preview.2",
         "panelizationSummary":{
            "containsEpubBubbles":false,
            "containsImageBubbles":false
         },
         "imageLinks":{
            "smallThumbnail":"http://books.google.com/books/content?id=MoXpe6H2B5gC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail":"http://books.google.com/books/content?id=MoXpe6H2B5gC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
         },
         "language":"en",
         "previewLink":"http://books.google.com/books?id=MoXpe6H2B5gC&dq=android&hl=&cd=13&source=gbs_api",
         "infoLink":"http://books.google.com/books?id=MoXpe6H2B5gC&dq=android&hl=&source=gbs_api",
         "canonicalVolumeLink":"https://books.google.com/books/about/Android_in_The_Attic.html?hl=&id=MoXpe6H2B5gC",
         "id":"MoXpe6H2B5gC",
         "shelf":"read"
      },
      {
         "title":"Best Android Apps",
         "subtitle":"The Guide for Discriminating Downloaders",
         "authors":[
            "Mike Hendrickson",
            "Brian Sawyer"
         ],
         "publisher":"\"O'Reilly Media, Inc.\"",
         "publishedDate":"2010-04-27",
         "description":"Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference.",
         "industryIdentifiers":[
            {
               "type":"ISBN_13",
               "identifier":"9781449382551"
            },
            {
               "type":"ISBN_10",
               "identifier":"144938255X"
            }
         ],
         "readingModes":{
            "text":false,
            "image":false
         },
         "pageCount":240,
         "printType":"BOOK",
         "categories":[
            "Computers"
         ],
         "averageRating":4,
         "ratingsCount":3,
         "maturityRating":"NOT_MATURE",
         "allowAnonLogging":false,
         "contentVersion":"preview-1.0.0",
         "imageLinks":{
            "smallThumbnail":"http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail":"http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
         },
         "language":"en",
         "previewLink":"http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&cd=1&source=gbs_api",
         "infoLink":"http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&source=gbs_api",
         "canonicalVolumeLink":"https://books.google.com/books/about/Best_Android_Apps.html?hl=&id=bUybAgAAQBAJ",
         "id":"bUybAgAAQBAJ",
         "shelf":"read"
      }
   ]
}
     */

    

    render() {
        const { loading, error, book } = this.state

        return (
            <PageHandler
                loading={loading}
                error={error}>

                {
                    !isObjectEmpty(book) ? <div className="container">
                        <Row>
                            <Col s={12} m={3}>
                                <img
                                    src={book.imageLinks.thumbnail}
                                    alt=""
                                    className="book__image" />
                            </Col>

                            <Col s={12} m={9}>
                                <h1>
                                    {book.title}
                                </h1>
                                <p>
                                    {book.subtitle}
                                </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col s={12}>
                                <h3>Descrição:</h3>

                                <p>
                                    {book.description}
                                </p>
                            </Col>
                        </Row>
                    </div> : <div />
                }
            </PageHandler>
        )
    }
}

export default BookDetail