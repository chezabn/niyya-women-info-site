import type { LucideIcon } from "lucide-react";

interface PhilosophyValueProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function PhilosophyValue({
                                            icon: Icon,
                                            title,
                                            description,
                                        }: PhilosophyValueProps) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
            </div>

            <div>
                <h3 className="mb-1 font-semibold text-gray-900">
                    {title}
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );
}