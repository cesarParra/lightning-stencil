import { createElement } from 'lwc';
import stencil from 'c/stencil';

describe('c-stencil', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders one section by default', () => {
        // Create element
        const element = createElement('c-stencil', {
            is: stencil
        });
        document.body.appendChild(element);

        const sections = element.shadowRoot.querySelectorAll(
            'section'
        );
        expect(sections.length).toBe(1);
    });

    it('renders one div within the section', () => {
        // Create element
        const element = createElement('c-stencil', {
            is: stencil
        });
        document.body.appendChild(element);

        const divs = element.shadowRoot.querySelectorAll(
            'section div'
        );
        expect(divs.length).toBe(1);
        expect(divs[0].className).toBe('loading')
    });

    it('renders as many sections as the count property', () => {
        // Create element
        const element = createElement('c-stencil', {
            is: stencil
        });
        element.count = 5;
        document.body.appendChild(element);

        const sections = element.shadowRoot.querySelectorAll(
            'section'
        );
        expect(sections.length).toBe(5);
    });
});