"use client";
import ArticleCard from "@/components/article-card";
import NavBar from "@/components/navbar";
import { useEffect, useState } from "react";
import { IArticle, User } from "@/interfaces";
import { useAuth } from "@/context/auth-context";

export default function Author(props: {authorId?: string}) {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [author, setAuthor] = useState<User>();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/post/user/${props.authorId}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.articles);
        setAuthor(data.author)
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <span className="mx-auto grid max-w-7xl  gap-6 px-4 py-6 ">
        <div className="space-y-8">
          <h2 className="text-xl font-serif">{author?.name || 'Anonymous'}'s Articles</h2>
          {articles.map((article) => {
            const date = new Date(article.createdAt);
            const formattedDate = date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            return (
              <ArticleCard
                key={article.id}
                id={article.id}
                author={author?.name || 'Anonymous'}
                title={article.title}
                description={article.content}
                date={formattedDate}
              />
            );
          })}
        </div>
      </span>
    </div>
  );
}