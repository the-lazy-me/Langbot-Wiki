import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/posts/deploymentTutorial/",
  "/posts/functionIntroduction",
  {
    text: "疑难解答",
    icon: "discover",
    children: [
      {
        text: "常见报错",
        icon: "info",
        link: "/posts/commonErrors/",
      },
      {
        text: "问题解答",
        icon: "blog",
        link: "/posts/Q&A",
      },
    ],
  },
  {
    text: "项目仓库",
    icon: "github",
    link: "https://github.com/RockChinQ/QChatGPT",
  },
]);