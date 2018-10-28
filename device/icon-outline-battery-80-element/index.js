import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBattery80Element
 * @class IconOutlineBattery80Element
 * @extends {AoflElement}
 */
class IconOutlineBattery80Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBattery80Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-80';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBattery80Element.is, IconOutlineBattery80Element);

export default IconOutlineBattery80Element;
