import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalShippingElement
 * @class IconOutlineLocalShippingElement
 * @extends {AoflElement}
 */
class IconOutlineLocalShippingElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalShippingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-shipping';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalShippingElement.is, IconOutlineLocalShippingElement);

export default IconOutlineLocalShippingElement;
