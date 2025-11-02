import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Smartphone, 
  Globe, 
  Lock, 
  Wallet, 
  Headphones, 
  Zap,
  Check,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Send,
  Music,
  Youtube,
  Facebook,
  Twitter,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    const whatsappMessage = encodeURIComponent(`
مرحباً، لدي استفسار:

الاسم: ${formData.name}
البريد الإلكتروني: ${formData.email}
الرسالة: ${formData.message}
    `);

    window.open(`https://wa.me/213660681925?text=${whatsappMessage}`, '_blank');
    alert('شكراً لتواصلك معنا! سيتم الرد على رسالتك قريباً.');
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const buyPlan = (planType: 'basic' | 'advanced' | 'professional') => {
    const plans = {
      'basic': {
        name: 'الخطة الأساسية',
        price: 500,
        data: '1 GB',
        minutes: '100'
      },
      'advanced': {
        name: 'الخطة المتقدمة',
        price: 1200,
        data: '5 GB',
        minutes: '500'
      },
      'professional': {
        name: 'الخطة الاحترافية',
        price: 2500,
        data: '20 GB',
        minutes: 'غير محدودة'
      }
    };

    const plan = plans[planType];
    
    const message = `
شكراً لاختيارك ${plan.name}!

📊 تفاصيل الخطة:
• البيانات: ${plan.data}
• الدقائق: ${plan.minutes}
• السعر: ${plan.price} دج

للمتابعة مع عملية الشراء، يرجى:
1. التواصل معنا عبر الواتساب: +213 660 68 19 25
2. أو البريد الإلكتروني: info@esimdz.dpdns.org

سيتم معالجة طلبك في أقرب وقت ممكن.
    `;

    alert(message);
    
    const whatsappMessage = encodeURIComponent(`مرحباً، أريد شراء ${plan.name} بسعر ${plan.price} دج`);
    window.open(`https://wa.me/213660681925?text=${whatsappMessage}`, '_blank');
  };

  const services = [
    {
      icon: Smartphone,
      title: 'تفعيل فوري',
      description: 'احصل على بطاقتك الرقمية في دقائق معدودة دون انتظار',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Globe,
      title: 'تغطية عالمية',
      description: 'استخدم خدمتك في أكثر من 150 دولة حول العالم',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Lock,
      title: 'آمان وحماية',
      description: 'تشفير عالي المستوى وحماية كاملة لبيانات الاتصالات',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Wallet,
      title: 'أسعار منخفضة',
      description: 'احصل على أفضل الأسعار مع جودة خدمة عالية',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Headphones,
      title: 'دعم فني 24/7',
      description: 'فريق دعم متخصص جاهز لمساعدتك في أي وقت',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Zap,
      title: 'مرونة عالية',
      description: 'تبديل بسيط بين الخطط والعروض حسب احتياجاتك',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'الخطة الأساسية',
      price: 500,
      data: '1 GB بيانات',
      minutes: '100 دقيقة اتصالات',
      validity: 'صلاحية 30 يوم',
      activation: 'تفعيل فوري',
      featured: false,
      planType: 'basic' as const
    },
    {
      name: 'الخطة المتقدمة',
      price: 1200,
      data: '5 GB بيانات',
      minutes: '500 دقيقة اتصالات',
      validity: 'صلاحية 60 يوم',
      activation: 'تفعيل فوري',
      featured: true,
      planType: 'advanced' as const
    },
    {
      name: 'الخطة الاحترافية',
      price: 2500,
      data: '20 GB بيانات',
      minutes: 'اتصالات غير محدودة',
      validity: 'صلاحية 90 يوم',
      activation: 'دعم أولوي',
      featured: false,
      planType: 'professional' as const
    }
  ];

  const paymentMethods = [
    {
      icon: Phone,
      title: 'التحويل البنكي',
      description: 'تحويل مباشر عبر البنك'
    },
    {
      icon: Smartphone,
      title: 'Edahabia',
      description: 'الدفع عبر تطبيق Edahabia'
    },
    {
      icon: Wallet,
      title: 'البطاقة البنكية',
      description: 'Visa و Mastercard'
    },
    {
      icon: Mail,
      title: 'CCP',
      description: 'الحساب البريدي الشيك'
    }
  ];

  const steps = [
    { number: '1', title: 'اختر الخطة', description: 'اختر الخطة التي تناسب احتياجاتك من الخطط المتاحة' },
    { number: '2', title: 'ادفع الثمن', description: 'ادفع عبر الطرق الآمنة المتاحة (CCP، Edahabia، بطاقة بنكية)' },
    { number: '3', title: 'استقبل الكود', description: 'استقبل رمز التفعيل عبر البريد الإلكتروني أو الواتساب' },
    { number: '4', title: 'فعّل البطاقة', description: 'فعّل البطاقة على جهازك واستمتع بالخدمة فورًا' }
  ];

  const internationalMethods = [
    'بطاقة Visa/Mastercard الدولية',
    'PayPal',
    'Wise (TransferWise)',
    'التحويل البنكي الدولي'
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://www.instagram.com/esimdza', title: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Send, url: 'https://t.me/esimdza', title: 'Telegram', color: 'hover:text-sky-500' },
    { icon: Music, url: 'https://www.tiktok.com/@esimdza', title: 'TikTok', color: 'hover:text-black' },
    { icon: Youtube, url: 'https://youtube.com/@esimdz', title: 'YouTube', color: 'hover:text-red-600' },
    { icon: Facebook, url: 'https://www.facebook.com/techplusdz', title: 'Facebook', color: 'hover:text-blue-700' },
    { icon: Twitter, url: 'https://twitter.com/freeprofitx', title: 'Twitter', color: 'hover:text-sky-400' }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-blue-500 to-green-600 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/logo.webp" alt="eSIM DZ Logo" className="w-12 h-12 rounded-full shadow-lg" />
              <div>
                <span className="text-2xl font-bold">eSIM DZ</span>
                <p className="text-xs opacity-80">خدمات eSIM احترافية</p>
              </div>
            </div>
            <ul className="hidden md:flex gap-8 text-sm font-semibold">
              <li><a href="#home" className="hover:text-yellow-300 transition duration-300">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-yellow-300 transition duration-300">الخدمات</a></li>
              <li><a href="#pricing" className="hover:text-yellow-300 transition duration-300">الأسعار</a></li>
              <li><a href="#how-to-buy" className="hover:text-yellow-300 transition duration-300">كيفية الشراء</a></li>
              <li><a href="#contact" className="hover:text-yellow-300 transition duration-300">اتصل بنا</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-500 to-green-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <div className="flex items-center gap-2 mb-4 justify-end">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-semibold text-yellow-300">الحل الأمثل للاتصالات</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                بطاقات eSIM احترافية للجزائر والعالم
              </h1>
              <p className="text-lg mb-8 opacity-95 leading-relaxed">
                احصل على بطاقة SIM رقمية فورية بدون الحاجة إلى بطاقة فيزيائية. خدمة سريعة وآمنة وموثوقة
              </p>
              <div className="flex gap-4 justify-end flex-wrap">
                <Button 
                  onClick={() => document.getElementById('how-to-buy')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-600 hover:bg-yellow-300 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  ابدأ الآن <ArrowRight className="w-5 h-5 mr-2" />
                </Button>
                <Button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg"
                >
                  اعرف المزيد
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-3xl blur-2xl opacity-75"></div>
                <img 
                  src="/logo.webp" 
                  alt="eSIM DZ" 
                  className="w-80 h-80 rounded-3xl shadow-2xl relative animate-bounce"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">خدماتنا المميزة</h2>
            <p className="text-xl text-gray-600">نقدم لك أفضل الخدمات والميزات</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-0 group">
                  <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">خطط الأسعار</h2>
            <p className="text-xl text-gray-600">اختر الخطة المناسبة لاحتياجاتك</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 text-center transition-all duration-300 border-2 ${
                  plan.featured 
                    ? 'border-blue-600 shadow-2xl scale-105 bg-gradient-to-b from-blue-50 to-white' 
                    : 'border-gray-200 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300'
                }`}
              >
                {plan.featured && (
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block">
                    ⭐ الأكثر شهرة
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{plan.name}</h3>
                <div className="text-5xl font-black text-blue-600 mb-6">
                  {plan.price} <span className="text-lg text-gray-600">دج</span>
                </div>
                <ul className="text-right mb-8 space-y-4">
                  <li className="flex items-center justify-end gap-3 text-gray-700 font-medium">
                    <span>{plan.data}</span>
                    <Check className="w-5 h-5 text-green-600 font-bold" />
                  </li>
                  <li className="flex items-center justify-end gap-3 text-gray-700 font-medium">
                    <span>{plan.minutes}</span>
                    <Check className="w-5 h-5 text-green-600 font-bold" />
                  </li>
                  <li className="flex items-center justify-end gap-3 text-gray-700 font-medium">
                    <span>{plan.validity}</span>
                    <Check className="w-5 h-5 text-green-600 font-bold" />
                  </li>
                  <li className="flex items-center justify-end gap-3 text-gray-700 font-medium">
                    <span>{plan.activation}</span>
                    <Check className="w-5 h-5 text-green-600 font-bold" />
                  </li>
                </ul>
                <Button 
                  onClick={() => buyPlan(plan.planType)}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                    plan.featured
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  اشتر الآن
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">كيفية الشراء</h2>
            <p className="text-xl text-gray-600">أربع خطوات بسيطة للحصول على خدمتك</p>
          </div>
          
          {/* Steps */}
          <div className="mb-20">
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full flex items-center justify-center text-3xl font-black mb-3 shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 max-w-xs">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block text-3xl text-blue-600 mx-4">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">طرق الدفع المتاحة</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {paymentMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all border-0">
                    <div className="bg-gradient-to-br from-blue-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{method.title}</h4>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* International Shipping */}
          <Card className="p-12 bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-right">🌍 الشراء من الخارج</h3>
            <p className="text-gray-700 mb-8 text-right text-lg">إذا كنت خارج الجزائر، يمكنك الشراء عبر:</p>
            <ul className="space-y-4 text-right">
              {internationalMethods.map((method, index) => (
                <li key={index} className="flex items-center justify-end gap-4 text-gray-800 font-medium text-lg">
                  <span>{method}</span>
                  <Check className="w-6 h-6 text-green-600 font-bold" />
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">اتصل بنا</h2>
            <p className="text-xl text-gray-600">نحن هنا لمساعدتك في أي وقت</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-6 items-start p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all">
                <Phone className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">الهاتف / واتساب</h4>
                  <a href="tel:+213660681925" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
                    +213 660 68 19 25
                  </a>
                </div>
              </div>
              
              <div className="flex gap-6 items-start p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all">
                <Mail className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">البريد الإلكتروني</h4>
                  <a href="mailto:info@esimdz.dpdns.org" className="text-green-600 hover:text-green-800 font-semibold text-lg">
                    info@esimdz.dpdns.org
                  </a>
                </div>
              </div>
              
              <div className="flex gap-6 items-start p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all">
                <MapPin className="w-8 h-8 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">الموقع</h4>
                  <p className="text-gray-700 font-semibold text-lg">الجزائر 🇩🇿</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gray-900 text-right">أرسل لنا رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="اسمك الكامل"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-right font-medium"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="بريدك الإلكتروني"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-right font-medium"
                  required
                />
                <textarea
                  name="message"
                  placeholder="رسالتك أو استفسارك"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 resize-none text-right font-medium"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:shadow-lg text-white py-4 rounded-lg font-bold text-lg transition-all"
                >
                  {submitted ? '✓ تم الإرسال بنجاح' : 'أرسل الرسالة'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-black mb-12">تابعنا على وسائل التواصل</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.title}
                  className={`w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-white transition-all hover:shadow-xl transform hover:scale-110 ${link.color}`}
                >
                  <Icon className="w-8 h-8" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-right">
              <h4 className="font-bold mb-4 text-xl">عن eSIM DZ</h4>
              <p className="text-gray-400 leading-relaxed">
                نحن متخصصون في توفير خدمات بطاقات eSIM احترافية وموثوقة للجزائر والعالم. خدمة سريعة وآمنة وموثوقة.
              </p>
            </div>
            
            <div className="text-right">
              <h4 className="font-bold mb-4 text-xl">الروابط السريعة</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition">الرئيسية</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">الخدمات</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition">الأسعار</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">اتصل بنا</a></li>
              </ul>
            </div>
            
            <div className="text-right">
              <h4 className="font-bold mb-4 text-xl">المساعدة والدعم</h4>
              <ul className="space-y-2">
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">اتصل بنا</a></li>
                <li><a href="mailto:info@esimdz.dpdns.org" className="text-gray-400 hover:text-white transition">البريد الإلكتروني</a></li>
                <li><a href="tel:+213660681925" className="text-gray-400 hover:text-white transition">الهاتف</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 mb-4">&copy; 2025 eSIM DZ. جميع الحقوق محفوظة.</p>
            <p className="text-gray-500 text-sm">تم بناء هذا الموقع بعناية واحترافية عالية جداً</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
