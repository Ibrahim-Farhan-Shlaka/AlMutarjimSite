import { useState } from 'react'

import '../style/index.css'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Shop from '../Components/Shop'
import List from "../Components/List"
import Contact from "../Components/Contact"
import BusinessHours from '../Components/BusinessHours'
import MobileCTA from '../Components/MobileCTA'
import ServicesList from '../Components/ServicesList'

export function Services() {

  const [darkMode, setDarkMode] = useState(false);
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

  const servicesData = [
    {
      title: { en: "Certificates", ar: "الشهادات" },
      items: [
        { name: { en: "Birth Certificate", ar: "شهادة ميلاد" }, image: "/docs/birth.jpg" },
        { name: { en: "Marriage Certificate", ar: "شهادة زواج" }, image: "/docs/marriage.jpg" },
        { name: { en: "Divorce Certificate", ar: "شهادة طلاق" }, image: "/docs/divorce.jpg" },
        { name: { en: "Death Certificate", ar: "شهادة وفاة" }, image: "/docs/death.jpg" },
        { name: { en: "Academic Certificate", ar: "شهادة دراسية" }, image: "/docs/academic.jpg" },
        { name: { en: "Diploma Certificate", ar: "شهادة دبلوم" }, image: "/docs/diploma.jpg" }
      ]
    },

    {
      title: { en: "Legal Documents", ar: "المستندات القانونية" },
      items: [
        { name: { en: "Contracts", ar: "العقود" }, image: "/docs/contract.jpg" },
        { name: { en: "Court Documents", ar: "وثائق المحاكم" }, image: "/docs/court.jpg" },
        { name: { en: "Power of Attorney", ar: "الوكالات القانونية" }, image: "/docs/poa.jpg" },
        { name: { en: "Affidavits", ar: "الإقرارات القانونية" }, image: "/docs/affidavit.jpg" }
      ]
    },

    {
      title: { en: "Commercial Documents", ar: "المستندات التجارية" },
      items: [
        { name: { en: "Invoices", ar: "الفواتير" }, image: "/docs/invoice.jpg" },
        { name: { en: "Company Registration", ar: "تسجيل الشركات" }, image: "/docs/company.jpg" },
        { name: { en: "Business Licenses", ar: "رخص تجارية" }, image: "/docs/license.jpg" },
        { name: { en: "Financial Reports", ar: "تقارير مالية" }, image: "/docs/finance.jpg" }
      ]
    },

    {
      title: { en: "Medical Documents", ar: "المستندات الطبية" },
      items: [
        { name: { en: "Medical Reports", ar: "تقارير طبية" }, image: "/docs/medical.jpg" },
        { name: { en: "Prescriptions", ar: "الوصفات الطبية" }, image: "/docs/prescription.jpg" },
        { name: { en: "Hospital Records", ar: "سجلات المستشفيات" }, image: "/docs/hospital.jpg" }
      ]
    },

    {
      title: { en: "Immigration Documents", ar: "وثائق الهجرة" },
      items: [
        { name: { en: "Visa Documents", ar: "وثائق التأشيرة" }, image: "/docs/visa.jpg" },
        { name: { en: "Residency Papers", ar: "أوراق الإقامة" }, image: "/docs/residency.jpg" },
        { name: { en: "Passport Documents", ar: "وثائق جواز السفر" }, image: "/docs/passport.jpg" }
      ]
    }
  ]



  return (
    <div className='App' data-theme={darkMode ? 'dark' : 'light'} >
      
      <Navbar language={lang} toggleLang={toggleLang}></Navbar>
      
      <ServicesList Header={lang === "ar" ? "خدماتنا الأساسية" : "Our translation Services"} data={servicesData} lang={lang}></ServicesList>

      <List Header={lang === "ar" ? "اللغات":"Languages"} languages={lang === "ar" ? ARlanguages : languages} lang={lang}/>
      
      <BusinessHours language={lang} />

      <button id='darkButton' onClick={() => setDarkMode(!darkMode)}>{ darkMode ? "🌙" : "☀️"}</button>

      <Contact lang={lang}></Contact>

      <Shop Name={lang === "ar" ? "موقعنا" : "Location"}/>

      <Footer lang={lang}/>

      <MobileCTA lang={lang}></MobileCTA>

    </div>
  )
}

export default Services