"use client";
import AvatarIcon from "./avatar-icon";
import NavBar from "@/components/navbar";
import { IArticle } from "@/interfaces";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Article() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [article, setArticle] = useState<IArticle | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      const fetchArticle = async () => {
        try {
          const response = await fetch(`http://localhost:5000/post/${id}`, {
            method: "GET",
            credentials: "include",
          });
          const data = await response.json();
          setArticle(data);
        } catch (error) {
          console.error("Error fetching article:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchArticle();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />

      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              {article?.title}
            </h1>
            <p className="text-xl text-muted-foreground">{article?.content}</p>
          </div>

          <div className="flex items-center space-x-4 py-4 border-b">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium">{article?.author?.name}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>
                  Published on{" "}
                  {article?.createdAt
                    ? new Date(article.createdAt).toLocaleDateString(
                        undefined,
                        { year: "numeric", month: "long", day: "numeric" }
                      )
                    : "Unknown date"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
