interface PhoneMockupProps {
    image: string;
    alt?: string;
}

export default function PhoneMockup({
                                        image,
                                        alt = "Aperçu de l'application Niyya Women",
                                    }: PhoneMockupProps) {
    return (
        <div className="relative mx-auto w-70 sm:w-[320px]">

            {/* Corps du téléphone */}
            <div className="relative rounded-[3rem] border-8 border-[#242424] bg-black p-1.25 shadow-2xl">

                {/* Écran */}
                <div className="relative aspect-9/19.5 overflow-hidden rounded-[2.4rem] bg-white">

                    <img
                        src={image}
                        alt={alt}
                        className="h-full w-full object-cover"
                    />

                    {/* Dynamic Island */}
                    <div className="absolute left-1/2 top-3 z-10 h-6.25 w-22.5 -translate-x-1/2 rounded-full bg-black" />

                </div>
            </div>

        </div>
    );
}