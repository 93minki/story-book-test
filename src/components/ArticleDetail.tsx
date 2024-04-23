"use client";
import { useEffect, useState } from "react";

const ArticleDetail = ({ id }: { id: string }) => {
  const [articleInfo, setArticleInfo] = useState({ title: "", body: "" });

  useEffect(() => {
    const fetchArticle = async () => {
      const fetchData = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const response = await fetchData.json();
      const { title, body } = response;
      setArticleInfo({ title, body });
    };
    fetchArticle();
  }, [id]);

  return (
    <div className="flex flex-col gap-10 max-w-[900px]">
      <span className="text-4xl font-bold">{articleInfo.title}</span>
      <div className="text-xl">{articleInfo.body}</div>
    </div>
  );
};

export default ArticleDetail;
