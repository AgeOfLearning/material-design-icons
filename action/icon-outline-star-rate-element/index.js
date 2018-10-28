import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStarRateElement
 * @class IconOutlineStarRateElement
 * @extends {AoflElement}
 */
class IconOutlineStarRateElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStarRateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-star-rate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStarRateElement.is, IconOutlineStarRateElement);

export default IconOutlineStarRateElement;
