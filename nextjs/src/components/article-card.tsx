export default function ArticleCard({
  publication,
  author,
  title,
  description,
  date,
  readingStats,
}: {
  publication: string;
  author: string;
  title: string;
  description: string;
  date: string;
  readingStats: { views: string; comments: string };
}) {
  return (
    <article className="">
      <div className="mb-2 flex items-center gap-2 text-sm">
        <span>{publication}</span>
        <span>by {author}</span>
      </div>
      <h2 className="mb-2 text-xl font-bold group-hover:underline">{title}</h2>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>{date}</span>
        <span>{readingStats.views} views</span>
        <span>{readingStats.comments} comments</span>
      </div>
    </article>
  );
}
