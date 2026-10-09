/* Rawat Clothing — vanilla JS storefront demo. No backend/payment gateway is connected. */
(function () {
  'use strict';
  const IMAGE = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
  const products = [
    {id:'RC101',name:'Everyday Cotton Tee',category:'Men',price:799,oldPrice:999,rating:4.8,reviews:124,tag:'BESTSELLER',featured:true,newest:15,color:'Ink black',sizes:['S','M','L','XL','XXL'],image:IMAGE('photo-1521572163474-6864f9cf17ab'),description:'The tee you reach for on repeat. Soft cotton, a relaxed everyday shape, and the right amount of structure.'},
    {id:'RC102',name:'Boxy Fit Tee',category:'Women',price:899,oldPrice:1099,rating:4.7,reviews:86,tag:'NEW IN',featured:true,newest:14,color:'Cloud white',sizes:['XS','S','M','L','XL'],image:IMAGE('photo-1529139574466-a303027c1d8b'),description:'An easy boxy silhouette with a clean neckline and an effortless drape. Wear solo or layer it up.'},
    {id:'RC103',name:'Everyday Hoodie',category:'Men',price:1499,oldPrice:1799,rating:4.9,reviews:97,tag:'FAVOURITE',featured:true,newest:12,color:'Oatmeal',sizes:['S','M','L','XL','XXL'],image:IMAGE('photo-1556821840-3a63f95609a7'),description:'Your throw-on-and-go layer. A soft hand-feel, roomy fit, and a shape that works through the week.'},
    {id:'RC104',name:'Straight-Leg Denim',category:'Women',price:1799,oldPrice:2199,rating:4.6,reviews:64,tag:'EASY FIT',featured:true,newest:11,color:'Classic blue',sizes:['26','28','30','32','34'],image:IMAGE('photo-1541099649105-f69ad21f3246'),description:'A straight-leg denim staple with a comfortable rise and the kind of wash that goes with everything.'},
    {id:'RC105',name:'Utility Overshirt',category:'Men',price:1899,oldPrice:2299,rating:4.8,reviews:51,tag:'JUST LANDED',featured:false,newest:13,color:'Olive',sizes:['S','M','L','XL'],image:IMAGE('photo-1591047139829-d91aecb6caea'),description:'A light layer with utility-inspired pockets, a relaxed fit, and easy versatility from morning to evening.'},
    {id:'RC106',name:'Everyday Cargo Pants',category:'Men',price:1599,oldPrice:1899,rating:4.5,reviews:42,tag:'POPULAR',featured:false,newest:10,color:'Moss green',sizes:['28','30','32','34','36'],image:IMAGE('photo-1517438476312-10d79c077509'),description:'Practical pockets meet an easy tapered fit. Your low-effort, high-rotation everyday trouser.'},
    {id:'RC107',name:'Court Side Sneakers',category:'Accessories',price:2299,oldPrice:2699,rating:4.7,reviews:108,tag:'BESTSELLER',featured:true,newest:9,color:'Off-white',sizes:['6','7','8','9','10','11'],image:IMAGE('photo-1542291026-7eec264c27ff'),description:'Minimal everyday sneakers with a clean profile, designed to pair naturally with your daily rotation.'},
    {id:'RC108',name:'Daily Canvas Tote',category:'Accessories',price:499,oldPrice:699,rating:4.6,reviews:73,tag:'UNDER ₹500',featured:false,newest:8,color:'Natural',sizes:['One size'],image:IMAGE('photo-1544816155-12df9643f363'),description:'A simple grab-and-go tote for everything the day collects. Lightweight, versatile, and easy to carry.'},
    {id:'RC109',name:'Classic Cotton Cap',category:'Accessories',price:599,oldPrice:799,rating:4.4,reviews:39,tag:'EASY ADD-ON',featured:false,newest:7,color:'Black',sizes:['One size'],image:IMAGE('photo-1588850561407-ed78c282e89b'),description:'A curved brim, adjustable closure, and a clean shape for the finishing touch.'},
    {id:'RC110',name:'Relaxed Poplin Shirt',category:'Women',price:1299,oldPrice:1599,rating:4.8,reviews:56,tag:'NEW IN',featured:false,newest:16,color:'Pale blue',sizes:['XS','S','M','L','XL'],image:IMAGE('photo-1598554747436-c9293d6a588f'),description:'An airy button-down that works tucked, open, or oversized. A dependable piece for in-between plans.'},
    {id:'RC111',name:'Ribbed Everyday Tank',category:'Women',price:699,oldPrice:899,rating:4.5,reviews:44,tag:'LAYERING HERO',featured:false,newest:5,color:'Stone',sizes:['XS','S','M','L'],image:IMAGE('photo-1503342217505-b0a15ec3261c'),description:'A close-but-comfortable ribbed tank for layering or wearing on its own in warmer weather.'},
    {id:'RC112',name:'Puffer Jacket',category:'Men',price:2999,oldPrice:3599,rating:4.8,reviews:27,tag:'COLD-WEATHER PICK',featured:false,newest:4,color:'Midnight',sizes:['S','M','L','XL','XXL'],image:IMAGE('photo-1544923246-77307dd654cb'),description:'A cosy outer layer with a clean silhouette. Built for chilly starts and late-night plans.'},
    {id:'RC113',name:'Mini Shoulder Bag',category:'Accessories',price:1399,oldPrice:1699,rating:4.6,reviews:33,tag:'JUST RIGHT',featured:false,newest:6,color:'Chocolate',sizes:['One size'],image:IMAGE('photo-1584917865442-de89df76afd3'),description:'A compact everyday bag for the essentials, with a simple profile that goes from casual to considered.'},
    {id:'RC114',name:'Wide-Leg Trousers',category:'Women',price:1699,oldPrice:1999,rating:4.7,reviews:48,tag:'EASY MOVEMENT',featured:false,newest:3,color:'Charcoal',sizes:['26','28','30','32','34'],image:IMAGE('photo-1509631179647-0177331693ae'),description:'A fluid, wide-leg shape for an easy, pulled-together look without trying too hard.'},
    {id:'RC115',name:'Zip-Through Sweatshirt',category:'Men',price:1599,oldPrice:1899,rating:4.6,reviews:31,tag:'WEEKEND MODE',featured:false,newest:2,color:'Charcoal',sizes:['S','M','L','XL','XXL'],image:IMAGE('photo-1556821840-3a63f95609a7'),description:'A versatile zip layer with an easy fit. Throw it over a tee for cooler mornings and casual evenings.'}
  ];
  const KEYS = {cart:'rawat_cart', wishlist:'rawat_wishlist', user:'rawat_current_user', users:'rawat_users', orders:'rawat_orders', products:'rawat_custom_products'};
  const customProducts = safeRead(KEYS.products, []);
  const allProducts = [...products, ...(Array.isArray(customProducts) ? customProducts : [])];
  function safeRead(key, fallback) { try { const value = JSON.parse(localStorage.getItem(key)); return value == null ? fallback : value; } catch (_) { return fallback; } }
  function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
  function money(value) { return new Intl.NumberFormat('en-IN', {style:'currency',currency:'INR',maximumFractionDigits:0}).format(Number(value)||0); }
  function currentUser() { return safeRead(KEYS.user, null); }
  function getCart() { return safeRead(KEYS.cart, []); }
  function getWishlist() { return safeRead(KEYS.wishlist, []); }
  function findProduct(id) { return allProducts.find(p => String(p.id) === String(id)); }
  function toast(message, type='success') {
    let region = document.querySelector('.toast-region');
    if (!region) { region = document.createElement('div'); region.className='toast-region'; region.setAttribute('aria-live','polite'); document.body.appendChild(region); }
    const item = document.createElement('div'); item.className = `toast toast-${type}`; item.innerHTML = `<span class="toast-mark">${type === 'error' ? '!' : '✓'}</span><span>${escapeHTML(message)}</span>`; region.appendChild(item);
    requestAnimationFrame(() => item.classList.add('toast-visible'));
    setTimeout(() => { item.classList.remove('toast-visible'); setTimeout(()=>item.remove(),300); }, 3200);
  }
  function escapeHTML(value) { return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function updateCartCount() {
    const count = getCart().reduce((sum, item) => sum + Number(item.qty || 0), 0);
    document.querySelectorAll('.cart-count').forEach(el => { el.textContent = count; el.classList.toggle('has-items', count > 0); });
  }
  function addToCart(id, qty=1, size='M') {
    const product = findProduct(id); if (!product) return toast('That product is not available right now.', 'error');
    const cart = getCart(); const key = `${id}:${size}`; const found = cart.find(x => x.key === key);
    if (found) found.qty += qty; else cart.push({key, id:String(id), qty, size});
    save(KEYS.cart, cart); updateCartCount(); toast(`${product.name} added to your bag.`);
  }
  function toggleWishlist(id) {
    const list = getWishlist(); const idx = list.indexOf(String(id)); const added = idx < 0;
    if (added) list.push(String(id)); else list.splice(idx,1);
    save(KEYS.wishlist, list); document.querySelectorAll(`[data-wishlist="${CSS.escape(String(id))}"]`).forEach(btn => { btn.classList.toggle('is-saved', added); btn.setAttribute('aria-pressed', String(added)); btn.setAttribute('aria-label', added ? 'Remove from wishlist' : 'Add to wishlist'); });
    toast(added ? 'Saved to your wishlist.' : 'Removed from your wishlist.');
    document.dispatchEvent(new CustomEvent('rawat:wishlist-updated'));
  }
  function renderProductCard(p) {
    const saved = getWishlist().includes(String(p.id));
    const discount = p.oldPrice > p.price ? Math.round((1 - p.price/p.oldPrice)*100) : 0;
    return `<article class="product-card"><div class="product-image-wrap"><a class="product-image-link" href="product.html?id=${encodeURIComponent(p.id)}" aria-label="View ${escapeHTML(p.name)}"><img src="${escapeHTML(p.image || 'assets/images/fallback-product.svg')}" alt="${escapeHTML(p.name)}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/fallback-product.svg'"></a>${p.tag ? `<span class="product-tag">${escapeHTML(p.tag)}</span>` : ''}${discount ? `<span class="discount-tag">-${discount}%</span>` : ''}<button class="wishlist-button ${saved?'is-saved':''}" data-wishlist="${escapeHTML(p.id)}" aria-label="${saved?'Remove from wishlist':'Add to wishlist'}" aria-pressed="${saved}" title="${saved?'Saved':'Save for later'}">${saved?'♥':'♡'}</button><button class="quick-add" data-add-cart="${escapeHTML(p.id)}" data-size="${escapeHTML((p.sizes||['M'])[0])}">Quick add <span>＋</span></button></div><div class="product-info"><div class="product-meta"><span>${escapeHTML(p.category)}</span><span class="rating">★ ${Number(p.rating||4.5).toFixed(1)} <small>(${Number(p.reviews||0)})</small></span></div><a href="product.html?id=${encodeURIComponent(p.id)}" class="product-name">${escapeHTML(p.name)}</a><div class="product-price"><strong>${money(p.price)}</strong>${p.oldPrice > p.price ? `<del>${money(p.oldPrice)}</del>` : ''}</div></div></article>`;
  }
  function renderProducts(targetId, options={}) {
    const target = document.getElementById(targetId); if (!target) return;
    let list = [...allProducts];
    if (options.featured) list = list.filter(p=>p.featured).slice(0, options.limit || 4);
    else if (options.ids) list = list.filter(p => options.ids.includes(String(p.id)));
    else if (options.limit) list = list.slice(0, options.limit);
    target.innerHTML = list.length ? list.map(renderProductCard).join('') : '<div class="empty-inline">Nothing to show right now.</div>';
  }
  function renderOrderRows(orders, compact=false) {
    if (!orders.length) return '<div class="empty-inline">No orders yet. Your next favourite is out there. <a href="shop.html">Shop the collection ↗</a></div>';
    return `<div class="orders-list">${orders.map(order=>`<article class="order-row"><div class="order-id"><span>ORDER</span><strong>${escapeHTML(order.id)}</strong><small>${new Date(order.createdAt||Date.now()).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}</small></div><div class="order-items-mini"><strong>${escapeHTML((order.items||[]).map(i=>i.name).slice(0,2).join(', '))}${(order.items||[]).length>2?' + more':''}</strong><small>${(order.items||[]).reduce((n,i)=>n+Number(i.qty||1),0)} item(s)</small></div><div class="order-total"><strong>${money(order.total)}</strong><span class="status-pill status-${String(order.status||'Processing').toLowerCase().replace(/\s/g,'-')}">${escapeHTML(order.status||'Processing')}</span></div></article>`).join('')}</div>`;
  }
  function initShared() {
    document.querySelectorAll('.menu-toggle').forEach(btn => btn.addEventListener('click', () => { const header=btn.closest('.site-header'); const expanded=btn.getAttribute('aria-expanded')==='true'; btn.setAttribute('aria-expanded',String(!expanded)); header.classList.toggle('nav-open',!expanded); }));
    document.querySelectorAll('.announce-close').forEach(btn=>btn.addEventListener('click',()=>{const bar=btn.closest('.announcement-bar'); if(bar)bar.remove();}));
    document.querySelectorAll('#newsletter-form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const email=form.querySelector('input[type=email]').value.trim();const subs=safeRead('rawat_newsletter',[]);if(!subs.includes(email)){subs.push(email);save('rawat_newsletter',subs);}form.reset();toast('You are on the list — welcome to the club!');}));
    document.querySelectorAll('[data-add-cart]').forEach(btn=>btn.addEventListener('click', e=>{e.preventDefault();e.stopPropagation();addToCart(btn.dataset.addCart,1,btn.dataset.size||'M');}));
    document.addEventListener('click', e=>{const btn=e.target.closest('[data-wishlist]');if(btn){e.preventDefault();toggleWishlist(btn.dataset.wishlist);}});
    updateCartCount(); const year=document.getElementById('year'); if(year)year.textContent=new Date().getFullYear();
  }
  window.Rawat = {products:allProducts, keys:KEYS, safeRead, save, money, currentUser, getCart, getWishlist, findProduct, addToCart, toggleWishlist, updateCartCount, renderProducts, renderProductCard, renderOrderRows, toast, escapeHTML};
  document.addEventListener('DOMContentLoaded', initShared);
})();
