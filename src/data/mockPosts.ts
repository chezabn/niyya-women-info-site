export interface MockPost {
    id: string;
    author: string;
    username: string;
    avatar: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
    time: string;
}

export const mockPosts: MockPost[] = [
    {
        id: "post-1",
        author: "Sarah",
        username: "@sarah",
        avatar: "https://i.pravatar.cc/100?img=47",
        content:
            "Prendre du temps pour soi, apprécier les petites choses et avancer à son rythme. C'est aussi ça, prendre soin de soi. ✨",
        image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=700",
        likes: 124,
        comments: 18,
        time: "Il y a 12 min",
    },
    {
        id: "post-2",
        author: "Amira",
        username: "@amira",
        avatar: "https://i.pravatar.cc/100?img=44",
        content:
            "Une petite pensée positive pour toutes celles qui traversent une période difficile. Vous êtes plus fortes que vous ne le pensez. ❤️",
        likes: 89,
        comments: 12,
        time: "Il y a 35 min",
    },
    {
        id: "post-3",
        author: "Lina",
        username: "@lina",
        avatar: "https://i.pravatar.cc/100?img=49",
        content:
            "Aujourd'hui, j'ai décidé de commencer quelque chose de nouveau. Parfois, le plus difficile est simplement de faire le premier pas.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=700",
        likes: 203,
        comments: 31,
        time: "Il y a 1 h",
    },
];