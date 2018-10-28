import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSlideshowElement
 * @class IconSharpSlideshowElement
 * @extends {AoflElement}
 */
class IconSharpSlideshowElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSlideshowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-slideshow';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSlideshowElement.is, IconSharpSlideshowElement);

export default IconSharpSlideshowElement;
