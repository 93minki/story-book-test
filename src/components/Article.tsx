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
      data-testid="article"
      className="w-32 border rounded-md p-4 hover:bg-gray-100 cursor-pointer min-w-[200px] min-h-[100px] "
      onClick={clickHandler}
    >
      <div className="text-lg font-bold overflow-hidden">{title}</div>
      <div className="text-sm overflow-hidden">{content.slice(0, 30)}</div>
    </div>
  );
};

export default Article;
