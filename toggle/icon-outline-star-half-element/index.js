import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStarHalfElement
 * @class IconOutlineStarHalfElement
 * @extends {AoflElement}
 */
class IconOutlineStarHalfElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStarHalfElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-star-half';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStarHalfElement.is, IconOutlineStarHalfElement);

export default IconOutlineStarHalfElement;
