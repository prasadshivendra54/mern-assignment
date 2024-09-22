<!-- 16th Question - CI/CD Integration: Explain how to set up a basic CI/CD pipeline using GitHub Actions to automatically test and deploy a Node.js application when changes are pushed to the repository.
 -->

                                       CI/CD pipeline :-

Create a Node.js Application-

npm init -y
npm install express --save
npm install jest --save-dev

project structure will look like this-

├── node_modules/
├── src/
│ └── app.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── tests/
└── app.test.js

Commit and Push our Workflow-

git add .github/workflows/ci.yml
git commit -m "Add GitHub Actions CI/CD pipeline"
git push origin main
