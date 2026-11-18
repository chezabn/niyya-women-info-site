import ForYouFeed from "./ForYouFeed.tsx";

export default function PhoneMockup() {
    return (
        <div className="relative mx-auto w-full max-w-75">
            {/* Phone body */}
            <div className="relative rounded-[3rem] border-8 border-gray-900 bg-gray-900 p-1.5 shadow-2xl shadow-black/20">

                {/* Screen */}
                <div className="relative h-147.5 overflow-hidden rounded-[2.4rem] bg-white">

                    {/* Dynamic island */}
                    <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

                    {/* Status bar */}
                    <div className="relative z-10 flex h-9 items-center justify-between bg-white px-6 pt-1 text-[10px] font-semibold text-gray-900">
                        <span>9:41</span>

                        <div className="flex items-center gap-1">
                            <span>●</span>
                            <span>◖</span>
                            <span>▰</span>
                        </div>
                    </div>

                    {/* Application */}
                    <div className="h-[calc(100%-2.25rem)]">
                        <ForYouFeed />
                    </div>


                </div>
            </div>

            {/* Side button decoration */}
            <div className="absolute -left-2 top-28 h-12 w-1 rounded-l-full bg-gray-700" />
            <div className="absolute -left-2 top-48 h-16 w-1 rounded-l-full bg-gray-700" />
            <div className="absolute -right-2 top-36 h-20 w-1 rounded-r-full bg-gray-700" />
        </div>
    );
}