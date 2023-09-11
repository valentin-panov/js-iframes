import drawWidget from "./drawWidget";

export default class IFrameHandler {
  constructor() {
    drawWidget();
    this.message = document.querySelector("#input_message");
    this.sendButton = document.querySelector("#btn_send");
    this.xssBtn = document.querySelector("#btn_put_xss");
    this.xssBOX = document.querySelector("#xss_box");
    this.iframe = document.querySelector("#test_iframe");
  }

  init() {
    this.addInputListeners();
  }

  addInputListeners() {
    this.sendButton.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        this.sendMessage(this.message.value);
      },
      false,
    );
    this.xssBtn.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        const sample = `<style>@keyframes x{}</style><div style="animation-name:x" onanimationend="alert(document.querySelector('iframe').contentDocument.querySelector('input').value)"></div>`
        this.xssBOX.innerHTML = this.message.value || sample;
        this.message.value = this.xssBOX.innerHTML;
      },
      false,
    );

    // listen to the messages from the iframe
    window.onmessage = function (event) {
      if (event.data.type === "iframeMsg") {
        document.querySelector("#message_box").textContent = event.data.message;
      }
    };
  }

  sendMessage(message) {
    this.iframe.contentWindow.postMessage(message, "*");
  }
}
