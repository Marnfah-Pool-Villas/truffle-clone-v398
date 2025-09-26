export type Language = 'en' | 'th' | 'zh-CN' | 'zh-TW' | 'ja' | 'ko' | 'ru' | 'hi' | 'es' | 'fr' | 'ar' | 'ms' | 'vi'

export interface Translations {
  nav: {
    residence: string
    location: string
    map: string
    wealth: string
    language: string
    contact: string
  }

  hero: {
    subtitle1: string
    subtitle2: string
    subtitle3: string
  }

  properties: {
    title: string
    description: string
    priceRange: string
    villa1: {
      name: string
      features: string
      description: string
      status: string
    }
    villa2: {
      name: string
      features: string
      description: string
      status: string
    }
    villa3: {
      name: string
      features: string
      description: string
      status: string
    }
    startingFrom: string
    available: string
    reserved: string
  }

  amenities: {
    title: string
    description: string
    features: {
      pools: string
      spa: string
      concierge: string
      gardens: string
    }
  }

  exclusive: {
    title: string
    description: string
    buttonText: string
  }

  location: {
    title: string
    stats: {
      beaches: string
      restaurants: string
      amenities: string
    }
    locationStats: {
      beaches: {
        title: string
        subtitle: string
      }
      golf: {
        title: string
        subtitle: string
      }
      schools: {
        title: string
        subtitle: string
      }
    }
    beachCards: {
      patong: {
        title: string
        description: string
        features: string[]
      }
      kata: {
        title: string
        description: string
        features: string[]
      }
      karon: {
        title: string
        description: string
        features: string[]
      }
    }
    mapSection: {
      title: string
      description: string
    }
  }

  investment: {
    title: string
    metrics: {
      roi: {
        title: string
        subtitle: string
      }
      yield: {
        title: string
        subtitle: string
      }
      tax: {
        title: string
        subtitle: string
      }
    }
    marketAnalysis: {
      title: string
      luxuryGrowth: string
      foreignInvestment: string
      gdpGrowth: string
      chartTitle: string
      chartInsights: {
        growth: string
        average2009: string
        average2024: string
      }
    }
    benefits: {
      title: string
      items: {
        residency: {
          title: string
          description: string
        }
        tax: {
          title: string
          description: string
        }
        currency: {
          title: string
          description: string
        }
        management: {
          title: string
          description: string
        }
        lifestyle: {
          title: string
          description: string
        }
        ownership: {
          title: string
          description: string
        }
      }
    }
    stability: {
      title: string
      description: string
      metrics: {
        rating: {
          title: string
          subtitle: string
        }
        gdp: {
          title: string
          subtitle: string
        }
        tourists: {
          title: string
          subtitle: string
        }
      }
    }
  }

  virtualTour: {
    title: string
    subtitle: string
    features: {
      views360: {
        title: string
        description: string
      }
      navigation: {
        title: string
        description: string
      }
      walkthrough: {
        title: string
        description: string
      }
    }
    buttons: {
      pictures: string
      videoTour: string
    }
    villas: {
      type1: {
        name: string
        description: string
        status: string
        rooms: {
          living: string
          master: string
          pool: string
          kitchen: string
          terrace: string
        }
      }
      type2: {
        name: string
        description: string
        status: string
        rooms: {
          living: string
          master: string
          pool: string
          kitchen: string
          garden: string
        }
      }
      type3: {
        name: string
        description: string
        status: string
        rooms: {
          living: string
          master: string
          pool: string
          kitchen: string
          garden: string
        }
      }
    }
    interface: {
      selectVilla: string
      startTour: string
      nextRoom: string
      prevRoom: string
      closeTour: string
      hotspots: string
    }
  }

  contact: {
    title: string
    form: {
      firstName: string
      lastName: string
      email: string
      phone: string
      villaOfInterest: string
      message: string
      submit: string
      placeholders: {
        firstName: string
        lastName: string
        email: string
        phone: string
        villaSelect: string
        allVillas: string
        villa1: string
        villa2: string
        villa3: string
        villa4: string
        message: string
      }
    }
  }

  footer: {
    exclusiveDevelopment: string
    whatsapp: string
    wechat: string
    line: string
    copyright: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      residence: "Home ↗",
      location: "Gallery ↗",
      map: "Map ↗",
      wealth: "Market ↗",
      language: "Language",
      contact: "Contact"
    },
    hero: {
      subtitle1: "Pattaya's most prestigious estate",
      subtitle2: "Premium finishes in seamless form",
      subtitle3: "Timeless design with views that inspire"
    },
    properties: {
      title: "Supreme Elegance",
      description: "Experience tropical opulence\nWarm wood and Italian stone accents\nLimited availability from ฿10.9M to ฿34.9M",
      priceRange: "",
      villa1: {
        name: "Tranquility",
        features: "4 Bedrooms | Type 3",
        description: "",
        status: "Reserved"
      },
      villa2: {
        name: "Serenity",
        features: "4 Bedrooms | Type 2",
        description: "",
        status: "2 Available"
      },
      villa3: {
        name: "Harmony",
        features: "5 Bedrooms | Type 1",
        description: "",
        status: "1 Available"
      },
      startingFrom: "Starting from",
      available: "Available",
      reserved: "Reserved"
    },
    amenities: {
      title: "Premium Amenities",
      description: "Enjoy unparalleled luxury\nEvery fact and fabric carefully curated\nWorld-class design for the tasteful homeowner",
      features: {
        pools: "Infinity Edge Pools",
        spa: "Private Spa Pavilions",
        concierge: "24/7 Concierge",
        gardens: "Tropical Gardens"
      }
    },
    exclusive: {
      title: "Bespoke Lifestyle",
      description: "For those who love the finer things\nCrafted with immense attention to detail\nShaped to enhance the flow of positive energy",
      buttonText: "Brochure"
    },
    location: {
      title: "Located in Paradise",
      stats: {
        beaches: "Pristine Beaches",
        restaurants: "Michelin Restaurants",
        amenities: "Luxury Amenities"
      },
      locationStats: {
        beaches: {
          title: "Pristine Beaches",
          subtitle: "Your seaside escape"
        },
        golf: {
          title: "Championship Golf Courses",
          subtitle: "World-class facilities"
        },
        schools: {
          title: "Top Tier International Schools",
          subtitle: "Elite education nearby"
        }
      },
      beachCards: {
        patong: {
          title: "Patong Beach",
          description: "The vibrant heart of Phuket with world-class entertainment, dining, and nightlife just steps from crystal-clear waters.",
          features: ["5-star resorts", "Beach clubs", "Water sports", "Shopping centers"]
        },
        kata: {
          title: "Kata Beach",
          description: "A pristine stretch of golden sand perfect for surfing, sunbathing, and experiencing authentic Thai beach culture.",
          features: ["Surfing waves", "Sunset views", "Local cuisine", "Peaceful atmosphere"]
        },
        karon: {
          title: "Karon Beach",
          description: "Three kilometers of powdery white sand beach offering tranquil relaxation and breathtaking ocean panoramas.",
          features: ["Quiet retreat", "Pristine waters", "Spa resorts", "Nature walks"]
        }
      },
      mapSection: {
        title: "Strategic Location",
        description: "Perfectly positioned between Phuket's most coveted beaches with easy access to international airport, luxury shopping, and world-renowned golf courses."
      }
    },
    investment: {
      title: "Thailand's Smart Money",
      metrics: {
        roi: {
          title: "Annual ROI",
          subtitle: "Rental + Appreciation"
        },
        yield: {
          title: "Rental Yield",
          subtitle: "Smart Location Choice"
        },
        tax: {
          title: "Capital Gains Tax",
          subtitle: "Protect Your Capital"
        }
      },
      marketAnalysis: {
        title: "Market Analysis",
        luxuryGrowth: "Luxury Property Growth (2009-2025)",
        foreignInvestment: "Foreign Investment (2009-2025)",
        gdpGrowth: "GDP Growth Projection (2025)",
        chartTitle: "Thailand Luxury Real Estate Trends",
        chartInsights: {
          growth: "15-Year Growth",
          average2009: "2009 Average",
          average2024: "2024 Average"
        }
      },
      benefits: {
        title: "Benefits",
        items: {
          residency: {
            title: "Thai Elite Residency",
            description: "5-20 year renewable residency visa with investment"
          },
          tax: {
            title: "Tax Optimization",
            description: "No capital gains tax for qualifying foreign investors"
          },
          currency: {
            title: "Currency Diversification",
            description: "Thai Baht stability and regional economic growth"
          },
          management: {
            title: "Rental Management",
            description: "Professional property management available"
          },
          lifestyle: {
            title: "Lifestyle Access",
            description: "Personal use rights with luxury amenities"
          },
          ownership: {
            title: "Freehold Ownership",
            description: "90-year lease structures with inheritance rights"
          }
        }
      },
      stability: {
        title: "Thailand Economic Stability & Growth",
        description: "Thailand's stable political environment, robust tourism industry, and the strategic location of Southeast Asia has created a world-class market for investors. The government's pro-investment policies and immense infrastructure development continue to drive smart money opportunities.",
        metrics: {
          rating: {
            title: "Credit Rating",
            subtitle: "Moody's & S&P Stable Outlook"
          },
          gdp: {
            title: "GDP (2024)",
            subtitle: "2nd Largest ASEAN Economy"
          },
          tourists: {
            title: "Annual Tourists",
            subtitle: "Pre-2024 Recovery Target"
          }
        }
      }
    },
    virtualTour: {
      title: "Virtual Villa Experience",
      subtitle: "Explore our luxury villas with immersive 360° tours",
      features: {
        views360: {
          title: "360° Views",
          description: "Complete panoramic immersion"
        },
        navigation: {
          title: "Room Navigation",
          description: "Seamless space transitions"
        },
        walkthrough: {
          title: "Video Walkthrough",
          description: "Professional guided tours"
        }
      },
      buttons: {
        pictures: "Pictures",
        videoTour: "Video Tour"
      },
      villas: {
        type1: {
          name: "Villa Type 1",
          description: "4 Bedrooms | Infinity Pool | Ocean Views",
          status: "2 Available",
          rooms: {
            living: "Living Room",
            master: "Master Bedroom",
            pool: "Infinity Pool",
            kitchen: "Kitchen",
            terrace: "Terrace"
          }
        },
        type2: {
          name: "Villa Type 2",
          description: "5 Bedrooms | Pool Terrace | Garden Sanctuary",
          status: "1 Available",
          rooms: {
            living: "Grand Living",
            master: "Master Suite",
            pool: "Pool Terrace",
            kitchen: "Gourmet Kitchen",
            garden: "Garden View"
          }
        },
        type3: {
          name: "Villa Type 3",
          description: "3 Bedrooms | Private Pool | Zen Gardens",
          status: "Reserved",
          rooms: {
            living: "Zen Living",
            master: "Master Retreat",
            pool: "Private Sanctuary",
            kitchen: "Chef's Kitchen",
            garden: "Zen Garden"
          }
        }
      },
      interface: {
        selectVilla: "Select a villa to begin your virtual tour",
        startTour: "Start Virtual Tour",
        nextRoom: "Next Room",
        prevRoom: "Previous Room",
        closeTour: "Close Tour",
        hotspots: "hotspots"
      }
    },
    contact: {
      title: "Contact Us",
      form: {
        firstName: "First Name *",
        lastName: "Last Name *",
        email: "Email Address *",
        phone: "Phone Number *",
        villaOfInterest: "Villa of Interest *",
        message: "Comments or Questions?",
        submit: "Send",
        placeholders: {
          firstName: "Your First Name",
          lastName: "Your Last Name",
          email: "your@email.com",
          phone: "+66 77-888-9999",
          villaSelect: "Select Villa",
          allVillas: "All Villas",
          villa1: "Villa 1",
          villa2: "Villa 2",
          villa3: "Villa 3",
          villa4: "Villa 4",
          message: "I'm interested in..."
        }
      }
    },
    footer: {
      exclusiveDevelopment: "Exclusive Development",
      whatsapp: "WhatsApp",
      wechat: "WeChat",
      line: "Line",
      copyright: "© 2025 MCLL ASIA CO."
    }
  },

  th: {
    nav: {
      residence: "บ้า��� ↗",
      location: "ชม ↗",
      map: "Map ↗",
      wealth: "ล���ทุน ↗",
      language: "��าษ��",
      contact: "ติดต��อ"
    },
    hero: {
      subtitle1: "ย่านที่มีเกียรติที่สุดของพัทยา",
      subtitle2: "การตกแต่งระดับพรีเมียมในรูปแบบที่ไร้รอยต่อ",
      subtitle3: "การออกแบบเหนือกาลเวลาพร้อมทิวทัศน์ที่สร้างแรงบันดาลใจ"
    },
    properties: {
      title: "ความงดงามอันสูงส่ง",
      description: "สัมผัสความหรูหราแบบเขตร้อน\nไม้อบอุ่นและหินอิตาลีเพิ่มความงาม\nมีจำนวนจำกัดตั้งแต่ ฿12.3M ถึง ฿23.4M",
      priceRange: "ถึง",
      villa1: {
        name: "ความเงียบสงบ",
        features: "4 ห้องนอน | Type 3",
        description: "",
        status: "จองแล้ว"
      },
      villa2: {
        name: "ความสงบ",
        features: "4 ห้องนอน | Type 2",
        description: "",
        status: "เ��ลื����� 2 หลัง"
      },
      villa3: {
        name: "ความกลมกลืน",
        features: "5 ห้องนอน | Type 1",
        description: "",
        status: "เหลือ 1 หลัง"
      },
      startingFrom: "เริ่มต้นที่",
      available: "ว่าง",
      reserved: "จองแล้ว"
    },
    amenities: {
      title: "สิ่งอำนวยความสะดวกระดับพรีเมียม",
      description: "การออกแบบระดับโลกสำหรับเจ้าของบ้านที่มีรสนิยม\nทุกข้อเท็จจริงและผ้าถูกคัดสรรมาอย่างละเอียด\nเพลิดเพลินกับความหรูหราที่ไร้ขีดจำกัด",
      features: {
        pools: "สระขอบอินฟินิตี้",
        spa: "ศาลาสปาส่วนตั��",
        concierge: "คอนเซียร์จ 24/7",
        gardens: "สวนเขตร้อน"
      }
    },
    exclusive: {
      title: "ไลฟ์สไตล์สั่งทำพิเศษ",
      description: "คว����ใส่ใจในรายละเอียดอย่างมหาศาล - ออกแบบเพื่อคุณค่าทางสุนทรียศาสตร์อย่างแท้จริง\nออกแบบเพื่อเสริมการไหลของพลังงานเชิงบวก\nสำหรับผู้ที่รักสิ่งประณีต",
      buttonText: "ดูโบรชัวร์"
    },
    location: {
      title: "ตั้งอยู่ในสวรรค์",
      stats: {
        beaches: "ชายหาดบริสุทธิ์",
        restaurants: "ร้านอาหารมิชลิน",
        amenities: "สิ่งอำนวยความสะดวกระดับหรู"
      },
      locationStats: {
        beaches: {
          title: "ชายหาดบริสุทธิ์",
          subtitle: "หลีกหนีไปสู่ชายฝั่งทะเลของคุณ"
        },
        golf: {
          title: "สนามกอล์ฟชิงแช��ป์",
          subtitle: "สิ่งอำนวยความสะด���กระดับโลก"
        },
        schools: {
          title: "��ร��เรียนนานาชาติระดับแนวหน้า",
          subtitle: "การศึกษาชั้นยอดใกล้เคียง"
        }
      },
      beachCards: {
        patong: {
          title: "หาดป่าตอง",
          description: "หัวใจแห่งความมีชีวิตชีวาของภูเก็ต พร้อมความบันเทิงระดับโลก ร้านอาหาร และชีวิตกลางคืน ใกล้น้ำทะเลใส",
          features: ["รีสอร์ท 5 ดาว", "บีชคลับ", "กีฬาทางน้ำ", "ศูนย์การค้า"]
        },
        kata: {
          title: "หาดกะตะ",
          description: "หาดทรายทองคำที่บริสุทธิ์ เหมาะสำหรับการโต้คลื่น อาบแดด และสัมผัสวัฒนธรรมชายหาดไทยแท้",
          features: ["คลื่นโต���คลื่น", "วิวพระอาทิตย์ตก", "อาหารท้องถิ่น", "บรรยากาศสงบ"]
        },
        karon: {
          title: "หาดกะรน",
          description: "ชายหาดทรายขาวยาว 3 กิโลเมตร มอบความผ่อนคลายและวิวทะเลที่สวยงาม",
          features: ["ที่พักเงียบสงบ", "น้ำใสสะอาด", "รีสอร์ทสปา", "เดินชมธรรมชาติ"]
        }
      },
      mapSection: {
        title: "ทำเลที่ตั้งยุทธศาสตร์",
        description: "ตั้งอยู่ระหว่างชายหาดที่เป็นที่ต้องการมากที่สุดของภูเก็ต เดินทางสะดวกไปยังสนามบินนานาชาติ ช้อปปิ้งหรู และสนามกอล์ฟชื่อดัง"
      }
    },
    investment: {
      title: "การลงทุนที่ชาญฉลาด��นไทย",
      metrics: {
        roi: {
          title: "ผลตอบแทนต่อปี",
          subtitle: "ค่าเช่า + มูลค่าเพ��่ม"
        },
        yield: {
          title: "ผลต��บแท��ค่าเช่า",
          subtitle: "เลือกทำเลอย่างชาญฉลาด"
        },
        tax: {
          title: "ภาษีกำไรจากทุน",
          subtitle: "ปกป้องเงินทุนของคุณ"
        }
      },
      marketAnalysis: {
        title: "วิเคราะห์ตลาด",
        luxuryGrowth: "การเติบโตของอสังหาหรู (2009-2025)",
        foreignInvestment: "การลงทุนต่างชาติที่เพิ่มขึ้น (2009-2025)",
        gdpGrowth: "คาดการณ์ GDP (2025)",
        chartTitle: "แนวโน้มอสังหาหรูในไทย",
        chartInsights: {
          growth: "การเติบโต 15 ปี",
          average2009: "เฉลี่ยปี 2009",
          average2024: "เฉลี่ยปี 2024"
        }
      },
      benefits: {
        title: "สิทธิปร��โยชน์",
        items: {
          residency: {
            title: "วีซ่า��ทยอีลิท",
            description: "วีซ่าพำนักต่��อายุได้ 5-20 ปี พร้อมการลงทุน"
          },
          tax: {
            title: "วางแผนภาษี",
            description: "ไม่มีภาษีกำไรจากทุนสำหรับนักลงทุนต่างชาติที่เข้าเงื่อนไข"
          },
          currency: {
            title: "กระจายสกุลเงิน",
            description: "เสถียรภาพเงินบาทและการเติบโตเศรษฐกิจภูมิภาค"
          },
          management: {
            title: "บริหารค่าเช่า",
            description: "บริการบริหารและปล่อยเช่าโดยมืออาชีพ"
          },
          lifestyle: {
            title: "สิทธิ์การใช้ชีวิต",
            description: "สิทธิ์ใช้ส่วนตัวพร้อมสิ่งอำนวยความสะดวกระดับหรู"
          },
          ownership: {
            title: "กรรมสิทธิ์ฟ��ีโฮลด์",
            description: "โครงสร้างสัญญา��ช่า 90 ปี พร้อมสิทธิ��สืบทอ��"
          }
        }
      },
      stability: {
        title: "เสถียรภาพและการเติบโตเศรษฐกิจไทย",
        description: "สภาพแวดล้อมทางการเมืองที่มั่นคง อุตสาหกรรมท่องเที่ยวแข็งแกร่ง และทำเลยุทธศาสตร์ในอาเซียน ทำให้ไทยเป็นตัวเลือกที่ชาญฉลาดสำหรับนักลงทุนอสังหาฯ นโยบายรัฐและโครงสร้างพื้นฐานส่งเสริมโอกาสการลงทุนอย่างต่อเนื่อง",
        metrics: {
          rating: {
            title: "อันดับเครดิต",
            subtitle: "Moody's & S&P มุมมองเสถียร"
          },
          gdp: {
            title: "GDP (2024)",
            subtitle: "เศรษฐกิจใหญ่อันดับ 2 อาเซียน"
          },
          tourists: {
            title: "นักท่องเที่ยวต่อป��",
            subtitle: "เป้าห��ายฟื้น��ัวก่อนปี 2024"
          }
        }
      }
    },
    virtualTour: {
      title: "ประสบการณ์วิลล่าเสมือนจริง",
      subtitle: "สำรวจวิลล่าหรูของเราผ่านทัวร์ 360° สุดสมจริง",
      features: {
        views360: {
          title: "มุมมอง 360°",
          description: "ประสบการณ์แบบพาโนรามาที่สมบูรณ์"
        },
        navigation: {
          title: "การนำทางในห้อง",
          description: "การเปลี่ยนพื้นที่ที่ไร้รอยต่อ"
        },
        walkthrough: {
          title: "การเดินชมแบบวิดีโอ",
          description: "ทัวร์แนะนำโดยมืออาชีพ"
        }
      },
      buttons: {
        pictures: "รูปภาพ",
        videoTour: "ทัวร์วิดีโอ"
      },
      villas: {
        type1: {
          name: "ว���ลล่าประเภท 1",
          description: "4 ห้องนอน | สระ��ินฟินิตี้ | ว���วทะเล",
          status: "เหลือ 2 หลัง",
          rooms: {
            living: "ห้องนั่งเล่น",
            master: "ห้องนอนใหญ่",
            pool: "สระอินฟินิตี้",
            kitchen: "ห้องครัว",
            terrace: "เฉลียง"
          }
        },
        type2: {
          name: "วิลล่าประเภท 2",
          description: "5 ห้องนอน | ระเบียงสระ | สวนศักดิ์สิทธิ์",
          status: "เหลือ 1 หลัง",
          rooms: {
            living: "ห้องนั่งเล่นใหญ่",
            master: "ห้องสวีทใหญ่",
            pool: "ระเบียงสระ",
            kitchen: "ครัวหรู",
            garden: "วิวสวน"
          }
        },
        type3: {
          name: "วิลล่าประเภท 3",
          description: "3 ห้องนอน | สระส่วนตัว | สวนเซน",
          status: "จองแล้ว",
          rooms: {
            living: "ห้องนั่งเล��นเซน",
            master: "ห้องพ���กผ����นใหญ่",
            pool: "สระส่วนตัว",
            kitchen: "ครัวเชฟ",
            garden: "สวนเซน"
          }
        }
      },
      interface: {
        selectVilla: "เลือกวิลลาเพื่อเริ่มทัวร์เสมือนจริง",
        startTour: "เริ่มทัวร์เสมือนจริง",
        nextRoom: "ห้องถัดไป",
        prevRoom: "ห้องก่อนหน้า",
        closeTour: "ปิดทัวร์",
        hotspots: "จุดเด่น"
      }
    },
    contact: {
      title: "รู้มากขึ้น",
      form: {
        firstName: "ชื่อ *",
        lastName: "นามสกุล *",
        email: "อีเมล *",
        phone: "เบอร์โทรศัพท์ *",
        villaOfInterest: "วิลลาที่สนใจ *",
        message: "ความคิดเห็นหรือคำถาม?",
        submit: "ส่ง",
        placeholders: {
          firstName: "ชื่อของคุณ",
          lastName: "นามสกุลของคุณ",
          email: "your@email.com",
          phone: "+66 77-888-9999",
          villaSelect: "เลือกวิลลา",
          allVillas: "ทั้งหมด",
          villa1: "วิลลา 1",
          villa2: "วิลลา 2",
          villa3: "วิลลา 3",
          villa4: "วิลลา 4",
          message: "ฉันสนใจที่จะเรียนรู้เพิ่มเติมเกี่ยวกับ..."
        }
      }
    },
    footer: {
      exclusiveDevelopment: "การพัฒนาเฉพาะ",
      whatsapp: "WhatsApp",
      wechat: "WeChat",
      line: "Line",
      copyright: "© 2025 MCLL ASIA CO."
    }
  },

  'zh-CN': {
    nav: {
      residence: "首页 ↗",
      location: "查看 ↗",
      map: "地图 ↗",
      wealth: "财富 ↗",
      language: "语言",
      contact: "联系"
    },
    hero: {
      subtitle1: "芭提雅最负盛名的地产",
      subtitle2: "无缝形式的高端装饰",
      subtitle3: "永恒��计与激发灵感的景观"
    },
    properties: {
      title: "至尊优雅",
      description: "体验热带奢华\n温暖木材和意��利石材装饰\n限量供应从 ฿12.3M 至 ฿23.4M",
      priceRange: "至",
      villa1: {
        name: "宁静",
        features: "4间卧室 | Type 3",
        description: "",
        status: "已预订"
      },
      villa2: {
        name: "安详",
        features: "4间卧�� | Type 2",
        description: "",
        status: "剩��2套"
      },
      villa3: {
        name: "和谐",
        features: "5间卧室 | Type 1",
        description: "",
        status: "剩余1套"
      },
      startingFrom: "起价",
      available: "可售",
      reserved: "已预订"
    },
    amenities: {
      title: "高端设施",
      description: "为品味业主打造的世界级设计。每个细节和材料都经过精心策划。享受无与伦比的生活体验。",
      features: {
        pools: "无边泳池",
        spa: "私人水疗亭",
        concierge: "24/7礼宾服务",
        gardens: "热带花园"
      }
    },
    exclusive: {
      title: "定制生活方式",
      description: "在完全富足中过着皇室般的生活。专门设计以增强能量流动。为那些热爱精致事物的人。",
      buttonText: "查看宣传册"
    },
    location: {
      title: "坐落天堂",
      stats: {
        beaches: "原始海滩",
        restaurants: "米其林餐厅",
        amenities: "奢华设施"
      },
      locationStats: {
        beaches: {
          title: "原始海滩",
          subtitle: "您的海滨度假胜地"
        },
        golf: {
          title: "锦标赛高尔夫球场",
          subtitle: "世界级设施"
        },
        schools: {
          title: "顶级国际学校",
          subtitle: "附近的精英教育"
        }
      },
      beachCards: {
        patong: {
          title: "芭东海滩",
          description: "普吉岛充满活力的心脏，拥有世界级娱乐、餐饮和夜生活，距离水晶般清澈的海水仅几步之遥。",
          features: ["五星级度假村", "海滩俱乐部", "水上运动", "购物中心"]
        },
        kata: {
          title: "卡塔海滩",
          description: "一片原始的金色沙滩，非常适合冲浪、日光浴和体验正宗的泰式海滩文化。",
          features: ["冲浪波浪", "日落美景", "当地美食", "宁静氛围"]
        },
        karon: {
          title: "卡伦海滩",
          description: "三公里长的粉白色沙滩，提供宁静的放松和令人叹为观止的海洋全景。",
          features: ["宁静度假", "纯净海水", "水疗度假村", "自然漫步"]
        }
      },
      mapSection: {
        title: "战略位置",
        description: "完美位于普吉岛最令人向往��海滩之间，便于前往国际机场、奢侈品购物和世界知名高尔夫球��。"
      }
    },
    investment: {
      title: "泰国明智资金",
      metrics: {
        roi: {
          title: "年投资回报率",
          subtitle: "租金 + 升值"
        },
        yield: {
          title: "租金收益率",
          subtitle: "明智的位置选择"
        },
        tax: {
          title: "资本利得税",
          subtitle: "保护您的资本"
        }
      },
      marketAnalysis: {
        title: "市场分析",
        luxuryGrowth: "奢侈房产增长 (2009-2025)",
        foreignInvestment: "外国投资增长 (2009-2025)",
        gdpGrowth: "GDP增长预测 (2025)",
        chartTitle: "泰国奢侈房地产趋势",
        chartInsights: {
          growth: "15年增长",
          average2009: "2009年平均",
          average2024: "2024年平均"
        }
      },
      benefits: {
        title: "福利",
        items: {
          residency: {
            title: "泰国精英居留权",
            description: "通过投资获得5-20年可续签居留签证"
          },
          tax: {
            title: "税收优化",
            description: "符合条件的外国投资者无资本利得��"
          },
          currency: {
            title: "货币���元化",
            description: "泰铢稳定性��区域经济增长"
          },
          management: {
            title: "租赁管理",
            description: "专业物业管理和租赁服务"
          },
          lifestyle: {
            title: "生活方式权限",
            description: "个人使用权配奢华设施"
          },
          ownership: {
            title: "永久产权",
            description: "90年租赁结构配继承权"
          }
        }
      },
      stability: {
        title: "泰国经济稳定与增长",
        description: "泰国稳定的政治环境、强劲的旅游业和在东南亚的战略位置使其成为精明房地产投资者的明智选择。政府的亲投资政策和基础设施发展继续推动明智的资金机会。",
        metrics: {
          rating: {
            title: "信用评级",
            subtitle: "穆迪和标普稳定展望"
          },
          gdp: {
            title: "GDP (2024)",
            subtitle: "东盟第二大经济体"
          },
          tourists: {
            title: "年游客量",
            subtitle: "2024年前恢复目标"
          }
        }
      }
    },
    virtualTour: {
      title: "虚拟别墅体验",
      subtitle: "通过沉浸式360°游览探索我们的豪��别墅",
      features: {
        views360: {
          title: "360° 视角",
          description: "完整全景沉浸体验"
        },
        navigation: {
          title: "房间导航",
          description: "无缝空间转换"
        },
        walkthrough: {
          title: "视频演示",
          description: "专业导览服务"
        }
      },
      buttons: {
        pictures: "图片",
        videoTour: "视频游览"
      },
      villas: {
        type1: {
          name: "别墅类型1",
          description: "4间卧室 | 无边泳池 | 海景",
          status: "剩余2套",
          rooms: {
            living: "客厅",
            master: "主卧室",
            pool: "无边泳池",
            kitchen: "厨房",
            terrace: "露台"
          }
        },
        type2: {
          name: "别墅类型2",
          description: "5间卧室 | 泳池露台 | 花园圣地",
          status: "剩余1套",
          rooms: {
            living: "大客厅",
            master: "主套房",
            pool: "泳池露台",
            kitchen: "美食厨房",
            garden: "花园景观"
          }
        },
        type3: {
          name: "别墅类型3",
          description: "3间卧室 | 私人泳池 | 禅意花���",
          status: "已预订",
          rooms: {
            living: "禅意客厅",
            master: "主人套房",
            pool: "私人圣地",
            kitchen: "主厨厨房",
            garden: "禅意花园"
          }
        }
      },
      interface: {
        selectVilla: "选择别墅开始您的虚拟游览",
        startTour: "开始虚拟游览",
        nextRoom: "下一间房",
        prevRoom: "上一间房",
        closeTour: "关闭游览",
        hotspots: "热点"
      }
    },
    contact: {
      title: "了解更多",
      form: {
        firstName: "名字 *",
        lastName: "姓氏 *",
        email: "电子邮箱 *",
        phone: "电话号码 *",
        villaOfInterest: "感兴趣的别墅 *",
        message: "评论或问题？",
        submit: "发送",
        placeholders: {
          firstName: "您的名字",
          lastName: "您的姓氏",
          email: "your@email.com",
          phone: "+66 77-888-9999",
          villaSelect: "选择别墅",
          allVillas: "全部",
          villa1: "别墅1",
          villa2: "别墅2",
          villa3: "别墅3",
          villa4: "别墅4",
          message: "我有兴趣了解更多关于..."
        }
      }
    },
    footer: {
      exclusiveDevelopment: "独家开发",
      whatsapp: "WhatsApp",
      wechat: "微信",
      line: "Line",
      copyright: "© 2025 MCLL ASIA CO."
    }
  },

  'zh-TW': {
    nav: {
      residence: "首頁 ↗",
      location: "查看 ↗",
      map: "地圖 ↗",
      wealth: "財富 ↗",
      language: "語言",
      contact: "聯絡"
    },
    hero: {
      subtitle1: "在芭達雅最負盛名的地區享受寧靜生活",
      subtitle2: "永恆設計、無與倫比的品質和對完美的熱情三位一體",
      subtitle3: "無縫無邊泳池、高端裝飾和令人驚豔的景觀重新定義奢華"
    },
    properties: {
      title: "體驗您的至高現實",
      description: "熱帶奢華的綠洲，在自然中體現為私人天堂\n在地球上最偉大的地方發現您的家園\n限量供應，起價",
      priceRange: "至",
      villa1: {
        name: "寧靜",
        features: "4間臥室 | Type 3",
        description: "",
        status: "已預訂"
      },
      villa2: {
        name: "安詳",
        features: "4間臥室 | Type 2",
        description: "",
        status: "剩餘2套"
      },
      villa3: {
        name: "和諧",
        features: "5間臥室 | Type 1",
        description: "",
        status: "剩餘1套"
      },
      startingFrom: "起價",
      available: "可售",
      reserved: "已預訂"
    },
    amenities: {
      title: "高端設施",
      description: "為品味業主打造的世界級設計。每個細節和材料都經過精心策劃。享受無與倫比的生活體驗。",
      features: {
        pools: "無邊泳池",
        spa: "私人水療亭",
        concierge: "24/7禮賓服務",
        gardens: "熱帶花園"
      }
    },
    exclusive: {
      title: "訂製生活方式",
      description: "在完全富足中過著皇室般的生活。專門設計以增強能量流動。為那些熱愛精緻事物的人。",
      buttonText: "查看宣傳冊"
    },
    location: {
      title: "坐落天堂",
      stats: {
        beaches: "原始海灘",
        restaurants: "米其林餐廳",
        amenities: "奢華設施"
      },
      locationStats: {
        beaches: {
          title: "原始海灘",
          subtitle: "您的海濱度假勝地"
        },
        golf: {
          title: "錦標賽高爾夫球場",
          subtitle: "世界級設施"
        },
        schools: {
          title: "頂級國際學校",
          subtitle: "附近的精英教育"
        }
      },
      beachCards: {
        patong: {
          title: "芭東海灘",
          description: "普吉島充滿活力的心臟，擁有世界級娛樂、餐飲和夜生活，距離水晶般清澈的海水僅幾步之遙。",
          features: ["五星級度假村", "海灘俱樂部", "水上運動", "購物中心"]
        },
        kata: {
          title: "卡塔海灘",
          description: "一片原始的金色沙灘，非常適合衝浪、日光浴和體驗正宗的泰式海灘文化。",
          features: ["衝浪波浪", "日落美景", "當地美食", "寧靜氛圍"]
        },
        karon: {
          title: "卡倫海灘",
          description: "三公里長的粉白色沙灘，提供寧靜的放鬆和令人嘆為觀止的海洋全景。",
          features: ["寧靜度假", "純淨海水", "水療度假村", "自然漫步"]
        }
      },
      mapSection: {
        title: "戰略位置",
        description: "完美位於普吉島最令人嚮往的海灘之間，便於前往國際機場、奢侈品購物和世界知名高爾夫球場。"
      }
    },
    investment: {
      title: "泰國明智資金",
      metrics: {
        roi: {
          title: "年投��回報率",
          subtitle: "租金 + 升值"
        },
        yield: {
          title: "租金收益率",
          subtitle: "明智的位置選擇"
        },
        tax: {
          title: "資本利得稅",
          subtitle: "保護您的資本"
        }
      },
      marketAnalysis: {
        title: "市場分析",
        luxuryGrowth: "奢侈房產增長 (2009-2025)",
        foreignInvestment: "外國投資增長 (2009-2025)",
        gdpGrowth: "GDP增長預測 (2025)",
        chartTitle: "泰國奢侈房地產趨勢",
        chartInsights: {
          growth: "15年增長",
          average2009: "2009年平均",
          average2024: "2024年平均"
        }
      },
      benefits: {
        title: "福利",
        items: {
          residency: {
            title: "泰國精英居留權",
            description: "通過投資獲得5-20年可續簽居留簽證"
          },
          tax: {
            title: "稅收優化",
            description: "符合條件的外國投資者無資本利得稅"
          },
          currency: {
            title: "貨幣多元化",
            description: "泰銖穩定性和區域經��增長"
          },
          management: {
            title: "租賃管理",
            description: "專業物業管理和租賃服務"
          },
          lifestyle: {
            title: "生活方式權限",
            description: "個人使用權配奢華設施"
          },
          ownership: {
            title: "永久產權",
            description: "90年租賃結構配繼承權"
          }
        }
      },
      stability: {
        title: "泰國經濟穩定與增長",
        description: "泰國穩定的政治環境、強勁的旅遊業和在東南亞的戰略位置使其成為精明房地產投資者的明智選擇。政府的親投資政策和基礎設施發展繼續推動明智的資金機會。",
        metrics: {
          rating: {
            title: "信用評級",
            subtitle: "穆迪和標普穩定展望"
          },
          gdp: {
            title: "GDP (2024)",
            subtitle: "東盟第二大經濟體"
          },
          tourists: {
            title: "年遊客量",
            subtitle: "2024年前恢復目標"
          }
        }
      }
    },
    virtualTour: {
      title: "虛擬別墅體驗",
      subtitle: "通過沉浸式360°遊覽探索我們的���華別墅",
      features: {
        views360: {
          title: "360° 視角",
          description: "完���全景沉浸體驗"
        },
        navigation: {
          title: "房間導航",
          description: "無縫空間轉換"
        },
        walkthrough: {
          title: "視頻演示",
          description: "專業導覽服務"
        }
      },
      buttons: {
        pictures: "圖片",
        videoTour: "視頻遊覽"
      },
      villas: {
        type1: {
          name: "別墅類型1",
          description: "4間臥室 | 無邊泳池 | 海景",
          status: "剩餘2套",
          rooms: {
            living: "客廳",
            master: "主臥室",
            pool: "無邊泳池",
            kitchen: "廚房",
            terrace: "露台"
          }
        },
        type2: {
          name: "別墅類型2",
          description: "5間臥室 | 泳池露台 | 花園聖地",
          status: "剩餘1套",
          rooms: {
            living: "大客廳",
            master: "主套房",
            pool: "泳池露台",
            kitchen: "美食廚房",
            garden: "花園景觀"
          }
        },
        type3: {
          name: "別墅類型3",
          description: "3間臥室 | 私人泳池 | 禪意花園",
          status: "已預訂",
          rooms: {
            living: "禪意客廳",
            master: "主人套��",
            pool: "私人聖地",
            kitchen: "主廚廚房",
            garden: "禪意花園"
          }
        }
      },
      interface: {
        selectVilla: "選擇別��開始您的虛擬遊覽",
        startTour: "開始虛擬遊覽",
        nextRoom: "下一間房",
        prevRoom: "上一間房",
        closeTour: "關閉遊覽",
        hotspots: "熱點"
      }
    },
    contact: {
      title: "您的私人別墅遊覽",
      form: {
        firstName: "名字 *",
        lastName: "姓氏 *",
        email: "電子郵箱 *",
        phone: "電話號碼 *",
        villaOfInterest: "感興趣的別墅 *",
        message: "評論或問題？",
        submit: "安排我的私人遊覽",
        placeholders: {
          firstName: "您的名字",
          lastName: "您的姓氏",
          email: "your@email.com",
          phone: "+66 77-888-9999",
          villaSelect: "選擇別墅",
          allVillas: "全部",
          villa1: "別墅1",
          villa2: "別墅2",
          villa3: "別墅3",
          villa4: "別墅4",
          message: "我有興趣了解更多關於..."
        }
      }
    },
    footer: {
      exclusiveDevelopment: "獨家開發",
      whatsapp: "WhatsApp",
      wechat: "微信",
      line: "Line",
      copyright: "© 2025 MCLL ASIA CO."
    }
  },

  // Additional languages need to be added here
  ru: {
    nav: {
      residence: "Главная ↗",
      location: "Смотреть ↗",
      map: "Карта ↗",
      wealth: "Богатство ↗",
      language: "Язык",
      contact: "Контакт"
    },
    hero: {
      subtitle1: "Живите спокойно в самом престижном районе Паттайи",
      subtitle2: "Троица вечного дизайна, непревзойденного качества и страсти к совершенству",
      subtitle3: "Бесшовные бассейны-инфинити, премиум отделка и потрясающие виды, переопределяющие роскошь"
    },
    properties: {
      title: "Испытайте свою высшую реальность",
      description: "Оазис тропической роскоши, воплощенный как частный рай в природе\nОткройте ��вой дом в самом великолепном месте на Земле\nОграниченная доступность от",
      priceRange: "до",
      villa1: {
        name: "Спокойствие",
        features: "4 спальни | Type 3",
        description: "",
        status: "Забронировано"
      },
      villa2: {
        name: "Безмятежность",
        features: "4 спальни | Type 2",
        description: "",
        status: "Доступно 2"
      },
      villa3: {
        name: "Гармония",
        features: "5 спален | Type 1",
        description: "",
        status: "Доступно 1"
      },
      startingFrom: "Начиная от",
      available: "Доступно",
      reserved: "Забронировано"
    },
    amenities: {
      title: "Премиум Удобства",
      description: "Дизайн мирового класса для взыскательного домовладельца. Каждый факт и ткань тщательно подобраны. Наслаждайтесь непревзойденным жизненным опытом.",
      features: {
        pools: "Бассейны с бесконечным краем",
        spa: "Частные СПА-павильоны",
        concierge: "Консьерж 24/7",
        gardens: "Тропические сады"
      }
    },
    exclusive: {
      title: "Инди��идуальны�� образ жизни",
      description: "Живите как королевская осо��а в полном изобилии. Специально разработано для усиления потока энергии. Для тех, кто любит прекрасное.",
      buttonText: "Посмотреть брошюру"
    },
    location: {
      title: "Расположено в раю",
      stats: {
        beaches: "Нетронутые пляжи",
        restaurants: "Рестораны Мишлен",
        amenities: "Роскошные удобства"
      },
      locationStats: {
        beaches: {
          title: "Нетронутые пляжи",
          subtitle: "Ваш приморский отдых"
        },
        golf: {
          title: "Чемпионские поля для гольфа",
          subtitle: "Мирового класса удобства"
        },
        schools: {
          title: "Лучшие международные школы",
          subtitle: "Элитное образование рядом"
        }
      },
      beachCards: {
        patong: {
          title: "Пляж Патонг",
          description: "Яркое сердце Пхукета с раз��лече��иями мир��вого класса, ресторанами и ночной жизнью в нес��ольких шагах от крист��льно чистых вод.",
          features: ["5-звездочные курорты", "Пляжные клубы", "Водные виды спорта", "Торговые центры"]
        },
        kata: {
          title: "Пляж Ката",
          description: "Нетронутый участок золотого песка, идеально подходящий для серфинга, загара и знакомства с подлинной тайской пляжной культурой.",
          features: ["Волны для серфинга", "Виды заката", "Местная кухня", "Мирная атмосфера"]
        },
        karon: {
          title: "Пляж Карон",
          description: "Три километра порошкообразного белого песчаного пляжа, предлагающего спокойное расслабление и захватывающие дух океанские панорамы.",
          features: ["Тихое убежище", "Чистые воды", "СПА-курорты", "Прогулки на прир��де"]
        }
      },
      mapSection: {
        title: "Стратегическое распо��ожение",
        description: "Идеально расположен между самыми желанными пляжами Пхукета с легким доступом к международному аэропорту, роскошным магазинам и всемирно известным полям для гольфа."
      }
    },
    investment: {
      title: "Умные деньги Таиланда",
      metrics: {
        roi: {
          title: "Годовая доходность",
          subtitle: "Аренда + рост стоимости"
        },
        yield: {
          title: "Доходность аренды",
          subtitle: "Умный выбор местоположения"
        },
        tax: {
          title: "Налог на прирост капитала",
          subtitle: "Защитите свой капитал"
        }
      },
      marketAnalysis: {
        title: "Анализ рынка",
        luxuryGrowth: "Рост роскошной недвижимости (2009-2025)",
        foreignInvestment: "Увеличение иностранных инвестиций (2009-2025)",
        gdpGrowth: "П��огноз роста ВВП (2025)",
        chartTitle: "Тенденции роскошной недвижимости Таиланда",
        chartInsights: {
          growth: "15-летний рост",
          average2009: "Среднее 2009",
          average2024: "Среднее 2024"
        }
      },
      benefits: {
        title: "Преимущества",
        items: {
          residency: {
            title: "Тайская элитная резиденция",
            description: "5-20-летняя возобновляемая виза на жительство с инвестициями"
          },
          tax: {
            title: "Налоговая оптимизация",
            description: "Отсутствие налога на прирост капитала для квалифицированных иностранных инвесторов"
          },
          currency: {
            title: "Валютная диверсификация",
            description: "Стаб��льность тайского бата и региональный экономический рост"
          },
          management: {
            title: "Управление арендой",
            description: "Профес��иональное управление недвижимостью и арендные услуги"
          },
          lifestyle: {
            title: "Доступ �� образу жизни",
            description: "Права личного пользования с роскошными удобствами"
          },
          ownership: {
            title: "Собственность в полном владении",
            description: "90-летние арендные структуры с правами наследования"
          }
        }
      },
      stability: {
        title: "Экономическая стабильность и рост Таиланда",
        description: "Стабильная политическая среда Таиланда, крепкая туристическая индустрия и стратегическое расположение в Юго-Восточной Азии делают его умным выбором для проницательных инвесторов �� недвижимость. Проинвестиционная политика правительства и развитие инфраструктуры продолжают стимулировать возможности умных ден��г.",
        metrics: {
          rating: {
            title: "Кредитный рейтинг",
            subtitle: "Стабильный ��рогноз Moody's и S&P"
          },
          gdp: {
            title: "ВВП (2024)",
            subtitle: "2-я по величине экономика АСЕАН"
          },
          tourists: {
            title: "Годовых туристов",
            subtitle: "Цель восстановления до 2024"
          }
        }
      }
    },
    virtualTour: {
      title: "Виртуальный опыт виллы",
      subtitle: "Исследуйте наши роскошные виллы с захватывающими 360° турами",
      features: {
        views360: {
          title: "360° Обзор",
          description: "Полное панорамное погружение"
        },
        navigation: {
          title: "Навигация по комнатам",
          description: "Плавные переходы между пространствами"
        },
        walkthrough: {
          title: "Видео-экскурсия",
          description: "Профессиональные гидированные туры"
        }
      },
      buttons: {
        pictures: "Фотографии",
        videoTour: "Видео-тур"
      },
      villas: {
        type1: {
          name: "Вилла Тип 1",
          description: "4 спальни | Бассейн-инфинити | Вид на океан",
          status: "Доступно 2",
          rooms: {
            living: "Гостиная",
            master: "Главная спальня",
            pool: "Бассейн-инфинити",
            kitchen: "Кухня",
            terrace: "Терраса"
          }
        },
        type2: {
          name: "Вилла Тип 2",
          description: "5 спален | Терраса с бассейном | Садовое святилище",
          status: "Доступно 1",
          rooms: {
            living: "Большая гостиная",
            master: "Главный люкс",
            pool: "Терраса с бассейном",
            kitchen: "Кухня для гурманов",
            garden: "Вид на сад"
          }
        },
        type3: {
          name: "Вилла Тип 3",
          description: "3 спальни | Частный бассейн | Дзен-сады",
          status: "Заброни��овано",
          rooms: {
            living: "Дзен-гостиная",
            master: "Главное убежище",
            pool: "Частное святилище",
            kitchen: "Кухня шеф-повара",
            garden: "Дзен-сад"
          }
        }
      },
      interface: {
        selectVilla: "Выберите виллу для начала виртуального тура",
        startTour: "Начать виртуальный тур",
        nextRoom: "Следующая комната",
        prevRoom: "Предыдущая комната",
        closeTour: "Закрыть тур",
        hotspots: "горячие точки"
      }
    },
    contact: {
      title: "Ваш частный тур по вилле",
      form: {
        firstName: "Имя *",
        lastName: "Фамилия *",
        email: "Адрес электронной почты *",
        phone: "Номер телефона *",
        villaOfInterest: "Интересующая вилла *",
        message: "Комментарии или вопросы?",
        submit: "Запланировать мой частный тур",
        placeholders: {
          firstName: "Ваше имя",
          lastName: "Ваша фамилия",
          email: "your@email.com",
          phone: "+66 77-888-9999",
          villaSelect: "Выберите виллу",
          allVillas: "Все из них",
          villa1: "Вилла 1",
          villa2: "Вилла 2",
          villa3: "Вилла 3",
          villa4: "Вилла 4",
          message: "Я заинтересован узнать больше о..."
        }
      }
    },
    footer: {
      exclusiveDevelopment: "Эксклюзивная разработка",
      whatsapp: "WhatsApp",
      wechat: "WeChat",
      line: "Line",
      copyright: "© 2025 MCLL ASIA CO."
    }
  },

  ko: {
    nav: {
      residence: "홈 ↗",
      location: "보기 ↗",
      map: "지도 ↗",
      wealth: "부 ↗",
      language: "언어",
      contact: "연락처"
    },
    hero: {
      subtitle1: "파���야에서 가장 권위 있는 지���에서 평화롭게 살아보세요",
      subtitle2: "시대를 초월한 디자인, 비할 데 없는 품질, 완벽에 대한 열정의 삼위일체",
      subtitle3: "매끄러운 인피니티 풀, ���리미엄 마감재, 럭셔리를 재정의하는 놀라운 전망"
    },
    properties: {
      title: "당신의 최고 현실을 경험하세요",
      description: "열대 풍요로움의 오아시스, 자연 속 사적 낙원으로 나타남\n지구상에서 가장 훌륭한 곳에서 당신의 집을 발견하세요\n한정 판매, 시작 가격",
      priceRange: "부터",
      villa1: {
        name: "평온",
        features: "침실 4개 | Type 3",
        description: "",
        status: "예약됨"
      },
      villa2: {
        name: "고요",
        features: "침실 4개 | Type 2",
        description: "",
        status: "2채 판매 중"
      },
      villa3: {
        name: "조화",
        features: "침실 5개 | Type 1",
        description: "",
        status: "1채 판매 중"
      },
      startingFrom: "시작 가격",
      available: "판매 중",
      reserved: "예약됨"
    },
    amenities: {
      title: "프리미엄 편의시설",
      description: "취향 있는 주택 소유자를 위한 세계적 수���의 디자인. 모든 사실과 직물이 신중하게 큐레이션됩니다. 비할 데 없는 생활 경험을 즐기세요.",
      features: {
        pools: "인피니티 엣지 풀",
        spa: "전용 스파 파빌리온",
        concierge: "24시간 컨시어지",
        gardens: "열대 정원"
      }
    },
    exclusive: {
      title: "맞춤형 라이프스타일",
      description: "완전한 풍요 속에서 왕족처럼 살아보세요. 에너지 흐름을 향상시키기 위해 특별히 설계되었습니다. 더 좋은 것을 사랑하는 사람들을 위해.",
      buttonText: "브로슈어 보기"
    },
    location: {
      title: "낙원에 위치",
      stats: {
        beaches: "원시 해변",
        restaurants: "미슐랭 레스토랑",
        amenities: "럭셔리 편의시설"
      },
      locationStats: {
        beaches: {
          title: "원시 해변",
          subtitle: "당신의 해변 휴양지"
        },
        golf: {
          title: "챔피언십 골프 코스",
          subtitle: "세계적 수준의 시설"
        },
        schools: {
          title: "최고급 국제학교",
          subtitle: "인근의 엘리트 교육"
        }
      },
      beachCards: {
        patong: {
          title: "파통 비치",
          description: "수정처럼 맑은 바닷물에서 몇 걸음 떨어진 세계적 수준의 엔터테인먼트, 다이닝, 나이트���이프가 있는 ���켓의 활기찬 심장부.",
          features: ["5성급 리조트", "비치 클럽", "수상 스포츠", "쇼핑 센터"]
        },
        kata: {
          title: "카타 비치",
          description: "서핑, 일광욕, 정통 태국 해변 문화를 경험하기에 완벽한 원시 황금 모래 해변.",
          features: ["서핑 ���도", "일몰 경치", "현지 요리", "평화로운 분위기"]
        },
        karon: {
          title: "카론 비치",
          description: "고요한 휴식과 숨막히는 바다 파노라마를 제공하는 3킬로미터의 가루 같은 하얀 모래 해변.",
          features: ["조용한 휴양지", "원시 바다", "스파 리조트", "자연 산책"]
        }
      },
      mapSection: {
        title: "전략적 위치",
        description: "푸켓에서 가장 탐나는 해변 사이에 완벽하게 위치하여 국제공항, 럭셔리 쇼핑, 세계적으로 유명한 골프 코스에 쉽게 접근할 수 있습니다."
      }
    },
    investment: {
      title: "태국의 스마트 머니",
      metrics: {
        roi: {
          title: "연간 ROI",
          subtitle: "임대료 + 가치 상승"
        },
        yield: {
          title: "임대 수익률",
          subtitle: "스마트 위치 선택"
        },
        tax: {
          title: "양도소득세",
          subtitle: "자본 보호"
        }
      },
      marketAnalysis: {
        title: "시장 분석",
        luxuryGrowth: "럭셔리 부동산 성장 (2009-2025)",
        foreignInvestment: "외국인 투자 증가 (2009-2025)",
        gdpGrowth: "GDP 성장 전망 (2025)",
        chartTitle: "태국 럭셔리 부동산 트렌드",
        chartInsights: {
          growth: "15년 성장",
          average2009: "2009년 평균",
          average2024: "2024년 평균"
        }
      },
      benefits: {
        title: "혜택",
        items: {
          residency: {
            title: "태국 엘리트 거주권",
            description: "투자를 통한 5-20년 갱신 가능한 거주 비자"
          },
          tax: {
            title: "세금 최적화",
            description: "자격을 갖춘 외국인 투자자에 대한 양도소득세 없음"
          },
          currency: {
            title: "통화 ��각화",
            description: "태국 바트 안정성과 지역 경제 성장"
          },
          management: {
            title: "임대 관리",
            description: "전문 부동산 관�� 및 임대 서���스"
          },
          lifestyle: {
            title: "라이프스타일 접근",
            description: "럭셔리 편의시설을 갖춘 개인 사용권"
          },
          ownership: {
            title: "자유 보유 소유권",
            description: "상속권이 있는 90년 임대 구조"
          }
        }
      },
      stability: {
        title: "태국 경제 안정성 및 성장",
        description: "태국의 안정적인 정치 환경, ��고한 관광 산업, 동남아시아에서의 전략적 위치로 인해 안목 있는 부동산 투자자들에게 현명한 선택이 됩니다. 정부의 친투자 정책과 인프라 개발이 계속해서 스마트 머니 기회를 이끌고 있습니다.",
        metrics: {
          rating: {
            title: "신용 등급",
            subtitle: "무디스 & S&P 안정적 전망"
          },
          gdp: {
            title: "GDP (2024)",
            subtitle: "아세안 2위 경제"
          },
          tourists: {
            title: "연간 관광객",
            subtitle: "2024년 이전 회복 목표"
          }
        }
      }
    },
    virtualTour: {
      title: "가상 빌라 체험",
      subtitle: "몰입형 360° 투어로 럭셔리 빌라��� 탐험��세요",
      features: {
        views360: {
          title: "360° 전망",
          description: "완전한 파노라마 몰입"
        },
        navigation: {
          title: "룸 내비게이션",
          description: "매끄러운 공간 전환"
        },
        walkthrough: {
          title: "비디오 워크스루",
          description: "전문 가이드 투어"
        }
      },
      buttons: {
        pictures: "사진",
        videoTour: "���디오 투어"
      },
      villas: {
        type1: {
          name: "빌라 타입 1",
          description: "침실 4개 | 인피니티 풀 | 오션 뷰",
          status: "2채 판매 중",
          rooms: {
            living: "거실",
            master: "마스터 침실",
            pool: "인피니티 풀",
            kitchen: "주방",
            terrace: "테라스"
          }
        },
        type2: {
          name: "빌라 타입 2",
          description: "침실 5개 | 풀 테라스 | 가든 생추어리",
          status: "1채 판매 중",
          rooms: {
            living: "그랜드 리빙",
            master: "마스터 스위트",
            pool: "풀 테라스",
            kitchen: "구르메 주방",
            garden: "가든 뷰"
          }
        },
        type3: {
          name: "빌라 타입 3",
          description: "침실 3개 | 전용 수영장 | 선 가든",
          status: "예약됨",
          rooms: {
            living: "선 리빙",
            master: "마스터 리트리트",
            pool: "전용 생추어리",
            kitchen: "셰프 주방",
            garden: "선 가든"
          }
        }
      },
      interface: {
        selectVilla: "가�� 투어를 시작할 빌라를 선택하세요",
        startTour: "가상 투어 시작",
        nextRoom: "다음 방",
        prevRoom: "이전 방",
        closeTour: "투어 닫기",
        hotspots: "핫스팟"
      }
    },
    contact: {
      title: "당신의 프라이빗 빌라 투어",
      form: {
        firstName: "이름 *",
        lastName: "성 *",
        email: "이메일 주소 *",
        phone: "전화번호 *",
        villaOfInterest: "관심 있는 빌라 *",
        message: "의견이나 질문?",
        submit: "나의 프라이빗 투어 ���약",
        placeholders: {
          firstName: "이름",
          lastName: "성",
          email: "your@email.com",
          phone: "+66 77-888-9999",
          villaSelect: "���라 선택",
          allVillas: "모두",
          villa1: "빌라 1",
          villa2: "빌라 2",
          villa3: "빌라 3",
          villa4: "빌라 4",
          message: "저는 ~에 대해 더 알고 싶습니다..."
        }
      }
    },
    footer: {
      exclusiveDevelopment: "독점 개발",
      whatsapp: "WhatsApp",
      wechat: "WeChat",
      line: "Line",
      copyright: "© 2025 MCLL ASIA CO."
    }
  },

  ja: {
    nav: {
      residence: "ホーム ↗",
      location: "見る ↗",
      map: "地図 ↗",
      wealth: "富 ↗",
      language: "言語",
      contact: "連絡"
    },
    hero: {
      subtitle1: "パタヤで最も権威ある邸宅で平穏に暮らす",
      subtitle2: "時代を超越したデザイン、比類なき品質、完璧への情熱の三位一体",
      subtitle3: "シームレスなインフィニティプール、プレミアム仕上げ、ラグジュアリーを再定義する��晴らしい景色"
    },
    properties: {
      title: "最高の現実を体験してください",
      description: "熱帯の豪華さのオアシス、自然の中の私的楽園として現れる\n地球上で最も素晴らしい場所にあなたの家を発見してください\n限定販売、価格",
      priceRange: "から",
      villa1: {
        name: "静寂",
        features: "4ベッドルーム | Type 3",
        description: "",
        status: "予約済み"
      },
      villa2: {
        name: "安らぎ",
        features: "4ベッドルーム | Type 2",
        description: "",
        status: "2戸���売中"
      },
      villa3: {
        name: "調和",
        features: "5ベッドルーム | Type 1",
        description: "",
        status: "1戸販売中"
      },
      startingFrom: "開始価格",
      available: "販売中",
      reserved: "予約済み"
    },
    amenities: {
      title: "プレミアムアメニティ",
      description: "センスの良い住宅所有者のための世界クラスのデザイン。すべての事実と生地が慎重にキュレーションされています。比類のない生活体験をお楽しみください。",
      features: {
        pools: "イン���ィニティエッジプール",
        spa: "プライベートス���パビリオン",
        concierge: "24時間コンシェルジュ",
        gardens: "トロピカルガーデン"
      }
    },
    exclusive: {
      title: "オーダーメイドライフスタイル",
      description: "完全な豊かさ�����で王族のように生活してください。エネルギーの流れを向上させるために特別に設計されています。より良いものを愛する人々のために。",
      buttonText: "パンフレットを見る"
    },
    location: {
      title: "パラダイスに位置",
      stats: {
        beaches: "原始的なビーチ",
        restaurants: "ミシュランレストラン",
        amenities: "ラグジュアリーアメニティ"
      },
      locationStats: {
        beaches: {
          title: "原始的なビーチ",
          subtitle: "あなたの海辺の休息地"
        },
        golf: {
          title: "チャンピオンシップゴルフコース",
          subtitle: "世界クラスの施設"
        },
        schools: {
          title: "トップレベルの国際学校",
          subtitle: "近隣のエリート教育"
        }
      },
      beachCards: {
        patong: {
          title: "パトンビーチ",
          description: "水���のように澄んだ海から数歩の距離にある���界クラスのエンターテイメント、ダイニング、ナイトライフを備えたプーケットの活気ある中心部。",
          features: ["5つ星リゾート", "ビーチクラブ", "ウ��ータースポーツ", "ショッピングセンター"]
        },
        kata: {
          title: "カタビーチ",
          description: "サーフィン、日光浴、本格的なタイのビーチ文化を体験するのに最適な原始的な黄金の砂浜。",
          features: ["サーフィンの波", "夕日の景色", "地元料理", "平和な雰囲気"]
        },
        karon: {
          title: "カロンビーチ",
          description: "静かなリラクゼーションと息をのむような海のパノラマを提供する3キロメートルの粉のような白い砂浜。",
          features: ["静かなリトリート", "原始的な海", "スパリゾート", "自然散策"]
        }
      },
      mapSection: {
        title: "戦略的立地",
        description: "プーケットで最も人気のビーチの間に完璧に位置し、国際空港、ラグジュアリーショ���ピング、世界的に有名なゴルフコースに簡単にアクセスできます。"
      }
    },
    investment: {
      title: "��イのスマートマネー",
      metrics: {
        roi: {
          title: "年間ROI",
          subtitle: "賃貸 + 価値上昇"
        },
        yield: {
          title: "賃貸利回り",
          subtitle: "スマートな立地選択"
        },
        tax: {
          title: "キャピタルゲイン税",
          subtitle: "資本を保護"
        }
      },
      marketAnalysis: {
        title: "市場分析",
        luxuryGrowth: "ラグジュアリー不動産成長 (2009-2025)",
        foreignInvestment: "外国投資増加 (2009-2025)",
        gdpGrowth: "GDP成長予測 (2025)",
        chartTitle: "タイのラグジュ��リー不動産トレンド",
        chartInsights: {
          growth: "15年成長",
          average2009: "2009年平均",
          average2024: "2024年平均"
        }
      },
      benefits: {
        title: "利益",
        items: {
          residency: {
            title: "タイエリート居住権",
            description: "投資による5-20年更新可能居住ビザ"
          },
          tax: {
            title: "税金最適化",
            description: "資格のある外国投資家にはキャピタルゲイン税なし"
          },
          currency: {
            title: "通貨分散",
            description: "��イバーツの安定性と地域経済成長"
          },
          management: {
            title: "賃��管理",
            description: "プロフェ��ショナル不動産管理と賃貸サービス"
          },
          lifestyle: {
            title: "ライフスタイルアクセス",
            description: "ラグジュアリーアメニ��ィ付き個人使用権"
          },
          ownership: {
            title: "フリーホールド所有権",
            description: "相続権付き90年リース構造"
          }
        }
      },
      stability: {
        title: "タイの経済安定性と成長",
        description: "タイの安定した政治環境、堅固な観光産業、東南アジアでの戦略的立地により、眼識のある不動産投資家にとって���マートな選択となっています。政府の親投資政策とインフラ開発がスマートマネーの機会を継続的に推進しています。",
        metrics: {
          rating: {
            title: "信用格付け",
            subtitle: "ムーディーズ&S&P安定見通し"
          },
          gdp: {
            title: "GDP (2024)",
            subtitle: "ASEAN第2位の経済"
          },
          tourists: {
            title: "年間観光客",
            subtitle: "2024年前回復目標"
          }
        }
      }
    },
    virtualTour: {
      title: "バーチャルヴィラ体験",
      subtitle: "没入型360°ツアーでラグジュアリーヴィラを探索",
      features: {
        views360: {
          title: "360°ビュー",
          description: "完��なパノラマ没入"
        },
        navigation: {
          title: "ルームナビゲーション",
          description: "シームレスな空間移動"
        },
        walkthrough: {
          title: "ビデオウォークスルー",
          description: "プロフェッショナルガイドツアー"
        }
      },
      buttons: {
        pictures: "写真",
        videoTour: "ビデオツアー"
      },
      villas: {
        type1: {
          name: "ヴィラタイプ1",
          description: "4ベッドルーム | インフィニティプール | オーシャンビュー",
          status: "2戸販売中",
          rooms: {
            living: "リビングルーム",
            master: "マスターベッドルーム",
            pool: "インフィニティプール",
            kitchen: "キッチン",
            terrace: "テラス"
          }
        },
        type2: {
          name: "ヴィラタイプ2",
          description: "5ベッドルー�� | プールテラス | ガーデンサンクチュアリ",
          status: "1戸販売中",
          rooms: {
            living: "グランドリビング",
            master: "マスタースイート",
            pool: "プールテラス",
            kitchen: "グルメキッチン",
            garden: "ガーデンビュー"
          }
        },
        type3: {
          name: "ヴィラタイプ3",
          description: "3ベッドルーム | プライベートプール | 禅庭園",
          status: "予約済み",
          rooms: {
            living: "禅リビング",
            master: "マスターリトリート",
            pool: "プライベートサンクチュア��",
            kitchen: "シェフズキッチン",
            garden: "禅庭園"
          }
        }
      },
      interface: {
        selectVilla: "バーチャルツアーを開始するヴィラを選択",
        startTour: "バーチャルツアー開始",
        nextRoom: "次の部屋",
        prevRoom: "前の部屋",
        closeTour: "ツアーを閉じる",
        hotspots: "ホットスポット"
      }
    },
    contact: {
      title: "あなたのプライベートヴィラツアー",
      form: {
        firstName: "名前 *",
        lastName: "姓 *",
        email: "メールアドレス *",
        phone: "電話番号 *",
        villaOfInterest: "興味のあるヴィラ *",
        message: "コメントまたは質問？",
        submit: "プライベートツアー��予約",
        placeholders: {
          firstName: "あなたの名前",
          lastName: "あなたの姓",
          email: "your@email.com",
          phone: "+66 77-888-9999",
          villaSelect: "ヴィラを選択",
          allVillas: "すべて",
          villa1: "ヴィラ1",
          villa2: "ヴィラ2",
          villa3: "ヴィラ3",
          villa4: "ヴィラ4",
          message: "私は〜について詳しく知りたいです..."
        }
      }
    },
    footer: {
      exclusiveDevelopment: "独占開発",
      whatsapp: "WhatsApp",
      wechat: "WeChat",
      line: "Line",
      copyright: "© 2025 MCLL ASIA CO."
    }
  },
  hi: {
    nav: {
      residence: "घर ↗",
      location: "देखें ↗",
      wealth: "धन ↗",
      language: "भाषा",
      contact: "संपर्क"
    },
    hero: {
      subtitle1: "पट्टाया की सबसे प्रति��्ठित संपत��ति में शांति से रहें",
      subtitle2: "क���लातीत डिज़ाइन, अतुलनीय गुणवत्ता और पूर्णता के लिए जुनून की त्रिमूर्ति",
      subtitle3: "निर्बाध अनंत पूल, प्रीमियम फिनिश और आश्चर्यजनक दृश्य जो लक्जरी को फिर से परिभाषित करते हैं"
    },
    properties: {
      title: "अपनी सर्वोच्च वास्तविकता का अनुभव करें",
      description: "उष्णकटिबंधीय ऐश्वर्य का मरुद्यान, प्रकृति में निजी स्वर्ग के रूप में प्रकट\nपृथ्वी के सबसे महान स्थान पर अपना घर खोजें\nसीमित उपलब्धता",
      priceRange: "से",
      villa1: {
        name: "शांति",
        features: "4 बेडरूम | Type 3",
        description: "",
        status: "आरक्षित"
      },
      villa2: {
        name: "निर्मलत��",
        features: "4 बेडरूम | Type 2",
        description: "",
        status: "2 उपलब्ध"
      },
      villa3: {
        name: "सामंजस्य",
        features: "5 बेडरूम | Type 1",
        description: "",
        status: "1 उपलब्ध"
      },
      startingFrom: "शुरुआत",
      available: "उपलब्ध",
      reserved: "आरक्षित"
    },
    amenities: {
      title: "प्रीमियम सुविधाएं",
      description: "रुचिशील घर के मालिक के लिए विश्व स्तरीय डिज़ाइन। हर तथ्य और कपड़े ���ो सावधानीपूर्वक तैयार किया गया। एक बेजोड़ जीवन अनुभव का आनंद लें।",
      features: {
        pools: "अनंत किनारे पूल",
        spa: "निजी स्पा मंडप",
        concierge: "24/7 कंसियर्ज",
        gardens: "उष्णकटिबंधीय उद्यान"
      }
    },
    exclusive: {
      title: "बेस्पोक जीवनशैली",
      description: "पूर���ण प्रचुरता में रॉयल्टी की तरह जीएं��� ऊर्जा के प्रवाह को बढ़ाने के लिए विशेष रूप से डिज़ाइन किया गया। उन लोगों के ल���ए जो बेहतर चीजों से प्यार करते हैं।",
      buttonText: "ब्रोशर देखें"
    },
    location: {
      title: "स्वर्ग में स्थित",
      stats: {
        beaches: "प्राचीन समुद्र तट",
        restaurants: "मिशेलिन रेस्टोरेंट",
        amenities: "लक्जरी ���ुविधाएं"
      },
      locationStats: {
        beaches: {
          title: "प्राचीन समुद्र तट",
          subtitle: "आपका समुद्री तटीय पलायन"
        },
        golf: {
          title: "चैम्पियनशिप गोल्फ कोर्स",
          subtitle: "विश्व स्तरीय सुविधाएं"
        },
        schools: {
          title: "शीर्ष स्तर के अंतर्र��ष्ट्रीय ��्कूल",
          subtitle: "पास में एलीट शिक्षा"
        }
      },
      beachCards: {
        patong: {
          title: "पाटोंग बीच",
          description: "फुकेत का जीवंत दिल, विश्व स्तर��य मनोरंजन, भोजन और रात्रि जीवन के साथ क्रिस्टल-स्पष्ट पानी से कुछ ही कदम दूर।",
          features: ["5-सितारा रिसॉर्ट्स", "बीच क्लब", "जल खेल", "शॉपिंग सेंटर"]
        },
        kata: {
          title: "काता बीच",
          description: "सुनहरी रेत का एक प्राचीन खंड जो सर्फिंग, धूप सेंकने और प्रामाणिक थाई समुद्र तट संस्कृति का अनुभव करने के लिए एकदम सही है।",
          features: ["सर्फिंग तरंगें", "सूर्यास्त दृश्य", "स्थानीय व्यंजन", "शांतिपूर्ण वातावर���"]
        },
        karon: {
          title: "कैरन बीच",
          description: "तीन किलोमीटर का पाउडरी सफेद रेत समुद्र तट जो शांत आराम और सांस लेने वाले समुद्री मनोरम दृश���य प्रदान करता है।",
          features: ["शांत विश्राम", "प्राचीन पानी", "स्पा रिसॉर्ट्स", "प्रकृति सैर"]
        }
      },
      mapSection: {
        title: "रणनीतिक स्थान",
        description: "अंतर्राष्ट्रीय हवाई अड्डे, लक्���री शॉपिंग और विश्व प्रसिद्ध गोल्फ कोर्स के लिए आसान पहुंच के साथ फुकेत के सबसे प्रतिष्ठित समुद्र तटों के बीच पूरी तरह से स्थित।"
      }
    },
    investment: {
      title: "थाईलैंड का स्मार्ट मनी",
      metrics: {
        roi: {
          title: "वार्षिक ROI",
          subtitle: "क���राया + मूल्य वृद्धि"
        },
        yield: {
          title: "किराय��� यील्ड",
          subtitle: "स्मार्ट स्थान चुनाव"
        },
        tax: {
          title: "पूंजीगत लाभ कर",
          subtitle: "अ���नी पूंजी की रक्षा करें"
        }
      },
      marketAnalysis: {
        title: "बाजार विश्लेषण",
        luxuryGrowth: "लक्जरी संपत्ति वृद्धि (2009-2025)",
        foreignInvestment: "विदेशी निवेश वृद्धि (2009-2025)",
        gdpGrowth: "जीडीपी वृद्धि ��्रक्षेपण (2025)",
        chartTitle: "थाईलैंड लक्जरी रियल एस्टेट ट्रेंड्स",
        chartInsights: {
          growth: "15-वर्षीय वृद्धि",
          average2009: "2009 औसत",
          average2024: "2024 औसत"
        }
      },
      benefits: {
        title: "लाभ",
        items: {
          residency: {
            title: "थाई एलीट निवास",
            description: "निवेश ��े साथ 5-20 वर्षीय नवीकरणीय निवास वीज़ा"
          },
          tax: {
            title: "कर अनुकूलन",
            description: "योग्य विदेशी निवेशकों के लिए कोई पूंजीगत लाभ कर नहीं"
          },
          currency: {
            title: "मुद्रा विविधीकरण",
            description: "थाई बाहत स्थिरता और क्षेत्रीय आर्थिक विकास"
          },
          management: {
            title: "किराया प्रबंधन",
            description: "पेशेवर संपत्ति प���रबंधन और किराया सेवाएं"
          },
          lifestyle: {
            title: "जीवनशैली पहुंच",
            description: "लक्जरी सुविधाओं के साथ व्यक्तिगत उपयोग अधिकार"
          },
          ownership: {
            title: "मुक्त भूम�� स्वामित्व",
            description: "विरासत अधिकारों के साथ 90-���र्ष��य पट्टा संरचना"
          }
        }
      },
      stability: {
        title: "थाईलैंड क�� आर्थिक स्थिरता और विकास",
        description: "थाईलैंड का स्थिर राजनीतिक वातावरण, मजबूत पर्यटन उद्योग और दक्षिण पूर्व एशिया में रणनीतिक स्थान इसे विवेकशील रियल एस्टेट निवेशकों के लिए स्मार्ट विकल्प बनाता है। सरकार की निवेश समर्थक नीतियां और बुनियादी ढांचे का विकास स्मार्ट मनी के अवसरों को बढ़ावा देना जारी रखता है।",
        metrics: {
          rating: {
            title: "क्रेडिट रेटिंग",
            subtitle: "मूडीज़ और एसएंडपी स्थिर आउटलुक"
          },
          gdp: {
            title: "जीडीपी (2024)",
            subtitle: "आसियान की दूसरी सबसे बड़ी अर्थव्यवस्था"
          },
          tourists: {
            title: "वार्षिक पर्यटक",
            subtitle: "2024 पूर्व रिकवरी लक्ष्य"
          }
        }
      }
    },
    virtualTour: {
      title: "वर्चुअल विला अनुभव",
      subtitle: "ह���ारे लक्जरी विला को इमर्सिव 360° टूर के साथ एक्सप्लोर करें",
      features: {
        views360: {
          title: "360° दृश्य",
          description: "संपूर्ण पैनोरमिक विसर्जन"
        },
        navigation: {
          title: "कमरा नेवीगेशन",
          description: "निर्बाध स्थान संक्रमण"
        },
        walkthrough: {
          title: "वीडियो वॉकथ्रू",
          description: "पेशेवर गाइडेड टूर"
        }
      },
      buttons: {
        pictures: "तस्वीरें",
        videoTour: "वीडियो टूर"
      },
      villas: {
        type1: {
          name: "विला टाइप 1",
          description: "4 बेडरूम | अनंत पूल | समुद्री दृश्य",
          status: "2 उ��लब्ध",
          rooms: {
            living: "लिविंग रूम",
            master: "म���स्टर बेडरूम",
            pool: "अनंत पूल",
            kitchen: "रसोई",
            terrace: "��ेरेस"
          }
        },
        type2: {
          name: "विला टाइप 2",
          description: "5 बेडरूम | पूल टेरेस | गार्डन अभयारण्य",
          status: "1 उपलब्ध",
          rooms: {
            living: "ग्रैंड लिविंग",
            master: "मास्टर सूट",
            pool: "पूल टेरेस",
            kitchen: "गोरमेट रसोई",
            garden: "गार्डन व्यू"
          }
        },
        type3: {
          name: "विला टाइप 3",
          description: "3 बेडरूम | निजी पूल | ज़ेन गार्डन",
          status: "आरक्षित",
          rooms: {
            living: "ज़ेन लिविंग",
            master: "मास्ट��� रिट्रीट",
            pool: "निजी अभयारण्य",
            kitchen: "शेफ की रसोई",
            garden: "ज़ेन गार्डन"
          }
        }
      },
      interface: {
        selectVilla: "अपना वर्चुअल टूर शुरू करने के लिए एक विला चु��ें",
        startTour: "वर्चुअल टूर शुरू करें",
        nextRoom: "अगला कमरा",
        prevRoom: "पिछला कमरा",
        closeTour: "टूर बं�� करें",
        hotspots: "हॉटस्पॉट्स"
      }
    },
    contact: {
      title: "आपका प्राइवेट विला टूर",
      form: {
        firstName: "नाम *",
        lastName: "उपनाम *",
        email: "ईमेल पता *",
        phone: "फोन नंबर *",
        villaOfInterest: "रुचि का विल�� *",
        message: "टिप्पणियां या प्रश्न?",
        submit: "मेरा प्राइवेट टूर शेड्यूल करें",
        placeholders: {
          firstName: "आपका नाम",
          lastName: "आपका उपनाम",
          email: "your@email.com",
          phone: "+66 77-888-9999",
          villaSelect: "एक विला चुनें",
          allVillas: "सभी",
          villa1: "विला 1",
          villa2: "विला 2",
          villa3: "विला 3",
          villa4: "विला 4",
          message: "मुझे इसके बारे में और जानने में रुचि है..."
        }
      }
    },
    footer: {
      exclusiveDevelopment: "विशेष विकास",
      whatsapp: "WhatsApp",
      wechat: "WeChat",
      line: "Line",
      copyright: "© 2025 MCLL ASIA CO."
    }
  },
  es: {
    nav: {
      residence: "Inicio ↗",
      location: "Ver ↗",
      wealth: "Riqueza ↗",
      language: "Idioma",
      contact: "Contacto"
    },
    hero: {
      subtitle1: "Vive en paz en la finca más prestigiosa de Pattaya",
      subtitle2: "Una trinidad de dise��o atemporal, calidad inigualable y pasión por la perfección",
      subtitle3: "Piscinas infinitas perfectas, acabados premium y vistas impresionantes que redefinen el lujo"
    },
    properties: {
      title: "Experimenta tu realidad más alta",
      description: "Un oasis de opulencia tropical, manifestado como paraíso privado en la naturaleza\nDescubre tu hogar en el lugar más grandioso de la Tierra\nDisponibilidad limitada desde",
      priceRange: "hasta",
      villa1: {
        name: "Tranquilidad",
        features: "4 Dormitorios | Type 3",
        description: "",
        status: "Reservado"
      },
      villa2: {
        name: "Serenidad",
        features: "4 Dormitorios | Type 2",
        description: "",
        status: "2 Disponibles"
      },
      villa3: {
        name: "Armonía",
        features: "5 Dormitorios | Type 1",
        description: "",
        status: "1 Disponible"
      },
      startingFrom: "Desde",
      available: "Disponible",
      reserved: "Reservado"
    },
    amenities: {
      title: "Comodidades Premium",
      description: "Diseño de clase mundial para el propietario de buen gusto. Cada hecho y tejido cuidadosamente curado. Disfruta de una experiencia de vida inigualable.",
      features: {
        pools: "Piscinas de Borde Infinito",
        spa: "Pabellones de Spa Privados",
        concierge: "Conserje 24/7",
        gardens: "Jardines Tropicales"
      }
    },
    exclusive: {
      title: "Estilo de Vida Personalizado",
      description: "Vive como la realeza en abundancia total. Especialmente diseñado para mejorar el flujo de energía. Para aquellos que aman las cosas más finas.",
      buttonText: "Ver Folleto"
    },
    location: {
      title: "Ubicado en el Paraíso",
      stats: {
        beaches: "Playas Prístinas",
        restaurants: "Restaurantes Michelin",
        amenities: "Comodidades de Lujo"
      },
      locationStats: {
        beaches: {
          title: "Playas Prístinas",
          subtitle: "Su escape costero"
        },
        golf: {
          title: "Campos de Golf de Campeonato",
          subtitle: "Instalaciones de clase mundial"
        },
        schools: {
          title: "Escuelas Internacionales de Primer Nivel",
          subtitle: "Educación de élite cercana"
        }
      },
      beachCards: {
        patong: {
          title: "Playa Patong",
          description: "El corazón vibrante de Phuket con entretenimiento de clase mundial, gastronomía y vida nocturna a solo pasos de aguas cristalinas.",
          features: ["Resorts 5 estrellas", "Clubes de playa", "Deportes acuáticos", "Centros comerciales"]
        },
        kata: {
          title: "Playa Kata",
          description: "Un tramo prístino de arena dorada perfecto para surfear, tomar el sol y experimentar la auténtica cultura playera tailandesa.",
          features: ["Olas para surfear", "Vistas del atardecer", "Cocina local", "Atmósfera pacífica"]
        },
        karon: {
          title: "Playa Karon",
          description: "Tres kilómetros de playa de arena blanca en polvo que ofrece relajación tranquila y panoramas oceánicos impresionantes.",
          features: ["Retiro tranquilo", "Aguas prístinas", "Resorts spa", "Caminatas naturales"]
        }
      },
      mapSection: {
        title: "Ubicación Estratégica",
        description: "Perfectamente posicionado entre las playas más codiciadas de Phuket con fácil acceso al aeropuerto internacional, compras de lujo y campos de golf de renombre mundial."
      }
    },
    investment: {
      title: "Dinero Inteligente de Tailandia",
      metrics: {
        roi: {
          title: "ROI Anual",
          subtitle: "Alquiler + Apreciación"
        },
        yield: {
          title: "Rendimiento de Alquiler",
          subtitle: "Elección de Ubicación Inteligente"
        },
        tax: {
          title: "Impuesto sobre Ganancias de Capital",
          subtitle: "Protege Tu Capital"
        }
      },
      marketAnalysis: {
        title: "Análisis de Mercado",
        luxuryGrowth: "Crecimiento de Propiedades de Lujo (2009-2025)",
        foreignInvestment: "Aumento de Inversión Extranjera (2009-2025)",
        gdpGrowth: "Proyección de Crecimiento del PIB (2025)",
        chartTitle: "Tendencias de Bienes Raíces de Lujo en Tailandia",
        chartInsights: {
          growth: "Crecimiento de 15 Años",
          average2009: "Promedio 2009",
          average2024: "Promedio 2024"
        }
      },
      benefits: {
        title: "Beneficios",
        items: {
          residency: {
            title: "Residencia Elite Tailandesa",
            description: "Visa de residencia renovable de 5-20 años con inversión"
          },
          tax: {
            title: "Optimización Fiscal",
            description: "Sin impuesto sobre ganancias de capital para inversores extranjeros calificados"
          },
          currency: {
            title: "Diversificación de Moneda",
            description: "Estabilidad del Baht tailandés y crecimiento económico regional"
          },
          management: {
            title: "Gestión de Alquiler",
            description: "Gestión profesional de propiedades y servicios de alquiler"
          },
          lifestyle: {
            title: "Acceso al Estilo de Vida",
            description: "Derechos de uso personal con comodidades de lujo"
          },
          ownership: {
            title: "Propiedad Absoluta",
            description: "Estructuras de arrendamiento de 90 años con derechos de herencia"
          }
        }
      },
      stability: {
        title: "Estabilidad y Crecimiento Económico de Tailandia",
        description: "El ambiente político estable de Tailandia, la industria turística robusta y la ubicación estratégica en el Sudeste Asiático lo convierten en la elección inteligente para inversores inmobiliarios exigentes. Las políticas pro-inversión del gobierno y el desarrollo de infraestructura continúan impulsando oportunidades de dinero inteligente.",
        metrics: {
          rating: {
            title: "Calificación Crediticia",
            subtitle: "Perspectiva Estable de Moody's y S&P"
          },
          gdp: {
            title: "PIB (2024)",
            subtitle: "2ª Economía más Grande de ASEAN"
          },
          tourists: {
            title: "Turistas Anuales",
            subtitle: "Objetivo de Recuperación Pre-2024"
          }
        }
      }
    },
    virtualTour: {
      title: "Experiencia Virtual de Villa",
      subtitle: "Explora nuestras villas de lujo con tours inmersivos de 360°",
      features: {
        views360: {
          title: "Vistas 360°",
          description: "Inmersión panorámica completa"
        },
        navigation: {
          title: "Navegación por Habitaciones",
          description: "Transiciones de espacios perfectas"
        },
        walkthrough: {
          title: "Recorrido en Video",
          description: "Tours guiados profesionales"
        }
      },
      buttons: {
        pictures: "Fotos",
        videoTour: "Tour en Video"
      },
      villas: {
        type1: {
          name: "Villa Tipo 1",
          description: "4 Dormitorios | Piscina Infinita | Vistas al Océano",
          status: "2 Disponibles",
          rooms: {
            living: "Sala de Estar",
            master: "Dormitorio Principal",
            pool: "Piscina Infinita",
            kitchen: "Cocina",
            terrace: "Terraza"
          }
        },
        type2: {
          name: "Villa Tipo 2",
          description: "5 Dormitorios | Terraza con Piscina | Santuario del Jardín",
          status: "1 Disponible",
          rooms: {
            living: "Gran Sala",
            master: "Suite Principal",
            pool: "Terraza con Piscina",
            kitchen: "Cocina Gourmet",
            garden: "Vista al Jardín"
          }
        },
        type3: {
          name: "Villa Tipo 3",
          description: "3 Dormitorios | Piscina Privada | Jardines Zen",
          status: "Reservado",
          rooms: {
            living: "Sala Zen",
            master: "Retiro Principal",
            pool: "Santuario Privado",
            kitchen: "Cocina del Chef",
            garden: "Jardín Zen"
          }
        }
      },
      interface: {
        selectVilla: "Selecciona una villa para comenzar tu tour virtual",
        startTour: "Iniciar Tour Virtual",
        nextRoom: "Siguiente Habitación",
        prevRoom: "Habitación Anterior",
        closeTour: "Cerrar Tour",
        hotspots: "puntos destacados"
      }
    },
    contact: {
      title: "Tu Tour Privado de Villa",
      form: {
        firstName: "Nombre *",
        lastName: "Apellido *",
        email: "Dirección de Email *",
        phone: "Número de Teléfono *",
        villaOfInterest: "Villa de Interés *",
        message: "¿Comentarios o Preguntas?",
        submit: "Programar Mi Tour Privado",
        placeholders: {
          firstName: "Tu Nombre",
          lastName: "Tu Apellido",
          email: "your@email.com",
          phone: "+66 77-888-9999",
          villaSelect: "Seleccionar una villa",
          allVillas: "Todas ellas",
          villa1: "Villa 1",
          villa2: "Villa 2",
          villa3: "Villa 3",
          villa4: "Villa 4",
          message: "Estoy interesado en aprender más sobre..."
        }
      }
    },
    footer: {
      exclusiveDevelopment: "Desarrollo Exclusivo",
      whatsapp: "WhatsApp",
      wechat: "WeChat",
      line: "Line",
      copyright: "© 2025 MCLL ASIA CO."
    }
  },
  fr: {
    nav: {
      residence: "Accueil ↗",
      location: "Voir ↗",
      wealth: "Richesse ↗",
      language: "Langue",
      contact: "Contact"
    },
    hero: {
      subtitle1: "Vivez paisiblement dans le domaine le plus prestigieux de Pattaya",
      subtitle2: "Une trinité de design intemporel, qualité inégalée et passion pour la perfection",
      subtitle3: "Piscines à débordement parfaites, finitions premium et vues époustouflantes qui redéfinissent le luxe"
    },
    properties: {
      title: "Vivez votre plus haute réalité",
      description: "Un oasis d'opulence tropicale, manifesté comme paradis privé dans la nature\nDécouvrez votre maison dans le plus grand endroit sur Terre\nDisponibilité limitée à partir de",
      priceRange: "à",
      villa1: {
        name: "Tranquillité",
        features: "4 Chambres | Type 3",
        description: "",
        status: "Réservé"
      },
      villa2: {
        name: "Sérénité",
        features: "4 Chambres | Type 2",
        description: "",
        status: "2 Disponibles"
      },
      villa3: {
        name: "Harmonie",
        features: "5 Chambres | Type 1",
        description: "",
        status: "1 Disponible"
      },
      startingFrom: "À partir de",
      available: "Disponible",
      reserved: "Réservé"
    },
    amenities: {
      title: "Équipements Premium",
      description: "Design de classe mondiale pour le propriétaire de bon goût. Chaque fait et tissu soigneusement curé. Profitez d'une expérience de vie inégalée.",
      features: {
        pools: "Piscines à Débordement",
        spa: "Pavillons Spa Privés",
        concierge: "Concierge 24/7",
        gardens: "Jardins Tropicaux"
      }
    },
    exclusive: {
      title: "Style de Vie Sur Mesure",
      description: "Vivez comme la royauté dans l'abondance totale. Spécialement conçu pour améliorer le flux d'énergie. Pour ceux qui aiment les belles choses.",
      buttonText: "Voir la Brochure"
    },
    location: {
      title: "Situé au Paradis",
      stats: {
        beaches: "Plages Immaculées",
        restaurants: "Restaurants Michelin",
        amenities: "Équipements de Luxe"
      },
      locationStats: {
        beaches: {
          title: "Plages Immaculées",
          subtitle: "Votre évasion côtière"
        },
        golf: {
          title: "Terrains de Golf de Championnat",
          subtitle: "Installations de classe mondiale"
        },
        schools: {
          title: "Écoles Internationales de Premier Plan",
          subtitle: "Éducation d'élite à proximité"
        }
      },
      beachCards: {
        patong: {
          title: "Plage de Patong",
          description: "Le cœur vibrant de Phuket avec divertissement de classe mondiale, gastronomie et vie nocturne à quelques pas d'eaux cristallines.",
          features: ["Resorts 5 étoiles", "Clubs de plage", "Sports nautiques", "Centres commerciaux"]
        },
        kata: {
          title: "Plage de Kata",
          description: "Un tronçon immaculé de sable doré parfait pour le surf, les bains de soleil et découvrir l'authentique culture de plage thaïlandaise.",
          features: ["Vagues de surf", "Vues coucher de soleil", "Cuisine locale", "Atmosphère paisible"]
        },
        karon: {
          title: "Plage de Karon",
          description: "Trois kilomètres de plage de sable blanc poudreux offrant détente tranquille et panoramas océaniques à couper le souffle.",
          features: ["Retraite tranquille", "Eaux immaculées", "Resorts spa", "Promenades nature"]
        }
      },
      mapSection: {
        title: "Emplacement Stratégique",
        description: "Parfaitement positionné entre les plages les plus convoitées de Phuket avec accès facile à l'aéroport international, shopping de luxe et terrains de golf de renommée mondiale."
      }
    },
    investment: {
      title: "Argent Intelligent de Thaïlande",
      metrics: {
        roi: {
          title: "ROI Annuel",
          subtitle: "Location + Appréciation"
        },
        yield: {
          title: "Rendement Locatif",
          subtitle: "Choix d'Emplacement Intelligent"
        },
        tax: {
          title: "Impôt sur les Plus-Values",
          subtitle: "Protégez Votre Capital"
        }
      },
      marketAnalysis: {
        title: "Analyse de Marché",
        luxuryGrowth: "Croissance des Propriétés de Luxe (2009-2025)",
        foreignInvestment: "Augmentation des Investissements Étrangers (2009-2025)",
        gdpGrowth: "Projection de Croissance du PIB (2025)",
        chartTitle: "Tendances de l'Immobilier de Luxe en Thaïlande",
        chartInsights: {
          growth: "Croissance sur 15 Ans",
          average2009: "Moyenne 2009",
          average2024: "Moyenne 2024"
        }
      },
      benefits: {
        title: "Avantages",
        items: {
          residency: {
            title: "Résidence Elite Thaïlandaise",
            description: "Visa de résidence renouvelable de 5-20 ans avec investissement"
          },
          tax: {
            title: "Optimisation Fiscale",
            description: "Pas d'impôt sur les plus-values pour les investisseurs étrangers qualifiés"
          },
          currency: {
            title: "Diversification Monétaire",
            description: "Stabilité du Baht thaïlandais et croissance économique régionale"
          },
          management: {
            title: "Gestion Locative",
            description: "Gestion professionnelle immobilière et services de location"
          },
          lifestyle: {
            title: "Accès au Style de Vie",
            description: "Droits d'usage personnel avec équipements de luxe"
          },
          ownership: {
            title: "Propriété en Pleine Propriété",
            description: "Structures de bail de 90 ans avec droits de succession"
          }
        }
      },
      stability: {
        title: "Stabilité et Croissance Économique de la Thaïlande",
        description: "L'environnement politique stable de la Thaïlande, l'industrie touristique robuste et l'emplacement stratégique en Asie du Sud-Est en font le choix intelligent pour les investisseurs immobiliers exigeants. Les politiques pro-investissement du gouvernement et le développement des infrastructures continuent de stimuler les opportunités d'argent intelligent.",
        metrics: {
          rating: {
            title: "Notation de Crédit",
            subtitle: "Perspective Stable Moody's & S&P"
          },
          gdp: {
            title: "PIB (2024)",
            subtitle: "2ème Plus Grande Économie ASEAN"
          },
          tourists: {
            title: "Touristes Annuels",
            subtitle: "Objectif de Récupération Pré-2024"
          }
        }
      }
    },
    virtualTour: {
      title: "Expérience Villa Virtuelle",
      subtitle: "Explorez nos villas de luxe avec des tours immersifs à 360°",
      features: {
        views360: {
          title: "Vues à 360°",
          description: "Immersion panoramique complète"
        },
        navigation: {
          title: "Navigation dans les Pièces",
          description: "Transitions d'espaces fluides"
        },
        walkthrough: {
          title: "Visite Vidéo",
          description: "Tours guidés professionnels"
        }
      },
      buttons: {
        pictures: "Photos",
        videoTour: "Tour Vidéo"
      },
      villas: {
        type1: {
          name: "Villa Type 1",
          description: "4 Chambres | Piscine à Débordement | Vues Océan",
          status: "2 Disponibles",
          rooms: {
            living: "Salon",
            master: "Chambre Principale",
            pool: "Piscine à Débordement",
            kitchen: "Cuisine",
            terrace: "Terrasse"
          }
        },
        type2: {
          name: "Villa Type 2",
          description: "5 Chambres | Terrasse Piscine | Sanctuaire Jardin",
          status: "1 Disponible",
          rooms: {
            living: "Grand Salon",
            master: "Suite Principale",
            pool: "Terrasse Piscine",
            kitchen: "Cuisine Gastronomique",
            garden: "Vue Jardin"
          }
        },
        type3: {
          name: "Villa Type 3",
          description: "3 Chambres | Piscine Privée | Jardins Zen",
          status: "Réservé",
          rooms: {
            living: "Salon Zen",
            master: "Retraite Principale",
            pool: "Sanctuaire Privé",
            kitchen: "Cuisine du Chef",
            garden: "Jardin Zen"
          }
        }
      },
      interface: {
        selectVilla: "Sélectionnez une villa pour commencer votre tour virtuel",
        startTour: "Commencer le Tour Virtuel",
        nextRoom: "Pièce Suivante",
        prevRoom: "Pièce Précédente",
        closeTour: "Fermer le Tour",
        hotspots: "points d'intérêt"
      }
    },
    contact: {
      title: "Votre Tour de Villa Privé",
      form: {
        firstName: "Prénom *",
        lastName: "Nom de Famille *",
        email: "Adresse Email *",
        phone: "Numéro de Téléphone *",
        villaOfInterest: "Villa d'Intérêt *",
        message: "Commentaires ou Questions ?",
        submit: "Programmer Mon Tour Privé",
        placeholders: {
          firstName: "Votre Prénom",
          lastName: "Votre Nom de Famille",
          email: "your@email.com",
          phone: "+66 77-888-9999",
          villaSelect: "Sélectionner une villa",
          allVillas: "Toutes",
          villa1: "Villa 1",
          villa2: "Villa 2",
          villa3: "Villa 3",
          villa4: "Villa 4",
          message: "Je suis intéressé à en savoir plus sur..."
        }
      }
    },
    footer: {
      exclusiveDevelopment: "Développement Exclusif",
      whatsapp: "WhatsApp",
      wechat: "WeChat",
      line: "Line",
      copyright: "© 2025 MCLL ASIA CO."
    }
  },
  ar: {
    nav: {
      residence: "البيت ↗",
      location: "عرض ↗",
      wealth: "الثروة ↗",
      language: "اللغة",
      contact: "اتصل بنا"
    },
    hero: {
      subtitle1: "عيش بسلام في أرقى عقار في باتايا",
      subtitle2: "ثالوث من التصميم ا��خالد والجودة الفريدة والشغف بالكمال",
      subtitle3: "برك لا متناهية سلسة وتشطيبات فاخرة ومناظر مذهلة تعيد تعريف الرفاهية"
    },
    properties: {
      title: "اختبر أعلى واقع لديك",
      description: "تجسيد للجنة الاستوائية؛ واحتك الخاصة من الثراء. اكتشف م��زلك في أعظم مكان على الأرض. توافر محدود من",
      priceRange: "إلى",
      villa1: {
        name: "الهدوء",
        features: "3 غرف نوم | مسبح خاص | حدائق الزن",
        description: "رفاهية بسيطة مع عناصر خشبية دافئة",
        status: "محجوز"
      },
      villa2: {
        name: "الصفاء",
        features: "4 غرف نوم | مسبح لا متناهي | إطلالة على المحيط",
        description: "عمارة استوائية حديثة مع تشطيبات فاخرة",
        status: "2 متاح"
      },
      villa3: {
        name: "الانسجام",
        features: "5 غرف نوم | شرفة المسبح | ملاذ الحديقة",
        description: "تصميم متطور مع لمسات من الحجر الطبيعي",
        status: "1 متاح"
      },
      startingFrom: "ابتداء من",
      available: "متاح",
      reserved: "محجوز"
    },
    amenities: {
      title: "وسائل الراحة الفاخرة",
      description: "تصميم عالمي المستوى لمالك المنزل صاحب الذوق. كل حقيقة ونسيج منتقى بعناية. استمتع بتجربة معيشة لا مثيل لها.",
      features: {
        pools: "برك الحافة اللانهائية",
        spa: "أجنحة سبا خاصة",
        concierge: "بواب 24/7",
        gardens: "حدائق استوائية"
      }
    },
    exclusive: {
      title: "نمط حياة مخصص",
      description: "عيش كالملوك في وفرة تامة. مصمم خصيصاً لتعزيز تدفق الطاقة. لأولئك الذين يحبون الأشياء الجميلة.",
      buttonText: "ع��ض الكتيب"
    },
    location: {
      title: "يقع في الجنة",
      stats: {
        beaches: "شواطئ نقية",
        restaurants: "مطاعم ميشلان",
        amenities: "وسائل راحة فاخرة"
      },
      locationStats: {
        beaches: {
          title: "شواطئ نقية",
          subtitle: "هروبك الساحل��"
        },
        golf: {
          title: "ملاعب غولف البطولة",
          subtitle: "مرافق عالمية المستوى"
        },
        schools: {
          title: "مدارس دولية من الدرجة الأولى",
          subtitle: "تعليم النخبة القريب"
        }
      },
      beachCards: {
        patong: {
          title: "شاطئ بات��نغ",
          description: "القلب النابض بالحياة لفوكيت مع ترفيه وطعام وحياة ليلية على مستوى عالمي على بعد خطوات قليلة من المياه الصافية كالكريستال.",
          features: ["منتجعات 5 نجوم", "نوادي شاطئية", "رياضات مائية", "مراكز تسوق"]
        },
        kata: {
          title: "شاطئ كاتا",
          description: "امتداد نقي من ال��مال الذهبية مثالي لركوب الأمواج والاستحمام الشمسي وتجربة ثقافة الشاطئ التايلاندية ��لأصيلة.",
          features: ["أمواج ركوب الأمواج", "مناظر الغروب", "مأكولات محلية", "جو هادئ"]
        },
        karon: {
          title: "شاطئ كارون",
          description: "ثلاثة كيلومترات من شاطئ الرمال البيضاء الناعمة التي تقدم استرخاء هادئ ومناظر بحرية خلابة.",
          features: ["ملاذ هادئ", "مياه نقية", "منتجعات سبا", "نزهات طبيعية"]
        }
      },
      mapSection: {
        title: "موقع استراتيجي",
        description: "��وضوع بشكل مثالي بين أكثر شواطئ فوكيت المرغوبة مع سهولة الوصول إلى المطار الدولي والتسوق الفاخر وملاعب الغولف المشهورة عالمياً."
      }
    },
    investment: {
      title: "الأموال الذكية في تايلاند",
      metrics: {
        roi: {
          title: "عائد الاستثمار السنوي",
          subtitle: "إيجار + تقدير"
        },
        yield: {
          title: "عائد الإيجار",
          subtitle: "اختيار موقع ذكي"
        },
        tax: {
          title: "ضريبة أرباح رأس المال",
          subtitle: "احم رأس مالك"
        }
      },
      marketAnalysis: {
        title: "تحليل السوق",
        luxuryGrowth: "نمو العقارات الفاخرة (2009-2025)",
        foreignInvestment: "زيادة الاستثمار الأجنبي (2009-2025)",
        gdpGrowth: "توقعات نمو الناتج المحلي الإجمالي (2025)",
        chartTitle: "اتجاهات العقارات الفاخرة في تايلاند",
        chartInsights: {
          growth: "نمو 15 سنة",
          average2009: "متوسط 2009",
          average2024: "متوسط 2024"
        }
      },
      benefits: {
        title: "الفوائد",
        items: {
          residency: {
            title: "إقامة النخبة التايلاندية",
            description: "تأشيرة إقامة قابلة للتجديد لمدة 5-20 سنة مع الاستثمار"
          },
          tax: {
            title: "تحسين الضرائب",
            description: "لا توجد ضريبة أرباح رأس المال للمستثمرين الأجانب المؤهلين"
          },
          currency: {
            title: "تنويع العملة",
            description: "استقرار الباهت التايلاندي والنمو الاقتصادي الإقليمي"
          },
          management: {
            title: "إدارة الإيجار",
            description: "إدارة عقارية محترفة وخدمات تأجير"
          },
          lifestyle: {
            title: "الوصول إلى نمط الحياة",
            description: "حقوق الاستخدام الشخصي مع وسائل الر��حة الفاخرة"
          },
          ownership: {
            title: "ملكية حرة",
            description: "هياكل إيجار 90 سنة مع حقوق الوراثة"
          }
        }
      },
      stability: {
        title: "الاستقرار والنمو الاقتصادي في تايلاند",
        description: "البيئة السياسية المستقرة في تايلاند وصناعة السياحة القوية والموقع الاستراتيجي في جنوب شرق آسيا تجعلها الخيار الذكي لمستثمري العقارات المميزين. سياسات الحكومة المؤيدة للاستثمار وتطوير البنية التحتية تواصل دفع فرص الأموال الذكية.",
        metrics: {
          rating: {
            title: "التصنيف الائتماني",
            subtitle: "نظرة مستقرة من موديز وإس آند بي"
          },
          gdp: {
            title: "الناتج المحلي الإجمالي (2024)",
            subtitle: "ثاني أكبر اقتصاد في آسيان"
          },
          tourists: {
            title: "السياح السنويون",
            subtitle: "هدف الانتعاش ما قبل 2024"
          }
        }
      }
    },
    virtualTour: {
      title: "تجربة الفيل�� الافتراضية",
      subtitle: "استكشف فيلاتنا الفاخرة بجولات غامرة 360°",
      features: {
        views360: {
          title: "إطلالات 360°",
          description: "غمر بانورامي كامل"
        },
        navigation: {
          title: "التنقل بين الغرف",
          description: "انتقال��ت مساحية سلسة"
        },
        walkthrough: {
          title: "جولة فيديو",
          description: "جولات إرشادية مهنية"
        }
      },
      buttons: {
        pictures: "صور",
        videoTour: "جولة فيديو"
      },
      villas: {
        type1: {
          name: "فيلا النوع 1",
          description: "4 غرف نوم | مسبح لا متناهي | إطلالة على المحيط",
          status: "2 متاح",
          rooms: {
            living: "غرفة المعيشة",
            master: "غرفة النوم الرئيسية",
            pool: "مسبح لا متناهي",
            kitchen: "المطبخ",
            terrace: "التراس"
          }
        },
        type2: {
          name: "فيلا النوع 2",
          description: "5 غرف نوم | شرفة المسبح | ملاذ الحديقة",
          status: "1 متاح",
          rooms: {
            living: "معيشة كبيرة",
            master: "جناح رئيسي",
            pool: "شرفة المسبح",
            kitchen: "مطبخ للذواقة",
            garden: "إطلالة على الحديقة"
          }
        },
        type3: {
          name: "فيلا ال��وع 3",
          description: "3 غرف نوم | مسبح خاص | حدائق الزن",
          status: "محجوز",
          rooms: {
            living: "معيشة الزن",
            master: "ملاذ رئيسي",
            pool: "ملاذ خاص",
            kitchen: "مطبخ الشيف",
            garden: "��ديقة الزن"
          }
        }
      },
      interface: {
        selectVilla: "اختر فيلا لبدء جولتك الافتراضية",
        startTour: "بدء الجولة الافتراضية",
        nextRoom: "الغرفة التالية",
        prevRoom: "الغرفة السابقة",
        closeTour: "إغلاق الجولة",
        hotspots: "النقاط الساخنة"
      }
    },
    contact: {
      title: "جولة الفيلا الخاصة بك",
      form: {
        firstName: "الاسم الأول *",
        lastName: "اسم العائلة *",
        email: "عنوان البريد الإلكتروني *",
        phone: "رقم الهاتف *",
        villaOfInterest: "الفيلا المرغوبة *",
        message: "تعليقات أو أسئلة؟",
        submit: "جدولة جولتي الخاصة",
        placeholders: {
          firstName: "اسمك الأول",
          lastName: "اسم عائلتك",
          email: "your@email.com",
          phone: "+66 77-888-9999",
          villaSelect: "اختر فيلا",
          allVillas: "جميعها",
          villa1: "فيلا 1",
          villa2: "فيلا 2",
          villa3: "فيلا 3",
          villa4: "فيلا 4",
          message: "أنا مهتم بمعرفة المزيد عن..."
        }
      }
    },
    footer: {
      exclusiveDevelopment: "تطوير حصري",
      whatsapp: "واتساب",
      wechat: "وي تشات",
      line: "لاين",
      copyright: "© 2025 MCLL ASIA CO."
    }
  },
  ms: {
    nav: {
      residence: "Rumah ↗",
      location: "Lihat ↗",
      wealth: "Kekayaan ↗",
      language: "Bahasa",
      contact: "Hubungi"
    },
    hero: {
      subtitle1: "Hidup dengan aman di estet paling berprestij di Pattaya",
      subtitle2: "Triniti reka bentuk abadi, kualiti tanpa saingan, dan semangat untuk kesempurnaan",
      subtitle3: "Kolam infiniti lancar, kemasan premium, dan pemandangan menakjubkan yang mentakrifkan semula kemewahan"
    },
    properties: {
      title: "Alami realiti tertinggi anda",
      description: "Manifestasi syurga tropika; oasis peribadi kemewahan anda. Temui rumah anda di tempat terhebat di Bumi. Ketersediaan terhad dari",
      priceRange: "hingga",
      villa1: {
        name: "Ketenangan",
        features: "3 Bilik Tidur | Kolam Peribadi | Taman Zen",
        description: "Kemewahan minimalis dengan unsur kayu hangat",
        status: "Ditempah"
      },
      villa2: {
        name: "Keseranian",
        features: "4 Bilik Tidur | Kolam Infiniti | Pemandangan Laut",
        description: "Seni bina tropika moden dengan kemasan premium",
        status: "2 Tersedia"
      },
      villa3: {
        name: "Harmoni",
        features: "5 Bilik Tidur | Teres Kolam | Tempat Suci Taman",
        description: "Reka bentuk canggih dengan aksen batu semula jadi",
        status: "1 Tersedia"
      },
      startingFrom: "Bermula dari",
      available: "Tersedia",
      reserved: "Ditempah"
    },
    amenities: {
      title: "Kemudahan Premium",
      description: "Reka bentuk kelas dunia untuk pemilik rumah berselera. Setiap fakta dan fabrik dikurasi dengan teliti. Nikmati pengalaman hidup yang tiada tandingan.",
      features: {
        pools: "Kolam Tepi Infiniti",
        spa: "Pavilion Spa Peribadi",
        concierge: "Concierge 24/7",
        gardens: "Taman Tropika"
      }
    },
    exclusive: {
      title: "Gaya Hidup Tersendiri",
      description: "Hidup seperti royalti dalam kelimpahan penuh. Direka khas untuk meningkatkan aliran tenaga. Untuk mereka yang menyukai perkara-perkara halus.",
      buttonText: "Lihat Brosur"
    },
    location: {
      title: "Terletak di Syurga",
      stats: {
        beaches: "Pantai Pristine",
        restaurants: "Restoran Michelin",
        amenities: "Kemudahan Mewah"
      },
      locationStats: {
        beaches: {
          title: "Pantai Pristine",
          subtitle: "Pelarian pantai anda"
        },
        golf: {
          title: "Padang Golf Kejuaraan",
          subtitle: "Kemudahan kelas dunia"
        },
        schools: {
          title: "Sekolah Antarabangsa Peringkat Tertinggi",
          subtitle: "Pendidikan elit berdekatan"
        }
      },
      beachCards: {
        patong: {
          title: "Pantai Patong",
          description: "Jantung bertenaga Phuket dengan hiburan, makan malam, dan kehidupan malam kelas dunia hanya beberapa langkah dari air jernih kristal.",
          features: ["Resort 5 bintang", "Kelab pantai", "Sukan air", "Pusat membeli-belah"]
        },
        kata: {
          title: "Pantai Kata",
          description: "Hamparan pristine pasir emas yang sempurna untuk berselancar, berjemur, dan mengalami budaya pantai Thai yang tulen.",
          features: ["Ombak berselancar", "Pemandangan matahari terbenam", "Masakan tempatan", "Suasana tenang"]
        },
        karon: {
          title: "Pantai Karon",
          description: "Tiga kilometer pantai pasir putih seperti bedak yang menawarkan kelonggaran tenang dan panorama laut yang menghayutkan.",
          features: ["Retreat tenang", "Air pristine", "Resort spa", "Berjalan di alam"]
        }
      },
      mapSection: {
        title: "Lokasi Strategik",
        description: "Ditempatkan dengan sempurna antara pantai-pantai Phuket yang paling diingini dengan akses mudah ke lapangan terbang antarabangsa, membeli-belah mewah, dan padang golf terkenal dunia."
      }
    },
    investment: {
      title: "Wang Pintar Thailand",
      metrics: {
        roi: {
          title: "ROI Tahunan",
          subtitle: "Sewa + Peningkatan"
        },
        yield: {
          title: "Hasil Sewa",
          subtitle: "Pilihan Lokasi Pintar"
        },
        tax: {
          title: "Cukai Keuntungan Modal",
          subtitle: "Lindungi Modal Anda"
        }
      },
      marketAnalysis: {
        title: "Analisis Pasaran",
        luxuryGrowth: "Pertumbuhan Hartanah Mewah (2009-2025)",
        foreignInvestment: "Peningkatan Pelaburan Asing (2009-2025)",
        gdpGrowth: "Unjuran Pertumbuhan KDNK (2025)",
        chartTitle: "Trend Hartanah Mewah Thailand",
        chartInsights: {
          growth: "Pertumbuhan 15 Tahun",
          average2009: "Purata 2009",
          average2024: "Purata 2024"
        }
      },
      benefits: {
        title: "Faedah",
        items: {
          residency: {
            title: "Pemastautin Elite Thai",
            description: "Visa pemastautin boleh diperbaharui 5-20 tahun dengan pelaburan"
          },
          tax: {
            title: "Pengoptimuman Cukai",
            description: "Tiada cukai keuntungan modal untuk pelabur asing yang layak"
          },
          currency: {
            title: "Kepelbagaian Mata Wang",
            description: "Kestabilan Baht Thai dan pertumbuhan ekonomi serantau"
          },
          management: {
            title: "Pengurusan Sewa",
            description: "Pengurusan hartanah profesional dan perkhidmatan sewa"
          },
          lifestyle: {
            title: "Akses Gaya Hidup",
            description: "Hak penggunaan peribadi dengan kemudahan mewah"
          },
          ownership: {
            title: "Pemilikan Bebas",
            description: "Struktur pajakan 90 tahun dengan hak warisan"
          }
        }
      },
      stability: {
        title: "Kestabilan & Pertumbuhan Ekonomi Thailand",
        description: "Persekitaran politik yang stabil di Thailand, industri pelancongan yang kukuh, dan lokasi strategik di Asia Tenggara menjadikannya pilihan pintar untuk pelabur hartanah yang cerdik. Dasar pro-pelaburan kerajaan dan pembangunan infrastruktur terus memacu peluang wang pintar.",
        metrics: {
          rating: {
            title: "Penarafan Kredit",
            subtitle: "Tinjauan Stabil Moody's & S&P"
          },
          gdp: {
            title: "KDNK (2024)",
            subtitle: "Ekonomi Terbesar Ke-2 ASEAN"
          },
          tourists: {
            title: "Pelancong Tahunan",
            subtitle: "Sasaran Pemulihan Pra-2024"
          }
        }
      }
    },
    virtualTour: {
      title: "Pengalaman Villa Maya",
      subtitle: "Terokai villa mewah kami dengan lawatan mendalam 360°",
      features: {
        views360: {
          title: "Pandangan 360°",
          description: "Pengalaman panorama lengkap"
        },
        navigation: {
          title: "Navigasi Bilik",
          description: "Peralihan ruang yang lancar"
        },
        walkthrough: {
          title: "Lawatan Video",
          description: "Tur berpanduan profesional"
        }
      },
      buttons: {
        pictures: "Gambar",
        videoTour: "Lawatan Video"
      },
      villas: {
        type1: {
          name: "Villa Jenis 1",
          description: "4 Bilik Tidur | Kolam Infiniti | Pemandangan Laut",
          status: "2 Tersedia",
          rooms: {
            living: "Ruang Tamu",
            master: "Bilik Tidur Utama",
            pool: "Kolam Infiniti",
            kitchen: "Dapur",
            terrace: "Teres"
          }
        },
        type2: {
          name: "Villa Jenis 2",
          description: "5 Bilik Tidur | Teres Kolam | Tempat Suci Taman",
          status: "1 Tersedia",
          rooms: {
            living: "Ruang Tamu Besar",
            master: "Suite Utama",
            pool: "Teres Kolam",
            kitchen: "Dapur Gourmet",
            garden: "Pemandangan Taman"
          }
        },
        type3: {
          name: "Villa Jenis 3",
          description: "3 Bilik Tidur | Kolam Peribadi | Taman Zen",
          status: "Ditempah",
          rooms: {
            living: "Ruang Tamu Zen",
            master: "Retreat Utama",
            pool: "Tempat Suci Peribadi",
            kitchen: "Dapur Chef",
            garden: "Taman Zen"
          }
        }
      },
      interface: {
        selectVilla: "Pilih villa untuk memulakan lawatan maya anda",
        startTour: "Mulakan Lawatan Maya",
        nextRoom: "Bilik Seterusnya",
        prevRoom: "Bilik Sebelumnya",
        closeTour: "Tutup Lawatan",
        hotspots: "titik hangat"
      }
    },
    contact: {
      title: "Lawatan Villa Peribadi Anda",
      form: {
        firstName: "Nama Pertama *",
        lastName: "Nama Keluarga *",
        email: "Alamat E-mel *",
        phone: "Nombor Telefon *",
        villaOfInterest: "Villa Minat *",
        message: "Komen atau Soalan?",
        submit: "Jadualkan Lawatan Peribadi Saya",
        placeholders: {
          firstName: "Nama Pertama Anda",
          lastName: "Nama Keluarga Anda",
          email: "your@email.com",
          phone: "+66 77-888-9999",
          villaSelect: "Pilih villa",
          allVillas: "Semua",
          villa1: "Villa 1",
          villa2: "Villa 2",
          villa3: "Villa 3",
          villa4: "Villa 4",
          message: "Saya berminat untuk mengetahui lebih lanjut tentang..."
        }
      }
    },
    footer: {
      exclusiveDevelopment: "Pembangunan Eksklusif",
      whatsapp: "WhatsApp",
      wechat: "WeChat",
      line: "Line",
      copyright: "© 2025 MCLL ASIA CO."
    }
  },
  vi: {
    nav: {
      residence: "Nhà ↗",
      location: "Xem ↗",
      wealth: "Giàu ↗",
      language: "Ngôn ngữ",
      contact: "Liên hệ"
    },
    hero: {
      subtitle1: "Sống bình yên tại khu điền trang danh giá nhất Pattaya",
      subtitle2: "Bộ ba thiết kế vượt thời gian, chất lượng vô song và đam mê hoàn hảo",
      subtitle3: "Hồ bơi vô cực liền mạch, hoàn thiện cao cấp và cảnh quan tuyệt đẹp định nghĩa lại sự xa hoa"
    },
    properties: {
      title: "Trải nghiệm thực tế cao nhất của bạn",
      description: "Hiện thân c��a thiên đường nhiệt đới; ốc đảo xa hoa riêng của bạn. Kh��m phá ngôi nhà của bạn tại nơi tuyệt vời nhất trên Trái đất. Có sẵn giới hạn từ",
      priceRange: "đến",
      villa1: {
        name: "Thanh Tịnh",
        features: "3 Phòng ngủ | Hồ bơi riêng | Vườn Zen",
        description: "Xa hoa tối giản với yếu tố gỗ ấm áp",
        status: "Đã đặt"
      },
      villa2: {
        name: "Tĩnh Lặng",
        features: "4 Phòng ngủ | Hồ bơi vô cực | Tầm nhìn ra biển",
        description: "Kiến trúc nhiệt đới hiện đại với hoàn thiện cao cấp",
        status: "2 Có sẵn"
      },
      villa3: {
        name: "Hài Hòa",
        features: "5 Phòng ngủ | Sân thượng hồ bơi | Khu vườn thiêng",
        description: "Thiết kế tinh tế với điểm nhấn đá tự nhiên",
        status: "1 Có sẵn"
      },
      startingFrom: "Bắt đầu từ",
      available: "Có sẵn",
      reserved: "Đã đặt"
    },
    amenities: {
      title: "Tiện ích Cao cấp",
      description: "Thiết kế đẳng cấp thế giới cho chủ nhà có gu. Mọi sự thật và chất liệu được tuyển chọn cẩn thận. Tận hưởng trải nghiệm sống không gì sánh được.",
      features: {
        pools: "Hồ bơi viền vô cực",
        spa: "Pavilion Spa riêng",
        concierge: "Lễ tân 24/7",
        gardens: "Vườn nhiệt đới"
      }
    },
    exclusive: {
      title: "Lối sống Riêng biệt",
      description: "Sống như hoàng gia trong sự thịnh vượng tuyệt đối. Thiết kế đặc biệt để tăng cường dòng chảy năng lượng. Dành cho những ai yêu thích những điều tinh tế.",
      buttonText: "Xem Brochure"
    },
    location: {
      title: "Tọa lạc tại Thiên đường",
      stats: {
        beaches: "Bãi biển nguyên sơ",
        restaurants: "Nhà hàng Michelin",
        amenities: "Tiện ích Xa hoa"
      },
      locationStats: {
        beaches: {
          title: "Bãi biển nguyên sơ",
          subtitle: "Nơi nghỉ dưỡng ven biển của bạn"
        },
        golf: {
          title: "Sân Golf Vô địch",
          subtitle: "Cơ sở vật chất đẳng cấp thế giới"
        },
        schools: {
          title: "Trường Quốc tế Hàng đầu",
          subtitle: "Giáo dục ưu tú gần đây"
        }
      },
      beachCards: {
        patong: {
          title: "Bãi biển Patong",
          description: "Trái tim sôi động của Phuket với giải trí, ẩm thực và cuộc sống về đêm đẳng cấp thế giới chỉ vài bước từ vùng nước trong vắt như pha lê.",
          features: ["Resort 5 sao", "Club bãi biển", "Thể thao nước", "Trung tâm mua sắm"]
        },
        kata: {
          title: "Bãi biển Kata",
          description: "Dải cát vàng nguyên sơ hoàn hảo cho lướt sóng, tắm nắng và trải nghiệm văn hóa bãi biển Thái chính thống.",
          features: ["Sóng lướt", "Cảnh hoàng hôn", "Ẩm thực địa phương", "Không gian yên b��nh"]
        },
        karon: {
          title: "Bãi biển Karon",
          description: "Ba kilomet bãi biển cát trắng mịn như bột cung cấp sự thư giãn yên tĩnh và cảnh quan đại dương ngoạn mục.",
          features: ["Nơi ngh�� dưỡng yên tĩnh", "Nước nguyên sơ", "Resort spa", "Đi bộ trong tự nhiên"]
        }
      },
      mapSection: {
        title: "Vị trí Chiến lược",
        description: "Được định vị hoàn hảo giữa những bãi biển được khao khát nhất của Phuket với lối vào dễ dàng tới sân bay quốc tế, mua sắm xa hoa và sân golf nổi tiếng thế giới."
      }
    },
    investment: {
      title: "Tiền Thông minh Thái Lan",
      metrics: {
        roi: {
          title: "ROI Hàng năm",
          subtitle: "Thuê + Tăng giá"
        },
        yield: {
          title: "Lợi nhuận cho thuê",
          subtitle: "Lựa chọn vị trí thông minh"
        },
        tax: {
          title: "Thuế lãi vốn",
          subtitle: "Bảo vệ vốn của bạn"
        }
      },
      marketAnalysis: {
        title: "Phân tích thị trường",
        luxuryGrowth: "Tăng trưởng bất động sản xa hoa (2009-2025)",
        foreignInvestment: "Tăng đầu tư nước ngoài (2009-2025)",
        gdpGrowth: "Dự báo tăng trưởng GDP (2025)",
        chartTitle: "Xu hướng bất động sản xa hoa Thái Lan",
        chartInsights: {
          growth: "Tăng trưởng 15 năm",
          average2009: "Trung bình 2009",
          average2024: "Trung bình 2024"
        }
      },
      benefits: {
        title: "Lợi ích",
        items: {
          residency: {
            title: "Cư trú Elite Thái",
            description: "Visa cư trú có thể gia hạn 5-20 năm với đầu tư"
          },
          tax: {
            title: "Tối ưu hóa thuế",
            description: "Không có thuế lãi vốn cho nhà đầu tư nước ngoài đủ điều kiện"
          },
          currency: {
            title: "Đa dạng hóa tiền tệ",
            description: "Sự ổn định của đồng Baht Thái và tăng trưởng kinh tế khu vực"
          },
          management: {
            title: "Quản lý cho thuê",
            description: "Quản lý bất động sản chuyên nghiệp và dịch vụ cho thuê"
          },
          lifestyle: {
            title: "Tiếp cận lối sống",
            description: "Quyền sử dụng cá nhân với tiện ích xa hoa"
          },
          ownership: {
            title: "Sở hữu tự do",
            description: "Cấu trúc thuê 90 năm với quyền thừa kế"
          }
        }
      },
      stability: {
        title: "Ổn định và Tăng trưởng Kinh tế Thái Lan",
        description: "Môi trường chính trị ổn định của Thái Lan, ngành du lịch mạnh mẽ và vị trí chiến lược ở Đông Nam Á khiến nó trở thành lựa chọn thông minh cho các nhà đầu tư bất động sản sành sỏi. Các chính sách ủng hộ đầu tư của chính phủ và phát triển cơ sở hạ tầng tiếp tục thúc đẩy các cơ hội tiền thông minh.",
        metrics: {
          rating: {
            title: "Xếp hạng tín dụng",
            subtitle: "Triển vọng ổn định Moody's & S&P"
          },
          gdp: {
            title: "GDP (2024)",
            subtitle: "Nền kinh tế lớn thứ 2 ASEAN"
          },
          tourists: {
            title: "Du khách hàng năm",
            subtitle: "Mục tiêu phục hồi trước 2024"
          }
        }
      }
    },
    virtualTour: {
      title: "Trải nghiệm Villa ảo",
      subtitle: "Khám phá những villa xa hoa của chúng tôi với tour 360° nhập vai",
      features: {
        views360: {
          title: "Góc nhìn 360°",
          description: "Trải nghiệm toàn cảnh hoàn toàn"
        },
        navigation: {
          title: "Điều hướng phòng",
          description: "Chuyển đổi không gian mượt mà"
        },
        walkthrough: {
          title: "Hướng dẫn Video",
          description: "Tour có hướng dẫn chuyên nghiệp"
        }
      },
      buttons: {
        pictures: "Hình ảnh",
        videoTour: "Tour Video"
      },
      villas: {
        type1: {
          name: "Villa loại 1",
          description: "4 Phòng ngủ | Hồ bơi vô cực | Tầm nhìn ra biển",
          status: "2 Có sẵn",
          rooms: {
            living: "Phòng khách",
            master: "Phòng ngủ chính",
            pool: "Hồ bơi vô cực",
            kitchen: "Nhà bếp",
            terrace: "Sân thượng"
          }
        },
        type2: {
          name: "Villa loại 2",
          description: "5 Phòng ngủ | Sân thượng hồ bơi | Khu vườn thiêng",
          status: "1 Có sẵn",
          rooms: {
            living: "Phòng khách lớn",
            master: "Suite chính",
            pool: "Sân thượng hồ bơi",
            kitchen: "Nhà bếp gourmet",
            garden: "Tầm nhìn vườn"
          }
        },
        type3: {
          name: "Villa loại 3",
          description: "3 Phòng ngủ | Hồ bơi riêng | Vườn Zen",
          status: "Đã đặt",
          rooms: {
            living: "Phòng khách Zen",
            master: "Nơi nghỉ dưỡng chính",
            pool: "Khu vực thiêng riêng",
            kitchen: "Nhà bếp đầu bếp",
            garden: "Vườn Zen"
          }
        }
      },
      interface: {
        selectVilla: "Chọn một villa để bắt đầu tour ảo của bạn",
        startTour: "Bắt đầu Tour ảo",
        nextRoom: "Phòng tiếp theo",
        prevRoom: "Phòng trước",
        closeTour: "Đóng Tour",
        hotspots: "điểm nóng"
      }
    },
    contact: {
      title: "Tour Villa riêng của bạn",
      form: {
        firstName: "Tên *",
        lastName: "Họ *",
        email: "��ịa chỉ Email *",
        phone: "Số điện thoại *",
        villaOfInterest: "Villa quan tâm *",
        message: "Bình luận hoặc Câu hỏi?",
        submit: "Lên lịch Tour riêng của tôi",
        placeholders: {
          firstName: "Tên của bạn",
          lastName: "Họ của bạn",
          email: "your@email.com",
          phone: "+66 77-888-9999",
          villaSelect: "Chọn một villa",
          allVillas: "Tất cả",
          villa1: "Villa 1",
          villa2: "Villa 2",
          villa3: "Villa 3",
          villa4: "Villa 4",
          message: "Tôi quan tâm tìm hiểu thêm về..."
        }
      }
    },
    footer: {
      exclusiveDevelopment: "Phát triển độc quyền",
      whatsapp: "WhatsApp",
      wechat: "WeChat",
      line: "Line",
      copyright: "© 2025 MCLL ASIA CO."
    }
  }

}
