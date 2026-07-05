import { FAQ } from "@/types/blog";

export const faqs: FAQ[] = [
  {
    id: "shipping-full-stack-products",
    question: "How I Approach Full-Stack Product Delivery",
    answer: `I like owning the full path from product requirements to deployment.

For me that means:
- clarifying the workflow before writing code
- choosing boring, maintainable architecture
- keeping frontend and backend contracts explicit
- deploying early enough to catch integration problems

That approach helped me ship client dashboards, internal tools, authentication flows, payment flows, and reporting systems without treating deployment as an afterthought.`,
  },
  {
    id: "api-integrations",
    question: "What I Have Learned From Third-Party API Integrations",
    answer: `Integrating APIs from platforms like Google, Meta, TikTok, Shopify, Walmart, and Amazon taught me that the hard part is rarely the first successful request.

The real work is handling auth, rate limits, unstable payloads, retries, mapping external data into your own model, and giving users a clear experience when an upstream platform fails.

Good integrations are defensive, observable, and easy to reason about.`,
  },
  {
    id: "clean-maintainable-code",
    question: "Why I Care About Maintainable Code",
    answer: `A product only moves fast for a short time if the codebase is hard to change.

I try to keep code maintainable by:
- naming data and flows clearly
- isolating business logic from UI details
- keeping types close to the contracts they protect
- removing cleverness that does not pay rent

The goal is simple: future changes should feel controlled, not risky.`,
  },
];

export const blogs = faqs;

export const getFAQById = (id: string): FAQ | undefined => {
  return faqs.find((faq) => faq.id === id);
};

export const getBlogById = getFAQById;

