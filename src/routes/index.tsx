import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import portraitAsset from "@/assets/tarini_hero_portrait.webp.asset.json";
import talkAsset from "@/assets/tarini_talk.jpg.asset.json";

const portraitImg = portraitAsset.url;
const brakeImg = "/hydraulic_disc_brake.png";
const conveyorImg = "/automated_conveyor.png";
const trinetraImg = "/trinetra_hud.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tarini Prasad Pati — Mechanical Engineer & Web Developer" },
      { name: "description", content: "Selected work, services and contact for Tarini Prasad Pati, mechanical engineering student and web developer from Odisha, India." },
      { property: "og:title", content: "Tarini Prasad Pati — Mechanical Engineer & Web Developer" },
      { property: "og:description", content: "Selected work, services and contact for Tarini Prasad Pati." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects: { title: string; cat: string; tag: string; img: string; desc: string; link?: string }[] = [
  { title: "TRINETRA-TACTICAL", cat: "mech", tag: "Defense mechatronics", img: trinetraImg, desc: "Passive border surveillance proof-of-concept under ₹2,500 — ESP32 mesh nodes, piezo sensors & Flutter AR." },
  { title: "Hydraulic Disc Brake & FEA", cat: "mech", tag: "Automotive CAD", img: brakeImg, desc: "SolidWorks model and ANSYS thermal-stress analysis under high-speed braking." },
  { title: "Automated Conveyor System", cat: "mech", tag: "Mechatronics", img: conveyorImg, desc: "Belt conveyor with pneumatic pick-and-place, motor torque sizing and circuit design." },
  { title: "Life RPG", cat: "code", tag: "★ Best · Live", img: "/life_rpg.jpg", link: "https://life-rpg-seven-nu.vercel.app", desc: "Gamified habit tracker that turns daily goals into an RPG with XP and levels." },
  { title: "Kids Learning", cat: "code", tag: "★ Best · Live", img: "https://image.thum.io/get/width/1200/crop/900/https://kids-learning-red.vercel.app", link: "https://kids-learning-red.vercel.app", desc: "Colourful, playful learning app that helps young children learn by doing." },
  { title: "Unique Chat", cat: "code", tag: "Web app", img: "https://tarini-profile.web.app/images/proj_unique_chat.jpg", desc: "Dual-panel real-time chat UI with AI prompt bar and custom dark theme." },
  { title: "Spotify Web Clone", cat: "code", tag: "Clone", img: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=1000&q=80", desc: "Responsive music player with playback bar, playlists and visualizer layout." },
  { title: "Smart To-Do List", cat: "code", tag: "Productivity", img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1000&q=80", desc: "Task manager with categories, priority tags and auto-save." },
];
const GH = "https://github.com/tariniprasadpati67/";
const services = [
  ["01", "Mechanical Design", "3D CAD in SolidWorks & AutoCAD, FEA, kinematics and thermal analysis."],
  ["02", "Mechatronics", "ESP32 sensor networks and automation prototypes on tight budgets."],
  ["03", "Web Development", "Fast, mobile-first sites with HTML, CSS, JavaScript and modern UI."],
  ["04", "Design & Media", "Visual assets in Canva and video editing in CapCut."],
];
const skills = ["SolidWorks", "ANSYS", "AutoCAD", "ESP32", "HTML5", "CSS3", "JavaScript", "Python", "Canva", "CapCut"];
const crosses = [[25, 33], [50, 33], [75, 33], [25, 66], [50, 66], [75, 66]];

function Index() {
  const [tab, setTab] = useState<"all" | "mech" | "code">("all");
  return (
    <main className="min-h-screen">
      <section className="hero-orange relative flex min-h-screen flex-col overflow-hidden px-6 py-6 text-primary-foreground md:px-10">
        <nav className="flex items-center justify-between font-mono text-sm">
          <span className="font-display text-lg font-bold">TPP®</span>
          <div className="hidden gap-8 md:flex">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#work" className="hover:opacity-70">Work</a>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
          <a href="#contact" className="rounded-full bg-secondary px-5 py-2 text-secondary-foreground transition hover:scale-105">Let's talk</a>
        </nav>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {crosses.map(([x, y]) => (
            <span key={`${x}-${y}`} className="absolute font-mono text-xs text-primary-foreground/40" style={{ left: `${x}%`, top: `${y}%` }}>+</span>
          ))}
        </div>
        <span aria-hidden className="pointer-events-none absolute top-[20%] left-[6%] font-display text-[20vw] leading-none font-extrabold tracking-tighter text-hero-name/45 select-none md:text-[14vw]">TARINI</span>
        <div className="pointer-events-none absolute right-[-6%] bottom-0 w-[64vw] max-w-[300px] md:right-2 md:w-[46vw] md:max-w-[520px] lg:right-8">
          <img src={portraitImg} alt="Tarini Prasad Pati" className="w-full" />
        </div>
        <div className="absolute top-[54%] right-4 hidden w-72 items-center gap-3 rounded-xl bg-ink p-3 text-secondary lg:flex lg:right-10">
          <img src={portraitImg} alt="" className="h-10 w-10 rounded-md object-cover object-[50%_25%]" />
          <div className="min-w-0">
            <div className="font-mono text-[10px] opacity-60">Let's talk</div>
            <div className="truncate text-sm font-bold">Tarini Prasad Pati</div>
            <div className="truncate font-mono text-[10px] opacity-70">Mechanical Engineer</div>
          </div>
          <a href="mailto:t.tarini2009@gmail.com" aria-label="Email Tarini" className="ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-md bg-secondary text-sm text-secondary-foreground">↗</a>
        </div>
        <div className="relative z-10 mt-auto pb-6">
          <p className="animate-rise mb-6 max-w-[15rem] font-mono text-sm opacity-90 md:max-w-sm">
            ● Open for opportunities — Mechanical engineering diploma student & web developer from Jajpur, Odisha.
          </p>
          <h1 className="animate-rise text-[17vw] leading-[0.82] font-extrabold tracking-tighter md:text-[13vw]" style={{ animationDelay: "0.15s" }}>
            Tarini<br />Prasad Pati
          </h1>
        </div>
      </section>

      <div className="overflow-hidden border-y bg-accent py-5 text-accent-foreground">
        <div className="animate-marquee flex w-max gap-10 text-3xl font-bold whitespace-nowrap">
          {[...skills, ...skills].map((s, i) => <span key={i}>{s} ✦</span>)}
        </div>
      </div>

      <section id="about" className="px-6 py-28 md:px-10">
        <div className="mb-16 flex items-center gap-4 font-mono text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" /> About me <span className="h-px flex-1 bg-border" />
        </div>
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl">
              Engineer by training,<br /><span className="text-primary">builder</span> by passion.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I blend the analytical discipline of mechanical engineering with the creativity of modern web development — from CAD models and sensor networks to fast, responsive websites that work beautifully on every device.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-4">
              {[["5+", "Web projects"], ["5+", "Mech projects"], ["6+", "Technologies"], ["100%", "Drive"]].map(([n, l]) => (
                <div key={l} className="bg-background p-6">
                  <div className="text-4xl font-extrabold text-primary">{n}</div>
                  <div className="mt-1 font-mono text-xs text-muted-foreground uppercase">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <figure className="mx-auto w-[72%] overflow-hidden rounded-lg border bg-card">
              <img src={talkAsset.url} alt="Tarini Prasad Pati speaking at a podium in a seminar hall" loading="lazy" className="w-full" />
            </figure>
            {[["Present", "Diploma in Mechanical Engineering", "Engineering mechanics, structural design and strong logical foundations."], ["Ongoing", "Frontend & Full-Stack Development", "HTML5, responsive CSS Grid/Flexbox, JavaScript ES6 and project architecture."], ["Core", "Programming & Logic", "Algorithm design, Python fundamentals and interactive interfaces."]].map(([y, t, d]) => (
              <div key={t} className="group rounded-lg border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary">
                <span className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground transition group-hover:bg-primary group-hover:text-primary-foreground">{y}</span>
                <h3 className="mt-4 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-lg bg-secondary p-6 text-secondary-foreground">
              <div><div className="font-mono text-xs opacity-60">Based in</div><div className="text-lg font-bold">Jajpur, Odisha</div></div>
              <span className="rounded-full bg-primary px-3 py-1 font-mono text-xs text-primary-foreground">● Open to work</span>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-6 pb-28 md:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 font-mono text-sm text-muted-foreground">● Selected work</p>
            <h2 className="text-5xl font-extrabold tracking-tight md:text-7xl">Projects</h2>
          </div>
          <div className="flex rounded-full border bg-card p-1 font-mono text-sm">
            {([["all", "All projects (8)"], ["mech", "Mechanical"], ["code", "webprojects"]] as const).map(([k, l]) => (
              <button key={k} onClick={() => setTab(k)} className={`rounded-full px-5 py-2 transition ${tab === k ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {l} <span className="opacity-60">({projects.filter((p) => p.cat === k).length})</span>
              </button>
            ))}
          </div>
        </div>
        <div key={tab} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.filter((p) => tab === "all" || p.cat === tab).map((p, i) => (
            <article key={p.title} className="animate-rise group overflow-hidden rounded-lg border bg-card transition duration-300 hover:-translate-y-1 hover:border-primary" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 rounded-full bg-background/80 px-3 py-1 font-mono text-xs backdrop-blur">{p.tag}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  {p.link ? <a href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`} className="text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1">↗</a> : <span className="text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-block font-mono text-xs text-primary hover:underline">Live demo ↗</a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="bg-secondary px-6 py-24 text-secondary-foreground md:px-10">
        <h2 className="mb-12 text-5xl font-extrabold tracking-tight md:text-7xl">What I do</h2>
        {services.map(([n, t, d]) => (
          <div key={n} className="group grid grid-cols-[3rem_1fr] gap-4 border-t border-secondary-foreground/15 py-8 transition hover:pl-4 md:grid-cols-[6rem_1fr_1fr]">
            <span className="font-mono text-sm">{n}</span>
            <h3 className="text-3xl font-bold transition group-hover:text-primary md:text-4xl">{t}</h3>
            <p className="col-start-2 opacity-70 md:col-start-3">{d}</p>
          </div>
        ))}
      </section>

      <section id="contact" className="hero-grid px-6 py-28 text-primary-foreground md:px-10">
        <p className="font-mono text-sm">(Contact)</p>
        <h2 className="mt-4 text-[14vw] leading-[0.85] font-extrabold tracking-tighter md:text-[10vw]">Let's work<br />together</h2>
        <a href="mailto:t.tarini2009@gmail.com" className="mt-10 inline-block rounded-full bg-secondary px-8 py-4 text-lg font-bold text-secondary-foreground transition hover:scale-105">t.tarini2009@gmail.com →</a>
        <div className="mt-20 flex flex-wrap justify-between gap-4 border-t border-primary-foreground/30 pt-6 font-mono text-sm">
          <span>© 2026 Tarini Prasad Pati</span>
          <div className="flex gap-6"><a href={GH} target="_blank" rel="noreferrer">GitHub</a></div>
        </div>
      </section>
    </main>
  );
}
