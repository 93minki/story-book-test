"use client";
import { useRouter } from "next/navigation";

interface ArticleType {
  title: string;
  content: string;
  id: number;
}

const Article = ({ title, content, id }: ArticleType) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(`/article-detail/${id}`);
  };

  return (
    <div
      className="w-32 border rounded-md p-4 hover:bg-gray-100 cursor-pointer"
      onClick={clickHandler}
    >
      <div className="text-lg font-bold ">{title}</div>
      <div className="text-sm">{content.slice(0, 30)}</div>
    </div>
  );
};

export default Article;
