import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBattery30Element
 * @class IconTwotoneBattery30Element
 * @extends {AoflElement}
 */
class IconTwotoneBattery30Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBattery30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBattery30Element.is, IconTwotoneBattery30Element);

export default IconTwotoneBattery30Element;
