// Browser stand-in for the Portal Foundry host context.
(function () {
  var ctx = {
    currentUser: null,
    log: { error: function (m, e) { console.error(m, e); return Promise.resolve({}); } },
    ui: {
      images: { load: function (s) {
        var blob = (s && s.content) ? new Blob([s.content], { type: s.mimeType }) : null;
        if (!blob) return Promise.resolve({ url: String(s), destroy: function () {} });
        var url = URL.createObjectURL(blob);
        return Promise.resolve({ url: url, destroy: function () { URL.revokeObjectURL(url); } });
      } },
      links: { open: function (u) { window.open(u, '_blank', 'noopener'); return Promise.resolve(); } },
      downloads: { save: function (s) {
        var a = document.createElement('a');
        var url = URL.createObjectURL(new Blob([s.content], { type: s.mimeType }));
        a.href = url; a.download = s.name; document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
        return Promise.resolve();
      } }
    }
  };
  var mod = globalThis.__portalApplicationModule;
  mod.default.run(ctx).catch(function (e) {
    console.error(e);
    document.getElementById('app').textContent = 'Sorry — the site could not start. Please refresh the page.';
  });
})();
