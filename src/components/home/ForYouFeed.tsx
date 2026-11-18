import { mockPosts } from "../../data/mockPosts";
import PostCard from "./PostCard";

function NotificationIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-7 w-7"
            aria-hidden="true"
        >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
        </svg>
    );
}

function PlusIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
            aria-hidden="true"
        >
            <path d="M12 5v14M5 12h14" />
        </svg>
    );
}

function HomeIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
            <path d="m3 10 9-7 9 7" />
            <path d="M5 9v12h14V9M9 21v-7h6v7" />
        </svg>
    );
}

function SearchIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
            <circle cx="10.8" cy="10.8" r="7.3" />
            <path d="m16.2 16.2 4.3 4.3" />
        </svg>
    );
}

function CreateIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v8M8 12h8" />
        </svg>
    );
}

function CommunityIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
            <circle cx="9" cy="8" r="3.5" />
            <path d="M2.5 20v-1.5A5.5 5.5 0 0 1 8 13h2a5.5 5.5 0 0 1 5.5 5.5V20Z" />
            <circle cx="17" cy="8" r="2.5" />
            <path d="M17 13a5 5 0 0 1 4.5 5v2" />
        </svg>
    );
}

function ProfileIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-7 w-7">
            <circle cx="12" cy="7" r="4" />
            <path d="M4 21v-2a8 8 0 0 1 16 0v2Z" />
        </svg>
    );
}

export default function ForYouFeed() {
    return (
        <div className="relative flex h-full min-h-0 flex-col overflow-hidden bg-white">
            {/* Zone défilante */}
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain scrollbar-none [&::-webkit-scrollbar]:hidden">
                {/* En-tête de l'application */}
                <header className="flex items-center justify-between px-5 pb-3 pt-7">
          <span className="text-[27px] font-extrabold tracking-tight text-primary">
            NiWo
          </span>

                    <button
                        type="button"
                        aria-label="Notifications"
                        className="relative rounded-full p-1 text-gray-950"
                    >
                        <NotificationIcon />

                        <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />
                    </button>
                </header>

                {/* Titre du fil */}
                <section className="px-5 pb-6 pt-4">
                    <h2 className="text-[30px] font-bold tracking-tight text-gray-950">
                        Pour toi
                    </h2>

                    <p className="mt-1 text-[14px] leading-5 text-gray-400">
                        Découvre les publications de la communauté.
                    </p>
                </section>

                {/* Liste des publications */}
                <section
                    aria-label="Publications de la communauté"
                    className="space-y-4 px-4 pb-28"
                >
                    {mockPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </section>
            </div>

            {/* Bouton de création flottant */}
            <button
                type="button"
                aria-label="Créer une publication"
                className="absolute bottom-16.25 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-[0_5px_15px_rgba(0,0,0,0.20)] transition-transform hover:scale-105 active:scale-95"            >
                <PlusIcon />
            </button>

            {/* Navigation inférieure */}
            <nav
                aria-label="Navigation de l'application"
                className="z-20 flex h-14.5 shrink-0 items-center justify-around border-t border-gray-200 bg-white"
            >
                <button
                    type="button"
                    aria-label="Accueil"
                    aria-current="page"
                    className="text-primary"
                >
                    <HomeIcon />
                </button>

                <button
                    type="button"
                    aria-label="Recherche"
                    className="text-gray-400"
                >
                    <SearchIcon />
                </button>

                <button
                    type="button"
                    aria-label="Créer une publication"
                    className="text-gray-400"
                >
                    <CreateIcon />
                </button>

                <button
                    type="button"
                    aria-label="Communauté"
                    className="text-gray-400"
                >
                    <CommunityIcon />
                </button>

                <button
                    type="button"
                    aria-label="Profil"
                    className="text-gray-400"
                >
                    <ProfileIcon />
                </button>
            </nav>
        </div>
    );
}