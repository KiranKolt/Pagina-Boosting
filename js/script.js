// ============================================
// NAVEGACIÓN Y MENÚ MÓVIL
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle del menú hamburguesa
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Navegación suave
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Cambiar estilo del header al hacer scroll
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.8)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// FILTROS DE CUENTAS
// ============================================

const filterRank = document.getElementById('filter-rank');
const filterPrice = document.getElementById('filter-price');
const resetFiltersBtn = document.getElementById('reset-filters');
const accountsGrid = document.getElementById('accounts-grid');
const accountCards = document.querySelectorAll('.account-card');

// Función para filtrar cuentas
function filterAccounts() {
    const selectedRank = filterRank.value;
    const selectedPrice = filterPrice.value;
    
    accountCards.forEach(card => {
        const cardRank = card.getAttribute('data-rank');
        const cardPrice = card.getAttribute('data-price');
        
        let showCard = true;
        
        // Filtro por rango
        if (selectedRank !== 'all' && cardRank !== selectedRank) {
            showCard = false;
        }
        
        // Filtro por precio
        if (selectedPrice !== 'all' && cardPrice !== selectedPrice) {
            showCard = false;
        }
        
        // Mostrar u ocultar tarjeta con animación
        if (showCard) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
    
    // Mostrar mensaje si no hay resultados
    const visibleCards = Array.from(accountCards).filter(card => 
        card.style.display !== 'none'
    );
    
    if (visibleCards.length === 0) {
        showNoResultsMessage();
    } else {
        removeNoResultsMessage();
    }
}

// Función para mostrar mensaje de "sin resultados"
function showNoResultsMessage() {
    if (!document.querySelector('.no-results')) {
        const message = document.createElement('div');
        message.className = 'no-results';
        message.style.cssText = `
            grid-column: 1 / -1;
            text-align: center;
            padding: 3rem;
            color: var(--color-text);
            font-size: 1.2rem;
        `;
        message.textContent = 'No se encontraron cuentas con los filtros seleccionados.';
        accountsGrid.appendChild(message);
    }
}

// Función para remover mensaje de "sin resultados"
function removeNoResultsMessage() {
    const message = document.querySelector('.no-results');
    if (message) {
        message.remove();
    }
}

// Event listeners para filtros
if (filterRank) {
    filterRank.addEventListener('change', filterAccounts);
}

if (filterPrice) {
    filterPrice.addEventListener('change', filterAccounts);
}

// Resetear filtros
if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
        filterRank.value = 'all';
        filterPrice.value = 'all';
        filterAccounts();
    });
}

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener valores del formulario
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };
        
        // Validación básica
        if (!formData.name || !formData.email || !formData.service || !formData.message) {
            showNotification('Por favor, completa todos los campos.', 'error');
            return;
        }
        
        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification('Por favor, ingresa un email válido.', 'error');
            return;
        }
        
        // Simular envío (aquí iría la lógica real de envío)
        showNotification('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
        
        // Limpiar formulario
        contactForm.reset();
    });
}

// ============================================
// BOTONES DE SERVICIOS
// ============================================

const serviceButtons = document.querySelectorAll('.btn-service');
const accountButtons = document.querySelectorAll('.btn-account');

// Agregar funcionalidad a botones de servicios
serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const serviceCard = button.closest('.service-card');
        const serviceTitle = serviceCard.querySelector('.service-title').textContent;
        
        // Scroll a sección de contacto
        const contactSection = document.querySelector('#contacto');
        if (contactSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = contactSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Pre-llenar formulario
            setTimeout(() => {
                const serviceSelect = document.getElementById('service');
                if (serviceSelect) {
                    if (serviceTitle.includes('Boost')) {
                        serviceSelect.value = 'boosting';
                    } else if (serviceTitle.includes('Coaching')) {
                        serviceSelect.value = 'coaching';
                    }
                    
                    // Focus en el campo de mensaje
                    const messageField = document.getElementById('message');
                    if (messageField) {
                        messageField.focus();
                        messageField.value = `Hola, estoy interesado en: ${serviceTitle}\n\n`;
                    }
                }
            }, 500);
        }
        
        showNotification(`Interesado en: ${serviceTitle}`, 'info');
    });
});

// Agregar funcionalidad a botones de cuentas
accountButtons.forEach(button => {
    button.addEventListener('click', () => {
        const accountCard = button.closest('.account-card');
        const accountTitle = accountCard.querySelector('.account-title').textContent;
        const accountPrice = accountCard.querySelector('.account-price').textContent;
        const accountRank = accountCard.querySelector('.account-rank').textContent;
        
        // Mostrar modal o información de la cuenta
        showAccountDetails({
            title: accountTitle,
            rank: accountRank,
            price: accountPrice,
            details: accountCard.querySelector('.account-details').innerHTML
        });
    });
});

// ============================================
// FUNCIONES DE NOTIFICACIONES
// ============================================

function showNotification(message, type = 'info') {
    // Remover notificación anterior si existe
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Crear nueva notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos de la notificación
    const colors = {
        success: '#0AC8B9',
        error: '#FF4444',
        info: '#C89B3C'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: ${type === 'error' ? 'white' : '#0A1428'};
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Agregar animaciones CSS para notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// MODAL DE DETALLES DE CUENTA
// ============================================

function showAccountDetails(account) {
    // Remover modal anterior si existe
    const existingModal = document.querySelector('.account-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'account-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2>${account.title}</h2>
            <div class="modal-rank">${account.rank}</div>
            <div class="modal-details">
                ${account.details}
            </div>
            <div class="modal-price">${account.price}</div>
            <div class="modal-actions">
                <button class="btn btn-primary modal-buy">Comprar Ahora</button>
                <button class="btn btn-secondary modal-contact">Contactar</button>
            </div>
        </div>
    `;
    
    // Estilos del modal
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .account-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(1, 10, 19, 0.9);
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            position: relative;
            background: var(--color-darker);
            border: 2px solid var(--color-secondary);
            border-radius: 10px;
            padding: 2rem;
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            z-index: 1;
            animation: scaleIn 0.3s ease;
        }
        
        .modal-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: transparent;
            border: none;
            color: var(--color-text-light);
            font-size: 2rem;
            cursor: pointer;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .modal-close:hover {
            background: var(--color-dark);
            transform: rotate(90deg);
        }
        
        .modal-content h2 {
            color: var(--color-text-light);
            margin-bottom: 1rem;
        }
        
        .modal-rank {
            display: inline-block;
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: 700;
            margin-bottom: 1rem;
            background: var(--color-secondary);
            color: var(--color-darkest);
        }
        
        .modal-details {
            margin: 1.5rem 0;
            color: var(--color-text-light);
        }
        
        .modal-price {
            font-size: 2rem;
            font-weight: 700;
            color: var(--color-secondary);
            text-align: center;
            margin: 1.5rem 0;
        }
        
        .modal-actions {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }
        
        .modal-actions .btn {
            flex: 1;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes scaleIn {
            from {
                transform: scale(0.8);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }
    `;
    
    if (!document.querySelector('#modal-styles')) {
        modalStyle.id = 'modal-styles';
        document.head.appendChild(modalStyle);
    }
    
    document.body.appendChild(modal);
    
    // Cerrar modal
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', () => closeModal(modal));
    overlay.addEventListener('click', () => closeModal(modal));
    
    // Botones de acción
    const buyBtn = modal.querySelector('.modal-buy');
    const contactBtn = modal.querySelector('.modal-contact');
    
    buyBtn.addEventListener('click', () => {
        showNotification('Redirigiendo al proceso de compra...', 'info');
        closeModal(modal);
    });
    
    contactBtn.addEventListener('click', () => {
        closeModal(modal);
        // Scroll a contacto
        const contactSection = document.querySelector('#contacto');
        if (contactSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = contactSection.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal(modal);
            document.removeEventListener('keydown', escHandler);
        }
    });
}

function closeModal(modal) {
    modal.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
        modal.remove();
    }, 300);
}

// ============================================
// EFECTOS DE SCROLL Y ANIMACIONES
// ============================================

// Animación al hacer scroll (reveal on scroll)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .account-card, .package-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// ACTUALIZAR NAVEGACIÓN ACTIVA AL SCROLL
// ============================================

const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - headerHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Agregar estilo para link activo
const navStyle = document.createElement('style');
navStyle.textContent = `
    .nav-link.active {
        color: var(--color-primary) !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(navStyle);

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Página de LoL Boost & Cuentas cargada correctamente');
    
    // Inicializar filtros
    if (accountCards.length > 0) {
        accountCards.forEach(card => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });
    }
});

