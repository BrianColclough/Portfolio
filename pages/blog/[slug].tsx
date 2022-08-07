import Layout from "../../components/layout";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

function PostPage({ frontMatter, mdxSource }) {
  const components = { Image, SyntaxHighlight };
  return (
    <Layout>
      <section className="flex  items-center flex-col sm:leading-relaxed font-wotfard-300 pt-4">
        <div
          className="font-sans subpixel-antialiased font-normal 
            text-ui-text-regular sm:w-5/6 justify-center sm:max-w-5xl max-w-full"
        >
          <div className="flex flex-row flex-wrap justify-center gap-4 w-full">
            <article className="prose sm:prose-lg prose-h1:text-ui-bright-blue prose-h2:text-ui-purple sm:w-[48rem] px-2 my-2">
              <h1>{frontMatter.title}</h1>
              <MDXRemote {...mdxSource} />
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
    },
  };
};

export { getStaticPaths, getStaticProps };
export default PostPage;
