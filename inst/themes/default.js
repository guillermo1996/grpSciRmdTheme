function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
/*wait for elements of the TOC to show*/
wFEelm = '.list-group-item';
waitForElm(wFEelm).then((elm) => {
  $(wFEelm).prepend('<b>listgroupixon&emsp;</b>');
});
document.addEventListener("DOMContentLoaded", function() {
  $("p:has(img)").each(function(index, item) {
    if (item.querySelector(":scope > img")) {
      $(this).addClass("sliderimagep" + index);
      $(this).prepend('<div class="d-flex font-weight-bold" style="font-size: 8pt">Resize image: &emsp;<input class="sliderimageinput" type="range" min="1" max="100" value="100"></div>');
    }
  });
  $("div:has(img)").each(function(index, item) {
    if (item.querySelector(":scope > img")) {
      $(this).addClass("sliderimagep" + index);
      $(this).prepend('<div class="d-flex font-weight-bold" style="font-size: 8pt">Resize image: &emsp;<input class="sliderimageinput" type="range" min="1" max="100" value="100"></div>');
    }
  });
  $("details:has(img)").each(function(index, item) {
    if (item.querySelector(":scope > img")) {
      $(this).addClass("sliderimagep" + index);
      $(this).prepend('<div class="d-flex font-weight-bold" style="font-size: 8pt">Resize image: &emsp;<input class="sliderimageinput" type="range" min="1" max="100" value="100"></div>');
    }
  });
  $(".sliderimageinput").on('input', function() {
    let newwidth = $(this).val();
    $(this).parent().parent().children("img").each(function(index, val) {
      $(this).attr('width', newwidth + "%");
    });
    $(this).parent().parent().children("p").each(function(index, val) {
      $(this).attr('style', 'font-size:'+ newwidth + '%');
    });
  });
  document.querySelectorAll(".hidden-heading").forEach(function(container){
    container.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(function(h){
      h.style.setProperty("font-size", "0", "important");
      h.style.setProperty("line-height", "0", "important");
      h.style.setProperty("margin", "0", "important");
      h.style.setProperty("padding", "0", "important");
      h.setAttribute("aria-hidden", "true");
    });
  });
  document.querySelectorAll(".collapse-toggle").forEach(function(btn) {
    var targetSelector = btn.getAttribute("data-target");
    if (!targetSelector) return;
    var wrapper = document.querySelector(targetSelector);
    if (!wrapper) return;
    wrapper.classList.add("collapsed");
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", function () {
      var isCollapsed = wrapper.classList.toggle("collapsed");
      if (isCollapsed) {
        btn.setAttribute("aria-expanded","false");
      } else {
        btn.setAttribute("aria-expanded","true");
      }
    });
  });
});
