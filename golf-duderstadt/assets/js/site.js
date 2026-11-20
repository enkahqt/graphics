(function () {
  var D = window.GCRR || {};
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  /* Mobile navigation */
  var toggle = $(".nav-toggle"), nav = $(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  /* Platzstatus */
  document.querySelectorAll("[data-status]").forEach(function (el) {
    if (!D.status) return;
    var html = '<header><h3>Platzstatus</h3><small>Stand ' + esc(D.status.updated) + '</small></header><ul class="status-list">';
    D.status.items.forEach(function (i) {
      html += '<li><span>' + esc(i.label) + '</span><span class="pill ' + esc(i.state) + '">' + esc(i.text) + '</span></li>';
    });
    html += '</ul>';
    el.innerHTML = html;
    var note = el.parentNode.querySelector("[data-status-notice]");
    if (note && D.status.notice) { note.textContent = D.status.notice; note.hidden = false; }
  });

  /* News */
  document.querySelectorAll("[data-news]").forEach(function (el) {
    var limit = parseInt(el.getAttribute("data-news"), 10) || 99;
    el.innerHTML = (D.news || []).slice(0, limit).map(function (n) {
      var d = new Date(n.date + "T12:00:00");
      var ds = d.toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" });
      return '<article class="news-item"><time datetime="' + esc(n.date) + '">' + ds + '</time><div><span class="news-cat">' + esc(n.cat) + '</span><h4>' + esc(n.title) + '</h4><p>' + esc(n.text) + '</p></div></article>';
    }).join("");
  });

  /* Hole explorer */
  var ex = $("#hole-explorer");
  if (ex && D.holes) {
    var tabs = $(".hole-tabs", ex), img = $(".hole-figure img", ex);
    var cur = 0;
    D.holes.forEach(function (h, i) {
      var b = document.createElement("button");
      b.type = "button"; b.textContent = h.n; b.setAttribute("role", "tab");
      b.setAttribute("aria-label", "Loch " + h.n);
      b.addEventListener("click", function () { show(i); });
      tabs.appendChild(b);
    });
    function show(i) {
      cur = (i + D.holes.length) % D.holes.length;
      var h = D.holes[cur];
      tabs.querySelectorAll("button").forEach(function (b, j) { b.setAttribute("aria-selected", j === cur); });
      $("[data-h=title]", ex).textContent = "Loch " + h.n;
      $("[data-h=par]", ex).textContent = h.par;
      $("[data-h=hcp]", ex).textContent = h.hcp;
      $("[data-h=yellow]", ex).textContent = h.yellow + " m";
      $("[data-h=red]", ex).textContent = h.red + " m";
      $("[data-h=text]", ex).textContent = h.text;
      img.src = "assets/img/holes/loch-" + String(h.n).padStart(2, "0") + ".webp";
      img.alt = "Bahnskizze Loch " + h.n + ", Par " + h.par;
    }
    $("[data-h=prev]", ex).addEventListener("click", function () { show(cur - 1); });
    $("[data-h=next]", ex).addEventListener("click", function () { show(cur + 1); });
    show(0);
  }

  /* Scorecard */
  var sc = $("#scorecard");
  if (sc && D.holes) {
    var rows = "", sum = function (a, k) { return a.reduce(function (s, h) { return s + h[k]; }, 0); };
    var block = function (list, label) {
      list.forEach(function (h) {
        rows += "<tr><td>" + h.n + '</td><td class="num">' + h.par + '</td><td class="num">' + h.yellow + '</td><td class="num">' + h.red + '</td><td class="num">' + h.hcp + "</td></tr>";
      });
      rows += '<tr><td><b>' + label + '</b></td><td class="num"><b>' + sum(list, "par") + '</b></td><td class="num"><b>' + sum(list, "yellow") + '</b></td><td class="num"><b>' + sum(list, "red") + '</b></td><td></td></tr>';
    };
    block(D.holes.slice(0, 9), "Out");
    block(D.holes.slice(9), "In");
    sc.querySelector("tbody").innerHTML = rows;
    sc.querySelector("tfoot").innerHTML = '<tr><td>Gesamt</td><td class="num">' + sum(D.holes, "par") + '</td><td class="num">' + sum(D.holes, "yellow") + '</td><td class="num">' + sum(D.holes, "red") + '</td><td></td></tr>';
  }

  /* Reveal on scroll */
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .12 });
    els.forEach(function (e) { io.observe(e); });
  } else { els.forEach(function (e) { e.classList.add("in"); }); }

  var y = $("[data-year]"); if (y) y.textContent = new Date().getFullYear();
})();
