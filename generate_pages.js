const fs = require('fs');
const path = require('path');

const template = (title, content, isSubdir = false, heroCta = '') => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title} | EV GO MOVERS</title>
    <meta name="description" content="EV GO MOVERS – India's Leading Electric Moving & Logistics Solutions Provider. Eco-Friendly, Reliable & Affordable Moving and Logistics Solutions." />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    
    <!-- Swiper Slider -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    
    <link rel="stylesheet" href="${isSubdir ? '../' : './'}style.css?v=1.1.2" />
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
        <a href="/" class="logo-wrapper">
          <img src="/images/ev-go-logo.png" alt="EV GO Logo" style="height: 48px;">
          <span class="logo-text">MOVERS</span>
        </a>
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about.html">About Us</a></li>
          <li><a href="/services.html">Services</a></li>
          <li><a href="/sustainability.html">Sustainability</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
        <div class="nav-actions">
            <a href="/contact.html" class="btn btn-primary small">Join Us</a>
             <button class="mobile-menu-btn" aria-label="Menu">
            <i class="ph ph-list"></i>
          </button>
        </div>
      </div>
    </nav>

    <header class="page-header">
      <div class="container">
        <h1 class="fade-in-up" style="font-size: 3rem; margin-top: 10px;">${title === 'Services' ? 'Our Electric Movers & Logistics Services' : title}</h1>
        ${heroCta}
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
        <div class="logo-wrapper" style="margin-bottom: 20px;">
          <img src="/images/ev-go-logo.png" alt="EV GO Logo" style="height: 55px;">
          <span class="logo-text">MOVERS</span>
        </div>
        <p>India's Leading Electric Moving & Logistics Solutions Provider.</p>
        <div class="social-links">
          <a href="#"><i class="ph-fill ph-facebook-logo"></i></a>
          <a href="#"><i class="ph-fill ph-instagram-logo"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <a href="/services.html">Electric Fleet Services</a>
        <a href="/services.html">Last-Mile Delivery</a>
        <a href="/services.html">Logistics Management</a>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a href="/privacy-policy.html">Privacy Policy</a>
        <a href="/terms.html">Terms & Conditions</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <p><i class="ph-fill ph-phone"></i> +91 9218303695</p>
        <p><i class="ph-fill ph-envelope"></i> evgo@evgomovers.com</p>
        <p><i class="ph-fill ph-map-pin"></i> Corporate office - Gurugram</p>
        <p><i class="ph-fill ph-map-pin"></i> Registered office - Pitampura</p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-wrapper" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
        <p>&copy; 2026 EV GO MOVERS LOGISTICS INDIA PRIVATE LIMITED.</p>
        <a href="http://www.mdinfo.in" target="_blank" class="mdi-link">DESIGNED AND DEVELOPED BY <span class="mdi-name" style="color: var(--primary-green); font-weight: 700;">M.D. INFOTECH</span></a>
      </div>
    </div>
  </footer>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
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

       // Animated Counter Script
       const counters = document.querySelectorAll('.counter-up');
       if(counters.length > 0) {
           const counterObserver = new IntersectionObserver((entries, observer) => {
               entries.forEach(entry => {
                   if(entry.isIntersecting) {
                       const targetElem = entry.target;
                       const targetValue = parseFloat(targetElem.getAttribute('data-target'));
                       const duration = 2000;
                       const isDecimal = targetValue % 1 !== 0;
                       
                       let startTime = null;
                       const step = (timestamp) => {
                           if (!startTime) startTime = timestamp;
                           const progress = Math.min((timestamp - startTime) / duration, 1);
                           const currentValue = progress * targetValue;
                           
                           if(isDecimal) {
                               targetElem.innerText = currentValue.toFixed(2);
                           } else {
                               targetElem.innerText = Math.floor(currentValue).toLocaleString('en-IN');
                           }
                           
                           if (progress < 1) {
                               window.requestAnimationFrame(step);
                           } else {
                               targetElem.innerText = isDecimal ? targetValue.toFixed(2) : targetValue.toLocaleString('en-IN');
                               observer.unobserve(targetElem);
                           }
                       };
                       window.requestAnimationFrame(step);
                   }
               });
           }, { threshold: 0.5 });
           
           counters.forEach(counter => counterObserver.observe(counter));
       }

       // FAQ Toggle Handler
        document.querySelectorAll('.faq-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const isActive = item.classList.contains('active');
                
                // Close all other items
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                
                if(!isActive) {
                    item.classList.add('active');
                }
            });
        });

       // Form Submission Handler
       const contactForm = document.getElementById('contactForm');
       if(contactForm) {
           contactForm.addEventListener('submit', function(e) {
               e.preventDefault();
               
               const name = document.getElementById('formName').value;
               const pickup = document.getElementById('formPickup').value;
               const drop = document.getElementById('formDrop').value;
               const phone = document.getElementById('formPhone').value;
               
               const message = \`Hello EV GO MOVERS! I would like to get a quote.%0A%0A*Name:* \${name}%0A*Pickup:* \${pickup}%0A*Drop:* \${drop}%0A*Phone:* \${phone}%0A%0APlease get back to me with an estimate.\`;
               
               const whatsappUrl = \`https://wa.me/919218303695?text=\${message}\`;
               window.open(whatsappUrl, '_blank');
           });
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
      <!-- Intro Section -->
      <div class="about-intro-grid">
        <div class="reveal-left">
          <span class="badge" style="margin-bottom: 15px;">About Us</span>
          <h2 class="section-title">Pioneering Green Logistics<br>for a Sustainable India</h2>
          <p class="text-green" style="font-weight: 600; margin-bottom: 20px;">We deliver goods the futuristic way. Clean, efficient, electric.</p>
          <p class="text-gray">At EV Go Movers Logistics India Pvt. Ltd., we're not just transforming how India moves - we're leading the charge into a smarter, greener tomorrow.</p>
          
          <ul class="about-features-list">
             <li>Powered by 100% electric vehicles.</li>
             <li>Led by global experts in sustainable logistics.</li>
             <li>AI-based route planning and fleet control.</li>
             <li>Committed to Indian net-zero emission goals.</li>
          </ul>
        </div>
        <div class="reveal-right about-image-frame">
           <video autoplay muted loop playsinline style="width: 100%; display: block; height: 100%; object-fit: cover;">
              <source src="/videos/video.mp4" type="video/mp4">
              Your browser does not support the video tag.
           </video>
        </div>
      </div>

      <!-- Pillars Section -->
      <div class="pillar-grid">
        <div class="pillar-card glass">
          <i class="ph-fill ph-eye pillar-icon"></i>
          <h3 class="text-green">Our Vision</h3>
          <p class="text-gray">To provide top-quality logistics services that exceed our clients' expectations: delivering fast, reliable, and cost-effective solutions to help businesses succeed in their operations.</p>
        </div>
        <div class="pillar-card glass">
          <i class="ph-fill ph-target pillar-icon"></i>
          <h3 class="text-green">Our Mission</h3>
          <p class="text-gray">EV Go Movers was founded to revolutionize the logistics sector. Their vision encompasses: Leading the transformation of traditional logistics toward efficient and sustainable practices across first-mile, mid-mile, and last-mile delivery.</p>
        </div>
        <div class="pillar-card glass">
          <i class="ph-fill ph-heart pillar-icon"></i>
          <h3 class="text-green">Our Values</h3>
          <p class="text-gray">Establishing EV Go Movers as a trusted national partner in reliable, environmentally friendly logistics through electric vehicles and technological advancement.</p>
        </div>
      </div>

      <!-- Journey Section -->
      <div class="journey-container">
        <div class="reveal-left about-image-frame">
           <img src="/images/journey-visual.png" alt="Our Journey" style="width: 100%; display: block;">
           <div style="position: absolute; bottom: 30px; left: 30px;">
              <h2 style="color: white; font-size: 2.5rem; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">Our Journey</h2>
           </div>
        </div>
        <div class="journey-grid">
          <div class="journey-card">
            <span class="journey-year">2024</span>
            <p class="journey-text">Launched with 50 EVs</p>
          </div>
          <div class="journey-card">
            <span class="journey-year">2025</span>
            <p class="journey-text">Nationwide AI routing</p>
          </div>
          <div class="journey-card">
            <span class="journey-year">2026</span>
            <p class="journey-text">Carbon-Negative Operations</p>
          </div>
          <div class="journey-card">
            <span class="journey-year">2027</span>
            <p class="journey-text">Autonomous Fleet Trials</p>
          </div>
        </div>
      </div>

      <!-- Leadership Section -->
      <div class="team-intro">
         <p class="text-green" style="font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">United by Purpose, Driven by Excellence</p>
         <p class="text-gray" style="margin-top: 15px;">Every successful delivery starts with a world-class team. At EVGO, we operate as one seamless unit—from supply chain strategists to fleet engineers and last-mile partners. Our professionals bring together decades of cross-border experience in logistics, engineering, and clean tech.</p>
      </div>

      <div class="team-grid">
         <div class="team-card glass">
            <img src="/images/Lavish Joshi.jpeg" alt="Lavish Joshi" style="width: 100%; height: 100%; object-fit: cover;">
            <div class="team-info">
               <div class="team-name">Lavish Joshi</div>
               <div class="team-title">Director & Supply Chain Expert</div>
            </div>
         </div>
         <div class="team-card glass">
            <img src="/images/ankit-garg.png" alt="Ankit Garg" style="width: 100%; height: 100%; object-fit: cover;">
            <div class="team-info">
               <div class="team-name">Ankit Garg</div>
               <div class="team-title">Director & Operations Strategist</div>
            </div>
         </div>
      </div>

      <!-- FAQ Section -->
      <div class="text-center" style="margin-bottom: 50px;">
         <h2 class="section-title">FAQ'S</h2>
      </div>

      <div class="faq-container">
         <div class="faq-item">
            <button class="faq-header">How green are your operations? <i class="ph ph-caret-down faq-icon"></i></button>
            <div class="faq-content">Our fleet is 100% electric, eliminating all tailpipe emissions and reducing the carbon footprint of your logistics by over 75% compared to diesel vehicles.</div>
         </div>
         <div class="faq-item">
            <button class="faq-header">What industries do you serve? <i class="ph ph-caret-down faq-icon"></i></button>
            <div class="faq-content">We serve e-commerce, FMCG, retail, and corporate sectors with specialized first-mile to last-mile electric logistics solutions.</div>
         </div>
         <div class="faq-item">
            <button class="faq-header">How fast can you scale for my business? <i class="ph ph-caret-down faq-icon"></i></button>
            <div class="faq-content">Our dynamically scalable fleet can handle anything from occasional shipments to full-scale warehouse migrations and daily distribution networks.</div>
         </div>
         <div class="faq-item">
            <button class="faq-header">What makes your tech special? <i class="ph ph-caret-down faq-icon"></i></button>
            <div class="faq-content">We use AI-driven route optimization and real-time telematics to ensure maximum fleet efficiency and on-time deliveries.</div>
         </div>
         <div class="faq-item">
            <button class="faq-header">Do you service pan-India? <i class="ph ph-caret-down faq-icon"></i></button>
            <div class="faq-content">Currently, we have robust operations in major metro hubs like Delhi-NCR and Gurugram, with rapid expansion plans for other Tier 1 cities.</div>
         </div>
         <div class="faq-item">
            <button class="faq-header">How do you handle emergencies? <i class="ph ph-caret-down faq-icon"></i></button>
            <div class="faq-content">Our 24/7 support center and on-ground fleet supervisors ensure every shipment is monitored and contingencies are handled immediately.</div>
         </div>
         <div class="faq-item">
            <button class="faq-header">What's your cost advantage? <i class="ph ph-caret-down faq-icon"></i></button>
            <div class="faq-content">By eliminating fuel surcharges and optimizing routes through AI, we provide significantly lower operational costs for our clients.</div>
         </div>
      </div>
    `
  },
  {
    path: 'services.html',
    title: 'Services',
    content: `
        <div class="services-grid">
          <!-- Card 1: Fleet Services -->
          <div class="service-card glass">
            <div class="service-card-header">
              <img src="/images/image.png" alt="Electric Fleet" class="service-card-image">
            </div>
            <div class="service-card-body">
              <h3>Electric Fleet Services</h3>
              <ul class="service-feature-list">
                <li>Lease 2W, 3W, and 4W electric vehicles for diverse industries.</li>
                <li>Customize contracts to suit your operational needs.</li>
                <li>Enjoy complete vehicle maintenance and support services.</li>
                <li>Reduce costs and emissions with India's smartest EV fleet.</li>
              </ul>
            </div>
          </div>

          <!-- Card 2: Last Mile -->
          <div class="service-card glass">
            <div class="service-card-header">
              <img src="/images/last-mile.png" alt="Last Mile Delivery" class="service-card-image">
            </div>
            <div class="service-card-body">
              <h3>Electrifying Last- Mile Delivery</h3>
              <ul class="service-feature-list">
                <li>Ensure fast and eco-friendly deliveries across urban zones.</li>
                <li>Track orders in real-time with 24/7 support access.</li>
                <li>Achieve reliable, zero-emission delivery drop-offs.</li>
                <li>Contribute to cleaner cities through electric mobility.</li>
              </ul>
            </div>
          </div>

          <!-- Card 3: Logistics Management -->
          <div class="service-card glass">
            <div class="service-card-header">
              <img src="/images/logistics.png" alt="Logistics Management" class="service-card-image">
            </div>
            <div class="service-card-body">
              <h3>Logistics Management</h3>
              <ul class="service-feature-list">
                <li>Use AI-powered dashboards for smart logistics control.</li>
                <li>Optimize routes with predictive analytics and insights.</li>
                <li>Manage performance with real-time data intelligence.</li>
                <li>Scale operations via our urban mobility tech platform.</li>
              </ul>
            </div>
          </div>

          <!-- Card 4: End-to-End Solutions -->
          <div class="service-card glass">
            <div class="service-card-header">
              <img src="/images/end-to-end.png" alt="End-to-End Solutions" class="service-card-image">
            </div>
            <div class="service-card-body">
              <h3>End-to-End Solutions</h3>
              <ul class="service-feature-list">
                <li>Comprehensive 2W, 3W, & 4W EV Fleet Deployment.</li>
                <li>Professionally Trained Driver Staffing & Management.</li>
                <li>AI-Powered Real-time App for Tracking & Monitoring.</li>
                <li>Seamless Integration for First, Mid, & Last-Mile needs.</li>
              </ul>
            </div>
          </div>
        </div>
        
    `
  },
  {
    path: 'sustainability.html',
    title: 'Eco-Friendly Movers Driving Sustainable Logistics',
    heroCta: '<div style="margin-top: 40px;"><a href="/contact.html" class="btn btn-primary" style="font-size: 1.1rem; padding: 16px 40px; box-shadow: 0 4px 15px rgba(0, 255, 136, 0.2);">Start Saving Today</a></div>',
    content: `
        <div class="grid-2 align-start" style="align-items: flex-start;">
            <div class="reveal-left" style="max-width: 95%;">
                <h2 class="section-title">The EV <span class="text-green">Revolution</span></h2>
                <p style="color: var(--text-gray); margin-bottom: 25px; font-size: 1.1rem;">EV GO MOVERS isn't just changing how you move; we are redefining the efficiency of Indian logistics. By replacing fuel-heavy transport with a high-performance electric fleet, we ensure:</p>
                
                <ul class="clean-list" style="margin-bottom: 40px; display: flex; flex-direction: column; gap: 15px;">
                    <li style="display: flex; align-items: center; gap: 12px; font-size: 1.05rem;"><i class="ph-fill ph-leaf text-green" style="font-size: 1.4rem;"></i> Cleaner logistics & zero pollution</li>
                    <li style="display: flex; align-items: center; gap: 12px; font-size: 1.05rem;"><i class="ph-fill ph-trend-down text-blue" style="font-size: 1.4rem;"></i> Lower operational cost for clients</li>
                    <li style="display: flex; align-items: center; gap: 12px; font-size: 1.05rem;"><i class="ph-fill ph-wind text-green" style="font-size: 1.4rem;"></i> Zero tailpipe emissions</li>
                    <li style="display: flex; align-items: center; gap: 12px; font-size: 1.05rem;"><i class="ph-fill ph-lightning text-blue" style="font-size: 1.4rem;"></i> High efficiency EV fleet operations</li>
                </ul>
            </div>
            
            <div class="reveal-right">
                <div class="impact-comparison glass" style="padding: 30px; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; background: rgba(255, 255, 255, 0.02); box-shadow: 0 4px 24px rgba(0,0,0,0.2);">
                    <h3 style="margin-bottom: 25px; font-size: 1.2rem; color: var(--white); border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px;">Efficiency Profile</h3>
                    
                    <div class="comparison-cards" style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 30px;">
                        <!-- Diesel -->
                        <div style="background: rgba(255, 77, 77, 0.03); border: 1px solid rgba(255, 77, 77, 0.15); border-left: 4px solid #ff4d4d; border-radius: 10px; padding: 20px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                                <span style="font-weight: 600; color: var(--text-gray); font-size: 0.95rem;">Diesel Logistics</span>
                                <span class="badge" style="margin: 0; background: rgba(255, 77, 77, 0.1); color: #ff4d4d; border: 1px solid rgba(255, 77, 77, 0.2); font-size: 0.75rem; padding: 4px 10px;">High Cost</span>
                            </div>
                            <div style="width: 100%; background: rgba(255,255,255,0.05); height: 8px; border-radius: 4px; overflow: hidden; margin-bottom: 12px;">
                                <div style="width: 100%; background: #ff4d4d; height: 100%;"></div>
                            </div>
                            <span style="font-size: 0.85rem; color: var(--text-gray);">Cost multiplier: <strong style="color: #ff4d4d;">4X Higher Cost</strong></span>
                        </div>

                        <!-- EV -->
                        <div style="background: rgba(0, 255, 136, 0.05); border: 1px solid rgba(0, 255, 136, 0.2); border-left: 4px solid var(--primary-green); border-radius: 10px; padding: 20px; position: relative;">
                            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(0,255,136,0.02) 0%, transparent 100%); pointer-events: none; border-radius: 10px;"></div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 10px; position: relative; z-index: 1;">
                                <span style="font-weight: 600; color: var(--white); font-size: 0.95rem;">EV GO MOVERS</span>
                                <span class="badge" style="margin: 0; background: rgba(0, 255, 136, 0.15); color: var(--primary-green); border: 1px solid rgba(0, 255, 136, 0.3); font-size: 0.75rem; padding: 4px 10px;"><i class="ph-bold ph-trend-down" style="margin-right: 4px;"></i>75% Lower Cost</span>
                            </div>
                            <div style="width: 100%; background: rgba(255,255,255,0.05); height: 8px; border-radius: 4px; overflow: hidden; margin-bottom: 12px; position: relative; z-index: 1;">
                                <div style="width: 100%; background: linear-gradient(90deg, #00CC6A, #00FF88); height: 100%; box-shadow: 0 0 10px rgba(0,255,136,0.5);"></div>
                            </div>
                            <span style="font-size: 0.85rem; color: var(--text-gray); position: relative; z-index: 1;">Cost multiplier: <strong style="color: var(--primary-green);">Optimized Efficiency</strong></span>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div class="stat-bubble" style="background: rgba(255, 255, 255, 0.02); padding: 15px; border-radius: 10px; text-align: center; border: 1px solid rgba(255, 255, 255, 0.05);">
                            <p style="font-size: 0.75rem; color: var(--text-gray); text-transform: uppercase; margin-bottom: 5px;">Daily CO2 Saved</p>
                            <h4 style="color: var(--primary-green); font-size: 1.3rem; line-height: 1;">2,000 KG</h4>
                            <p style="font-size: 0.7rem; color: var(--text-gray); margin-top: 5px;">(per 10 vehicles)</p>
                        </div>
                        <div class="stat-bubble" style="background: rgba(255, 255, 255, 0.02); padding: 15px; border-radius: 10px; text-align: center; border: 1px solid rgba(255, 255, 255, 0.05);">
                            <p style="font-size: 0.75rem; color: var(--text-gray); text-transform: uppercase; margin-bottom: 5px;">Daily Cash Savings</p>
                            <h4 style="color: #4cc9f0; font-size: 1.3rem; line-height: 1;">₹60,000</h4>
                            <p style="font-size: 0.7rem; color: var(--text-gray); margin-top: 5px;">(estimated)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Annual Impact Banner -->
        <div class="glass" style="margin-top: 60px; padding: 60px 40px; text-align: center; border: 1px solid rgba(0, 255, 136, 0.15); background: linear-gradient(180deg, rgba(0,255,136,0.05) 0%, rgba(255,255,255,0.01) 100%);">
            <h2 style="font-size: 2.5rem; margin-bottom: 15px;">The Power of One Fleet</h2>
            <p style="color: var(--text-gray); max-width: 800px; margin: 0 auto 40px; font-size: 1.1rem; line-height: 1.6;">In just one year, our standard 100-vehicle fleet prevents <span style="color: var(--white); font-weight: 500;">730 Tons of CO2 emissions</span> and saves <span style="color: var(--white); font-weight: 500;">₹2.19 Crore</span> in operational fuel waste.</p>
            <div style="display: flex; justify-content: center; gap: 60px; flex-wrap: wrap;">
                 <div style="text-align: center;">
                    <i class="ph-fill ph-tree" style="font-size: 4rem; color: var(--primary-green); margin-bottom: 10px; display: inline-block;"></i>
                    <h3 style="font-size: 2.2rem; margin-bottom: 5px;"><span class="counter-up" data-target="35000">0</span>+</h3>
                    <p style="font-size: 0.9rem; color: var(--text-gray); font-weight: 500;">Equivalent to planting trees</p>
                 </div>
                 <div style="text-align: center;">
                    <i class="ph-fill ph-coins" style="font-size: 4rem; color: #ffd700; margin-bottom: 10px; display: inline-block;"></i>
                    <h3 style="font-size: 2.2rem; margin-bottom: 5px;">₹<span class="counter-up" data-target="2.19">0</span> Cr</h3>
                    <p style="font-size: 0.9rem; color: var(--text-gray); font-weight: 500;">Operational Wealth Gained</p>
                 </div>
            </div>
        </div>

        <!-- Why Choose Us Grid -->
        <div style="margin-top: 80px; margin-bottom: 40px;">
            <div class="text-center" style="margin-bottom: 50px;">
                <h2 style="font-size: 2.5rem; margin-bottom: 15px;">Why EV Logistics Works</h2>
                <p style="color: var(--text-gray); max-width: 600px; margin: 0 auto;">Scale your supply chain faster, cheaper, and cleaner seamlessly.</p>
            </div>
            
            <div class="swiper sustainability-slider reveal-up">
                <div class="swiper-wrapper">
                    <!-- 01 Lower Costs -->
                    <div class="swiper-slide">
                        <div class="service-card glass">
                            <div class="service-icon"><i class="ph-fill ph-wallet"></i></div>
                            <h4>Lower Costs</h4>
                            <p>Eliminate fuel surcharges completely. Predictable routing with flat EV rates saves huge costs on scale.</p>
                        </div>
                    </div>
                    
                    <!-- 02 Faster Delivery -->
                    <div class="swiper-slide">
                        <div class="service-card glass">
                            <div class="service-icon"><i class="ph-fill ph-rocket-launch"></i></div>
                            <h4>Faster Delivery</h4>
                            <p>Modern fleet telematics guarantee route optimization resulting in higher on-time deliveries natively.</p>
                        </div>
                    </div>
                    
                    <!-- 03 Eco-Friendly -->
                    <div class="swiper-slide">
                        <div class="service-card glass">
                            <div class="service-icon"><i class="ph-fill ph-certificate"></i></div>
                            <h4>Eco-Friendly Compliance</h4>
                            <p>Accelerate your company's Net Zero targets perfectly aligning with immediate government standards.</p>
                        </div>
                    </div>
                    
                    <!-- 04 Scalable Fleet -->
                    <div class="swiper-slide">
                        <div class="service-card glass">
                            <div class="service-icon"><i class="ph-fill ph-chart-line-up"></i></div>
                            <h4>Scalable Fleet</h4>
                            <p>From a few boxes to complex warehouse migrations, our dynamically sized EV fleet scales with you.</p>
                        </div>
                    </div>
                </div>
                <!-- Pagination/Nav could be added here if needed, but keeping it simple for now -->
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
                    <strong style="color:var(--primary-green)">Registered Office (New Delhi):</strong>
                    <p>607, Aggarwal Chamber Plaza 1, Netaji Subhash Place Road, New Delhi, North West Delhi - 110034</p>
                 </div>

                 <div class="contact-info-item" style="margin-bottom: 20px;">
                    <strong style="color:var(--primary-green)">Corporate Office (Gurugram):</strong>
                    <p>Plot no 34, Sector 44 Road, SM Sehgal Foundation, Sector 44, Gurugram, Haryana - 122003</p>
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
                    <p>Monday – Saturday | 8:00 AM – 8:00 PM</p>
                 </div>
            </div>
            <div class="glass" style="padding: 30px;">
                <form class="cta-form" id="contactForm" style="display: flex; flex-direction: column; gap: 15px;">
                    <input type="text" id="formName" placeholder="Your Name" required />
                    <input type="text" id="formPickup" placeholder="Pickup Location" required />
                    <input type="text" id="formDrop" placeholder="Drop Location" required />
                    <input type="tel" id="formPhone" placeholder="Phone Number" required />
                    <button type="submit" class="btn btn-primary glow" style="width: 100%; justify-content: center;">Get Estimate</button>
                    <a href="https://wa.me/919218303695" target="_blank" class="btn btn-whatsapp text-center" style="background:#25D366; border:none; color:white; justify-content:center;">WhatsApp Us</a>
                </form>
            </div>
        </div>
      `
  },
  {
    path: 'services/home-relocation.html',
    title: 'Home Relocation Services',
    content: '<p>Our electric home relocation services ensure safe packing, careful handling, and smooth transportation of household goods using eco-friendly vehicles.</p>',
    isSubdir: true
  },
  {
    path: 'services/office-relocation.html',
    title: 'Office Relocation Services',
    content: '<p>We specialize in office shifting with minimal downtime, secure equipment handling, and professional coordination.</p>',
    isSubdir: true
  },
  {
    path: 'services/ev-logistics.html',
    title: 'Electric Vehicle Logistics',
    content: '<p>Custom EV logistics models for businesses looking to reduce delivery costs and carbon footprint.</p>',
    isSubdir: true
  },
  {
    path: 'services/intercity-moves.html',
    title: 'Local & Intercity Moving',
    content: '<p>Reliable and affordable transportation for short and long distances with electric vehicles.</p>',
    isSubdir: true
  },
  {
    path: 'privacy-policy.html',
    title: 'Privacy Policy',
    content: `
      <div class="glass" style="padding: 50px; max-width: 900px; margin: 0 auto; line-height: 1.8; color: var(--text-light);">
          <p style="margin-bottom: 30px;">At EVGO Movers we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit our website <a href="https://evgomovers.com/" style="color: var(--primary-green);">https://evgomovers.com/</a> or use our services.</p>
          
          <p style="margin-bottom: 30px;">By accessing or using our website or services, you agree to the terms outlined in this Privacy Policy.</p>

          <div style="margin-bottom: 40px;">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">1. Company Information</h2>
              <p><strong>Business Name:</strong> EVGO Movers</p>
              <p><strong>Business Type:</strong> Logistics & Relocation Services Provider</p>
              <p><strong>Website:</strong> <a href="https://evgomovers.com/" style="color: var(--primary-green);">https://evgomovers.com/</a></p>
              <p><strong>Email:</strong> <a href="mailto:evgo@evgomovers.com" style="color: var(--primary-green);">evgo@evgomovers.com</a></p>
              <p><strong>Registered Address:</strong> 607 Aggarwal Chamber Plaza 1, Netaji Subhash Place Road, New Delhi, North West Delhi - 110034 Delhi India</p>
              <p><strong>Corporate Address:</strong> Building No./Flat No: Plot no 34, Sector 44 Road, SM Sehgal Foundation, Gurugram, Haryana - 122003</p>
          </div>

          <div style="margin-bottom: 40px;">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">2. Services We Offer</h2>
              <p>EVGO Movers provides logistics and relocation services including but not limited to:</p>
              <ul style="list-style: disc; margin-left: 20px; margin-top: 10px;">
                  <li>Household shifting</li>
                  <li>Office relocation</li>
                  <li>Vehicle transportation</li>
                  <li>Packing and unpacking services</li>
                  <li>Storage and warehousing solutions</li>
              </ul>
          </div>

          <div style="margin-bottom: 40px;">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">3. Information We Collect</h2>
              <p>We collect information to provide better services and improve user experience.</p>
              <h3 style="margin-top: 20px; color: var(--white);">a. Personal Information</h3>
              <ul style="list-style: disc; margin-left: 20px; margin-top: 10px;">
                  <li>Full name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Pickup and delivery addresses</li>
                  <li>Any additional details shared for service fulfillment</li>
              </ul>
              <h3 style="margin-top: 20px; color: var(--white);">b. Service-Related Information</h3>
              <ul style="list-style: disc; margin-left: 20px; margin-top: 10px;">
                  <li>Type of goods/items to be moved</li>
                  <li>Service preferences</li>
                  <li>Booking details and transaction records</li>
              </ul>
              <h3 style="margin-top: 20px; color: var(--white);">c. Technical & Usage Data</h3>
              <ul style="list-style: disc; margin-left: 20px; margin-top: 10px;">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and interaction data</li>
              </ul>
          </div>

          <div style="margin-bottom: 40px;">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">4. How We Use Your Information</h2>
              <p>We use your data for the following purposes:</p>
              <ul style="list-style: disc; margin-left: 20px;">
                  <li>To process bookings and deliver services</li>
                  <li>To communicate service updates, confirmations, and support</li>
                  <li>To improve website functionality and customer experience</li>
                  <li>To generate invoices and maintain transaction records</li>
                  <li>To comply with legal obligations</li>
                  <li>To prevent fraud and ensure security</li>
              </ul>
          </div>

          <div style="margin-bottom: 40px;">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">5. Data Sharing and Disclosure</h2>
              <p>We do not sell your personal information. However, we may share your data with:</p>
              <ul style="list-style: disc; margin-left: 20px;">
                  <li>Trusted service partners (drivers, vendors) for execution</li>
                  <li>Payment service providers for secure transactions</li>
                  <li>Government or legal authorities if required by law</li>
                  <li>Technology providers for operational purposes</li>
              </ul>
          </div>

          <div style="margin-bottom: 40px;">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">6. Cookies</h2>
              <p>Our website uses cookies to enhance user experience and analyze traffic. You can control or disable cookies through your browser settings.</p>
          </div>

          <div style="margin-bottom: 40px;">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">7. Data Security</h2>
              <p>We implement appropriate technical measures to protect your data, including secure servers and restricted access. While we strive for absolute protection, no system is 100% secure.</p>
          </div>

          <div style="margin-bottom: 40px;">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">8. Data Retention</h2>
              <p>We retain your personal data only for as long as necessary to fulfill service obligations, maintain legal records, and resolve disputes.</p>
          </div>

          <div style="margin-bottom: 40px;">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">9. Your Rights</h2>
              <p>You have the right to access, correct, or request deletion of your data. Contact us via email to exercise these rights.</p>
          </div>

          <div style="margin-bottom: 40px;">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">10. Third-Party Links</h2>
              <p>We are not responsible for the privacy practices of third-party websites linked on our site.</p>
          </div>

          <div style="margin-bottom: 40px;">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">11. Children's Privacy</h2>
              <p>Our services are intended for individuals 18+ and we do not knowingly collect data from minors.</p>
          </div>

          <div style="margin-bottom: 40px;">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">12. Changes to This Policy</h2>
              <p>Updates to this policy will be posted on this page. Continued use of our services implies acceptance.</p>
          </div>

          <div style="margin-bottom: 40px; border: 1px solid var(--primary-green); padding: 20px; border-radius: 12px; background: rgba(0, 255, 136, 0.05);">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">13. Grievance Redressal</h2>
              <p>For any concerns regarding privacy or data usage, you may contact:</p>
              <p><strong>Grievance Office:</strong> Support Team</p>
              <p><strong>Email:</strong> <a href="mailto:evgo@evgomovers.com" style="color: var(--primary-green);">evgo@evgomovers.com</a></p>
              <p><strong>Address:</strong> Plot no 34, Sector 44 Road, Gurugram, Haryana - 122003</p>
          </div>

          <div style="margin-bottom: 40px;">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">14. Governing Law</h2>
              <p>This Privacy Policy shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in New Delhi.</p>
          </div>

          <div id="consent" style="margin-bottom: 40px;">
              <h2 style="color: var(--primary-green); margin-bottom: 20px;">15. Consent</h2>
              <p>By using our website or services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</p>
          </div>
      </div>
    `
  }
];

pages.forEach(page => {
  const filePath = path.join(__dirname, page.path);
  const fileContent = template(page.title, page.content, page.isSubdir, page.heroCta || '');
  fs.writeFileSync(filePath, fileContent);
  console.log('Created:', filePath);
});
