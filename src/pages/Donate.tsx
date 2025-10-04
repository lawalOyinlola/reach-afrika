import { SEOHead } from "@/components/seo/SEOHead";
import Layout from "@/components/Layout";
import Features from "@/components/features-tailark";
import { AnimationTitle } from "@/components/ui/animation-title";

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
      <main className="container mx-auto px-4 py-20 md:py-32">
        <AnimationTitle
          title={{
            preText: "Your gift\n",
            highlight: "Transforms",
            postText: " lives",
          }}
          description="Support our mission to empower youth across Sierra Leone through education, leadership, and economic opportunity."
        />
        <Features />
      </main>
    </Layout>
  );
}
