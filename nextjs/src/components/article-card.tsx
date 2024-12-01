import Link from "next/link";

export default function ArticleCard({
  id,
  author,
  title,
  description,
  date,
}: {
  id: string;
  author: string;
  title: string;
  description: string;
  date: string;
}) {
  return (
    <article className="">
      <Link href={{ pathname: "/article", query: { id: id } }}>
        <h2 className="mb-2 text-xl font-bold group-hover:underline">
          {title}
        </h2>
      </Link>
      <p className="mb-4 text-muted-foreground">
        {description.length > 100
          ? `${description.substring(0, 300)}...`
          : description}
      </p>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>by {author}</span>
        <span>{date}</span>
      </div>
    </article>
  );
}
