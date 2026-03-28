const fs = require('fs');
const path = require('path');

const template = (title, content, isSubdir = false) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title} | EV GO MOVERS</title>
    <meta name="description" content="EV GO MOVERS – India’s Leading Electric Packers & Movers Company. Eco-Friendly, Reliable & Affordable Moving and Logistics Solutions." />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <link rel="stylesheet" href="${isSubdir ? '../' : './'}style.css" />
    <style>
      .page-header {
        padding-top: 140px;
        padding-bottom: 60px;
        background: radial-gradient(circle at top right, rgba(0, 255, 136, 0.1), transparent 40%),
                    linear-gradient(180deg, #0A192F 0%, #020c1b 100%);
        text-align: center;
      }
      .content-section {
        padding: 60px 0;
        min-height: 50vh;
      }
      .logo img {
        height: 50px;
        width: auto;
        margin-right: 10px;
      }
    </style>
  </head>
  <body>
    <nav class="navbar" id="navbar">
      <div class="container nav-container">
        <a href="/" class="logo">
          <img src="/images/logo.png" alt="EV GO MOVERS">
           <span>EV GO <span class="highlight">MOVERS</span></span>
        </a>
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about.html">About Us</a></li>
          <li><a href="/services.html">Services</a></li>
          <li><a href="/sustainability.html">Sustainability</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
        <div class="nav-actions">
            <a href="/contact.html" class="btn btn-primary small animate-pulse">JOIN US</a>
             <button class="mobile-menu-btn" aria-label="Menu">
            <i class="ph ph-list"></i>
          </button>
        </div>
      </div>
    </nav>

    <header class="page-header">
      <div class="container">
        <h1 class="fade-in-up">${title}</h1>
      </div>
    </header>

    <section class="content-section">
      <div class="container">
        ${content}
      </div>
    </section>

    <footer>
      <div class="container footer-content">
        <div class="footer-col">
          <h3>EV GO MOVERS</h3>
          <p>India's Leading Electric Packers & Movers Company.</p>
          <div class="social-links">
             <a href="#"><i class="ph-fill ph-facebook-logo"></i></a>
             <a href="#"><i class="ph-fill ph-instagram-logo"></i></a>
             <a href="#"><i class="ph-fill ph-linkedin-logo"></i></a>
          </div>
        </div>
        <div class="footer-col">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/about.html">About Us</a>
            <a href="/services.html">Services</a>
            <a href="/contact.html">Contact</a>
        </div>
        <div class="footer-col">
            <h4>Services</h4>
            <a href="/services/home-relocation.html">Home Relocation</a>
            <a href="/services/office-relocation.html">Office Shifting</a>
            <a href="/services/ev-logistics.html">EV Logistics</a>
        </div>
        <div class="footer-col">
            <h4>Contact</h4>
            <p><i class="ph-fill ph-phone"></i> +91 9218303695</p>
            <p><i class="ph-fill ph-envelope"></i> evgo@evgomovers.com</p>
            <p><i class="ph-fill ph-map-pin"></i> Corporate office - Gurugram</p>
            <p><i class="ph-fill ph-map-pin"></i> Registered office - Pitampura</p>
        </div>
      </div>
      <div class="footer-bottom text-center">
        <p>&copy; 2026 EV GO MOVERS LOGISTICS INDIA PRIVATE LIMITED. All rights reserved.</p>
      </div>
    </footer>
    <script type="module" src="${isSubdir ? '../' : './'}main.js"></script>
    <script>
       // Simple script to animate charts if present
       const bars = document.querySelectorAll('.chart-bar');
       if(bars.length > 0) {
           const observer = new IntersectionObserver((entries) => {
               entries.forEach(entry => {
                   if(entry.isIntersecting) {
                       const height = entry.target.getAttribute('data-height');
                       entry.target.style.height = height;
                   }
               });
           });
           bars.forEach(bar => observer.observe(bar));
       }
    </script>
  </body>
</html>
`;

const pages = [
  {
    path: 'about.html',
    title: 'About EV GO MOVERS – Smart Electric Logistics Company',
    content: `
      <div class="grid-2">
        <div class="reveal-left">
          <h2 class="section-title">Smart Electric Logistics</h2>
          <p class="text-gray">EV GO MOVERS was founded to transform the Indian logistics and packers & movers industry through electric mobility. By combining technology-driven logistics planning with electric vehicles, we help customers move responsibly while maintaining speed, safety, and affordability.</p>
          <p class="text-gray" style="margin-top:20px;">We serve individuals, startups, and enterprises looking for eco-friendly transportation alternatives without compromising service quality.</p>
          
          <div style="margin-top: 40px;">
             <h3 class="text-green">Our Mission</h3>
             <p>To deliver reliable logistics and moving services using electric vehicles while reducing environmental impact.</p>
          </div>
          <div style="margin-top: 20px;">
             <h3 class="text-green">Our Vision</h3>
             <p>To become India’s most trusted electric movers and green logistics brand.</p>
          </div>
        </div>
        <div class="reveal-right">
             <div class="why-item" style="margin-top:20px;">
                <i class="ph-fill ph-leaf"></i>
                <div>
                   <h4>Sustainability</h4>
                   <p>Deep commitment to green energy.</p>
                </div>
             </div>
             <div class="why-item">
                <i class="ph-fill ph-shield-check"></i>
                <div>
                   <h4>Reliability</h4>
                   <p>Consistent and safe operations.</p>
                </div>
             </div>
              <div class="why-item">
                <i class="ph-fill ph-users"></i>
                <div>
                   <h4>Customer Satisfaction</h4>
                   <p>We put our clients first.</p>
                </div>
             </div>
        </div>
      </div>
    `
  },
  {
    path: 'services.html',
    title: 'Our Electric Movers & Logistics Services',
    content: `
        <div class="services-grid">
          <div class="service-card glass">
            <i class="ph-fill ph-house-line service-icon"></i>
            <h3>Home Relocation Services</h3>
            <p>Our electric home relocation services ensure safe packing, careful handling, and smooth transportation of household goods using eco-friendly vehicles.</p>
            <a href="/services/home-relocation.html" class="link-arrow">Learn more <i class="ph ph-arrow-right"></i></a>
          </div>
          <div class="service-card glass">
            <i class="ph-fill ph-buildings service-icon"></i>
            <h3>Office Relocation Services</h3>
            <p>We specialize in office shifting with minimal downtime, secure equipment handling, and professional coordination.</p>
            <a href="/services/office-relocation.html" class="link-arrow">Learn more <i class="ph ph-arrow-right"></i></a>
          </div>
           <div class="service-card glass">
            <i class="ph-fill ph-truck service-icon"></i>
            <h3>Local & Intercity Moving</h3>
            <p>Reliable and affordable transportation for short and long distances with electric vehicles.</p>
            <a href="/services/intercity-moves.html" class="link-arrow">Learn more <i class="ph ph-arrow-right"></i></a>
          </div>
           <div class="service-card glass">
            <i class="ph-fill ph-lightning service-icon"></i>
            <h3>Electric Vehicle Logistics</h3>
            <p>Custom EV logistics models for businesses looking to reduce delivery costs and carbon footprint.</p>
            <a href="/services/ev-logistics.html" class="link-arrow">Learn more <i class="ph ph-arrow-right"></i></a>
          </div>
        </div>
        
        <div class="text-center" style="margin-top:60px;">
            <a href="/contact.html" class="btn btn-primary glow">Get a Free Quote Now</a>
        </div>
    `
  },
  {
    path: 'sustainability.html',
    title: 'Eco-Friendly Movers Driving Sustainable Logistics',
    content: `
        <div class="grid-2">
            <div class="reveal-left">
                <h2 class="section-title">The EV <span class="text-green">Revolution</span></h2>
                <p>EV GO MOVERS isn’t just changing how you move; we are redefining the efficiency of Indian logistics. By replacing fuel-heavy transport with a high-performance electric fleet, we deliver 100% cleaner results at a fraction of the cost.</p>
                <div class="feature-list" style="margin-top:25px;">
                    <div class="trust-item" style="background: rgba(0, 255, 136, 0.1); padding: 12px; border-radius: 8px; margin-bottom: 10px; border-left: 4px solid var(--primary-green);">
                         <i class="ph-fill ph-check-circle" style="color: var(--primary-green);"></i> <strong>ZERO</strong> Tailpipe Emissions
                    </div>
                    <div class="trust-item" style="background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; margin-bottom: 10px; border-left: 4px solid #4cc9f0;">
                         <i class="ph-fill ph-currency-circle-dollar" style="color: #4cc9f0;"></i> <strong>75%</strong> Operational Savings
                    </div>
                </div>
            </div>
            <div class="reveal-right">
                <div class="impact-comparison glass" style="padding: 40px; border: 1px solid rgba(0, 255, 136, 0.2); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, #ff4d4d, var(--primary-green));"></div>
                    <h3 class="text-center" style="margin-bottom: 30px; letter-spacing: 1px;">DRASTIC EFFICIENCY GAP</h3>
                    
                    <div class="drastic-graph" style="display: flex; align-items: flex-end; justify-content: space-around; height: 250px; padding: 20px; background: rgba(0,0,0,0.3); border-radius: 20px; margin-bottom: 30px; position: relative;">
                        <!-- Diesel Resource Demand -->
                        <div class="graph-col" style="width: 35%; text-align: center;">
                            <div style="height: 100%; background: linear-gradient(180deg, #ff4d4d, #b30000); border-radius: 10px 10px 0 0; position: relative; box-shadow: 0 0 15px rgba(255, 77, 77, 0.3);">
                                <span style="position: absolute; top: -30px; left: 50%; transform: translateX(-50%); font-weight: 800; color: #ff4d4d;">400% Cost</span>
                            </div>
                            <p style="font-size: 0.8rem; margin-top: 15px; color: var(--text-gray);">Diesel Logistics</p>
                        </div>
                        
                        <div style="color: var(--text-gray); font-weight: 900; font-size: 1.5rem; margin-bottom: 80px;">VS</div>

                        <!-- EV Resource Demand -->
                        <div class="graph-col" style="width: 35%; text-align: center;">
                            <div style="height: 25%; background: linear-gradient(180deg, var(--primary-green), #00a35c); border-radius: 10px 10px 0 0; position: relative; box-shadow: 0 0 25px rgba(0, 255, 136, 0.4); border: 2px solid #fff;">
                                <span style="position: absolute; top: -30px; left: 50%; transform: translateX(-50%); font-weight: 800; color: var(--primary-green);">100% Efficiency</span>
                            </div>
                            <p style="font-size: 0.8rem; margin-top: 15px; color: var(--primary-green); font-weight: 600;">EV GO MOVERS</p>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div class="stat-bubble" style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 12px; text-align: center; border: 1px solid var(--glass-border);">
                            <p style="font-size: 0.7rem; color: var(--text-gray); text-transform: uppercase;">Daily CO2 Savings</p>
                            <h4 style="color: var(--primary-green); font-size: 1.5rem;">2,000 KG</h4>
                        </div>
                        <div class="stat-bubble" style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 12px; text-align: center; border: 1px solid var(--glass-border);">
                            <p style="font-size: 0.7rem; color: var(--text-gray); text-transform: uppercase;">Daily Cash Savings</p>
                            <h4 style="color: #4cc9f0; font-size: 1.5rem;">₹60,000</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Annual Impact Banner -->
        <div class="glass" style="margin-top: 50px; padding: 40px; text-align: center; border: 2px solid var(--primary-green);">
            <h2 style="font-size: 2.5rem; margin-bottom: 10px;">The Power of One Fleet</h2>
            <p style="color: var(--text-gray); max-width: 800px; margin: 0 auto 30px;">In just one year, our standard 100-vehicle fleet prevents 730 Tons of CO2 emissions and saves ₹2.19 Crore in operational fuel waste.</p>
            <div style="display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;">
                 <div style="text-align: center;">
                    <i class="ph-fill ph-tree" style="font-size: 3rem; color: var(--primary-green);"></i>
                    <h3 style="margin-top: 10px;">35,000+</h3>
                    <p style="font-size: 0.8rem; color: var(--text-gray);">Trees Planted Equivalent</p>
                 </div>
                 <div style="text-align: center;">
                    <i class="ph-fill ph-coins" style="font-size: 3rem; color: #ffd700;"></i>
                    <h3 style="margin-top: 10px;">₹2,19,00,000</h3>
                    <p style="font-size: 0.8rem; color: var(--text-gray);">Operational Wealth Gained</p>
                 </div>
            </div>
        </div>
      `
  },
  {
    path: 'contact.html',
    title: 'Contact Us',
    content: `
        <div class="grid-2">
            <div>
                 <h3>EV GO MOVERS LOGISTICS INDIA PVT. LTD.</h3>
                 <p style="margin-bottom: 20px;">Have questions or need a quote? Our team is here to help.</p>
                 
                 <div class="contact-info-item" style="margin-bottom: 20px;">
                    <strong style="color:var(--primary-green)">Address:</strong>
                    <p>Corporate office - Gurugram</p>
                    <p>Registered office - Pitampura</p>
                 </div>
                 <div class="contact-info-item" style="margin-bottom: 20px;">
                    <strong style="color:var(--primary-green)">Phone:</strong>
                    <p>+91 9218303695</p>
                 </div>
                 <div class="contact-info-item" style="margin-bottom: 20px;">
                    <strong style="color:var(--primary-green)">Email:</strong>
                    <p>evgo@evgomovers.com</p>
                 </div>
                 
                 <div class="contact-info-item" style="margin-bottom: 20px;">
                    <strong style="color:var(--primary-green)">Business Hours:</strong>
                    <p>Monday – Saturday | 8:00 AM – 6:00 PM</p>
                 </div>
            </div>
            <div class="glass" style="padding: 30px;">
                <form class="cta-form" style="display: flex; flex-direction: column; gap: 15px;">
                    <input type="text" placeholder="Your Name" />
                    <input type="text" placeholder="Pickup Location" />
                    <input type="text" placeholder="Drop Location" />
                    <input type="tel" placeholder="Phone Number" />
                    <button type="button" class="btn btn-primary glow">Get Estimate</button>
                    <a href="#" class="btn btn-whatsapp text-center" style="background:#25D366; border:none; color:white; justify-content:center;">WhatsApp Us</a>
                </form>
            </div>
        </div>
      `
  },
  {
    path: 'services/home-relocation.html',
    title: 'Home Relocation Services',
    content: `<p>Our electric home relocation services ensure safe packing, careful handling, and smooth transportation of household goods using eco-friendly vehicles.</p>`,
    isSubdir: true
  },
  {
    path: 'services/office-relocation.html',
    title: 'Office Relocation Services',
    content: `<p>We specialize in office shifting with minimal downtime, secure equipment handling, and professional coordination.</p>`,
    isSubdir: true
  },
  {
    path: 'services/ev-logistics.html',
    title: 'Electric Vehicle Logistics',
    content: `<p>Custom EV logistics models for businesses looking to reduce delivery costs and carbon footprint.</p>`,
    isSubdir: true
  },
  {
    path: 'services/intercity-moves.html',
    title: 'Local & Intercity Moving',
    content: `<p>Reliable and affordable transportation for short and long distances with electric vehicles.</p>`,
    isSubdir: true
  }
];

pages.forEach(page => {
  const filePath = path.join(__dirname, page.path);
  const fileContent = template(page.title, page.content, page.isSubdir);
  fs.writeFileSync(filePath, fileContent);
  console.log('Created:', filePath);
});
