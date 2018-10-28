import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStarHalfElement
 * @class IconTwotoneStarHalfElement
 * @extends {AoflElement}
 */
class IconTwotoneStarHalfElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStarHalfElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-star-half';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStarHalfElement.is, IconTwotoneStarHalfElement);

export default IconTwotoneStarHalfElement;
