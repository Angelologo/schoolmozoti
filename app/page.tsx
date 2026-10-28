import Link from "next/link";

const WHATSAPP_LINK = "https://chat.whatsapp.com/Ct2nl2xfhnkHOhQaKgPmP2";

const avantages = [
  {
    title: "Questions & réponses",
    description:
      "Pose toutes tes questions sur les notions incomprises, les difficultés rencontrées et les zones d'ombre de tes cours.",
    icon: "💬",
  },
  {
    title: "Explications détaillées",
    description:
      "Accède à des explications approfondies des cours, notions importantes et exercices corrigés.",
    icon: "📖",
  },
  {
    title: "Préparation aux évaluations",
    description:
      "Sois régulièrement prêt avant les devoirs, contrôles et examens grâce à un accompagnement ciblé.",
    icon: "🎯",
  },
  {
    title: "Suivi personnel",
    description:
      "Un accompagnement tout au long de ton cursus académique, adapté à ton rythme et à tes besoins.",
    icon: "🤝",
  },
  {
    title: "Astuces & méthodes",
    description:
      "Apprends des techniques pour mieux comprendre, résoudre plus rapidement et mieux t'organiser.",
    icon: "⚡",
  },
  {
    title: "Autres matières",
    description:
      "Signale aussi tes difficultés dans d'autres matières pour recevoir conseils, orientations et aide adaptée.",
    icon: "🧭",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
              SM
            </div>
            <div>
              <div className="font-bold leading-tight text-navy">
                SchoolMɔzɔti
              </div>
              <div className="text-xs text-navy/60">TD Maths · IAI & autres</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-navy/80 md:flex">
            <a href="#avantages" className="hover:text-royal">
              Avantages
            </a>
            <a href="#tarif" className="hover:text-royal">
              Tarif
            </a>
            <a href="#etablissements" className="hover:text-royal">
              Établissements
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-navy via-navy-light to-royal" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center text-white md:py-32">
          <div className="mb-6 inline-block rounded-full border border-gold/40 bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            Programme d'accompagnement académique
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Réussis tes maths avec{" "}
            <span className="text-gold">SchoolMɔzɔti</span>
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-white/80 md:text-xl">
            TD en ligne et accompagnement personnalisé pour les étudiants de
            l'IAI-Togo, IPNET, UCAO et autres établissements.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 font-bold text-navy transition-colors hover:bg-gold-light"
            >
              Rejoindre le groupe WhatsApp
            </a>
            <a
              href="#tarif"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Voir le tarif
            </a>
          </div>
          <div className="mt-12 text-sm font-semibold uppercase tracking-widest text-white/60">
            Comprendre • Progresser • Réussir
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section id="avantages" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
            Ce que tu obtiens
          </h2>
          <p className="mx-auto max-w-2xl text-navy/60">
            Un accompagnement complet pour comprendre, progresser et réussir
            tout au long de ton cursus.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {avantages.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-navy/10 bg-white p-6 transition-all hover:border-royal/40 hover:shadow-lg"
            >
              <div className="mb-4 text-3xl">{item.icon}</div>
              <h3 className="mb-2 font-bold text-navy">{item.title}</h3>
              <p className="text-sm leading-relaxed text-navy/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tarif */}
      <section id="tarif" className="bg-navy py-20">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Un tarif simple et accessible
          </h2>
          <p className="mb-10 text-white/70">
            Un abonnement mensuel pour un accompagnement régulier.
          </p>
          <div className="inline-block rounded-2xl border border-gold/30 bg-white/5 p-10 backdrop-blur">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold">
              Abonnement mensuel
            </div>
            <div className="mb-1 text-6xl font-bold">2 000</div>
            <div className="mb-6 text-white/70">FCFA / mois</div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-3 font-bold text-navy transition-colors hover:bg-gold-light"
            >
              S'inscrire
            </a>
          </div>
          <p className="mt-8 text-sm text-white/50">
            Paiement Mobile Money (T-Money / Flooz). Validation manuelle après
            preuve.
          </p>
        </div>
      </section>

      {/* Établissements */}
      <section id="etablissements" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-navy md:text-4xl">
            Ouvert à plusieurs établissements
          </h2>
          <p className="mx-auto max-w-2xl text-navy/60">
            SchoolMɔzɔti est conçu en priorité pour l'IAI-Togo, mais accueille
            aussi les étudiants d'autres établissements.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {["IAI-Togo", "IPNET", "UCAO", "Autres établissements"].map(
            (etab) => (
              <span
                key={etab}
                className="rounded-full border border-navy/10 bg-white px-6 py-3 font-semibold text-navy shadow-sm"
              >
                {etab}
              </span>
            ),
          )}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-linear-to-br from-royal to-navy py-16">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ensemble, on va plus loin !
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/80">
            Rejoins le groupe WhatsApp pour suivre les annonces, les horaires et
            les modalités d'inscription.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-4 font-bold text-navy transition-colors hover:bg-gold-light"
          >
            Rejoindre le groupe WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy/10 bg-cream py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-navy/60">
          © {new Date().getFullYear()} SchoolMɔzɔti — TD Maths · IAI & autres
          établissements
        </div>
      </footer>
    </main>
  );
}