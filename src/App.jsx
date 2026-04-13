import { useState, useEffect, useRef } from "react";
import logo from "./assets/velas_richard.png";

/* ─── BRAND TOKENS ─── */
const C = {
  yellow: "#FEC329",
  yellowLight: "#FED45A",
  yellowPale: "#FFF8E1",
  yellowDark: "#E6AD1A",
  red: "#420C0A",
  redLight: "#6B1512",
  white: "#FFFFFF",
  ink: "#1A0A09",
  muted: "#7A5C1E",
  border: "rgba(66,12,10,.15)",
  borderStrong: "rgba(66,12,10,.25)",
};

/* ─── SVG ICONS ─── */
const Icon = {
  Menu: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="3" y1="7" x2="19" y2="7" /><line x1="3" y1="12" x2="19" y2="12" /><line x1="3" y1="17" x2="19" y2="17" />
    </svg>
  ),
  Close: () => (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="5" y1="5" x2="17" y2="17" /><line x1="17" y1="5" x2="5" y2="17" />
    </svg>
  ),
  Whatsapp: ({ size = 20 }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  Instagram: ({ size = 20 }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  Facebook: ({ size = 20 }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  Star: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={C.red} stroke="none">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  ),
  Medal: ({ size = 26 }) => (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  Lightning: ({ size = 26 }) => (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Shield: ({ size = 26 }) => (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Package: ({ size = 26 }) => (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Sparkles: ({ size = 26 }) => (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
      <path d="M5 3l.75 2.25L8 6l-2.25.75L5 9l-.75-2.25L2 6l2.25-.75z" />
      <path d="M19 15l.75 2.25L22 18l-2.25.75L19 21l-.75-2.25L16 18l2.25-.75z" />
    </svg>
  ),
  Phone: ({ size = 16 }) => (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.22 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  ArrowRight: ({ size = 15 }) => (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Check: ({ size = 13 }) => (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Cart: ({ size = 22 }) => (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  ),
  Plus: ({ size = 16 }) => (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Minus: ({ size = 16 }) => (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Trash: ({ size = 15 }) => (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
      <path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4h6v2" />
    </svg>
  ),
  ImagePlaceholder: () => (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  ),
};

/* ─── DATA ─── */
const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Tienda", href: "#tienda" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICES = [
  { Ico: Icon.Medal, title: "Profesionales en nuestro trabajo", desc: "Trabajamos con dedicación y amor para crear velas únicas y especiales." },
  { Ico: Icon.Lightning, title: "Entrega Rápida", desc: "Producción ágil y entregas puntuales. Coordinamos los tiempos para que todo salga perfecto." },
  { Ico: Icon.Shield, title: "Precios Transparentes", desc: "Presupuesto claro desde el primer mensaje. Sin costos ocultos, sin sorpresas. Tu confianza es nuestra prioridad." },
];

/* ─── SHOP CATALOG ─── */
const SHOP_ITEMS = [
  { id: 1, name: "Nombre del producto", price: 0, tag: "Tipo de vela", desc: "Descripción del producto.", cat: "Nombre de la categoria" },
  { id: 2, name: "Nombre del producto", price: 0, tag: "Tipo de vela", desc: "Descripción del producto.", cat: "Nombre de la categoria" },
  { id: 3, name: "Nombre del producto", price: 0, tag: "Tipo de vela", desc: "Descripción del producto.", cat: "Nombre de la categoria" },
  { id: 4, name: "Nombre del producto", price: 0, tag: "Tipo de vela", desc: "Descripción del producto.", cat: "Nombre de la categoria" },
  { id: 5, name: "Nombre del producto", price: 0, tag: "Tipo de vela", desc: "Descripción del producto.", cat: "Nombre de la categoria" },
  { id: 6, name: "Nombre del producto", price: 0, tag: "Tipo de vela", desc: "Descripción del producto.", cat: "Nombre de la categoria" },
  { id: 7, name: "Nombre del producto", price: 0, tag: "Tipo de vela", desc: "Descripción del producto.", cat: "Nombre de la categoria" },
  { id: 8, name: "Nombre del producto", price: 0, tag: "Tipo de vela", desc: "Descripción del producto.", cat: "Nombre de la categoria" },
  { id: 9, name: "Nombre del producto", price: 0, tag: "Tipo de vela", desc: "Descripción del producto.", cat: "Nombre de la categoria" },
  { id: 10, name: "Nombre del producto", price: 0, tag: "Tipo de vela", desc: "Descripción del producto.", cat: "Nombre de la categoria" },
  { id: 11, name: "Nombre del producto", price: 0, tag: "Tipo de vela", desc: "Descripción del producto.", cat: "Bengalas" },
  { id: 12, name: "Nombre del producto", price: 0, tag: "Tipo de vela", desc: "Descripción del producto.", cat: "Bengalas" },
];

const SHOP_CATS = ["Todos", "Bengalas", "Nombre de la categoria", "Nombre de la categoria", "Nombre de la categoria"];

const TESTIMONIALS = [
  { name: "Nombre Apellido", location: "Ciudad", stars: 5, initial: "M", text: "lorem ipsum dolor sit amet consectetur adipiscing elit" },
  { name: "Nombre Apellido", location: "Ciudad", stars: 5, initial: "C", text: "lorem ipsum dolor sit amet consectetur adipiscing elit" },
];

const FEATURES = [
  "Producción 100% artesanal",
  "Envíos a todo el país",
  "Diseños personalizables",
  "Calidad garantizada",
  "Atención personalizada",
  "Packaging de regalo incluido",
];

const fmt = (n) => n === 0 ? "Consultar precio" : `$${n.toLocaleString("es-AR")}`;

/* ─── HOOKS ─── */
function useReveal() {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, v];
}

function Reveal({ children, delay = 0, style = {}, className = "" }) {
  const [ref, v] = useReveal();
  return (
    <div ref={ref} className={className} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(28px)", transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

function SectionLabel({ children, onYellow = true }) {
  const color = onYellow ? C.red : C.yellow;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
      <div style={{ width: 22, height: 2.5, background: color, borderRadius: 2 }} />
      <span style={{ fontFamily: "var(--ff-body)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color, fontWeight: 700 }}>{children}</span>
      <div style={{ width: 22, height: 2.5, background: color, borderRadius: 2 }} />
    </div>
  );
}

function Stars({ n }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: n }).map((_, i) => <Icon.Star key={i} size={16} />)}
    </div>
  );
}

/* ─── PRODUCT IMAGE PLACEHOLDER ─── */
function ImgPlaceholder({ height = 160 }) {
  return (
    <div style={{
      height,
      background: C.yellowPale,
      border: `1px solid ${C.border}`,
      borderRadius: 10,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      color: C.muted,
    }}>
      <Icon.ImagePlaceholder />
      <span style={{ fontFamily: "var(--ff-body)", fontSize: 10.5, letterSpacing: ".06em" }}>
        Imagen del producto
      </span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════ */
export default function VelasRichard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cart, setCart] = useState([]);      // [{id, name, price, qty}]
  const [cartOpen, setCartOpen] = useState(false);
  const [shopCat, setShopCat] = useState("Todos");
  const [addedId, setAddedId] = useState(null);

  const WA_NUM = "5491122944579";
  const WA = `https://wa.me/${WA_NUM}`;
  const CATALOG = "https://wa.me/c/107507410309202";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ── Cart helpers ── */
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const addToCart = (item) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === item.id);
      return ex
        ? prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...item, qty: 1 }];
    });
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  const updateQty = (id, delta) =>
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i).filter(i => i.qty > 0));

  const removeItem = (id) => setCart(prev => prev.filter(i => i.id !== id));

  /* ── Checkout → WhatsApp ── */
  const checkout = () => {
    if (!cart.length) return;
    const lines = cart.map(i => `• ${i.name} x${i.qty}${i.price > 0 ? ` = $${(i.price * i.qty).toLocaleString("es-AR")}` : ""}`).join("\n");
    const total = cartTotal > 0 ? `\n\n*Total estimado: $${cartTotal.toLocaleString("es-AR")}*` : "";
    const msg = `¡Hola! Quiero realizar el siguiente pedido:\n\n${lines}${total}\n\n¿Podría confirmar disponibilidad y coordinar el envío? ¡Muchas gracias!`;
    window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const filtered = shopCat === "Todos" ? SHOP_ITEMS : SHOP_ITEMS.filter(i => i.cat === shopCat);

  return (
    <div style={{ fontFamily: "var(--ff-body)", background: C.yellow, color: C.ink, overflowX: "hidden" }}>

      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        :root {
          --ff-display: 'Cormorant Garamond', Georgia, serif;
          --ff-body: 'DM Sans', system-ui, sans-serif;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        h1, h2, h3 { font-family: var(--ff-display); }
        h1 { font-size: clamp(40px,5.5vw,70px); line-height: 1.06; font-weight: 700; }
        h2 { font-size: clamp(30px,3.8vw,50px); line-height: 1.1; font-weight: 700; }
        h3 { font-size: 21px; font-weight: 600; line-height: 1.3; }
        p  { font-family: var(--ff-body); line-height: 1.74; font-size: 15px; }

        .nav-a { font-family: var(--ff-body); font-size: 13.5px; font-weight: 600; letter-spacing: .04em; color: ${C.red}; text-decoration: none; padding: 4px 0; position: relative; transition: opacity .2s; }
        .nav-a::after { content: ''; position: absolute; bottom: -1px; left: 0; width: 0; height: 2px; background: ${C.red}; border-radius: 2px; transition: width .25s; }
        .nav-a:hover { opacity: .75; }
        .nav-a:hover::after { width: 100%; }

        .btn-red { display: inline-flex; align-items: center; gap: 8px; padding: 13px 28px; border-radius: 8px; background: ${C.red}; color: ${C.yellow}; font-family: var(--ff-body); font-weight: 700; font-size: 14px; text-decoration: none; border: none; cursor: pointer; letter-spacing: .03em; transition: background .2s, transform .18s, box-shadow .18s; }
        .btn-red:hover { background: ${C.redLight}; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(66,12,10,.3); }

        .btn-outline-red { display: inline-flex; align-items: center; gap: 8px; padding: 12px 28px; border-radius: 8px; background: transparent; color: ${C.red}; font-family: var(--ff-body); font-weight: 700; font-size: 14px; text-decoration: none; border: 2px solid ${C.red}; cursor: pointer; letter-spacing: .03em; transition: background .2s, color .2s, transform .18s; }
        .btn-outline-red:hover { background: ${C.red}; color: ${C.yellow}; transform: translateY(-2px); }

        .btn-wa { display: inline-flex; align-items: center; gap: 8px; padding: 11px 22px; border-radius: 8px; background: #25D366; color: #fff; font-family: var(--ff-body); font-weight: 600; font-size: 13.5px; text-decoration: none; border: none; letter-spacing: .02em; transition: background .2s, transform .18s, box-shadow .18s; }
        .btn-wa:hover { background: #1aab56; transform: translateY(-1px); box-shadow: 0 6px 18px rgba(37,211,102,.3); }

        .card { background: ${C.white}; border: 1.5px solid ${C.border}; border-radius: 14px; transition: transform .25s, box-shadow .25s, border-color .25s; }
        .card:hover { transform: translateY(-5px); box-shadow: 0 18px 44px rgba(66,12,10,.14); border-color: ${C.red}; }

        .shop-card { background: ${C.white}; border: 1.5px solid ${C.border}; border-radius: 14px; display: flex; flex-direction: column; transition: transform .22s, box-shadow .22s, border-color .22s; }
        .shop-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(66,12,10,.13); border-color: ${C.red}; }

        .tag { display: inline-block; font-family: var(--ff-body); font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; padding: 4px 10px; border-radius: 99px; background: ${C.yellow}; color: ${C.red}; border: 1.5px solid ${C.red}; }

        .icon-box { width: 52px; height: 52px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: ${C.yellow}; color: ${C.red}; border: 1.5px solid ${C.borderStrong}; flex-shrink: 0; }

        .cat-pill { font-family: var(--ff-body); font-size: 12.5px; font-weight: 600; padding: 8px 18px; border-radius: 99px; border: 1.5px solid ${C.red}; background: transparent; color: ${C.red}; cursor: pointer; transition: background .18s, color .18s, transform .15s; white-space: nowrap; }
        .cat-pill:hover { transform: translateY(-1px); }
        .cat-pill.active { background: ${C.red}; color: ${C.yellow}; }

        .add-btn { display: flex; align-items: center; justify-content: center; gap: 7px; width: 100%; padding: 11px; border-radius: 8px; background: ${C.yellow}; color: ${C.red}; font-family: var(--ff-body); font-weight: 700; font-size: 13px; border: 2px solid ${C.red}; cursor: pointer; letter-spacing: .03em; transition: background .18s, color .18s, transform .15s; }
        .add-btn:hover, .add-btn.added { background: ${C.red}; color: ${C.yellow}; }

        .qty-btn { width: 28px; height: 28px; border-radius: 6px; border: 1.5px solid ${C.border}; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer; color: ${C.red}; transition: background .15s; }
        .qty-btn:hover { background: ${C.yellow}; }

        .marquee { display: flex; animation: tick 24s linear infinite; width: max-content; }
        @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        .wa-fab { position: fixed; bottom: 28px; right: 28px; z-index: 199; width: 56px; height: 56px; border-radius: 50%; background: #25D366; color: #fff; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(37,211,102,.45); text-decoration: none; transition: transform .2s, box-shadow .2s; }
        .wa-fab:hover { transform: scale(1.1); box-shadow: 0 8px 28px rgba(37,211,102,.55); }
        .wa-fab::before { content: ''; position: absolute; inset: 0; border-radius: 50%; background: #25D366; animation: ring 2.8s ease-out infinite; opacity: 0; }
        @keyframes ring { 0% { transform: scale(1); opacity: .6; } 100% { transform: scale(1.8); opacity: 0; } }

        @media (max-width: 768px) {
          .hide-mob { display: none !important; }
          .show-mob { display: flex !important; }
          .g2 { grid-template-columns: 1fr !important; }
          .g3 { grid-template-columns: 1fr !important; }
          .g4 { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (min-width: 769px) { .show-mob { display: none !important; } }
        @media (max-width: 920px) and (min-width: 580px) {
          .g3 { grid-template-columns: repeat(2,1fr) !important; }
          .g4 { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>

      {/* ══ CART DRAWER ══ */}
      {cartOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setCartOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(26,6,3,.45)", zIndex: 200, backdropFilter: "blur(3px)" }}
          />

          {/* Drawer */}
          <div style={{ position: "fixed", top: 0, right: 0, height: "100%", width: "min(420px,100vw)", background: C.white, zIndex: 201, display: "flex", flexDirection: "column", boxShadow: "-8px 0 40px rgba(66,12,10,.18)" }}>

            {/* Drawer header */}
            <div style={{ padding: "20px 24px", background: C.red, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Icon.Cart size={22} />
                <span style={{ fontFamily: "var(--ff-display)", fontSize: 22, fontWeight: 700, color: C.yellow }}>Tu carrito</span>
                {cartCount > 0 && (
                  <span style={{ background: C.yellow, color: C.red, borderRadius: 99, padding: "2px 9px", fontFamily: "var(--ff-body)", fontSize: 12, fontWeight: 700 }}>
                    {cartCount}
                  </span>
                )}
              </div>
              <button
                onClick={() => setCartOpen(false)}
                style={{ background: "rgba(254,195,41,.15)", border: "none", borderRadius: 8, padding: 8, cursor: "pointer", color: C.yellow, display: "flex" }}
              >
                <Icon.Close />
              </button>
            </div>

            {/* Drawer items */}
            <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
              {cart.length === 0 ? (
                <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: "60px 0" }}>
                  <div style={{ width: 64, height: 64, borderRadius: 16, background: C.yellowPale, display: "flex", alignItems: "center", justifyContent: "center", border: `1.5px solid ${C.border}`, color: C.muted }}>
                    <Icon.Cart size={28} />
                  </div>
                  <p style={{ color: C.muted, textAlign: "center", fontSize: 15 }}>
                    Tu carrito está vacío.<br />¡Agregá productos de la tienda!
                  </p>
                  <button
                    onClick={() => { setCartOpen(false); document.querySelector("#tienda")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="btn-red"
                    style={{ fontSize: 13, padding: "10px 22px" }}
                  >
                    Ver tienda
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: C.yellowPale, borderRadius: 10, padding: "12px 14px", border: `1px solid ${C.border}` }}>
                    {/* Thumbnail placeholder */}
                    <div style={{ width: 52, height: 52, borderRadius: 8, background: C.border, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: C.muted }}>
                      <Icon.ImagePlaceholder />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "var(--ff-body)", fontSize: 13.5, fontWeight: 600, color: C.red, marginBottom: 4, lineHeight: 1.3 }}>
                        {item.name}
                      </div>
                      {item.price > 0 && (
                        <div style={{ fontFamily: "var(--ff-body)", fontSize: 13, color: C.muted, marginBottom: 8 }}>
                          ${item.price.toLocaleString("es-AR")} c/u
                        </div>
                      )}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <button className="qty-btn" onClick={() => updateQty(item.id, -1)}><Icon.Minus size={13} /></button>
                          <span style={{ fontFamily: "var(--ff-body)", fontSize: 14, fontWeight: 700, color: C.red, minWidth: 20, textAlign: "center" }}>{item.qty}</span>
                          <button className="qty-btn" onClick={() => updateQty(item.id, +1)}><Icon.Plus size={13} /></button>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          {item.price > 0 && (
                            <span style={{ fontFamily: "var(--ff-body)", fontSize: 14, fontWeight: 700, color: C.red }}>
                              ${(item.price * item.qty).toLocaleString("es-AR")}
                            </span>
                          )}
                          <button
                            onClick={() => removeItem(item.id)}
                            style={{ background: "none", border: "none", cursor: "pointer", color: "#bbb", display: "flex", transition: "color .2s" }}
                            onMouseEnter={e => e.currentTarget.style.color = C.red}
                            onMouseLeave={e => e.currentTarget.style.color = "#bbb"}
                          >
                            <Icon.Trash size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer footer */}
            {cart.length > 0 && (
              <div style={{ padding: "20px 24px", borderTop: `1.5px solid ${C.border}`, background: C.yellowPale }}>
                {cartTotal > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <span style={{ fontFamily: "var(--ff-body)", fontSize: 14, fontWeight: 600, color: C.muted }}>Total estimado</span>
                    <span style={{ fontFamily: "var(--ff-display)", fontSize: 28, fontWeight: 700, color: C.red }}>
                      ${cartTotal.toLocaleString("es-AR")}
                    </span>
                  </div>
                )}
                <button onClick={checkout} className="btn-wa" style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: 15, fontWeight: 700, borderRadius: 10, cursor: "pointer" }}>
                  <Icon.Whatsapp size={20} />
                  Pedir por WhatsApp
                </button>
                <p style={{ fontSize: 11.5, color: C.muted, textAlign: "center", marginTop: 10, lineHeight: 1.5 }}>
                  Se abrirá WhatsApp con tu pedido listo para enviar.
                </p>
              </div>
            )}
          </div>
        </>
      )}

      {/* ══ NAVBAR ══ */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(254,195,41,0.97)" : C.yellow,
        borderBottom: `1.5px solid ${scrolled ? C.borderStrong : "transparent"}`,
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(66,12,10,.12)" : "none",
        transition: "box-shadow .3s, border-color .3s",
      }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 84 }}>

          {/* Logo */}
          <a href="#inicio" onClick={e => go(e, "#inicio")} style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
            <div style={{ width: 60, height: 60, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <img src={logo} alt="Logo Velas Richard" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: "var(--ff-display)", fontSize: 22, fontWeight: 700, color: C.red, lineHeight: 1.1 }}>Velas Richard</span>
              <span style={{ fontFamily: "var(--ff-body)", fontSize: 9.5, letterSpacing: "0.14em", color: C.muted, textTransform: "uppercase", marginTop: 2 }}>Cumpleaños · Premium</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hide-mob" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="nav-a" onClick={e => go(e, l.href)}>{l.label}</a>
            ))}
          </nav>

          {/* Desktop right buttons */}
          <div className="hide-mob" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={() => setCartOpen(true)}
              style={{ position: "relative", background: C.red, border: "none", borderRadius: 8, padding: "9px 16px", cursor: "pointer", color: C.yellow, display: "flex", alignItems: "center", gap: 7, fontFamily: "var(--ff-body)", fontSize: 13.5, fontWeight: 700, transition: "background .2s" }}
              onMouseEnter={e => e.currentTarget.style.background = C.redLight}
              onMouseLeave={e => e.currentTarget.style.background = C.red}
            >
              <Icon.Cart size={18} />
              Carrito
              {cartCount > 0 && (
                <span style={{ background: C.yellow, color: C.red, borderRadius: 99, padding: "1px 7px", fontSize: 11, fontWeight: 800, marginLeft: 2 }}>
                  {cartCount}
                </span>
              )}
            </button>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa">
              <Icon.Whatsapp size={16} /> Consultá ahora
            </a>
          </div>

          {/* Mobile right */}
          <div className="show-mob" style={{ alignItems: "center", gap: 8 }}>
            <button
              onClick={() => setCartOpen(true)}
              style={{ position: "relative", background: C.red, border: "none", borderRadius: 8, padding: "8px 12px", cursor: "pointer", color: C.yellow, display: "flex", alignItems: "center" }}
            >
              <Icon.Cart size={20} />
              {cartCount > 0 && (
                <span style={{ position: "absolute", top: -6, right: -6, background: C.yellow, color: C.red, borderRadius: 99, width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, border: `2px solid ${C.yellow}` }}>
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", color: C.red, padding: 4, display: "flex" }}
              aria-label="Menú"
            >
              {menuOpen ? <Icon.Close /> : <Icon.Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: C.yellow, borderTop: `1.5px solid ${C.borderStrong}`, padding: "20px 24px 28px", display: "flex", flexDirection: "column", gap: 20 }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="nav-a" style={{ fontSize: 16 }} onClick={e => go(e, l.href)}>{l.label}</a>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ justifyContent: "center", marginTop: 4 }}>
              <Icon.Whatsapp size={18} /> Consultá por WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* ══ HERO ══ */}
      <section id="inicio" style={{ paddingTop: 84, minHeight: "100vh", display: "flex", alignItems: "center", background: C.yellow, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "44%", height: "100%", background: C.red, clipPath: "polygon(12% 0,100% 0,100% 100%,0% 100%)", zIndex: 0 }} />
        <div style={{ position: "absolute", top: 80, right: 40, width: 300, height: 300, borderRadius: "50%", border: "1.5px solid rgba(254,195,41,.2)", zIndex: 1, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 155, right: 115, width: 150, height: 150, borderRadius: "50%", border: "1.5px solid rgba(254,195,41,.15)", zIndex: 1, pointerEvents: "none" }} />

        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "72px 24px", position: "relative", zIndex: 2, width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="g2">

            {/* Left copy */}
            <div>
              <Reveal>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(66,12,10,.1)", borderRadius: 99, padding: "6px 14px 6px 6px", marginBottom: 24 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.red, display: "flex", alignItems: "center", justifyContent: "center", color: C.yellow }}>
                    <Icon.Sparkles size={14} />
                  </div>
                  <span style={{ fontFamily: "var(--ff-body)", fontSize: 12.5, fontWeight: 700, color: C.red, letterSpacing: ".06em" }}>
                    Velas de cumpleaños · Argentina
                  </span>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 style={{ color: C.red }}>
                  Iluminando<br />
                  <em>momentos</em> únicos
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <div style={{ width: 52, height: 3.5, background: C.red, borderRadius: 2, margin: "20px 0", opacity: .35 }} />
              </Reveal>

              <Reveal delay={220}>
                <p style={{ fontSize: 16, color: C.muted, maxWidth: 460, marginBottom: 32, lineHeight: 1.78 }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam corporis molestias est vero explicabo, esse fuga delectus necessitatibus voluptatibus vitae a, aspernatur voluptates veritatis libero adipisci atque culpa, asperiores voluptate?
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 52 }}>
                  <a href="#tienda" onClick={e => go(e, "#tienda")} className="btn-red">
                    <Icon.Cart size={17} /> Ver tienda
                  </a>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-outline-red">
                    <Icon.Whatsapp size={16} /> Consultanos
                  </a>
                </div>
              </Reveal>

              <Reveal delay={380}>
                <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
                  {[{ v: "500+", l: "Clientes felices" }, { v: "5+", l: "Años de experiencia" }, { v: "100%", l: "Hecho en Argentina" }].map(s => (
                    <div key={s.l}>
                      <div style={{ fontFamily: "var(--ff-display)", fontSize: 38, fontWeight: 700, color: C.red, lineHeight: 1 }}>{s.v}</div>
                      <div style={{ fontFamily: "var(--ff-body)", fontSize: 12, color: C.muted, marginTop: 4 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right card */}
            <Reveal delay={180} style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", height: 460, width: 320 }}>
                <div style={{ width: 290, height: 360, borderRadius: 20, background: C.yellow, border: "2px solid rgba(254,195,41,.4)", boxShadow: "0 24px 60px rgba(0,0,0,.3)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2, overflow: "hidden" }}>
                  {/* Logo as hero card image */}
                  <img src={logo} alt="Velas Richard" style={{ width: 140, height: 140, objectFit: "contain", marginBottom: 16 }} />
                  <div style={{ fontFamily: "var(--ff-display)", fontSize: 24, fontWeight: 700, color: C.red, marginBottom: 6 }}>Velas Richard</div>
                  <div style={{ fontFamily: "var(--ff-body)", fontSize: 11.5, color: C.muted, letterSpacing: ".16em", textTransform: "uppercase" }}>Artesanal · Premium</div>
                  <div style={{ position: "absolute", top: -14, right: 18, background: C.red, borderRadius: 99, padding: "7px 14px", fontFamily: "var(--ff-body)", fontSize: 11, fontWeight: 700, color: C.yellow, boxShadow: "0 4px 14px rgba(66,12,10,.4)", letterSpacing: ".08em" }}>
                    ★ 5.0 Google
                  </div>
                </div>
                <div style={{ position: "absolute", bottom: 48, left: -24, background: C.red, borderRadius: 12, padding: "12px 16px", boxShadow: "0 8px 24px rgba(0,0,0,.25)", display: "flex", alignItems: "center", gap: 10, zIndex: 3 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: C.yellow, display: "flex", alignItems: "center", justifyContent: "center", color: C.red }}>
                    <Icon.Package size={18} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--ff-body)", fontSize: 12, fontWeight: 700, color: C.yellow }}>Envíos a todo el país</div>
                    <div style={{ fontFamily: "var(--ff-body)", fontSize: 11, color: "rgba(254,195,41,.7)" }}>Rápido y seguro</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <div style={{ background: C.red, overflow: "hidden", padding: "13px 0" }}>
        <div className="marquee">
          {Array.from({ length: 2 }).flatMap(() =>
            ["Velas de cumpleaños", "Momentos Únicos", "Eventos", "Envíos a Todo el País", "Calidad Premium", "Personalización Total", "Fabricación Artesanal"].map((t, i) => (
              <span key={`${t}${i}`} style={{ fontFamily: "var(--ff-body)", fontSize: 11.5, fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: C.yellow, margin: "0 28px", whiteSpace: "nowrap" }}>
                <span style={{ opacity: .6, marginRight: 10 }}>✦</span>{t}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ══ SERVICIOS ══ */}
      <section id="servicios" style={{ padding: "96px 0", background: C.yellow }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "flex", justifyContent: "center" }}><SectionLabel onYellow>Por qué elegirnos</SectionLabel></div>
            <h2 style={{ color: C.red, marginTop: 8 }}>Expertos en cada <em>detalle</em></h2>
            <p style={{ maxWidth: 520, margin: "14px auto 0", color: C.muted }}>
              Nos especializamos cada día para ofrecerte velas de la más alta calidad. Tu momento especial merece lo mejor.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} className="g3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 110}>
                <div className="card" style={{ padding: "36px 28px" }}>
                  <div className="icon-box" style={{ marginBottom: 20 }}><s.Ico size={24} /></div>
                  <h3 style={{ color: C.red, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "#5a4020", lineHeight: 1.72 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TIENDA ══ */}
      <section id="tienda" style={{ padding: "96px 0", background: C.white }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>

          <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "flex", justifyContent: "center" }}><SectionLabel onYellow={false}>Tienda Online</SectionLabel></div>
            <h2 style={{ color: C.red, marginTop: 8 }}>Comprá nuestros <em>productos</em></h2>
            <p style={{ maxWidth: 500, margin: "14px auto 0", color: "#5a4020" }}>
              Elegí tus velas favoritas, agregalas al carrito y coordiná tu pedido directo por WhatsApp. ¡Rápido y sencillo!
            </p>
          </Reveal>

          {/* Steps banner */}
          <Reveal style={{ marginBottom: 48 }}>
            <div style={{ background: C.yellow, borderRadius: 16, padding: "28px 24px", border: `1.5px solid ${C.borderStrong}`, display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: 8 }}>
              {[
                { n: "1", text: "Elegí tus velas" },
                { n: "2", text: "Agregalas al carrito" },
                { n: "3", text: "Presioná Pedir por WhatsApp" },
                { n: "4", text: "Confirmamos y enviamos" },
              ].map((s, i) => (
                <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "0 20px" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: C.red, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ff-display)", fontSize: 22, fontWeight: 700, color: C.yellow }}>
                      {s.n}
                    </div>
                    <div style={{ fontFamily: "var(--ff-body)", fontSize: 12.5, fontWeight: 600, color: C.red, textAlign: "center", maxWidth: 110 }}>
                      {s.text}
                    </div>
                  </div>
                  {i < 3 && <div style={{ width: 24, height: 2, background: C.borderStrong, borderRadius: 2, flexShrink: 0 }} />}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Category filter */}
          <Reveal style={{ marginBottom: 36 }}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              {SHOP_CATS.map(cat => (
                <button key={cat} className={`cat-pill${shopCat === cat ? " active" : ""}`} onClick={() => setShopCat(cat)}>
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Product grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }} className="g4">
            {filtered.map((item, i) => {
              const inCart = cart.find(c => c.id === item.id);
              const isAdded = addedId === item.id;
              return (
                <Reveal key={item.id} delay={i * 50}>
                  <div className="shop-card">
                    {/* Image placeholder */}
                    <div style={{ padding: "14px 14px 0" }}>
                      <ImgPlaceholder height={150} />
                    </div>

                    <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                        <span className="tag">{item.tag}</span>
                        {inCart && (
                          <span style={{ fontFamily: "var(--ff-body)", fontSize: 11, fontWeight: 700, color: "#25D366", background: "rgba(37,211,102,.1)", padding: "3px 8px", borderRadius: 99, border: "1px solid rgba(37,211,102,.3)" }}>
                            En carrito ×{inCart.qty}
                          </span>
                        )}
                      </div>
                      <h3 style={{ color: C.red, fontSize: 15.5, marginBottom: 6, lineHeight: 1.3 }}>{item.name}</h3>
                      <p style={{ fontSize: 12.5, color: "#5a4020", lineHeight: 1.6, marginBottom: 12, flex: 1 }}>{item.desc}</p>
                      <div style={{ marginBottom: 12 }}>
                        <span style={{ fontFamily: "var(--ff-display)", fontSize: item.price > 0 ? 22 : 14, fontWeight: 700, color: C.red }}>
                          {fmt(item.price)}
                        </span>
                      </div>
                      <button className={`add-btn${isAdded ? " added" : ""}`} onClick={() => addToCart(item)}>
                        {isAdded
                          ? <><Icon.Check size={14} /> ¡Agregado!</>
                          : <><Icon.Plus size={14} /> Agregar al carrito</>
                        }
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* View cart CTA (when cart has items) */}
          {cartCount > 0 && (
            <Reveal style={{ textAlign: "center", marginTop: 48 }}>
              <button onClick={() => setCartOpen(true)} className="btn-red" style={{ fontSize: 15, padding: "14px 32px" }}>
                <Icon.Cart size={20} />
                Ver carrito ({cartCount} {cartCount === 1 ? "producto" : "productos"})
                {cartTotal > 0 && ` — $${cartTotal.toLocaleString("es-AR")}`}
              </button>
            </Reveal>
          )}
        </div>
      </section>

      {/* ══ NOSOTROS ══ */}
      <section id="nosotros" style={{ padding: "96px 0", background: C.yellow }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="g2">

            <Reveal>
              <div style={{ position: "relative" }}>
                <div style={{ width: "90%", borderRadius: 20, overflow: "hidden", background: C.red, position: "relative", padding: "52px 40px", minHeight: 400, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 80, height: 80, borderRadius: 16, background: "rgba(254,195,41,.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, flexShrink: 0, color: C.yellow }}>
                    <Icon.Medal size={38} />
                  </div>
                  <blockquote style={{ fontFamily: "var(--ff-display)", fontSize: 21, fontStyle: "italic", color: C.yellow, textAlign: "center", lineHeight: 1.55 }}>
                    "lorem ipsum dolor sit amet consectetur adipiscing elit"
                  </blockquote>
                  <div style={{ width: 40, height: 3, background: C.yellow, marginTop: 24, borderRadius: 2, opacity: .6 }} />
                  <div style={{ position: "absolute", top: 0, right: 0, width: 72, height: 72, background: C.yellow, borderBottomLeftRadius: 72, opacity: .15 }} />
                </div>
                <div style={{ position: "absolute", bottom: -18, right: -18, background: C.red, borderRadius: 14, padding: "14px 18px", boxShadow: "0 10px 30px rgba(66,12,10,.25)", display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: C.yellow, display: "flex", alignItems: "center", justifyContent: "center", color: C.red }}>
                    <Icon.Medal size={22} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--ff-body)", fontSize: 13, fontWeight: 700, color: C.yellow }}>+5 años de experiencia</div>
                    <div style={{ fontFamily: "var(--ff-body)", fontSize: 12, color: "rgba(254,195,41,.65)" }}>Hecho con amor</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <SectionLabel onYellow>Nuestra historia</SectionLabel>
              </div>
              <h2 style={{ color: C.red, marginTop: 8, marginBottom: 20 }}>
                Especialistas en <em>momentos únicos</em>
              </h2>
              <p style={{ marginBottom: 16, color: C.muted }}>
                En Velas Richard creemos que cada vela cuenta una historia. Nacimos con la pasión de transformar fiestas en momentos inolvidables.
              </p>
              <p style={{ marginBottom: 32, color: C.muted }}>
                Cada producto es hecho con dedicación y amor, asegurándonos de que cada detalle sea perfecto.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
                {FEATURES.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: C.red, display: "flex", alignItems: "center", justifyContent: "center", color: C.yellow, flexShrink: 0 }}>
                      <Icon.Check size={12} />
                    </div>
                    <span style={{ fontFamily: "var(--ff-body)", fontSize: 13.5, color: C.red, fontWeight: 600 }}>{f}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIOS ══ */}
      <section id="testimonios" style={{ padding: "96px 0", background: C.white }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "flex", justifyContent: "center" }}><SectionLabel onYellow={false}>Testimonios</SectionLabel></div>
            <h2 style={{ color: C.red, marginTop: 8 }}>Lo que dicen nuestros <em>clientes</em></h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, maxWidth: 900, margin: "0 auto" }} className="g2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name + i} delay={i * 130}>
                <div className="card" style={{ padding: "32px 28px" }}>
                  <Stars n={t.stars} />
                  <p style={{ fontSize: 15, fontStyle: "italic", margin: "18px 0 22px", color: "#3a2010", lineHeight: 1.76 }}>"{t.text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 18, borderTop: `1.5px solid ${C.border}` }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: C.red, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ff-display)", fontSize: 18, fontWeight: 700, color: C.yellow, flexShrink: 0 }}>
                      {t.initial}
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--ff-body)", fontSize: 14, fontWeight: 700, color: C.red }}>{t.name}</div>
                      <div style={{ fontFamily: "var(--ff-body)", fontSize: 12, color: C.muted }}>{t.location} · Google Reviews</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: "center", marginTop: 32 }}>
            <a href="https://www.google.com/search?q=velas+richard" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--ff-body)", fontSize: 14, fontWeight: 700, color: C.red, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
              Ver todas las reseñas en Google <Icon.ArrowRight size={14} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ══ CONTACTO ══ */}
      <section id="contacto" style={{ padding: "96px 0", background: C.yellow }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "flex", justifyContent: "center" }}><SectionLabel onYellow>Contacto</SectionLabel></div>
            <h2 style={{ color: C.red, marginTop: 8 }}>Consultá todas tus <em>dudas</em></h2>
            <p style={{ maxWidth: 460, margin: "14px auto 0", color: C.muted }}>
              Estamos para ayudarte. Escribinos y te respondemos a la brevedad con atención personalizada.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, maxWidth: 820, margin: "0 auto" }} className="g2">
            <Reveal>
              <div className="card" style={{ padding: "40px 32px", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: "rgba(37,211,102,.12)", color: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", border: "1.5px solid rgba(37,211,102,.3)" }}>
                  <Icon.Whatsapp size={30} />
                </div>
                <h3 style={{ color: C.red, marginBottom: 8 }}>WhatsApp</h3>
                <p style={{ fontSize: 14, marginBottom: 8, color: "#5a4020" }}>La forma más rápida de contactarnos. Respondemos en minutos.</p>
                <div style={{ fontFamily: "var(--ff-display)", fontSize: 30, fontWeight: 700, color: C.red, margin: "16px 0 24px" }}>11 2294-4579</div>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ justifyContent: "center", width: "100%" }}>
                  <Icon.Whatsapp size={18} /> Escribir por WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="card" style={{ padding: "40px 32px", textAlign: "center" }}>
                <div className="icon-box" style={{ width: 64, height: 64, borderRadius: 16, margin: "0 auto 20px" }}>
                  <Icon.Package size={30} />
                </div>
                <h3 style={{ color: C.red, marginBottom: 8 }}>Catálogo Digital</h3>
                <p style={{ fontSize: 14, marginBottom: 8, color: "#5a4020" }}>Explorá todos nuestros productos con precios actualizados en WhatsApp.</p>
                <div style={{ fontFamily: "var(--ff-body)", fontSize: 13, color: C.muted, margin: "16px 0 24px", fontWeight: 600 }}>+20 productos disponibles</div>
                <a href={CATALOG} target="_blank" rel="noopener noreferrer" className="btn-red" style={{ justifyContent: "center", width: "100%" }}>
                  Ver catálogo <Icon.ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ REDES ══ */}
      <section style={{ background: C.red, padding: "72px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}><SectionLabel onYellow={false}>Seguinos</SectionLabel></div>
            <h2 style={{ color: C.yellow, marginBottom: 12 }}>Encontranos en <em>redes sociales</em></h2>
            <p style={{ color: "rgba(254,195,41,.75)", maxWidth: 440, margin: "0 auto 36px" }}>
              Seguí nuestra cuenta para inspiración diaria, novedades y promociones exclusivas.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { href: "https://www.instagram.com/velas_richard/", ico: <Icon.Instagram size={19} />, label: "@velas_richard" },
                { href: "https://www.facebook.com/velas.richardok", ico: <Icon.Facebook size={19} />, label: "velas.richardok" },
              ].map(btn => (
                <a key={btn.href} href={btn.href} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 24px", borderRadius: 8, background: "rgba(254,195,41,.12)", color: C.yellow, fontFamily: "var(--ff-body)", fontWeight: 600, fontSize: 14, textDecoration: "none", border: "1.5px solid rgba(254,195,41,.3)", transition: "background .2s,transform .18s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(254,195,41,.22)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(254,195,41,.12)"; e.currentTarget.style.transform = "none"; }}
                >
                  {btn.ico} {btn.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: "#1A0603", padding: "56px 0 32px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="g3">

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, overflow: "hidden", flexShrink: 0 }}>
                  <img src={logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--ff-display)", fontSize: 20, fontWeight: 700, color: C.yellow, lineHeight: 1.1 }}>Velas Richard</div>
                  <div style={{ fontFamily: "var(--ff-body)", fontSize: 10, letterSpacing: ".18em", color: "rgba(254,195,41,.45)", textTransform: "uppercase", marginTop: 2 }}>Cumpleaños · Premium</div>
                </div>
              </div>
              <p style={{ fontSize: 13.5, color: "rgba(254,195,41,.45)", lineHeight: 1.72 }}>
                Creamos velas de cumpleaños para que tus momentos sean únicos.
              </p>
            </div>

            <div>
              <div style={{ fontFamily: "var(--ff-body)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: C.yellow, fontWeight: 700, marginBottom: 18 }}>Navegación</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {NAV_LINKS.map(l => (
                  <a key={l.href} href={l.href} style={{ fontFamily: "var(--ff-body)", fontSize: 14, color: "rgba(254,195,41,.5)", textDecoration: "none", transition: "color .2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = C.yellow}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(254,195,41,.5)"}
                  >{l.label}</a>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: "var(--ff-body)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: C.yellow, fontWeight: 700, marginBottom: 18 }}>Contacto</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { ico: <Icon.Phone size={15} />, text: "11 2294-4579", href: WA },
                  { ico: <Icon.Instagram size={15} />, text: "@velas_richard", href: "https://www.instagram.com/velas_richard/" },
                  { ico: <Icon.Facebook size={15} />, text: "velas.richardok", href: "https://www.facebook.com/velas.richardok" },
                ].map(c => (
                  <a key={c.text} href={c.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--ff-body)", fontSize: 13.5, color: "rgba(254,195,41,.5)", textDecoration: "none", transition: "color .2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = C.yellow}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(254,195,41,.5)"}
                  >
                    <span style={{ color: C.yellow, opacity: .7 }}>{c.ico}</span> {c.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(254,195,41,.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontFamily: "var(--ff-body)", fontSize: 12, color: "rgba(254,195,41,.3)", lineHeight: 1 }}>
              © {new Date().getFullYear()} Velas Richard. Todos los derechos reservados.
            </p>
            <p style={{ fontFamily: "var(--ff-body)", fontSize: 12, color: "rgba(254,195,41,.3)", lineHeight: 1 }}>
              Hecho con <span style={{ color: C.yellow }}>♥</span> en Argentina
            </p>
          </div>
        </div>
      </footer>

      {/* ══ FLOATING WA ══ */}
      <a href={WA} target="_blank" rel="noopener noreferrer" className="wa-fab" aria-label="Contactar por WhatsApp">
        <Icon.Whatsapp size={26} />
      </a>
    </div>
  );
}