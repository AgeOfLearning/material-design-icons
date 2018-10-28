import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBattery60Element
 * @class IconTwotoneBattery60Element
 * @extends {AoflElement}
 */
class IconTwotoneBattery60Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBattery60Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-60';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBattery60Element.is, IconTwotoneBattery60Element);

export default IconTwotoneBattery60Element;
