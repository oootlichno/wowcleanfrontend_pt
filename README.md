WOWClean Portugal Frontend

Frontend application for the WOWClean Portugal website.
Built with React and deployed to AWS (S3 + CloudFront).

Tech Stack:
React (Create React App)
AWS S3 (static hosting)
AWS CloudFront (CDN)
GitHub (version control)


Install dependencies:

npm install
Run Locally
npm start

App will run at:

http://localhost:3000
🏗 Build for Production
npm run build

Creates optimized files in /build.


aws s3 sync build s3://wowcleanpt-frontend --delete


This will:

Build the project
Upload to S3
Remove old files
Invalidate CloudFront cache

Production URL
https://wowcleanpt.com