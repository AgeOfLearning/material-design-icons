import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMonetizationOnElement
 * @class IconTwotoneMonetizationOnElement
 * @extends {AoflElement}
 */
class IconTwotoneMonetizationOnElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMonetizationOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-monetization-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMonetizationOnElement.is, IconTwotoneMonetizationOnElement);

export default IconTwotoneMonetizationOnElement;
