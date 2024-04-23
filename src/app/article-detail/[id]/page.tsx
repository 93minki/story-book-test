import ArticleDetail from "@/components/ArticleDetail";

const ArticleDetailPage = ({ params }: { params: { id: string } }) => {
  return <ArticleDetail id={params.id} />;
};

export default ArticleDetailPage;
