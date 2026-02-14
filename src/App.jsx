import { useState } from 'react'

import './style/index.css'

import Navbar from './Navbar'
import Footer from './Footer'
import Shop from './Shop'
import Piece from './Piece'
import SlideShow from './Slideshow'
import List from "./List"
import WhatsAppButton from "./WhatsappButton"
import Contact from "./contact"
import LangButton from "./LangButton";
import BusinessHours from './BusinessHours'
import MobileCTA from './MobileCTA'
import Trust from './Trust'

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [buttonText, setButtonText] = useState("☀️");

  const [lang, setLang] = useState("ar");

  const toggleLang = () => {
    setLang(prev => (prev === "ar" ? "en" : "ar"));
  };

  const languages = [
    "Arabic",
    "English",
    "Turkish",
    "French",
    "German",
    "Spanish",
    "Italian",
    "Russian",
    "Chinese",
    "Persian",
    "Dutch",
    "Swedish"
  ]

  const ARlanguages = [
    "عربي",
    "انكليزي",
    "تركي",
    "فرنسي",
    "الماني",
    "اسباني",
    "ايطالي",
    "روسي",
    "صيني",
    "فارسي",
    "هولندي",
    "سويدي"
  ]

  const Services = [
    "Translation of any legal document into any language",
    "Immigration expert advice on obtaining citizenship or legal status",
    "Translation certificates",
    "Certified translation certificates",
    "Translation of university and high school admission documents",
    "High-quality translation of legally binding contracts",
    "Translation of civil lawsuits and court files",


    "Translation of marriage certificates",
    "Translation of divorce certificates",
    "Translation of death certificates",
    "Translation of training certificates",
    "Translation of academic certificates",
    "Translation of academic transcripts and records",
    "Translation of birth certificates",

    "Translation of contracts and agreements",
    "Translation of litigation documents and court cases",
    "Translation of legal powers of attorney",
    "Translation of company incorporation documents",
  ]

  const ARservices = [
    "ترجمة أي مستند قانوني إلى أي لغة",
    "نصيحة خبير الهجرة بشأن الحصول على الجنسية أو الوضع القانوني",
    "إفادات الترجمة",
    "إفادات الترجمة المعتمدة",
    "ترجمة مستندات القبول للجامعات والمدارس الثانوية",
    "ترجمة العقود الملزمة قانونياً بدقة عالية",
    "ترجمة الدعاوى المدنية والملفات القضائية",

    // شهادات قانونية
    "ترجمة شهادات الزواج",
    "ترجمة شهادات الطلاق",
    "ترجمة شهادات الوفاة",
    "ترجمة شهادات التدريب",
    "ترجمة الشهادات الأكاديمية",
    "ترجمة النصوص والسجلات الأكاديمية",
    "ترجمة شهادات الميلاد",

    // وثائق قانونية
    "ترجمة العقود والاتفاقيات",
    "ترجمة وثائق التقاضي ودعاوى المحكمة",
    "ترجمة التوكيلات القانونية",
    "ترجمة عقود التأسيس للشركات"
  ]

  return (
    <div className='App' data-theme={darkMode ? 'dark' : 'light'} >
      
      <Navbar language={lang} toggleLang={toggleLang}></Navbar>
      
      <SlideShow lang={lang}></SlideShow>

      <BusinessHours language={lang} />

      <Trust lang={lang}></Trust>

      <button id='darkButton' onClick={() => setDarkMode(!darkMode)}>{ darkMode ? "🌙" : "☀️"}</button>

      <List Header={lang === "ar" ? "اللغات":"Languages"} languages={lang === "ar" ? ARlanguages : languages} lang={lang}/>
      
      <Piece 
        Big={lang === "ar" ? "من نحن" : "Who we are"}
        Medium={lang === "ar" ? "​نحن مكتب ترجمة معتمد متخصص في تقديم الحلول اللغوية المتكاملة.\n\n نجمع بين الخبرة القانونية والاحترافية اللغوية لضمان قبول مستنداتكم لدى كافة الجهات الحكومية، السفارات، والشركات الدولية.\n\n نحن لا نترجم الكلمات فحسب، بل ننقل المعنى القانوني والتقني بكل أمانة.": "We are a certified translation office specializing in providing integrated language solutions. \n\nWe combine legal expertise and linguistic professionalism to ensure your documents are accepted by all government agencies, embassies, and international companies. \n\nWe don't just translate words; we convey the legal and technical meaning with complete fidelity."}
        ImagePath="./1.jfif"
        align='right'
        lang={lang} 
      />

      <Piece 
        Big= {lang === "ar" ? "خدماتنا الأساسية" : "Our essential services"}
        Medium={lang === "ar" ? "​الترجمة القانونية المعتمدة: (شهادات الميلاد، عقود الزواج، السجلات التجارية، التوكيلات).\n\n ​ترجمة الأعمال والشركات: (التقارير المالية، الميزانيات، اتفاقيات عدم الإفصاح).\n\n ​الترجمة التقنية والعلمية: (كتيبات التشغيل، الأبحاث الأكاديمية، التقارير الطبية).\n\n ​خدمات القيمة المضافة: (تنسيق الملفات المماثل للأصل , المراجعة اللغوية، المساعدة في إجراءات التصديقات)." : "Certified Legal Translation: (Birth certificates, marriage contracts, commercial registers, powers of attorney, etc.).\n Business and Corporate Translation: (Financial reports, balance sheets, non-disclosure agreements, etc.).\n Technical and Scientific Translation: (Operating manuals, academic research, medical reports, etc.).\n Value-Added Services: (File formatting identical to the original, proofreading, assistance with attestation procedures, etc.)."}
        ImagePath="./3.jfif"
        lang={lang}
      />

      <Piece 
        Big={lang === "ar" ? "لماذا يختارنا العملاء؟ ": "Why choose us?"}
        Medium={lang === "ar" ? 'لاعتماد الرسمي: تراجمنا مقبولة لدى جميع السفارات والجهات الرسمية.\n\n ​السرعة والالتزام: ندرك قيمة الوقت، لذا نلتزم بمواعيد التسليم بدقة متناهية.\n\n ​السرية التامة: نطبق بروتوكولات صارمة لحماية بيانات عملائنا ومستنداتهم.\n\n ​الجودة الثنائية: كل ملف يمر بمرحلتي "ترجمة" ثم "تدقيق" قبل الختم النهائي.': "For official accreditation: Our translations are accepted by all embassies and official bodies. \n\nSpeed ​​and commitment: We understand the value of time, so we adhere to delivery deadlines with utmost precision. \n\nComplete confidentiality: We implement strict protocols to protect our clients' data and documents. \n\nDual quality: Every file goes through two stages: translation and then proofreading before final approval."}
        ImagePath="./2.jfif"
        align='right'
        lang={lang}
      />

      <List Header={lang === "ar" ? "خدماتنا" : "Our services"} languages={lang === "ar" ? ARservices : Services} lang={lang}/>

      <Contact lang={lang}></Contact>

      <Shop Name={lang === "ar" ? "موقعنا" : "Location"}/>

      <Footer lang={lang}/>

      <MobileCTA lang={lang}></MobileCTA>

    </div>
  )
}

export default App
