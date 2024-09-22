<!-- 14th Question - Branching Strategy: Describe a common branching strategy (such as GitFlow or feature branching) used in software development teams and how you would implement it for a new feature.
 -->

                              Feature Branching for a New Feature :-

<!--  -->

git checkout main
git pull origin main # Pull the latest changes from the main branch

git checkout -b feature/user-authentication

git add .
git commit -m "Implement user authentication feature"

git push origin feature/user-authentication

git checkout main
git pull origin main # Pull the latest changes before merging

git merge feature/user-authentication

git add .
git commit -m "Resolve merge conflicts"

git branch -d feature/user-authentication
git push origin --delete feature/user-authentication

git checkout feature/user-authentication
git pull --rebase origin main

<!--  -->

                             Git Workflow with Feature Branching :-

git checkout -b feature/add-login

git add .
git commit -m "Add login functionality"
git push origin feature/add-login

git branch -d feature/add-login
git push origin --delete feature/add-login
