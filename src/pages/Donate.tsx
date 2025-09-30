import Layout from "@/components/Layout";
import { SEOHead } from "@/components/seo/SEOHead";

export default function Donate() {
  const title = "Donate to Reach Afrika";
  const description =
    "Support our mission to empower youth across Sierra Leone through education, leadership, and economic opportunity.";

  return (
    <Layout>
      <SEOHead
        title={title}
        description={description}
        keywords="donate, charity, NGO, Sierra Leone, youth, Reach Afrika, give"
      />
      <main className="container mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">{description}</p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Why Give</h2>
            <ul className="list-disc pl-6">
              <li>
                Fund scholarships and exam fees for underprivileged youth.
              </li>
              <li>Support skills training and entrepreneurship programs.</li>
              <li>
                Help scale women-in-tech initiatives through She Leads Digital.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Ways to Donate</h2>
            <ul className="list-disc pl-6">
              <li>Credit/Debit Card</li>
              <li>Bank Transfer</li>
              <li>Mobile Money (where available)</li>
            </ul>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-4">Make a Donation</h3>
            {/* Placeholder for donation form or external link */}
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white"
            >
              Donate Now
            </a>

            <p className="text-xs text-muted-foreground mt-4">
              Your donation helps Reach Afrika deliver sustainable impact.
              Receipts available upon request.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
