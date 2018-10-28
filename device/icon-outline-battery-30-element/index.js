import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBattery30Element
 * @class IconOutlineBattery30Element
 * @extends {AoflElement}
 */
class IconOutlineBattery30Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBattery30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBattery30Element.is, IconOutlineBattery30Element);

export default IconOutlineBattery30Element;
