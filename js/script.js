document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.navigation ul').classList.toggle('show');
});
    
    mobileMenuBtn.addEventListener('click', function() {
        navigation.style.display = navigation.style.display === 'block' ? 'none' : 'block';
    });
    
    // Calculadora IMC
    const calcularBtn = document.getElementById('calcular-btn');
    const resultadoIMC = document.getElementById('resultado-imc');
    
    calcularBtn.addEventListener('click', function() {
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value) / 100; // Convertir cm a m
        
        if (isNaN(peso) || isNaN(altura) || altura === 0) {
            resultadoIMC.innerHTML = '<p>Por favor ingresa valores válidos</p>';
            return;
        }
        
        const imc = peso / (altura * altura);
        let mensaje = '';
        
        if (imc < 18.5) {
            mensaje = `Tu IMC es ${imc.toFixed(1)} (Bajo peso)`;
            resultadoIMC.style.color = '#2196F3';
        } else if (imc >= 18.5 && imc <= 24.9) {
            mensaje = `Tu IMC es ${imc.toFixed(1)} (Peso normal)`;
            resultadoIMC.style.color = '#4CAF50';
        } else if (imc >= 25 && imc <= 29.9) {
            mensaje = `Tu IMC es ${imc.toFixed(1)} (Sobrepeso)`;
            resultadoIMC.style.color = '#FFC107';
        } else {
            mensaje = `Tu IMC es ${imc.toFixed(1)} (Obesidad)`;
            resultadoIMC.style.color = '#F44336';
        }
        
        resultadoIMC.innerHTML = `<p>${mensaje}</p>`;
    });
    
    // Formulario de contacto
    const consultaForm = document.getElementById('consulta-form');
    
    consultaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const servicio = document.getElementById('servicio').value;
        
        // Aquí iría la lógica para enviar el formulario
        alert(`Gracias ${nombre}, hemos recibido tu solicitud para ${servicio}. Te contactaremos pronto al correo ${email}`);
        
        // Limpiar formulario
        consultaForm.reset();
    });
    
    // Smooth scrolling para enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                if (window.innerWidth <= 768) {
                    navigation.style.display = 'none';
                }
            }
        });
    });
    
    // Efecto de carga suave
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Efecto de scroll para header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.boxShadow = 'none';
        header.style.padding = '15px 0';
    }
});
function enviarWhatsApp(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const servicio = document.getElementById('servicio').value;
    const clinica = document.getElementById('clinica').value;
    const horario = document.getElementById('horario').value;

    const mensaje = `Hola Paty! Soy *${nombre}*. Me interesa el servicio de *${servicio}*. 
Preferiría la clínica de *${clinica}* en el horario de *${horario}*.`;

    const url = `https://wa.me/528441606727?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// Escuchar el formulario
document.getElementById('consulta-form')?.addEventListener('submit', enviarWhatsApp);
