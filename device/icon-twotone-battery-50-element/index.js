import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBattery50Element
 * @class IconTwotoneBattery50Element
 * @extends {AoflElement}
 */
class IconTwotoneBattery50Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBattery50Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-battery-50';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBattery50Element.is, IconTwotoneBattery50Element);

export default IconTwotoneBattery50Element;
