import ArticleCard from "@/components/article-card";
import NavBar from "@/components/navbar";

export default function Feed() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <span className="mx-auto grid max-w-7xl  gap-6 px-4 py-6 ">
        <div className="space-y-8">
          <h2 className="text-xl font-serif">Articles</h2>
          <ArticleCard
            publication="Dev Genius"
            author="Paul Corcoran"
            title="MaldiniNet—A proprietary Neural Network for football match result prediction."
            description="Leveraging advanced expected goals metrics to better predict the 1×2 market for top european football leagues."
            date="Aug 21, 2023"
            readingStats={{ views: "253", comments: "4" }}
          />

          <ArticleCard
            publication="Stackademic"
            author="Abdur Rahman"
            title="Python is No More The King of Data Science"
            description="5 Reasons Why Python is Losing Its Crown"
            date="Oct 22"
            readingStats={{ views: "8.5K", comments: "34" }}
          />

          <ArticleCard
            publication="Towards Data Science"
            author="Dr. Robert Kübler"
            title="Introduction to Embedding-Based Recommender Systems"
            description="Learn to build a simple matrix factorization recommender in TensorFlow"
            date="Jan 25, 2023"
            readingStats={{ views: "654", comments: "5" }}
          />
        </div>
      </span>
    </div>
  );
}
