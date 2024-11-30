import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Feed() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-serif">Medium</h1>
            <div className="relative hidden md:block">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="w-64 pl-8" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button>Write</Button>
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        </div>
      </nav>

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Tabs defaultValue="for-you" className="mb-8">
            <TabsList>
              <TabsTrigger value="for-you">For you</TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-8">
            <ArticleCard
              publication="Dev Genius"
              author="Paul Corcoran"
              title="MaldiniNet—A proprietary Neural Network for football match result prediction."
              description="Leveraging advanced expected goals metrics to better predict the 1×2 market for top european football leagues."
              date="Aug 21, 2023"
              readingStats={{ views: "253", comments: "4" }}
              image="/placeholder.svg?height=200&width=200"
            />

            <ArticleCard
              publication="Stackademic"
              author="Abdur Rahman"
              title="Python is No More The King of Data Science"
              description="5 Reasons Why Python is Losing Its Crown"
              date="Oct 22"
              readingStats={{ views: "8.5K", comments: "34" }}
              image="/placeholder.svg?height=200&width=200"
            />

            <ArticleCard
              publication="Towards Data Science"
              author="Dr. Robert Kübler"
              title="Introduction to Embedding-Based Recommender Systems"
              description="Learn to build a simple matrix factorization recommender in TensorFlow"
              date="Jan 25, 2023"
              readingStats={{ views: "654", comments: "5" }}
              image="/placeholder.svg?height=200&width=200"
            />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <section>
            <h2 className="mb-4 text-lg font-semibold">Staff Picks</h2>
            <div className="space-y-4">
              <StaffPick
                author="Mark Shrime, MD, PhD"
                title="The dumbest decision I ever made (and the Nobel Prize that explains it)"
                date="Nov 21"
              />
              <StaffPick
                author="Tufts Public Opinion Lab"
                title="Carving the divide: Political polarization and family discussions at the Thanksgiving table"
                date="Nov 21"
              />
              <StaffPick
                author="Adaobi Adibe"
                title="How to do things if you're not that smart and don't have any talent"
                date="3d ago"
              />
            </div>
            <Button variant="link" className="mt-4">
              See the full list
            </Button>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold">Recommended topics</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Programming",
                "Self Improvement",
                "Data Science",
                "Writing",
                "Relationships",
                "Technology",
                "Politics",
              ].map((topic) => (
                <Button key={topic} variant="secondary" size="sm">
                  {topic}
                </Button>
              ))}
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}

function ArticleCard({
  publication,
  author,
  title,
  description,
  date,
  readingStats,
  image,
}: {
  publication: string;
  author: string;
  title: string;
  description: string;
  date: string;
  readingStats: { views: string; comments: string };
  image: string;
}) {
  return (
    <article className="group grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="md:col-span-2">
        <div className="mb-2 flex items-center gap-2 text-sm">
          <span>{publication}</span>
          <span>by {author}</span>
        </div>
        <h2 className="mb-2 text-xl font-bold group-hover:underline">
          {title}
        </h2>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{date}</span>
          <span>{readingStats.views} views</span>
          <span>{readingStats.comments} comments</span>
        </div>
      </div>
      <div className="order-first md:order-last">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="rounded-lg object-cover"
        />
      </div>
    </article>
  );
}

function StaffPick({
  author,
  title,
  date,
}: {
  author: string;
  title: string;
  date: string;
}) {
  return (
    <article className="group">
      <div className="mb-1 flex items-center gap-2">
        <Image
          src="/placeholder.svg?height=20&width=20"
          alt={author}
          width={20}
          height={20}
          className="rounded-full"
        />
        <span className="text-sm">{author}</span>
      </div>
      <h3 className="mb-1 font-bold group-hover:underline">{title}</h3>
      <span className="text-sm text-muted-foreground">{date}</span>
    </article>
  );
}
