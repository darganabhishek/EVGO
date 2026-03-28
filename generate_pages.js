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
            <a href="/contact.html" class="btn btn-primary small animate-pulse">Get Quote</a>
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
                <h2 class="section-title">Committed to a <span class="text-green">Greener Future</span></h2>
                <p>EV GO MOVERS actively reduces pollution by replacing fuel-based transport with electric vehicles. Our services help lower carbon emissions, reduce noise pollution, and support cleaner urban mobility.</p>
                <p style="margin-top:20px;">By choosing EV GO MOVERS, you’re contributing to a cleaner and healthier environment.</p>
            </div>
            <div class="reveal-right">
                <div class="chart-container glass">
                     <div class="chart-bar-group">
                         <div class="chart-bar red" data-height="90%" style="height:0;"><span>High</span></div>
                         <div class="chart-label">Diesel</div>
                     </div>
                     <div class="chart-bar-group">
                         <div class="chart-bar orange" data-height="70%" style="height:0;"><span>Med</span></div>
                         <div class="chart-label">Petrol</div>
                     </div>
                     <div class="chart-bar-group">
                         <div class="chart-bar green" data-height="0%" style="height:0;"><span>Zero</span></div>
                         <div class="chart-label">EV (Us)</div>
                     </div>
                </div>
                <p class="text-center" style="margin-top:10px; font-size:0.9rem; color:var(--text-gray);">Relative Emissions Comparison</p>
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
                 <h3>Get in Touch</h3>
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
                    <p>Monday – Sunday | 9:00 AM – 6:00 PM</p>
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
