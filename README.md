<!-- Improved compatibility of back to top link: See: https://github.com/josephHelfenbein/HelpSignal/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/josephHelfenbein/HelpSignal">
    <img src="https://github.com/josephHelfenbein/HelpSignal/blob/main/helpsignal-logo.png" alt="Logo" width="200" >
  </a>

  <h3 align="center">HelpSignal</h3>

  <p align="center">
    An emergency app using voice input to assess situations, alert nearby certified helpers (CPR, first aid), and notify first responders—providing immediate assistance before official help arrives.
    <br />
    <a href="https://github.com/josephHelfenbein/HelpSignal/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/josephHelfenbein/HelpSignal/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#get-started">Get Started</a>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

In a world where every second counts, we've noticed a crucial gap in emergency response. That's why we embarked on creating this app: to bridge the response time between calling for help and receiving it. Our goal is to connect CPR experts, EMTs, and medical professionals with those in need, ensuring that help arrives faster than ever.

Here's why this project matters:

- Every second saves lives. When emergencies strike, immediate assistance can make all the difference. This app aims to mobilize trained professionals in the vicinity before official responders arrive.

- Empowerment through community. By connecting individuals in need with local medical experts, we create a support network that fosters community engagement and trust.

- Technology for good. This project leverages technology to enhance public safety, ensuring that our communities are better prepared for emergencies.

We understand that no single solution fits all scenarios. This app is a work in progress, and we're committed to evolving it based on feedback and real-world usage. Your insights are invaluable, so please feel free to contribute by forking this repo, submitting a pull request, or opening an issue.

### How it works

We used React Native and Expo Development to build the application, targeting Android for live voice transcription from expo-speech-recognition and sending the transcription after recording to Cloudflare Worker. The Cloudflare Worker then uses the BAAI general embedding model to vectorize the transcription. The categories of needed certifications or experience are in a vector database, and vector search is done to get the most relevant person for the situation.

The account system is on Amazon RDS, as well as the current emergencies. After an emergency is categorized, it's put onto the database, which is called on every refresh by people with accounts and certifications. A map is shown on the page to show locations of emergencies.

The backend is hosted on a separate Flask server, which can be found [here](https://github.com/YashedP/2024-hackharvard-flask).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Expo][Expo]][Expo-url]
* [![Flask][Flask]][Flask-url]
* [![Amazon-RDS][Amazon-RDS]][Amazon-RDS-url]
* [![Cloudflare][Cloudflare]][Cloudflare-url]

Programmed in
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Python][Python]][Python-url]
  
Powered by
* [![Vercel][Vercel]][Vercel-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Joseph Helfenbein - [![linkedin][linkedin-shield]][JoeLinkedin-url]

Yash Jani - [![linkedin][linkedin-shield]][YashLinkedin-url]

Nghia Duong - [![linkedin][linkedin-shield]][HarryLinkedin-url]

Priank Dasgupta - [![linkedin][linkedin-shield]][PriankLinkedin-url]

Project Link: [https://github.com/josephHelfenbein/HelpSignal](https://github.com/josephHelfenbein/HelpSignal)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This project was submitted to the HackHarvard 2024 hackathon for the AllHealth track.

Devpost link: [https://devpost.com/software/helpsignal](https://devpost.com/software/helpsignal)


* [Best README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/josephHelfenbein/HelpSignal.svg?style=for-the-badge
[contributors-url]: https://github.com/josephHelfenbein/HelpSignal/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/josephHelfenbein/HelpSignal.svg?style=for-the-badge
[forks-url]: https://github.com/josephHelfenbein/HelpSignal/network/members
[stars-shield]: https://img.shields.io/github/stars/josephHelfenbein/HelpSignal.svg?style=for-the-badge
[stars-url]: https://github.com/josephHelfenbein/HelpSignal/stargazers
[issues-shield]: https://img.shields.io/github/issues/josephHelfenbein/HelpSignal.svg?style=for-the-badge
[issues-url]: https://github.com/josephHelfenbein/HelpSignal/issues
[license-shield]: https://img.shields.io/github/license/josephHelfenbein/HelpSignal.svg?style=for-the-badge
[license-url]: https://github.com/josephHelfenbein/HelpSignal/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Expo]: https://img.shields.io/badge/expo-000000?style=for-the-badge&logo=expo&logoColor=white
[Expo-url]: https://expo.dev/
[Flask]: https://img.shields.io/badge/flask-4590A1?logo=flask&style=for-the-badge&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/en/3.0.x/
[JavaScript]: https://img.shields.io/badge/javascript-yellow?logo=javascript&style=for-the-badge&logoColor=white
[JavaScript-url]: https://developer.oracle.com/languages/javascript.html
[ThreeJS]: https://img.shields.io/badge/three.js-black?logo=three.js&style=for-the-badge&logoColor=white
[ThreeJS-url]: https://threejs.org/
[TypeScript]: https://img.shields.io/badge/typescript-3178C6?logo=typescript&style=for-the-badge&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Python]: https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/
[Amazon-RDS]: https://img.shields.io/badge/amazon%20rds-527FFF?style=for-the-badge&logo=amazon%20rds&logoColor=white
[Amazon-RDS-url]: https://aws.amazon.com/rds/
[Cloudflare]: https://img.shields.io/badge/cloudflare%20workers-F38020?style=for-the-badge&logo=cloudflare%20workers&logoColor=white
[Cloudflare-url]: https://workers.cloudflare.com/
[Vercel]: https://img.shields.io/badge/vercel-000000?logo=vercel&style=for-the-badge&logoColor=white
[Vercel-url]: https://www.vercel.com/
[JoeLinkedin-url]:https://www.linkedin.com/in/joseph-j-helfenbein/
[YashLinkedin-url]: https://www.linkedin.com/in/yash-jani-potatoes/
[HarryLinkedin-url]: https://www.linkedin.com/in/harrydng/
[PriankLinkedin-url]: https://www.linkedin.com/in/priank-dasgupta
