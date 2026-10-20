/**
 * GREEN PARADISE HOTEL & BUNGALOWS TINGO MARÍA
 * Calendario Interno de Planificación de Contenido para Redes Sociales
 * Vanilla JavaScript (Compatible con GitHub Pages)
 */

(function () {
  'use strict';

  // --- ICONS (Inline SVG helper) ---
  const ICONS = {
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    day: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
    edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.78 14.28c-.24.68-1.39 1.3-1.92 1.38-.49.08-1.12.11-3.23-.76-2.69-1.11-4.43-3.83-4.57-4.01-.13-.18-1.1-1.46-1.1-2.79s.69-1.98.94-2.25c.24-.26.53-.33.71-.33.18 0 .35 0 .5.01.16.01.37-.06.58.44.22.52.74 1.8.8 1.93.07.13.11.29.02.47-.09.18-.13.29-.26.44-.13.15-.28.34-.4.46-.13.13-.27.27-.12.53.15.26.68 1.11 1.45 1.8 1 .89 1.84 1.17 2.1 1.3.26.13.41.11.56-.06.16-.18.66-.77.84-1.03.18-.26.35-.22.6-.13.24.09 1.54.73 1.8 1.03.27.31.27.46.2.78z"/></svg>`,
    image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
    video: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    unlock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
    arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    cameraOff: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path></svg>`,
    zoomIn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`,
    zoomOut: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>`,
    zoomReset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><polyline points="3 3 3 8 8 8"></polyline></svg>`
  };

  // --- STATE ---
  const state = {
    config: {
      whatsapp: "51936574554",
      pin: "GP2026",
      nombre: "Green Paradise Hotel & Bungalows",
      ubicacion: "Tingo María, Huánuco - Perú"
    },
    currentDate: new Date(2026, 9, 19),
    pendientes: [
      {
        id: "pen-101",
        titulo: "Reunión por ingreso a cuenta de tiktok para Hotel",
        descripcion: "El editor requiere una reunión para ingresar al gmail de hotel para poder usar correctamente el tiktok.",
        hecho: false,
        fechaCreacion: "2026-10-19"
      },
      {
        id: "pen-102",
        titulo: "Reunión para vincular el numero de whatsapp a la fan page de hotel",
        descripcion: "El editor requiere que el administrador del whatsapp del hotel reciba y comparta un codigo para vincular el whatsapp en el portafolio comercial del Hotel",
        hecho: false,
        fechaCreacion: "2026-10-19"
      }
    ],
    viewMonth: new Date(2026, 9, 1),
    viewWeekStart: new Date(2026, 9, 19), // Start of the week (Monday)
    selectedDayDateStr: "2026-10-19",
    activeRoute: "mes",
    filters: {
      marca: "todas",
      red: "todas",
      estado: "todas"
    },
    activeModal: null
  };

  // --- TOAST NOTIFICATION ---
  function showToast(message, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = `toast ${type === "success" ? "success" : ""}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- DATE HELPERS ---
  const MONTH_NAMES = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const DAY_NAMES = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const DAY_NAMES_SHORT = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  function formatIsoDate(d) {
    if (!d || !(d instanceof Date) || isNaN(d.getTime())) {
      d = (state && state.currentDate) || new Date(2026, 9, 19);
    }
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function parseIsoDate(str) {
    if (!str || typeof str !== "string") return (state && state.currentDate) ? new Date(state.currentDate) : new Date(2026, 9, 19);
    const parts = str.split("-");
    if (parts.length < 3) return (state && state.currentDate) ? new Date(state.currentDate) : new Date(2026, 9, 19);
    return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  }

  function formatDateFriendly(dateStr) {
    const d = parseIsoDate(dateStr);
    const weekday = DAY_NAMES[d.getDay()];
    const day = d.getDate();
    const month = MONTH_NAMES[d.getMonth()];
    const year = d.getFullYear();
    return `${weekday}, ${day} de ${month} de ${year}`;
  }

  function formatShortDateFriendly(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length < 3) return dateStr;
    const day = parseInt(parts[2], 10);
    const monthIdx = parseInt(parts[1], 10) - 1;
    const year = parts[0];
    return `${day} de ${MONTH_NAMES[monthIdx]} ${year}`;
  }

  function getMondayOfWeek(d) {
    const date = new Date(d);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  // --- DATA LOADING & FALLBACK ---
  async function loadData() {
    try {
      const response = await fetch("data/calendar.json");
      if (!response.ok) throw new Error("Status " + response.status);
      const data = await response.json();
      state.config = data.config || state.config;
      state.publicaciones = data.publicaciones || [];
      state.pendientes = data.pendientes || [];
      console.log("Datos cargados correctamente de data/calendar.json:", state.publicaciones.length, "publicaciones");
    } catch (err) {
      console.warn("No se pudo cargar data/calendar.json por fetch directo, utilizando fallback inicial:", err);
      // Fallback data is preloaded in fallback JSON if fetch is blocked
    }
    updatePendingBadges();
    render();
  }

  function updatePendingBadges() {
    const uncompleted = state.pendientes.filter((p) => !p.hecho).length;
    document.querySelectorAll(".badge-pending-count").forEach((el) => {
      el.textContent = uncompleted;
      el.style.display = uncompleted > 0 ? "inline-flex" : "none";
    });
  }

  let isMobileDateNavOpen = false;

  function syncMobileDateNavState() {
    const mobPopover = document.getElementById("mob-date-popover");
    const mobCalBtn = document.getElementById("mob-calendar-nav-btn");
    if (mobPopover) {
      mobPopover.style.display = isMobileDateNavOpen ? "block" : "none";
    }
    if (mobCalBtn) {
      if (isMobileDateNavOpen) {
        mobCalBtn.classList.add("active");
      } else {
        mobCalBtn.classList.remove("active");
      }
    }
  }

  // --- DATE NAVIGATION COMPONENT (FOR DESKTOP SIDEBAR & MOBILE POPOVER) ---
  function updateDateNavigation() {
    let prevAction = null;
    let nextAction = null;
    let todayAction = null;
    let dateText = "";
    let fullDateText = "";
    let showPicker = false;
    let pickerValue = "";

    if (state.activeRoute === "mes") {
      const year = state.viewMonth.getFullYear();
      const month = state.viewMonth.getMonth();
      const monthName = MONTH_NAMES[month];
      dateText = `${monthName} ${year}`;
      fullDateText = `${monthName} de ${year}`;
      prevAction = () => {
        state.viewMonth = new Date(year, month - 1, 1);
        render();
      };
      nextAction = () => {
        state.viewMonth = new Date(year, month + 1, 1);
        render();
      };
      todayAction = () => {
        const cur = state.currentDate || new Date(2026, 9, 19);
        state.viewMonth = new Date(cur.getFullYear(), cur.getMonth(), 1);
        render();
      };
    } else if (state.activeRoute === "semana") {
      const monday = getMondayOfWeek(state.viewWeekStart || new Date(2026, 9, 19));
      const sunday = new Date(monday);
      sunday.setDate(monday.getDate() + 6);
      const monDate = monday.getDate();
      const sunDate = sunday.getDate();
      const sunMonth = MONTH_NAMES[sunday.getMonth()].slice(0, 3);
      const yearStr = sunday.getFullYear();

      dateText = `${monDate} - ${sunDate} ${sunMonth} ${yearStr}`;
      fullDateText = `Semana del ${monDate} al ${sunDate} de ${MONTH_NAMES[sunday.getMonth()]}, ${yearStr}`;
      prevAction = () => {
        const prev = new Date(state.viewWeekStart || new Date(2026, 9, 19));
        prev.setDate(prev.getDate() - 7);
        state.viewWeekStart = prev;
        render();
      };
      nextAction = () => {
        const next = new Date(state.viewWeekStart || new Date(2026, 9, 19));
        next.setDate(next.getDate() + 7);
        state.viewWeekStart = next;
        render();
      };
      todayAction = () => {
        state.viewWeekStart = new Date(state.currentDate || new Date(2026, 9, 19));
        render();
      };
    } else if (state.activeRoute === "dia") {
      const targetDateStr = state.selectedDayDateStr || formatIsoDate(state.currentDate || new Date(2026, 9, 19));
      const curDate = parseIsoDate(targetDateStr);
      const prevDate = new Date(curDate);
      prevDate.setDate(curDate.getDate() - 1);
      const prevDateStr = formatIsoDate(prevDate);
      const nextDate = new Date(curDate);
      nextDate.setDate(curDate.getDate() + 1);
      const nextDateStr = formatIsoDate(nextDate);

      const dayNum = curDate.getDate();
      const monthAbbr = MONTH_NAMES[curDate.getMonth()].slice(0, 3);
      const year = curDate.getFullYear();
      dateText = `${dayNum} ${monthAbbr} ${year}`;
      fullDateText = formatDateFriendly(targetDateStr);
      showPicker = true;
      pickerValue = targetDateStr;

      prevAction = () => {
        window.location.hash = `#/dia/${prevDateStr}`;
      };
      nextAction = () => {
        window.location.hash = `#/dia/${nextDateStr}`;
      };
      todayAction = () => {
        window.location.hash = `#/dia/${formatIsoDate(state.currentDate || new Date(2026, 9, 19))}`;
      };
    } else {
      // Pendientes
      const cur = state.currentDate || new Date(2026, 9, 19);
      dateText = `${cur.getDate()} ${MONTH_NAMES[cur.getMonth()].slice(0, 3)} ${cur.getFullYear()}`;
      fullDateText = "Hoy: " + formatDateFriendly(formatIsoDate(cur));
      todayAction = () => {
        window.location.hash = "#/mes";
      };
    }

    // 1. Sidebar Widget HTML
    const sidebarSlot = document.getElementById("sidebar-date-nav-slot");
    if (sidebarSlot) {
      sidebarSlot.innerHTML = `
        <div class="sidebar-date-nav-widget">
          <button type="button" class="sb-nav-btn sb-nav-arrow" id="sb-nav-prev" title="Anterior">
            ${ICONS.arrowLeft}
          </button>
          <div class="sb-nav-label-box" title="${escapeHtml(fullDateText)}">
            <span class="sb-nav-label-text">${escapeHtml(dateText)}</span>
            ${showPicker ? `<input type="date" id="sb-nav-date-input" class="sb-nav-date-input" value="${pickerValue}" title="Seleccionar fecha" />` : ""}
          </div>
          <button type="button" class="sb-nav-btn sb-nav-arrow" id="sb-nav-next" title="Siguiente">
            ${ICONS.arrowRight}
          </button>
          <button type="button" class="sb-nav-btn sb-nav-today" id="sb-nav-today" title="Ir a fecha de hoy">
            Hoy
          </button>
        </div>
      `;

      const prevBtn = document.getElementById("sb-nav-prev");
      const nextBtn = document.getElementById("sb-nav-next");
      const todayBtn = document.getElementById("sb-nav-today");
      const dateInput = document.getElementById("sb-nav-date-input");

      if (prevBtn && prevAction) prevBtn.onclick = prevAction;
      if (nextBtn && nextAction) nextBtn.onclick = nextAction;
      if (todayBtn && todayAction) todayBtn.onclick = todayAction;
      if (dateInput) {
        dateInput.onchange = (e) => {
          if (e.target.value) {
            window.location.hash = `#/dia/${e.target.value}`;
          }
        };
      }
    }

    // 2. Mobile Popover Widget HTML
    const mobPopover = document.getElementById("mob-date-popover");
    if (mobPopover) {
      mobPopover.style.display = isMobileDateNavOpen ? "block" : "none";
      mobPopover.innerHTML = `
        <div class="mob-date-popover-content">
          <button type="button" class="sb-nav-btn sb-nav-arrow" id="mob-nav-prev" title="Anterior">
            ${ICONS.arrowLeft}
          </button>
          <div class="sb-nav-label-box" title="${escapeHtml(fullDateText)}">
            <span class="sb-nav-label-text">${escapeHtml(dateText)}</span>
            ${showPicker ? `<input type="date" id="mob-nav-date-input" class="sb-nav-date-input" value="${pickerValue}" title="Seleccionar fecha" />` : ""}
          </div>
          <button type="button" class="sb-nav-btn sb-nav-arrow" id="mob-nav-next" title="Siguiente">
            ${ICONS.arrowRight}
          </button>
          <button type="button" class="sb-nav-btn sb-nav-today" id="mob-nav-today" title="Ir a fecha de hoy">
            Hoy
          </button>
        </div>
      `;

      const mPrevBtn = document.getElementById("mob-nav-prev");
      const mNextBtn = document.getElementById("mob-nav-next");
      const mTodayBtn = document.getElementById("mob-nav-today");
      const mDateInput = document.getElementById("mob-nav-date-input");

      if (mPrevBtn && prevAction) {
        mPrevBtn.onclick = (e) => {
          e.stopPropagation();
          e.preventDefault();
          prevAction();
        };
      }
      if (mNextBtn && nextAction) {
        mNextBtn.onclick = (e) => {
          e.stopPropagation();
          e.preventDefault();
          nextAction();
        };
      }
      if (mTodayBtn && todayAction) {
        mTodayBtn.onclick = (e) => {
          e.stopPropagation();
          e.preventDefault();
          todayAction();
        };
      }
      if (mDateInput) {
        mDateInput.onchange = (e) => {
          e.stopPropagation();
          if (e.target.value) {
            window.location.hash = `#/dia/${e.target.value}`;
          }
        };
      }
    }
  }

  function matchesFilters(pub) {
    if (state.filters.marca !== "todas" && pub.marca !== state.filters.marca) {
      return false;
    }
    if (state.filters.red !== "todas" && !(pub.redes || []).includes(state.filters.red)) {
      return false;
    }
    if (state.filters.estado !== "todas" && pub.estado !== state.filters.estado) {
      return false;
    }
    return true;
  }

  // --- SOCIAL NETWORKS ICONS RENDERER ---
  function renderSocialIcons(redesArray = []) {
    return redesArray
      .map((red) => {
        const iconSvg = ICONS[red] || "";
        return `<span class="social-icon-badge ${red}" title="${red}">${iconSvg}</span>`;
      })
      .join("");
  }

  // --- VISTA 1: MES (Month View) ---
  function renderMonthView() {
    const year = state.viewMonth.getFullYear();
    const month = state.viewMonth.getMonth();
    const monthName = MONTH_NAMES[month];

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Days in current month
    const totalDays = lastDay.getDate();

    // Monday as first day of week: Sunday = 0 -> 6, Monday = 1 -> 0
    let startDayOfWeek = firstDay.getDay() - 1;
    if (startDayOfWeek === -1) startDayOfWeek = 6;

    // Previous month filler days
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    const todayStr = formatIsoDate(state.currentDate);

    // Filtered publications
    const visiblePosts = state.publicaciones.filter(matchesFilters);

    let cellsHtml = "";

    // 1. Prev month filler cells
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      const prevDateNum = prevMonthLastDay - i;
      const prevDate = new Date(year, month - 1, prevDateNum);
      const isoStr = formatIsoDate(prevDate);
      const postsForDay = visiblePosts.filter((p) => p.fecha === isoStr);

      cellsHtml += renderMonthDayCell({
        dateNum: prevDateNum,
        isoStr,
        isOtherMonth: true,
        isToday: isoStr === todayStr,
        posts: postsForDay
      });
    }

    // 2. Current month cells
    for (let day = 1; day <= totalDays; day++) {
      const currDate = new Date(year, month, day);
      const isoStr = formatIsoDate(currDate);
      const postsForDay = visiblePosts.filter((p) => p.fecha === isoStr);

      cellsHtml += renderMonthDayCell({
        dateNum: day,
        isoStr,
        isOtherMonth: false,
        isToday: isoStr === todayStr,
        posts: postsForDay
      });
    }

    // 3. Next month filler cells to complete 7-col grid
    const totalRendered = startDayOfWeek + totalDays;
    const remaining = (7 - (totalRendered % 7)) % 7;
    for (let i = 1; i <= remaining; i++) {
      const nextDate = new Date(year, month + 1, i);
      const isoStr = formatIsoDate(nextDate);
      const postsForDay = visiblePosts.filter((p) => p.fecha === isoStr);

      cellsHtml += renderMonthDayCell({
        dateNum: i,
        isoStr,
        isOtherMonth: true,
        isToday: isoStr === todayStr,
        posts: postsForDay
      });
    }

    updateDateNavigation();

    const html = `
      <div class="month-calendar-wrapper">
        <div class="month-days-header">
          <div class="day-header-cell">Lunes</div>
          <div class="day-header-cell">Martes</div>
          <div class="day-header-cell">Miércoles</div>
          <div class="day-header-cell">Jueves</div>
          <div class="day-header-cell">Viernes</div>
          <div class="day-header-cell">Sábado</div>
          <div class="day-header-cell">Domingo</div>
        </div>
        <div class="month-grid">
          ${cellsHtml}
        </div>
      </div>
    `;

    const appView = document.getElementById("app-view");
    appView.innerHTML = html;

    // Attach day cell click events
    document.querySelectorAll(".calendar-day-cell").forEach((cell) => {
      cell.onclick = (e) => {
        const dateStr = cell.getAttribute("data-date");
        if (dateStr) {
          window.location.hash = `#/dia/${dateStr}`;
        }
      };
    });

    // Attach day cell and card click events
    document.querySelectorAll(".calendar-day-cell, .calendar-post-card, .calendar-more-card").forEach((el) => {
      el.onclick = (e) => {
        const dateStr = el.getAttribute("data-date");
        if (dateStr) {
          window.location.hash = `#/dia/${dateStr}`;
        }
      };
    });
  }

  // --- CALENDAR CARD RENDERER (Line 1: H/B + Tipo | Line 2: Circulos Redes | Line 3: Titulo...) ---
  function renderMiniCalendarCard(pub) {
    const isPub = pub.estado === "publicado";
    let brandLabel = "H";
    if (pub.marca === "bungalows") brandLabel = "B";
    else if (pub.marca === "ambos") brandLabel = "H&B";

    let typeLabel = "Imagen";
    if (pub.tipo === "video") typeLabel = "Video";
    else if (pub.tipo === "carrusel") typeLabel = "Carrusel";

    return `
      <div class="calendar-post-card brand-${pub.marca} ${isPub ? "is-published" : ""}" data-pub-id="${pub.id}" data-date="${pub.fecha}" title="${escapeHtml(pub.titulo)}">
        <div class="card-line-top">
          <span class="badge-brand-letter ${pub.marca}">${brandLabel}</span>
          <span class="badge-type-pill ${pub.tipo || "imagen"}">${typeLabel}</span>
          ${isPub ? `<span class="badge-pub-check" title="Publicado">${ICONS.check}</span>` : ""}
        </div>
        <div class="card-line-socials">
          ${renderSocialIcons(pub.redes)}
        </div>
        <div class="card-line-title">
          ${escapeHtml(pub.titulo)}
        </div>
      </div>
    `;
  }

  // Month cards: max 2. If > 2, 2nd card is solid green "+N" with "H1 B1"
  function renderMonthDayCards(posts, isoStr) {
    if (!posts || posts.length === 0) return "";

    if (posts.length <= 2) {
      return posts.map(renderMiniCalendarCard).join("");
    }

    const firstCardHtml = renderMiniCalendarCard(posts[0]);
    const remaining = posts.slice(1);
    const remainingCount = remaining.length;

    let hCount = 0;
    let bCount = 0;
    remaining.forEach((p) => {
      if (p.marca === "hotel") hCount++;
      else if (p.marca === "bungalows") bCount++;
      else if (p.marca === "ambos") {
        hCount++;
        bCount++;
      }
    });

    let brandTags = [];
    if (hCount > 0) brandTags.push(`H${hCount}`);
    if (bCount > 0) brandTags.push(`B${bCount}`);
    const brandSummary = brandTags.join(" ");

    const moreCardHtml = `
      <div class="calendar-more-card" data-date="${isoStr}" title="Ver ${remainingCount} actividades más">
        <div class="more-card-plus">+${remainingCount}</div>
        <div class="more-card-brands">${brandSummary}</div>
      </div>
    `;

    return firstCardHtml + moreCardHtml;
  }

  // Week cards: max 3. If > 3, last card is solid green "+N" with "H1 B1"
  function renderWeekDayCards(posts, isoStr) {
    if (!posts || posts.length === 0) {
      return `<div class="empty-week-day">Sin publicaciones</div>`;
    }

    if (posts.length <= 3) {
      return posts.map(renderMiniCalendarCard).join("");
    }

    const visibleCardsHtml = posts.slice(0, 2).map(renderMiniCalendarCard).join("");
    const remaining = posts.slice(2);
    const remainingCount = remaining.length;

    let hCount = 0;
    let bCount = 0;
    remaining.forEach((p) => {
      if (p.marca === "hotel") hCount++;
      else if (p.marca === "bungalows") bCount++;
      else if (p.marca === "ambos") {
        hCount++;
        bCount++;
      }
    });

    let brandTags = [];
    if (hCount > 0) brandTags.push(`H${hCount}`);
    if (bCount > 0) brandTags.push(`B${bCount}`);
    const brandSummary = brandTags.join(" ");

    const moreCardHtml = `
      <div class="calendar-more-card" data-date="${isoStr}" title="Ver ${remainingCount} actividades más">
        <div class="more-card-plus">+${remainingCount}</div>
        <div class="more-card-brands">${brandSummary}</div>
      </div>
    `;

    return visibleCardsHtml + moreCardHtml;
  }

  function renderMonthDayCell({ dateNum, isoStr, isOtherMonth, isToday, posts }) {
    const cellDate = parseIsoDate(isoStr);
    const SHORT_WEEKDAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    const weekdayShort = SHORT_WEEKDAYS[cellDate.getDay()];

    const cardsHtml = renderMonthDayCards(posts, isoStr);

    return `
      <div class="calendar-day-cell ${isOtherMonth ? "other-month" : ""} ${isToday ? "is-today" : ""}" data-date="${isoStr}">
        <div class="day-cell-top">
          <div class="day-cell-date-info">
            <span class="day-cell-weekday">${weekdayShort}</span>
            <span class="day-number">${dateNum}</span>
          </div>
          ${posts.length > 0 ? `<span class="day-post-count">${posts.length}</span>` : ""}
        </div>
        <div class="day-posts-list">
          ${cardsHtml}
        </div>
      </div>
    `;
  }

  // --- VISTA 2: SEMANA (Week View) ---
  function renderWeekView() {
    const monday = getMondayOfWeek(state.viewWeekStart);
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const visiblePosts = state.publicaciones.filter(matchesFilters);
    const todayStr = formatIsoDate(state.currentDate);

    let columnsHtml = "";

    for (let i = 0; i < 7; i++) {
      const colDate = new Date(monday);
      colDate.setDate(monday.getDate() + i);
      const isoStr = formatIsoDate(colDate);
      const isToday = isoStr === todayStr;
      const dayName = DAY_NAMES[(i + 1) % 7];
      const dayNum = colDate.getDate();

      const dayPosts = visiblePosts.filter((p) => p.fecha === isoStr);
      // Sort by hour
      dayPosts.sort((a, b) => (a.hora || "99:99").localeCompare(b.hora || "99:99"));

      const cardsHtml = renderWeekDayCards(dayPosts, isoStr);

      const pubBadgeHtml = dayPosts.length > 0
        ? `<span class="badge-status ${dayPosts[0].estado} week-day-pub-badge">${dayPosts.length} pub${dayPosts.length > 1 ? "s" : ""}</span>`
        : `<span class="badge-status week-day-pub-badge week-day-pub-badge-empty">0 pub</span>`;

      columnsHtml += `
        <div class="week-column">
          <div class="week-col-header ${isToday ? "is-today" : ""}" data-date="${isoStr}">
            <div class="week-day-name">${dayName}</div>
            <div class="week-day-number">${dayNum}</div>
            ${pubBadgeHtml}
          </div>
          <div class="week-col-body">
            ${cardsHtml}
          </div>
        </div>
      `;
    }

    updateDateNavigation();

    const html = `
      <div class="week-grid">
        ${columnsHtml}
      </div>
    `;

    const appView = document.getElementById("app-view");
    appView.innerHTML = html;

    // Clicking header or card opens day view
    document.querySelectorAll(".week-col-header, .calendar-post-card, .calendar-more-card").forEach((el) => {
      el.onclick = () => {
        const dateStr = el.getAttribute("data-date");
        if (dateStr) {
          window.location.hash = `#/dia/${dateStr}`;
        }
      };
    });
  }

  // --- VISTA 3: DÍA (Day View - Muestra directamente la información del día) ---
  function renderSelectedDayView(dateStr) {
    if (!dateStr) {
      dateStr = state.selectedDayDateStr || formatIsoDate(state.currentDate);
    }
    state.selectedDayDateStr = dateStr;
    const curDate = parseIsoDate(dateStr);
    const friendlyDate = formatDateFriendly(dateStr);

    // Prev / Next day calculations
    const prevDate = new Date(curDate);
    prevDate.setDate(curDate.getDate() - 1);
    const prevDateStr = formatIsoDate(prevDate);

    const nextDate = new Date(curDate);
    nextDate.setDate(curDate.getDate() + 1);
    const nextDateStr = formatIsoDate(nextDate);

    const todayStr = formatIsoDate(state.currentDate);
    const isToday = dateStr === todayStr;

    const allDayPosts = state.publicaciones.filter((p) => p.fecha === dateStr);
    const visibleDayPosts = allDayPosts.filter(matchesFilters);

    let postsHtml = "";
    if (visibleDayPosts.length === 0) {
      postsHtml = `
        <div class="empty-state">
          <div class="empty-state-icon">${ICONS.calendar}</div>
          <div class="empty-state-title">No hay publicaciones planificadas para este día</div>
          <div class="empty-state-desc">${allDayPosts.length > 0 ? "Hay publicaciones para esta fecha pero están ocultas por los filtros actuales." : `No se registraron actividades para ${friendlyDate}. Puedes agregar una nueva en cualquier momento.`}</div>
          <button class="btn btn-primary" id="add-post-this-day-btn" style="margin-top: 12px;">
            ${ICONS.plus} Crear publicación para esta fecha
          </button>
        </div>
      `;
    } else {
      postsHtml = `
        <div class="day-posts-container">
          ${visibleDayPosts.map((pub) => renderSingleDayPostCard(pub)).join("")}
        </div>
      `;
    }

    updateDateNavigation();

    const html = `
      <div class="day-view-header-block" style="margin-bottom: 14px;">
        <div style="font-size: 13.5px; font-weight: 700; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.2;">
          ${friendlyDate}
        </div>
        <div style="margin-top: 4px;">
          <span class="badge-status ${allDayPosts.length > 0 ? "programado" : "idea"}" style="font-size: 11px; font-weight: 600; padding: 2px 8px; display: inline-block; white-space: nowrap;">
            ${allDayPosts.length} ${allDayPosts.length === 1 ? "publicación" : "publicaciones"}
          </span>
        </div>
      </div>

      ${postsHtml}
    `;

    const appView = document.getElementById("app-view");
    appView.innerHTML = html;

    // Attach button events
    const addBtn1 = document.getElementById("add-post-this-day-btn");
    if (addBtn1) addBtn1.onclick = () => openPostFormModal(null, dateStr);

    // Gallery thumbnail switcher events & Lightbox modal trigger
    document.querySelectorAll(".pub-detail-card").forEach((card) => {
      const pubId = card.getAttribute("data-pub-id");
      const pub = state.publicaciones.find((p) => p.id === pubId);
      const mainImg = card.querySelector(".pub-main-image");
      const mainImgWrap = card.querySelector(".pub-main-image-wrapper");
      const thumbs = card.querySelectorAll(".carousel-thumb-btn");

      thumbs.forEach((tb) => {
        tb.onclick = (e) => {
          e.stopPropagation();
          const targetSrc = tb.getAttribute("data-src");
          const idx = parseInt(tb.getAttribute("data-idx"), 10) || 0;

          if (mainImg && targetSrc) {
            mainImg.src = targetSrc;
            mainImg.setAttribute("data-current-idx", idx);
            thumbs.forEach((t) => t.classList.remove("active"));
            tb.classList.add("active");
          }
        };
      });

      // Desktop and Mobile main image click opens full screen Lightbox with zoom & pan
      if (mainImgWrap && pub && pub.imagenes && pub.imagenes.length > 0) {
        mainImgWrap.style.cursor = "zoom-in";
        mainImgWrap.onclick = () => {
          const currentSrc = mainImg ? mainImg.src : pub.imagenes[0];
          let foundIdx = pub.imagenes.findIndex((img) => currentSrc.includes(img) || img.includes(currentSrc));
          if (foundIdx < 0 && mainImg && mainImg.hasAttribute("data-current-idx")) {
            foundIdx = parseInt(mainImg.getAttribute("data-current-idx"), 10) || 0;
          }
          openLightboxViewer(pub.imagenes, foundIdx >= 0 ? foundIdx : 0, pub.titulo);
        };
      }

      // Copy copy button(s)
      card.querySelectorAll(".copy-copy-btn").forEach((copyBtn) => {
        copyBtn.onclick = () => {
          const textToCopy = copyBtn.getAttribute("data-copy");
          if (textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(() => {
              const prevText = copyBtn.innerHTML;
              copyBtn.innerHTML = `${ICONS.check} ¡Copiado!`;
              showToast("Copy copiado al portapapeles", "success");
              setTimeout(() => {
                copyBtn.innerHTML = prevText;
              }, 2000);
            });
          }
        };
      });

      // In Day view, network status chips require clicking 'Editar' to modify as requested
      card.querySelectorAll(".network-status-chip").forEach((chip) => {
        chip.onclick = (e) => {
          e.stopPropagation();
          showToast("Haz clic en 'Editar' para cambiar las redes y enviar el cambio a WhatsApp", "info");
          const editBtn = card.querySelector(".edit-pub-btn");
          if (editBtn) {
            editBtn.classList.remove("pulse-highlight");
            void editBtn.offsetWidth;
            editBtn.classList.add("pulse-highlight");
          }
        };
      });

      // Edit pencil button (Opens modal where user CAN edit and send to WhatsApp)
      const editBtn = card.querySelector(".edit-pub-btn");
      if (editBtn) {
        editBtn.onclick = () => {
          const p = state.publicaciones.find((x) => x.id === pubId);
          if (p) openPostFormModal(p);
        };
      }
    });
  }

  // --- LIGHTBOX IMAGE VIEWER (Con Zoom, Pan, Rueda de ratón, Bloqueo de Scroll y Pantalla Completa) ---
  function openLightboxViewer(images, startIndex = 0, title = "") {
    if (!images || images.length === 0) return;

    let currentIndex = startIndex;
    let scale = 1;
    let panX = 0;
    let panY = 0;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let hasMoved = false;

    // Bloquear scroll de la página totalmente mientras esté abierto
    document.body.classList.add("lightbox-active");
    document.documentElement.classList.add("lightbox-active");

    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.id = "lightbox-overlay";

    overlay.innerHTML = `
      <div class="lightbox-modal">
        <div class="lightbox-header">
          <div class="lightbox-header-left">
            <span class="lightbox-title">${escapeHtml(title || "Vista de Imagen")}</span>
            <span class="lightbox-counter">Imagen <span id="lb-current-num">${currentIndex + 1}</span> de ${images.length}</span>
          </div>

          <div class="lightbox-zoom-toolbar">
            <button class="lb-zoom-btn" id="lb-zoom-out" title="Alejar (o rueda hacia abajo)">
              ${ICONS.zoomOut}
            </button>
            <button class="lb-zoom-badge" id="lb-zoom-badge" title="Clic para restablecer al 100%">
              100%
            </button>
            <button class="lb-zoom-btn" id="lb-zoom-in" title="Acercar (o rueda hacia arriba)">
              ${ICONS.zoomIn}
            </button>
            <button class="lb-zoom-btn lb-btn-reset" id="lb-zoom-reset" title="Restablecer tamaño">
              ${ICONS.zoomReset}
            </button>
          </div>

          <div class="lightbox-header-right">
            <button class="lightbox-close-btn" id="lightbox-close-btn" title="Cerrar imagen (Esc)">
              ${ICONS.close}
            </button>
          </div>
        </div>

        <div class="lightbox-body">
          ${images.length > 1 ? `
            <button class="lightbox-nav-btn prev" id="lightbox-prev-btn" title="Imagen anterior (←)">
              ${ICONS.arrowLeft}
            </button>
          ` : ""}

          <div class="lightbox-img-container" id="lightbox-img-container">
            <img src="${images[currentIndex]}" alt="${escapeHtml(title)}" class="lightbox-img" id="lightbox-main-img" draggable="false" />
          </div>

          ${images.length > 1 ? `
            <button class="lightbox-nav-btn next" id="lightbox-next-btn" title="Siguiente imagen (→)">
              ${ICONS.arrowRight}
            </button>
          ` : ""}
        </div>

        <div class="lightbox-footer">
          <div class="lightbox-hint">
            <span>💡 Rueda para zoom · Arrastra para mover · Doble clic para zoom rápido</span>
          </div>
          ${images.length > 1 ? `
            <div class="lightbox-thumbs-strip">
              ${images.map((img, idx) => `
                <button class="lightbox-thumb ${idx === currentIndex ? "active" : ""}" data-idx="${idx}" title="Ver imagen ${idx + 1}">
                  <img src="${img}" alt="Miniatura ${idx + 1}" />
                </button>
              `).join("")}
            </div>
          ` : ""}
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const imgEl = overlay.querySelector("#lightbox-main-img");
    const containerEl = overlay.querySelector("#lightbox-img-container");
    const zoomBadge = overlay.querySelector("#lb-zoom-badge");
    const counterEl = overlay.querySelector("#lb-current-num");

    function applyTransform(animate = true) {
      if (!imgEl) return;
      imgEl.style.transition = animate ? "transform 0.15s cubic-bezier(0.2, 0, 0, 1)" : "none";
      imgEl.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
      if (zoomBadge) zoomBadge.textContent = `${Math.round(scale * 100)}%`;
      if (scale > 1) {
        imgEl.style.cursor = isDragging ? "grabbing" : "grab";
        if (containerEl) containerEl.classList.add("is-zoomed");
      } else {
        imgEl.style.cursor = "zoom-in";
        if (containerEl) containerEl.classList.remove("is-zoomed");
      }
    }

    function setZoom(newScale, animate = true) {
      const prevScale = scale;
      scale = Math.min(4.5, Math.max(1, newScale));
      if (scale === 1) {
        panX = 0;
        panY = 0;
      } else if (prevScale > 1) {
        const maxPan = 500 * scale;
        panX = Math.max(-maxPan, Math.min(maxPan, panX));
        panY = Math.max(-maxPan, Math.min(maxPan, panY));
      }
      applyTransform(animate);
    }

    function zoomIn(step = 0.35) {
      setZoom(scale + step);
    }

    function zoomOut(step = 0.35) {
      setZoom(scale - step);
    }

    function resetZoom() {
      scale = 1;
      panX = 0;
      panY = 0;
      applyTransform(true);
    }

    function updateView() {
      resetZoom();
      if (imgEl) imgEl.src = images[currentIndex];
      if (counterEl) counterEl.textContent = currentIndex + 1;

      overlay.querySelectorAll(".lightbox-thumb").forEach((t, idx) => {
        if (idx === currentIndex) {
          t.classList.add("active");
          t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        } else {
          t.classList.remove("active");
        }
      });
    }

    // Scroll Wheel: Bloquea el scroll de la página de fondo y hace zoom a la imagen
    overlay.addEventListener("wheel", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.deltaY < 0) {
        zoomIn(0.25);
      } else if (e.deltaY > 0) {
        zoomOut(0.25);
      }
    }, { passive: false });

    // Drag / Pan mouse events
    function onMouseMove(e) {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX;
      const dy = e.clientY - dragStartY;
      if (Math.abs(dx - panX) > 3 || Math.abs(dy - panY) > 3) {
        hasMoved = true;
      }
      if (scale > 1) {
        panX = dx;
        panY = dy;
        applyTransform(false);
      }
    }

    function onMouseUp() {
      if (isDragging) {
        isDragging = false;
        if (scale > 1 && imgEl) {
          imgEl.style.cursor = "grab";
        }
      }
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    if (containerEl) {
      containerEl.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        isDragging = true;
        hasMoved = false;
        dragStartX = e.clientX - panX;
        dragStartY = e.clientY - panY;
        if (scale > 1) {
          imgEl.style.cursor = "grabbing";
          e.preventDefault();
        }
      });

      // Doble clic alterna entre zoom 1x y 2.2x
      containerEl.addEventListener("dblclick", (e) => {
        e.preventDefault();
        if (scale > 1) {
          resetZoom();
        } else {
          scale = 2.2;
          panX = 0;
          panY = 0;
          applyTransform(true);
        }
      });

      // Clic simple en imagen cuando está a 1x amplía a 2x
      imgEl.addEventListener("click", () => {
        if (hasMoved) return;
        if (scale === 1) {
          scale = 2.0;
          panX = 0;
          panY = 0;
          applyTransform(true);
        }
      });
    }

    // Touch events for mobile (Pan + Pinch Zoom + Swipe)
    let initialTouchDistance = 0;
    let initialTouchScale = 1;
    let touchStartX = 0;
    let touchStartY = 0;

    function onTouchStart(e) {
      if (e.touches.length === 2) {
        initialTouchDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        initialTouchScale = scale;
      } else if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        dragStartX = e.touches[0].clientX - panX;
        dragStartY = e.touches[0].clientY - panY;
        isDragging = true;
        hasMoved = false;
      }
    }

    function onTouchMove(e) {
      e.preventDefault(); // Stop body scrolling on mobile
      if (e.touches.length === 2 && initialTouchDistance > 0) {
        const currentDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const factor = currentDist / initialTouchDistance;
        setZoom(initialTouchScale * factor, false);
      } else if (e.touches.length === 1 && isDragging && scale > 1) {
        panX = e.touches[0].clientX - dragStartX;
        panY = e.touches[0].clientY - dragStartY;
        applyTransform(false);
      }
    }

    function onTouchEnd(e) {
      isDragging = false;
      if (e.touches.length === 0 && scale === 1 && e.changedTouches && e.changedTouches.length > 0) {
        const diffX = e.changedTouches[0].clientX - touchStartX;
        if (diffX < -50 && images.length > 1) {
          currentIndex = (currentIndex + 1) % images.length;
          updateView();
        } else if (diffX > 50 && images.length > 1) {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          updateView();
        }
      }
    }

    overlay.addEventListener("touchstart", onTouchStart, { passive: true });
    overlay.addEventListener("touchmove", onTouchMove, { passive: false });
    overlay.addEventListener("touchend", onTouchEnd, { passive: true });

    // Buttons
    const closeBtn = overlay.querySelector("#lightbox-close-btn");
    const zoomInBtn = overlay.querySelector("#lb-zoom-in");
    const zoomOutBtn = overlay.querySelector("#lb-zoom-out");
    const zoomResetBtn = overlay.querySelector("#lb-zoom-reset");
    const prevBtn = overlay.querySelector("#lightbox-prev-btn");
    const nextBtn = overlay.querySelector("#lightbox-next-btn");

    function close() {
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.classList.remove("lightbox-active");
      document.documentElement.classList.remove("lightbox-active");
      overlay.remove();
    }

    if (closeBtn) closeBtn.onclick = close;
    if (zoomInBtn) zoomInBtn.onclick = (e) => { e.stopPropagation(); zoomIn(); };
    if (zoomOutBtn) zoomOutBtn.onclick = (e) => { e.stopPropagation(); zoomOut(); };
    if (zoomResetBtn) zoomResetBtn.onclick = (e) => { e.stopPropagation(); resetZoom(); };
    if (zoomBadge) zoomBadge.onclick = (e) => { e.stopPropagation(); resetZoom(); };

    if (prevBtn) {
      prevBtn.onclick = (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateView();
      };
    }

    if (nextBtn) {
      nextBtn.onclick = (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        updateView();
      };
    }

    overlay.querySelectorAll(".lightbox-thumb").forEach((tb) => {
      tb.onclick = (e) => {
        e.stopPropagation();
        const idx = parseInt(tb.getAttribute("data-idx"), 10);
        if (!isNaN(idx)) {
          currentIndex = idx;
          updateView();
        }
      };
    });

    function handleKey(e) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft" && images.length > 1) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateView();
      } else if (e.key === "ArrowRight" && images.length > 1) {
        currentIndex = (currentIndex + 1) % images.length;
        updateView();
      } else if (e.key === "+" || e.key === "=") {
        zoomIn();
      } else if (e.key === "-" || e.key === "_") {
        zoomOut();
      } else if (e.key === "0" || e.key.toLowerCase() === "r") {
        resetZoom();
      }
    }

    document.addEventListener("keydown", handleKey);

    // Initial render
    applyTransform(false);
  }

  function renderSingleDayPostCard(pub) {
    const isPub = pub.estado === "publicado";
    const images = pub.imagenes || [];
    const mainImgSrc = images.length > 0 ? images[0] : null;

    // Media Column HTML (Solo imagen vertical limpia sin miniaturas debajo)
    let mediaHtml = "";
    if (!mainImgSrc) {
      mediaHtml = `
        <div class="pub-main-image-wrapper">
          <div class="no-image-placeholder">
            ${ICONS.cameraOff}
            <span>Sin imagen</span>
          </div>
        </div>
      `;
    } else {
      mediaHtml = `
        <div class="pub-main-image-wrapper" title="Clic para ver en pantalla completa y hacer zoom">
          <img src="${mainImgSrc}" alt="${escapeHtml(pub.titulo)}" class="pub-main-image" loading="lazy" />
          <div class="pub-image-expand-hint">
            <span class="expand-icon">${ICONS.zoomIn}</span>
            <span>Clic para pantalla completa y zoom</span>
          </div>
        </div>
      `;
    }

    // Networks 3-state chips HTML (Vacía = Pendiente | Plomo = Programada | Verde = Publicada)
    const redes = pub.redes || [];
    const publicadoObj = pub.publicado || {};
    const redesChipsHtml = redes.map((red) => {
      let netStatus = "pendiente";
      const val = publicadoObj[red];
      if (val === true || val === "publicado") {
        netStatus = "publicado";
      } else if (val === "programado") {
        netStatus = "programado";
      } else {
        netStatus = "pendiente";
      }

      return `
        <button type="button" class="network-status-chip status-${netStatus}" data-pub-id="${pub.id}" data-network="${red}" title="Clic para alternar estado: Pendiente -> Programado -> Publicado">
          <span class="social-icon-badge ${red}">${ICONS[red] || ""}</span>
          <span style="text-transform: capitalize;">${red}</span>
          <span class="net-check-box">
            ${netStatus !== "pendiente" ? ICONS.check : ""}
          </span>
          <span class="net-state-label">${netStatus === "publicado" ? "Publicado" : (netStatus === "programado" ? "Programado" : "Pendiente")}</span>
        </button>
      `;
    }).join("");

    // Brand and Type Badges (H&B for collaboration/ambos)
    let brandTag = "🏨 Hotel";
    if (pub.marca === "bungalows") brandTag = "🏡 Bungalows";
    else if (pub.marca === "ambos") brandTag = "🌿 H&B";

    let typeTag = `${ICONS.image} Imagen`;
    if (pub.tipo === "video") typeTag = `${ICONS.video} Video`;
    else if (pub.tipo === "carrusel") typeTag = `📑 Carrusel`;

    // Copy block: 2 copy boxes if Ambos (H&B), 1 copy box if single brand
    let copyBoxesHtml = "";
    if (pub.marca === "ambos") {
      const copyH = pub.copyHotel || pub.copy || "";
      const copyB = pub.copyBungalows || "";
      copyBoxesHtml = `
        <div class="pub-dual-copies-grid">
          <div class="pub-copy-box">
            <div class="copy-box-header">
              <span class="copy-box-label">🏨 Copy Hotel</span>
              ${copyH ? `
                <button type="button" class="btn btn-sm btn-secondary copy-copy-btn" data-copy="${escapeHtml(copyH)}">
                  ${ICONS.copy} Copiar Hotel
                </button>
              ` : ""}
            </div>
            <div class="pub-copy-text ${!copyH ? "empty" : ""}">
              ${copyH ? escapeHtml(copyH) : "Sin copy registrado para Hotel"}
            </div>
          </div>

          <div class="pub-copy-box">
            <div class="copy-box-header">
              <span class="copy-box-label">🏡 Copy Bungalows</span>
              ${copyB ? `
                <button type="button" class="btn btn-sm btn-secondary copy-copy-btn" data-copy="${escapeHtml(copyB)}">
                  ${ICONS.copy} Copiar Bungalows
                </button>
              ` : ""}
            </div>
            <div class="pub-copy-text ${!copyB ? "empty" : ""}">
              ${copyB ? escapeHtml(copyB) : "Sin copy registrado para Bungalows"}
            </div>
          </div>
        </div>
      `;
    } else {
      const copyLabel = pub.marca === "bungalows" ? "Copy para Bungalows" : "Copy para Hotel";
      copyBoxesHtml = `
        <div class="pub-copy-box">
          <div class="copy-box-header">
            <span class="copy-box-label">${copyLabel}</span>
            ${pub.copy ? `
              <button type="button" class="btn btn-sm btn-secondary copy-copy-btn" data-copy="${escapeHtml(pub.copy)}">
                ${ICONS.copy} Copiar Copy
              </button>
            ` : ""}
          </div>
          <div class="pub-copy-text ${!pub.copy ? "empty" : ""}">
            ${pub.copy ? escapeHtml(pub.copy) : "Sin copy registrado"}
          </div>
        </div>
      `;
    }

    return `
      <div class="pub-detail-card ${isPub ? "is-published" : ""}" data-pub-id="${pub.id}">
        <!-- Media (Left/Top) - Oculto en móvil por CSS para dar paso a la caja bajo el copy -->
        <div class="pub-media-col">
          ${mediaHtml}
        </div>

        <!-- Info & Data Box (Right/Bottom) -->
        <div class="pub-info-col">
          <div class="pub-info-topbar">
            <div class="pub-tags-row">
              <span class="badge-brand ${pub.marca}">
                ${brandTag}
              </span>
              <span class="badge-type">
                ${typeTag}
              </span>
              <span class="badge-status ${pub.estado}">
                ${pub.estado}
              </span>
              <span style="font-size: 13px; font-weight: 700; color: var(--text-muted); display: inline-flex; align-items: center; gap: 4px;">
                ${ICONS.clock} ${pub.hora ? pub.hora : "<em>Sin hora</em>"}
              </span>
            </div>

            <div class="pub-action-btns">
              <button class="btn btn-sm btn-secondary edit-pub-btn" title="Editar publicación">
                ${ICONS.edit} Editar
              </button>
            </div>
          </div>

          <div>
            <h2 class="pub-title" title="${escapeHtml(pub.titulo)}">${escapeHtml(pub.titulo)}</h2>
            <p class="pub-description" style="margin-top: 4px;" title="${escapeHtml(pub.descripcion)}">${escapeHtml(pub.descripcion)}</p>
          </div>

          <!-- Copy Box(es) -->
          ${copyBoxesHtml}

          <!-- Caja de Imágenes DEBAJO del Copy (para carrusel o actividades con fotos) -->
          ${images.length > 0 ? `
            <div class="pub-carousel-section">
              <div class="carousel-section-header">
                <span class="carousel-section-title">
                  ${pub.tipo === "carrusel" ? `📑 Imágenes del Carrusel (${images.length})` : `🖼️ Imágenes de la Actividad (${images.length})`}
                </span>
                <span class="carousel-hint">Toca una miniatura para verla en grande</span>
              </div>
              <div class="carousel-thumbnails-strip">
                ${images.map((img, idx) => `
                  <button class="carousel-thumb-btn ${idx === 0 ? "active" : ""}" data-pub-id="${pub.id}" data-idx="${idx}" data-src="${img}" title="Toca para ver como imagen grande ${idx + 1}">
                    <img src="${img}" alt="Imagen ${idx + 1}" class="carousel-thumb-img" />
                    <span class="carousel-thumb-num">${idx + 1}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          ` : ""}

          <!-- Redes & Checklist de Publicado (Interactivo: Clic para alternar Pendiente -> Programado -> Publicado) -->
          <div class="pub-redes-section" style="margin-top: 6px;">
            <span class="section-subtitle">Redes Sociales y Estado (Clic para alternar):</span>
            <div class="redes-checkboxes-grid">
              ${redesChipsHtml || `<span style="font-size: 13px; color: var(--text-light);">No se asignaron redes</span>`}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --- VISTA 4: PENDIENTES ---
  function renderPendientesView() {
    const total = state.pendientes.length;
    const completed = state.pendientes.filter((p) => p.hecho).length;
    const pending = total - completed;

    let itemsHtml = "";
    if (state.pendientes.length === 0) {
      itemsHtml = `
        <div class="empty-state">
          <div class="empty-state-title">No hay pendientes registrados</div>
          <div class="empty-state-desc">Usa esta sección para anotar ideas pendientes, tomas fotográficas requeridas o tareas de redes sin fecha obligatoria.</div>
          <button class="btn btn-primary" id="add-first-task-btn" style="margin-top: 12px;">
            ${ICONS.plus} Agregar Pendiente
          </button>
        </div>
      `;
    } else {
      itemsHtml = state.pendientes.map((item) => `
        <div class="pendiente-card ${item.hecho ? "is-done" : ""}" data-id="${item.id}">
          <div class="pendiente-checkbox-wrap">
            <input type="checkbox" class="pendiente-checkbox" ${item.hecho ? "checked" : ""} title="Marcar como realizado" />
          </div>
          <div class="pendiente-content">
            <div class="pendiente-title">${escapeHtml(item.titulo)}</div>
            ${item.descripcion ? `<div class="pendiente-desc">${escapeHtml(item.descripcion)}</div>` : ""}
            <div class="pendiente-meta">
              <span>Creado: ${escapeHtml(formatShortDateFriendly(item.fechaCreacion) || item.fechaCreacion || "Reciente")}</span>
            </div>
            <div class="pendiente-status-line ${item.hecho ? "status-done" : "status-pending"}">
              ${item.hecho
                ? `Realizado el ${escapeHtml(formatShortDateFriendly(item.fechaRealizado) || formatShortDateFriendly(formatIsoDate(state.currentDate)))}`
                : `Pendiente a realizarse`
              }
            </div>
          </div>
          <div class="pendiente-actions">
            <button class="btn btn-sm btn-secondary delete-task-btn" title="Eliminar pendiente" style="padding: 5px 9px;">
              ${ICONS.close}
            </button>
          </div>
        </div>
      `).join("");
    }

    updateDateNavigation();

    const html = `
      <div class="pendientes-container">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
          <div>
            <h1 class="view-title" style="font-size: 17px; font-weight: 800; color: var(--text-main);">Tareas y Pendientes de Redes</h1>
            <span class="view-subtitle" style="font-size: 12px; color: var(--text-muted);">${pending} pendientes activos · ${completed} realizados</span>
          </div>
          <button class="btn btn-primary btn-sm" id="add-task-top-btn" style="padding: 7px 14px; font-size: 13px;">
            ${ICONS.plus} Agregar Pendiente
          </button>
        </div>

        <div class="pendientes-list">
          ${itemsHtml}
        </div>
      </div>
    `;

    const appView = document.getElementById("app-view");
    appView.innerHTML = html;

    // Attach events
    const addBtn1 = document.getElementById("add-task-top-btn");
    const addBtn2 = document.getElementById("add-first-task-btn");
    if (addBtn1) addBtn1.onclick = () => openTaskFormModal();
    if (addBtn2) addBtn2.onclick = () => openTaskFormModal();

    document.querySelectorAll(".pendiente-card").forEach((card) => {
      const id = card.getAttribute("data-id");
      const item = state.pendientes.find((p) => p.id === id);
      if (!item) return;

      const cb = card.querySelector(".pendiente-checkbox");
      if (cb) {
        cb.onchange = (e) => {
          item.hecho = e.target.checked;
          if (item.hecho) {
            item.fechaRealizado = formatIsoDate(state.currentDate);
          } else {
            delete item.fechaRealizado;
          }
          updatePendingBadges();
          renderPendientesView();
          showToast(item.hecho ? `Marcado como realizado (${item.fechaRealizado})` : "Marcado como pendiente a realizarse", "info");
        };
      }

      const delBtn = card.querySelector(".delete-task-btn");
      if (delBtn) {
        delBtn.onclick = () => {
          state.pendientes = state.pendientes.filter((p) => p.id !== id);
          updatePendingBadges();
          renderPendientesView();
          showToast("Pendiente eliminado");
        };
      }
    });
  }

  // --- MODAL: EDIT / NEW POST FORM ---
  function openPostFormModal(existingPub = null, defaultDateStr = null) {
    const isEdit = Boolean(existingPub);
    const pub = existingPub || {
      id: "pub-" + Date.now().toString(36),
      grupoId: "grp-" + Date.now().toString(36),
      fecha: defaultDateStr || formatIsoDate(state.currentDate),
      hora: "",
      titulo: "",
      descripcion: "",
      copy: "",
      copyHotel: "",
      copyBungalows: "",
      tipo: "imagen",
      marca: "hotel",
      redes: ["facebook", "instagram", "tiktok", "youtube"],
      imagenes: [],
      estado: "idea",
      publicado: {}
    };

    const isAmbos = pub.marca === "ambos";

    const modalHtml = `
      <div class="modal-overlay" id="post-modal">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title">
              <span style="display:inline-flex;align-items:center;width:15px;height:15px;color:var(--primary);">${isEdit ? ICONS.edit : ICONS.plus}</span>
              <span>${isEdit ? "Editar Actividad" : "Nueva Actividad"}</span>
            </div>
            <button class="close-btn" id="close-post-modal">${ICONS.close}</button>
          </div>

          <form id="post-form">
            <div class="modal-body">
              <div class="form-group">
                <label class="form-label">Título de la Actividad</label>
                <input type="text" id="post-titulo" class="form-control" placeholder="Ej: Fotos en terraza de bungalow, Reel cocteles..." value="${escapeHtml(pub.titulo)}" />
              </div>

              <div class="form-group">
                <label class="form-label">Detalle / Enfoque de la Actividad</label>
                <textarea id="post-descripcion" class="form-control" placeholder="Explica de qué trata la actividad, objetivo y mensaje principal">${escapeHtml(pub.descripcion)}</textarea>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label">Fecha de publicación</label>
                  <input type="date" id="post-fecha" class="form-control" value="${pub.fecha}" />
                </div>
                <div class="form-group">
                  <label class="form-label">Hora sugerida</label>
                  <input type="time" id="post-hora" class="form-control" value="${pub.hora || ""}" />
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                <div class="form-group">
                  <label class="form-label">Tipo de Contenido</label>
                  <select id="post-tipo" class="form-control">
                    <option value="imagen" ${pub.tipo === "imagen" ? "selected" : ""}>🖼️ Imagen / Fotografía</option>
                    <option value="carrusel" ${pub.tipo === "carrusel" ? "selected" : ""}>📑 Carrusel (múltiples fotos)</option>
                    <option value="video" ${pub.tipo === "video" ? "selected" : ""}>🎬 Video / Reel / TikTok</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Estado</label>
                  <select id="post-estado" class="form-control">
                    <option value="idea" ${pub.estado === "idea" ? "selected" : ""}>💡 Idea</option>
                    <option value="programado" ${pub.estado === "programado" ? "selected" : ""}>📅 Programado</option>
                    <option value="publicado" ${pub.estado === "publicado" ? "selected" : ""}>✅ Publicado</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Marca a promocionar</label>
                <div class="radio-cards-group" id="brand-radios">
                  <div class="radio-card ${pub.marca === "hotel" ? "selected" : ""}" data-val="hotel">
                    🏨 Hotel
                  </div>
                  <div class="radio-card ${pub.marca === "bungalows" ? "selected" : ""}" data-val="bungalows">
                    🏡 Bungalows
                  </div>
                  <div class="radio-card ${pub.marca === "ambos" ? "selected" : ""}" data-val="ambos">
                    🌿 Ambos (H&B)
                  </div>
                </div>
                <input type="hidden" id="post-marca" value="${pub.marca || "hotel"}" />
              </div>

              <div class="form-group">
                <label class="form-label">Redes Sociales y Estado de Publicación</label>
                <div style="font-size: 11.5px; color: var(--text-muted); margin-bottom: 8px;">
                  Toca cada red para alternar: <strong>No incluida ➔ Pendiente (vacía) ➔ Programada (plomo) ➔ Publicada (verde)</strong>
                </div>
                <div class="modal-networks-selector-grid" id="modal-networks-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                  ${["facebook", "instagram", "tiktok", "youtube"].map((net) => {
                    const isIncluded = (pub.redes || []).includes(net);
                    const pubVal = pub.publicado ? pub.publicado[net] : undefined;
                    let currentStatus = "no";
                    if (isIncluded) {
                      if (pubVal === true || pubVal === "publicado") currentStatus = "publicado";
                      else if (pubVal === "programado") currentStatus = "programado";
                      else currentStatus = "pendiente";
                    }
                    let badgeLabel = "✕ No incluida";
                    if (currentStatus === "publicado") badgeLabel = "✓ Publicada (Verde)";
                    else if (currentStatus === "programado") badgeLabel = "✓ Programada (Plomo)";
                    else if (currentStatus === "pendiente") badgeLabel = "⚪ Pendiente (Vacía)";

                    return `
                      <div class="modal-net-item ${currentStatus !== "no" ? "active" : ""}" data-net="${net}" data-status="${currentStatus}">
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <span class="social-icon-badge ${net}">${ICONS[net] || ""}</span>
                          <span style="font-weight: 700; text-transform: capitalize; font-size: 13px;">${net}</span>
                        </div>
                        <span class="modal-net-status-badge status-${currentStatus}">
                          ${badgeLabel}
                        </span>
                      </div>
                    `;
                  }).join("")}
                </div>
              </div>

              <!-- Single Copy (Hotel o Bungalows) -->
              <div class="form-group" id="single-copy-group" style="${isAmbos ? "display: none;" : ""}">
                <label class="form-label" id="single-copy-label">${pub.marca === "bungalows" ? "Copy para Bungalows" : "Copy para Hotel"}</label>
                <textarea id="post-copy" class="form-control" rows="3" placeholder="Redacta el copy con hashtags y llamados a la acción...">${escapeHtml(pub.copy || "")}</textarea>
              </div>

              <!-- Dual Copies (Ambos H&B) -->
              <div class="form-group" id="dual-copies-group" style="${isAmbos ? "" : "display: none;"}">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                  <div>
                    <label class="form-label">🏨 Copy para Hotel</label>
                    <textarea id="post-copy-hotel" class="form-control" rows="3" placeholder="Redacta el copy para Hotel...">${escapeHtml(pub.copyHotel || pub.copy || "")}</textarea>
                  </div>
                  <div>
                    <label class="form-label">🏡 Copy para Bungalows</label>
                    <textarea id="post-copy-bungalows" class="form-control" rows="3" placeholder="Redacta el copy para Bungalows...">${escapeHtml(pub.copyBungalows || "")}</textarea>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Imagen o referencia visual</label>
                <input type="text" id="post-imagenes" class="form-control" placeholder="images/bungalow-deluxe.svg, images/piscina-selva.svg" value="${(pub.imagenes || []).join(", ")}" />
                <span style="font-size: 11px; color: var(--text-muted); margin-top: 4px; display: block;">
                  Ruta en la carpeta <code>/images</code> o déjalo vacío si aún no hay imagen.
                </span>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" id="cancel-post-form">Cancelar</button>
              <button type="submit" class="btn btn-primary" style="background-color: #15803d; border-color: #15803d; display: inline-flex; align-items: center; gap: 6px; padding: 9px 18px; font-weight: 700;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                <span>Enviar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    const wrapper = document.createElement("div");
    wrapper.innerHTML = modalHtml;
    document.body.appendChild(wrapper.firstElementChild);

    const postModal = document.getElementById("post-modal");

    function close() {
      document.removeEventListener("keydown", handleEsc);
      postModal.remove();
    }

    function handleEsc(e) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", handleEsc);

    postModal.onclick = (e) => {
      if (e.target === postModal) close();
    };

    document.getElementById("close-post-modal").onclick = close;
    document.getElementById("cancel-post-form").onclick = close;

    // Brand radio selection & dynamic copy switching
    const brandRadios = document.querySelectorAll("#brand-radios .radio-card");
    const brandHidden = document.getElementById("post-marca");
    brandRadios.forEach((card) => {
      card.onclick = () => {
        brandRadios.forEach((c) => c.classList.remove("selected"));
        card.classList.add("selected");
        const val = card.getAttribute("data-val");
        brandHidden.value = val;

        const singleGroup = document.getElementById("single-copy-group");
        const dualGroup = document.getElementById("dual-copies-group");
        const singleLabel = document.getElementById("single-copy-label");

        if (val === "ambos") {
          if (singleGroup) singleGroup.style.display = "none";
          if (dualGroup) dualGroup.style.display = "block";
        } else {
          if (singleGroup) singleGroup.style.display = "block";
          if (dualGroup) dualGroup.style.display = "none";
          if (singleLabel) {
            singleLabel.textContent = val === "bungalows" ? "Copy para Bungalows" : "Copy para Hotel";
          }
        }
      };
    });

    // Networks state items toggle (No incluida -> Pendiente -> Programada -> Publicada -> No incluida)
    const netItems = document.querySelectorAll("#modal-networks-grid .modal-net-item");
    netItems.forEach((item) => {
      item.onclick = () => {
        const curStatus = item.getAttribute("data-status");
        let nextStatus = "pendiente";
        if (curStatus === "no") nextStatus = "pendiente";
        else if (curStatus === "pendiente") nextStatus = "programado";
        else if (curStatus === "programado") nextStatus = "publicado";
        else if (curStatus === "publicado") nextStatus = "no";

        item.setAttribute("data-status", nextStatus);
        if (nextStatus !== "no") {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }

        const badge = item.querySelector(".modal-net-status-badge");
        if (badge) {
          badge.className = `modal-net-status-badge status-${nextStatus}`;
          let label = "✕ No incluida";
          if (nextStatus === "publicado") label = "✓ Publicada (Verde)";
          else if (nextStatus === "programado") label = "✓ Programada (Plomo)";
          else if (nextStatus === "pendiente") label = "⚪ Pendiente (Vacía)";
          badge.textContent = label;
        }
      };
    });

    // Form submit
    document.getElementById("post-form").onsubmit = (e) => {
      e.preventDefault();

      const titulo = document.getElementById("post-titulo").value.trim();
      const descripcion = document.getElementById("post-descripcion").value.trim();
      const fecha = document.getElementById("post-fecha").value;
      const hora = document.getElementById("post-hora").value.trim();
      const tipo = document.getElementById("post-tipo").value;
      const estado = document.getElementById("post-estado").value;
      const marcaVal = brandHidden.value;
      const imgsRaw = document.getElementById("post-imagenes").value.trim();
      const imagenes = imgsRaw ? imgsRaw.split(",").map((s) => s.trim()).filter(Boolean) : [];

      const selectedNetworks = [];
      const updatedPublicado = {};
      netItems.forEach((item) => {
        const net = item.getAttribute("data-net");
        const status = item.getAttribute("data-status");
        if (status !== "no") {
          selectedNetworks.push(net);
          updatedPublicado[net] = status;
        }
      });

      pub.titulo = titulo || "Actividad sin título";
      pub.descripcion = descripcion;
      pub.fecha = fecha || formatIsoDate(state.currentDate);
      pub.hora = hora;
      pub.tipo = tipo;
      pub.marca = marcaVal;
      pub.redes = selectedNetworks;
      pub.publicado = updatedPublicado;
      pub.imagenes = imagenes;

      // Automatically sync overall post status based on networks
      const allPub = selectedNetworks.length > 0 && selectedNetworks.every((r) => updatedPublicado[r] === "publicado");
      const anyProg = selectedNetworks.some((r) => updatedPublicado[r] === "programado" || updatedPublicado[r] === "publicado");
      if (allPub) pub.estado = "publicado";
      else if (anyProg) pub.estado = "programado";
      else pub.estado = estado || "idea";

      if (marcaVal === "ambos") {
        const copyH = document.getElementById("post-copy-hotel") ? document.getElementById("post-copy-hotel").value.trim() : "";
        const copyB = document.getElementById("post-copy-bungalows") ? document.getElementById("post-copy-bungalows").value.trim() : "";
        pub.copyHotel = copyH;
        pub.copyBungalows = copyB;
        pub.copy = copyH || copyB || "";
      } else {
        const copySingle = document.getElementById("post-copy") ? document.getElementById("post-copy").value.trim() : "";
        pub.copy = copySingle;
        delete pub.copyHotel;
        delete pub.copyBungalows;
      }

      if (!isEdit) {
        state.publicaciones.push(pub);
      }

      // Generate WhatsApp message
      sendPostWhatsApp(pub, isEdit);

      close();
      render();
      showToast(isEdit ? "Actividad actualizada y enviada a WhatsApp" : "Actividad guardada y enviada a WhatsApp", "success");
    };
  }

  // --- MODAL: PENDIENTE FORM (ADD NEW) ---
  function openTaskFormModal() {
    const task = {
      id: "pen-" + Date.now().toString(36),
      titulo: "",
      descripcion: "",
      hecho: false,
      fechaCreacion: formatIsoDate(state.currentDate)
    };

    const modalHtml = `
      <div class="modal-overlay" id="task-modal">
        <div class="modal-content" style="max-width: 500px;">
          <div class="modal-header">
            <div class="modal-title">
              <span style="display:inline-flex;align-items:center;width:15px;height:15px;color:var(--primary);">${ICONS.plus}</span>
              <span>Nuevo Pendiente de Redes</span>
            </div>
            <button class="close-btn" id="close-task-modal" title="Cerrar (X)">${ICONS.close}</button>
          </div>

          <form id="task-form">
            <div class="modal-body">
              <div class="form-group">
                <label class="form-label">Título del pendiente</label>
                <input type="text" id="task-titulo" class="form-control" placeholder="Ej: Tomar fotos del nuevo desayuno amazónico" value="" />
              </div>

              <div class="form-group">
                <label class="form-label">Descripción</label>
                <textarea id="task-descripcion" class="form-control" rows="3" placeholder="Detalles, indicaciones, coordinaciones..."></textarea>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" id="cancel-task-btn">Cancelar</button>
              <button type="submit" class="btn btn-primary" style="background-color: #15803d; border-color: #15803d; display: inline-flex; align-items: center; gap: 6px; padding: 9px 18px; font-weight: 700;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                <span>Enviar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    const wrapper = document.createElement("div");
    wrapper.innerHTML = modalHtml;
    document.body.appendChild(wrapper.firstElementChild);

    const taskModal = document.getElementById("task-modal");
    function close() {
      document.removeEventListener("keydown", handleEsc);
      taskModal.remove();
    }

    function handleEsc(e) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", handleEsc);

    taskModal.onclick = (e) => {
      if (e.target === taskModal) close();
    };

    document.getElementById("close-task-modal").onclick = close;
    document.getElementById("cancel-task-btn").onclick = close;

    document.getElementById("task-form").onsubmit = (e) => {
      e.preventDefault();
      const titulo = document.getElementById("task-titulo").value.trim() || "Pendiente sin título";
      const descripcion = document.getElementById("task-descripcion").value.trim();

      task.titulo = titulo;
      task.descripcion = descripcion;

      state.pendientes.unshift(task);

      updatePendingBadges();
      close();
      renderPendientesView();
      sendTaskWhatsApp(task, false);
      showToast("Pendiente guardado y enviado a WhatsApp", "success");
    };
  }

  // --- WHATSAPP MESSAGES GENERATION ---
  function getWhatsAppUrl(text) {
    const phone = "51936574554";
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
  }

  function sendPostWhatsApp(pub, isEdit = false) {
    const redes = pub.redes || [];
    const publicadoObj = pub.publicado || {};
    const redesDetails = redes.map((r) => {
      const val = publicadoObj[r];
      let stName = "⚪ Pendiente a realizarse";
      if (val === true || val === "publicado") stName = "✅ Publicado";
      else if (val === "programado") stName = "⏳ Programado";
      return `  • ${r.toUpperCase()}: ${stName}`;
    }).join("\n") || "  • No especificado";

    const headerTitle = isEdit ? "ACTUALIZACIÓN DE ACTIVIDAD" : "NUEVA ACTIVIDAD PLANIFICADA";

    let brandText = "Hotel";
    let copyBlock = "";
    if (pub.marca === "bungalows") {
      brandText = "Bungalows";
      copyBlock = `💬 *Copy sugerido:*\n${pub.copy || "Sin copy"}`;
    } else if (pub.marca === "ambos") {
      brandText = "H&B (Colaboración Hotel & Bungalows)";
      copyBlock = [
        `🏨 *Copy Hotel:*`,
        `${pub.copyHotel || pub.copy || "Sin copy"}`,
        ``,
        `🏡 *Copy Bungalows:*`,
        `${pub.copyBungalows || pub.copy || "Sin copy"}`
      ].join("\n");
    } else {
      brandText = "Hotel";
      copyBlock = `💬 *Copy sugerido:*\n${pub.copy || "Sin copy"}`;
    }

    const msg = [
      `🌿 *GREEN PARADISE HOTEL & BUNGALOWS*`,
      `📢 *${headerTitle}*`,
      ``,
      `📌 *Título:* ${pub.titulo}`,
      `🏷️ *Marca:* ${brandText}`,
      `📅 *Fecha:* ${pub.fecha}`,
      `⏰ *Hora:* ${pub.hora ? pub.hora : "Sin hora definida"}`,
      `🎬 *Tipo:* ${pub.tipo === "video" ? "Video / Reel / TikTok" : (pub.tipo === "carrusel" ? "Carrusel" : "Imagen / Fotografía")}`,
      `🌐 *Redes Sociales y Estado:*`,
      `${redesDetails}`,
      `📊 *Estado General:* ${(pub.estado || "idea").toUpperCase()}`,
      ``,
      `📝 *Descripción:*`,
      `${pub.descripcion || "Sin descripción"}`,
      ``,
      copyBlock,
      ``,
      `🖼️ *Imágenes / Referencia:*`,
      `${(pub.imagenes && pub.imagenes.length > 0) ? pub.imagenes.join("\n") : "Sin imagen asignada"}`,
      ``,
      `📍 _Tingo María, Huánuco - Perú_`
    ].join("\n");

    const url = getWhatsAppUrl(msg);
    window.open(url, "_blank");
  }

  function sendNewIdeaBothWhatsApp({ titulo, descripcion, fecha, hora, tipo, redes, copy, imagenes }) {
    const redesStr = (redes || []).map((r) => r.toUpperCase()).join(", ") || "No especificado";

    const msg = [
      `🌿 *GREEN PARADISE HOTEL & BUNGALOWS*`,
      `📢 *NUEVA IDEA DE CONTENIDO (HOTEL Y BUNGALOWS)*`,
      `⚠️ *NOTA:* Crear dos publicaciones separadas (1 para Hotel y 1 para Bungalows con el mismo grupoId)`,
      ``,
      `📌 *Título:* ${titulo}`,
      `📅 *Fecha:* ${fecha}`,
      `⏰ *Hora:* ${hora ? hora : "Sin hora definida"}`,
      `🏷️ *Tipo:* ${tipo === "video" ? "Video / Reel" : "Imagen"}`,
      `🌐 *Redes:* ${redesStr}`,
      ``,
      `📝 *Descripción:*`,
      `${descripcion}`,
      ``,
      `💬 *Copy sugerido:*`,
      `${copy ? copy : "Sin copy"}`,
      ``,
      `🖼️ *Imágenes / Referencia:*`,
      `${(imagenes && imagenes.length > 0) ? imagenes.join("\n") : "Sin imagen asignada"}`,
      ``,
      `📍 _Tingo María, Huánuco - Perú_`
    ].join("\n");

    const url = getWhatsAppUrl(msg);
    window.open(url, "_blank");
  }

  function sendTaskWhatsApp(item, isEdit = false) {
    const headerTitle = isEdit ? "ACTUALIZACIÓN DE TAREA / PENDIENTE" : "NUEVA TAREA / PENDIENTE DE REDES";
    const msg = [
      `🌿 *GREEN PARADISE HOTEL & BUNGALOWS*`,
      `📋 *${headerTitle}*`,
      ``,
      `📌 *Título:* ${item.titulo}`,
      `📝 *Descripción:* ${item.descripcion || "Sin detalles adicionales"}`,
      `📅 *Fecha de registro:* ${formatShortDateFriendly(item.fechaCreacion) || item.fechaCreacion || "Reciente"}`,
      `📊 *Estado:* ${item.hecho ? "✅ Realizado" : "⏳ Pendiente a realizarse"}`,
      ``,
      `📍 _Tingo María, Huánuco - Perú_`
    ].join("\n");

    const url = getWhatsAppUrl(msg);
    window.open(url, "_blank");
  }

  function sendAllPendingWhatsApp() {
    const activeTasks = state.pendientes.filter((p) => !p.hecho);
    if (activeTasks.length === 0) {
      showToast("No hay pendientes activos para notificar", "info");
      return;
    }

    const tasksListStr = activeTasks.map((t, idx) => `${idx + 1}. *${t.titulo}*\n   _${t.descripcion || "Sin detalle"}_`).join("\n\n");

    const msg = [
      `🌿 *GREEN PARADISE HOTEL & BUNGALOWS*`,
      `📋 *RESUMEN DE PENDIENTES DE REDES (${activeTasks.length})*`,
      ``,
      tasksListStr,
      ``,
      `📍 _Tingo María, Huánuco - Perú_`
    ].join("\n");

    const url = getWhatsAppUrl(msg);
    window.open(url, "_blank");
  }

  // --- EXPORT JSON ---
  function exportJson() {
    const dataToExport = {
      config: state.config,
      publicaciones: state.publicaciones,
      pendientes: state.pendientes
    };

    const jsonStr = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "calendar.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast("Archivo calendar.json descargado con éxito", "success");
  }

  // --- HTML ESCAPE HELPER ---
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // --- ROUTER ---
  function handleRouting() {
    const hash = window.location.hash || "#/mes";
    const parts = hash.slice(2).split("/");
    const primaryRoute = parts[0] || "mes";
    state.activeRoute = primaryRoute;

    // Update active nav links for sidebar and mobile nav
    document.querySelectorAll(".sidebar-nav-link, .nav-link, .mobile-nav-item").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href.startsWith(`#/${primaryRoute}`)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    if (primaryRoute === "mes") {
      renderMonthView();
    } else if (primaryRoute === "semana") {
      renderWeekView();
    } else if (primaryRoute === "dia") {
      const targetDate = parts[1] || state.selectedDayDateStr || formatIsoDate(state.currentDate);
      state.selectedDayDateStr = targetDate;
      renderSelectedDayView(targetDate);
    } else if (primaryRoute === "pendientes") {
      renderPendientesView();
    } else {
      window.location.hash = "#/mes";
    }
  }

  function render() {
    handleRouting();
  }

  // Bind the + icons beside Pendientes
  function setupNavActivityButtons() {
    const addBtn = document.getElementById("add-activity-btn");
    if (addBtn) {
      addBtn.onclick = (e) => {
        e.preventDefault();
        openPostFormModal(null);
      };
    }
    const mobAddBtn = document.getElementById("mob-add-activity-btn");
    if (mobAddBtn) {
      mobAddBtn.onclick = (e) => {
        e.preventDefault();
        openPostFormModal(null);
      };
    }
  }

  // Mobile date popover toggle
  function setupMobileDateToggle() {
    const mobCalBtn = document.getElementById("mob-calendar-nav-btn");
    if (!mobCalBtn) return;

    mobCalBtn.onclick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      isMobileDateNavOpen = !isMobileDateNavOpen;
      syncMobileDateNavState();
    };
  }

  // --- INITIALIZATION ---
  function init() {
    window.addEventListener("hashchange", handleRouting);
    setupNavActivityButtons();
    setupMobileDateToggle();
    loadData();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
