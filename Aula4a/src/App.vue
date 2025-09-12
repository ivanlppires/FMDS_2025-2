<template>
  <div class="navbar">
    <router-link to="/" class="nav-button" >Home</router-link>
    <router-link to="/clientes" class="nav-button">Clientes</router-link>
    <router-link to="/produtos"class="nav-button">Produtos</router-link>
  </div>
  <div class="content">
    <p><router-view /></p>
  </div>
  <div class="footer">
    <div class="footer-content">
      <p>Copyright © 2025</p>
      <p>Versão do sistema: 1.0.0</p>
    </div>
  </div>
</template>
<style>
:root{
  --bg: #0b1220;
  --panel: #0f1724;
  --muted: #9aa4b2;
  --accent: #60a5fa;
  --text: #e6eef8;
  --button-hover: rgba(255,255,255,0.06);
}

html, body, #app {
  height: 100%;
  margin: 0;
  background-color: var(--bg);
  color: var(--text);
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* Use higher specificity and !important to enforce dark theme over later rules */
body .navbar,
body .footer {
  background-color: var(--panel) !important;
  color: var(--text) !important;
  border-top: 1px solid rgba(255,255,255,0.03);
}

body .nav-button {
  background: transparent !important;
  color: var(--text) !important;
  border-radius: 6px;
  padding: 6px 10px;
  transition: background-color .12s ease, transform .06s ease;
}

body .nav-button:hover,
body .nav-button:focus {
  background-color: var(--button-hover) !important;
  transform: translateY(-1px);
  outline: none;
}

.content {
  background: transparent;
  color: var(--text);
}

/* Footer text styling */
.footer-content {
  text-align: center;
  color: var(--muted);
  font-size: 0.95rem;
}

/* make layout a column so footer stays at the bottom */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* let main content grow to push footer down */
.content {
  flex: 1 1 auto;
}
.navbar {
  background-color: #333;
  color: white;
  padding: 10px;
}

.nav-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin: 0 10px;
  text-decoration: none !important;
}

.content {
  padding: 20px;
}

.footer {
  background-color: #333;
  color: white;
  padding: 10px;
}

.footer-content {
  text-align: center;
}
</style>