import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBattery80Element
 * @class IconTwotoneBattery80Element
 * @extends {AoflElement}
 */
class IconTwotoneBattery80Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBattery80Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-80';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBattery80Element.is, IconTwotoneBattery80Element);

export default IconTwotoneBattery80Element;
