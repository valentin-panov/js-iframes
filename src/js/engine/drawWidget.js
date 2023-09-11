export default function drawWidget() {
  const element = document.createElement("div");
  element.classList.add("wrapper");
  element.innerHTML = `
  <div class="container">
    <h1 class="container__title">IFRAME DEMO</h1>
    <div class="bd-example">
      <input id="input_message" type="text" class="form__input"/>
      <div class="btn_box">
        <button id="btn_send" type="button" class="btn btn-teal">Send message to iFrame</button>
        <button id="btn_put_xss" type="button" class="btn btn-red">Put XSS on a page</button>
      </div>
      <div class="message_box_container">
        <div class="message_box_title">Message from iFrame:</div>
        <div id="message_box" class="message_box"></div>
        <div id="xss_box"></div>
      </div>
      <iframe id="test_iframe" src='https://valentin-panov.github.io/js-iframes/public/card.html' sandbox="allow-scripts allow-forms" class="iframe_el"/>
    </div>
  </div>`;

  document.body.append(element);
}

// <iframe id="test_iframe" src='${process.env.BASE_URL}/public/card.html' sandbox="allow-scripts allow-forms" class="iframe_el"/>
