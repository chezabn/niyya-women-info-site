import type { FooterLinkGroup } from "./footer.data";

interface FooterLinksProps {
    group: FooterLinkGroup;
}

export default function FooterLinks({ group }: FooterLinksProps) {
    return (
        <div>
            <h3 className="mb-6 text-sm font-semibold text-white">
                {group.title}
            </h3>

            <ul className="space-y-4">
                {group.links.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            className="text-sm text-white/50 transition-colors duration-200 hover:text-primary"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}