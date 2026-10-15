/* Yummy Food — progressive enhancement only. Nothing here is required to read or print a recipe. */
(function () {
  'use strict';

  var card = document.getElementById('recipe');
  if (!card) return;

  /* ---------- Servings stepper: rescale written amounts ---------- */

  var list = card.querySelector('.ingredients');
  var stepper = card.querySelector('.stepper');
  var base = list ? parseInt(list.getAttribute('data-base-servings'), 10) : 0;

  if (list && stepper && base > 0) {
    var output = stepper.querySelector('output');
    var staticServings = card.querySelector('.servings__static');
    var amounts = list.querySelectorAll('[data-qty]');
    var servings = base;
    var MIN = 1;
    var MAX = 12;

    var FRACTIONS = [
      [0.25, '¼'], [0.333, '⅓'], [0.5, '½'], [0.666, '⅔'], [0.75, '¾']
    ];

    function formatQty(value, unit) {
      var text;
      if (unit === 'g' || unit === 'ml') {
        // Weights and volumes round to a sensible kitchen number.
        var rounded = value >= 100 ? Math.round(value / 5) * 5 : Math.round(value);
        text = String(rounded);
      } else {
        var whole = Math.floor(value);
        var rest = value - whole;
        var frac = '';
        for (var i = 0; i < FRACTIONS.length; i++) {
          if (Math.abs(rest - FRACTIONS[i][0]) < 0.07) { frac = FRACTIONS[i][1]; break; }
        }
        if (!frac && rest >= 0.9) { whole += 1; rest = 0; }
        if (!frac && rest > 0.07) frac = rest.toFixed(1).replace(/^0/, '');
        text = (whole > 0 ? whole : '') + (whole > 0 && frac.length === 1 ? ' ' : '') + frac;
        if (text === '') text = '0';
      }
      return unit ? text + ' ' + unit : text;
    }

    function render() {
      output.value = String(servings);
      output.textContent = String(servings);
      if (staticServings) staticServings.textContent = String(servings);
      for (var i = 0; i < amounts.length; i++) {
        var el = amounts[i];
        var qty = parseFloat(el.getAttribute('data-qty'));
        el.textContent = formatQty(qty * servings / base, el.getAttribute('data-unit') || '');
      }
      var buttons = stepper.querySelectorAll('button');
      for (var j = 0; j < buttons.length; j++) {
        var step = parseInt(buttons[j].getAttribute('data-step'), 10);
        buttons[j].disabled = (servings + step < MIN) || (servings + step > MAX);
      }
    }

    stepper.addEventListener('click', function (e) {
      var button = e.target.closest('button[data-step]');
      if (!button || button.disabled) return;
      servings += parseInt(button.getAttribute('data-step'), 10);
      render();
    });

    render();
  }

  /* ---------- Tap a step to mark where you are ---------- */

  var method = card.querySelector('.method');
  if (method) {
    method.addEventListener('click', function (e) {
      var li = e.target.closest('li');
      if (!li || !method.contains(li)) return;
      var wasCurrent = li.classList.contains('is-current');
      var items = method.children;
      for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('is-current');
        items[i].removeAttribute('aria-current');
      }
      if (!wasCurrent) {
        li.classList.add('is-current');
        li.setAttribute('aria-current', 'step');
      }
      method.classList.toggle('has-current', !wasCurrent);
    });
  }

  /* ---------- Print button ---------- */

  var printButton = card.querySelector('[data-print]');
  if (printButton) {
    printButton.addEventListener('click', function () { window.print(); });
  }

  /* ---------- Reveal the method steps once, in order ---------- */

  var revealTargets = card.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealTargets.length) {
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('is-in');
          io.unobserve(entries[i].target);
        }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    for (var r = 0; r < revealTargets.length; r++) io.observe(revealTargets[r]);
  } else {
    for (var f = 0; f < revealTargets.length; f++) revealTargets[f].classList.add('is-in');
  }

  /* ---------- Floating Jump button hides while the hero button or the card is in view ---------- */

  var jump = document.querySelector('.jump-float');
  var heroButton = document.querySelector('.hero__actions .button');
  if (jump && 'IntersectionObserver' in window) {
    var visible = { hero: true, card: false };
    var jumpIo = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        visible[entries[i].target === card ? 'card' : 'hero'] = entries[i].isIntersecting;
      }
      jump.classList.toggle('is-hidden', visible.hero || visible.card);
    }, { threshold: 0.05 });
    jumpIo.observe(card);
    if (heroButton) jumpIo.observe(heroButton);
  }
})();
