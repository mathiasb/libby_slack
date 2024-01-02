# Libby for Slack
<a name="readme-top"></a>
<!-- SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mathiasb/libby_slack">
    <img src="images/libby_logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Libby for Slack</h3>

  <p align="center">
    Libby the diligent Librarian that can summarize any link you throw at her in Slack.
    <br />
    <a href="https://github.com/mathiasb/libby_slack"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/mathiasb/libby_slack">View Demo</a>
    ·
    <a href="https://github.com/mathiasb/libby_slack/issues">Report Bug</a>
    ·
    <a href="https://github.com/mathiasb/libby_slack/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the project</a>
      <ul>
        <li><a href="#built-with">Built with</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li>
      <a href="#roadmap">Roadmap</a>
      <ul>
        <li><a href="#increase-commands-and-intelligence">Increase commands and intelligence</a></li>
        <li><a href="#alternative-gen-ai-implementations">Alternative Gen AI Implementations</a></li>
        <li><a href="#more-integrations">More integrations</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About the project
<p>Libby was created to meet an internal need within an analysis and research process. As the team spent many hours browsing and sifting through troves of research reports and articles for different customer projects, and shared the summarized views in a Slack channel, we decided to try to systematize the process a bit more, to both improve efficiency in the project, and also to create better traceability and history of tracking &quot;signals&quot;.</p>
<p>Libby was created as a Slack plugin to support the main workflow of the team. The backend is deployed as a Google Cloud function within your Google Cloud infrastructure, with the help of Terraform and GitHub Actions.</p>

### Built with
* [![Google Bard][Google_Bard]][GoogleBard-url]
* [![NodeJS][Nodejs.org]][Node-url]
* [![Terraform][Terraform.io]][Terraform-url]
* [![GitHub Actions][GitHub_Actions]][GitHubActions-url]
* [![Slack][Slack]][Slack-url]]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting started
You need a Google Bard account and Slack and the ability to add extensions to Slack.
### Prerequisites
* Follow this guide to enable API access to your Google Bard account.
* Follow this guide to enable extensions in your team Slack.

### Installation
1. Log in to Google Bard
2. Go to your Slack admin panel
3. Add extension to Slack
4. Approve API calls
5. Ensure Libby pops up in the App list

<!-- USAGE -->
## Usage
1. Open Slack
2. In any channel you can issue the command <code>/libby sum \[URL\]</code>
3. If you have the access rights to access URL, then Libby will get the information behind the URL, ask Bard to summarize it, and respond back with the summation of the text, and the URL itself, together with a list of tags that can be used to sort the contents in a research database e.g.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap
The MVP use case is planned to be developed further in a few directions.

### Increase commands and intelligence
Right now the main use case is to summarize article type texts. Next steps could be other research and analysis use cases, like quickly looking for names, places etc using NER algorithms, so one command could be <code>/libby ner \[URL\]</code>

### Alternative Gen AI implementations
Libby uses the experimental open version of Google Bard currently. Next steps could be to use other conversational AI or AI chatbot implementations.

### More integrations
Right now Libby is built as a Slack extension. She could also be used in other workflow and collaboration tools. E.g. Symphony or the Metaverse. Libby could also do more with the reponses than just to feed back text, she could store the results together with tags/labels and the original URL in a database.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Mathias Bergqvist - [@berqa](https://twitter.com/berqa) - mthbqv@gmail.com

Project Link: [https://github.com/mathiasb/libby_slack](https://github.com/mathiasb/libby_slack)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Bard API Node](https://github.com/codenze/bard-api-node)
* [Create a Slack bot in Node](https://medium.com/walmartglobaltech/create-slackbot-using-slack-bolt-api-and-node-js-a82876db012f)
* [Unit testing Node with Mocha and Chai](https://blog.logrocket.com/testing-node-js-mocha-chai/)
* [How to create a Slack app Serverless](https://github.com/xplorer-io/xplorers-bot-ts)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/mathiasb/libby_slack.svg?style=for-the-badge
[contributors-url]: https://github.com/mathiasb/libby_slack/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mathiasb/libby_slack.svg?style=for-the-badge
[forks-url]: https://github.com/mathiasb/libby_slack/network/members
[stars-shield]: https://img.shields.io/github/stars/mathiasb/libby_slack.svg?style=for-the-badge
[stars-url]: https://github.com/mathiasb/libby_slack/stargazers
[issues-shield]: https://img.shields.io/github/issues/mathiasb/libby_slack.svg?style=for-the-badge
[issues-url]: https://github.com/mathiasb/libby_slack/issues
[license-shield]: https://img.shields.io/github/license/mathiasb/libby_slack.svg?style=for-the-badge
[license-url]: https://github.com/mathiasb/libby_slack/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mathiasbergqvist/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=flat
[Bootstrap-url]: https://getbootstrap.com
[Nodejs.org]: https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat
[Node-url]: https://nodejs.org
[Google_Bard]: https://img.shields.io/badge/Google%20Bard-886FBF?logo=googlebard&logoColor=fff&style=flat
[GoogleBard-url]: https://bard.google.com
[Terraform.io]: 
[Terraform-url]: https://www.terraform.io
[GitHub_Actions]:
[GitHubActions-url]: https://docs.github.com/en/actions
[Slack]:
[Slack-url]: https://www.slack.com