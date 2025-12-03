import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Home, 
  Briefcase, 
  CheckCircle, 
  BarChart3, 
  Globe, 
  Menu, 
  X,
  ArrowRight,
  Wallet,
  AlertTriangle,
  Hammer,
  GraduationCap,
  Truck,
  Utensils,
  Stethoscope,
  ShoppingBag,
  Camera
} from 'lucide-react';

// --- CONTENT DICTIONARY (Full Text Preservation) ---
const content = {
  en: {
    nav: {
      home: "Home",
      priorities: "Priorities",
      workforce: "Workforce",
      real_estate: "Real Estate",
      fiscal: "Fiscal Impact",
      proposal: "Proposal",
    },
    hero: {
      title: "The Alberta Advantage",
      subtitle: "Unlocking the Potential of Integrated Ukrainian Workers",
      tagline: "A practical, Alberta-driven labour solution.",
      cta: "Read the Proposal"
    },
    intro: {
      title: "Not a Request for Support - A Solution",
      text: "We are not asking for support - we are presenting a practical, Alberta-driven labour solution. Ukrainians who arrived under emergency measures have spent the last three years integrating into Alberta’s workforce, contributing economically, and building stable community ties."
    },
    priorities: {
      title: "Alberta’s Priorities",
      list: [
        {
          title: "1. Economic Leadership & Autonomy",
          desc: "Strengthening provincial control over workforce selection through AAIP and reducing reliance on federal timelines that slow growth."
        },
        {
          title: "2. Labour Force Expansion",
          desc: "Addressing shortages in trades, construction, logistics, agriculture, hospitality, childcare, and healthcare support roles."
        },
        {
          title: "3. Strong, Stable Communities",
          desc: "Building an Alberta where families can work, invest, and participate fully in local life."
        }
      ]
    },
    workforce: {
      title: "The Ukrainian Workforce",
      points: [
        {
          title: "1. Labour-Ready and Integrated",
          desc: "Three years in Alberta. Employed and paying taxes. Economically self-sufficient. Successfully integrated into workplaces and communities."
        },
        {
          title: "2. Strong Entrepreneurship & Investment Potential",
          desc: "Many newcomers are ready to launch businesses, expand existing ones, and purchase homes - but their temporary status prevents long-term financial commitments. They are afraid to take these steps because they do not know whether they will be allowed to stay."
        },
        {
          title: "3. The Barrier: Uncertainty",
          desc: "Without a pathway to stability, capital remains sidelined, and employers face ongoing turnover - despite having experienced workers already in place."
        }
      ],
      quote: "“Premier, providing a pathway to stability will allow thousands of already integrated workers to fully invest, build businesses, purchase homes, and contribute long-term to Alberta’s prosperity.”"
    },
    real_estate: {
      title: "Real Estate & Housing Stability",
      intro: "Today, most Ukrainians in Alberta are renters. They are increasing demand in the rental market because their temporary status makes them afraid to take on a 25-year mortgage.",
      impact_title: "5-Year Impact: Simple Calculation",
      pop_data: "Population: ~57,000 Ukrainians → ~24,000 families. Assume 40% qualify for mortgages with PR → 9,600 potential buyers.",
      cards: [
        {
          label: "Home Purchases (Conservative)",
          value: "$4.8 BILLION",
          sub: "9,600 buyers × $500,000 avg price. New demand for housing over 5 years."
        },
        {
          label: "Annual Impact",
          value: "$1 BILLION/yr",
          sub: "Injected into Alberta’s real estate and construction sector."
        },
        {
          label: "Rental Market Relief",
          value: "8,000 Units Freed",
          sub: "Vacancy rate increases, rent inflation slows."
        },
        {
          label: "Long-Term Anchor",
          value: "240,000 Years",
          sub: "9,600 mortgages × 25 years of stable commitment."
        }
      ],
      summary: "PR does not add new people; it shifts existing residents from the overheated rental market into long-term ownership, stabilizing rents and giving Alberta’s builders predictable demand."
    },
    fiscal: {
      title: "The Cost of Inaction",
      intro: "Alberta has already invested in Ukrainian newcomers for three years. If Alberta does not offer a pathway to PR, this human capital will move to other provinces or back to Europe.",
      warning: "Alberta cannot afford to become an incubator for other provinces’ labour force, taxpayers, and homeowners.",
      calc_title: "Projected Provincial Tax Revenue (5 Years)",
      calc_steps: [
        { label: "Working-age families", val: "~24,000" },
        { label: "Income Tax (Avg $60k/yr)", val: "$4,800/yr" },
        { label: "Consumption Taxes", val: "+ $2,500/yr" },
        { label: "Total per family", val: "~$7,300/yr" },
        { label: "Total Annual Revenue", val: "$175 MILLION" },
        { label: "5-Year Projection", val: "$875 MILLION", highlight: true }
      ],
      comparisons: {
        title: "Putting the Numbers in Context",
        coal: {
          title: "vs. Coal Royalty + Rentals",
          val1: "$138M-$157M",
          val2: "$175M",
          text: "Ukrainians contribute more to Alberta’s revenue each year than the entire Coal Royalty sector."
        },
        city: {
          title: "vs. City of Medicine Hat Budget",
          val1: "$549M",
          val2: "$875M",
          text: "In five years, Ukrainian workers contribute more revenue (~$875M) than the entire annual budget of Medicine Hat."
        }
      }
    },
    proposal_detail: {
      title: "Retaining Integrated Workers: A Practical Proposal",
      intro: "We fully recognize that permanent residency decisions are under federal jurisdiction. Our intention is not to request a new large-scale program, but to offer a practical, retention-focused idea for Alberta.",
      sections: [
        {
          title: "1. Importance of Retaining Workers",
          text: "Replacing an existing, fully trained employee requires recruitment efforts, onboarding costs, and lower productivity. A retention-based approach preserves workforce stability."
        },
        {
          title: "2. Critical Occupations",
          text: "Many Ukrainian workers are employed in sectors with ongoing shortages:",
          list: [
            "Construction & Skilled Trades",
            "Transportation & Logistics",
            "Manufacturing & Warehousing",
            "Childcare & Education Support",
            "Food Production & Processing",
            "Hospitality & Service Operations",
            "Health-care Support Roles"
          ]
        },
        {
          title: "3. Non-Critical Occupations",
          text: "Roles that keep the service economy functioning smoothly:",
          list: [
            "Retail",
            "Customer Service",
            "Administrative Roles",
            "Cleaning & Maintenance",
            "General Labour"
          ]
        },
        {
          title: "4. Recognition of Self-Employed",
          text: "Many Ukrainians have become self-employed tradespeople, contractors, and small business owners. Recognizing them would support the small-business ecosystem and increase tax revenue.",
          list: [
            "Tradespeople & Contractors",
            "Renovators",
            "Delivery Operators",
            "IT Specialists",
            "Home-based Service Providers"
          ]
        },
        {
          title: "5. Retention as an Alberta-First Solution",
          text: "This is not an expansion of immigration. It is an opportunity to retain established contributors who are already here. We respectfully invite the Government of Alberta to explore options within existing provincial tools (AAIP)."
        }
      ]
    }
  },
  uk: {
    nav: {
      home: "Головна",
      priorities: "Пріоритети",
      workforce: "Робоча сила",
      real_estate: "Нерухомість",
      fiscal: "Бюджет",
      proposal: "Пропозиція",
    },
    hero: {
      title: "Перевага Альберти",
      subtitle: "Розкриття потенціалу інтегрованих українських працівників",
      tagline: "Практичне рішення для ринку праці Альберти.",
      cta: "Читати пропозицію"
    },
    intro: {
      title: "Не прохання про підтримку — а рішення",
      text: "Ми не просимо про підтримку — ми представляємо практичне рішення для Альберти. Українці, які прибули в рамках екстрених заходів, за останні три роки інтегрувалися в робочу силу Альберти, роблячи економічний внесок та будуючи стабільні зв'язки з громадою."
    },
    priorities: {
      title: "Пріоритети Альберти",
      list: [
        {
          title: "1. Економічне лідерство та автономія",
          desc: "Посилення провінційного контролю над відбором робочої сили через AAIP та зменшення залежності від федеральних термінів, що уповільнюють зростання."
        },
        {
          title: "2. Розширення робочої сили",
          desc: "Вирішення дефіциту кадрів у торгівлі, будівництві, логістиці, сільському господарстві, сфері гостинності, догляді за дітьми та охороні здоров'я."
        },
        {
          title: "3. Сильні, стабільні громади",
          desc: "Побудова Альберти, де сім'ї можуть працювати, інвестувати та брати повну участь у місцевому житті."
        }
      ]
    },
    workforce: {
      title: "Українська робоча сила",
      points: [
        {
          title: "1. Готові до праці та інтегровані",
          desc: "Три роки в Альберті. Працевлаштовані та платять податки. Економічно самодостатні. Успішно інтегровані в робочі колективи та громади."
        },
        {
          title: "2. Сильний підприємницький потенціал",
          desc: "Багато новоприбулих готові відкривати бізнес, розширювати існуючий та купувати житло — але їхній тимчасовий статус заважає довгостроковим фінансовим зобов'язанням. Вони бояться робити ці кроки через невизначеність."
        },
        {
          title: "3. Бар'єр: Невизначеність",
          desc: "Без шляху до стабільності капітал залишається замороженим, а роботодавці стикаються з плинністю кадрів — незважаючи на наявність досвідчених працівників."
        }
      ],
      quote: "“Пані Прем'єр, надання шляху до стабільності дозволить тисячам вже інтегрованих працівників повністю інвестувати, будувати бізнес, купувати житло та робити довгостроковий внесок у процвітання Альберти.”"
    },
    real_estate: {
      title: "Нерухомість та житлова стабільність",
      intro: "Сьогодні більшість українців в Альберті є орендарями. Вони підвищують попит на ринку оренди, оскільки їхній тимчасовий статус змушує їх боятися брати іпотеку на 25 років.",
      impact_title: "Вплив за 5 років: Простий розрахунок",
      pop_data: "Населення: ~57,000 українців → ~24,000 сімей. Припускаємо, що 40% кваліфікуються на іпотеку з PR → 9,600 потенційних покупців.",
      cards: [
        {
          label: "Купівля житла (Консервативно)",
          value: "$4.8 МІЛЬЯРДА",
          sub: "9,600 покупців × $500,000 сер. ціна. Новий попит на житло за 5 років."
        },
        {
          label: "Щорічний вплив",
          value: "$1 МІЛЬЯРД/рік",
          sub: "Вливання в сектор нерухомості та будівництва Альберти."
        },
        {
          label: "Полегшення ринку оренди",
          value: "8,000 Квартир звільнено",
          sub: "Рівень вакантності зростає, інфляція оренди сповільнюється."
        },
        {
          label: "Довгостроковий якір",
          value: "240,000 Років",
          sub: "9,600 іпотек × 25 років стабільного зобов'язання."
        }
      ],
      summary: "PR не додає нових людей; він переводить існуючих мешканців з перегрітого ринку оренди у довгострокову власність, стабілізуючи оренду та даючи забудовникам Альберти передбачуваний попит."
    },
    fiscal: {
      title: "Вартість бездіяльності",
      intro: "Альберта вже інвестувала в українських новоприбулих протягом трьох років. Якщо Альберта не запропонує шлях до PR, цей людський капітал переїде в інші провінції або повернеться до Європи.",
      warning: "Альберта не може дозволити собі стати інкубатором для робочої сили, платників податків та власників житла інших провінцій.",
      calc_title: "Прогнозований податковий дохід (5 років)",
      calc_steps: [
        { label: "Сім'ї працездатного віку", val: "~24,000" },
        { label: "Податок на дохід (Сер. $60k/рік)", val: "$4,800/рік" },
        { label: "Податки на споживання", val: "+ $2,500/рік" },
        { label: "Всього на сім'ю", val: "~$7,300/рік" },
        { label: "Загальний річний дохід", val: "$175 МІЛЬЙОНІВ" },
        { label: "Прогноз на 5 років", val: "$875 МІЛЬЙОНІВ", highlight: true }
      ],
      comparisons: {
        title: "Цифри в контексті",
        coal: {
          title: "проти Угольних Роялті + Оренди",
          val1: "$138M-$157M",
          val2: "$175M",
          text: "Українці вносять більше в дохід Альберти щороку, ніж весь сектор вугільних роялті."
        },
        city: {
          title: "проти Бюджету Медісін-Гет",
          val1: "$549M",
          val2: "$875M",
          text: "За п'ять років українські працівники внесуть більше доходу (~$875M), ніж весь річний бюджет міста Медісін-Гет."
        }
      }
    },
    proposal_detail: {
      title: "Утримання інтегрованих працівників: Практична пропозиція",
      intro: "Ми повністю визнаємо, що рішення про постійне проживання знаходяться у федеральній юрисдикції. Наш намір — не просити про нову масштабну програму, а запропонувати практичну ідею для Альберти.",
      sections: [
        {
          title: "1. Важливість утримання працівників",
          text: "Заміна існуючого, повністю навченого працівника вимагає зусиль з найму, витрат на адаптацію та зниження продуктивності. Підхід, заснований на утриманні, зберігає стабільність робочої сили."
        },
        {
          title: "2. Критичні професії",
          text: "Багато українських працівників зайняті в секторах з постійним дефіцитом:",
          list: [
            "Будівництво та кваліфіковані ремесла",
            "Транспорт та логістика",
            "Виробництво та складське господарство",
            "Догляд за дітьми та підтримка освіти",
            "Виробництво та переробка продуктів харчування",
            "Гостинність та сервісні операції",
            "Допоміжні ролі в охороні здоров'я"
          ]
        },
        {
          title: "3. Некритичні професії",
          text: "Ролі, які забезпечують безперебійне функціонування сервісної економіки:",
          list: [
            "Роздрібна торгівля",
            "Обслуговування клієнтів",
            "Адміністративні ролі",
            "Прибирання та обслуговування",
            "Загальна праця"
          ]
        },
        {
          title: "4. Визнання самозайнятих",
          text: "Багато українців стали самозайнятими ремісниками, підрядниками та власниками малого бізнесу. Їх визнання підтримає екосистему малого бізнесу та збільшить податкові надходження.",
          list: [
            "Ремісники та підрядники",
            "Ремонтники",
            "Оператори доставки",
            "IT-спеціалісти",
            "Надавачі домашніх послуг"
          ]
        },
        {
          title: "5. Утримання як рішення 'Alberta-First'",
          text: "Це не розширення імміграції. Це можливість утримати встановлених платників податків, які вже тут. Ми шанобливо запрошуємо Уряд Альберти розглянути варіанти в межах існуючих провінційних інструментів (AAIP)."
        }
      ]
    }
  }
};

const App = () => {
  const [lang, setLang] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = content[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'uk' : 'en');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-800">
      
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900 text-white z-50 shadow-lg border-b border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-sky-800 p-2 rounded-lg border border-sky-600">
                <Building2 className="h-6 w-6 text-yellow-400" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wide">Alberta<span className="text-yellow-400">Advantage</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {Object.entries(t.nav).map(([key, label]) => (
                <a key={key} href={`#${key}`} className="hover:text-yellow-400 transition-colors text-sm font-bold uppercase tracking-wider">{label}</a>
              ))}
              <button 
                onClick={toggleLang}
                className="flex items-center space-x-1 bg-slate-800 border border-slate-600 px-4 py-2 rounded-full hover:bg-slate-700 transition-colors hover:border-yellow-500"
              >
                <Globe className="h-4 w-4 text-yellow-500" />
                <span className="text-xs font-bold text-white">{lang === 'en' ? 'UKR' : 'ENG'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-800 border-t border-slate-700 absolute w-full shadow-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
               {Object.entries(t.nav).map(([key, label]) => (
                <a key={key} href={`#${key}`} onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium hover:bg-slate-700 rounded border-b border-slate-700 text-white">{label}</a>
              ))}
              <button onClick={() => { toggleLang(); setIsMenuOpen(false); }} className="w-full text-left px-3 py-4 text-yellow-400 font-bold bg-slate-900">
                {lang === 'en' ? 'Переключити на Українську' : 'Switch to English'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 relative bg-slate-900 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523293836414-f04e712e1f3b?q=80&w=2023&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 mb-8 rounded-full bg-sky-900/80 border border-sky-500/50 backdrop-blur-md">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sky-200 text-sm font-bold tracking-wide uppercase">{t.hero.tagline}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white mb-8 leading-tight drop-shadow-2xl">
            {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl font-light mb-12 leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#proposal" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center">
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Intro Quote Strip */}
      <div className="bg-white border-b border-gray-200 shadow-sm relative z-10 -mt-8 mx-4 md:mx-auto max-w-5xl rounded-xl">
        <div className="px-6 py-8 md:p-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 font-serif">{t.intro.title}</h2>
          <p className="text-slate-600 text-lg leading-relaxed">{t.intro.text}</p>
        </div>
      </div>

      {/* Priorities Section */}
      <section id="priorities" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900">{t.priorities.title}</h2>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.priorities.list.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-sky-700">
                <div className="mb-4 text-sky-700">
                  {idx === 0 && <TrendingUp className="h-10 w-10" />}
                  {idx === 1 && <Briefcase className="h-10 w-10" />}
                  {idx === 2 && <Home className="h-10 w-10" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workforce Deep Dive */}
      <section id="workforce" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-10">{t.workforce.title}</h2>
              <div className="space-y-10">
                {t.workforce.points.map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold border border-sky-200">
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{point.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Featured Quote Card */}
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200 flex flex-col justify-center">
              <div className="mb-6">
                <Users className="h-12 w-12 text-yellow-500" />
              </div>
              <blockquote className="text-xl font-serif italic text-slate-700 leading-relaxed mb-6">
                {t.workforce.quote}
              </blockquote>
              <div className="h-1 w-20 bg-sky-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Estate / Math Section */}
      <section id="real_estate" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t.real_estate.title}</h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">{t.real_estate.intro}</p>
          </div>

          <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 mb-12 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center justify-center">
              <BarChart3 className="mr-2 h-5 w-5" />
              {t.real_estate.impact_title}
            </h3>
            <p className="text-center text-slate-300 font-mono text-sm md:text-base mb-8">{t.real_estate.pop_data}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.real_estate.cards.map((card, idx) => (
                <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-sky-500 transition-colors">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{card.label}</div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{card.value}</div>
                  <div className="text-xs text-slate-400 leading-normal">{card.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
             <div className="inline-block px-6 py-3 bg-green-900/30 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
                {t.real_estate.summary}
             </div>
          </div>
        </div>
      </section>

      {/* Fiscal Impact */}
      <section id="fiscal" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* The Problem */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="h-8 w-8 text-red-500" />
                <h2 className="text-3xl font-serif font-bold text-slate-900">{t.fiscal.title}</h2>
              </div>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">{t.fiscal.intro}</p>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                <p className="text-red-800 font-medium italic">
                  "{t.fiscal.warning}"
                </p>
              </div>

              {/* Comparisions */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">{t.fiscal.comparisons.title}</h3>
                
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-700 mb-4 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    {t.fiscal.comparisons.coal.title}
                  </h4>
                  <div className="flex items-end justify-between mb-2">
                     <span className="text-2xl font-bold text-slate-400">{t.fiscal.comparisons.coal.val1}</span>
                     <span className="text-sm text-slate-400 mb-1">vs</span>
                     <span className="text-3xl font-bold text-green-600">{t.fiscal.comparisons.coal.val2}</span>
                  </div>
                  <p className="text-xs text-slate-500">{t.fiscal.comparisons.coal.text}</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-700 mb-4 flex items-center">
                    <Building2 className="h-4 w-4 mr-2" />
                    {t.fiscal.comparisons.city.title}
                  </h4>
                  <div className="flex items-end justify-between mb-2">
                     <span className="text-2xl font-bold text-slate-400">{t.fiscal.comparisons.city.val1}</span>
                     <span className="text-sm text-slate-400 mb-1">vs</span>
                     <span className="text-3xl font-bold text-green-600">{t.fiscal.comparisons.city.val2}</span>
                  </div>
                  <p className="text-xs text-slate-500">{t.fiscal.comparisons.city.text}</p>
                </div>
              </div>
            </div>

            {/* The Math (Receipt Style) */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-sky-500"></div>
              <h3 className="text-xl font-bold mb-8 text-center border-b border-slate-700 pb-4">{t.fiscal.calc_title}</h3>
              
              <div className="space-y-4 font-mono text-sm md:text-base">
                {t.fiscal.calc_steps.map((step, idx) => (
                  <div key={idx} className={`flex justify-between items-center ${step.highlight ? 'pt-6 border-t border-slate-600' : ''}`}>
                    <span className={step.highlight ? 'text-yellow-400 font-bold text-lg' : 'text-slate-300'}>{step.label}</span>
                    <span className={step.highlight ? 'text-white font-bold text-2xl' : 'text-white'}>{step.val}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                <Wallet className="h-8 w-8 text-sky-400 mx-auto mb-2" />
                <p className="text-xs text-slate-400">Estimated contribution based on current tax rates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Proposal */}
      <section id="proposal" className="py-24 bg-sky-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">{t.proposal_detail.title}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t.proposal_detail.intro}</p>
          </div>

          <div className="space-y-8">
            {/* 1. Retention */}
            <ProposalCard 
              number="1"
              title={t.proposal_detail.sections[0].title}
              text={t.proposal_detail.sections[0].text}
              icon={<Users className="w-6 h-6 text-white" />}
            />

            {/* 2. Critical */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
               <div className="bg-sky-700 p-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold mr-3">2</div>
                  <h3 className="text-lg font-bold text-white">{t.proposal_detail.sections[1].title}</h3>
               </div>
               <div className="p-8">
                  <p className="text-slate-600 mb-6">{t.proposal_detail.sections[1].text}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {t.proposal_detail.sections[1].list.map((item, i) => (
                      <div key={i} className="flex items-center text-slate-800 font-medium">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            {/* 3. Non-Critical */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
               <div className="bg-sky-700 p-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold mr-3">3</div>
                  <h3 className="text-lg font-bold text-white">{t.proposal_detail.sections[2].title}</h3>
               </div>
               <div className="p-8">
                  <p className="text-slate-600 mb-6">{t.proposal_detail.sections[2].text}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {t.proposal_detail.sections[2].list.map((item, i) => (
                      <div key={i} className="flex items-center text-slate-800 font-medium">
                        <CheckCircle className="w-4 h-4 text-sky-500 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            {/* 4. Self Employed */}
             <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
               <div className="bg-sky-700 p-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold mr-3">4</div>
                  <h3 className="text-lg font-bold text-white">{t.proposal_detail.sections[3].title}</h3>
               </div>
               <div className="p-8">
                  <p className="text-slate-600 mb-6">{t.proposal_detail.sections[3].text}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {t.proposal_detail.sections[3].list.map((item, i) => (
                      <div key={i} className="flex items-center text-slate-800 font-medium">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
               </div>
            </div>

             {/* 5. Conclusion */}
            <ProposalCard 
              number="5"
              title={t.proposal_detail.sections[4].title}
              text={t.proposal_detail.sections[4].text}
              icon={<Globe className="w-6 h-6 text-white" />}
              highlight
            />

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <Building2 className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
          <h3 className="text-white font-serif text-2xl font-bold mb-4">Alberta Advantage</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
             Advocating for the economic integration and retention of Ukrainian workers who call Alberta home.
          </p>
          <div className="w-24 h-1 bg-sky-700 mx-auto mb-8 rounded-full"></div>
          <div className="text-slate-600 text-sm">
            © 2024 Alberta Ukrainian Integration Advocacy
          </div>
        </div>
      </footer>

    </div>
  );
};

const ProposalCard = ({ number, title, text, icon, highlight }) => (
  <div className={`bg-white rounded-xl shadow-md border overflow-hidden ${highlight ? 'border-yellow-500 ring-4 ring-yellow-500/10' : 'border-gray-100'}`}>
      <div className={`${highlight ? 'bg-yellow-600' : 'bg-sky-700'} p-4 flex items-center`}>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold mr-3">{number}</div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="p-8">
          <p className="text-slate-600 text-lg leading-relaxed">{text}</p>
      </div>
  </div>
);

export default App;
