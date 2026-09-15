/* Before/After 滑动对比 + 并排切换 */
(function () {
  function sync(ba) {
    var r = ba.querySelector('.ba-range');
    var a = ba.querySelector('.ba-after');
    var g = ba.querySelector('.ba-grip');
    var v = r.value;
    a.style.width = v + '%';
    g.style.left = v + '%';
  }
  function fit(ba) {
    // 让 after 图的内层宽度等于舞台宽度，保证左右两图像素对齐
    var stage = ba.querySelector('.ba-stage');
    var img = ba.querySelector('.ba-after img');
    if (img) img.style.width = stage.clientWidth + 'px';
  }
  document.querySelectorAll('.ba').forEach(function (ba) {
    var r = ba.querySelector('.ba-range');
    if (!r) return;
    r.addEventListener('input', function () { sync(ba); });
    ba.querySelectorAll('[data-set]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        r.value = btn.getAttribute('data-set');
        sync(ba);
      });
    });
    var tog = ba.querySelector('[data-toggle]');
    if (tog) tog.addEventListener('click', function () {
      ba.classList.toggle('sbs');
      tog.textContent = ba.classList.contains('sbs') ? '↔ 切回滑动对比' : '⊞ 并排看';
      if (!ba.classList.contains('sbs')) { fit(ba); sync(ba); }
    });
    ba.querySelectorAll('.ba-stage img').forEach(function (im) {
      if (im.complete) { fit(ba); } else { im.addEventListener('load', function () { fit(ba); }); }
    });
    fit(ba); sync(ba);
  });
  window.addEventListener('resize', function () {
    document.querySelectorAll('.ba').forEach(function (ba) { fit(ba); sync(ba); });
  });
})();
