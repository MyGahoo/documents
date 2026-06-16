(function () {
  'use strict';

  var rootEl;

  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------
  var state = {
    activeDevice: 'medium',
    groups: [
      {
        id: 1,
        name: 'Power Zones',
        type: 'fixed',
        colors: ['#808080', '#0000ff', '#00ff00', '#ffff00', '#ff8000', '#ff0000', '#800080'],
      },
      {
        id: 2,
        name: 'HR Zones',
        type: 'fixed',
        colors: ['#808080', '#0000ff', '#00ff00', '#ffff00', '#ff0000'],
      },
      {
        id: 3,
        name: 'Custom',
        type: 'variable',
        colors: ['#ffffff'],
      },
    ],
    nextId: 4,
  };

  // ---------------------------------------------------------------------------
  // Device definitions
  // ---------------------------------------------------------------------------
  var DEVICES = {
    small:  { label: '520P / 820',            rows: 3, w: 160, h: 160 },
    medium: { label: '530 / 540 / 830 / 840', rows: 4, w: 192, h: 160 },
    large:  { label: '10xx / Explorer',       rows: 5, w: 256, h: 160 },
  };

  // ---------------------------------------------------------------------------
  // Output generation
  // ---------------------------------------------------------------------------
  function generateOutput() {
    return state.groups
      .map(function (g) {
        return g.name + ':' + g.colors.join(',');
      })
      .join(';');
  }

  // ---------------------------------------------------------------------------
  // Device preview SVG
  // ---------------------------------------------------------------------------
  function buildDeviceSVG(deviceKey) {
    var d = DEVICES[deviceKey];
    var pad = 14;
    var sx = pad, sy = pad;
    var sw = d.w - pad * 2;
    var sh = d.h - pad * 2;
    var rowH = sh / d.rows;

    var rowsSVG = '';
    for (var i = 0; i < d.rows; i++) {
      var ry = sy + i * rowH;
      var fill = i % 2 === 0 ? '#1a1a2e' : '#16213e';
      rowsSVG +=
        '<rect x="' + sx + '" y="' + ry + '" width="' + sw + '" height="' + rowH + '" fill="' + fill + '" />' +
        '<text x="' + (sx + sw / 2) + '" y="' + (ry + rowH / 2 + 4) + '"' +
        ' font-family="monospace" font-size="9" fill="#666" text-anchor="middle">Row ' + (i + 1) + '</text>';
      if (i > 0) {
        rowsSVG += '<line x1="' + sx + '" y1="' + ry + '" x2="' + (sx + sw) + '" y2="' + ry + '" stroke="#2d3561" stroke-width="0.5" />';
      }
    }

    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + d.w + '" height="' + d.h + '" viewBox="0 0 ' + d.w + ' ' + d.h + '">' +
      '<rect width="' + d.w + '" height="' + d.h + '" rx="10" fill="#111" />' +
      '<rect x="' + sx + '" y="' + sy + '" width="' + sw + '" height="' + sh + '" fill="#0d0d1a" stroke="#333" stroke-width="1" />' +
      rowsSVG +
      '</svg>';
  }

  // ---------------------------------------------------------------------------
  // HTML builders
  // ---------------------------------------------------------------------------
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function buildGroupCard(group) {
    var swatches = group.colors.map(function (c, i) {
      var removeBtn = group.type === 'variable'
        ? '<button class="ds-color-remove" data-id="' + group.id + '" data-idx="' + i + '" title="Remove color" aria-label="Remove color">&times;</button>'
        : '';
      return '<div class="ds-swatch-wrap">' +
        '<input type="color" value="' + c + '" class="ds-color-input" data-id="' + group.id + '" data-idx="' + i + '" title="' + escapeHtml(c) + '">' +
        removeBtn +
        '</div>';
    }).join('');

    var addBtn = group.type === 'variable'
      ? '<button class="ds-add-color" data-id="' + group.id + '" title="Add color">+</button>'
      : '';

    var removeGroupBtn = group.type === 'variable'
      ? '<button class="ds-remove-group" data-id="' + group.id + '" title="Remove group" aria-label="Remove group">&times;</button>'
      : '';

    var slotCount = group.colors.length;
    var typeLabel = group.type === 'fixed'
      ? '<span class="ds-type-badge">fixed &middot; ' + slotCount + ' slots</span>'
      : '<span class="ds-type-badge ds-type-variable">variable &middot; ' + slotCount + ' slots</span>';

    return '<div class="ds-group-card" data-id="' + group.id + '">' +
      '<div class="ds-group-header">' +
        '<input type="text" class="ds-group-name" value="' + escapeHtml(group.name) + '" data-id="' + group.id + '" maxlength="40" aria-label="Group name">' +
        typeLabel +
        removeGroupBtn +
      '</div>' +
      '<div class="ds-swatches">' + swatches + addBtn + '</div>' +
    '</div>';
  }

  // ---------------------------------------------------------------------------
  // Full render
  // ---------------------------------------------------------------------------
  function render() {
    // Device selector tabs
    var tabsHTML = Object.keys(DEVICES).map(function (key) {
      var d = DEVICES[key];
      var active = state.activeDevice === key ? ' ds-active' : '';
      return '<button class="ds-device-btn' + active + '" data-device="' + key + '">' +
        '<span class="ds-device-rows">' + d.rows + 'R</span>' +
        '<span class="ds-device-label">' + escapeHtml(d.label) + '</span>' +
      '</button>';
    }).join('');

    // Preview
    var previewHTML =
      '<div class="ds-preview-panel">' +
        '<div class="ds-preview-device">' + buildDeviceSVG(state.activeDevice) + '</div>' +
        '<div class="ds-preview-caption">' + escapeHtml(DEVICES[state.activeDevice].label) + '</div>' +
      '</div>';

    // Groups list
    var groupsHTML = state.groups.map(buildGroupCard).join('');

    // Output
    var outputVal = escapeHtml(generateOutput());

    rootEl.innerHTML =
      '<div class="ds-container">' +
        '<div class="ds-device-selector">' + tabsHTML + '</div>' +
        '<div class="ds-main">' +
          previewHTML +
          '<div class="ds-groups-panel">' +
            '<div class="ds-groups-list">' + groupsHTML + '</div>' +
            '<button class="ds-add-group">+ Add Color Group</button>' +
          '</div>' +
        '</div>' +
        '<div class="ds-output-panel">' +
          '<div class="ds-output-label">Output String</div>' +
          '<div class="ds-output-row">' +
            '<textarea class="ds-output-textarea" id="ds-output" readonly>' + outputVal + '</textarea>' +
            '<button class="ds-copy-btn" id="ds-copy-btn">Copy</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    attachEvents();
  }

  // ---------------------------------------------------------------------------
  // Update only the output textarea (no full re-render)
  // ---------------------------------------------------------------------------
  function refreshOutput() {
    var el = document.getElementById('ds-output');
    if (el) el.value = generateOutput();
  }

  // Update the slot-count badge in a group card without full re-render
  function refreshGroupBadge(id) {
    var card = rootEl.querySelector('.ds-group-card[data-id="' + id + '"]');
    if (!card) return;
    var group = state.groups.find(function (g) { return g.id === id; });
    if (!group) return;
    var badge = card.querySelector('.ds-type-badge');
    if (badge) {
      var label = group.type === 'fixed' ? 'fixed' : 'variable';
      badge.textContent = label + ' \u00b7 ' + group.colors.length + ' slots';
    }
  }

  // ---------------------------------------------------------------------------
  // Event wiring
  // ---------------------------------------------------------------------------
  function attachEvents() {
    // Device tabs
    rootEl.querySelectorAll('.ds-device-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.activeDevice = btn.dataset.device;
        render();
      });
    });

    // Group name
    rootEl.querySelectorAll('.ds-group-name').forEach(function (input) {
      input.addEventListener('change', function () {
        var id = parseInt(input.dataset.id, 10);
        var group = state.groups.find(function (g) { return g.id === id; });
        if (group) {
          group.name = input.value;
          refreshOutput();
        }
      });
    });

    // Color change
    rootEl.querySelectorAll('.ds-color-input').forEach(function (input) {
      input.addEventListener('input', function () {
        var id = parseInt(input.dataset.id, 10);
        var idx = parseInt(input.dataset.idx, 10);
        var group = state.groups.find(function (g) { return g.id === id; });
        if (group) {
          group.colors[idx] = input.value;
          refreshOutput();
        }
      });
    });

    // Remove color (variable groups only)
    rootEl.querySelectorAll('.ds-color-remove').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = parseInt(btn.dataset.id, 10);
        var idx = parseInt(btn.dataset.idx, 10);
        var group = state.groups.find(function (g) { return g.id === id; });
        if (group && group.colors.length > 1) {
          group.colors.splice(idx, 1);
          render();
        }
      });
    });

    // Add color slot
    rootEl.querySelectorAll('.ds-add-color').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = parseInt(btn.dataset.id, 10);
        var group = state.groups.find(function (g) { return g.id === id; });
        if (group) {
          group.colors.push('#ffffff');
          render();
        }
      });
    });

    // Remove entire group (variable only)
    rootEl.querySelectorAll('.ds-remove-group').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = parseInt(btn.dataset.id, 10);
        state.groups = state.groups.filter(function (g) { return g.id !== id; });
        render();
      });
    });

    // Add new group
    var addGroupBtn = rootEl.querySelector('.ds-add-group');
    if (addGroupBtn) {
      addGroupBtn.addEventListener('click', function () {
        state.groups.push({
          id: state.nextId++,
          name: 'New Group',
          type: 'variable',
          colors: ['#ffffff'],
        });
        render();
      });
    }

    // Copy button
    var copyBtn = document.getElementById('ds-copy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var outputEl = document.getElementById('ds-output');
        var text = outputEl ? outputEl.value : '';

        function onCopied() {
          copyBtn.textContent = 'Copied!';
          copyBtn.classList.add('ds-copied');
          setTimeout(function () {
            copyBtn.textContent = 'Copy';
            copyBtn.classList.remove('ds-copied');
          }, 2000);
        }

        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(onCopied).catch(function () {
            if (outputEl) { outputEl.select(); document.execCommand('copy'); onCopied(); }
          });
        } else if (outputEl) {
          outputEl.select();
          document.execCommand('copy');
          onCopied();
        }
      });
    }
  }

  // ---------------------------------------------------------------------------
  // Boot — wait for DOM if needed, surface errors to console
  // ---------------------------------------------------------------------------
  function boot() {
    rootEl = document.getElementById('designer-root');
    if (!rootEl) return;
    try {
      render();
    } catch (e) {
      console.error('[designer] render failed:', e);
      rootEl.innerHTML = '<p style="color:red;padding:1rem">[Designer] Failed to load — check browser console.</p>';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
