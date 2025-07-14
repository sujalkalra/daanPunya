document.addEventListener('DOMContentLoaded', function() {
  fetch('data/causes.json')
    .then(response => response.json())
    .then(causes => {
      const container = document.getElementById('causes-list');
      container.innerHTML = causes.map(cause => `
        <div class="bg-white dark:bg-background-dark rounded-2xl shadow-soft p-6 border border-border-light dark:border-border-dark transition-bg flex flex-col">
          <i data-lucide="${cause.icon}" class="w-10 h-10 text-primary-light dark:text-primary-dark mb-4"></i>
          <h3 class="font-semibold text-xl mb-2">${cause.title}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">${cause.description}</p>
          <a href="donate.html?amount=${cause.amount}" class="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-light dark:bg-primary-dark text-white font-semibold shadow-soft hover:scale-105 hover:bg-accent-light dark:hover:bg-accent-dark transition-all duration-200">
            <i data-lucide="credit-card" class="w-5 h-5"></i>
            Donate ₹${cause.amount}
          </a>
        </div>
      `).join('');
      lucide.createIcons();
    })
    .catch(() => {
      document.getElementById('causes-list').innerHTML = '<div class="col-span-3 text-center text-red-500">Failed to load causes.</div>';
    });
});