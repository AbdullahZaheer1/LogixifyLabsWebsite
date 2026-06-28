import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  ArrowRight,
  Award,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Headphones,
  Layers,
  Lock,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
  Mail,
  MapPin,
  Check,
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import solutionAi from "@/assets/solution-ai.jpg";
import solutionConnect from "@/assets/solution-connect.jpg";
import solutionMigration from "@/assets/solution-migration.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LogixifyLabs — Cloud & AI Solutions | AWS Advanced Tier Partner" },
      {
        name: "description",
        content:
          "Take your business beyond limits with LogixifyLabs — AWS Advanced Tier Services Partner delivering cloud migration, generative AI, DevOps, and data analytics.",
      },
      { property: "og:title", content: "LogixifyLabs — Cloud & AI Solutions" },
      {
        property: "og:description",
        content:
          "AWS Advanced Tier Partner. 200+ clients, 100+ projects, 20+ AWS certifications.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <FeaturedSolutions />
        <Services />
        <Certifications />
        <Portfolio />
        <Stats />
        <Testimonials />
        <Contact />
        <Blog />
        <Offices />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------- HERO ---------------------- */
function Hero() {
  return (
    <section id="home" className="relative isolate pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px] animate-pulse-glow" />
        <div className="absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at top, black 30%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <Sparkles size={14} className="text-primary" />
            AWS Advanced Tier Services Partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Let's Take Your{" "}
            <span className="text-gradient-lime">Business Beyond</span>
            <br className="hidden sm:block" /> Limits with{" "}
            <span className="text-gradient-lime">Cloud & AI</span> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            We architect, migrate, and modernize businesses on AWS — combining
            generative AI, DevOps automation, and data engineering to unlock
            scalable, secure, and intelligent platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 glow-lime"
            >
              Get Started
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            { icon: Users, label: "Happy Clients", value: "200+" },
            { icon: Award, label: "AWS Advanced Tier Partner", value: "Tier 1" },
            { icon: Rocket, label: "Projects Delivered", value: "100+" },
          ].map((s, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <s.icon size={22} />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------- MARQUEE ---------------------- */
function Marquee() {
  const logos = [
    "AWS", "Microsoft", "Shopify", "Stripe", "Slack", "Atlassian",
    "Zoom", "HubSpot", "GitHub", "Datadog",
  ];
  const row = [...logos, ...logos];
  return (
    <section className="border-y border-border bg-surface/40 py-10">
      <div className="mx-auto mb-6 max-w-7xl px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by industry leaders worldwide
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max gap-16 animate-marquee">
          {row.map((l, i) => (
            <span
              key={i}
              className="font-display text-2xl font-semibold text-muted-foreground/60 transition-colors hover:text-primary"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- ABOUT ---------------------- */
function About() {
  const features = [
    "AWS-certified architects & engineers",
    "24/7 global support coverage",
    "Security-first delivery methodology",
    "Proven across 12+ industries",
  ];
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10">
              <div className="flex items-center gap-3 text-primary">
                <Award size={28} />
                <span className="font-display text-xl font-semibold">AWS</span>
              </div>
              <div className="mt-8">
                <div className="font-display text-3xl font-bold leading-tight">
                  Advanced Tier
                  <br /> Services
                </div>
                <div className="mt-2 text-sm text-muted-foreground">Partner</div>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-6">
                <div>
                  <div className="font-display text-3xl font-bold text-primary">
                    <Counter to={20} suffix="+" />
                  </div>
                  <div className="text-xs text-muted-foreground">AWS Certifications</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-primary">
                    <Counter to={100} suffix="+" />
                  </div>
                  <div className="text-xs text-muted-foreground">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Get to know us better
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Cloud consulting partners who actually build with you.
          </h2>
          <p className="mt-5 text-muted-foreground">
            LogixifyLabs is an AWS Advanced Tier Services Partner helping startups
            and enterprises design resilient cloud architectures, ship faster
            with DevOps, and turn raw data into intelligent products powered
            by generative AI.
          </p>
          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check size={14} />
                </span>
                <span className="text-foreground">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-lime transition-transform hover:scale-105"
          >
            Talk to an Architect <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------- FEATURED SOLUTIONS ---------------------- */
function FeaturedSolutions() {
  const items = [
    {
      title: "Amazon Connect Solutions",
      desc: "Modern omnichannel contact centers that scale on demand and integrate seamlessly with your CRM and AI workflows.",
      img: solutionConnect,
      tag: "Customer Experience",
    },
    {
      title: "Generative AI",
      desc: "Bring large language models into your products with secure RAG pipelines, fine-tuning, and enterprise guardrails.",
      img: solutionAi,
      tag: "AI / ML",
    },
    {
      title: "Cloud Migration FastTrack",
      desc: "Lift, shift, and refactor legacy workloads onto AWS with zero-downtime cutovers and cost-optimized landing zones.",
      img: solutionMigration,
      tag: "Migration",
    },
  ];
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Featured Solutions
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Popular Services & Solutions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Battle-tested accelerators that move from blueprint to production
            in weeks, not quarters.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-2 hover:border-primary/40">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
                    {it.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Learn more
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- SERVICES ---------------------- */
function Services() {
  const services = [
    { icon: Cloud, title: "AWS Resell", desc: "Optimized AWS billing, EDP discounts, and consolidated invoicing." },
    { icon: GitBranch, title: "AWS DevOps", desc: "CI/CD pipelines, IaC and platform engineering on AWS." },
    { icon: Server, title: "Cloud Management", desc: "24/7 monitoring, FinOps, and proactive incident response." },
    { icon: Layers, title: "Cloud Migration", desc: "Re-host, re-platform, and refactor with zero downtime." },
    { icon: Cpu, title: "Generative AI", desc: "Custom LLM apps, RAG, and AI agents tailored to your data." },
    { icon: ShieldCheck, title: "Cloud Security", desc: "Zero-trust, IAM, GuardDuty, and compliance automation." },
    { icon: Database, title: "Data Analytics", desc: "Lakehouses, real-time pipelines, and BI on Redshift & Glue." },
    { icon: Layers, title: "Full Stack Development", desc: "Modern web, mobile and serverless products end-to-end." },
  ];

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Our Services
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Transforming Visions into Digital Reality
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete cloud-native toolbox — from infrastructure to AI.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 blur-3xl transition-all group-hover:bg-primary/20" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                  <s.icon size={22} />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- CERTIFICATIONS ---------------------- */
function Certifications() {
  const badges = [
    "AWS Certified Cloud Practitioner",
    "Solutions Architect — Associate",
    "Solutions Architect — Professional",
    "Developer — Associate",
    "SysOps Administrator",
    "DevOps Engineer — Professional",
    "Security — Specialty",
    "Data Analytics — Specialty",
    "Machine Learning — Specialty",
  ];
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Proud to be
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-gradient-lime">AWS Advanced Tier</span>
            <br /> Service Partner
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3">
          {badges.map((b, i) => (
            <Reveal key={b} delay={(i % 3) * 0.05}>
              <div className="group relative flex h-44 flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Award size={26} />
                </div>
                <div className="relative mt-4 text-sm font-semibold leading-snug">{b}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- PORTFOLIO ---------------------- */
function Portfolio() {
  const projects = [
    {
      title: "Generative AI Platform on AWS",
      desc: "Built a secure enterprise RAG platform serving 50k+ employees with Bedrock, OpenSearch and Lambda.",
      img: portfolio1,
      tags: ["Bedrock", "RAG", "Lambda"],
    },
    {
      title: "FinTech Mobile Analytics",
      desc: "Real-time transaction analytics and fraud detection for a leading neobank built on AWS serverless.",
      img: portfolio2,
      tags: ["Mobile", "Kinesis", "DynamoDB"],
    },
  ];
  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Our work
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Amazing Portfolio
          </h2>
          <p className="mt-4 text-muted-foreground">
            A snapshot of products and platforms we've shipped with our clients.
          </p>
        </Reveal>

        <div className="mt-14">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop
            className="!pb-12"
          >
            {projects.map((p) => (
              <SwiperSlide key={p.title}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                    <div className="mt-6 flex gap-3">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-lime"
                      >
                        Case Study
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold"
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style>{`
        .swiper-pagination-bullet { background: rgba(255,255,255,.3); opacity:1; }
        .swiper-pagination-bullet-active { background: var(--lime); width: 24px; border-radius: 9999px; }
      `}</style>
    </section>
  );
}

/* ---------------------- STATS ---------------------- */
function Stats() {
  const big = [
    { value: 94, suffix: "%", label: "Cost Savings" },
    { value: 940, suffix: "x", label: "Faster Processing" },
    { value: 200, suffix: "k", prefix: "$", label: "Revenue Saved" },
  ];
  const small = [
    { value: 100, suffix: "+", label: "Happy Clients" },
    { value: 200, suffix: "+", label: "Projects Completed" },
    { value: 20, suffix: "+", label: "AWS Certifications" },
  ];
  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-3xl border border-border bg-card p-10 lg:p-16">
          <div className="grid gap-10 sm:grid-cols-3">
            {big.map((s) => (
              <Reveal key={s.label} className="text-center">
                <div className="font-display text-5xl font-bold text-primary sm:text-6xl">
                  {s.prefix}
                  <Counter to={s.value} />
                  {s.suffix}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <Reveal className="text-center">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">LogixifyLabs Stats</h3>
            </Reveal>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {small.map((s) => (
                <Reveal key={s.label} className="text-center">
                  <div className="font-display text-4xl font-bold">
                    <Counter to={s.value} />
                    {s.suffix}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- TESTIMONIALS ---------------------- */
function Testimonials() {
  const items = [
    {
      quote:
        "LogixifyLabs took our legacy stack to a fully serverless AWS architecture in 12 weeks. We cut infra costs by 60% and ship features 3x faster.",
      name: "Ayesha Khan",
      role: "CTO, FinEdge",
      avatar: avatar2,
    },
    {
      quote:
        "Their generative AI team built a production-grade RAG assistant on Bedrock that our entire support org now relies on daily.",
      name: "Omar Siddiqui",
      role: "VP Engineering, Helix",
      avatar: avatar1,
    },
    {
      quote:
        "True AWS partners — proactive, security-first, and deeply technical. They feel like an extension of our own platform team.",
      name: "Hassan Al-Mansouri",
      role: "Head of Cloud, Nimbus",
      avatar: avatar3,
    },
  ];
  return (
    <section className="relative py-24 lg:py-32 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            What Clients Are Saying
          </h2>
        </Reveal>

        <div className="mt-14">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            className="!pb-12"
          >
            {items.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="h-full rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-xl">
                  <div className="text-primary text-3xl leading-none">"</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- CONTACT ---------------------- */
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs: Record<string, string> = {};
    if (!data.get("name")) errs.name = "Required";
    if (!String(data.get("email") ?? "").includes("@")) errs.email = "Valid email required";
    if (!data.get("message")) errs.message = "Required";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Contact
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Send Us a Message
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tell us about your project. We typically reply within one business day.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="mt-12 grid gap-5 rounded-3xl border border-border bg-card p-8 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
            </div>
            <Field label="Company" name="company" />
            <Field label="Subject" name="subject" />
            <Field label="Message" name="message" textarea error={errors.message} />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-lime transition-transform hover:scale-[1.02]"
            >
              Send Message <ArrowRight size={16} />
            </button>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-primary"
              >
                ✓ Thanks! We received your message and will be in touch soon.
              </motion.p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const cls =
    "peer w-full rounded-xl border border-border bg-background/60 px-4 pt-6 pb-2 text-sm text-foreground placeholder-transparent focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea name={name} rows={4} placeholder={label} className={cls} />
      ) : (
        <input name={name} type={type} placeholder={label} className={cls} />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
        {label}
      </span>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

/* ---------------------- BLOG ---------------------- */
function Blog() {
  const posts = [
    {
      title: "Building a Production-Ready RAG Pipeline on AWS Bedrock",
      desc: "A blueprint for enterprise-grade retrieval-augmented generation with Bedrock, OpenSearch and IAM.",
      img: blog1,
      tag: "Generative AI",
      date: "Jun 12, 2026",
    },
    {
      title: "Cutting Your AWS Bill by 40% Without Sacrificing Performance",
      desc: "Real-world FinOps tactics our team applies for clients running production workloads at scale.",
      img: blog2,
      tag: "FinOps",
      date: "May 28, 2026",
    },
    {
      title: "The DevOps Playbook for Multi-Account AWS Organizations",
      desc: "Designing CI/CD, IaC, and guardrails that scale across dozens of accounts safely.",
      img: blog3,
      tag: "DevOps",
      date: "May 10, 2026",
    },
  ];
  return (
    <section id="blog" className="relative py-24 lg:py-32 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Insights
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            From the LogixifyLabs Blog
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-primary/15 px-2.5 py-1 font-medium text-primary">
                      {p.tag}
                    </span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Read More <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- OFFICES ---------------------- */
function Offices() {
  const offices = [
    { city: "Dubai", country: "United Arab Emirates" },
    { city: "London", country: "United Kingdom" },
    { city: "New York", country: "United States" },
    { city: "Sydney", country: "Australia" },
    { city: "Karachi", country: "Pakistan" },
  ];
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Global Presence
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Where Cloud Consulting Meets Business Growth
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {offices.map((o, i) => (
            <Reveal key={o.city} delay={i * 0.05}>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-border bg-card p-7 text-center transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                  <MapPin size={22} />
                </div>
                <div className="mt-4 font-display text-lg font-semibold">{o.city}</div>
                <div className="text-xs text-muted-foreground">{o.country}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- FOOTER ---------------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display font-bold">
                G
              </span>
              <span className="font-display text-lg font-semibold">LogixifyLabs</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              AWS Advanced Tier Services Partner delivering cloud, AI, and data
              engineering for modern enterprises.
            </p>
            <div className="mt-5 flex gap-3">
              {["in", "X", "f", "ig"].map((label, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`Social ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" items={["Home", "About", "Services", "Portfolio", "Blog", "Contact"]} />
          <FooterCol title="Services" items={["AWS Resell", "DevOps", "Cloud Migration", "Generative AI", "Data Analytics", "Security"]} />

          <div>
            <div className="font-display font-semibold">Newsletter</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Cloud & AI insights, once a month.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-full border border-border bg-background/60"
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm focus:outline-none"
              />
              <button className="bg-primary px-4 text-sm font-semibold text-primary-foreground">
                Join
              </button>
            </form>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary" /> hello@LogixifyLabs.io
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary" /> +971 4 000 0000
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} LogixifyLabs. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-display font-semibold">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="transition-colors hover:text-foreground">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Silence unused-import warnings for icons reserved for future expansion.
void Globe; void Zap; void Headphones; void Lock;
