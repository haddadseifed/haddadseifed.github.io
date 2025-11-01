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
  Facebook
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      description: 'احصل على بطاقتك الرقمية في دقائق معدودة دون انتظار'
    },
    {
      icon: Globe,
      title: 'تغطية عالمية',
      description: 'استخدم خدمتك في أكثر من 150 دولة حول العالم'
    },
    {
      icon: Lock,
      title: 'آمان وحماية',
      description: 'تشفير عالي المستوى وحماية كاملة لبيانات الاتصالات'
    },
    {
      icon: Wallet,
      title: 'أسعار منخفضة',
      description: 'احصل على أفضل الأسعار مع جودة خدمة عالية'
    },
    {
      icon: Headphones,
      title: 'دعم فني 24/7',
      description: 'فريق دعم متخصص جاهز لمساعدتك في أي وقت'
    },
    {
      icon: Zap,
      title: 'مرونة عالية',
      description: 'تبديل بسيط بين الخطط والعروض حسب احتياجاتك'
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
    { icon: Instagram, url: 'https://www.instagram.com/esimdza', title: 'Instagram' },
    { icon: Send, url: 'https://t.me/esimdza', title: 'Telegram' },
    { icon: Music, url: 'https://www.tiktok.com/@esimdza', title: 'TikTok' },
    { icon: Youtube, url: 'https://youtube.com/@esimdz', title: 'YouTube' },
    { icon: Facebook, url: 'https://www.facebook.com/techplusdz', title: 'Facebook' }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/logo.webp" alt="eSIM DZ Logo" className="w-10 h-10 rounded-full" />
              <span className="text-xl font-bold">eSIM DZ</span>
            </div>
            <ul className="hidden md:flex gap-8 text-sm font-medium">
              <li><a href="#home" className="hover:opacity-80 transition">الرئيسية</a></li>
              <li><a href="#services" className="hover:opacity-80 transition">الخدمات</a></li>
              <li><a href="#pricing" className="hover:opacity-80 transition">الأسعار</a></li>
              <li><a href="#how-to-buy" className="hover:opacity-80 transition">كيفية الشراء</a></li>
              <li><a href="#contact" className="hover:opacity-80 transition">اتصل بنا</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                بطاقات eSIM احترافية للجزائر والعالم
              </h1>
              <p className="text-lg mb-8 opacity-95">
                احصل على بطاقة SIM رقمية فورية بدون الحاجة إلى بطاقة فيزيائية
              </p>
              <div className="flex gap-4 justify-end flex-wrap">
                <Button 
                  onClick={() => document.getElementById('how-to-buy')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold"
                >
                  ابدأ الآن
                </Button>
                <Button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold"
                >
                  اعرف المزيد
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/logo.webp" 
                alt="eSIM DZ" 
                className="w-64 h-64 rounded-2xl shadow-2xl animate-bounce"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">خدماتنا المميزة</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">خطط الأسعار</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 text-center transition-all duration-300 ${
                  plan.featured 
                    ? 'border-2 border-blue-600 shadow-xl scale-105' 
                    : 'border border-gray-200 hover:shadow-lg hover:-translate-y-2'
                }`}
              >
                {plan.featured && (
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                    الأكثر شهرة
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  {plan.price} <span className="text-lg text-gray-600">دج</span>
                </div>
                <ul className="text-right mb-8 space-y-3">
                  <li className="flex items-center justify-end gap-2 text-gray-600">
                    <span>{plan.data}</span>
                    <Check className="w-5 h-5 text-green-600" />
                  </li>
                  <li className="flex items-center justify-end gap-2 text-gray-600">
                    <span>{plan.minutes}</span>
                    <Check className="w-5 h-5 text-green-600" />
                  </li>
                  <li className="flex items-center justify-end gap-2 text-gray-600">
                    <span>{plan.validity}</span>
                    <Check className="w-5 h-5 text-green-600" />
                  </li>
                  <li className="flex items-center justify-end gap-2 text-gray-600">
                    <span>{plan.activation}</span>
                    <Check className="w-5 h-5 text-green-600" />
                  </li>
                </ul>
                <Button 
                  onClick={() => buyPlan(plan.planType)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
                >
                  اشتر الآن
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">كيفية الشراء</h2>
          
          {/* Steps */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-gray-800">{step.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block text-2xl text-blue-600 mx-2">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">طرق الدفع المتاحة</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {paymentMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                    <Icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-800 mb-2">{method.title}</h4>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* International Shipping */}
          <Card className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-right">الشراء من الخارج</h3>
            <p className="text-gray-600 mb-6 text-right">إذا كنت خارج الجزائر، يمكنك الشراء عبر:</p>
            <ul className="space-y-3 text-right">
              {internationalMethods.map((method, index) => (
                <li key={index} className="flex items-center justify-end gap-3 text-gray-700">
                  <span>{method}</span>
                  <Check className="w-5 h-5 text-green-600" />
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">اتصل بنا</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">الهاتف / واتساب</h4>
                  <a href="tel:+213660681925" className="text-blue-600 hover:underline">
                    +213 660 68 19 25
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">البريد الإلكتروني</h4>
                  <a href="mailto:info@esimdz.dpdns.org" className="text-blue-600 hover:underline">
                    info@esimdz.dpdns.org
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">الموقع</h4>
                  <p className="text-gray-600">الجزائر</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 text-right">أرسل لنا رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="اسمك"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="بريدك الإلكتروني"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  required
                />
                <textarea
                  name="message"
                  placeholder="رسالتك"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 resize-none"
                  required
                />
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold"
                >
                  أرسل الرسالة
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">تابعنا على وسائل التواصل</h3>
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
                  className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-right">
              <h4 className="font-bold mb-4">عن eSIM DZ</h4>
              <p className="text-gray-400 text-sm">
                نحن متخصصون في توفير خدمات بطاقات eSIM احترافية وموثوقة للجزائر والعالم.
              </p>
            </div>
            
            <div className="text-right">
              <h4 className="font-bold mb-4">الروابط السريعة</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-400 hover:text-white">الرئيسية</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">الخدمات</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">الأسعار</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">اتصل بنا</a></li>
              </ul>
            </div>
            
            <div className="text-right">
              <h4 className="font-bold mb-4">المساعدة والدعم</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#contact" className="text-gray-400 hover:text-white">اتصل بنا</a></li>
                <li><a href="mailto:info@esimdz.dpdns.org" className="text-gray-400 hover:text-white">البريد الإلكتروني</a></li>
                <li><a href="tel:+213660681925" className="text-gray-400 hover:text-white">الهاتف</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 eSIM DZ. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
