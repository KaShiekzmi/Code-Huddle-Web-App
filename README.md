# Code Huddle

## Project Overview

Code Huddle combines skilled engineers, innovative ideas, and top expertise to transform startups and SMEs through custom software development. We huddle to solve your challenges and deliver software solutions that exceed expectations.

This is a modern, responsive website built with Next.js 15 and React 19, featuring a comprehensive career portal, case studies showcase, and automated job application system.

## Technologies & Tools

- **Next.js 15.4.2** (React framework with App Router)
- **React 19.1.0**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animations)
- **React Query** (data fetching)
- **React Email** (email templates)
- **React PDF** (PDF generation)
- **Nodemailer** (email sending)
- **Yup** (form validation)
- **ESLint** (code quality)
- **PostCSS**

## Key Services

- **Web App Development**: Transform your ideas into stunning, functional websites with innovation, performance, and scalability.
- **Mobile App Development**: High-end, hybrid, native, and cross-platform applications for iOS and Android.
- **SQA (Software Quality Assurance)**: Flawless software through thorough testing and defect resolution.
- **UI/UX Design**: Strategically crafted designs to simplify complex products and drive brand growth.
- **Staff Augmentation**: Rigorous recruitment and training to help organizations achieve business objectives.
- **MVP Development**: Tailored Minimum Viable Product services for startups and SMEs to test market trends.

## Website Features

- **Career Portal**: Multi-step job application system with PDF generation
- **Case Studies**: Interactive showcase of past projects with detailed galleries
- **Team Section**: Meet our talented team members
- **Testimonials**: Client feedback and success stories
- **Culture Showcase**: Company culture and values presentation
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Email Integration**: Automated notifications for job applications
- **Search & Filtering**: Advanced job search with multiple filters

## Example Case Studies

- **GYMYG**: Virtual Fitness Platform connecting clients, trainers, and admins for live gym sessions worldwide.
- **AutoIQ**: Smart Vehicle Diagnostic App that connects via OBD sensors to monitor vehicle health and provide alerts.
- **Honest Dog**: Puppy Adoption Platform connecting users with reputable breeders and shelters for responsible dog ownership.

## Prerequisites

Before setting up the project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git**

## Local Development Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd code-huddle-website-latest
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration (Required for job applications)
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password
```

#### Setting up Gmail App Password:

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Enable 2-Factor Authentication if not already enabled
3. Navigate to **Security** → **App passwords**
4. Generate a new app password for "Mail"
5. Use this password as `EMAIL_APP_PASSWORD`

**Note**: Never commit your `.env.local` file to version control. It's already included in `.gitignore`.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### 5. Email Template Preview (Optional)

To preview email templates locally:

```bash
npm run preview-email
# or
yarn preview-email
```

This will start the email preview server at [http://localhost:3030](http://localhost:3030).

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview-email` - Preview email templates locally

## Project Structure

```
code-huddle-website-latest/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── career/            # Career pages
│   ├── our-work/          # Case studies pages
│   └── ...
├── components/            # React components
│   ├── career/           # Career-related components
│   ├── landing/          # Landing page components
│   ├── layout/           # Layout components
│   ├── our-work/         # Case studies components
│   └── ui/               # Reusable UI components
├── config/               # Configuration files
│   └── email/            # Email configuration
├── data/                 # Static data files
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
├── public/               # Static assets (organized structure)
│   ├── assets/           # Organized assets
│   │   ├── icons/        # UI and social icons
│   │   ├── images/       # Images organized by category
│   │   └── videos/       # Video content
│   └── favicon.ico       # Site favicon
├── services/             # Service layer
│   └── email/            # Email services
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

### Asset Organization

The public folder has been reorganized for better maintainability:

- **`/assets/icons/`**: Social media and UI icons
- **`/assets/images/`**: Images organized by category (case studies, company, culture, etc.)
- **`/assets/videos/`**: Video content
- **Project-specific folders**: Each case study has its own folder with all related assets

## Features

### Core Functionality

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Job Application System**: Multi-step form with PDF generation
- **Email Integration**: Automated email notifications using React Email
- **Case Studies**: Interactive showcase of past projects and achievements
- **Career Portal**: Job listings with advanced filtering and search
- **Team Section**: Meet the team members with dynamic loading
- **Testimonials**: Client feedback and reviews with carousel
- **Culture Showcase**: Company culture and values with media gallery

### Technical Features

- **TypeScript**: Full type safety throughout the application
- **React Query**: Efficient data fetching and caching
- **Framer Motion**: Smooth animations and transitions
- **Form Validation**: Yup schema validation for all forms
- **PDF Generation**: Dynamic PDF creation for job applications
- **Error Handling**: Comprehensive error boundaries and fallbacks
- **Loading States**: Optimized loading experiences with Suspense
- **SEO Optimized**: Meta tags and structured data

## Recent Improvements

### Build & Performance

- ✅ **Fixed Build Errors**: Resolved useSearchParams Suspense boundary issues
- ✅ **Asset Organization**: Reorganized public folder for better maintainability
- ✅ **Error Handling**: Added comprehensive error boundaries and fallbacks
- ✅ **Loading States**: Implemented Suspense boundaries for better UX
- ✅ **Type Safety**: Enhanced TypeScript configurations and type definitions

### UI/UX Enhancements

- ✅ **Career Hero**: Added animated typing text for better engagement
- ✅ **Job Filters**: Improved search and filtering with right-aligned job count
- ✅ **Application Deadline**: Added deadline display above apply button
- ✅ **Responsive Design**: Enhanced mobile and tablet experiences
- ✅ **Loading Components**: Created dedicated loading states for better UX

### Code Quality

- ✅ **ESLint Configuration**: Updated for Next.js 15 and React 19
- ✅ **File Organization**: Improved component and asset structure
- ✅ **Error Boundaries**: Added proper error handling throughout
- ✅ **Performance**: Optimized images and assets loading

## Deployment

The project is configured for deployment on Vercel. The build process will automatically:

1. Install dependencies
2. Build the application
3. Deploy to production

Make sure to set the environment variables in your deployment platform.

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Use functional components with hooks
- Implement proper error boundaries
- Add loading states for async operations

### Asset Management

- Place new images in appropriate `/assets/images/` subdirectories
- Use SVG icons from `/assets/icons/` when possible
- Optimize images before adding to the project
- Update file references when moving assets

### Component Structure

- Keep components small and focused
- Use proper TypeScript interfaces
- Implement proper prop validation
- Add error boundaries where needed

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Before Contributing

- Ensure all tests pass
- Run `npm run lint` to check code quality
- Test on different screen sizes
- Verify email functionality works correctly

## Support

For more information or support, please contact the Code Huddle team.

---

**Note**: This project uses Next.js 15 with the App Router and React 19. Make sure to follow the latest Next.js and React documentation for best practices.
