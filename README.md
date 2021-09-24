<h1 align = "center"> Welcome to Digital Diary </h1>
<p align = "center"> <img src = "https://64.media.tumblr.com/8ede0a31deaf6c972d874a6aa3caaf35/tumblr_my8p5nLuJ11rov8qno1_400.gifv"/> </p>
<h3 align = "center"> 
  Have you ever wanted a personal space on the web to write your personal thought between different categories?
  <br> <br>
  No? 
  <br><br>
  Okay, now you do! 
  <br><br>
  Digital diary is the best online diary that you never asked for! Help us build a great open source application by contributing to this app! 
  <br><br>
  If you want to contribute to our great online diary you should read through all this document!
  <h1 align = "center"> Join the discord server to monitor the repo! </h1>
  <p align = "center"><a href = https://discord.gg/QRHnpuVP4t> <img src = "http://www.unioncosmos.com/wp-content/uploads/2018/12/Uni%C3%B3n-Cosmos-Discord-Logo-Animado.gif"/></a></p> 
  <h6 align = "center"> Click the image to join the server </h6>
</h3>
<h3 align = "center"> 
   Yup! That's right, we've got our own personal discord server >:) and it allows us to monitor the repo! Bwahahah. 
  <br>
  Okay, time to get serious. Let me talk to you about the server:
</h3>

## Rules
- **Do not spam the channels**
- **Do not send messages on any channel where the Pokebots send notifications unless completely necesarry. Remember that the main focus of that server is monitoring updates!**

## Bots
#### The server contains five unique pokemon bots with their unique personality (or at least an attemp of giving them their own personality). Those are:
- **Mudkip Bot:** Notifies you about a new pull request<br>
![Image of new pull request notification](https://i.imgur.com/Kp9XfVB.png)
- **Chikorita Bot:** Notifies you about a new Front-End Issue!<br>
![Image of new FrontEnd Issue notification](https://i.imgur.com/1829hnd.png)
- **Torchic Bot:** Notifies you about a new Back-End Issue!<br>
![Image of new BackEnd Issue notification](https://i.imgur.com/K3fEta8.png)
- **Totodile Bot:** Notifies you about a new Documentation Issue!<br>
![Image of new Documentation Issue notification](https://i.imgur.com/baYglNB.png)
- **Jirachi Bot:** Notifies you about a new Wishlist Issue!<br>
![Image of new Wishlist Issue notification](https://i.imgur.com/fnNxS5J.png)

_They work thanks to Github Actions!_

<h1 align = "center"> Contributing to the repository </h1>
<p align = "center"> <img src = "https://raw.githubusercontent.com/aomineDev/aomineDev/master/assets/github.gif"/> </p>

## Creating an Issue
**When creating an issue it is important that you add the corresponding label into it to allow everyone whose on the discord server know what the issue is! You must use the following labels:**
- **Frontend:** stuff related to...well the front-end
- **Backend:** same as above but with the back-end
- **Documentation:** any issue related to the design of the system, UI / UX, readme, etc.
- **Wishlist:** anything that does not enters in the above categories that you think that is something that our amazing project should have!

## Making code changes
- Fork and clone the repository git clone https://github.com/ShrillShrestha/digital-diary
- Create a branch git checkout -b "<your_branch_name>"
- Make your changes in that branch
- Test your changes
- Add and commit your changes with `git add .` && `git commit -m "<your_commit_message>"`
- Then push the changes into your branch git push origin branch_name
- Now you can create a PR using that branch in our repository.

## Pull Requests
**We all want to create some pull requests that get merged, but before you start working on it, please attach to this rules!**
- Make the name descriptive
- Prove a summary of the files changed on the description of the PR!
- Provide constructive feedback where it applies.
- If it does not get approved please don't get mad, it's a great learning experience and everyone is welcome to contribute! Read the feedback and keep trying! :)

## Some Useful tips
**Sometimes the main branch of our repo might be updated since the last time you forked it. It might create conflicts while merging the PR. In such case:**
- Add out repo as your upstream repo using `git remote add upstream https://github.com/ShrillShrestha/digital-diary`.
- Checkout to your main and pull the lastest changes from the `upstream` with `git pull upstream master`.
- If you want, you can push the latest main branch to update your origin's main with `git push origin main`.
- Checkout to your branch, where you made the changes.
- Rebase your branch to the latest main branch with `git rebase master`
- Resolve any conflicts, if any.
- Push the latest change to your origin.

<h1 align = "center"> Documentation </h1>
<p align = "center"><img width = "30%" height = "30%" src = "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/3f4734bb2c3ce0f.png"/></p>

## System Design
<p align = "center"><img src = "https://media.discordapp.net/attachments/889598080771584020/889930380981973023/unknown.png"/></p>

## UI Design
 - Landing Page <br>
![landing_page](https://user-images.githubusercontent.com/43284212/134714105-2ff3b78f-306d-4d3f-bf72-d950bd7a5959.png)

- Sign In Page <br>
![signIn](https://user-images.githubusercontent.com/43284212/134714497-153d577e-e3bb-4629-b721-182bf4d04906.png)

- Sign Up Page <br>
![signup](https://user-images.githubusercontent.com/43284212/134714559-72e36f76-7bd1-445b-9934-8f2d1591b99c.png)

- Categories List <br>
![categoriesList](https://user-images.githubusercontent.com/43284212/134714614-f4c89da3-681b-467e-a957-976a6321968d.png)

- Create Category Form <br>
![createCategory](https://user-images.githubusercontent.com/43284212/134714821-b282d8fe-63a7-489d-a501-4c72f3601d86.png)

- Entry List Page <br>
![entriesList](https://user-images.githubusercontent.com/43284212/134714914-31cadfbb-6e3a-4a82-931a-3e36071b0e45.png)

- Entry Detail Page <br>
![entry_detail](https://user-images.githubusercontent.com/43284212/134715002-6951a714-a03e-4985-b5a4-6e622f6c25b2.png)

- Create Entry Page <br>
![creatEntry](https://user-images.githubusercontent.com/43284212/134715093-8010de33-2a94-4bd0-9da0-f636ea4e3867.png)

- Error Page <br>
![error](https://user-images.githubusercontent.com/43284212/134715152-015b871d-159a-49fe-8eb2-09a9fed422ed.png)

## Technologies Used
- React
- AWS Amplify framework
- GraphQL
- DynamoDB
- React Bootstrap
- GitHub Actions

## Prerequisites
- Node.js v12.x or later
- npm v5.x or later
- git v2.14.1 or later
- AWS account and aws amplify cli. You can follow [this](https://docs.amplify.aws/start/getting-started/installation/q/integration/react/#option-2-follow-the-instructions), if you have to configue your cli.

## How to test the app locally?
- Clone the repo on your local using `git clone https://github.com/ShrillShrestha/digital-diary`
- Go to the project directory using `cd digital-diary`
- Run `npm install` to install all the dependencies
- Once the cli is configured, run `amplify init`
- When the prompt asks you to use existing environment, select _no_. This will prompt you make make your dev environment
- Name your environment, select your ide and use your AWS profile to set up your dev environment
- Run `amplify add auth` to add your own authentication system
  - Select default configuration
  - Select your preference of sign in method
  - Select _No, I am done_ when prompt to configure advance settings
- Run `amplify add api`
  - Select `Graphql`
  - Provide your name for the api
  - Choose _Amazone Cognito User Pool_ for authorization type
  - If asked to configure advance setting, select _no_
  - Select _yes_ when asked for annotated GraphQL schema
  - Give the path for your GraphQL schema. i.e `./amplify/backend/api/schema.graphql`
- Run `amplify push` to push changes to the aws cloud
- Once the everything is done, run `npm start`, and there is your digital personal diary. :)

## Contributors:
- [Bernardo Girón Arana](https://github.com/Jobegiar99)
- [Shrill Shrestha](https://github.com/ShrillShrestha)
- [Nancy Korir](https://github.com/Kirsten-Nancy)
