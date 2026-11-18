import type { MockPost } from "../../data/mockPosts";

interface PostCardProps {
    post: MockPost;
}

function HeartIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
        </svg>
    );
}

function CommentIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
            aria-hidden="true"
        >
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-4.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 4h.5a8.5 8.5 0 0 1 8 7.5Z" />
        </svg>
    );
}

function ChevronRightIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
            aria-hidden="true"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}

function MoreIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
        >
            <circle cx="5" cy="12" r="1.8" />
            <circle cx="12" cy="12" r="1.8" />
            <circle cx="19" cy="12" r="1.8" />
        </svg>
    );
}

export default function PostCard({ post }: PostCardProps) {
    const initial = post.author.trim().charAt(0).toUpperCase();

    return (
        <article className="rounded-[22px] border border-gray-200 bg-white px-4 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            {/* Informations de l'autrice */}
            <div className="flex items-center gap-3">
                <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xl font-semibold text-primary"
                    aria-hidden="true"
                >
                    {initial}
                </div>

                <div className="min-w-0 flex-1">
                    <p className="truncate text-[15px] font-bold text-gray-950">
                        {post.username.replace(/^@/, "")}
                    </p>

                    <p className="mt-0.5 text-sm text-gray-400">
                        {post.time}
                    </p>
                </div>

                <button
                    type="button"
                    aria-label={`Plus d'options pour la publication de ${post.author}`}
                    className="rounded-full p-1 text-gray-400 transition hover:bg-gray-100"
                >
                    <MoreIcon />
                </button>
            </div>

            {/* Contenu de la publication */}
            <p className="mt-5 whitespace-pre-line text-[15px] leading-[1.7] text-gray-900">
                {post.content}
            </p>

            {post.image && (
                <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="mt-4 max-h-64 w-full rounded-xl object-cover"
                />
            )}

            {/* Interactions */}
            <div className="mt-5 flex items-center border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <HeartIcon />

                    <span>{post.likes}</span>
                </div>

                <div className="ml-6 flex min-w-0 items-center gap-2 text-sm text-gray-400">
                    <CommentIcon />

                    <span className="truncate">Commentaires</span>
                </div>

                <button
                    type="button"
                    aria-label="Voir la publication"
                    className="ml-auto shrink-0 text-gray-400 transition hover:text-primary"
                >
                    <ChevronRightIcon />
                </button>
            </div>
        </article>
    );
}