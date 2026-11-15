import Link from "next/link";

const BlogPost = ({ title, summary, slug }) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full bg-gray-100 rounded-md mb-4 p-4 border border-gray-200"
    >
      <div className="w-full">
        <h4 className="text-base w-full text-gray-900">{title}</h4>
      </div>
    </Link>
  );
};

export default BlogPost;
