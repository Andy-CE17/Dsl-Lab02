const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const userForm = document.querySelector('#userForm');
const revealElements = document.querySelectorAll('.reveal');
const autoDismissAlerts = document.querySelectorAll('[data-auto-dismiss]');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealElements.forEach((element) => revealObserver.observe(element));
}

autoDismissAlerts.forEach((alert) => {
  window.setTimeout(() => {
    alert.classList.add('is-hiding');

    window.setTimeout(() => {
      alert.remove();
    }, 400);
  }, 3500);
});

function setFieldError(field, message) {
  const errorElement = document.querySelector(`[data-error-for="${field}"]`);

  if (errorElement) {
    errorElement.textContent = message;
  }
}

function validateUserForm(form) {
  let isValid = true;
  const nombreInput = form.querySelector('#nombre');
  const correoInput = form.querySelector('#correo');
  const edadInput = form.querySelector('#edad');
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const edad = edadInput.value ? Number(edadInput.value) : null;

  setFieldError('nombre', '');
  setFieldError('correo', '');
  setFieldError('edad', '');

  if (!nombreInput.value.trim()) {
    setFieldError('nombre', 'El nombre es obligatorio.');
    isValid = false;
  }

  if (!correoInput.value.trim()) {
    setFieldError('correo', 'El correo es obligatorio.');
    isValid = false;
  } else if (!correoRegex.test(correoInput.value.trim())) {
    setFieldError('correo', 'Ingresa un correo valido.');
    isValid = false;
  }

  if (edadInput.value && (!Number.isInteger(edad) || edad < 1 || edad > 120)) {
    setFieldError('edad', 'La edad debe estar entre 1 y 120.');
    isValid = false;
  }

  return isValid;
}

document.querySelectorAll('.delete-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    const confirmar = confirm('Estas seguro de eliminar este usuario?');

    if (!confirmar) {
      event.preventDefault();
    }
  });
});

if (userForm) {
  userForm.addEventListener('submit', (event) => {
    if (!validateUserForm(userForm)) {
      event.preventDefault();
    }
  });
}
