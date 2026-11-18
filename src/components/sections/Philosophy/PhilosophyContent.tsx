import PhilosophyValue from "./PhilosophyValue";
import { philosophyValues } from "./philosophy.data";

export default function PhilosophyContent() {
    return (
        <div className="max-w-xl">

      <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        Notre philosophie
      </span>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl">
                Libre d'être soi.
                <span className="block text-primary">
          En toute confiance.
        </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                Niyya Women est née d'une volonté : offrir aux femmes
                un espace qui leur est dédié. Un lieu où chacune peut
                s'exprimer librement, partager ses expériences, ses
                passions et ses moments de vie, dans un environnement
                où la sécurité et la confiance occupent une place essentielle.
            </p>

            <div className="mt-10 space-y-7">
                {philosophyValues.map((value) => (
                    <PhilosophyValue
                        key={value.id}
                        {...value}
                    />
                ))}
            </div>

        </div>
    );
}