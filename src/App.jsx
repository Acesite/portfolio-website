import './index.css'
import me from './assets/me.jpg'
import Particles from './components/particles'

const experience = [
  {
    role: 'Full-Stack Developer (OJT)',
    org: 'CITI WATCH Mobile App',
    note: 'Built frontend and backend features for a mobile app as part of a project team.',
  },
  {
    role: 'LiDAR Annotator',
    org: 'Remotask PH',
    note: 'Spent a year annotating LiDAR data for machine learning and AI projects.',
  },
  {
    role: 'Geotagger',
    org: 'Philippine Statistics Authority',
    note: 'Geotagged locations and structures to support geographic and statistical data.',
  },
]

const skills = [
  { label: 'Frontend', items: 'React, React Native, Vue, Angular, HTML, CSS' },
  { label: 'Backend', items: 'Python, PHP, Express' },
  { label: 'Systems & GIS', items: 'Networking (DHCP, DNS, IP addressing), basic server management, GIS, LiDAR annotation' },
]

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-8 border-b border-black pb-3 text-lg font-medium">{title}</h2>
      {children}
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <a href="#top" className="font-medium">Nicole Menez</a>
          <div className="flex gap-6 text-sm">
            <a href="#experience" className="underline-offset-4 hover:underline">Experience</a>
            <a href="#skills" className="underline-offset-4 hover:underline">Skills</a>
            <a href="#education" className="underline-offset-4 hover:underline">Education</a>
            <a href="#contact" className="underline-offset-4 hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Particles
              particleColors={['#797979']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover
              alphaParticles={false}
              disableRotation={false}
              pixelRatio={1}
            />
          </div>

          <section className="relative mx-auto grid max-w-3xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight">
                Hi, I'm Nicole Martin E. Menez.
              </h1>
              <p className="mt-5 max-w-md text-lg opacity-70">
                Full-stack developer and BSIT graduate in Bacolod City. I build web and mobile apps
                with React and React Native.
              </p>
            </div>

            <img
              src={me}
              alt="Portrait of Nicole Martin E. Menez"
              className="size-56 rounded-full object-cover md:size-64 md:justify-self-end"
            />
          </section>
        </div>

        <Section id="experience" title="Experience">
          <ul className="divide-y divide-black/15">
            {experience.map((e) => (
              <li key={e.role} className="py-6 first:pt-0">
                <p className="text-lg font-medium">{e.role}</p>
                <p className="opacity-50">{e.org}</p>
                <p className="mt-2 max-w-xl opacity-70">{e.note}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="space-y-5">
            {skills.map((s) => (
              <div key={s.label} className="flex flex-col gap-1 sm:flex-row sm:gap-8">
                <dt className="w-32 shrink-0 font-medium">{s.label}</dt>
                <dd className="opacity-70">{s.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" title="Education">
          <div>
            <p className="text-lg font-medium">Bachelor of Science in Information Technology</p>
            <p className="opacity-50">La Consolacion College Bacolod, graduated 2026</p>
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div>
            <p className="text-lg font-medium">Computer Systems Servicing NC II</p>
            <p className="opacity-50">Technical Education and Skills Development Authority (TESDA)</p>
          </div>
        </Section>

        <Section id="contact" title="Get in touch">
          <p className="max-w-md opacity-70">
            I'm open to full-stack and development roles. Send me an email and I'll get back to
            you.
          </p>
          <a
            href="mailto:meneznicole117477@gmail.com"
            className="mt-6 inline-block border border-black bg-black px-5 py-2.5 font-medium text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            Email me
          </a>
        </Section>
      </main>

      <footer className="py-10 text-center text-sm opacity-50">
        © {new Date().getFullYear()} Nicole Martin E. Menez
      </footer>
    </div>
  )
}

export default App