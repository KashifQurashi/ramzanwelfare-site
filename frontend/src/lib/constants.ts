import {
  NavLink,
  ImpactStat,
  Initiative,
  DonationCause,
  Testimonial,
  BlogPost,
  MediaItem,
  NewsItem,
} from "@/types";

export const siteConfig = {
  name: "Ramzan Welfare International Trust",
  tagline: "Pakistan's Largest Healthcare Welfare Organization",
  description:
    "A professionally managed healthcare organization delivering free, high-quality medical services across Pakistan. With a robust operational infrastructure spanning 50+ medical centers, we provide General OPD, Child Healthcare, Women Health, Vaccination, Laboratory Diagnostics, and Emergency Care to underserved communities — serving over 500,000 patients annually with measurable impact and full financial transparency.",
  email: "info@ramzanwelfare.com",
  phone: "+92 21 111 729 526",
  whatsapp: "+923111729526",
  address: "A-25, Bahadurabad Chowrangi Karachi, Pakistan",
  social: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    tiktok: "https://tiktok.com",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "#",
    children: [
      { label: "Introduction", href: "/about" },
      { label: "Bank Details", href: "/bank-details" },
    ],
  },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "General OPD", href: "/services/general-opd" },
      { label: "Child Healthcare", href: "/services/child-healthcare" },
      { label: "Women Health", href: "/services/women-health" },
      { label: "Vaccination", href: "/services/vaccination" },
      { label: "Laboratory Tests", href: "/services/laboratory-tests" },
      { label: "Emergency Care", href: "/services/emergency-care" },
    ],
  },
  {
    label: "Media",
    href: "#",
    children: [
      { label: "Blogs", href: "/blogs" },
      { label: "Media Updates", href: "/media" },
      { label: "News", href: "/news" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

export const impactStats: ImpactStat[] = [
  { value: "500,000+", label: "Patients Treated Annually" },
  { value: "50,000+", label: "Children Vaccinated Per Year" },
  { value: "100,000+", label: "Women Health Consultations" },
  { value: "200,000+", label: "Diagnostic Tests Conducted" },
];

export const initiatives: Initiative[] = [
  {
    title: "General OPD",
    description: "High-volume outpatient department delivering free primary care consultations with qualified physicians. Our streamlined patient flow ensures minimal wait times and maximum throughput.",
    image: "/images/general-opd.png",
    stat: "150,000+",
    statLabel: "Annual Consultations",
    category: "medical",
  },
  {
    title: "Child Healthcare",
    description: "Comprehensive pediatric care program encompassing preventive care, immunizations, growth monitoring, and nutritional interventions for children under 16.",
    image: "/images/child-healthcare.png",
    stat: "50,000+",
    statLabel: "Children Served Annually",
    category: "medical",
  },
  {
    title: "Women Health",
    description: "Dedicated women's health program offering prenatal and postnatal care, gynecological services, family planning, and breast cancer screening in a private, dignified setting.",
    image: "/images/women-health.png",
    stat: "100,000+",
    statLabel: "Consultations Annually",
    category: "medical",
  },
  {
    title: "Vaccination",
    description: "Large-scale immunization program aligned with WHO EPI standards. Our cold-chain compliant infrastructure ensures vaccine efficacy from procurement to administration.",
    image: "/images/vaccination.png",
    stat: "200,000+",
    statLabel: "Vaccines Administered",
    category: "medical",
  },
  {
    title: "Laboratory Tests",
    description: "Fully equipped diagnostic laboratory offering a comprehensive menu of clinical tests including hematology, biochemistry, radiology, and cardiac diagnostics at no cost.",
    image: "/images/laboratory-tests.png",
    stat: "300,000+",
    statLabel: "Tests Conducted Annually",
    category: "medical",
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency response unit with a fleet of fully equipped ambulances, trauma bays, and trained emergency medical staff serving critical patients around the clock.",
    image: "/images/emergency-care.png",
    stat: "25,000+",
    statLabel: "Emergencies Handled",
    category: "medical",
  },
];

export const donationCauses: DonationCause[] = [
  {
    title: "General OPD Support",
    description: "Support free outpatient consultations and basic medical care for underprivileged patients.",
    image: "/images/general-opd.png",
    slug: "/donate/general-opd",
    category: "medical",
  },
  {
    title: "Child Healthcare Fund",
    description: "Help provide free pediatric consultations, immunizations, and nutrition support for children.",
    image: "/images/child-healthcare.png",
    slug: "/donate/child-healthcare",
    category: "medical",
  },
  {
    title: "Women Health Program",
    description: "Support specialized healthcare services for women including prenatal and postnatal care.",
    image: "/images/women-health.png",
    slug: "/donate/women-health",
    category: "medical",
  },
  {
    title: "Vaccination Drive",
    description: "Fund free vaccination programs to protect children and families from preventable diseases.",
    image: "/images/vaccination.png",
    slug: "/donate/vaccination",
    category: "medical",
  },
  {
    title: "Laboratory Services",
    description: "Support free diagnostic services including blood tests, X-rays, and ultrasound for the needy.",
    image: "/images/laboratory-tests.png",
    slug: "/donate/laboratory-tests",
    category: "medical",
  },
  {
    title: "Emergency Care Fund",
    description: "Help provide 24/7 emergency medical services, ambulances, and trauma care.",
    image: "/images/emergency-care.png",
    slug: "/donate/emergency-care",
    category: "medical",
  },
  {
    title: "Qurbani 2026",
    description: "Perform your Qurbani and share its blessings with those in need.",
    image: "/images/qurbani-cover.jpg",
    slug: "/qurbani",
    category: "general",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Khalid Mehmood",
    role: "Medical Director, City Hospital",
    content:
      "Ramzan Welfare Trust is doing exceptional work in providing free healthcare to the underprivileged. Their dedication to serving humanity through quality medical services is truly commendable. From General OPD to emergency care, they are making a real difference in countless lives.",
    image: "/images/testimonial-1.webp",
    rating: 5,
    date: "1 Week Ago",
  },
  {
    name: "Fatima Hassan",
    role: "Community Leader, Lyari",
    content:
      "The free medical camps and vaccination drives organized by Ramzan Welfare Trust have been a blessing for our community. Thousands of children have been vaccinated and countless patients have received free treatment. Their healthcare services are truly life-changing for the underprivileged.",
    image: "/images/testimonial-2.webp",
    rating: 5,
    date: "2 Weeks Ago",
  },
  {
    name: "Dr. Ayesha Khan",
    role: "Pediatrician, Children's Medical Center",
    content:
      "The child healthcare program run by Ramzan Welfare Trust sets a benchmark for community health initiatives. Their systematic approach to pediatric care and vaccination drives has significantly reduced preventable diseases in our catchment area.",
    image: "/images/testimonial-3.webp",
    rating: 5,
    date: "3 Weeks Ago",
  },
  {
    name: "Mohammad Rizwan",
    role: "District Health Officer",
    content:
      "Partnering with Ramzan Welfare Trust for our district-wide vaccination campaign was seamless. Their operational efficiency and commitment to healthcare delivery made a measurable impact on our immunization targets.",
    image: "/images/testimonial-4.webp",
    rating: 4,
    date: "1 Month Ago",
  },
  {
    name: "Sadia Batool",
    role: "Beneficiary, Women Health Program",
    content:
      "The women health screening camp detected my condition early and I received free treatment through their network. The quality of care and the dignity with which they treat every patient is remarkable.",
    image: "/images/testimonial-5.webp",
    rating: 5,
    date: "1 Month Ago",
  },
  {
    name: "Col. (R) Tariq Mahmood",
    role: "Trustee, Al-Khidmat Foundation",
    content:
      "Ramzan Welfare Trust's laboratory and diagnostic services operate at par with any private facility. Their commitment to providing free, quality healthcare to those who cannot afford it is a model worth replicating across the country.",
    image: "/images/testimonial-6.webp",
    rating: 5,
    date: "2 Months Ago",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Free Medical Camp Serves 5,000 Patients in Rural Areas",
    excerpt:
      "Our mobile medical team served over 5,000 patients in remote rural areas with free consultations, medicines, and lab tests.",
    content: "Ramzan Welfare International Trust organized a landmark free medical camp in the remote rural areas of Sindh, bringing essential healthcare services to over 5,000 underserved patients. The camp was set up with 15 consultation rooms, a temporary laboratory, and a pharmacy dispensing free medicines.\n\nOur team of 25 doctors including general physicians, pediatricians, and gynecologists provided consultations throughout the day. Patients received free diagnostic tests including blood sugar screening, malaria testing, and basic blood work.\n\nOver 2,000 children were screened for malnutrition and referred to our ongoing nutrition support program. The camp also distributed 3,000 mosquito nets to prevent malaria in the region.\n\nThis initiative is part of our commitment to bridging the healthcare gap between urban and rural communities. We plan to conduct similar camps monthly across different underserved regions.",
    image: "https://pixnio.com/free-images/science/medical-science/female-doctors-in-suits-in-pakistan.jpg",
    date: "1/5/2026",
    slug: "free-medical-camp-rural-areas",
    category: "Medical Camp",
    author: "Dr. Imran Ali",
    readTime: "3 min read",
  },
  {
    id: "2",
    title:
      "Vaccination Drive Protects 10,000 Children from Preventable Diseases",
    excerpt:
      "Our latest vaccination campaign successfully immunized 10,000 children against measles, polio, and other preventable diseases.",
    content: "In collaboration with the district health authority, Ramzan Welfare International Trust completed a month-long vaccination drive that successfully immunized 10,000 children across 50 locations. The campaign targeted children under five years of age who had missed their routine immunization doses.\n\nOur mobile vaccination teams visited remote villages, urban slums, and school campuses to ensure maximum coverage. Vaccines administered included Measles, Polio, Pentavalent, PCV, and Rotavirus following the EPI schedule.\n\nEach vaccinated child received a digital vaccination record card, and parents were educated about the importance of completing the full immunization schedule. The drive also trained 100 community health workers to identify and refer children with incomplete vaccination status.\n\nThis achievement brings us closer to our goal of zero preventable childhood diseases in our operational areas.",
    image: "https://pixnio.com/free-images/science/medical-science/baby-receiving-his-scheduled-vaccine.jpg",
    date: "1/5/2026",
    slug: "vaccination-drive-protects-children",
    category: "Vaccination",
    author: "Dr. Fatima Noor",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Women Health Awareness Camp: A Huge Success",
    excerpt:
      "Our women health awareness camp provided free gynecological checkups, breast cancer screening, and health education to over 2,000 women.",
    content: "Ramzan Welfare International Trust organized a comprehensive Women Health Awareness Camp at our main medical center, serving over 2,000 women from low-income households. The camp focused on preventive healthcare and early detection of common women's health issues.\n\nServices provided included free gynecological consultations, breast cancer screening through clinical breast examination, cervical cancer screening, and basic lab tests including hemoglobin and urine analysis. Health education sessions covered family planning, prenatal care, hygiene, and nutrition.\n\nA dedicated team of female doctors and paramedics ensured a comfortable and private environment for all patients. Over 500 women were counseled on family planning options, and 200 women were referred for further diagnostic workup.\n\nThe camp also distributed hygiene kits and nutritional supplements to pregnant and lactating women. We aim to make this a quarterly program.",
    image: "https://pixnio.com/free-images/science/medical-science/this-woman-talks-to-a-female-doctor-for-her-health-care-and-family-planning-needs.jpg",
    date: "29/4/2026",
    slug: "women-health-awareness-camp",
    category: "Women Health",
    author: "Dr. Sana Tariq",
    readTime: "3 min read",
  },
  {
    id: "4",
    title: "Emergency Ambulance Service Now Available 24/7",
    excerpt:
      "We have launched a 24/7 free emergency ambulance service to provide timely medical transport for critical patients.",
    content: "Ramzan Welfare International Trust has launched a 24/7 free emergency ambulance service to serve the community with timely medical transport. The service is operational across our network of 50+ medical centers and covers a radius of 20 kilometers from each center.\n\nEach ambulance is equipped with basic life support equipment including oxygen cylinders, stretchers, first aid kits, and emergency medications. Trained paramedics and drivers are on standby 24 hours a day, 365 days a year.\n\nThe service can be accessed through our dedicated emergency helpline. Upon receiving a call, the nearest ambulance is dispatched within minutes. The service is completely free of charge for all patients.\n\nIn the first week of operation, we successfully transported over 100 patients to nearby hospitals and our own medical centers. This service is expected to significantly reduce mortality rates in emergency situations where timely transport is critical.",
    image: "https://pixnio.com/free-images/science/medical-science/immunization-of-children-in-doctors-office.jpg",
    date: "29/4/2026",
    slug: "emergency-ambulance-24-7",
    category: "Emergency",
    author: "Ahmed Raza",
    readTime: "3 min read",
  },
];

export const mediaItems: MediaItem[] = [
  {
    id: "1",
    title: "Free Health Screening Camp – Sialkot",
    description: "Annual health screening camp providing free check-ups, eye screenings, and hepatitis tests to school children and community members.",
    image: "https://pixnio.com/free-images/science/medical-science/female-doctors-in-suits-in-pakistan.jpg",
    date: "09/5/2025",
    url: "https://youtube.com/watch?v=5-P5AoLobk8",
    type: "video",
    duration: "1:29",
    videoId: "5-P5AoLobk8",
  },
  {
    id: "2",
    title: "Quality Diagnostic Labs – Karachi",
    description: "Baitussalam Laboratories providing free and subsidized diagnostic services including OPD, X-rays, ultrasounds across 7+ locations in Karachi.",
    image: "https://pixnio.com/free-images/science/medical-science/this-woman-talks-to-a-female-doctor-for-her-health-care-and-family-planning-needs.jpg",
    date: "07/3/2026",
    url: "https://youtube.com/watch?v=NkNUPalcIDA",
    type: "video",
    duration: "2:21",
    videoId: "NkNUPalcIDA",
  },
  {
    id: "3",
    title: "Community Vaccination Drive – Punjab",
    description: "Mobile vaccination teams reaching remote communities to immunize children against preventable diseases across rural Punjab.",
    image: "https://pixnio.com/free-images/science/medical-science/baby-receiving-his-scheduled-vaccine.jpg",
    date: "15/2/2026",
    url: "https://youtube.com/watch?v=5-P5AoLobk8",
    type: "video",
    duration: "1:29",
    videoId: "5-P5AoLobk8",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Free Medical Camp Organized in Remote Village of Tharparkar",
    excerpt: "Our mobile medical team served over 1,200 patients in the remote desert region of Tharparkar with free consultations and medicines.",
    content: "Ramzan Welfare International Trust organized a comprehensive free medical camp in the remote village of Tharparkar, Sindh, serving over 1,200 patients who otherwise lack access to basic healthcare. The camp featured consultations by general physicians, pediatricians, and gynecologists.\n\nFree diagnostic tests including blood sugar screening, malaria testing, and basic blood work were conducted on-site. Over 500 children were screened for malnutrition and provided nutritional supplements.\n\nThe camp also distributed 1,000 mosquito nets and conducted health awareness sessions on hygiene, sanitation, and disease prevention. This initiative is part of our commitment to reaching Pakistan's most underserved communities.",
    image: "https://pixnio.com/free-images/science/medical-science/female-doctors-in-suits-in-pakistan.jpg",
    date: "20/1/2026",
    slug: "medical-camp-tharparkar",
    category: "Medical Camp",
  },
  {
    id: "2",
    title: "Ramzan Welfare Trust Launches New Vaccination Center",
    excerpt: "A dedicated vaccination center has been inaugurated to provide free immunizations following the Expanded Program on Immunization schedule.",
    content: "Ramzan Welfare International Trust has inaugurated a new state-of-the-art vaccination center at our main campus to provide free immunizations to children and families. The center follows the Expanded Program on Immunization (EPI) schedule and is staffed by trained vaccinators.\n\nThe center features proper cold chain storage for vaccines, digital record-keeping, and a reminder system for follow-up doses. Services include BCG, Polio, Pentavalent, PCV, Rotavirus, Measles, and COVID-19 vaccinations.\n\nIn its first month, the center has vaccinated over 3,000 children and aims to serve 15,000 annually. Walk-in appointments are welcome, and vaccination cards are provided for all recipients.",
    image: "https://pixnio.com/free-images/science/medical-science/immunization-of-children-in-doctors-office.jpg",
    date: "15/1/2026",
    slug: "new-vaccination-center",
    category: "Vaccination",
  },
  {
    id: "3",
    title: "Healthcare Services Expanded to 5 New Districts",
    excerpt: "Our network now covers 5 additional districts, bringing quality healthcare within reach of over 500,000 more people across Pakistan.",
    content: "Ramzan Welfare International Trust has expanded its healthcare network to 5 new districts, extending free medical services to over 500,000 additional people. The expansion includes new medical centers offering General OPD, Child Healthcare, Women Health, and Laboratory services.\n\nEach center is equipped with consultation rooms, a pharmacy dispensing free medicines, and basic diagnostic facilities. The expansion was made possible through strategic partnerships with local health authorities and community organizations.\n\nThe new centers are located in districts with the highest need for affordable healthcare, including areas previously identified as healthcare deserts. This brings our total network to 55+ medical centers nationwide.",
    image: "https://pixnio.com/free-images/science/medical-science/this-woman-talks-to-a-female-doctor-for-her-health-care-and-family-planning-needs.jpg",
    date: "10/1/2026",
    slug: "healthcare-expansion",
    category: "Expansion",
  },
  {
    id: "4",
    title: "Emergency Ambulance Fleet Doubled to Serve More Patients",
    excerpt: "With 20 new ambulances added to our fleet, we can now respond to emergencies faster across a wider coverage area.",
    content: "Ramzan Welfare International Trust has doubled its emergency ambulance fleet with the addition of 20 new fully-equipped ambulances. Each ambulance is outfitted with basic life support equipment, oxygen cylinders, stretchers, and emergency medications.\n\nThe expanded fleet now covers all operational districts with a target response time of under 15 minutes in urban areas and 30 minutes in rural areas. Trained paramedics and Emergency Medical Technicians staff each vehicle.\n\nThe 24/7 emergency helpline has also been upgraded with GPS tracking to dispatch the nearest available ambulance. In the first week, the expanded fleet responded to over 500 emergency calls.",
    image: "https://pixnio.com/free-images/people/doctor-with-the-nasal-spray-vaccine.jpg",
    date: "5/1/2026",
    slug: "ambulance-fleet-expansion",
    category: "Emergency",
  },
];

export const donationCategories = [
  { id: "all", label: "All" },
  { id: "medical", label: "Medical Services" },
  { id: "general", label: "General" },
];
