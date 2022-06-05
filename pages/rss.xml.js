import { allProjects } from "contentlayer/generated";

const SiteMap = () => {
  // getServerSideProps will do the heavy lifting
};

export const getServerSideProps = async ({ res }) => {
  const rss = `<rss version="2.0">
    <channel>
        <title>Anish De</title>
        <link>https://anishde.dev/</link>
        <description>10th grader • Fullstack Web Developer • Web3 Enthusiast • Blogger • Tech Enthusiast</description>
        <lastBuildDate>Sun, 05 Jun 2022 06:38:31 GMT</lastBuildDate>
        <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
        <language>en</language>
        <image>
            <title>Anish De</title>
            <url>https://res.cloudinary.com/anishde12020/image/upload/v1654360780/Blogfolio/og.png</url>
            <link>https://anishde.dev/</link>
        </image>
        <category>Technology</category>
        <category>Programming</category>
        <category>Web Development</category>
        <category>JavaScript</category>
        <category>Node.js</category>
        <category>React</category>
        <category>Next.js</category>
        <category>Svelte</category>
        <category>Tailwind CSS</category>
        <category>Chakra UI</category>
        <category>Blogger</category>
        <category>Tech YouTuber</category>
        <category>Tech Enthusiast</category>
        <category>Fullstack Web Developer</category>
        <category>Anish De</category>
        <category>Web3</category>
    </channel>
</rss>
  `;

  res.setHeader("Content-Type", "text/xml");

  res.write(rss);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
