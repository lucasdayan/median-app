import { Button } from "@/components/ui/button";
import AvatarIcon from "./avatar-icon";
import { MessageSquare, Play, Share2, MoreHorizontal } from "lucide-react";

export default function Article() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            The Ultimate Guide to PDPs and ICE Plots
          </h1>
          <p className="text-xl text-muted-foreground">
            The intuition, maths and code (R and Python) behind partial
            dependence plots and individual conditional expectation plots
          </p>
        </div>

        <div className="flex items-center space-x-4 py-4 border-b">
          <AvatarIcon />
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="font-medium">Conor O'Sullivan</span>
              <Button variant="ghost" className="h-auto p-0 text-primary">
                Follow
              </Button>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Published in Towards Data Science</span>
              <span className="px-2">·</span>
              <span>26 min read</span>
              <span className="px-2">·</span>
              <span>Jun 28, 2022</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="space-x-2">
              <span>417</span>
              <span className="text-muted-foreground">claps</span>
            </Button>
            <Button variant="ghost" className="space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>1</span>
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Play className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="lead">
            Both PDPs and ICE plots can help us understand how our models make
            predictions.
          </p>
          <p>
            Using PDPs we can visualise the relationship between model features
            and the target variable. They can tell us if a relationship is
            linear, non-linear or if there is no relationship.
          </p>
        </div>
      </div>
    </article>
  );
}
