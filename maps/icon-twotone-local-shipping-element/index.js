import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalShippingElement
 * @class IconTwotoneLocalShippingElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalShippingElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalShippingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-shipping';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalShippingElement.is, IconTwotoneLocalShippingElement);

export default IconTwotoneLocalShippingElement;
