:root{
  --bg:#071227;
  --card:#071827;
  --muted:#9aa4b2;
  --accent:#7dd3fc;
  --accent-2:#60a5fa;
  --glass: rgba(255,255,255,0.03);
  --max-width:1100px;
  --radius:12px;
  --dot-size:12px;
}
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background:linear-gradient(180deg,#071024 0%, #071827 100%);
  color:#e6eef6;
  -webkit-font-smoothing:antialiased;
  overflow:hidden; /* main will scroll */
}
.container{max-width:var(--max-width);margin:0 auto;padding:32px}
.site-header{position:fixed;top:0;left:0;right:0;background:transparent;padding:10px 0;z-index:50}
.header-inner{display:flex;align-items:center;gap:16px}
.logo{font-weight:700;color:var(--accent);text-decoration:none;font-size:18px}
.nav-toggle{display:none;background:transparent;border:0;color:var(--muted);font-size:20px}
.site-nav{margin-left:auto;display:flex;gap:18px}
.site-nav a{color:var(--muted);text-decoration:none;padding:6px 8px;border-radius:6px}
.site-nav a:hover{color:#fff;background:rgba(255,255,255,0.03)}

/* Snap container */
.snap-container{
  height:100vh;
  overflow-y:auto;
  scroll-snap-type: y mandatory;
  scroll-behavior:smooth;
  -webkit-overflow-scrolling: touch;
}

/* Sections */
.section{
  min-height:100vh;
  height:100vh;
  scroll-snap-align:start;
  display:flex;
  align-items:center;
  padding-top:80px; /* header space */
  padding-bottom:48px;
}
.section > .container{padding-top:24px;padding-bottom:24px}

/* Hero */
.hero{
  background:linear-gradient(180deg, rgba(7,16,36,0.15), transparent 60%);
}
.hero-content{max-width:900px}
.hero h1{margin:0;font-size:48px}
.lead{color:var(--muted);font-size:18px;max-width:70%}
.cta{margin-top:16px}
.btn{display:inline-block;padding:10px 16px;border-radius:8px;background:var(--accent);color:#062733;text-decoration:none;font-weight:600;margin-right:10px}
.btn.ghost{background:transparent;border:1px solid rgba(125,211,252,0.12);color:var(--accent)}

/* Works */
.works{background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.00));}
.works-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;margin-top:18px}
.work-card{background:var(--card);padding:18px;border-radius:12px}
.meta a{color:var(--accent);text-decoration:none}

/* Testimonials */
.testimonials{background:linear-gradient(180deg, rgba(255,255,255,0.00), rgba(255,255,255,0.02));}
.testimonial-wrap{display:flex;align-items:center;gap:12px;max-width:900px;margin-top:18px}
.testimonial{flex:1;background:var(--card);padding:20px;border-radius:12px;min-height:120px;display:flex;flex-direction:column;justify-content:center}
.quote{font-size:20px;margin:0 0 12px;color:#eaf6ff}
.author{margin:0;color:var(--muted)}
.t-btn{background:transparent;border:0;color:var(--muted);font-size:28px;padding:8px;cursor:pointer}
.t-controls{margin-top:12px;display:flex;gap:8px}
.t-controls .dot{width:10px;height:10px;border-radius:999px;border:1px solid rgba(255,255,255,0.06);background:transparent;cursor:pointer}

/* Timeline */
.experience{background:linear-gradient(180deg, rgba(255,255,255,0.00), rgba(255,255,255,0.01));}
.timeline{list-style:none;padding:0;margin-top:18px;display:grid;gap:14px}
.timeline li{background:var(--card);padding:16px;border-radius:12px}
.timeline .muted{color:var(--muted);font-size:13px;margin-top:6px}

/* Contact */
.contact{background:linear-gradient(180deg, rgba(255,255,255,0.00), rgba(255,255,255,0.00));}

/* Dots nav */
.nav-dots{position:fixed;right:18px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:10px;z-index:60}
.nav-dots .dot-link{display:block;width:var(--dot-size);height:var(--dot-size);border-radius:999px;background:transparent;border:2px solid rgba(255,255,255,0.08);transition:all .18s}
.nav-dots .dot-link.active{transform:scale(1.15);background:var(--accent);border-color:var(--accent);box-shadow:0 6px 18px rgba(125,211,252,0.08)}

/* Muted */
.muted{color:var(--muted);font-size:13px}

/* Footer spacing fix */
.site-footer{display:none}

/* Responsive */
@media (max-width:920px){
  .lead{max-width:100%}
  .container{padding:20px}
}
@media (max-width:720px){
  .nav-toggle{display:block}
  .site-nav{position:absolute;right:16px;top:64px;background:rgba(5,10,18,0.95);padding:12px;border-radius:10px;display:none;flex-direction:column}
  .site-nav.show{display:flex}
  .nav-dots{right:10px;gap:8px}
  .hero h1{font-size:34px}
}
