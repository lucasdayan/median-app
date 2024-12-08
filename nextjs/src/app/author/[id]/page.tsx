"use client";

import Author from "@/components/author";
import { useParams } from "next/navigation";

export default function AuthorPage() {
  const params = useParams();
  const { id } = params;

  return <Author authorId={id as string} />;
}