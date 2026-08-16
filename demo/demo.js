/*!
 * Demo behaviour for bootstrap-v4-rtl
 * Direction switch, language switch and per-component source viewers.
 * Not part of the package — this file only powers the demo page.
 */

(function ($) {
  'use strict'

  var STORE_DIR = 'bsrtl-demo-dir'
  var STORE_LANG = 'bsrtl-demo-lang'

  var state = {
    dir: 'ltr',
    lang: 'en'
  }

  var strings = {
    code: { en: 'Code', fa: 'کد' },
    hide: { en: 'Hide', fa: 'بستن' },
    copy: { en: 'Copy', fa: 'کپی' },
    copied: { en: 'Copied to clipboard', fa: 'در کلیپ‌بورد کپی شد' },
    copyFailed: { en: 'Press Ctrl/Cmd + C to copy', fa: 'برای کپی Ctrl/Cmd + C را بزنید' }
  }

  // Allows sharing a specific view, e.g. demo/?dir=rtl&lang=fa
  function queryParam (name) {
    var match = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.search)
    return match ? decodeURIComponent(match[1]) : null
  }

  function store (key, value) {
    try {
      if (value === undefined) return window.localStorage.getItem(key)
      window.localStorage.setItem(key, value)
    } catch (e) {
      // Private browsing or blocked storage — preferences just won't persist.
    }
    return null
  }

  // ---------------------------------------------------------------- language

  // Swap only the element's own text, so nested markup (badges, icons) survives.
  function setLocalizedText (el, text) {
    var replaced = false
    var i

    for (i = 0; i < el.childNodes.length; i++) {
      var node = el.childNodes[i]
      if (node.nodeType !== 3 || !node.nodeValue.trim()) continue

      if (replaced) {
        node.nodeValue = ''
        continue
      }

      var leading = node.nodeValue.match(/^\s*/)[0]
      var trailing = node.nodeValue.match(/\s*$/)[0]
      node.nodeValue = leading + text + trailing
      replaced = true
    }

    if (!replaced) el.textContent = text
  }

  function localize (root, lang) {
    var nodes = root.querySelectorAll('[data-en]')

    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i]
      var text = el.getAttribute('data-' + lang)
      if (text !== null) setLocalizedText(el, text)
    }
  }

  // ------------------------------------------------------------- source view

  function stripDemoAttributes (root) {
    var nodes = root.querySelectorAll('[data-en], [data-fa]')

    for (var i = 0; i < nodes.length; i++) {
      nodes[i].removeAttribute('data-en')
      nodes[i].removeAttribute('data-fa')
    }
  }

  function dedent (html) {
    var lines = html.replace(/\t/g, '    ').split('\n')

    while (lines.length && !lines[0].trim()) lines.shift()
    while (lines.length && !lines[lines.length - 1].trim()) lines.pop()

    var indent = lines.reduce(function (min, line) {
      if (!line.trim()) return min
      return Math.min(min, line.match(/^ */)[0].length)
    }, Infinity)

    if (!isFinite(indent) || indent === 0) return lines.join('\n')

    return lines.map(function (line) {
      return line.slice(indent)
    }).join('\n')
  }

  // `pristine` is the untouched clone taken before any plugin ran.
  function sourceFor (pristine, lang) {
    var clone = pristine.cloneNode(true)
    localize(clone, lang)
    stripDemoAttributes(clone)
    return dedent(clone.innerHTML)
  }

  function copyText (text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () {
        return true
      }, function () {
        return false
      })
    }

    var area = document.createElement('textarea')
    area.value = text
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()

    var ok = false
    try {
      ok = document.execCommand('copy')
    } catch (e) {
      ok = false
    }

    document.body.removeChild(area)
    return $.Deferred().resolve(ok).promise()
  }

  var flashTimer = null

  function flash (message) {
    var $flash = $('#demo-flash')
    $flash.text(message).addClass('show')
    window.clearTimeout(flashTimer)
    flashTimer = window.setTimeout(function () {
      $flash.removeClass('show')
    }, 1800)
  }

  // ------------------------------------------------------------------ blocks

  var blocks = []

  function buildBlocks () {
    $('.demo-block').each(function () {
      var $block = $(this)
      var preview = $block.find('.demo-preview')[0]
      if (!preview) return

      var block = {
        $block: $block,
        pristine: preview.cloneNode(true)
      }

      var $header = $(
        '<div class="demo-block-header">' +
          '<div class="demo-block-title"></div>' +
          '<div class="demo-block-actions btn-group btn-group-sm">' +
            '<button type="button" class="btn btn-outline-secondary" data-demo-toggle-code></button>' +
            '<button type="button" class="btn btn-outline-secondary" data-demo-copy-code></button>' +
          '</div>' +
        '</div>'
      )

      var $code = $('<div class="demo-code"><pre class="demo-ltr"><code></code></pre></div>')

      $block.prepend($header)
      $block.append($code)

      block.$title = $header.find('.demo-block-title')
      block.$toggle = $header.find('[data-demo-toggle-code]')
      block.$copy = $header.find('[data-demo-copy-code]')
      block.$code = $code
      block.$pre = $code.find('code')

      block.$toggle.on('click', function () {
        var open = !$code.hasClass('show')
        if (open) renderCode(block)
        $code.toggleClass('show', open)
        block.$toggle.text(open ? strings.hide[state.lang] : strings.code[state.lang])
        $('body').scrollspy('refresh')
      })

      block.$copy.on('click', function () {
        $.when(copyText(sourceFor(block.pristine, state.lang))).done(function (ok) {
          flash(ok ? strings.copied[state.lang] : strings.copyFailed[state.lang])
        })
      })

      blocks.push(block)
    })
  }

  function renderCode (block) {
    block.$pre.text(sourceFor(block.pristine, state.lang))
  }

  function refreshBlockChrome () {
    $.each(blocks, function (i, block) {
      var title = block.$block.attr('data-title-' + state.lang) || block.$block.attr('data-title-en') || ''
      block.$title.text(title)
      block.$toggle.text(block.$code.hasClass('show') ? strings.hide[state.lang] : strings.code[state.lang])
      block.$copy.text(strings.copy[state.lang])
      if (block.$code.hasClass('show')) renderCode(block)
    })
  }

  // ----------------------------------------------------------------- switches

  function applyDirection (dir) {
    state.dir = dir === 'rtl' ? 'rtl' : 'ltr'
    $('body').toggleClass('rtl', state.dir === 'rtl')
    $('[data-set-dir]').each(function () {
      $(this).toggleClass('active', $(this).attr('data-set-dir') === state.dir)
    })
    $('#demo-live-code').html('&lt;body class="<b>' + (state.dir === 'rtl' ? 'rtl' : '&nbsp;') + '</b>"&gt;')
    store(STORE_DIR, state.dir)
  }

  function applyLanguage (lang) {
    state.lang = lang === 'fa' ? 'fa' : 'en'
    $('body').toggleClass('lang-fa', state.lang === 'fa').toggleClass('lang-en', state.lang === 'en')
    document.documentElement.setAttribute('lang', state.lang)
    $('[data-set-lang]').each(function () {
      $(this).toggleClass('active', $(this).attr('data-set-lang') === state.lang)
    })

    localize(document.body, state.lang)
    $('[data-copy-text]').each(function () {
      // The hero copy button carries its own label.
      var label = $(this).attr('data-' + state.lang)
      if (label) $(this).text(label)
    })

    refreshBlockChrome()
    store(STORE_LANG, state.lang)
  }

  // --------------------------------------------------------------------- init

  $(function () {
    buildBlocks()

    $('[data-set-dir]').on('click', function () {
      applyDirection($(this).attr('data-set-dir'))
    })

    $('[data-set-lang]').on('click', function () {
      var lang = $(this).attr('data-set-lang')
      applyLanguage(lang)
      // Picking Persian implies right-to-left; the direction switch can still override it.
      applyDirection(lang === 'fa' ? 'rtl' : 'ltr')
    })

    $('[data-copy-text]').on('click', function () {
      var text = $(this).attr('data-copy-text')
      $.when(copyText(text)).done(function (ok) {
        flash(ok ? strings.copied[state.lang] : strings.copyFailed[state.lang])
      })
    })

    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()

    // Demo-only anchors should not jump the page to the top.
    $('.demo-preview a[href="#"]').on('click', function (e) {
      e.preventDefault()
    })

    applyLanguage(queryParam('lang') || store(STORE_LANG) || 'en')
    applyDirection(queryParam('dir') || store(STORE_DIR) || 'ltr')

    // Initialise explicitly: the data-api only fires on window load, which is
    // later than the first `refresh` call the code viewers can trigger.
    $('body').scrollspy({ target: '#demo-nav', offset: 120 })
  })
})(jQuery)
