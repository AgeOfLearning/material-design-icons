import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneStarRateElement
 * @class IconTwotoneStarRateElement
 * @extends {AoflElement}
 */
class IconTwotoneStarRateElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneStarRateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-star-rate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneStarRateElement.is, IconTwotoneStarRateElement);

export default IconTwotoneStarRateElement;
