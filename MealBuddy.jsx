import { useState, useEffect, useRef } from "react";

const meals = [
  {
    title: "Berry Oatmeal Bowl",
    image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?q=80&w=1200&auto=format&fit=crop",
    time: "15 min",
    calories: "420 kcal",
    price: "$2.50",
    tag: "Breakfast",
    color: "#a78bfa",
  },
  {
    title: "Chicken Rice Bowl",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
    time: "25 min",
    calories: "580 kcal",
    price: "$4.20",
    tag: "Lunch",
    color: "#34d399",
  },
  {
    title: "Tomato Basil Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
    time: "20 min",
    calories: "490 kcal",
    price: "$3.10",
    tag: "Dinner",
    color: "#f59e0b",
  },
];

const premiumFeatures = [
  { icon: "◈", label: "AI calorie tracking" },
  { icon: "◉", label: "Unlimited meal plans" },
  { icon: "◎", label: "Voice AI generation" },
  { icon: "◐", label: "Family meal planning" },
  { icon: "◑", label: "Advanced nutrition analytics" },
  { icon: "◒", label: "Smart grocery comparison" },
];

export default function MealBuddy() {
  const [activeNav, setActiveNav] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={styles.root}>
      <style>{css}</style>

      {/* NAV */}
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <div style={styles.navLogo}>
          <span style={styles.logoMark}>M</span>
          <span style={styles.logoText}>ealBuddy<span style={styles.logoPlus}>+</span></span>
        </div>

        <div style={styles.navLinks}>
          {["Features", "Meals", "Pricing"].map((item) => (
            <button
              key={item}
              style={{ ...styles.navLink, ...(activeNav === item ? styles.navLinkActive : {}) }}
              onMouseEnter={() => setActiveNav(item)}
              onMouseLeave={() => setActiveNav(null)}
            >
              {item}
            </button>
          ))}
        </div>

        <div style={styles.navActions}>
          <button className="btn-ghost">Login</button>
          <button className="btn-primary">Start Free</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero} ref={heroRef}>
        <div style={styles.heroBg} aria-hidden>
          <div style={styles.orb1} className="float-slow" />
          <div style={styles.orb2} className="float-slow-rev" />
          <div style={styles.grid} />
        </div>

        <div style={styles.heroContent} className="fade-up">
          <div style={styles.badge}>
            <span style={styles.badgeDot} />
            AI-Powered · Budget-First · Always Delicious
          </div>

          <h1 style={styles.heroHeadline}>
            Eat Like a
            <br />
            <span style={styles.heroAccent} className="shimmer-text">Chef.</span>
            <br />
            Spend Like a
            <br />
            <span style={styles.heroAccentAlt}>Student.</span>
          </h1>

          <p style={styles.heroSub}>
            Personalized AI meal plans built around your budget, goals,
            allergies, and local grocery prices. No fluff — just food.
          </p>

          <div style={styles.heroPills}>
            {["💰 Save Money", "🌍 Global Recipes", "⚡ Instant AI"].map((p) => (
              <span key={p} style={styles.pill}>{p}</span>
            ))}
          </div>

          <div style={styles.heroCta}>
            <button className="btn-hero">Generate My Plan →</button>
            <span style={styles.ctaNote}>Free · No credit card</span>
          </div>
        </div>

        <div style={styles.heroVisual} className="fade-up-delay">
          <div style={styles.heroImageWrap} className="float-slow">
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop"
              alt="Healthy meal"
              style={styles.heroImage}
            />
            <div style={styles.heroImageGlow} />
            <div style={styles.statsCard} className="fade-up-delay2">
              <div style={styles.statItem}>
                <span style={styles.statNum}>2.4k</span>
                <span style={styles.statLabel}>Recipes</span>
              </div>
              <div style={styles.statDivider} />
              <div style={styles.statItem}>
                <span style={styles.statNum}>$38</span>
                <span style={styles.statLabel}>Avg/week</span>
              </div>
              <div style={styles.statDivider} />
              <div style={styles.statItem}>
                <span style={styles.statNum}>94%</span>
                <span style={styles.statLabel}>Satisfied</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEAL CARDS */}
      <section style={styles.mealsSection}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionEyebrow}>Your AI Plan</div>
          <h2 style={styles.sectionTitle}>
            This Week's <span style={styles.titleAccent}>Lineup</span>
          </h2>
          <p style={styles.sectionSub}>Generated fresh. Tailored to you.</p>
        </div>

        <div style={styles.mealGrid}>
          {meals.map((meal, i) => (
            <div
              key={meal.title}
              style={{
                ...styles.mealCard,
                transitionDelay: `${i * 60}ms`,
                ...(hoveredCard === i ? styles.mealCardHover : {}),
              }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="meal-card"
            >
              <div style={styles.mealImageWrap}>
                <img src={meal.image} alt={meal.title} style={styles.mealImage} />
                <div style={{ ...styles.mealImageOverlay, background: `linear-gradient(to top, #0d0d0d 0%, transparent 60%)` }} />
                <span style={{ ...styles.mealTag, background: meal.color + "22", color: meal.color, borderColor: meal.color + "44" }}>
                  {meal.tag}
                </span>
              </div>

              <div style={styles.mealBody}>
                <h3 style={styles.mealTitle}>{meal.title}</h3>

                <div style={styles.mealMeta}>
                  <span style={styles.metaChip}>⏱ {meal.time}</span>
                  <span style={styles.metaChip}>🔥 {meal.calories}</span>
                  <span style={{ ...styles.metaChip, ...styles.metaPrice }}>{meal.price}</span>
                </div>

                <div style={styles.mealProgress}>
                  <div style={{ ...styles.progressBar, width: `${60 + i * 15}%`, background: meal.color }} />
                </div>
                <span style={styles.progressLabel}>Nutrition score: {60 + i * 15}%</span>

                <button style={{ ...styles.recipeBtn, '--accent': meal.color }} className="recipe-btn">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.generateWrap}>
          <button className="btn-outline">↻ Generate New Plan</button>
        </div>
      </section>

      {/* PREMIUM */}
      <section style={styles.premiumSection}>
        <div style={styles.premiumInner}>
          <div style={styles.premiumLeft}>
            <div style={styles.premiumEyebrow}>Premium</div>
            <div style={styles.premiumPrice}>
              <span style={styles.priceCurrency}>$</span>
              <span style={styles.priceNum}>19</span>
              <span style={styles.pricePeriod}>/mo</span>
            </div>
            <p style={styles.premiumSub}>Everything you need to eat well for less.</p>
            <button className="btn-premium">Upgrade Now →</button>
            <p style={styles.premiumNote}>Cancel anytime · No hidden fees</p>
          </div>

          <div style={styles.premiumRight}>
            {premiumFeatures.map((f, i) => (
              <div key={f.label} style={{ ...styles.featureRow, animationDelay: `${i * 80}ms` }} className="feature-row">
                <span style={styles.featureIcon}>{f.icon}</span>
                <span style={styles.featureLabel}>{f.label}</span>
                <span style={styles.featureCheck}>✓</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerLogo}>
          <span style={styles.logoMark}>M</span>
          <span style={styles.logoText}>ealBuddy<span style={styles.logoPlus}>+</span></span>
        </div>
        <p style={styles.footerTagline}>
          AI-powered meal planning. Eat better, spend less, live more.
        </p>
        <p style={styles.footerCopy}>© 2026 MealBuddy Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* ─── STYLES ──────────────────────────────────────────────────── */

const styles = {
  root: {
    background: "#0a0a0a",
    color: "#f5f5f0",
    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
  },

  /* NAV */
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 48px",
    borderBottom: "1px solid transparent",
    transition: "all 0.3s ease",
    background: "transparent",
  },
  navScrolled: {
    background: "rgba(10,10,10,0.92)",
    backdropFilter: "blur(20px)",
    borderBottomColor: "rgba(255,255,255,0.06)",
    padding: "14px 48px",
  },
  navLogo: {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    cursor: "pointer",
  },
  logoMark: {
    fontSize: "28px",
    fontWeight: 900,
    background: "linear-gradient(135deg, #a3e635, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: 1,
  },
  logoText: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#f5f5f0",
    letterSpacing: "-0.5px",
  },
  logoPlus: {
    color: "#a3e635",
    WebkitTextFillColor: "#a3e635",
  },
  navLinks: {
    display: "flex",
    gap: "36px",
  },
  navLink: {
    background: "none",
    border: "none",
    color: "#888",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    letterSpacing: "0.02em",
    transition: "color 0.2s",
    padding: "4px 0",
    position: "relative",
  },
  navLinkActive: {
    color: "#f5f5f0",
  },
  navActions: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },

  /* HERO */
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    gap: "60px",
    padding: "80px 48px 100px",
    position: "relative",
    minHeight: "90vh",
    overflow: "hidden",
  },
  heroBg: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
  },
  orb1: {
    position: "absolute",
    top: "-20%",
    left: "-10%",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(163,230,53,0.12) 0%, transparent 70%)",
    borderRadius: "50%",
    filter: "blur(40px)",
  },
  orb2: {
    position: "absolute",
    bottom: "-10%",
    right: "-5%",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
    borderRadius: "50%",
    filter: "blur(40px)",
  },
  grid: {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
    maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
  },
  heroContent: {
    position: "relative",
    zIndex: 1,
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(163,230,53,0.08)",
    border: "1px solid rgba(163,230,53,0.2)",
    borderRadius: "100px",
    padding: "6px 16px",
    fontSize: "12px",
    color: "#a3e635",
    letterSpacing: "0.04em",
    marginBottom: "32px",
    fontWeight: 600,
  },
  badgeDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#a3e635",
    boxShadow: "0 0 8px #a3e635",
    animation: "pulse 2s infinite",
  },
  heroHeadline: {
    fontSize: "clamp(48px, 6vw, 80px)",
    fontWeight: 900,
    lineHeight: 1.05,
    letterSpacing: "-2px",
    marginBottom: "24px",
    color: "#f5f5f0",
  },
  heroAccent: {
    background: "linear-gradient(90deg, #a3e635, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroAccentAlt: {
    color: "#f5f5f0",
    textDecoration: "underline",
    textDecorationColor: "#a3e635",
    textUnderlineOffset: "6px",
    textDecorationThickness: "3px",
  },
  heroSub: {
    fontSize: "17px",
    color: "#888",
    lineHeight: 1.7,
    maxWidth: "480px",
    marginBottom: "32px",
  },
  heroPills: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "40px",
  },
  pill: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "100px",
    padding: "8px 18px",
    fontSize: "13px",
    color: "#ccc",
    fontWeight: 500,
  },
  heroCta: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  ctaNote: {
    fontSize: "13px",
    color: "#555",
  },
  heroVisual: {
    position: "relative",
    zIndex: 1,
  },
  heroImageWrap: {
    position: "relative",
    borderRadius: "32px",
    overflow: "visible",
  },
  heroImage: {
    width: "100%",
    height: "520px",
    objectFit: "cover",
    borderRadius: "32px",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "block",
  },
  heroImageGlow: {
    position: "absolute",
    inset: "-2px",
    borderRadius: "34px",
    background: "linear-gradient(135deg, rgba(163,230,53,0.2), rgba(34,211,238,0.1), transparent)",
    zIndex: -1,
    filter: "blur(20px)",
  },
  statsCard: {
    position: "absolute",
    bottom: "-24px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(18,18,18,0.95)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "16px 32px",
    display: "flex",
    gap: "32px",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2px",
  },
  statNum: {
    fontSize: "22px",
    fontWeight: 800,
    color: "#a3e635",
    lineHeight: 1,
  },
  statLabel: {
    fontSize: "11px",
    color: "#666",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },
  statDivider: {
    width: "1px",
    height: "36px",
    background: "rgba(255,255,255,0.1)",
  },

  /* MEALS */
  mealsSection: {
    padding: "120px 48px 80px",
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "60px",
  },
  sectionEyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#a3e635",
    marginBottom: "12px",
  },
  sectionTitle: {
    fontSize: "clamp(36px, 5vw, 56px)",
    fontWeight: 900,
    letterSpacing: "-1.5px",
    marginBottom: "12px",
    color: "#f5f5f0",
  },
  titleAccent: {
    background: "linear-gradient(90deg, #a3e635, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  sectionSub: {
    color: "#666",
    fontSize: "16px",
  },
  mealGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  mealCard: {
    background: "#111",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "24px",
    overflow: "hidden",
    transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  mealCardHover: {
    transform: "translateY(-6px)",
    borderColor: "rgba(163,230,53,0.3)",
    boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
  },
  mealImageWrap: {
    position: "relative",
    height: "220px",
    overflow: "hidden",
  },
  mealImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  mealImageOverlay: {
    position: "absolute",
    inset: 0,
  },
  mealTag: {
    position: "absolute",
    top: "14px",
    left: "14px",
    fontSize: "11px",
    fontWeight: 700,
    padding: "4px 10px",
    borderRadius: "100px",
    border: "1px solid",
    letterSpacing: "0.05em",
  },
  mealBody: {
    padding: "20px",
  },
  mealTitle: {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "14px",
    letterSpacing: "-0.3px",
    color: "#f5f5f0",
  },
  mealMeta: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "16px",
  },
  metaChip: {
    fontSize: "12px",
    padding: "4px 10px",
    background: "rgba(255,255,255,0.06)",
    borderRadius: "100px",
    color: "#aaa",
  },
  metaPrice: {
    color: "#a3e635",
    background: "rgba(163,230,53,0.08)",
  },
  mealProgress: {
    height: "3px",
    background: "rgba(255,255,255,0.07)",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "6px",
  },
  progressBar: {
    height: "100%",
    borderRadius: "10px",
    transition: "width 1s ease",
  },
  progressLabel: {
    fontSize: "11px",
    color: "#555",
    marginBottom: "18px",
    display: "block",
  },
  recipeBtn: {
    width: "100%",
    padding: "12px",
    borderRadius: "14px",
    border: "1px solid rgba(163,230,53,0.3)",
    background: "transparent",
    color: "#a3e635",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s ease",
    letterSpacing: "0.02em",
  },
  generateWrap: {
    textAlign: "center",
    marginTop: "40px",
  },

  /* PREMIUM */
  premiumSection: {
    padding: "40px 48px 100px",
  },
  premiumInner: {
    maxWidth: "1100px",
    margin: "0 auto",
    background: "linear-gradient(135deg, #0f1a0b 0%, #091419 50%, #0a0a14 100%)",
    border: "1px solid rgba(163,230,53,0.15)",
    borderRadius: "40px",
    padding: "60px 64px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    position: "relative",
    overflow: "hidden",
  },
  premiumLeft: {
    position: "relative",
    zIndex: 1,
  },
  premiumEyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#a3e635",
    marginBottom: "16px",
  },
  premiumPrice: {
    display: "flex",
    alignItems: "flex-start",
    gap: "4px",
    marginBottom: "12px",
    lineHeight: 1,
  },
  priceCurrency: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#a3e635",
    paddingTop: "12px",
  },
  priceNum: {
    fontSize: "96px",
    fontWeight: 900,
    color: "#f5f5f0",
    letterSpacing: "-4px",
    lineHeight: 1,
  },
  pricePeriod: {
    fontSize: "22px",
    color: "#555",
    alignSelf: "flex-end",
    paddingBottom: "14px",
  },
  premiumSub: {
    color: "#666",
    fontSize: "16px",
    lineHeight: 1.6,
    marginBottom: "36px",
  },
  premiumNote: {
    fontSize: "12px",
    color: "#444",
    marginTop: "16px",
  },
  premiumRight: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    justifyContent: "center",
  },
  featureRow: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "14px 20px",
    borderRadius: "14px",
    transition: "background 0.2s",
    cursor: "default",
  },
  featureIcon: {
    fontSize: "18px",
    color: "#a3e635",
    width: "24px",
    textAlign: "center",
    flexShrink: 0,
  },
  featureLabel: {
    fontSize: "15px",
    color: "#ccc",
    flex: 1,
    fontWeight: 500,
  },
  featureCheck: {
    color: "#a3e635",
    fontSize: "14px",
    fontWeight: 700,
  },

  /* FOOTER */
  footer: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    padding: "48px 48px 40px",
  },
  footerLogo: {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    marginBottom: "16px",
  },
  footerTagline: {
    color: "#555",
    fontSize: "14px",
    maxWidth: "500px",
    lineHeight: 1.6,
    marginBottom: "24px",
  },
  footerCopy: {
    color: "#333",
    fontSize: "13px",
  },
};

/* ─── CSS ─────────────────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,900&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  @keyframes float-slow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-16px); }
  }
  @keyframes float-slow-rev {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(16px); }
  }
  @keyframes fade-up {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .float-slow { animation: float-slow 6s ease-in-out infinite; }
  .float-slow-rev { animation: float-slow-rev 7s ease-in-out infinite; }
  .fade-up { animation: fade-up 0.8s ease both; }
  .fade-up-delay { animation: fade-up 0.8s ease 0.2s both; }
  .fade-up-delay2 { animation: fade-up 0.8s ease 0.5s both; }

  .shimmer-text {
    background: linear-gradient(90deg, #a3e635 0%, #22d3ee 30%, #a3e635 60%, #22d3ee 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 4s linear infinite;
  }

  .btn-ghost {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.15);
    color: #aaa;
    padding: 10px 22px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
  }
  .btn-ghost:hover { color: #f5f5f0; border-color: rgba(255,255,255,0.3); }

  .btn-primary {
    background: linear-gradient(135deg, #a3e635, #65a30d);
    border: none;
    color: #0a0a0a;
    padding: 10px 22px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
  }
  .btn-primary:hover { transform: scale(1.04); filter: brightness(1.1); }

  .btn-hero {
    background: linear-gradient(135deg, #a3e635, #22d3ee);
    border: none;
    color: #0a0a0a;
    padding: 16px 32px;
    border-radius: 16px;
    font-size: 17px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.25s;
    font-family: inherit;
    letter-spacing: -0.2px;
  }
  .btn-hero:hover { transform: scale(1.04) translateY(-2px); box-shadow: 0 20px 50px rgba(163,230,53,0.3); }

  .btn-outline {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.15);
    color: #888;
    padding: 14px 28px;
    border-radius: 14px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
  }
  .btn-outline:hover { color: #f5f5f0; border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.04); }

  .btn-premium {
    background: linear-gradient(135deg, #a3e635, #65a30d);
    border: none;
    color: #0a0a0a;
    padding: 16px 32px;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.25s;
    font-family: inherit;
    display: inline-block;
  }
  .btn-premium:hover { transform: scale(1.04); box-shadow: 0 16px 40px rgba(163,230,53,0.25); }

  .recipe-btn:hover {
    background: rgba(163,230,53,0.12) !important;
  }

  .meal-card:hover img {
    transform: scale(1.05);
  }

  .feature-row:hover {
    background: rgba(255,255,255,0.04);
  }

  @media (max-width: 900px) {
    nav { padding: 16px 24px !important; }
    section { padding: 60px 24px !important; }
  }
`;
