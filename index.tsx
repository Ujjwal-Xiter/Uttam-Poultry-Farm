import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Menu, X, ArrowRight, CheckCircle, Send,
  Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle,
  ShieldCheck, Star, Quote, ChevronDown, ChevronUp,
  Sprout, Egg, Truck, Users, BookOpen, Syringe,
  ShoppingCart, Award, Leaf, Thermometer, DollarSign
} from 'lucide-react';

const BASE = 'http://www.uttampoultryfarm.com';

const HERO_SLIDES = [
  { title: 'Where Quality Poultry Begins', subtitle: 'uttam Poultary Farm', btnText: 'Discover More', btnLink: '#products' },
  { title: 'Where Quality Poultry Begins', subtitle: 'uttam Poultary Farm', btnText: 'Discover More', btnLink: '#products' },
  { title: 'Where Quality Poultry Begins', subtitle: 'uttam Poultary Farm', btnText: 'Discover More', btnLink: '#products' }
];

const PRODUCTS_DATA = [
  {
    name: 'Day Old Kuroiler(Giriraj)',
    description: 'Kuroiler (Giriraj) is a dual-purpose breed known for high egg production and quality meat yield. These day-old chicks are disease-resistant, fast-growing, and adaptable to various farming conditions. Ideal for small-scale and commercial poultry farmers, they provide a cost-effective and sustainable option for boosting farm productivity.',
    price: 'Nrs 50',
    originalPrice: 'Nrs 55',
    validFrom: '01 Jan, 2025',
    validTo: '01 Feb, 2025',
    image: `${BASE}/storage/images/product/172725986920240925_143258.jpg`
  }
];

const SERVICES_DATA = [
  {
    title: 'Wholesale Supply of Poultry Products',
    desc: 'Reliable wholesale supply of premium poultry products, including Day Old Kuroiler (Giriraj) Chicks, with timely delivery across Nepal.',
    icon: <Truck className="w-8 h-8" />,
    bgImg: `${BASE}/storage/images/service/172726160020240925_142858.jpg`,
    iconImg: `${BASE}/storage/images/service/1725187983chicken.png`
  },
  {
    title: 'Poultry Farm Consultancy',
    desc: 'Expert consultancy services to optimize farm setup, management practices, and enhance poultry productivity.',
    icon: <Users className="w-8 h-8" />,
    bgImg: `${BASE}/storage/images/service/172726162620240925_134243.jpg`,
    iconImg: `${BASE}/storage/images/service/1725188012eggs.png`
  },
  {
    title: 'Customized Feeding Solutions',
    desc: 'Tailored feeding solutions designed to meet the specific nutritional needs of your flock for better growth and production.',
    icon: <Sprout className="w-8 h-8" />,
    bgImg: `${BASE}/storage/images/service/172726164720240925_134021.jpg`,
    iconImg: `${BASE}/storage/images/service/1726978519chicken.png`
  },
  {
    title: 'Training and Workshops for Farmers',
    desc: 'Educational training and workshops on best practices in poultry farming to improve farm yields and operations.',
    icon: <BookOpen className="w-8 h-8" />,
    bgImg: `${BASE}/storage/images/service/172726167420240925_140326.jpg`,
    iconImg: `${BASE}/storage/images/service/1726636444eggs.png`
  }
];

const TESTIMONIALS_DATA = [
  {
    name: 'Yaadhav Jamarkatel',
    location: 'Nuwakot',
    role: 'Poultry Farmer',
    text: 'Working with Uttam Poultry Farm has been a game-changer for my poultry business. The Day Old Kuroiler (Giriraj) Chicks I received were of exceptional quality, and the support from the team has been outstanding. Their guidance on brooding, feeding, and health management has helped me improve my farm\'s productivity and profitability. I highly recommend Uttam Poultry Farm to anyone looking to start or enhance their poultry venture.',
    image: `${BASE}/storage/images/testimonial/1727420022WhatsApp%20Image%202024-09-27%20at%2012.36.59.jpeg`
  },
  {
    name: 'Mukesh Chaudary',
    location: 'Chitwan',
    role: 'Rural Entrepreneur',
    text: 'I\'ve been raising Day Old Kuroiler (Giriraj) Chicks from Uttam Poultry Farm for the past year, and the results have been remarkable. The chicks are robust and grow efficiently, and the farm\'s support in terms of nutrition and health management has been invaluable. This has not only provided me with a sustainable source of income but also empowered me and my family. Uttam Poultry Farm truly stands out for its quality and customer service.',
    image: `${BASE}/storage/images/testimonial/1727420115WhatsApp%20Image%202024-09-27%20at%2012.35.56.jpeg`
  }
];

const BLOG_DATA = [
  {
    title: 'The Advantages of Raising Day Old Kuroiler (Giriraj) Chicks',
    date: '18 Sep', author: 'poultary farm',
    image: `${BASE}/storage/images/blog/172726138020240925_142850.jpg`,
    tag: 'Farming Tips',
    link: `${BASE}/blog/the-advantages-of-raising-day-old-kuroiler-giriraj-chicks`
  },
  {
    title: 'Essential Care Tips for Day Old Kuroiler (Giriraj) Chicks',
    date: '18 Sep', author: 'poultary farm',
    image: `${BASE}/storage/images/blog/172726146920240925_134727.jpg`,
    tag: 'Care Guide',
    link: `${BASE}/blog/essential-care-tips-for-day-old-kuroiler-giriraj-chicks`
  },
  {
    title: 'The Growth Journey of Day Old Kuroiler (Giriraj) Chicks',
    date: '18 Sep', author: 'poultary farm',
    image: `${BASE}/storage/images/blog/1726976418AdobeStock_302413323-scaled-e1660081527306.jpeg`,
    tag: 'Growth',
    link: `${BASE}/blog/the-growth-journey-of-day-old-kuroiler-giriraj-chicks`
  },
  {
    title: 'Common Health Issues and Solutions for Day Old Kuroiler (Giriraj) Chicks',
    date: '18 Sep', author: 'poultary farm',
    image: `${BASE}/storage/images/blog/172726152420240925_134805.jpg`,
    tag: 'Health',
    link: `${BASE}/blog/common-health-issues-and-solutions-for-day-old-kuroiler-giriraj-chicks`
  }
];

const FAQS = [
  { q: 'What are Day Old Kuroiler (Giriraj) Chicks?', a: 'Day Old Kuroiler (Giriraj) Chicks are newly hatched poultry that are ideal for both meat and egg production. They are known for their robustness and adaptability, making them suitable for various farming conditions.' },
  { q: 'What should be the initial setup for Day Old Kuroiler (Giriraj) Chicks?', a: 'For Day Old Kuroiler (Giriraj) Chicks, set up a clean, warm brooder with a temperature of around 32\u00b0C for the first week. Ensure good ventilation, provide adequate space, and use bedding that is easy to clean.' },
  { q: 'What is the recommended feed for Day Old Kuroiler (Giriraj) Chicks?', a: 'Feed Day Old Kuroiler (Giriraj) Chicks a high-quality starter feed specially formulated for young poultry. This feed should be rich in proteins, vitamins, and minerals to support their early growth and development.' },
  { q: 'How often should Day Old Kuroiler (Giriraj) Chicks be vaccinated?', a: 'Day Old Kuroiler (Giriraj) Chicks should follow a vaccination schedule starting from a young age. Common vaccinations include those for Newcastle disease, Marek\'s disease, and infectious bursal disease. Consult a poultry health expert for a specific vaccination plan.' },
  { q: 'What are common health issues in Day Old Kuroiler (Giriraj) Chicks?', a: 'Common health issues include respiratory infections, coccidiosis, and digestive problems. Monitor for signs such as lethargy, poor growth, or abnormal droppings and seek veterinary assistance if any health issues arise.' },
  { q: 'How long does it take for Day Old Kuroiler (Giriraj) Chicks to mature?', a: 'Day Old Kuroiler (Giriraj) Chicks generally mature in about 18-20 weeks. They are raised for meat or egg production, with their growth rate being relatively fast compared to other breeds.' },
  { q: 'What should I do if a chick appears sick or weak?', a: 'Isolate any sick or weak chicks immediately to prevent the spread of disease. Ensure they have access to clean water and high-quality feed, and consult a veterinarian for diagnosis and treatment.' },
  { q: 'Can Day Old Kuroiler (Giriraj) Chicks be raised in a backyard setting?', a: 'Yes, Day Old Kuroiler (Giriraj) Chicks can be successfully raised in a backyard setting if provided with proper housing, nutrition, and care. Ensure they have adequate space and protection from predators.' },
  { q: 'How should I handle Day Old Kuroiler (Giriraj) Chicks to ensure their well-being?', a: 'Handle Day Old Kuroiler (Giriraj) Chicks gently and avoid excessive handling to reduce stress. Ensure that their environment is clean and free from disturbances.' },
  { q: 'What is the expected feed conversion ratio for Day Old Kuroiler (Giriraj) Chicks?', a: 'The feed conversion ratio (FCR) for Day Old Kuroiler (Giriraj) Chicks typically ranges between 2.5 to 3.0. This means that for every 2.5 to 3 kg of feed, the chicks will gain 1 kg of body weight. Efficient feeding practices help optimize growth and reduce costs.' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Product', href: '#products' },
    { label: 'Service', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact us', href: '#contact' }
  ];

  return (
    <>
      <div className="hidden lg:block bg-emerald-900 text-white text-xs py-2.5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:Uttampoultry@gmail.com" className="flex items-center gap-2 hover:text-emerald-300 transition-colors"><Mail size={14} /> Uttampoultry@gmail.com</a>
            <a href="tel:985-5059405" className="flex items-center gap-2 hover:text-emerald-300 transition-colors"><Phone size={14} /> 985-5059405,056-596469</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-emerald-300 transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-emerald-300 transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-emerald-300 transition-colors"><Youtube size={16} /></a>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors"><MessageCircle size={16} /></a>
          </div>
        </div>
      </div>

      <nav className={`sticky top-0 z-[100] transition-all duration-500 ${isScrolled ? 'py-3 bg-white/95 backdrop-blur-md shadow-lg' : 'py-5 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3">
            <img src={`${BASE}/storage/setting/1727687404uttam%20poultry%20farm%20logo%20f1.png`} alt="Uttam Poultry Farm" className="h-12" />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {links.map(link => (
              <a key={link.href} href={link.href} className="text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a href="#contact" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-emerald-600/25">
              Become a Dealer
            </a>
          </div>

          <button className="lg:hidden w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 py-6 px-6 flex flex-col gap-4 lg:hidden shadow-xl">
            {links.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-gray-700 hover:text-emerald-600">{link.label}</a>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl text-center">Become a Dealer</a>
          </div>
        )}
      </nav>
    </>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-emerald-400 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-amber-400 rounded-full blur-[150px]"></div>
      </div>

      {HERO_SLIDES.map((slide, idx) => (
        <div key={idx} className={`absolute inset-0 flex items-center transition-all duration-1000 ${idx === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-amber-300 uppercase">uttam Poultary Farm</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">{slide.title}</h1>
              <p className="text-lg md:text-xl text-emerald-100/80 mb-12 max-w-2xl leading-relaxed font-medium">Welcome to uttam poultary farm</p>
              <a href={slide.btnLink} className="inline-flex items-center gap-3 px-10 py-5 bg-amber-500 hover:bg-amber-400 text-emerald-900 font-black rounded-2xl text-base transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/30">
                {slide.btnText} <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {HERO_SLIDES.map((_, idx) => (
          <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-3 h-3 rounded-full transition-all duration-500 ${idx === currentSlide ? 'bg-amber-400 w-10' : 'bg-white/30 hover:bg-white/50'}`} />
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-[32px] overflow-hidden shadow-xl">
              <img src={`${BASE}/storage/setting/172725943320240925_134727.jpg`} alt="Poultry Farm" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-[32px] overflow-hidden shadow-xl mt-12">
              <img src={`${BASE}/storage/setting/172725932420240925_143312(0).jpg`} alt="Poultry" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-emerald-500" />
            <span className="text-emerald-600 font-bold text-sm tracking-[0.3em] uppercase">Welcome to uttam poultary farm</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">Better Agriculture for <span className="text-emerald-600">Better Future</span></h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Established in 2009 in Bharatpur 03, Chitwan, Uttam Poultry Farm is a leader in Nepal's poultry industry, 
            specializing in the supply of Day Old Kuroiler (Giriraj) chicks nationwide. Authorized by the Government of 
            Nepal, KEGGFARMS. we are dedicated to empowering rural communities by providing scientifically developed 
            poultry breeds that drive sustainable agriculture and economic growth.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            At Uttam Poultry Farm, we believe in the power of innovation and quality. Our commitment extends beyond 
            poultry breeding to delivering premium eggs that ensure the highest standards of nutrition and freshness. 
            Join us as we build a brighter, sustainable future for farmers and families across Nepal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-emerald-700 mb-1">150+</div>
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Clients</div>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-amber-700 mb-1"><Egg className="inline w-7 h-7" /></div>
              <div className="text-xs font-bold text-amber-600 uppercase tracking-widest">Egg Collection Systems</div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-blue-700 mb-1"><Thermometer className="inline w-7 h-7" /></div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest">Ventilation and Temperature Control</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProductsSection = () => (
  <section id="products" className="py-24 px-6 bg-gradient-to-b from-emerald-50 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-emerald-500" />
          <span className="text-emerald-600 font-bold text-sm tracking-[0.3em] uppercase">Our Product</span>
          <div className="h-px w-12 bg-emerald-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Latest Projects List</h2>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 hover:shadow-emerald-500/10 hover:shadow-2xl transition-all duration-500 group">
          <div className="relative overflow-hidden aspect-[4/3]">
            <img src={PRODUCTS_DATA[0].image} alt="Day Old Kuroiler(Giriraj)" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-4 left-4 bg-amber-500 text-emerald-900 font-black text-sm px-4 py-2 rounded-xl">Bestseller</div>
          </div>
          <div className="p-8">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-amber-400 fill-amber-400" />)}
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">{PRODUCTS_DATA[0].name}</h3>
            <p className="text-gray-500 leading-relaxed mb-6">{PRODUCTS_DATA[0].description}</p>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl font-black text-emerald-600">{PRODUCTS_DATA[0].price}</span>
              <span className="text-lg text-gray-400 line-through font-bold">{PRODUCTS_DATA[0].originalPrice}</span>
            </div>
            <p className="text-xs text-gray-400 font-medium mb-8">Valid From: {PRODUCTS_DATA[0].validFrom} &mdash; Valid To: {PRODUCTS_DATA[0].validTo}</p>
            <div className="flex gap-4">
              <a href="#contact" className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all shadow-lg">
                Order Now <ShoppingCart size={18} />
              </a>
              <a href={`${BASE}/product/day-old-kuroiler`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-4 bg-emerald-50 text-emerald-700 font-bold rounded-2xl hover:bg-emerald-100 transition-all">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <a href={`${BASE}/products`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all">
          Explore More <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-emerald-500" />
          <span className="text-emerald-600 font-bold text-sm tracking-[0.3em] uppercase">Our Services list</span>
          <div className="h-px w-12 bg-emerald-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">What We're Offering</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES_DATA.map((service, i) => (
          <div key={i} className="group relative rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="absolute inset-0">
              <img src={service.bgImg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-gray-900/40"></div>
            </div>
            <div className="relative p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <img src={service.iconImg} alt="" className="h-12 w-auto opacity-80" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-emerald-100/70 text-sm leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href={`${BASE}/service`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all">
          Explore More <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-24 px-6 bg-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-emerald-500" />
            <span className="text-emerald-600 font-bold text-sm tracking-[0.3em] uppercase">Testimonail</span>
            <div className="h-px w-12 bg-emerald-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">Testimonail</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-xl relative">
            <Quote className="absolute top-8 left-8 text-emerald-100 w-20 h-20" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                {[...Array(TESTIMONIALS_DATA[active].rating || 5)].map((_, i) => (
                  <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 italic">{TESTIMONIALS_DATA[active].text}</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <img src={TESTIMONIALS_DATA[active].image} alt={TESTIMONIALS_DATA[active].name} className="w-16 h-16 rounded-2xl object-cover shadow-lg" />
                <div className="flex-1">
                  <h4 className="text-xl font-black text-gray-900">{TESTIMONIALS_DATA[active].name} -{TESTIMONIALS_DATA[active].location}</h4>
                  <p className="text-sm text-gray-500 font-medium">{TESTIMONIALS_DATA[active].role}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button key={idx} onClick={() => setActive(idx)} className={`w-3 h-3 rounded-full transition-all duration-500 ${idx === active ? 'bg-emerald-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={`${BASE}/testimonial`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all">
              Explore More <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogSection = () => (
  <section id="gallery" className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-emerald-500" />
          <span className="text-emerald-600 font-bold text-sm tracking-[0.3em] uppercase">From the blog post</span>
          <div className="h-px w-12 bg-emerald-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Latest News &amp; Articles Directly from Blog</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {BLOG_DATA.map((post, i) => (
          <div key={i} className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-lg tracking-widest uppercase">{post.tag}</span>
                <span className="text-xs text-gray-400 font-medium">{post.date}</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">by {post.author}</p>
              <h4 className="text-base font-bold text-gray-900 group-hover:text-emerald-600 transition-colors leading-relaxed">{post.title}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href={`${BASE}/blog`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all">
          Explore More <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-emerald-500" />
            <span className="text-emerald-600 font-bold text-sm tracking-[0.3em] uppercase">Frequently Asked Questions</span>
            <div className="h-px w-12 bg-emerald-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Guiding You Through Every Step</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-emerald-200 transition-colors">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
                {openIndex === i ? <ChevronUp size={20} className="text-emerald-600 shrink-0" /> : <ChevronDown size={20} className="text-gray-400 shrink-0" />}
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIndex === i ? 'max-h-96 pb-6 px-6' : 'max-h-0'}`}>
                <p className="text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href={`${BASE}/faq`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all">
            Explore More <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ background: `url(${BASE}/frontend/asset/images/contact.jpg) center/cover` }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-emerald-500" />
              <span className="text-emerald-600 font-bold text-sm tracking-[0.3em] uppercase">Contact Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 leading-tight">Contact Us</h2>

            <div className="space-y-8">
              {[
                { icon: <Phone size={22} className="text-emerald-600" />, label: 'Phone', value: '985-5059405,056-596469', href: 'tel:985-5059405' },
                { icon: <Mail size={22} className="text-emerald-600" />, label: 'Email', value: 'Uttampoultry@gmail.com', href: 'mailto:Uttampoultry@gmail.com' },
                { icon: <MapPin size={22} className="text-emerald-600" />, label: 'Address', value: 'Bharatpur-03, Bishal Marga, Chitwan, Nepal', href: '#' }
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">{item.icon}</div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-0.5">{item.label}</div>
                    <div className="text-gray-900 font-bold group-hover:text-emerald-600 transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 rounded-[40px] p-10 md:p-14">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle className="text-emerald-600 w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-500">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-black text-gray-900 mb-10">Leave A Message</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <input required type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-6 py-4 bg-white rounded-2xl text-gray-900 outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium placeholder:text-gray-400 border border-gray-200" />
                    <input required type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-6 py-4 bg-white rounded-2xl text-gray-900 outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium placeholder:text-gray-400 border border-gray-200" />
                    <input required type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-6 py-4 bg-white rounded-2xl text-gray-900 outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium placeholder:text-gray-400 border border-gray-200" />
                    <textarea required placeholder="Your Message" rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full px-6 py-4 bg-white rounded-2xl text-gray-900 outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium placeholder:text-gray-400 border border-gray-200 resize-none" />
                    <button type="submit" className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-3 text-lg">
                      Send Message <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTABanner = () => (
  <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-r from-emerald-800 to-emerald-900">
    <div className="absolute inset-0 opacity-5" style={{ background: `url(${BASE}/frontend/asset/images/backk.jpg) center/cover` }}></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 blur-[100px] rounded-full"></div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
        We're popular leader in <span className="text-amber-400">poultary market</span> globally
      </h2>
      <a href="#services" className="inline-flex items-center gap-3 px-10 py-5 bg-amber-500 hover:bg-amber-400 text-emerald-900 font-black rounded-2xl text-base transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/30">
        Discover More <ArrowRight size={20} />
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-emerald-950 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-5" style={{ background: `url(${BASE}/frontend/asset/images/fotterbg.png) center/cover` }}></div>
    <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col gap-6">
          <img src={`${BASE}/storage/setting/1727687404uttam%20poultry%20farm%20logo%20f1.png`} alt="Uttam Poultry Farm" className="h-14 w-auto" />
          <p className="text-emerald-300/60 text-sm leading-relaxed">
            Welcome to Uttam Poultry Farm, where we are committed to raising high-quality poultry in a sustainable and ethical way.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube, MessageCircle].map((Icon, i) => (
              <a key={i} href="https://www.facebook.com/profile.php?id=61563612075393" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-emerald-800/50 rounded-xl flex items-center justify-center text-emerald-300 hover:bg-emerald-700 hover:text-white transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Links</h5>
          <div className="flex flex-col gap-4">
            {[
              { label: 'Home', href: `${BASE}/` },
              { label: 'About us', href: `${BASE}/about-us` },
              { label: 'Product', href: `${BASE}/products` },
              { label: 'Blog', href: `${BASE}/blog` },
              { label: 'Service', href: `${BASE}/service` }
            ].map((link, i) => (
              <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-emerald-300/60 hover:text-amber-400 text-sm font-medium transition-colors">{link.label}</a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Our services</h5>
          <div className="flex flex-col gap-4">
            {['Wholesale Supply of Poultry Products', 'Poultry Farm Consultancy', 'Customized Feeding Solutions', 'Training and Workshops for Farmers'].map((link, i) => (
              <a key={i} href={`${BASE}/service`} target="_blank" rel="noopener noreferrer" className="text-emerald-300/60 hover:text-amber-400 text-sm font-medium transition-colors">{link}</a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-6">Contact</h5>
          <div className="flex flex-col gap-4 text-sm text-emerald-300/60">
            <a href="tel:985-5059405" className="hover:text-amber-400 transition-colors">985-5059405,056-596469</a>
            <a href="mailto:Uttampoultry@gmail.com" className="hover:text-amber-400 transition-colors">Uttampoultry@gmail.com</a>
            <p>Bharatpur-03 ,Chitwan, Nepal</p>
          </div>
          <div className="mt-6">
            <p className="text-xs text-emerald-400/60 font-bold uppercase tracking-widest mb-3">Authorized by:</p>
            <div className="flex items-center gap-4">
              <img src={`${BASE}/frontend/asset/images/nepal.jpg`} alt="Government of Nepal" className="h-10 opacity-70" />
              <img src={`${BASE}/frontend/asset/images/fotter.png`} alt="KEGGFARMS" className="h-10 opacity-70" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-800/50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-emerald-400/40 text-[11px] font-medium tracking-wide">
          &copy; Copyright {new Date().getFullYear()} by Uttam Poultary Farm I Website Designed &amp; Developed By Paradise InfoTech .
        </p>
        <div className="flex items-center gap-6 text-[11px] text-emerald-400/40">
          <a href="#" className="hover:text-amber-400 transition-colors">Terms &amp; Conditions</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
