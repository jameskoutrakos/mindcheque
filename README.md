# **MindCheque**

A website designed and curated with the user in mind, a tool for those who sometimes feel anxious, or want a way to track their day-to-day.

MindCheque is a resource that can be used to deposit your thoughts and memories into your very own memory bank.

---

## 📓 Table of Contents

1. [Why MindCheque?](#why)
2. [Features](#features)
3. [Tech Stack](#tech)
4. [Installation](#install)
5. [Future Plans](#future)
6. [Contact The Creator](#contact)

---

<a name="why"></a>

## **🧠 ✅ | Why MindCheque?**

The name **MindCheque** is a play on words.

**Mind** being home to your memories, and **Cheque** to illustrate that it gives you the opportunity to 'check' yourself on the daily.

Also, in making memory deposits like depositing a 'cheque'.

---

<a name="features"></a>

## **💡 | Features**

- The ability to create a new user account and deposit memories in your very own memory bank.
- Personalized experience complete with prompts pulling from information inputted during the sign-up process, as seen throughout the web app.
- A clean UI with bold colors and subtle animations that guide the user with ease from screen to screen.
- Intentional UX design, made possible by collecting user research through interviews and user testing.
- A complete MySQL database that holds all users and memories in their respective tables.

---

<a name="tech"></a>

## **🖥 | Tech Stack**

In creating MindCheque, I employed near all of the lessons and principles learned throughout my time at BrainStation. Below you will find the framework, packages, and server-side resources used to in my creation.

### **Back-end**

- Node.js
- Express
- MySQL, Knex

### **Front-end**

- React
- SASS
- Addtional Packages: Axios, SweetAlert2

---

<a name="install"></a>

## **💾 | Installation**

First, you will need to access this application from your code editor (i.e. VS Code). From there, please follow the instructions on how to prepare for use.

### **Back-end**

_URL path and port number for back-end: http://localhost.com:8080_

1. Open your terminal and cd into the `/server` folder.
2. Run `$ npm install` to install all necessary node modules for the server-side.
3. Open `knexfile.js` and validate the username and password present matches what you use for your MySQL databases (the **username** should be **root** and the **password** should be **rootroot** by default).
4. Open your MySQL Workbench application and create a new schema titled `mindcheque`. Then perform the following commands from the terminal.

- `$ npx knex migrate:rollback` -> This is to ensure you are starting with a clean slate in your mindcheque schema.

- ` $ npx knex migrate:latest` -> This will create the two tables 'user' and 'memory'.

- ` $ npx knex seed:run` -> This will populate the tables with the sample users and memories provided.

5. Now that you have created the tables, seeded the data, and downloaded the necessary node modules, you can start server by entering the following terminal line:

- `$ node index.js`

With this, your server will be live! When troubleshooting, enter the command Ctrl+C to close the server and restart it with the terminal line detailed in step 5.

### **Front-end**

_URL path and port number for back-end: http://localhost.com:3000_

Now that we have the server live, let's move onto the front-end.

1. Find the path to get to the `/client` folder and cd into it.
2. Run `$ npm install` to install all necessary node modules for the client-side.
3. Simply run the following line into your terminal while in the client folder,

- `$ npm start`

And with that (drumroll please 🥁🥁🥁)...

you are immersed into the world of **MindCheque**. I hope you enjoy your visit!

---

<a name="future"></a>

## **🔮 | Future Plans**

1. **Proper Security and Authentication**

- Through inclusion of OAuth and JWT, I aim to make this website as secure as I can. It is imperative that people’s memories are kept secure and unseen to others so long as they choose to not share them.

2. **Generated Recommendations Based On User Activity**

- Ideas for new memories to write, motivating users to write another “Proud” memory if they have written one or two “Sad” memories.
- The more that users interact with MindCheque, the more recommendations MindCheque will inevitably provide to them.

3. **Intentional Sharing To Specific Individuals and/or Licensed Professionals**

- The ability to share your memories in an exportable format (JPEG, PNG, PDF) to whoever you may choose. Could be a very close friends, family member, or a professional such as a therapist who you would like to share your most recent memory deposits with.
- Sharing will not be as easy as social media platforms and will require some method of password or 2-step authentication to ensure that sharing is intentional because of the sensitive information that MindCheque holds.

---

<a name="contact"></a>

## **☎️ | Contact the Creator**

This web app was developed, designed, and created by James Koutrakos

You can follow me on [GitHub](https://github.com/jameskoutrakos) and [LinkedIn](https://www.linkedin.com/in/jameskoutrakos/), and [view my portfolio here](https://www.jameskoutrakos.com)!
