document.addEventListener('DOMContentLoaded', function () {
	// Set current year
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	// Mobile nav toggle
	const navToggle = document.getElementById('nav-toggle');
	const siteNav = document.querySelector('.site-nav');
	if (navToggle && siteNav) {
		navToggle.addEventListener('click', () => {
			siteNav.classList.toggle('open');
			navToggle.setAttribute('aria-expanded', siteNav.classList.contains('open'));
		});
	}

	// Smooth scrolling for in-page links (fallback for older browsers)
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			// ignore external and empty hrefs
			const href = this.getAttribute('href');
			if (!href || href === '#' || href.startsWith('mailto:') || href.startsWith('tel:')) return;
			e.preventDefault();
			const target = document.querySelector(href);
			if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			// close mobile nav after clicking
			if (siteNav && siteNav.classList.contains('open')) siteNav.classList.remove('open');
		});
	});

	// Simple contact form handler (simula envio)
	const form = document.getElementById('contact-form');
	const status = document.getElementById('form-status');
	if (form && status) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const data = new FormData(form);
			const name = data.get('name')?.toString().trim();
			const email = data.get('email')?.toString().trim();
			const message = data.get('message')?.toString().trim();
			if (!name || !email || !message) {
				status.textContent = 'Por favor, preencha todos os campos.';
				return;
			}
			status.textContent = 'Enviando...';
			// Simula envio assíncrono
			setTimeout(() => {
				status.textContent = 'Mensagem enviada! Obrigado pelo contato.';
				form.reset();
			}, 900);
		});
	}
});
