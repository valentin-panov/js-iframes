import drawWidget from "./drawWidget";

export default class ShowIFrame {
  constructor() {
    drawWidget();
    this.message = document.querySelector("#input_message");
    this.sendButton = document.querySelector("#btn_send");
    this.xss = document.querySelector("#btn_put_xss");
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
        this.sendMessage(event.target);
      },
      false,
    );
  }

  sendMessage(target) {
    console.log(1);
  }
}
