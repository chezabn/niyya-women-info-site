import type { MockPost } from "../../data/mockPosts";

interface PostCardProps {
    post: MockPost;
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <article className="border-b border-gray-100 px-4 py-4">
            {/* Author */}
            <div className="flex items-center gap-3">
                <img
                    src={post.avatar}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover"
                    loading="lazy"
                />

                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-gray-900">
                        {post.author}
                    </p>

                    <p className="text-xs text-gray-400">
                        {post.username} · {post.time}
                    </p>
                </div>

                <button
                    type="button"
                    aria-label={`Plus d'options pour la publication de ${post.author}`}
                    className="text-lg text-gray-400"
                >
                    ···
                </button>
            </div>

            {/* Content */}
            <p className="mt-3 text-[13px] leading-6 text-gray-700">
                {post.content}
            </p>

            {/* Image */}
            {post.image && (
                <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="mt-3 max-h-64 w-full rounded-xl object-cover"
                />
            )}

            {/* Interactions */}
            <div className="mt-4 flex items-center gap-5 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true">♡</span>
            {post.likes}
        </span>

                <span className="flex items-center gap-1.5">
          <span aria-hidden="true">◯</span>
                    {post.comments} commentaires
        </span>

                <span className="ml-auto" aria-label="Partager">
          ↗
        </span>
            </div>
        </article>
    );
}