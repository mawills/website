class StyledElement extends HTMLElement {
    constructor(style) {
        super();
        this.attachShadow({mode: 'closed'}).innerHTML = `
            <style>
                ${style}
            </style>
            <slot/>
        `;
    }
}

customElements.define('flex-right', class FlexRight extends StyledElement {
    constructor() {
        super(`
            :host {
                display: flex;
                flex-direction: row;
            }

            ::slotted(div) {
                flex: 1;
            }
        `);
    }
});

customElements.define('flex-down', class FlexDown extends StyledElement {
    constructor() {
        super(`
            :host {
                display: flex;
                flex-direction: column;
            }

            ::slotted(div) {
                flex: 1;
            }
        `);
    }
});
