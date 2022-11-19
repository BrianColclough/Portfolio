import Layout from "../../components/layout";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import SyntaxHighlight from "../../components/blog/SyntaxHighlight";
import Image from "next/image";

function PostPage({ frontMatter = null, mdxSource = null }) {
  const components = { Image, SyntaxHighlight };
  return (
    <Layout>
      <section className="flex justify-center sm:leading-relaxed font-wotfard-300 pt-4 ">
        <div
          className="font-sans subpixel-antialiased font-normal 
            text-ui-text-regular sm:w-5/6 justify-center sm:max-w-3xl max-w-full"
        >
          <div className="flex flex-row flex-wrap justify-center gap-4 w-full">
            <article className="prose sm:prose-lg prose-h1:text-ui-bright-blue prose-h2:text-ui-pink max-w-none px-4 sm:px-2 my-2">
              <h1>{frontMatter.title}</h1>
              <div className="font-wotfard-200-i mt-0">{frontMatter.date}</div>
              <MDXRemote {...mdxSource} components={components} />
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".mdx"));

  const { data: frontMatter, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
      fallback: false,
    },
  };
};

export { getStaticPaths, getStaticProps };
export default PostPage;