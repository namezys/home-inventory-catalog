const searchInput = document.querySelector("#manual-search");
const cards = [...document.querySelectorAll(".appliance-card")];
const noResults = document.querySelector("#no-results");

function filterManuals() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  for (const card of cards) {
    const searchableText = `${card.dataset.search} ${card.textContent}`.toLocaleLowerCase();
    const isVisible = !query || searchableText.includes(query);
    card.hidden = !isVisible;
    visibleCount += Number(isVisible);
  }

  noResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterManuals);
