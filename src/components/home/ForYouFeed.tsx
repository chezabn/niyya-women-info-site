import { mockPosts } from "../../data/mockPosts";
import PostCard from "./PostCard";

export default function ForYouFeed() {
    return (
        <div className="h-full overflow-y-auto overscroll-contain bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* Application header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white/95 px-4 py-3 backdrop-blur">
                <div>
                    <p className="text-base font-bold text-gray-900">
                        Niyya Women
                    </p>

                    <p className="text-[10px] text-gray-400">
                        Votre communauté
                    </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary">
                    ♡
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-100">
                <button
                    type="button"
                    className="flex-1 border-b-2 border-primary py-3 text-xs font-semibold text-primary"
                >
                    Pour vous
                </button>

                <button
                    type="button"
                    className="flex-1 py-3 text-xs font-medium text-gray-400"
                >
                    Abonnements
                </button>
            </div>

            {/* Create post */}
            <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-4">
                <div className="h-9 w-9 shrink-0 rounded-full bg-primary-light" />

                <div className="flex-1 rounded-full bg-gray-50 px-4 py-2.5 text-xs text-gray-400">
                    Partagez quelque chose...
                </div>

                <span className="text-primary" aria-hidden="true">
          +
        </span>
            </div>

            {/* Posts */}
            <div>
                {mockPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}