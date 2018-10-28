import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalShippingElement
 * @class IconBaselineLocalShippingElement
 * @extends {AoflElement}
 */
class IconBaselineLocalShippingElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalShippingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-shipping';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalShippingElement.is, IconBaselineLocalShippingElement);

export default IconBaselineLocalShippingElement;
