/* script.js — menu with prices added */
function onReady(fn){ document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }

onReady(() => {
  const app = document.getElementById('menuApp');
  if(!app) return; // Only run on menu.html

  // Full menu data (with price numbers)
  const menu = [
    /* BREAKFAST - VEG */
    {name:"Idli Sambar", type:"veg", meal:"breakfast", price:50,
      desc:"Soft steamed idlis served with tangy lentil sambar & coconut chutney.",
      img:"https://i.pinimg.com/1200x/d5/cd/da/d5cdda22f2061de591b048b67bbf0e67.jpg"},
    {name:"Masala Dosa", type:"veg", meal:"breakfast", price:80,
      desc:"Crispy rice-lentil crepe stuffed with spiced potato masala.",
      img:"https://i.pinimg.com/736x/59/08/5e/59085e973407bfea71e7515194cabcb3.jpg"},
    {name:"Puri Bhaji", type:"veg", meal:"breakfast", price:70,
      desc:"Fluffy puris with mildly spiced aloo bhaji.",
      img:"https://i.pinimg.com/1200x/88/be/46/88be46ff517da27aa4075e4a508c097b.jpg"},
    {name:"Pesarattu", type:"veg", meal:"breakfast", price:75,
      desc:"Andhra-style green gram pancake — hearty and satisfying.",
      img:"https://i.pinimg.com/736x/8f/17/62/8f17620e28f95f06b8fba3db876dfb2d.jpg"},
    {name:"Upma", type:"veg", meal:"breakfast", price:60,
      desc:"Savory semolina upma tempered with curry leaves & veggies.",
      img:"https://i.pinimg.com/736x/40/ed/fd/40edfd594ac441a0c34243f27b20c8f4.jpg"},

    /* BREAKFAST - NON-VEG */
    {name:"Masala Omelette", type:"nonveg", meal:"breakfast", price:70,
      desc:"Fluffy eggs with onions, chilies, tomatoes & fresh coriander.",
      img:"https://i.pinimg.com/1200x/a7/4d/08/a74d080def9c282fcefc4904285997ad.jpg"},
    {name:"Egg Bhurji", type:"nonveg", meal:"breakfast", price:65,
      desc:"Street-style spicy scrambled eggs with pav (optional).",
      img:"https://i.pinimg.com/736x/4b/56/9e/4b569ed0f98dd264c807072e47c2aabf.jpg"},
    {name:"Egg Roll", type:"nonveg", meal:"breakfast", price:80,
      desc:"Flaky paratha wrapped around masala eggs & crunchy veggies.",
      img:"https://i.pinimg.com/1200x/c1/8f/ae/c18faecf99723fa3358bbe8758655b52.jpg"},
    {name:"Shakshuka", type:"nonveg", meal:"breakfast", price:120,
      desc:"Eggs poached in spiced tomato-pepper sauce — Middle-Eastern classic.",
      img:"https://i.pinimg.com/736x/57/98/9f/57989f2a2e186e38bf93429aa395120c.jpg"},

    /* LUNCH - VEG */
    {name:"Veg Thali", type:"veg", meal:"lunch", price:220,
      desc:"Complete vegetarian platter with curries, dal, rice, roti & salad.",
      img:"https://i.pinimg.com/736x/aa/7a/04/aa7a04080238df471602177b5904d3a1.jpg"},
    {name:"Paneer Butter Masala + Naan", type:"veg", meal:"lunch", price:220,
      desc:"Creamy tomato-based paneer curry paired with soft butter naan.",
      img:"https://i.pinimg.com/1200x/4b/44/09/4b44095254370367cca951fadc156875.jpg"},
    {name:"Veg Biryani + Raita", type:"veg", meal:"lunch", price:180,
      desc:"Aromatic basmati rice cooked with mixed veggies & whole spices.",
      img:"https://i.pinimg.com/1200x/72/e1/0b/72e10b76ecbfb101cc2b5491f02ed8be.jpg"},
    {name:"Palak Paneer + Jeera Rice", type:"veg", meal:"lunch", price:200,
      desc:"Wholesome spinach gravy with paneer cubes & cumin-flavored rice.",
      img:"https://i.pinimg.com/1200x/24/4f/d8/244fd8a5e367e7028dc7ab8ec0d139bc.jpg"},
    {name:"Dal Makhani + Naan", type:"veg", meal:"lunch", price:170,
      desc:"Slow-cooked black lentils finished with butter & cream.",
      img:"https://i.pinimg.com/736x/8e/5c/97/8e5c9702b53515a7bb5a75ab1885927c.jpg"},

    /* LUNCH - NON-VEG */
    {name:"Chicken/Mutton Thali", type:"nonveg", meal:"lunch", price:300,
      desc:"Royal platter with your choice of chicken or mutton curry & sides.",
      img:"https://i.pinimg.com/736x/64/b1/52/64b152db9ae61c6cd1968e33c1cbaf60.jpg"},
    {name:"Chicken Biryani", type:"nonveg", meal:"lunch", price:240,
      desc:"Hyderabadi-style layered biryani with tender chicken.",
      img:"https://i.pinimg.com/736x/2b/64/e1/2b64e15ac11687bb3074b9f7abc87edd.jpg"},
    {name:"Mutton Biryani", type:"nonveg", meal:"lunch", price:320,
      desc:"Fragrant slow-cooked biryani with succulent mutton.",
      img:"https://i.pinimg.com/736x/de/14/5d/de145d32daaa2892b7a1e372c48c8399.jpg"},
    {name:"Fish Curry + Steamed Rice", type:"nonveg", meal:"lunch", price:250,
      desc:"Coastal-style fish curry with tamarind & coconut notes.",
      img:"https://i.pinimg.com/736x/0a/ad/41/0aad41c0bf5348eedad2cd453ee58f7d.jpg"},
    {name:"Chettinad Chicken + Parotta", type:"nonveg", meal:"lunch", price:260,
      desc:"Fiery Chettinad masala curry with flaky Malabar parotta.",
      img:"https://i.pinimg.com/1200x/db/4f/33/db4f33d659152c199934cb53de0f3089.jpg"},

    /* DINNER - VEG */
    {name:"Dal Tadka + Jeera Rice + Roti", type:"veg", meal:"dinner", price:150,
      desc:"Tempered yellow dal, cumin rice & soft rotis — comfort on a plate.",
      img:"https://i.pinimg.com/736x/71/73/ba/7173baef5f4e9e8cb6077076d4e84284.jpg"},
    {name:"Mushroom Masala + Parotta", type:"veg", meal:"dinner", price:200,
      desc:"Earthy mushrooms in rich gravy with layered parotta.",
      img:"https://i.pinimg.com/1200x/cc/df/3c/ccdf3cf9fba8495489bec5febbeee6bc.jpg"},
    {name:"Palak Paneer + Phulka", type:"veg", meal:"dinner", price:190,
      desc:"Light, nutritious spinach & paneer with fluffy phulkas.",
      img:"https://i.pinimg.com/1200x/5d/92/53/5d925320b9ff95ee74ac7fd25a8e12ea.jpg"},
    {name:"Veg Fried Rice + Manchurian", type:"veg", meal:"dinner", price:180,
      desc:"Indo-Chinese duo: wok-tossed rice with crispy Manchurian.",
      img:"https://i.pinimg.com/1200x/b9/ee/da/b9eeda7e512e13473b843f614be3f2fa.jpg"},
    {name:"Kadhi Pakora + Steamed Rice", type:"veg", meal:"dinner", price:160,
      desc:"Tangy yogurt-gram flour curry with fritters, served with rice.",
      img:"https://i.pinimg.com/736x/39/64/db/3964dbacdf3f9b5a3f36fe07644782d5.jpg"},

    /* DINNER - NON-VEG */
    {name:"Prawns Biryani", type:"nonveg", meal:"dinner", price:320,
      desc:"Fragrant biryani cooked with juicy prawns & coastal spices.",
      img:"https://i.pinimg.com/1200x/82/95/2d/82952dfb74c36f85ae989f15e4f790dd.jpg"},
    {name:"Butter Chicken + Garlic Naan", type:"nonveg", meal:"dinner", price:260,
      desc:"Silky tomato-butter gravy with tender chicken & garlicky naan.",
      img:"https://i.pinimg.com/1200x/05/d2/c4/05d2c4771775d6ae6d141107d2ad2255.jpg"},
    {name:"Chicken Curry + Rice/Chapati", type:"nonveg", meal:"dinner", price:200,
      desc:"Homestyle chicken curry served with rice or chapati.",
      img:"https://i.pinimg.com/1200x/8e/26/60/8e2660ac7ace89af82824d7add4ec31c.jpg"},
    {name:"Mutton Rogan Josh + Tandoori Roti", type:"nonveg", meal:"dinner", price:350,
      desc:"Kashmiri classic — bold spices, melt-in-mouth mutton.",
      img:"https://i.pinimg.com/736x/c9/0e/3a/c90e3affa30791023feef4d658c98d79.jpg"},
    {name:"Grilled Fish / Chicken Steak + Salad", type:"nonveg", meal:"dinner", price:280,
      desc:"Lean & clean: marinated grill with fresh salad (lighter option).",
      img:"https://i.pinimg.com/1200x/1c/bc/10/1cbc1099985eb0f2792570c55d1ac4cc.jpg"},

    /* DESSERTS */
    {name:"Gulab Jamun", type:"veg", meal:"dessert", price:80,
      desc:"Soft milk-solid dumplings soaked in warm rose cardamom syrup.",
      img:"https://i.pinimg.com/736x/97/b0/8b/97b08bd68f31ce7f9ef58caea9709255.jpg"},
    {name:"Rasmalai", type:"veg", meal:"dessert", price:100,
      desc:"Cottage-cheese patties in saffron-pistachio rabri.",
      img:"https://i.pinimg.com/736x/8c/d9/0b/8cd90bf9409d21492701d4cbc03a87e8.jpg"},
    {name:"Chocolate Lava Cake", type:"veg", meal:"dessert", price:160,
      desc:"Warm, gooey center — pure chocolate bliss.",
      img:"https://i.pinimg.com/1200x/17/51/a1/1751a1eee320a9562d982c760246b1fa.jpg"},
    {name:"Ice Cream Sundae", type:"veg", meal:"dessert", price:120,
      desc:"Scoops, nuts & syrup — the classic sweet ending.",
      img:"https://i.pinimg.com/1200x/9e/df/63/9edf63395b618f8a8e9fe70b6355caaa.jpg"}
  ];

  /* ---- Elements ---- */
  const grid = document.getElementById('menuGrid');
  const typeChips = Array.from(document.querySelectorAll('.chip'));
  const mealTabs  = Array.from(document.querySelectorAll('.tab'));
  const searchInp = document.getElementById('searchInput');

  let activeType = 'all';
  let activeMeal = autoMealByTime();   // auto-select based on local time
  let query = '';

  // Mark default active tab
  mealTabs.forEach(t => t.classList.toggle('active', t.dataset.meal === activeMeal));
  render();

  /* ---- Listeners ---- */
  typeChips.forEach(ch => ch.addEventListener('click', () => {
    typeChips.forEach(c => c.classList.remove('active'));
    ch.classList.add('active');
    activeType = ch.dataset.type; render();
  }));

  mealTabs.forEach(tab => tab.addEventListener('click', () => {
    mealTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeMeal = tab.dataset.meal; render();
  }));

  if (searchInp) {
    searchInp.addEventListener('input', e => { query = e.target.value.toLowerCase().trim(); render(); });
  }

  /* ---- Render ---- */
  function render(){
    const items = menu.filter(i =>
      (activeType === 'all' || i.type === activeType) &&
      (activeMeal ? i.meal === activeMeal : true) &&
      (query ? (i.name.toLowerCase().includes(query) || i.desc.toLowerCase().includes(query)) : true)
    );
    grid.innerHTML = items.map(cardHTML).join('') || emptyState();
  }

  function formatPrice(n){
    // show Indian-style grouping, e.g. 1,200
    return typeof n === 'number' ? '₹' + new Intl.NumberFormat('en-IN').format(n) : (n ? n : '');
  }

  function cardHTML(i){
    const vegDot = i.type === 'veg' ? '<span class="dot dot--veg"></span>Veg' : '<span class="dot dot--nonveg"></span>Non-Veg';
    const mealBadge = i.meal.charAt(0).toUpperCase() + i.meal.slice(1);
    return `
      <article class="card">
        <img class="card__media" src="${i.img.trim()}" alt="${i.name}">
        <div class="card__body">
          <h3 class="card__title">${i.name} <span class="card__price">${formatPrice(i.price)}</span></h3>
          <p class="card__desc">${i.desc}</p>
          <div class="badges">
            <span class="badge">${vegDot}</span>
            <span class="badge">${mealBadge}</span>
          </div>
        </div>
      </article>
    `;
  }

  function emptyState(){
    return `<div style="grid-column:1/-1; text-align:center; padding:30px; color:#777;">
      No dishes match your filters. Try changing Veg/Non-Veg, meal, or search.
    </div>`;
  }

  /* ---- Auto pick meal by time ---- */
  function autoMealByTime(){
    const h = new Date().getHours();
    if (h >= 5 && h < 11) return 'breakfast';
    if (h >= 11 && h < 17) return 'lunch';
    return 'dinner';
  }

  // initial render
  render();
});
document.getElementById("orderMessageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const order = document.getElementById("order").value.trim();
  const address = document.getElementById("address").value.trim();
  const message = document.getElementById("message").value.trim();
  const payment = document.querySelector("input[name='payment']:checked").value;

  if(name && phone && order && address && payment){
    let summary = `
    ✅ Order Placed!
    \nName: ${name}
    \nPhone: ${phone}
    \nOrder: ${order}
    \nAddress: ${address}
    \nMessage: ${message || "None"}
    \nPayment Method: ${payment}
    `;

    document.getElementById("formStatus").innerText = summary;
    document.getElementById("orderMessageForm").reset();
  } else {
    document.getElementById("formStatus").innerText = "❌ Please fill all required fields.";
    document.getElementById("formStatus").style.color = "red";
  }
});
