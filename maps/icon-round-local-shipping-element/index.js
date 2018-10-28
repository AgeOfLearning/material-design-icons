import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalShippingElement
 * @class IconRoundLocalShippingElement
 * @extends {AoflElement}
 */
class IconRoundLocalShippingElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalShippingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-shipping';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalShippingElement.is, IconRoundLocalShippingElement);

export default IconRoundLocalShippingElement;
