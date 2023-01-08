const getData = async () => {
  const data = await fetch("https://reddit.com/.json", {
    /* cache: "no-store" */
  });
  return data.json();
};

const AboutPage = async () => {
  const data = await getData();

  const post = data.data.children[0].data.title;

  return <div>{post}</div>;
};

export default AboutPage;
