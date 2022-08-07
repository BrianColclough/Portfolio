import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "../../components/layout";

export default function BlogHome({ posts }) {
  return (
    <Layout>
      <div className="flex justify-center font-wotfard-300">
        <div className="flex flex-col max-w-5xl">
          <h1 className="text-2xl"> Blog Posts </h1>
          <div className="flex justify-center items-center flex-col ">
            <div className="flex flex-row gap-4 flex-wrap mt-4">
              {posts.filter((post) => post.frontMatter.posted == true).map((post, index: number) => (
                <Link href={"/blog/" + post.slug} passHref key={index}>
                  <div className="bg-ui-blue/25 p-4 rounded-3xl w-80">
                    <p className="font-wotfard-400 pb-0 mb-0">
                      {post.frontMatter.title}
                    </p>
                    <small>{post.frontMatter.date}</small>
                    <p>{post.frontMatter.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
