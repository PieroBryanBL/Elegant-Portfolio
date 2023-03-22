const forHtml = document.getElementById("html"),
  forCss = document.getElementById("css"),
  forJavascript = document.getElementById("js"),
  forTailwind = document.getElementById("tailwind"),
  forAstro = document.getElementById("astro"),
  forBootstrap = document.getElementById("bootstrap"),
  forWordpress = document.getElementById("wordpress"),
  forGit = document.getElementById("git"),
  forPhotoshop = document.getElementById("adobePS"),
  forIllustrator = document.getElementById("adobeAI"),
  forXD = document.getElementById("adobeXD"),
  forFigma = document.getElementById("figma"),
  screenTitle = document.getElementById("showTitle"),
  screenDescription = document.getElementById("showDescription");

forHtml.addEventListener("click", () => {
  screenTitle.innerHTML = "HTML";
  screenDescription.innerHTML =
    "I started learning HTML during my web design course, and eventually delved deeper into essential programming languages for web development. HTML is a great language to begin with if you want to get into the world of web development. However, I soon realized the importance of learning other languages and technologies to create more dynamic and functional websites.";
});

forCss.addEventListener("click", () => {
  screenTitle.innerHTML = "CSS";
  screenDescription.innerHTML =
    "I started with HTML and eventually learned CSS, a fundamental language for website styling. CSS controls layout, color, and typography, helping create attractive and professional designs for better user experience.";
});

forJavascript.addEventListener("click", () => {
  screenTitle.innerHTML = "Javascript";
  screenDescription.innerHTML =
    "On my journey towards web development, I discovered JavaScript, an essential programming language for creating interactive and dynamic websites. With JavaScript, I was able to enhance website functionality and create visually appealing effects for users.";
});

forTailwind.addEventListener("click", () => {
  screenTitle.innerHTML = "Tailwind";
  screenDescription.innerHTML =
    "The biggest advantage of using Tailwind is that it allows me to focus on the functionality of the website rather than the design, as it offers a variety of customizable design options that can be easily applied using simple classes. This enables me to build and maintain consistent, professional, and highly functional websites.";
});

forAstro.addEventListener("click", () => {
  screenTitle.innerHTML = "Astro";
  screenDescription.innerHTML =
    "What sets Astro apart from other frameworks is its flexibility and ease of use. With Astro, I can choose the tools and technologies that best fit my project, allowing me to create highly customized and scalable web applications. Additionally, its syntax is clear and easy to understand, which streamlines my workflow and enables me to focus on the business logic rather than framework configuration.";
});

forBootstrap.addEventListener("click", () => {
  screenTitle.innerHTML = "Bootstrap";
  screenDescription.innerHTML =
    "Although I learned to use Bootstrap and recognize its advantages, I currently use it less because I have adapted to using Tailwind, which better suits my needs and working style.";
});

forWordpress.addEventListener("click", () => {
  screenTitle.innerHTML = "WordPress";
  screenDescription.innerHTML =
    "WordPress is a popular content management system that allows me to quickly and easily create customized websites with its wide variety of templates and plugins. Additionally, its large community of users and developers provides me with useful resources and solutions to improve my workflow.";
});

forGit.addEventListener("click", () => {
  screenTitle.innerHTML = "Git";
  screenDescription.innerHTML =
    "Git is a version control system that allows me to keep track of changes in my code and collaborate efficiently with other developers. With Git, I can create different development branches and merge them easily and safely, which helps me keep my code organized and conflict-free.";
});

forPhotoshop.addEventListener("click", () => {
  screenTitle.innerHTML = "Adobe Photoshop";
  screenDescription.innerHTML =
    "I have been using Adobe Photoshop for several years now, and it has been an essential tool in my design toolkit. With Photoshop, I am able to create and edit images with a high level of precision and control, which has allowed me to bring my design ideas to life in a way that is both beautiful and functional. The wide range of features and capabilities in Photoshop has helped me to streamline my workflow and improve my efficiency as a designer.";
});

forIllustrator.addEventListener("click", () => {
  screenTitle.innerHTML = "Adobe Illustrator";
  screenDescription.innerHTML =
    "Adobe Illustrator is a powerful vector graphics editor that allows me to create high-quality illustrations and designs for a variety of projects. With its robust set of tools and features, I can easily create and manipulate vector shapes, apply gradients and textures, and add typography to my designs. The ability to export my work in various file formats also makes it easy to share my designs with clients or other team members.";
});

forXD.addEventListener("click", () => {
  screenTitle.innerHTML = "Adobe XD";
  screenDescription.innerHTML =
    "Adobe XD is a digital experience design tool that allows me to create interactive prototypes and high-fidelity designs for websites and mobile apps.";
});

forFigma.addEventListener("click", () => {
  screenTitle.innerHTML = "Figma";
  screenDescription.innerHTML =
    "Figma is an online and collaborative user interface design tool that allows designers to efficiently create, prototype, and share designs. With Figma, teams can work together in real time, making collaboration and feedback easy.";
});
