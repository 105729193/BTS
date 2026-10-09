/* =====================================================================
   BUMI TUNGGAL SERVICES SDN. BHD.
   WEBSITE IMAGE & LOGO CONFIGURATION — the ONLY file you need to edit
   =====================================================================

   HOW IT WORKS
   1. Put each photo into its folder under  images/  using the filename
      shown below (e.g. images/hero/hero-image.jpg).
   2. Reload the website. The photo appears in the correct section.
   3. If a file is missing, a clean "Add … Image" placeholder is shown
      at the correct size, so the layout never breaks.

   TO USE A DIFFERENT FILENAME OR FORMAT
   Change the path on the right, e.g.
       heroImage: "images/hero/team-at-site.webp",

   TO CHANGE WHICH PART OF A PHOTO STAYS VISIBLE WHEN CROPPED
   Add or edit  focus: "x% y%"  for that image in SITE_ASSET_INFO below
   (e.g. "75% 50%" keeps the right-hand side of the photo).

   TO HIDE AN IMAGE SLOT'S PHOTO
   Set the path to an empty string:  heroImage: "",

   Accepted formats: .jpg  .jpeg  .png  .webp   (logo: .png or .svg)
   ===================================================================== */

window.SITE_ASSETS = {

  // COMPANY LOGO
  // Upload the real Bumi Tunggal Services logo here (transparent PNG or SVG).
  // Used in: desktop navbar, mobile navbar, footer.
  // If you use an SVG, change this to "images/logo/company-logo.svg".
  companyLogo: "images/logo/company-logo.png",

  // 01. HERO IMAGE
  // Upload the main company/workforce image here.
  // Used in: homepage hero (right-hand panel). Portrait or square crops work best.
  heroImage: "images/hero/hero-image.webp",

  // 02. ABOUT IMAGE
  // Upload a company office / team / company activity image here.
  // Used in: About section, under the incorporation date. Landscape 4:3.
  aboutImage: "images/about/about-image.webp",

  // 03. SERVICES — MAIN IMAGE
  // Upload a wide overview image of the company's services.
  // Used in: top of the "What We Do" section. Wide 21:9.
  servicesMainImage: "images/services/services-main.webp",

  // 04. FOREIGN MANPOWER OUTSOURCING IMAGE
  // Upload a workforce / manpower-related company image here.
  // Used in: "What We Do" row 01. Landscape 16:10.
  manpowerOutsourcingImage: "images/services/manpower-outsourcing.webp",

  // 05. MANPOWER RECRUITMENT IMAGE
  // Upload a recruitment-related image (interviews, selection, briefing).
  // Used in: "What We Do" row 02. Landscape 16:10.
  manpowerRecruitmentImage: "images/services/manpower-recruitment.webp",

  // 06. PROFESSIONAL SERVICES IMAGE
  // Upload an image related to professional / value-added services.
  // Used in: "What We Do" row 03. Landscape 16:10.
  professionalServicesImage: "images/services/professional-services.webp",

  // 07. OUR APPROACH IMAGE
  // Upload an image showing the company's working process or coordination.
  // Used in: "A Structured Approach" section, left column. Landscape 16:10.
  approachImage: "images/approach/approach.webp",

  // 08. NETWORK / PARTNERSHIPS IMAGE
  // Upload an image of partnerships, business meetings or recruitment connections.
  // Used in: "Connected Through Trusted Networks", under the country list. 16:9.
  networkImage: "images/network/network.webp",

  // 09. VALUES IMAGE
  // Upload a people / company image that supports the company values.
  // Used in: "The Principles Behind Our Work". Portrait 4:5 on desktop, 16:9 on mobile.
  valuesImage: "images/values/values.webp",

  // 10. BENEFITS IMAGE
  // Upload an employee / workforce image (e.g. Family Day, training, uniforms).
  // Used in: "Supporting the People Behind the Service", above the benefits grid. 21:9.
  benefitsImage: "images/benefits/benefits.webp",

  // 11. QUALITY IMAGE
  // Upload an image that supports the quality section (staff at work, training).
  // Used in: "Committed to Quality", left column. Landscape 3:2.
  qualityImage: "images/quality/quality.webp",

  // 12. CONTACT / FINAL CTA IMAGE
  // Upload a final company image (office, team, Kuala Lumpur).
  // Used in: Contact section, full width under the contact details. Wide 21:9.
  contactImage: "images/contact/contact.webp",

  // HERO BACKGROUND SLIDER
  // Images that crossfade behind the hero headline, in order.
  // Use any image names from this file. Remove one to drop it, add one to include it.
  heroSlides: ["heroImage", "servicesMainImage", "aboutImage", "contactImage"],

  // WEBSITE ASSETS MANAGER LINK
  // Shows a small "Website assets" link in the footer that opens the preview tool.
  // Set to false before the website goes live.
  showAssetManagerLink: true
};

/* ---------------------------------------------------------------------
   Labels used by placeholders and the Website Assets manager.
   You normally don't need to change anything below this line.
   --------------------------------------------------------------------- */
window.SITE_ASSET_INFO = {
  companyLogo:               { label: "Company logo",                 placeholder: "Add Company Logo",                usedIn: "Desktop navbar, mobile navbar and footer",                 ratio: "auto", recommended: "Transparent PNG or SVG, at least 400 px wide",  alt: "Bumi Tunggal Services Sdn. Bhd." },
  heroImage:                 { label: "Hero image",                   placeholder: "Add Hero Image",                  usedIn: "Homepage hero section",                                    ratio: "5/4",  recommended: "At least 1600 × 1280 px, landscape 5:4",   alt: "Four professionals walking along a Kuala Lumpur street with the Petronas Twin Towers behind them", focus: "50% 60%" },
  aboutImage:                { label: "About image",                  placeholder: "Add About Image",                 usedIn: "About section",                                            ratio: "4/3",  recommended: "At least 1600 × 1200 px, landscape",            alt: "Team reviewing documents together in a meeting room overlooking Kuala Lumpur" },
  servicesMainImage:         { label: "Services main image",          placeholder: "Add Services Main Image",         usedIn: "What We Do section, top",                                  ratio: "21/9", recommended: "At least 2400 × 1030 px, wide landscape",       alt: "Workers in safety vests and office staff walking together with the Kuala Lumpur skyline behind them", focus: "50% 55%" },
  manpowerOutsourcingImage:  { label: "Manpower outsourcing image",   placeholder: "Add Manpower Outsourcing Image",  usedIn: "What We Do, 01 Foreign Manpower Outsourcing",              ratio: "16/10",recommended: "At least 1200 × 750 px, landscape",             alt: "Team of staff in matching navy uniforms standing together in an office" },
  manpowerRecruitmentImage:  { label: "Manpower recruitment image",   placeholder: "Add Manpower Recruitment Image",  usedIn: "What We Do, 02 Manpower Recruitment",                      ratio: "16/10",recommended: "At least 1200 × 750 px, landscape",             alt: "Staff member setting out printed materials on seats in a briefing room" },
  professionalServicesImage: { label: "Professional services image",  placeholder: "Add Professional Services Image", usedIn: "What We Do, 03 Professional Services",                     ratio: "16/10",recommended: "At least 1200 × 750 px, landscape",             alt: "Two business professionals shaking hands across a meeting table" },
  approachImage:             { label: "Approach image",               placeholder: "Add Approach Image",              usedIn: "Our Approach section",                                     ratio: "16/10",recommended: "At least 1200 × 750 px, landscape",             alt: "Six blank cards laid out in sequence on a wooden desk" },
  networkImage:              { label: "Network image",                placeholder: "Add Network Image",               usedIn: "Network & partnerships section",                           ratio: "16/9", recommended: "At least 1600 × 900 px, landscape",             alt: "Night view of Asia with connection lines converging on Kuala Lumpur" },
  valuesImage:               { label: "Values image",                 placeholder: "Add Values Image",                usedIn: "Our Values section",                                       ratio: "4/5",  recommended: "At least 1200 × 1500 px, portrait",             alt: "Smiling staff member in a navy blazer standing in an office", focus: "75% 50%" },
  benefitsImage:             { label: "Benefits image",               placeholder: "Add Benefits Image",              usedIn: "Employee Benefits section",                                ratio: "21/9", recommended: "At least 2400 × 1030 px, wide landscape",       alt: "Uniformed workers at assembly workstations in a bright manufacturing facility", focus: "50% 60%" },
  qualityImage:              { label: "Quality image",                placeholder: "Add Quality Image",               usedIn: "Quality section",                                          ratio: "3/2",  recommended: "At least 1500 × 1000 px, landscape",            alt: "Supervisor with a clipboard reviewing a technician’s work at an electronics bench" },
  contactImage:              { label: "Contact image",                placeholder: "Add Contact Image",               usedIn: "Contact section, above the final call to action",          ratio: "21/9", recommended: "At least 2400 × 1030 px, wide landscape",       alt: "Reception desk with a city view through floor-to-ceiling windows" }
};
