import Layout from "@/components/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { organizationProfile } from "@/data/organization";

export default function GovernanceTeam() {
  const title = "Governance & Team";
  const description =
    "Meet the governance structure and leadership team at Reach Afrika, driving transparency, accountability, and impact.";

  return (
    <Layout>
      <SEOHead title={title} description={description} />
      <main className="container mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">{description}</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Leadership</h2>
          <div className="prose dark:prose-invert">
            <p>
              Reach Afrika is led by a dedicated executive team under the
              leadership of
              <strong> Robert Kassim Koroma (Founder & CEO)</strong>, supported
              by program coordinators, volunteers, and community stakeholders.
            </p>
          </div>
        </section>

        <section className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold">Core Values</h2>
          <ul className="list-disc pl-6">
            {organizationProfile.values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold">Policies</h2>
          <ul className="list-disc pl-6">
            {organizationProfile.policies.map((p) => (
              <li key={p.name}>
                <strong>{p.name}:</strong> {p.summary}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}
