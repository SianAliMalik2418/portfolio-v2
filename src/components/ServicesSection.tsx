"use client";

const services = [
  "SaaS MVP development",
  "Admin dashboards and internal tools",
  "API integrations and reporting workflows",
  "Authentication and payment flows",
  "Landing pages connected to real backends",
  "Deployment and production fixes",
];

export default function ServicesSection() {
  return (
    <div className="space-y-5 py-7">
      <div>
        <h2 className="text-base sm:text-xl opacity-90 font-medium font-[family-name:var(--font-instrument-serif)]">
          I can help with
        </h2>
        <p className="mt-2 text-sm sm:text-base text-black/55 dark:text-white/50">
          Practical product work for founders, small teams, and businesses that
          need reliable web software shipped.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {services.map((service) => (
          <div
            key={service}
            className="rounded-lg border border-black/10 bg-black/[0.02] px-3.5 py-3 text-sm text-black/75 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/75"
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
}
