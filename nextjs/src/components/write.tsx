"use client";
import NavBar from "@/components/navbar";
import { z } from "zod";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { useAuth } from "@/context/auth-context";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function WriteEditor() {
  const auth = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const writeSchema = z.object({
    title: z
      .string()
      .min(3, { message: "Title must be at least 3 characters" }),
    content: z
      .string()
      .min(10, { message: "Content must be at least 10 characters" }),
    authorId: z.string().optional(),
  });

  type WriteSchema = z.infer<typeof writeSchema>;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<WriteSchema>({
    resolver: zodResolver(writeSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<WriteSchema> = async (data) => {
    const currentUser = auth.user?.sub;

    const payload = {
      ...data,
      authorId: currentUser,
    };

    try {
      const response = await fetch("http://localhost:5000/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      if (!response.ok || responseData.post?.error) {
        toast({
          variant: "destructive",
          title: "Failed to publish",
          description: responseData.post?.message || "Something went wrong.",
        });
        return;
      }

      toast({
        variant: "default",
        title: "Published",
        description: "Your post has been published.",
      });

      router.push(`/article/?id=${responseData.id}`);
      reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Failed to publish the post. Please try again.",
      });
    }
  };

  const title = watch("title");
  const content = watch("content");

  const isFormValid = title?.trim().length >= 3 && content?.trim().length >= 10;

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            className="w-full text-5xl font-serif placeholder-gray-300 border-none focus:outline-none focus:ring-0"
          />
          {errors.title && (
            <p className="text-red-500 mt-2">{errors.title.message}</p>
          )}
          <div className="mt-8 flex items-start gap-2">
            <button className="mt-1.5">
              <span className="sr-only">Add content</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-400"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <textarea
              {...register("content")}
              placeholder="Tell your story..."
              className="w-full min-h-[200px] text-xl placeholder-gray-400 border-none focus:outline-none focus:ring-0 resize-none"
            />
          </div>
          {errors.content && (
            <p className="text-red-500 mt-2">{errors.content.message}</p>
          )}
          {isFormValid && (
            <Button
              type="submit"
              className="w-full bg-green-500 mt-4"
              size="lg"
            >
              Publish
            </Button>
          )}
        </form>
      </main>
    </div>
  );
}
