// Función para cambiar idioma
function changeLanguage(lang) {
  i18n.setLanguage(lang);
  
  // Actualizar botones de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
}

// Función para desplazarse a una sección
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Llenar servicios dinámicamente
function populateServices() {
  const servicesGrid = document.getElementById('servicesGrid');
  const services = i18n.t('services.items');
  
  servicesGrid.innerHTML = services.map(service => `
    <div class="card">
      <div class="card-icon">💼</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </div>
  `).join('');
}

// Llenar beneficios dinámicamente
function populateBenefits() {
  const benefitsList = document.getElementById('benefitsList');
  const benefits = i18n.t('collaborative.benefits');
  
  benefitsList.innerHTML = benefits.map(benefit => `
    <div class="benefit-item">
      <div class="benefit-icon">✓</div>
      <div class="benefit-text">
        <p>${benefit}</p>
      </div>
    </div>
  `).join('');
}

// Manejo del formulario de contacto
function handleContactSubmit(event) {
  event.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    company: document.getElementById('company').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value,
    timestamp: new Date().toISOString()
  };
  
  // Guardar en localStorage (para demo)
  let contacts = JSON.parse(localStorage.getItem('daptux_contacts')) || [];
  contacts.push(formData);
  localStorage.setItem('daptux_contacts', JSON.stringify(contacts));
  
  // Mostrar confirmación
  alert(i18n.currentLanguage === 'es' ? 
    '¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.' : 
    'Message sent successfully! We will contact you soon.'
  );
  
  // Limpiar formulario
  document.getElementById('contactForm').reset();
}

// Abrir QuoteFlow
function openQuoteFlow() {
  window.open('quoteflow.html', '_blank');
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  populateServices();
  populateBenefits();
  
  // Actualizar botón de idioma activo
  const currentLang = i18n.currentLanguage;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const lang = btn.textContent.toLowerCase();
    if (lang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
});

// Animación al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = 'var(--shadow-sm)';
  }
});

// Manejo de la observación de elementos
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar tarjetas
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});
