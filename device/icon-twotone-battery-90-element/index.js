import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBattery90Element
 * @class IconTwotoneBattery90Element
 * @extends {AoflElement}
 */
class IconTwotoneBattery90Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBattery90Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-90';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBattery90Element.is, IconTwotoneBattery90Element);

export default IconTwotoneBattery90Element;
