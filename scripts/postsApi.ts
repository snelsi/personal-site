import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

interface Items {
  [key: string]: string;
}
export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "link") {
      items[field] = `/blog/${realSlug}`;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export const getPosts = (fields: string[] = [], { limit = 0, from = 0 } = {}) => {
  let slugs = getPostSlugs() || [];
  if (from) {
    slugs = slugs.slice(from);
  }
  if (limit) {
    slugs = slugs.slice(0, limit);
  }
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter(Boolean)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1?.date > post2?.date ? -1 : 1));
  return posts;
};
