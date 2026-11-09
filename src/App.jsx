import React, { useState } from "react";

import {
  House,
  Menu,
  X,
  ShieldCheck,
  UsersRound,
  Sparkles,
  FileText,
  Coins,
  Bell,
  Folder,
  CalendarDays,
  HeartPulse,
  ShoppingBasket,
  GraduationCap,
  LockKeyhole,
  MapPin,
  Cpu,
  CheckCircle2,
  PlayCircle,
  ArrowRight,
  ChevronDown,
  ClipboardCheck,
  Calculator,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";


/* =========================================================
   IMAGE IMPORTS
========================================================= */

import family from "./assets/family.png";
import problem from "./assets/problem.png";
import dashboard from "./assets/dashboard.png";
import reminder from "./assets/reminder.png";
import utilities from "./assets/utilities.png";

/*
  NEW IMAGE
  This will be used in the CENTER of the circular
  Documents / Insurance / Finance feature section.
*/
import documentsImage from "./assets/Documents.jpeg";

import householdIcon from "./assets/Household & Bills.png";
import healthIcon from "./assets/health.png";
import documentsIcon from "./assets/File.png";
import educationIcon from "./assets/Education.png";
import propertyIcon from "./assets/Housing.png";
import insuranceIcon from "./assets/Insurance.png";
import todoIcon from "./assets/To do Lists.png";
import financeIcon from "./assets/Vector.png";


/* =========================================================
   FEATURE DATA
========================================================= */

const features = [
  {
    name: "Documents",
    desc: "IDs, certificates and records",
    image: documentsIcon,
    color: "#2882C6",
    rgb: "40, 130, 198"
  },
  {
    name: "Insurance",
    desc: "Policies, renewals and claims",
    image: insuranceIcon,
    color: "#13A699",
    rgb: "19, 166, 153"
  },
  {
    name: "Finance",
    desc: "Loans, EMIs & Investments",
    image: financeIcon,
    color: "#283DC6",
    rgb: "40, 61, 198"
  },
  {
    name: "Property",
    desc: "Home, Vehicles & Valuables",
    image: propertyIcon,
    color: "#9E28C6",
    rgb: "158, 40, 198"
  },
  {
    name: "Health",
    desc: "Records & Prescriptions",
    image: healthIcon,
    color: "#C62882",
    rgb: "198, 40, 130"
  },
  {
    name: "Household",
    desc: "Bills & Service Contracts",
    image: householdIcon,
    color: "#B89C10",
    rgb: "184, 156, 16"
  },
  {
    name: "Education",
    desc: "School & Learning records",
    image: educationIcon,
    color: "#35BC16",
    rgb: "53, 188, 22"
  },
  {
    name: "To do Lists",
    desc: "Shared to-do's and responsibilities",
    image: todoIcon,
    color: "#6528C6",
    rgb: "101, 40, 198"
  }
];


/* =========================================================
   SOLUTION CARDS
========================================================= */

const benefits = [
  {
    title: "Organize",
    desc: "Keep all family information in one place.",
    Icon: Folder,
    cls: "lavender"
  },
  {
    title: "Get Insights",
    desc: "Let AI read, understand and summarize your documents.",
    Icon: Sparkles,
    cls: "lime"
  },
  {
    title: "Stay on Track",
    desc: "Never miss renewals, payments or important dates.",
    Icon: CalendarDays,
    cls: "blue"
  },
  {
    title: "Be Prepared",
    desc: "Access what you need, when your family needs it most.",
    Icon: ShieldCheck,
    cls: "yellow"
  }
];


/* =========================================================
   HOW IT WORKS
========================================================= */

const steps = [
  {
    title: "Create Your Family Account",
    desc: "Set up your family space securely.",
    Icon: UsersRound
  },
  {
    title: "Add Your Documents",
    desc: "Upload or capture documents easily.",
    Icon: FileText
  },
  {
    title: "AI Organizes & Understands",
    desc: "We read, extract and organize key details.",
    Icon: Sparkles
  },
  {
    title: "Stay Notified & In Control",
    desc: "Get reminders, insights and quick actions.",
    Icon: Bell
  }
];


/* =========================================================
   FAQ
========================================================= */

const questions = [
  [
    "What is FamilyKit?",
    "FamilyKit helps families organize important documents, reminders, assets and everyday information in one place."
  ],
  [
    "Is my data safe and private?",
    "FamilyKit is designed with privacy and security in mind."
  ],
  [
    "Where is my data stored?",
    "FamilyKit can use secure cloud infrastructure to store your information."
  ],
  [
    "Do you use my data to train AI models?",
    "Your private family information should remain under your control."
  ]
];


/* =========================================================
   BRAND
========================================================= */

function Brand() {
  return (
    <a href="#home" className="brand">

      <span className="brand-icon">

        <House
          size={23}
          strokeWidth={3}
        />

        <UsersRound
          size={12}
          className="brand-people"
        />

      </span>

      <span>FamilyKit</span>

    </a>
  );
}


/* =========================================================
   HEADER
========================================================= */

function Header() {

  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Features", "#features"],
    ["How it Works", "#how"],
    ["Security", "#security"],
    ["FAQs", "#faqs"]
  ];

  return (
    <header className="header">

      <div className="container nav">

        <Brand />


        {/* DESKTOP NAVIGATION */}

        <nav
          className={
            open
              ? "navlinks open"
              : "navlinks"
          }
        >

          {links.map(([name, href]) => (

            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
            >
              {name}
            </a>

          ))}

        </nav>


        {/* DESKTOP ACTION BUTTONS */}

        <div className="nav-actions">

          <a
            className="outline-btn"
            href="#login"
          >
            Log In
          </a>

          <a
            className="primary-btn small"
            href="#cta"
          >
            Get Early Access
          </a>

        </div>


        {/* MOBILE HEADER */}

        <div className="mobile-header-actions">

          <a
            className="mobile-header-login"
            href="#login"
          >
            Log In
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >

            {open ? <X /> : <Menu />}

          </button>

        </div>

      </div>

    </header>
  );
}


/* =========================================================
   HERO
========================================================= */

function Hero() {

  const floatingItems = [
    [FileText, "Documents"],
    [ShieldCheck, "Insurance"],
    [Coins, "Finances"],
    [House, "Assets"],
    [Bell, "Reminders"]
  ];

  return (
    <section
      className="hero"
      id="home"
    >

      <div className="container hero-grid">


        {/* HERO TEXT */}

        <div className="hero-copy">

          <span className="eyebrow">
            Your Family, Well Organized
          </span>


          <h1>

            The <em>Smart</em> Family

            <br className="desktop-break" />

            {" "}

            Life Management App

          </h1>


          <p>
            Bring your family’s important documents,
            finances, assets, reminders and everyday
            tasks into one secure, easy-to-use space.
          </p>


          <div className="hero-actions">


            {/* DESKTOP BUTTON */}

            <a
              className="primary-btn hero-early-access"
              href="#cta"
            >

              Get Early Access

              <ArrowRight size={17} />

            </a>


            {/* MOBILE GET STARTED */}

            <div className="mobile-auth-buttons">

              <a
                className="mobile-signup-btn"
                href="#signup"
              >

                Get Started


                {/* THIN WHITE CHEVRON */}

                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "27px",
                    fontWeight: "400",
                    lineHeight: "1",
                    display: "inline-flex",
                    alignItems: "center",
                    marginLeft: "14px"
                  }}
                  aria-hidden="true"
                >
                  ›
                </span>

              </a>

            </div>


            {/* VIDEO */}

            <a
              className="video-link"
              href="#how"
            >

              <PlayCircle size={30} />

              Watch 2-minute Overview

            </a>

          </div>


          {/* TRUST ROW */}

          <div className="trust-row">

            <span>
              <ShieldCheck />
              Secure by Design
            </span>

            <span>
              <UsersRound />
              For Every Family
            </span>

            <span>
              <Sparkles />
              AI-Powered
            </span>

          </div>

        </div>


        {/* HERO FAMILY IMAGE
            IMPORTANT:
            THIS STILL USES family.png
        */}

        <div className="hero-art">

          <img
            src={family}
            alt="Family using FamilyKit"
          />


          <div className="floating-list">

            {floatingItems.map(([Icon, title]) => (

              <div key={title}>

                <Icon size={23} />

                <b>{title}</b>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   PROBLEM
========================================================= */

function Problem() {

  return (
    <section className="problem">

      <div className="container problem-grid">

        <img
          src={problem}
          alt="Family managing important tasks"
        />


        <div>

          <span className="section-kicker">
            THE PROBLEM
          </span>

          <h2>
            Too Many Important Things
            <br />
            for a Family to Manage
          </h2>

          <p>
            Documents in different places,
            insurance renewal dates, EMI reminders,
            warranties, assets and so many small
            but important tasks — it’s easy to
            feel overwhelmed.
          </p>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   SOLUTION
========================================================= */

function Solution() {

  return (
    <section className="solution container">


      {/* SOLUTION INTRO */}

      <div className="solution-intro">

        <span className="section-kicker">
          THE SOLUTION
        </span>

        <h2>
          Meet <em>FamilyKit</em>
        </h2>

        <p>
          A single, secure app to organize,
          protect and manage everything that
          matters to your family — with the
          help of AI.
        </p>

      </div>


      {/* FOUR CARDS */}

      <div className="benefits">

        {benefits.map(
          ({
            title,
            desc,
            Icon,
            cls
          }) => (

            <article
              className={`benefit ${cls}`}
              key={title}
            >

              <Icon />

              <h3>
                {title}
              </h3>

              <p>
                {desc}
              </p>

            </article>

          )
        )}

      </div>

    </section>
  );
}


/* =========================================================
   CIRCULAR FAMILY FEATURES
========================================================= */

function Features() {

  return (
    <section
      className="features family-wheel-section"
      id="features"
    >

      <div className="container">


        {/* SECTION TITLE */}

        <h2 className="family-wheel-title">

          Everything Your Family Needs,{" "}

          <em>
            Organised
          </em>

        </h2>


        {/* MAIN CIRCLE AREA */}

        <div className="family-wheel">


          {/* =================================================
              CONNECTING LINES
          ================================================= */}

          <div
            className="wheel-lines"
            aria-hidden="true"
          >

            <span className="wheel-line line-top" />

            <span className="wheel-line line-top-right" />

            <span className="wheel-line line-right" />

            <span className="wheel-line line-bottom-right" />

            <span className="wheel-line line-bottom" />

            <span className="wheel-line line-bottom-left" />

            <span className="wheel-line line-left" />

            <span className="wheel-line line-top-left" />

          </div>


          {/* =================================================
              CENTER IMAGE

              CHANGED HERE:
              OLD:
                  src={family}

              NEW:
                  src={documentsImage}

              This uses:
                  ./assets/Documents.jpeg
          ================================================= */}

          <div className="wheel-center">

            <div
              className="wheel-family-glow"
              aria-hidden="true"
            />

            <img
              src={documentsImage}
              alt="FamilyKit documents"
            />

          </div>


          {/* =================================================
              8 FEATURE CIRCLES
          ================================================= */}

          {features.map((feature, index) => {

            return (

              <article
                key={feature.name}
                className={
                  `feature-circle feature-circle-${index + 1}`
                }
                style={{
                  "--feature-color": feature.color,
                  "--feature-rgb": feature.rgb
                }}
              >

                <img
                  src={feature.image}
                  alt=""
                  className="feature-circle-image"
                  aria-hidden="true"
                />

                <h3>
                  {feature.name}
                </h3>

                <p>
                  {feature.desc}
                </p>

              </article>

            );

          })}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   HOW IT WORKS
========================================================= */

function How() {

  return (
    <section
      className="how"
      id="how"
    >

      <div className="container how-inner">


        <div className="how-intro">

          <h2>
            How <em>FamilyKit</em> Works
          </h2>

          <p>
            Get started in minutes and let AI
            do the heavy lifting.
          </p>

        </div>


        <div className="steps">

          {steps.map(
            ({
              title,
              desc,
              Icon
            }, i) => (

              <React.Fragment key={title}>

                <article className="step">

                  <span className="step-icon">
                    <Icon />
                  </span>


                  <div>

                    <span className="step-number">
                      {i + 1}
                    </span>

                    <h3>
                      {title}
                    </h3>

                    <p>
                      {desc}
                    </p>

                  </div>

                </article>


                {i < steps.length - 1 && (

                  <ArrowRight className="step-arrow" />

                )}

              </React.Fragment>

            )
          )}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard() {

  const points = [
    "Quick access to everything",
    "Upcoming renewals and payments",
    "Family-wide visibility (with your permission)",
    "Works across mobile and web"
  ];


  return (
    <section className="dashboard">

      <div className="container dashboard-grid">


        {/* DASHBOARD IMAGE */}

        <div className="dashboard-image">

          <img
            src={dashboard}
            alt="FamilyKit dashboard"
          />

        </div>


        {/* DASHBOARD CONTENT */}

        <div className="dashboard-copy">

          <span className="section-kicker">
            YOUR FAMILY DASHBOARD
          </span>

          <h2>
            A Clear View of
            <br />
            Your Family Life
          </h2>

          <p>
            A simple, beautiful dashboard that
            brings your documents, reminders
            and family essentials together —
            so you always know what’s next.
          </p>


          <ul className="check-list">

            {points.map((point) => (

              <li key={point}>

                <CheckCircle2 />

                {point}

              </li>

            ))}

          </ul>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   SMART REMINDERS + UTILITIES
========================================================= */

function Extras() {

  const reminderItems = [
    "Insurance renewals",
    "EMIs and bill payments",
    "Warranties and service reminders",
    "Health checkups and vaccinations"
  ];


  const utilityItems = [
    "EMI calculator",
    "Insurance premium calculator",
    "Document checklist",
    "Renewal and expiry tracker"
  ];


  const cards = [
    {
      title: "Smart Reminders",
      subtitle: "Never miss what matters.",
      Icon: Bell,
      iconClass: "gold",
      image: reminder,
      items: reminderItems
    },
    {
      title: "Everyday Utilities",
      subtitle:
        "Useful tools for your family’s day-to-day life.",
      Icon: Calculator,
      iconClass: "green",
      image: utilities,
      items: utilityItems
    }
  ];


  return (
    <section className="extras container">

      {cards.map((card) => (

        <article
          className="extra"
          key={card.title}
        >


          <div className="extra-text">

            <span
              className={`extra-icon ${card.iconClass}`}
            >

              <card.Icon />

            </span>


            <div>

              <h2>
                {card.title}
              </h2>

              <p>
                {card.subtitle}
              </p>


              <ul className="check-list">

                {card.items.map((item) => (

                  <li key={item}>

                    <CheckCircle2 />

                    {item}

                  </li>

                ))}

              </ul>

            </div>

          </div>


          <img
            src={card.image}
            alt={card.title}
          />

        </article>

      ))}

    </section>
  );
}


/* =========================================================
   SECURITY
========================================================= */

function Security() {

  const items = [
    {
      Icon: LockKeyhole,
      title: "AES-256 Encryption",
      desc: "Strong protection for your data."
    },
    {
      Icon: MapPin,
      title: "India Data Residency",
      desc:
        "Your data can be stored in AWS India regions."
    },
    {
      Icon: Cpu,
      title: "Private AI Processing",
      desc:
        "Family information remains private."
    },
    {
      Icon: UsersRound,
      title: "Your Control",
      desc:
        "You decide who can access family information."
    }
  ];


  return (
    <section
      className="security"
      id="security"
    >

      <div className="container security-inner">


        <div className="security-title">

          <ShieldCheck size={48} />

          <h2>
            Your Family’s Data
            <br />
            Stays Private and Secure
          </h2>

        </div>


        <div className="security-items">

          {items.map(
            ({
              Icon,
              title,
              desc
            }) => (

              <article key={title}>

                <Icon />

                <h3>
                  {title}
                </h3>

                <p>
                  {desc}
                </p>

              </article>

            )
          )}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   FAQ
========================================================= */

function FAQ() {

  const [active, setActive] =
    useState(-1);


  return (
    <section
      className="faq container"
      id="faqs"
    >


      <div>

        <h2>
          Frequently
          <br />
          Asked Questions
        </h2>

        <p>
          Have questions? We have answers.
        </p>

      </div>


      <div className="faq-items">

        {questions.map(
          ([question, answer], i) => (

            <article
              className="faq-item"
              key={question}
            >

              <button
                onClick={() =>
                  setActive(
                    active === i
                      ? -1
                      : i
                  )
                }
                aria-expanded={active === i}
              >

                {question}

                <ChevronDown
                  className={
                    active === i
                      ? "rotated"
                      : ""
                  }
                />

              </button>


              {active === i && (

                <p>
                  {answer}
                </p>

              )}

            </article>

          )
        )}

      </div>

    </section>
  );
}


/* =========================================================
   CTA + FOOTER
========================================================= */

function Footer() {

  return (
    <>


      {/* CTA */}

      <section
        className="cta container"
        id="cta"
      >

        <div className="cta-house">

          <House size={62} />

          <HeartPulse size={27} />

        </div>


        <div>

          <h2>
            Be Among the First Families to
            <br />
            Experience <span>FamilyKit</span>
          </h2>

          <p>
            Join our early access program and
            help shape the future of family
            life management.
          </p>

        </div>


        <button className="cta-btn">

          Get Early Access

          <ArrowRight size={17} />

        </button>

      </section>


      {/* FOOTER */}

      <footer className="footer container">


        <div className="footer-brand">

          <Brand />

          <span>
            A Medhaara Innovations Product
          </span>

        </div>


        <div className="footer-links">

          <a href="#home">
            About
          </a>

          <a href="#security">
            Privacy
          </a>

          <a href="#faqs">
            Terms
          </a>

          <a href="#home">
            Contact
          </a>

        </div>


        <div className="social">

          <Youtube />

          <Linkedin />

          <Instagram />

        </div>

      </footer>

    </>
  );
}


/* =========================================================
   MAIN APP
========================================================= */

export default function App() {

  return (
    <>

      <Header />


      <main>

        <Hero />

        <Problem />

        <Solution />

        <Features />

        <How />

        <Dashboard />

        <Extras />

        <Security />

        <FAQ />

        <Footer />

      </main>

    </>
  );
}