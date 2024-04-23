import Article from "./Article";

import { aricleList } from "../app/constants";

const MainContent = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {aricleList.map((article, i) => (
        <Article
          key={i + 1}
          title={article.title}
          content={article.content}
          id={i + 1}
        />
      ))}
    </div>
  );
};

export default MainContent;
