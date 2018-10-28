import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSlideshowElement
 * @class IconOutlineSlideshowElement
 * @extends {AoflElement}
 */
class IconOutlineSlideshowElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSlideshowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-slideshow';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSlideshowElement.is, IconOutlineSlideshowElement);

export default IconOutlineSlideshowElement;
