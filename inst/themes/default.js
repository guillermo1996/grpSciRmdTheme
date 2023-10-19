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
    };
  });

  $("div:has(img)").each(function(index, item) {
    if (item.querySelector(":scope > img")) {
      $(this).addClass("sliderimagep" + index);
      $(this).prepend('<div class="d-flex font-weight-bold" style="font-size: 8pt">Resize image: &emsp;<input class="sliderimageinput" type="range" min="1" max="100" value="100"></div>');
    };
  });

  $("details:has(img)").each(function(index, item) {
    if (item.querySelector(":scope > img")) {
      $(this).addClass("sliderimagep" + index);
      $(this).prepend('<div class="d-flex font-weight-bold" style="font-size: 8pt">Resize image: &emsp;<input class="sliderimageinput" type="range" min="1" max="100" value="100"></div>');
    };
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
});
