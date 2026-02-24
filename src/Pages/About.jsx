import { useState } from 'react'

import '../style/index.css'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Shop from '../Components/Shop'
import Piece from '../Components/Piece'
import Contact from "../Components/Contact"
import MobileCTA from '../Components/MobileCTA'
import Trust from '../Components/Trust'

export function About() {

  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("ar");

  const toggleLang = () => {
    setLang(prev => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <div className='App' data-theme={darkMode ? 'dark' : 'light'} >
      
      <Navbar language={lang} toggleLang={toggleLang}></Navbar>
      
      <Trust lang={lang}></Trust>
      
      <button id='darkButton' onClick={() => setDarkMode(!darkMode)}>{ darkMode ? "🌙" : "☀️"}</button>

      <Piece 
        Big={lang === "ar" ? "من نحن" : "Who we are"}
        Medium={lang === "ar" ? "​نحن مكتب ترجمة معتمد متخصص في تقديم الحلول اللغوية المتكاملة.\n\n نجمع بين الخبرة القانونية والاحترافية اللغوية لضمان قبول مستنداتكم لدى كافة الجهات الحكومية، السفارات، والشركات الدولية.\n\n نحن لا نترجم الكلمات فحسب، بل ننقل المعنى القانوني والتقني بكل أمانة.": "We are a certified translation office specializing in providing integrated language solutions. \n\nWe combine legal expertise and linguistic professionalism to ensure your documents are accepted by all government agencies, embassies, and international companies. \n\nWe don't just translate words; we convey the legal and technical meaning with complete fidelity."}
        ImagePath="1.jfif"
        align='right'
        lang={lang} 
      />

      <Piece 
        Big= {lang === "ar" ? "خدماتنا الأساسية" : "Our essential services"}
        Medium={lang === "ar" ? "​الترجمة القانونية المعتمدة: (شهادات الميلاد، عقود الزواج، السجلات التجارية، التوكيلات).\n\n ​ترجمة الأعمال والشركات: (التقارير المالية، الميزانيات، اتفاقيات عدم الإفصاح).\n\n ​الترجمة التقنية والعلمية: (كتيبات التشغيل، الأبحاث الأكاديمية، التقارير الطبية).\n\n ​خدمات القيمة المضافة: (تنسيق الملفات المماثل للأصل , المراجعة اللغوية، المساعدة في إجراءات التصديقات)." : "Certified Legal Translation: (Birth certificates, marriage contracts, commercial registers, powers of attorney, etc.).\n Business and Corporate Translation: (Financial reports, balance sheets, non-disclosure agreements, etc.).\n Technical and Scientific Translation: (Operating manuals, academic research, medical reports, etc.).\n Value-Added Services: (File formatting identical to the original, proofreading, assistance with attestation procedures, etc.)."}
        ImagePath="3.jfif"
        lang={lang}
      />

      <Piece 
        Big={lang === "ar" ? "لماذا يختارنا العملاء؟ ": "Why choose us?"}
        Medium={lang === "ar" ? 'لاعتماد الرسمي: تراجمنا مقبولة لدى جميع السفارات والجهات الرسمية.\n\n ​السرعة والالتزام: ندرك قيمة الوقت، لذا نلتزم بمواعيد التسليم بدقة متناهية.\n\n ​السرية التامة: نطبق بروتوكولات صارمة لحماية بيانات عملائنا ومستنداتهم.\n\n ​الجودة الثنائية: كل ملف يمر بمرحلتي "ترجمة" ثم "تدقيق" قبل الختم النهائي.': "For official accreditation: Our translations are accepted by all embassies and official bodies. \n\nSpeed ​​and commitment: We understand the value of time, so we adhere to delivery deadlines with utmost precision. \n\nComplete confidentiality: We implement strict protocols to protect our clients' data and documents. \n\nDual quality: Every file goes through two stages: translation and then proofreading before final Aboutroval."}
        ImagePath="2.jfif"
        align='right'
        lang={lang}
      />

      <Contact lang={lang}></Contact>

      <Shop Name={lang === "ar" ? "موقعنا" : "Location"}/>

      <Footer lang={lang}/>

      <MobileCTA lang={lang}></MobileCTA>

    </div>
  )
}

export default About