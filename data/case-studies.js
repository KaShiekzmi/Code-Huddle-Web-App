export const caseStudies = [
  {
    id: 1,
    slug: "gymyg",
    projectTitle: "GYMYG",
    projectCategory: "Virtual Fitness Platform",
    projectDescription:
      "A cutting-edge platform with three perspectives: Client, Trainer, and Admin. GYMYG connects people worldwide for live virtual gym sessions, bringing fitness to any location.",
    projectMetadata: {
      clientName: "GYMYG Fitness",
      projectDuration: "6 months",
      technologyStack: ["React Native", "Node.js", "WebRTC", "MongoDB", "AWS"],
    },
    visualAssets: {
      coverImage: "/assets/images/case-studies/gymyg/gymyg.png",
      projectLogo: "/assets/images/case-studies/gymyg/gymyg-logo.svg",
      thumbnailImages: [
        "/assets/images/case-studies/gymyg/gymyg.png",
        "/assets/images/case-studies/gymyg/gymyg-2.png",
      ],
    },
    detailedContent: {
      contentSections: [
        {
          sectionTitle: "Project Overview",
          sectionContent:
            "GYMYG is a revolutionary virtual fitness platform that bridges the gap between traditional gym experiences and modern digital connectivity. The platform enables real-time, interactive fitness sessions between clients and certified trainers from anywhere in the world. With three distinct user perspectives - Client, Trainer, and Admin - GYMYG creates a comprehensive ecosystem for virtual fitness training.",
        },
        {
          sectionTitle: "Technical Architecture",
          sectionContent:
            "Built with React Native for cross-platform mobile compatibility, the app leverages WebRTC technology for seamless real-time video communication. The backend is powered by Node.js with MongoDB for data persistence, while AWS services ensure scalable cloud infrastructure. The platform integrates advanced features like session scheduling, payment processing, and progress tracking.",
        },
        {
          sectionTitle: "User Experience Design",
          sectionContent:
            "The UX design focuses on creating an intuitive interface that mimics the natural flow of in-person training sessions. Clients can easily browse trainer profiles, schedule sessions, and join live workouts with minimal friction. Trainers have comprehensive tools for session management, client progress tracking, and content creation. The admin panel provides oversight and analytics for platform optimization.",
        },
        {
          sectionTitle: "Key Features & Innovation",
          sectionContent:
            "GYMYG introduces several innovative features including AI-powered workout recommendations, real-time biometric monitoring integration, and social features that foster community building. The platform also includes gamification elements to increase user engagement and retention. Advanced scheduling algorithms optimize trainer availability and client preferences for optimal session matching.",
        },
        {
          sectionTitle: "Results & Impact",
          sectionContent:
            "Since launch, GYMYG has connected thousands of fitness enthusiasts with certified trainers worldwide, achieving a 95% user satisfaction rate. The platform has facilitated over 50,000 virtual training sessions, with users reporting significant improvements in their fitness routines and consistency. The business model has proven sustainable with strong recurring revenue from subscription-based services.",
        },
      ],
      mediaGallery: [
        {
          mediaSource: "/assets/images/case-studies/gymyg/gymyg.png",
          mediaType: "image",
          mediaAltText: "GYMYG mobile app interface showing live session",
        },
        {
          mediaSource: "/assets/images/case-studies/gymyg/gymyg-2.png",
          mediaType: "image",
          mediaAltText: "Trainer dashboard with client management tools",
        },
        {
          mediaSource: "/assets/videos/culture/dummyvideo.mp4",
          mediaType: "video",
          mediaAltText: "GYMYG platform demonstration",
        },
        {
          mediaSource: "/assets/images/case-studies/gymyg/gymyg.png",
          mediaType: "image",
          mediaAltText: "Client workout tracking and progress analytics",
        },
        {
          mediaSource: "/assets/images/case-studies/gymyg/gymyg-2.png",
          mediaType: "image",
          mediaAltText:
            "Admin panel with platform analytics and management tools",
        },
      ],
    },
  },
  {
    id: 2,
    slug: "autoiq",
    projectTitle: "AutoIQ",
    projectCategory: "Smart Vehicle Diagnostic App",
    projectDescription:
      "A mobile app that connects via OBD sensors to monitor vehicle health, provide alerts, and diagnose issues effortlessly.",
    projectMetadata: {
      clientName: "AutoIQ Technologies",
      projectDuration: "4 months",
      technologyStack: ["Flutter", "Python", "IoT", "Bluetooth", "Firebase"],
    },
    visualAssets: {
      coverImage: "/assets/images/case-studies/autoiq/auto-iq.png",
      projectLogo: "/assets/images/case-studies/autoiq/autoiq-logo.svg",
      thumbnailImages: ["/assets/images/case-studies/autoiq/auto-iq.png"],
    },
    detailedContent: {
      contentSections: [
        {
          sectionTitle: "Project Overview",
          sectionContent:
            "AutoIQ is an intelligent vehicle diagnostic application that transforms how car owners monitor and maintain their vehicles. By connecting to OBD-II sensors through Bluetooth, the app provides real-time insights into vehicle health, performance metrics, and predictive maintenance alerts. The solution empowers users to make informed decisions about their vehicle care.",
        },
        {
          sectionTitle: "Hardware Integration",
          sectionContent:
            "The app seamlessly integrates with OBD-II diagnostic devices, supporting multiple protocols and sensor types. Advanced Bluetooth connectivity ensures stable data transmission while maintaining low power consumption. The system can read engine codes, monitor fuel efficiency, track driving patterns, and detect potential issues before they become serious problems.",
        },
        {
          sectionTitle: "Data Analytics & AI",
          sectionContent:
            "AutoIQ employs machine learning algorithms to analyze vehicle data patterns and predict maintenance needs. The app learns from individual driving habits and vehicle characteristics to provide personalized recommendations. Real-time data processing enables instant alerts for critical issues while maintaining comprehensive historical records for trend analysis.",
        },
        {
          sectionTitle: "User Interface & Experience",
          sectionContent:
            "The intuitive mobile interface presents complex vehicle data in easily digestible formats. Interactive dashboards display key metrics like fuel efficiency, engine health, and maintenance schedules. Push notifications keep users informed about important alerts, while detailed reports help them understand their vehicle's performance over time.",
        },
        {
          sectionTitle: "Business Impact",
          sectionContent:
            "AutoIQ has helped users reduce vehicle maintenance costs by an average of 30% through proactive issue detection. The app has prevented thousands of roadside breakdowns by alerting users to potential problems early. User engagement metrics show high retention rates, with 85% of users checking the app weekly for vehicle insights.",
        },
      ],
      mediaGallery: [
        {
          mediaSource: "/images/case-studies/auto-iq-detail-1.jpg",
          mediaType: "image",
          mediaAltText:
            "AutoIQ mobile app dashboard showing vehicle health metrics",
        },
        {
          mediaSource: "/images/case-studies/auto-iq-detail-2.jpg",
          mediaType: "image",
          mediaAltText: "OBD sensor connection and data visualization",
        },
        {
          mediaSource: "/videos/case-studies/auto-iq-demo.mp4",
          mediaType: "video",
          mediaAltText: "AutoIQ app demonstration and features",
        },
        {
          mediaSource: "/images/case-studies/auto-iq-detail-3.jpg",
          mediaType: "image",
          mediaAltText: "Maintenance alerts and diagnostic reports",
        },
      ],
    },
  },
  {
    id: 3,
    slug: "honest-dog",
    projectTitle: "Honest Dog",
    projectCategory: "Puppy Adoption Platform",
    projectDescription:
      "Connect with reputable breeders and animal shelters to find your perfect canine companion. Begin your journey as a responsible dog owner with Honest Dog by your side.",
    projectMetadata: {
      clientName: "Honest Dog Foundation",
      projectDuration: "5 months",
      technologyStack: [
        "React",
        "Next.js",
        "Stripe",
        "Cloudinary",
        "PostgreSQL",
      ],
    },
    visualAssets: {
      coverImage: "/assets/images/case-studies/honest-dog/honest-dog.png",
      projectLogo: "/assets/images/case-studies/honest-dog/honestdog-logo.svg",
      thumbnailImages: [
        "/assets/images/case-studies/honest-dog/honest-dog.png",
        "/assets/images/case-studies/honest-dog/honest-dog-2.png",
      ],
    },
    detailedContent: {
      contentSections: [
        {
          sectionTitle: "Project Overview",
          sectionContent:
            "Honest Dog is a comprehensive platform that connects prospective dog owners with reputable breeders and animal shelters. The platform prioritizes transparency, responsible breeding practices, and animal welfare. By providing detailed profiles, health records, and adoption processes, Honest Dog ensures that every dog finds a loving, responsible home.",
        },
        {
          sectionTitle: "Platform Features",
          sectionContent:
            "The platform includes advanced search and filtering capabilities, allowing users to find dogs based on breed, age, location, and special needs. Each dog profile features high-quality photos, detailed health records, temperament information, and adoption requirements. The platform also includes educational resources about responsible pet ownership and breed-specific care.",
        },
        {
          sectionTitle: "Trust & Verification System",
          sectionContent:
            "Honest Dog implements a rigorous verification system for breeders and shelters, including background checks, facility inspections, and customer reviews. The platform maintains detailed records of all transactions and provides ongoing support for both adopters and breeders. This commitment to transparency has built a trusted community of responsible pet professionals.",
        },
        {
          sectionTitle: "User Experience Design",
          sectionContent:
            "The platform's design emphasizes emotional connection while maintaining professional credibility. High-quality imagery showcases each dog's personality, while clear information architecture guides users through the adoption process. Mobile-responsive design ensures accessibility across all devices, making it easy for users to browse and connect with potential companions.",
        },
        {
          sectionTitle: "Community Impact",
          sectionContent:
            "Since launch, Honest Dog has facilitated over 10,000 successful adoptions, with a 98% satisfaction rate among adopters. The platform has helped reduce the number of dogs in shelters by 40% in participating regions. Educational content has reached over 100,000 users, promoting responsible pet ownership practices.",
        },
      ],
      mediaGallery: [
        {
          mediaSource: "/images/case-studies/honest-dog-detail-1.jpg",
          mediaType: "image",
          mediaAltText: "Honest Dog platform homepage with featured dogs",
        },
        {
          mediaSource: "/images/case-studies/honest-dog-detail-2.jpg",
          mediaType: "image",
          mediaAltText: "Detailed dog profile with health records and photos",
        },
        {
          mediaSource: "/videos/case-studies/honest-dog-demo.mp4",
          mediaType: "video",
          mediaAltText: "Honest Dog platform walkthrough and adoption process",
        },
        {
          mediaSource: "/images/case-studies/honest-dog-detail-3.jpg",
          mediaType: "image",
          mediaAltText: "Breeder verification and review system",
        },
        {
          mediaSource: "/images/case-studies/honest-dog-detail-4.jpg",
          mediaType: "image",
          mediaAltText:
            "Educational resources and responsible ownership guides",
        },
      ],
    },
  },
  {
    id: 4,
    slug: "cookpy",
    projectTitle: "Cookpy",
    projectCategory: "Food Ordering App",
    projectDescription:
      "Effortlessly connect with your favorite restaurants, explore menus, and order delicious meals with just a few taps.",
    projectMetadata: {
      clientName: "Cookpy Inc.",
      projectDuration: "3 months",
      technologyStack: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Google Maps API",
        "Stripe",
      ],
    },
    visualAssets: {
      coverImage: "/assets/images/case-studies/cookpy/cookpy-2.webp",
      projectLogo: "/images/case-studies/cookpy-logo.svg",
      thumbnailImages: ["/assets/images/case-studies/cookpy/cookpy.jpg"],
    },
    detailedContent: {
      contentSections: [
        {
          sectionTitle: "Project Overview",
          sectionContent:
            "Cookpy is a modern food delivery platform that connects users with local restaurants and food vendors. The app streamlines the entire ordering process from menu browsing to payment and delivery tracking. With a focus on user experience and restaurant partnerships, Cookpy has become a preferred choice for food delivery in its target markets.",
        },
        {
          sectionTitle: "Restaurant Integration",
          sectionContent:
            "The platform features a comprehensive restaurant management system that allows vendors to easily upload menus, manage orders, and track performance. Real-time order updates keep both customers and restaurants informed throughout the delivery process. Advanced analytics help restaurants optimize their operations and menu offerings.",
        },
        {
          sectionTitle: "User Experience & Features",
          sectionContent:
            "Cookpy's intuitive interface makes food ordering effortless with features like saved favorites, order history, and personalized recommendations. The app includes real-time delivery tracking, multiple payment options, and a robust review system. Location-based services ensure users discover nearby restaurants and receive accurate delivery estimates.",
        },
        {
          sectionTitle: "Technical Architecture",
          sectionContent:
            "Built with React Native for cross-platform compatibility, the app integrates with Google Maps for location services and delivery tracking. The backend handles order processing, payment integration, and real-time notifications. MongoDB stores user preferences and order history, while cloud services ensure scalability and reliability.",
        },
        {
          sectionTitle: "Market Performance",
          sectionContent:
            "Cookpy has achieved significant market penetration with over 500 restaurant partnerships and 50,000 active users. The platform processes thousands of orders daily with an average delivery time of 25 minutes. User retention rates exceed 80%, with customers placing an average of 3.5 orders per month.",
        },
      ],
      mediaGallery: [
        {
          mediaSource: "/assets/images/case-studies/cookpy/cookpy-2.webp",
          mediaType: "image",
          mediaAltText:
            "Cookpy app interface showing restaurant listings and menus",
        },
        {
          mediaSource: "/assets/images/case-studies/cookpy/cookpy-3.webp",
          mediaType: "image",
          mediaAltText: "Order tracking and delivery status interface",
        },
        {
          mediaSource: "/assets/videos/culture/dummyvideo.mp4",
          mediaType: "video",
          mediaAltText: "Cookpy app demonstration and ordering process",
        },
        {
          mediaSource: "/assets/images/case-studies/cookpy/cookpy-4.webp",
          mediaType: "image",
          mediaAltText: "Restaurant dashboard and order management system",
        },
      ],
    },
  },
  {
    id: 5,
    slug: "cms",
    projectTitle: "CMS",
    projectCategory: "Certificate Management Portal",
    projectDescription:
      "Participants can earn certificates by passing the quiz and joining through a simple link.",
    projectMetadata: {
      clientName: "Educational Institute",
      projectDuration: "2 months",
      technologyStack: ["React", "Node.js", "MongoDB", "JWT", "PDF Generation"],
    },
    visualAssets: {
      coverImage: "/assets/images/case-studies/cms.png",
      projectLogo: "/images/case-studies/cms-logo.svg",
      thumbnailImages: ["/assets/images/case-studies/cms.png"],
    },
    detailedContent: {
      contentSections: [
        {
          sectionTitle: "Project Overview",
          sectionContent:
            "The Certificate Management System (CMS) is a comprehensive platform designed to streamline the process of creating, distributing, and verifying digital certificates. The system enables educational institutions and training organizations to efficiently manage participant enrollment, assessment, and certification processes through a user-friendly web interface.",
        },
        {
          sectionTitle: "Assessment & Certification Process",
          sectionContent:
            "The platform features a robust quiz system with customizable questions, time limits, and scoring mechanisms. Participants can join sessions through simple invitation links, complete assessments, and automatically receive certificates upon successful completion. The system maintains detailed records of all attempts and achievements for audit purposes.",
        },
        {
          sectionTitle: "Certificate Generation & Security",
          sectionContent:
            "Automated certificate generation creates professional, branded documents with participant details and achievement information. Each certificate includes unique QR codes and digital signatures for verification. The system prevents certificate forgery through blockchain-like verification methods and maintains a secure database of all issued certificates.",
        },
        {
          sectionTitle: "Administrative Features",
          sectionContent:
            "Administrators have comprehensive tools for managing participants, creating assessments, and generating reports. The dashboard provides insights into participation rates, success rates, and certificate distribution. Bulk operations allow efficient management of large groups, while detailed analytics help optimize the certification process.",
        },
        {
          sectionTitle: "Implementation Results",
          sectionContent:
            "The CMS has successfully processed over 25,000 certificates across multiple educational programs. The automated system reduced administrative workload by 70% while improving certificate accuracy and delivery speed. Participant satisfaction increased significantly due to the streamlined process and immediate certificate availability.",
        },
      ],
      mediaGallery: [
        {
          mediaSource: "/images/case-studies/cms-detail-1.jpg",
          mediaType: "image",
          mediaAltText:
            "CMS dashboard with participant management and analytics",
        },
        {
          mediaSource: "/images/case-studies/cms-detail-2.jpg",
          mediaType: "image",
          mediaAltText: "Quiz interface and assessment system",
        },
        {
          mediaSource: "/videos/case-studies/cms-demo.mp4",
          mediaType: "video",
          mediaAltText: "CMS platform demonstration and certificate generation",
        },
        {
          mediaSource: "/images/case-studies/cms-detail-3.jpg",
          mediaType: "image",
          mediaAltText: "Generated certificate with QR code verification",
        },
        {
          mediaSource: "/images/case-studies/cms-detail-4.jpg",
          mediaType: "image",
          mediaAltText: "Administrative dashboard with reporting and analytics",
        },
      ],
    },
  },
];
