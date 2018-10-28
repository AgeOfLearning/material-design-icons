import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocalShippingElement
 * @class IconSharpLocalShippingElement
 * @extends {AoflElement}
 */
class IconSharpLocalShippingElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocalShippingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-local-shipping';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocalShippingElement.is, IconSharpLocalShippingElement);

export default IconSharpLocalShippingElement;
