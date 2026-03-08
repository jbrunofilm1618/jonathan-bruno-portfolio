
/* ==============================================
   Vimeo Video Player — Portable Component
   Extract from Intrepid Media, ready for reuse.

   USAGE:
   1. Define your project data (see workData below)
   2. Include the matching HTML tiles (see vimeo-tiles.html)
   3. Include vimeo-player.css
   4. This script auto-initializes on DOMContentLoaded
   ============================================== */

// =============================================
// VIDEO DATA — Edit Vimeo IDs here
// Replace 'PLACEHOLDER' with the numeric Vimeo ID from each video URL
// Example: https://vimeo.com/123456789 → vimeoId: '123456789'
//
// For private/unlisted videos, include the `h` parameter from the share URL:
// https://vimeo.com/123456789/abc123def4 → h: 'abc123def4'
// =============================================
const workData = {

  booksy: {
    subprojects: [
      { id: 'nas',     label: 'Barber Nas',       vimeoId: '1171159350', h: 'c49a08b92a' },
      { id: 'yashira', label: 'Yashira Hiraldo',  vimeoId: '1171159415', h: '3cb940e2f4' },
      { id: 'taylor',  label: 'Taylor Leven',     vimeoId: '1171159384', h: 'd3e009bda1' }
    ]
  },

  yoshi: {
    subprojects: [
      { id: 'investor-launch',  label: 'Investor Launch',  vimeoId: '1171159293', h: '30bfc2dede' },
      { id: 'growth',           label: 'Growth',           vimeoId: '1171159342', h: 'd68c4f22ff' },
      { id: 'fleet',            label: 'Fleet',            vimeoId: '1171173666', h: 'bfc71605b6' }
    ]
  },

  tacobell: {
    subprojects: [
      { id: 'davante',  label: 'Devante Adams: Moving Day',  vimeoId: '1171163774', h: '20e53930fc' },
      { id: 'nachos',   label: 'Perfect Bite Nachos',        vimeoId: '1171163754', h: '3daf07baed' },
      { id: 'trio',     label: 'Trio Cravings',              vimeoId: '1171163630', h: '20a921144c' },
      { id: 'burrito',  label: 'Burrito Cravings',           vimeoId: '1171163685', h: '3729211c2a' },
      { id: 'stackers', label: 'Stackers Maker Booth',       vimeoId: '1171163737', h: '650d274426' },
      { id: 'lowrider', label: 'Lowrider: Street Chalupa',   vimeoId: '1171163714', h: '3de2c22018' }
    ]
  },

  familiagrove: {
    subprojects: [
      // Add Familia Grove video IDs here once available:
      // { id: 'main',  label: 'Brand Film',  vimeoId: 'PLACEHOLDER', h: '' }
    ]
  },

  pura: {
    requestAccess: true,
    subprojects: []
  },

  apple: {
    comingSoon: true,
    subprojects: []
  }
};


// =============================================
// PLAYER ENGINE — no edits needed below
// =============================================

function openCard(card, projectKey) {
  card.classList.add('expanded');
  card.querySelector('.work-toggle').setAttribute('aria-expanded', 'true');
  card.querySelector('.work-card-expanded').setAttribute('aria-hidden', 'false');
  selectTab(card, projectKey, 0);
  setTimeout(function() {
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 350);
}

function closeCard(card) {
  card.classList.remove('expanded');
  var toggle = card.querySelector('.work-toggle');
  var expanded = card.querySelector('.work-card-expanded');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
  if (expanded) expanded.setAttribute('aria-hidden', 'true');
  var vc = card.querySelector('.work-video-container');
  if (vc) vc.innerHTML = '';
}

function selectTab(card, projectKey, index) {
  var data = workData[projectKey];
  var sp = data.subprojects[index];
  card.querySelectorAll('.work-tab').forEach(function(tab, i) {
    tab.classList.toggle('active', i === index);
  });
  card.querySelector('.work-subproject-title').textContent = sp.label;
  var vc = card.querySelector('.work-video-container');
  if (sp.vimeoId && sp.vimeoId !== 'PLACEHOLDER') {
    var embedUrl = 'https://player.vimeo.com/video/' + sp.vimeoId +
      '?autoplay=0&title=0&byline=0&portrait=0&badge=0&dnt=1' +
      (sp.h ? '&h=' + sp.h : '');
    vc.innerHTML = '<iframe src="' + embedUrl +
      '" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"' +
      ' allowfullscreen loading="lazy" title="' + sp.label + '"></iframe>';
  } else {
    vc.innerHTML = '<div style="position:absolute;top:0;left:0;width:100%;height:100%;' +
      'display:flex;align-items:center;justify-content:center;' +
      'color:var(--vp-text-secondary);font-family:var(--vp-font-ui);font-size:0.9rem;">' +
      'Video coming soon</div>';
  }
}

// Auto-initialize all work cards on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.work-card[data-project]').forEach(function(card) {
    var projectKey = card.dataset.project;
    var data = workData[projectKey];
    if (!data || data.requestAccess || data.comingSoon || data.subprojects.length === 0) return;

    var toggle = card.querySelector('.work-toggle');
    var tabsContainer = card.querySelector('.work-tabs');

    // Build tabs
    data.subprojects.forEach(function(sp, i) {
      var btn = document.createElement('button');
      btn.className = 'work-tab' + (i === 0 ? ' active' : '');
      btn.textContent = sp.label;
      btn.setAttribute('role', 'tab');
      btn.addEventListener('click', function() { selectTab(card, projectKey, i); });
      tabsContainer.appendChild(btn);
    });

    // Toggle expand/collapse
    toggle.addEventListener('click', function() {
      var isExpanded = card.classList.contains('expanded');
      document.querySelectorAll('.work-card.expanded').forEach(function(other) {
        if (other !== card) closeCard(other);
      });
      if (isExpanded) {
        closeCard(card);
      } else {
        openCard(card, projectKey);
      }
    });
  });
});
