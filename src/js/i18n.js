// Sistema de Internacionalización (i18n) - Español/Inglés
const translations = {
  es: {
    // Navegación
    nav: {
      home: "Inicio",
      services: "Servicios",
      businessLines: "Líneas de Negocio",
      collaborative: "Modelo Colaborativo",
      quoteflow: "Cotizaciones",
      contact: "Contacto"
    },
    // Hero
    hero: {
      title: "Transformamos Tu Negocio con Tecnología",
      subtitle: "Software personalizado, soluciones SaaS y desarrollo a medida para empresas que quieren crecer",
      cta: "Empezar Ahora"
    },
    // Secciones
    services: {
      title: "Nuestros Servicios",
      items: [
        {
          title: "Sitios Web Corporativos",
          description: "Presencia digital profesional con diseño moderno y funcionalidad completa"
        },
        {
          title: "Software Personalizado",
          description: "Soluciones a medida diseñadas específicamente para tus necesidades"
        },
        {
          title: "MVPs y SaaS",
          description: "Lanza tu producto al mercado rápidamente con nuestras soluciones escalables"
        },
        {
          title: "Automatización e IA",
          description: "Optimiza procesos con inteligencia artificial y automatización inteligente"
        }
      ]
    },
    businessLines: {
      title: "Líneas de Negocio",
      description: "Soluciones verticales probadas y listas para usar",
      web: {
        title: "Daptux Web",
        description: "Sitios web corporativos con blog, SEO y panel de administración"
      },
      flowpay: {
        title: "Daptux FlowPay",
        description: "Plataforma SaaS para gestión de solicitudes de pago y proveedores"
      },
      ranching: {
        title: "Daptux Ganadería",
        description: "Software especializado para control ganadero e inventario"
      },
      restaurant: {
        title: "Daptux Restaurante",
        description: "Solución completa para gestión de restaurantes y cafeterías"
      }
    },
    collaborative: {
      title: "Modelo Colaborativo",
      subtitle: "El Conocimiento Compartido es el Motor de la Innovación",
      description: "En Daptux creemos que compartir experiencias, metodologías y soluciones potencia el crecimiento colectivo y el éxito de nuestros proyectos.",
      benefits: [
        "Mejorar productividad y optimizar procesos",
        "Reutilizar componentes y arquitecturas probadas",
        "Preparar propuestas y MVPs más eficientemente",
        "Acceso a casos de éxito y experiencias previas",
        "Compartir conocimiento en IA y transformación digital",
        "Aprendizaje continuo y formación de talentos",
        "Reconocer y valorar contribuciones"
      ]
    },
    quoteflow: {
      title: "Daptux QuoteFlow",
      description: "Cotizador Profesional de Soluciones Digitales",
      button: "Generar Cotización"
    },
    contact: {
      title: "¿Hablemos?",
      subtitle: "Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad",
      form: {
        name: "Nombre",
        email: "Correo",
        phone: "Teléfono",
        company: "Empresa",
        message: "Mensaje",
        submit: "Enviar"
      }
    },
    footer: {
      copyright: "© 2026 Daptux.ai - Todos los derechos reservados",
      followUs: "Síguenos",
      mission: "Compartimos conocimiento. Creamos tecnología. Transformamos empresas."
    }
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      businessLines: "Business Lines",
      collaborative: "Collaborative Model",
      quoteflow: "Quotes",
      contact: "Contact"
    },
    // Hero
    hero: {
      title: "Transform Your Business with Technology",
      subtitle: "Custom software, SaaS solutions and tailored development for companies that want to grow",
      cta: "Get Started"
    },
    // Sections
    services: {
      title: "Our Services",
      items: [
        {
          title: "Corporate Websites",
          description: "Professional digital presence with modern design and full functionality"
        },
        {
          title: "Custom Software",
          description: "Tailored solutions designed specifically for your needs"
        },
        {
          title: "MVPs and SaaS",
          description: "Launch your product quickly with our scalable solutions"
        },
        {
          title: "Automation & AI",
          description: "Optimize processes with intelligent automation and AI"
        }
      ]
    },
    businessLines: {
      title: "Business Lines",
      description: "Proven vertical solutions ready to use",
      web: {
        title: "Daptux Web",
        description: "Corporate websites with blog, SEO and admin panel"
      },
      flowpay: {
        title: "Daptux FlowPay",
        description: "SaaS platform for managing payment requests and suppliers"
      },
      ranching: {
        title: "Daptux Ranching",
        description: "Specialized software for livestock control and inventory"
      },
      restaurant: {
        title: "Daptux Restaurant",
        description: "Complete solution for restaurant and café management"
      }
    },
    collaborative: {
      title: "Collaborative Model",
      subtitle: "Shared Knowledge is the Engine of Innovation",
      description: "At Daptux we believe that sharing experiences, methodologies and solutions drives collective growth and project success.",
      benefits: [
        "Improve productivity and optimize processes",
        "Reuse proven components and architectures",
        "Prepare proposals and MVPs more efficiently",
        "Access to success cases and previous experiences",
        "Share knowledge in AI and digital transformation",
        "Continuous learning and talent training",
        "Recognize and value contributions"
      ]
    },
    quoteflow: {
      title: "Daptux QuoteFlow",
      description: "Professional Digital Solutions Quoter",
      button: "Generate Quote"
    },
    contact: {
      title: "Let's Talk?",
      subtitle: "Tell us about your project and we'll help you make it happen",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        message: "Message",
        submit: "Send"
      }
    },
    footer: {
      copyright: "© 2026 Daptux.ai - All rights reserved",
      followUs: "Follow Us",
      mission: "We share knowledge. We create technology. We transform companies."
    }
  }
};

// Gestor de idioma
class I18nManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'es';
  }

  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLanguage = lang;
      localStorage.setItem('language', lang);
      this.updatePageTranslations();
      document.documentElement.lang = lang;
    }
  }

  getTranslation(path) {
    const keys = path.split('.');
    let value = translations[this.currentLanguage];
    
    for (const key of keys) {
      value = value[key];
      if (!value) return path;
    }
    
    return value;
  }

  updatePageTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      element.textContent = this.getTranslation(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      element.placeholder = this.getTranslation(key);
    });
  }

  t(key) {
    return this.getTranslation(key);
  }
}

// Instancia global
const i18n = new I18nManager();

// Inicializar traducciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  i18n.updatePageTranslations();
});
