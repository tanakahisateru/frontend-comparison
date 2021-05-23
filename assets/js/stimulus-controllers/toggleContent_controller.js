import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ['button', 'content']

    connect() {
        //this.element.textContent = "It works!"
    }

    initialize() {
        this.shown = this.contentTarget.style.display !== 'none';
        this.update();
    }

    update() {
        let button = this.buttonTarget;
        let content = this.contentTarget;
        if (this.shown) {
            content.style.display = null;
            button.classList.add("on");
        } else {
            content.style.display = 'none';
            button.classList.add("off");
        }
    }

    toggle() {
        this.shown = !this.shown;
        this.update();
    }
}
