import drawWidget from "./drawWidget";

export default class ShowIFrame {
  constructor() {
    drawWidget();
    this.message = document.querySelector("#input_message");
    this.sendButton = document.querySelector("#btn_send");
    this.xss = document.querySelector("#btn_put_xss");
    this.iframe = document.querySelector("#test_iframe");
    this.messageBox = document.querySelector("#message_box");
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
