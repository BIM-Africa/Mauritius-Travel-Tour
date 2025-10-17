"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

/* -------------------------------- Types ---------------------------------- */
type Dir = "ltr" | "rtl";
type Lang = "en" | "fr" | "ar" | "ur";

type Ctx = {
  lang: Lang;
  dir: Dir;
  setLang: (code: Lang) => void;
  tx: (text: string, source?: Lang) => Promise<string>;
  txBatch: (texts: string[], source?: Lang) => Promise<string[]>;
};

/* ----------------------------- Context setup ----------------------------- */
const I18nCtx = createContext<Ctx | null>(null);
const dirFor = (lang: Lang): Dir => (lang === "ar" || lang === "ur" ? "rtl" : "ltr");

/* ----------------------------- GLOSSARY ONLY ----------------------------- */
/** Keys MUST be lowercased exact English versions you wrap in <T>...</T> */
const GLOSSARY: Record<string, Partial<Record<Lang, string>>> = {
  // Hero / CTA / Nav shorts
  "taking you to the": { en: "Taking you to the", fr: "Nous vous emmenons aux", ar: "نأخذك إلى", ur: "ہم آپ کو لے جا رہے ہیں" },
  "best places in mauritius": { en: "Best Places in Mauritius", fr: "Meilleurs endroits à l’Île Maurice", ar: "أفضل الأماكن في موريشيوس", ur: "ماریشس کی بہترین جگہوں پر" },
  "book your ride now": { en: "Book Your Ride Now", fr: "Réservez votre trajet", ar: "احجز رحلتك الآن", ur: "ابھی سواری بُک کریں" },
  "about us": { en: "About Us", fr: "À propos", ar: "من نحن", ur: "ہمارے بارے میں" },
  "discover your next adventure": { en: "Discover Your Next Adventure", fr: "Découvrez votre prochaine aventure", ar: "اكتشف مغامرتك القادمة", ur: "اپنی اگلی مہم جوئی دریافت کریں" },

  // Intro paragraphs
  "welcome to mauritius travel & tour, your trusted travel partner for over 10 years.": {
    en: "Welcome to Mauritius Travel & Tour, your trusted travel partner for over 10 years.",
    fr: "Bienvenue chez Mauritius Travel & Tour, votre partenaire de voyage de confiance depuis plus de 10 ans.",
    ar: "مرحبًا بكم في Mauritius Travel & Tour شريككم الموثوق للسفر منذ أكثر من 10 سنوات.",
    ur: "موریشس ٹریول اینڈ ٹور میں خوش آمدید—آپ کا قابلِ اعتماد ٹریول پارٹنر 10 سال سے زائد عرصے سے۔",
  },
  "we take pride in offering reliable, comfortable, and personalized transportation services across the breathtaking island of mauritius.": {
    en: "We take pride in offering reliable, comfortable, and personalized transportation services across the breathtaking island of Mauritius.",
    fr: "Nous sommes fiers d’offrir des services de transport fiables, confortables et personnalisés à travers la splendide île Maurice.",
    ar: "نفخر بتقديم خدمات نقل موثوقة ومريحة ومخصصة في أرجاء جزيرة موريشيوس الخلابة.",
    ur: "ہم پورے دلکش جزیرۂ ماریشس میں قابلِ اعتماد، آرام دہ اور حسبِ ضرورت ٹرانسپورٹ فراہم کرنے پر فخر محسوس کرتے ہیں۔",
  },
  "at mauritius travel & tour, every journey is more than just a ride — it's an experience of care, comfort, and convenience.": {
    en: "At Mauritius Travel & Tour, every journey is more than just a ride — it's an experience of care, comfort, and convenience.",
    fr: "Chez Mauritius Travel & Tour, chaque trajet est bien plus qu’un simple déplacement — c’est une expérience de soin, de confort et de sérénité.",
    ar: "في Mauritius Travel & Tour كل رحلة أكثر من مجرد تنقّل — إنها تجربة رعاية وراحة وسهولة.",
    ur: "موریشس ٹریول اینڈ ٹور میں ہر سفر صرف سواری نہیں — یہ خیال، آرام اور سہولت کا تجربہ ہے۔",
  },
  "whether you're discovering mauritius for the first time or commuting as a local, our modern fleet and professional chauffeurs ensure you travel safely and in style.": {
    en: "Whether you're discovering Mauritius for the first time or commuting as a local, our modern fleet and professional chauffeurs ensure you travel safely and in style.",
    fr: "Que vous découvriez l’île Maurice pour la première fois ou que vous vous déplaciez comme un local, notre flotte moderne et nos chauffeurs professionnels vous garantissent sécurité et élégance.",
    ar: "سواء كنت تزور موريشيوس لأول مرة أو تتنقل كمقيم، فإن أسطولنا الحديث وسائقينا المحترفين يضمنون لك سفرًا آمنًا وأنيقًا.",
    ur: "چاہے آپ پہلی بار ماریشس دیکھ رہے ہوں یا مقامی طور پر سفر کر رہے ہوں، ہمارا جدید فلیٹ اور پروفیشنل ڈرائیورز آپ کے محفوظ اور باوقار سفر کو یقینی بناتے ہیں۔",
  },
  "from airport transfers to private tours and daily commutes, we're dedicated to making every mile memorable.": {
    en: "From airport transfers to private tours and daily commutes, we're dedicated to making every mile memorable.",
    fr: "Des transferts aéroport aux excursions privées et trajets quotidiens, nous transformons chaque kilomètre en un souvenir mémorable.",
    ar: "من النقل من وإلى المطار إلى الجولات الخاصة والتنقل اليومي، نحرص على أن يكون كل ميل ذكرى لا تُنسى.",
    ur: "ایئرپورٹ ٹرانسفر سے نجی ٹورز اور روزمرہ سفر تک—ہم ہر میل کو یادگار بنانے کے لیے پُرعزم ہیں۔",
  },
  "our team focuses on punctuality, comfort, and transparent pricing — so you can relax and enjoy the island while we handle the journey.": {
    en: "Our team focuses on punctuality, comfort, and transparent pricing — so you can relax and enjoy the island while we handle the journey.",
    fr: "Notre équipe privilégie la ponctualité, le confort et une tarification transparente — détendez-vous et profitez de l’île, nous nous occupons du trajet.",
    ar: "يركّز فريقنا على الالتزام بالمواعيد والراحة وتسعير شفاف — استرخ واستمتع بالجزيرة ونحن نتولى الرحلة.",
    ur: "ہماری ٹیم وقت کی پابندی، آرام، اور شفاف قیمتوں پر مرکوز رہتی ہے — آپ سکون سے جزیرے سے لطف اٹھائیں، سفر ہم سنبھالتے ہیں۔",
  },

  // Promos / service lines
  "choose a tour that satisfies your soul": { en: "Choose a Tour that satisfies your Soul", fr: "Choisissez une excursion qui ravit votre âme", ar: "اختر جولة تُرضي روحك", ur: "ایسا ٹور چُنیں جو دل کو بھائے" },
  "at mauritius travel & tour, we take pride in offering a fleet of vehicles that go beyond expectations — combining safety, comfort, and impeccable cleanliness to ensure every ride is as reliable as it is enjoyable.": {
    en: "At Mauritius Travel & Tour, we take pride in offering a fleet of vehicles that go beyond expectations — combining safety, comfort, and impeccable cleanliness to ensure every ride is as reliable as it is enjoyable.",
    fr: "Chez Mauritius Travel & Tour, nous sommes fiers d’une flotte qui dépasse les attentes — sécurité, confort et propreté irréprochable pour des trajets fiables et agréables.",
    ar: "نفخر في Mauritius Travel & Tour بتقديم أسطول يتجاوز التوقعات — يجمع بين السلامة والراحة والنظافة لضمان رحلة موثوقة وممتعة.",
    ur: "موریشس ٹریول اینڈ ٹور میں ہم ایک ایسے فلیٹ پر فخر کرتے ہیں جو توقعات سے بڑھ کر ہو — حفاظت، آرام اور بے عیب صفائی کے ساتھ ہر سفر کو قابلِ اعتماد اور خوشگوار بناتے ہیں۔",
  },
  "our awesome services": { en: "Our Awesome Services", fr: "Nos super services", ar: "خدماتنا الرائعة", ur: "ہماری شاندار خدمات" },
  "airport transfer": { en: "Airport Transfer", fr: "Transfert aéroport", ar: "نقل المطار", ur: "ایئرپورٹ ٹرانسفر" },
  "hotel transfer": { en: "Hotel Transfer", fr: "Transfert hôtel", ar: "نقل الفندق", ur: "ہوٹل ٹرانسفر" },
  "excursion": { en: "Excursion", fr: "Excursion", ar: "جولة", ur: "سیر" },
  "door step service": { en: "Door Step Service", fr: "Service à domicile", ar: "خدمة حتى باب المنزل", ur: "گھر کے دروازے پر سروس" },
  "north tour": { en: "North Tour", fr: "Circuit Nord", ar: "جولة الشمال", ur: "نارتھ ٹور" },
  "south tour": { en: "South Tour", fr: "Circuit Sud", ar: "جولة الجنوب", ur: "ساوتھ ٹور" },
  "east tour": { en: "East Tour", fr: "Circuit Est", ar: "جولة الشرق", ur: "ایسٹ ٹور" },
  "west tour": { en: "West Tour", fr: "Circuit Ouest", ar: "جولة الغرب", ur: "ویسٹ ٹور" },

  // Alt intro/badges
  "welcome to mauritius travel & tours, your trusted partner for more than 10 years.": {
    en: "Welcome to Mauritius Travel & Tours, your trusted partner for more than 10 years.",
    fr: "Bienvenue chez Mauritius Travel & Tours, votre partenaire de confiance depuis plus de 10 ans.",
    ar: "مرحبًا بكم في Mauritius Travel & Tours شريككم الموثوق لأكثر من 10 سنوات.",
    ur: "موریشس ٹریول اینڈ ٹورز میں خوش آمدید — 10 سال سے زیادہ عرصے سے آپ کا قابلِ اعتماد ساتھی۔",
  },
  "read more": { en: "Read More", fr: "En savoir plus", ar: "اقرأ المزيد", ur: "مزید پڑھیں" },
  "customised transfer options available as per your needs": { en: "Customised transfer options available as per your needs", fr: "Des options de transfert personnalisées selon vos besoins", ar: "خيارات نقل مخصصة بحسب احتياجاتك", ur: "آپ کی ضروریات کے مطابق کسٹمائزڈ ٹرانسفر آپشنز دستیاب" },
  "we can arrange transfers for larger groups or multiple vehicles": { en: "We can arrange transfers for larger groups or multiple vehicles", fr: "Nous pouvons organiser des transferts pour des groupes plus nombreux ou plusieurs véhicules", ar: "نستطيع ترتيب نقل للمجموعات الكبيرة أو عدة مركبات", ur: "بڑی گروپس یا متعدد گاڑیوں کے لیے بھی ٹرانسفر کا انتظام ممکن ہے" },

  // Quick widget lines
  "from select location": { en: "From Select Location", fr: "Depuis lieu de prise en charge", ar: "من موقع الالتقاط", ur: "فرام سیلیکٹ لوکیشن" },
  "to select location": { en: "To Select Location", fr: "Vers lieu de dépose", ar: "إلى موقع الوصول", ur: "ٹو سیلیکٹ لوکیشن" },
  "estimated price – for upto 4 persons": { en: "Estimated Price – for upto 4 Persons", fr: "Prix estimé — jusqu’à 4 personnes", ar: "السعر التقديري — حتى 4 أشخاص", ur: "متوقع قیمت — 4 افراد تک" },

  // Organizer block
  "meet the organizer": { en: "Meet the Organizer", fr: "Rencontrez l’organisateur", ar: "تعرّف على المنظم", ur: "آرگنائزر سے ملیں" },
  "behind every successful event is a passionate team working tirelessly to bring every detail to life.": {
    en: "Behind every successful event is a passionate team working tirelessly to bring every detail to life.",
    fr: "Derrière chaque événement réussi, une équipe passionnée travaille sans relâche pour donner vie à chaque détail.",
    ar: "خلف كل حدث ناجح فريق شغوف يعمل بلا كلل لإحياء كل تفصيلة.",
    ur: "ہر کامیاب ایونٹ کے پیچھے ایک پُرجوش ٹیم ہوتی ہے جو ہر جزئیات کو حقیقت بنانے کے لیے انتھک محنت کرتی ہے۔",
  },
  "dedicated to excellence and creativity, our organizers ensure each moment runs smoothly and leaves a lasting impression.": {
    en: "Dedicated to excellence and creativity, our organizers ensure each moment runs smoothly and leaves a lasting impression.",
    fr: "Dévoués à l’excellence et à la créativité, nos organisateurs veillent au bon déroulement de chaque instant et à une impression durable.",
    ar: "مكرّسون للتميز والإبداع يضمن منظّمونا سلاسة كل لحظة وترك انطباع دائم.",
    ur: "ہمارے آرگنائزر بہترین معیار اور تخلیقیت کے لیے وقف ہیں—ہر لمحہ رواں اور دیرپا تاثر چھوڑنے کو یقینی بناتے ہیں۔",
  },
  "adil & group": { en: "ADIL & GROUP", fr: "ADIL & GROUPE", ar: "أديل & المجموعة", ur: "عدیل اینڈ گروپ" },

  // North tours promo
  "refresh your soul with exclusive north tours": { en: "Refresh Your Soul with Exclusive North Tours", fr: "Rafraîchissez votre âme avec des circuits Nord exclusifs", ar: "أنعش روحك مع جولات الشمال الحصرية", ur: "شمالی خصوصی ٹورز سے روح کو تازگی دیں" },

  // Tour cards / CTA
  "get details & pricing": { en: "Get Details & Pricing", fr: "Détails & tarifs", ar: "التفاصيل و الأسعار", ur: "تفصیل اور قیمت دیکھیں" },
  "travel members": { en: "Travel Members", fr: "Membres du voyage", ar: "أعضاء الرحلة", ur: "سفر کے ارکان" },
  "timing - 2.5 hrs": { en: "Timing - 2.5 hrs", fr: "Durée — 2,5 h", ar: "المدة — ساعتان ونصف", ur: "مدت — 2.5 گھنٹے" },
  "place | place | place": { en: "place | place | place", fr: "lieu | lieu | lieu", ar: "مكان | مكان | مكان", ur: "جگہ | جگہ | جگہ" },

  // Package & pricing
  "package 1": { en: "Package 1", fr: "Forfait 1", ar: "الباقة 1", ur: "پیکیج 1" },
  "dreamy mauritius": { en: "Dreamy Mauritius", fr: "Île Maurice de rêve", ar: "موريشيوس الحالمة", ur: "ڈریمی ماریشس" },
  "as from rs 3000 per trip": { en: "As from Rs 3000 per trip", fr: "À partir de Rs 3000 par trajet", ar: "ابتداءً من 3000 روبية للرحلة", ur: "فی سفر 3000 روپے سے" },
  "places to visit": { en: "PLACES TO VISIT", fr: "LIEUX À VISITER", ar: "أماكن للزيارة", ur: "دیکھنے کی جگہیں" },
  "pick-up from any hotel/residence in the morning": { en: "Pick-up from any hotel/residence in the morning", fr: "Prise en charge le matin à votre hôtel/résidence", ar: "الاستلام صباحًا من أي فندق/إقامة", ur: "صبح کے وقت کسی بھی ہوٹل/رہائش سے پک اپ" },
  "visit pamplemousses botanical garden": { en: "Visit Pamplemousses Botanical Garden", fr: "Visite du Jardin botanique de Pamplemousses", ar: "زيارة حديقة بامبلموس النباتية", ur: "پامپلموسس بوٹینیکل گارڈن کی سیر" },
  "visit aventure du sucre museum": { en: "Visit Aventure du Sucre Museum", fr: "Visite du musée L’aventure du Sucre", ar: "زيارة متحف أفانتور دو سوكر", ur: "ایڈونچر ڈو شوگر میوزیئم کی سیر" },
  "visit grand baie bazar": { en: "Visit Grand Baie Bazar", fr: "Visite du Grand Baie Bazar", ar: "زيارة غراند باي بازار", ur: "گرانڈ بے بازار کی سیر" },
  "sea turtle sighting at trou aux biches beach": { en: "Sea Turtle sighting at Trou aux Biches Beach", fr: "Observation des tortues marines à Trou-aux-Biches", ar: "رؤية السلاحف البحرية في شاطئ ترو أو بيش", ur: "ٹرو او بِش بیچ پر سمندری کچھوؤں کا نظارہ" },
  "visit the red church at cap malheureux": { en: "Visit the Red Church at Cap Malheureux", fr: "Visite de l’église rouge à Cap Malheureux", ar: "زيارة الكنيسة الحمراء في كاب مالهورو", ur: "کیپ مالحیورو کی ریڈ چرچ کی سیر" },
  "drop-off at hotel/residence": { en: "Drop-off at hotel/residence", fr: "Dépose à l’hôtel/résidence", ar: "إنزال في الفندق/الإقامة", ur: "ہوٹل/رہائش پر ڈراپ آف" },

  // Tour description / notes
  "tour description": { en: "TOUR DESCRIPTION", fr: "DESCRIPTION DE LA VISITE", ar: "وصف الجولة", ur: "ٹور کی تفصیل" },
  "tour availability: daily": { en: "Tour Availability: Daily", fr: "Disponibilité des circuits : Quotidien", ar: "توفر الجولة: يوميًا", ur: "ٹور دستیابی: روزانہ" },
  "tour duration: 8 hours (day tour)": { en: "Tour Duration: 8 Hours (Day Tour)", fr: "Durée de la visite : 8 heures (journée)", ar: "مدة الجولة: 8 ساعات (جولة نهارية)", ur: "دورانیہ: 8 گھنٹے (دن کی سیر)" },
  "with our flexible pick-up time you can start your adventure anytime between 8:30 am to 10:00 am": {
    en: "With our flexible Pick-Up time you can start your adventure anytime between 8:30 AM to 10:00 AM",
    fr: "Grâce à nos horaires flexibles de prise en charge, commencez votre aventure entre 8h30 et 10h00.",
    ar: "بفضل وقت الالتقاط المرن يمكنكم بدء مغامرتكم بين 8:30 و10:00 صباحًا.",
    ur: "فلیکسبل پک اپ ٹائم کے ساتھ آپ 8:30 تا 10:00 بجے کے درمیان اپنا ایڈونچر شروع کر سکتے ہیں۔",
  },
  "free wi-fi available in vehicle": { en: "Free Wi-Fi available in Vehicle", fr: "Wi-Fi gratuit à bord du véhicule", ar: "واي فاي مجاني داخل المركبة", ur: "گاڑی میں مفت وائی فائی دستیاب" },
  "additional details": { en: "ADDITIONAL DETAILS", fr: "DÉTAILS SUPPLÉMENTAIRES", ar: "تفاصيل إضافية", ur: "اضافی تفصیل" },
  "payment can be made in cash to the driver in mur, usd or eur.": { en: "Payment can be made in cash to the driver in MUR, USD or EUR.", fr: "Le paiement peut être effectué en espèces au chauffeur en MUR, USD ou EUR.", ar: "يمكن دفع الأجرة نقدًا للسائق بالروبية الموريشية أو الدولار أو اليورو.", ur: "ادائیگی نقدی میں ڈرائیور کو MUR, USD یا EUR میں کی جا سکتی ہے۔" },
  "pricing is per vehicle, not per person.": { en: "Pricing is per vehicle, not per person.", fr: "La tarification est par véhicule, et non par personne.", ar: "السعر لكل مركبة، وليس لكل شخص.", ur: "قیمت فی وہیکل ہے، فی کس نہیں۔" },
  "full-day transportation to all the places mentioned above.": { en: "Full-day transportation to all the places mentioned above.", fr: "Transport d’une journée vers tous les lieux mentionnés ci-dessus.", ar: "نقل ليوم كامل إلى جميع الأماكن المذكورة أعلاه.", ur: "مذکورہ تمام مقامات کے لیے فل ڈے ٹرانسپورٹیشن شامل ہے۔" },
  "a friendly english/french speaking driver will provide you valuable information during travels.": { en: "A friendly English/French speaking driver will provide you valuable information during travels.", fr: "Un chauffeur anglophone/francophone sympathique vous partagera des informations utiles pendant le trajet.", ar: "سيوفر لك سائق ودود يتحدث الإنجليزية/الفرنسية معلومات قيّمة أثناء الرحلة.", ur: "فرینڈلی انگلش/فرنچ بولنے والا ڈرائیور سفر کے دوران مفید معلومات فراہم کرے گا۔" },
  "entry ticket fees not included.": { en: "Entry ticket fees not included.", fr: "Frais de billets d’entrée non inclus.", ar: "رسوم تذاكر الدخول غير مشمولة.", ur: "انٹری ٹکٹ فیس شامل نہیں۔" },
  "when it comes to lunch, rest assured that your driver will recommend the best local restaurants along the way, ensuring you get a taste of delicious cuisine.": {
    en: "When it comes to lunch, rest assured that your driver will recommend the best local restaurants along the way, ensuring you get a taste of delicious cuisine.",
    fr: "Pour le déjeuner, votre chauffeur vous recommandera d’excellents restaurants locaux afin de vous faire goûter une délicieuse cuisine.",
    ar: "بالنسبة لوجبة الغداء سيقترح عليك السائق أفضل المطاعم المحلية لتذوق أطيب الأطباق.",
    ur: "لنچ کے لیے آپ کا ڈرائیور راستے میں بہترین مقامی ریسٹورینٹس تجویز کرے گا تاکہ آپ مزیدار کھانوں سے لطف اندوز ہوں۔",
  },
  "arrangements can be made with your driver if you want to combine 2 packages.": {
    en: "Arrangements can be made with your driver if you want to combine 2 packages.",
    fr: "Vous pouvez combiner 2 forfaits en convenant avec votre chauffeur.",
    ar: "يمكن التنسيق مع السائق لدمج باقتين إذا رغبت.",
    ur: "اگر آپ دو پیکیجز کو ملانا چاہیں تو ڈرائیور سے انتظام ہو سکتا ہے۔",
  },
  "note: 15 and 30 seaters available.": {
    en: "NOTE: 15 and 30 seaters available.",
    fr: "REMARQUE : minibus 15 et 30 places disponibles.",
    ar: "ملاحظة: تتوفر حافلات 15 و30 مقعدًا.",
    ur: "نوٹ: 15 اور 30 سیٹر دستیاب ہیں۔",
  },

  // Places blurbs
  "pamplemousses botanical garden in mauritius, established in the 18th century, spans 60 acres with diverse flora. highlights include giant water lilies, rare palms.": {
    en: "Pamplemousses Botanical Garden in Mauritius, established in the 18th century, spans 60 acres with diverse flora. Highlights include giant water lilies, rare palms.",
    fr: "Le Jardin botanique de Pamplemousses, fondé au XVIIIe siècle, s’étend sur 60 acres avec une flore variée. Points forts : nénuphars géants, palmiers rares.",
    ar: "حديقة بامبلموس النباتية في موريشيوس، تأسست في القرن الثامن عشر وتمتد على 60 فدانًا بتنوع نباتي. من أبرز معالمها زنابق الماء العملاقة والنخيل النادر.",
    ur: "پامپلموسس بوٹینیکل گارڈن، 18ویں صدی میں قائم، 60 ایکڑ پر مشتمل ہے جہاں نایاب پودوں کی ورائٹی ہے۔ خاص باتیں: دیوہیکل واٹر للیز، نایاب کھجوریں۔",
  },
  "grand baie bazar in mauritius is a vibrant market offering a fusion of local crafts, textiles, and souvenirs. visitors explore stalls filled with colorful items, spices, and unique finds in a lively atmosphere.": {
    en: "Grand Baie Bazar in Mauritius is a vibrant market offering a fusion of local crafts, textiles, and souvenirs. Visitors explore stalls filled with colorful items, spices, and unique finds in a lively atmosphere.",
    fr: "Grand Baie Bazar est un marché vivant mêlant artisanat local, textiles et souvenirs. Stands colorés, épices et trouvailles uniques dans une ambiance animée.",
    ar: "بازار غراند باي سوق نابض يقدم مزيجًا من الحرف المحلية والمنسوجات والتذكارات. يستكشف الزوار أكشاكًا مليئة بالعناصر الملونة والتوابل والمقتنيات الفريدة في أجواء حيوية.",
    ur: "گرانڈ بے بازار رنگا رنگ مقامی ہنر، ٹیکسٹائل اور سووینیرز کا دلکش امتزاج پیش کرتا ہے۔ پُررونق ماحول میں رنگین اسٹالز، مسالہ جات اور منفرد اشیاء۔",
  },
  "sea turtle sighting": { en: "Sea Turtle Sighting", fr: "Observation des tortues marines", ar: "مشاهدة السلاحف البحرية", ur: "سمندری کچھوؤں کی جھلک" },
  "red church": { en: "Red Church", fr: "Église rouge", ar: "الكنيسة الحمراء", ur: "ریڈ چرچ" },
  "the red church at cap malheureux is an iconic landmark with stunning sea views and vibrant architecture — perfect for photos. its striking red roof contrasts beautifully with the turquoise lagoon.": {
    en: "The Red Church at Cap Malheureux is an iconic landmark with stunning sea views and vibrant architecture — perfect for photos. Its striking red roof contrasts beautifully with the turquoise lagoon.",
    fr: "L’église rouge de Cap Malheureux est un site emblématique aux vues marines superbes et à l’architecture vibrante — parfaite pour les photos. Son toit rouge contraste magnifiquement avec le lagon turquoise.",
    ar: "الكنيسة الحمراء في كاب مالهورو معلم شهير بإطلالات بحرية خلابة وعمارة نابضة — مثالية للصور. يتباين سقفها الأحمر مع البحيرة الفيروزية بجمال.",
    ur: "کیپ مالحیورو کی ریڈ چرچ سمندر کے شاندار نظاروں اور دلکش تعمیرات کے باعث علامتی مقام ہے—تصاویر کے لیے بہترین۔ اس کی سرخ چھت فیروزی لگون کے ساتھ حسین تضاد پیدا کرتی ہے۔",
  },
};

/* ----------------------------- Provider ---------------------------------- */
export function GlobalI18n({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() =>
    (typeof window === "undefined" ? "en" : (localStorage.getItem("lang") || "en")) as Lang
  );

  // pick changes from Navbar (which writes localStorage + fires `langchange`)
  useEffect(() => {
    const onLangChange = () => setLang(((localStorage.getItem("lang") || "en") as Lang));
    window.addEventListener("langchange", onLangChange);
    return () => window.removeEventListener("langchange", onLangChange);
  }, []);

  const dir: Dir = useMemo(() => dirFor(lang), [lang]);

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.lang = lang;
  }, [dir, lang]);

  // ---- Translation functions (glossary-only, no API calls) ----
  async function tx(text: string, source: Lang = "en") {
    if (!text?.trim() || lang === source) return text;
    const key = text.trim().toLowerCase();
    const hit = GLOSSARY[key]?.[lang];
    return hit ?? text;
  }

  async function txBatch(items: string[], source: Lang = "en") {
    if (!items.length || lang === source) return items;
    return items.map((s) => {
      const key = s?.trim().toLowerCase();
      const hit = key ? GLOSSARY[key]?.[lang] : null;
      return hit ?? s;
    });
  }

  const value = useMemo(() => ({ lang, dir, setLang, tx, txBatch }), [lang, dir]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

/* ------------------------------ <T> helper ------------------------------- */
export function T({ children, source = "en" }: { children: string; source?: Lang }) {
  const ctx = useContext(I18nCtx);
  const [text, setText] = useState(children);

  useEffect(() => {
    if (!ctx) return;
    let live = true;
    (async () => {
      const out = await ctx.tx(children, source);
      if (live) setText(out);
    })();
    return () => {
      live = false;
    };
  }, [children, source, ctx?.lang]); // re-run on language change

  return <>{text}</>;
}

/* ------------------------------ Hook export ------------------------------ */
export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within GlobalI18n");
  return ctx;
}
