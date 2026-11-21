import './style.css'

const phone = '07760 111212'
const phoneLink = 'tel:07760111212'
const whatsappLink = 'https://wa.me/447760111212'
const logo = '/Northwest_Mobile_Mechanic_Logo.png'
const imageBase = 'https://mobile-jumpstart.co.uk/'

const services = [
  {
    icon: 'bi-lightning-charge-fill',
    title: 'Mobile Jump Starts',
    text: 'Flat battery? We come to you and get you started fast — cars, vans and motorcycles.',
    image: `${imageBase}j1.webp`,
  },
  {
    icon: 'bi-activity',
    title: 'Battery Testing',
    text: 'A complete battery health check and diagnostics to help prevent the next breakdown.',
    image: `${imageBase}bat.jpg`,
  },
  {
    icon: 'bi-battery-charging',
    title: 'Battery Replacement',
    text: 'Need a new battery? We supply and fit quality replacements at competitive prices.',
    image: `${imageBase}rep.jpg`,
  },
  {
    icon: 'bi-sign-turn-right-fill',
    title: 'Roadside Assistance',
    text: "Stranded at the roadside? We'll get to you quickly and get you moving again.",
    image: `${imageBase}rad.jfif`,
  },
  {
    icon: 'bi-alarm-fill',
    title: 'Emergency Response',
    text: "24/7 emergency battery jump starts — we're always on standby when you need us.",
    image: `${imageBase}emer.webp`,
  },
  {
    icon: 'bi-geo-alt-fill',
    title: 'Live Tracking',
    text: 'Track our technician in real time as we make our way to your location.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&auto=format&fit=crop',
  },
]

const serviceDetails = {
  'Mobile Jump Starts': 'Flat battery? We come to you, no matter where you are in the North West. Our professional jump start equipment works on cars, vans, motorcycles and 4x4s. We will have you back on the road in minutes.',
  'Battery Testing': 'Not sure if your battery is failing? Our comprehensive battery testing service checks voltage, cold cranking amps and overall health. We give you an honest assessment and recommend a replacement only if necessary.',
  'Battery Replacement': 'If your battery is beyond saving, we supply and fit high-quality replacements from trusted brands right at your location. No need to visit a garage — we will have you moving again with a fresh battery.',
  'Roadside Assistance': 'Stranded with a flat tyre, minor mechanical issue or locked out? Our roadside assistance team handles a wide range of non-emergency situations and gets you moving safely.',
  'Emergency Response': 'When the unexpected happens, our emergency response team is ready to help. We provide fast, professional assistance to keep you safe and minimise further damage.',
  'Live Tracking': 'Know exactly when help will arrive. Once we dispatch a technician, you receive a real-time tracking link via WhatsApp or SMS so you can watch our progress directly on your phone.',
}

const coverageAreas = [
  { slug: 'hull', name: 'Hull', description: 'Fast battery and roadside help for drivers across Hull and East Yorkshire, from residential streets to the main routes around the city.', region: 'East Yorkshire', focus: 'City and East Yorkshire response' },
  { slug: 'york', name: 'York', description: 'Reliable mobile mechanic support across York and the surrounding villages, with help available at home, work or roadside.', region: 'North Yorkshire', focus: 'York city and surrounding villages' },
  { slug: 'leeds', name: 'Leeds', description: '24/7 jump starts and battery assistance across Leeds, including the city centre, suburbs and major commuter routes.', region: 'West Yorkshire', focus: 'City, suburbs and commuter routes' },
  { slug: 'batley', name: 'Batley', description: 'Local roadside support in Batley for flat batteries, battery testing, replacements and common roadside problems.', region: 'West Yorkshire', focus: 'Batley and nearby communities' },
  { slug: 'oldham', name: 'Oldham', description: 'Rapid mobile mechanic assistance for Oldham drivers, with practical help delivered directly to your location.', region: 'Greater Manchester', focus: 'Oldham and the Pennine edge' },
  { slug: 'halifax', name: 'Halifax', description: 'Trusted roadside help in Halifax and the Calder Valley, helping drivers get moving again without a garage visit.', region: 'West Yorkshire', focus: 'Halifax and Calder Valley' },
  { slug: 'barnsley', name: 'Barnsley', description: 'Fast response battery and roadside services across Barnsley, from town-centre callouts to surrounding villages.', region: 'South Yorkshire', focus: 'Barnsley and surrounding villages' },
  { slug: 'bradford', name: 'Bradford', description: 'Professional mobile battery support across Bradford, with clear pricing and help available around the clock.', region: 'West Yorkshire', focus: 'Bradford and nearby routes' },
  { slug: 'dewsbury', name: 'Dewsbury', description: 'Mobile jump starts and roadside assistance in Dewsbury, delivered by a local team that comes to you.', region: 'West Yorkshire', focus: 'Dewsbury and Kirklees' },
  { slug: 'mirfield', name: 'Mirfield', description: 'Convenient roadside support for Mirfield drivers who need a jump start, battery check or replacement at their location.', region: 'West Yorkshire', focus: 'Mirfield and the surrounding area' },
  { slug: 'harrogate', name: 'Harrogate', description: 'Dependable mobile mechanic help across Harrogate, from residential callouts to journeys passing through the area.', region: 'North Yorkshire', focus: 'Harrogate and nearby routes' },
  { slug: 'sheffield', name: 'Sheffield', description: '24/7 mobile jump starts and roadside support across Sheffield, including the city, suburbs and surrounding roads.', region: 'South Yorkshire', focus: 'City, suburbs and surrounding roads' },
  { slug: 'wakefield', name: 'Wakefield', description: 'Quick, professional battery and roadside help for Wakefield drivers, available day or night.', region: 'West Yorkshire', focus: 'Wakefield and the five towns' },
  { slug: 'castleford', name: 'Castleford', description: 'Local mobile assistance in Castleford for flat batteries, battery replacements and everyday roadside problems.', region: 'West Yorkshire', focus: 'Castleford and nearby routes' },
  { slug: 'manchester', name: 'Manchester', description: 'Fast roadside response across Manchester, with technicians ready to come to your home, workplace or roadside location.', region: 'Greater Manchester', focus: 'Greater Manchester response' },
  { slug: 'heckmondwike', name: 'Heckmondwike', description: 'Reliable jump start and battery assistance in Heckmondwike, with a clear price before any work begins.', region: 'West Yorkshire', focus: 'Heckmondwike and Spen Valley' },
  { slug: 'huddersfield', name: 'Huddersfield', description: 'Mobile mechanic support across Huddersfield and the surrounding hills, helping drivers get safely back on the road.', region: 'West Yorkshire', focus: 'Huddersfield and the Colne Valley' },
  { slug: 'pontefract-wf8', name: 'Pontefract WF8', description: '24/7 roadside assistance for Pontefract and WF8, with fast help for batteries, jump starts and minor roadside issues.', region: 'West Yorkshire', focus: 'Pontefract and WF8' },
  { slug: 'yorkshire-the-humber', name: 'Yorkshire & The Humber', description: 'Regional mobile mechanic coverage across Yorkshire and The Humber, bringing roadside support to towns, cities and connecting routes.', region: 'Regional coverage', focus: 'Yorkshire and The Humber response' },
]

const galleryImages = [
  { image: `${imageBase}j1.webp`, title: 'Mobile jump starts', text: 'Professional equipment, delivered to your location.' },
  { image: `${imageBase}bat.jpg`, title: 'Battery testing', text: 'Clear diagnostics before you spend a penny.' },
  { image: `${imageBase}rep.jpg`, title: 'Battery replacement', text: 'Supply, fit and disposal handled on site.' },
  { image: `${imageBase}rad.jfif`, title: 'Roadside assistance', text: 'Practical help when your journey stops.' },
  { image: `${imageBase}emer.webp`, title: 'Emergency response', text: 'A calm, professional response around the clock.' },
  { image: `${imageBase}banner.avif`, title: 'Ready to roll', text: 'Our mobile team covers the North West and beyond.' },
  { image: `${imageBase}img3.jpeg`, title: 'Vehicle recovery', text: 'Safe transport for cars, vans, motorcycles and 4x4s.' },
  { image: `${imageBase}abt.jpeg`, title: 'Local technicians', text: 'Friendly service from a trained roadside team.' },
  { image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&auto=format&fit=crop', title: 'Live updates', text: 'Stay informed while your technician is on the way.' },
]

const testimonials = [
  ['"Battery died in the middle of nowhere. These guys sorted me out in no time. Life savers!"', 'James T.', 'Manchester'],
  ['"The technician was kind, quick and had me started in 15 minutes. Thank you!"', 'Michelle R.', 'Liverpool'],
  ['"Fair price, quick service and really nice people. I will definitely use them again."', 'David K.', 'Preston'],
  ['"Absolutely brilliant service. They were with me in 20 minutes and so professional."', 'Sarah M.', 'Bolton'],
]

function header(activePage) {
  const links = [
    ['Home', '/', 'home'],
    ['About Us', '/about.html', 'about'],
    ['Services', '/services.html', 'services'],
    ['Areas', '/areas.html', 'areas'],
    ['Gallery', '/gallery.html', 'gallery'],
    ['Contact', '/contact.html', 'contact'],
  ]

  return `
    <nav class="navbar navbar-expand-lg site-nav" aria-label="Main navigation">
      <div class="container">
        <a class="navbar-brand" href="/" aria-label="Northwest Mobile Mechanic home">
          <img src="${logo}" alt="Northwest Mobile Mechanic" />
        </a>
        <button class="navbar-toggler" type="button" aria-controls="siteNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="siteNav">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            ${links.map(([label, href, page]) => `<li class="nav-item"><a class="nav-link ${activePage === page ? 'active' : ''}" href="${href}">${label}</a></li>`).join('')}
            <li class="nav-item ms-lg-3 mt-3 mt-lg-0"><a class="btn btn-primary nav-cta phone-cta" href="${phoneLink}"><span class="phone-cta-icon"><i class="bi bi-telephone-fill"></i></span><span>${phone}</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
  `
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-5">
            <a class="footer-brand" href="/"><img src="${logo}" alt="Northwest Mobile Mechanic" /></a>
            <p class="footer-copy">24/7 mobile jump starts and roadside assistance across the North West. Jump starts, battery testing and battery replacement — we're here when you need us most.</p>
            <div class="footer-socials">
              <a href="${whatsappLink}" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
              <a href="${phoneLink}" aria-label="Phone"><i class="bi bi-telephone-fill"></i></a>
              <a href="/contact.html" aria-label="Contact"><i class="bi bi-envelope-fill"></i></a>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <h3>Contact info</h3>
            <ul class="footer-list">
              <li><i class="bi bi-telephone-fill"></i><a href="${phoneLink}">${phone}</a></li>
              <li><i class="bi bi-whatsapp"></i><a href="${whatsappLink}">WhatsApp us</a></li>
              <li><i class="bi bi-geo-alt-fill"></i><span>North West England</span></li>
              <li><i class="bi bi-clock-fill"></i><span>Open 24/7</span></li>
            </ul>
          </div>
          <div class="col-6 col-lg-2">
            <h3>Quick links</h3>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about.html">About us</a></li>
              <li><a href="/services.html">Services</a></li>
              <li><a href="/areas.html">Areas we cover</a></li>
              <li><a href="/gallery.html">Gallery</a></li>
              <li><a href="/contact.html">Contact</a></li>
              <li><a href="/#services">Our services</a></li>
            </ul>
          </div>
          <div class="col-lg-2">
            <h3>Need help?</h3>
            <p class="footer-availability">Our technicians are standing by now.</p>
            <a class="footer-call" href="${phoneLink}">Call ${phone}</a>
          </div>
        </div>
        <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>© 2025 Northwest Mobile Mechanic. All rights reserved.</span>
          <span>Fast help. Honest service. Back on the road.</span>
        </div>
      </div>
    </footer>
  `
}

function pageIntro(eyebrow, title, text) {
  return `
    <section class="page-hero">
      <div class="container position-relative">
        <div class="page-hero-content">
          <span class="eyebrow eyebrow-light">${eyebrow}</span>
          <h1>${title}</h1>
          <p>${text}</p>
        </div>
      </div>
    </section>
  `
}

function serviceCards() {
  return services.map((service) => `
    <article class="service-card">
      <div class="service-image-wrap"><img src="${service.image}" alt="${service.title}" loading="lazy" /></div>
      <div class="service-card-body">
        <div class="service-icon"><i class="bi ${service.icon}"></i></div>
        <h3>${service.title}</h3>
        <p>${service.text}</p>
        <a href="/contact.html" class="text-link">Get help <i class="bi bi-arrow-up-right"></i></a>
      </div>
    </article>
  `).join('')
}

function requestForm() {
  return `
    <form class="request-form" data-form-type="request">
      <div class="form-heading"><span class="form-kicker">Need a hand?</span><h2>Request a jump start</h2><p>Send your details and we'll get back to you right away.</p></div>
      <div class="row g-3">
        <div class="col-md-6"><label for="request-name">Your name</label><input id="request-name" name="name" type="text" placeholder="Jane Smith" required /></div>
        <div class="col-md-6"><label for="request-phone">Phone number</label><input id="request-phone" name="phone" type="tel" placeholder="07xxx xxxxxx" required /></div>
        <div class="col-md-6"><label for="request-location">Your location</label><input id="request-location" name="location" type="text" placeholder="Town or postcode" required /></div>
        <div class="col-md-6"><label for="request-vehicle">Vehicle</label><input id="request-vehicle" name="vehicle" type="text" placeholder="Make and model" required /></div>
        <div class="col-12"><button class="btn btn-primary w-100" type="submit">Send request <i class="bi bi-arrow-right ms-2"></i></button></div>
      </div>
      <div class="form-status" role="status" aria-live="polite"></div>
    </form>
  `
}

function homePage() {
  return `
    ${header('home')}
    <main>
      <section class="hero-section">
        <div class="hero-image"></div>
        <div class="container hero-content">
          <div class="row align-items-center gy-5">
            <div class="col-lg-7">
              <span class="eyebrow eyebrow-light"><span class="pulse-dot"></span>North West roadside assistance</span>
              <h1>Flat battery?<br /><em>We'll get you moving.</em></h1>
              <p class="hero-lede">Rapid-response mobile jump starts and roadside assistance, wherever you are. Professional help at your location, day or night.</p>
              <div class="hero-actions">
                <a class="btn btn-primary btn-lg phone-cta" href="${phoneLink}"><span class="phone-cta-icon"><i class="bi bi-telephone-fill"></i></span><span>${phone}</span></a>
                <a class="btn btn-outline-light btn-lg" href="${whatsappLink}"><i class="bi bi-whatsapp me-2"></i>WhatsApp us</a>
              </div>
              <div class="hero-trust"><span><i class="bi bi-check-circle-fill"></i> Average arrival under 25 mins</span><span><i class="bi bi-check-circle-fill"></i> Fully insured service</span></div>
            </div>
            <div class="col-lg-5">${requestForm()}</div>
          </div>
        </div>
      </section>

      <section class="intro-section section-space">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col-lg-6">
              <span class="eyebrow">Your local mobile experts</span>
              <h2>Reliable help when your car says <em>no.</em></h2>
              <p class="lead-copy">Based in the North West, we provide fast, reliable mobile jump starts and battery services across the region. From a simple jump start to a full battery replacement, our modern fleet and trained technicians are ready 24/7.</p>
              <a class="text-link large-link" href="/about.html">More about our team <i class="bi bi-arrow-up-right"></i></a>
              <div class="mini-stats"><div><strong>24/7</strong><span>Always available</span></div><div><strong>25<span>min</span></strong><span>Typical arrival</span></div><div><strong>100%</strong><span>Fully insured</span></div></div>
            </div>
            <div class="col-lg-6">
              <div class="image-collage"><img class="main-collage-image" src="${imageBase}abt.jpeg" alt="Northwest Mobile Mechanic technician at work" loading="lazy" /><div class="collage-badge"><i class="bi bi-shield-check"></i><span>Trusted<br />local team</span></div><div class="orange-block"></div></div>
            </div>
          </div>
        </div>
      </section>

      <section class="towing-section section-space section-dark">
        <div class="container"><div class="row align-items-center g-5"><div class="col-lg-6 order-lg-2"><img class="rounded-image" src="${imageBase}img3.jpeg" alt="Vehicle recovery and roadside assistance" loading="lazy" /></div><div class="col-lg-6 order-lg-1"><span class="eyebrow eyebrow-light">More than a jump start</span><h2>Reliable vehicle towing &amp; recovery</h2><p class="dark-copy">Stranded or need a vehicle moved? Our modern flatbed and wheel-lift trucks are ready 24/7 to transport your car, van, motorcycle or 4x4 anywhere across the North West.</p><a class="btn btn-outline-light" href="/contact.html">Ask about recovery <i class="bi bi-arrow-right ms-2"></i></a></div></div></div>
      </section>

      <section class="services-section section-space" id="services">
        <div class="container"><div class="section-heading text-center"><span class="eyebrow">What we do</span><h2>Help for every roadside moment</h2><p>Professional mobile battery and roadside services across the North West.</p></div><div class="services-grid">${serviceCards()}</div></div>
      </section>

      <section class="why-section section-space"><div class="container"><div class="section-heading text-center"><span class="eyebrow">The Northwest difference</span><h2>Why drivers choose us</h2></div><div class="row g-4 justify-content-center"><div class="col-md-4"><div class="feature-item"><div class="feature-number">01</div><i class="bi bi-lightning-charge-fill"></i><h3>Rapid response</h3><p>Our local technicians aim to arrive in under 25 minutes, so you're not left waiting.</p></div></div><div class="col-md-4"><div class="feature-item"><div class="feature-number">02</div><i class="bi bi-shield-check"></i><h3>Fully insured</h3><p>Your vehicle is covered throughout the service, with every job handled professionally.</p></div></div><div class="col-md-4"><div class="feature-item"><div class="feature-number">03</div><i class="bi bi-map-fill"></i><h3>Local knowledge</h3><p>Our North West team knows the roads, shortcuts and communities we serve.</p></div></div></div></div></section>

      <section class="testimonial-section section-space"><div class="container"><div class="section-heading d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3"><div><span class="eyebrow">Kind words</span><h2>What our customers say</h2></div><div class="rating"><span class="stars">★★★★★</span><strong>5.0</strong><span>from local drivers</span></div></div><div class="row g-4">${testimonials.map(([quote, name, place]) => `<div class="col-md-6 col-xl-3"><figure class="testimonial-card"><div class="quote-mark">“</div><blockquote>${quote}</blockquote><figcaption><strong>${name}</strong><span>${place}</span></figcaption></figure></div>`).join('')}</div></div></section>

      <section class="coverage-section" id="areas"><div class="container"><div class="coverage-card"><div class="row align-items-center g-4"><div class="col-lg-7"><span class="eyebrow">Where we go</span><h2>Covering the North West<br /><em>and beyond.</em></h2><p>Wherever you are, we'll reach you fast. We cover key towns and cities across Yorkshire, Greater Manchester and the surrounding areas. Fleet and trade accounts welcome.</p><div class="coverage-tags homepage-area-tags">${coverageAreas.map((area) => `<a href="/areas/${area.slug}.html">${area.name}</a>`).join('')}</div><a class="btn btn-primary" href="/areas.html">Check your area <i class="bi bi-arrow-right ms-2"></i></a></div><div class="col-lg-5"><img src="${imageBase}banner.avif" alt="Northwest Mobile Mechanic vehicle on the road" loading="lazy" /></div></div></div></div></section>

      <section class="final-cta section-space"><div class="container text-center"><span class="eyebrow eyebrow-light">Don't get stuck</span><h2>Flat battery? Need a jump start now?</h2><p>Northwest Mobile Mechanic is one call or WhatsApp away — 24 hours a day.</p><div class="hero-actions justify-content-center"><a class="btn btn-primary btn-lg" href="${phoneLink}"><i class="bi bi-telephone-fill me-2"></i>Call ${phone}</a><a class="btn btn-outline-light btn-lg" href="${whatsappLink}"><i class="bi bi-whatsapp me-2"></i>Send a WhatsApp</a></div></div></section>
    </main>
    ${footer()}
  `
}

function servicesPage() {
  return `
    ${header('services')}
    <main>
      ${pageIntro('Our services', 'The help you need, wherever you are.', 'Complete mobile battery and roadside assistance across the North West — 24 hours a day, 7 days a week.')}
      <section class="service-overview section-space"><div class="container"><div class="row align-items-center g-5"><div class="col-lg-7"><span class="eyebrow">Professional help at your location</span><h2>From a flat battery to a fresh start.</h2><p class="lead-copy">Whether you are stuck outside your home, at work or on the roadside, Northwest Mobile Mechanic brings the equipment and expertise to you. Our trained technicians work on cars, vans, motorcycles and 4x4s across the region.</p><p class="lead-copy">We explain what is needed, confirm the price before dispatch and take care of your vehicle from the moment we arrive.</p></div><div class="col-lg-5"><div class="service-callout"><i class="bi bi-lightning-charge-fill"></i><span class="eyebrow eyebrow-light">Always on standby</span><h3>Fast help, day or night.</h3><p>Call or WhatsApp us and a local technician will be on the way.</p><a class="btn btn-primary" href="${phoneLink}">Call ${phone} <i class="bi bi-arrow-right ms-2"></i></a></div></div></div></div></section>
      <section class="service-details-section section-space"><div class="container"><div class="section-heading text-center"><span class="eyebrow">What we do</span><h2>Roadside support that goes further</h2><p>Every service is designed to get you safe, informed and back on the road.</p></div><div class="service-detail-grid">${services.map((service, index) => `<article class="service-detail-card"><div class="service-detail-image"><img src="${service.image}" alt="${service.title}" loading="lazy" /><span>${String(index + 1).padStart(2, '0')}</span></div><div class="service-detail-body"><div class="service-detail-icon"><i class="bi ${service.icon}"></i></div><h3>${service.title}</h3><p>${serviceDetails[service.title]}</p><a class="text-link" href="/contact.html">Request this service <i class="bi bi-arrow-up-right"></i></a></div></article>`).join('')}</div></div></section>
      <section class="pricing-section section-space"><div class="container"><div class="section-heading text-center"><span class="eyebrow">Clear from the start</span><h2>Transparent pricing</h2><p>No hidden fees and no surprise charges. We confirm your exact price before dispatch.</p></div><div class="pricing-grid"><div class="price-card"><span class="price-label">Jump start</span><strong>From £45</strong><p>Fixed price, any time</p><a href="/contact.html">Request help <i class="bi bi-arrow-up-right"></i></a></div><div class="price-card price-card-featured"><span class="price-label">Battery test</span><strong>From £25</strong><p>Comprehensive health check</p><a href="/contact.html">Book a test <i class="bi bi-arrow-up-right"></i></a></div><div class="price-card"><span class="price-label">Battery replacement</span><strong>From £95</strong><p>Supply, fit and disposal</p><a href="/contact.html">Ask for a quote <i class="bi bi-arrow-up-right"></i></a></div></div><p class="pricing-note">Prices are estimates and may vary depending on vehicle type and battery specification. We always confirm the price before dispatch.</p></div></section>
      <section class="coverage-section services-coverage"><div class="container"><div class="coverage-card"><div class="row align-items-center g-4"><div class="col-lg-7"><span class="eyebrow">We cover the North West</span><h2>Ready to get moving?</h2><p>One call or WhatsApp message is all it takes. We will be there fast, any time of day.</p><div class="coverage-tags"><span>Manchester</span><span>Liverpool</span><span>Preston</span><span>Bolton</span><span>Warrington</span><span>Blackpool</span></div></div><div class="col-lg-5 text-lg-end"><a class="btn btn-primary btn-lg" href="${whatsappLink}"><i class="bi bi-whatsapp me-2"></i>WhatsApp us</a></div></div></div></div></section>
    </main>
    ${footer()}
  `
}

function areasPage() {
  return `
    ${header('areas')}
    <main>
      ${pageIntro('Local coverage', 'Help is closer than you think.', 'Browse your area for 24/7 mobile jump starts, battery services and roadside assistance from Northwest Mobile Mechanic.')}
      <section class="area-directory section-space"><div class="container"><div class="section-heading text-center"><span class="eyebrow">Areas we cover</span><h2>Find your local response team</h2><p>Choose your area to see the roadside support available near you.</p></div><div class="area-directory-grid">${coverageAreas.map((area) => `<a class="area-directory-card" href="/areas/${area.slug}.html"><span class="area-card-region">${area.region}</span><h3>${area.name}</h3><p>${area.focus}</p><span class="text-link">View area <i class="bi bi-arrow-up-right"></i></span></a>`).join('')}</div></div></section>
      <section class="coverage-section area-overview-cta"><div class="container"><div class="coverage-card"><div class="row align-items-center g-4"><div class="col-lg-7"><span class="eyebrow">One team, many roads</span><h2>Wherever you are, we'll reach you fast.</h2><p>Our technicians are strategically located to minimise response times. Fleet and trade accounts are welcome, and every call starts with a clear price and practical advice.</p><a class="btn btn-primary" href="${phoneLink}"><i class="bi bi-telephone-fill me-2"></i>Call ${phone}</a></div><div class="col-lg-5"><img src="${imageBase}banner.avif" alt="Northwest Mobile Mechanic van on the road" loading="lazy" /></div></div></div></div></section>
    </main>
    ${footer()}
  `
}

function areaDetailPage() {
  const area = coverageAreas.find((item) => item.slug === document.body.dataset.area) ?? coverageAreas[0]
  return `
    ${header('areas')}
    <main>
      ${pageIntro('24/7 local coverage', `Mobile mechanic in ${area.name}.`, area.description)}
      <section class="area-detail-section section-space"><div class="container"><div class="row align-items-center g-5"><div class="col-lg-6"><div class="area-detail-image"><img src="${imageBase}j1.webp" alt="Mobile jump start service in ${area.name}" /><span><i class="bi bi-geo-alt-fill"></i>${area.region}</span></div></div><div class="col-lg-6"><span class="eyebrow">${area.focus}</span><h2>Roadside support that comes to you.</h2><p class="lead-copy">Whether you are parked at home, outside work or stuck on the roadside, our trained technicians bring the equipment and advice you need directly to your location in ${area.name}.</p><div class="area-points"><div><i class="bi bi-lightning-charge-fill"></i><span><strong>Jump starts</strong><small>Fast help for flat batteries</small></span></div><div><i class="bi bi-battery-charging"></i><span><strong>Battery services</strong><small>Testing, replacement and fitting</small></span></div><div><i class="bi bi-shield-check"></i><span><strong>Clear pricing</strong><small>Know the price before dispatch</small></span></div><div><i class="bi bi-clock-fill"></i><span><strong>Available 24/7</strong><small>Day, night, weekends and holidays</small></span></div></div><div class="hero-actions"><a class="btn btn-primary" href="${phoneLink}"><i class="bi bi-telephone-fill me-2"></i>Call ${phone}</a><a class="btn btn-outline-dark" href="${whatsappLink}"><i class="bi bi-whatsapp me-2"></i>WhatsApp us</a></div></div></div></div></section>
      <section class="area-service-strip"><div class="container"><div class="row g-4"><div class="col-md-4"><div><span>01</span><h3>Get moving quickly</h3><p>We aim to reach local callouts fast and keep you updated on the way.</p></div></div><div class="col-md-4"><div><span>02</span><h3>All common vehicles</h3><p>Support for cars, vans, motorcycles and 4x4s across ${area.name}.</p></div></div><div class="col-md-4"><div><span>03</span><h3>One call solves it</h3><p>Call or message us and we will guide you through the next step.</p></div></div></div></div></section>
      <section class="nearby-areas section-space"><div class="container"><div class="section-heading d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3"><div><span class="eyebrow">More local coverage</span><h2>Other areas we serve</h2></div><a class="text-link" href="/areas.html">View all areas <i class="bi bi-arrow-up-right"></i></a></div><div class="nearby-area-links">${coverageAreas.filter((item) => item.slug !== area.slug).slice(0, 6).map((item) => `<a href="/areas/${item.slug}.html">${item.name}<i class="bi bi-arrow-up-right"></i></a>`).join('')}</div></div></section>
      <section class="final-cta section-space"><div class="container text-center"><span class="eyebrow eyebrow-light">Stuck in ${area.name}?</span><h2>Let's get you moving again.</h2><p>Northwest Mobile Mechanic is one call or WhatsApp away, 24 hours a day.</p><div class="hero-actions justify-content-center"><a class="btn btn-primary btn-lg" href="${phoneLink}">Call ${phone} <i class="bi bi-arrow-right ms-2"></i></a><a class="btn btn-outline-light btn-lg" href="/contact.html">Send an enquiry <i class="bi bi-arrow-right ms-2"></i></a></div></div></section>
    </main>
    ${footer()}
  `
}

function galleryPage() {
  return `
    ${header('gallery')}
    <main>
      ${pageIntro('Behind the scenes', 'See our team in action.', 'A closer look at the vehicles, tools and roadside support that keep North West drivers moving.')}
      <section class="gallery-section section-space"><div class="container"><div class="section-heading d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3"><div><span class="eyebrow">The Northwest gallery</span><h2>Built for the moments that matter.</h2></div><p class="gallery-heading-copy">From a quick jump start to a full roadside recovery, every job is handled with care and purpose.</p></div><div class="gallery-grid">${galleryImages.map((item, index) => `<figure class="gallery-card ${index === 0 || index === 5 ? 'gallery-card-large' : ''}"><div class="gallery-image-wrap"><img src="${item.image}" alt="${item.title}" loading="lazy" /><span class="gallery-image-number">${String(index + 1).padStart(2, '0')}</span></div><figcaption><h3>${item.title}</h3><p>${item.text}</p></figcaption></figure>`).join('')}</div></div></section>
      <section class="final-cta section-space"><div class="container text-center"><span class="eyebrow eyebrow-light">Need roadside help?</span><h2>Let’s get you moving again.</h2><p>Northwest Mobile Mechanic is ready 24 hours a day, 7 days a week.</p><div class="hero-actions justify-content-center"><a class="btn btn-primary btn-lg" href="${phoneLink}"><i class="bi bi-telephone-fill me-2"></i>Call ${phone}</a><a class="btn btn-outline-light btn-lg" href="${whatsappLink}"><i class="bi bi-whatsapp me-2"></i>WhatsApp us</a></div></div></section>
    </main>
    ${footer()}
  `
}

function aboutPage() {
  return `
    ${header('about')}
    <main>
      ${pageIntro('About our team', 'The people behind the rescue.', 'Your trusted 24/7 mobile battery and roadside assistance partner across the North West.')}
      <section class="about-story section-space"><div class="container"><div class="row align-items-center g-5"><div class="col-lg-6"><div class="about-image-wrap"><img src="${imageBase}abt.jpeg" alt="Northwest Mobile Mechanic technician" /><span class="image-caption"><i class="bi bi-geo-alt-fill"></i> Proudly serving the North West</span></div></div><div class="col-lg-6"><span class="eyebrow">Our story</span><h2>Built on speed, care and reliability.</h2><p class="lead-copy">Northwest Mobile Mechanic was founded with a simple mission: to get you back on the road fast when your battery dies. What started as a single van operation has grown into a trusted mobile battery service covering the region.</p><p>We've invested in advanced diagnostic tools, a modern fleet and continuous training for our technicians. Every call we answer is treated with urgency and care — because we know how frustrating a flat battery can be.</p><div class="about-stats"><div><strong>24/7</strong><span>Availability</span></div><div><strong>5k+</strong><span>Jump starts done</span></div><div><strong>98%</strong><span>Customer satisfaction</span></div><div><strong>&lt;25m</strong><span>Average response</span></div></div></div></div></div></section>
      <section class="values-section section-space"><div class="container"><div class="section-heading text-center"><span class="eyebrow">What drives us</span><h2>Our core values</h2><p>The principles behind every call, every mile and every successful restart.</p></div><div class="row g-4"><div class="col-md-6 col-lg-3"><div class="value-card"><i class="bi bi-shield-check"></i><h3>Safety first</h3><p>Your safety and your vehicle's electrical system are our top priority. Every jump start is performed with care.</p></div></div><div class="col-md-6 col-lg-3"><div class="value-card"><i class="bi bi-receipt"></i><h3>Honesty &amp; transparency</h3><p>No hidden fees and no unnecessary upsells. We give you a clear price before we touch your vehicle.</p></div></div><div class="col-md-6 col-lg-3"><div class="value-card"><i class="bi bi-speedometer2"></i><h3>Speed &amp; efficiency</h3><p>We know you're stuck. Our strategically located vans help us reach you in minutes, not hours.</p></div></div><div class="col-md-6 col-lg-3"><div class="value-card"><i class="bi bi-heart-fill"></i><h3>Customer focus</h3><p>Every call is answered by a real technician who genuinely cares. We're here to help.</p></div></div></div></div></section>
      <section class="final-cta section-space"><div class="container text-center"><span class="eyebrow eyebrow-light">We are standing by</span><h2>Flat battery? Need help right now?</h2><p>Call us or send a WhatsApp and we'll be there fast.</p><div class="hero-actions justify-content-center"><a class="btn btn-primary btn-lg" href="${phoneLink}">Call ${phone} <i class="bi bi-arrow-right ms-2"></i></a><a class="btn btn-outline-light btn-lg" href="${whatsappLink}">WhatsApp us <i class="bi bi-whatsapp ms-2"></i></a></div></div></section>
    </main>
    ${footer()}
  `
}

function contactPage() {
  return `
    ${header('contact')}
    <main>
      ${pageIntro('We are here 24/7', 'Let’s get you moving.', 'Reach out by phone, WhatsApp or send us a message below. A real technician will be ready to help.')}
      <section class="contact-section section-space"><div class="container"><div class="row g-4 g-lg-5"><div class="col-lg-5"><span class="eyebrow">Reach out anytime</span><h2>Help is closer than you think.</h2><p class="lead-copy">Whether you need a jump start, a battery replacement or help at the roadside, our North West team is ready around the clock.</p><div class="contact-details"><a href="${phoneLink}" class="contact-detail"><span class="contact-icon"><i class="bi bi-telephone-fill"></i></span><span><small>Call us 24/7</small><strong>${phone}</strong></span><i class="bi bi-arrow-up-right"></i></a><a href="${whatsappLink}" class="contact-detail"><span class="contact-icon whatsapp-icon"><i class="bi bi-whatsapp"></i></span><span><small>Message on WhatsApp</small><strong>Usually replies in minutes</strong></span><i class="bi bi-arrow-up-right"></i></a><div class="contact-detail"><span class="contact-icon"><i class="bi bi-geo-alt-fill"></i></span><span><small>Service area</small><strong>North West England</strong></span></div><div class="contact-detail"><span class="contact-icon"><i class="bi bi-clock-fill"></i></span><span><small>Opening hours</small><strong>Open 24 hours, 7 days</strong></span></div></div></div><div class="col-lg-7"><div class="contact-form-card"><span class="form-kicker">Send us a message</span><h2>Tell us what’s happening</h2><p>Your enquiry will be sent to our team. We typically respond within minutes.</p><form data-form-type="contact"><div class="row g-3"><div class="col-md-6"><label for="contact-name">Your name</label><input id="contact-name" name="name" type="text" placeholder="Jane Smith" required /></div><div class="col-md-6"><label for="contact-phone">Phone number</label><input id="contact-phone" name="phone" type="tel" placeholder="07xxx xxxxxx" required /></div><div class="col-12"><label for="contact-location">Where are you?</label><input id="contact-location" name="location" type="text" placeholder="Town or postcode" required /></div><div class="col-12"><label for="contact-message">How can we help?</label><textarea id="contact-message" name="message" rows="4" placeholder="Tell us about your vehicle or situation" required></textarea></div><div class="col-12"><button class="btn btn-primary" type="submit">Send enquiry <i class="bi bi-arrow-right ms-2"></i></button></div></div><div class="form-status" role="status" aria-live="polite"></div></form></div></div></div></div></section>
      <section class="map-section"><div class="container"><div class="coverage-card map-card"><div class="row align-items-center g-4"><div class="col-lg-6"><span class="eyebrow">Our service coverage</span><h2>Across the North West.</h2><p>We operate throughout Greater Manchester, Merseyside, Lancashire, Cheshire and the surrounding towns — ready to reach you fast.</p><div class="coverage-tags"><span>Manchester</span><span>Liverpool</span><span>Preston</span><span>Bolton</span><span>Warrington</span><span>Blackpool</span></div></div><div class="col-lg-6"><div class="map-visual"><div class="map-grid"></div><div class="map-pin pin-one"><i class="bi bi-geo-alt-fill"></i><span>Manchester</span></div><div class="map-pin pin-two"><i class="bi bi-geo-alt-fill"></i><span>Liverpool</span></div><div class="map-pin pin-three"><i class="bi bi-geo-alt-fill"></i><span>Preston</span></div><div class="map-route"></div><div class="map-center"><i class="bi bi-lightning-charge-fill"></i></div></div></div></div></div></div></section>
      <section class="final-cta section-space"><div class="container text-center"><span class="eyebrow eyebrow-light">Prefer to talk?</span><h2>Call us for immediate assistance.</h2><p>We're available 24 hours a day, 7 days a week.</p><a class="btn btn-primary btn-lg" href="${phoneLink}"><i class="bi bi-telephone-fill me-2"></i>Call ${phone}</a></div></section>
    </main>
    ${footer()}
  `
}

function bindInteractions() {
  const toggler = document.querySelector('.navbar-toggler')
  const nav = document.querySelector('#siteNav')
  toggler?.addEventListener('click', () => {
    const isOpen = nav?.classList.toggle('show') ?? false
    toggler.setAttribute('aria-expanded', String(isOpen))
  })

  document.querySelectorAll('form[data-form-type]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const formData = new FormData(form)
      const message = [
        'Hello Northwest Mobile Mechanic, I need help.',
        `Name: ${formData.get('name') ?? ''}`,
        `Phone: ${formData.get('phone') ?? ''}`,
        `Location: ${formData.get('location') ?? ''}`,
        `Vehicle: ${formData.get('vehicle') ?? 'Not provided'}`,
        `Details: ${formData.get('message') ?? 'Jump start or roadside assistance required.'}`,
      ].join('\\n')
      window.open(`${whatsappLink}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
      const status = form.querySelector('.form-status')
      if (status) {
        status.className = 'form-status success'
        status.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Your WhatsApp message is ready to send. We will reply as soon as possible.'
      }
      form.reset()
    })
  })
}

const page = document.body.dataset.page
const pageContent = page === 'about' ? aboutPage() : page === 'services' ? servicesPage() : page === 'contact' ? contactPage() : page === 'areas' ? areasPage() : page === 'area-detail' ? areaDetailPage() : page === 'gallery' ? galleryPage() : homePage()
document.querySelector('#app').innerHTML = pageContent
bindInteractions()
