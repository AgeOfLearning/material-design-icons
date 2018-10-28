import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBattery20Element
 * @class IconTwotoneBattery20Element
 * @extends {AoflElement}
 */
class IconTwotoneBattery20Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBattery20Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-20';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBattery20Element.is, IconTwotoneBattery20Element);

export default IconTwotoneBattery20Element;
