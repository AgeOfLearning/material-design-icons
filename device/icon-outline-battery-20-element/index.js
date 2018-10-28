import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBattery20Element
 * @class IconOutlineBattery20Element
 * @extends {AoflElement}
 */
class IconOutlineBattery20Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBattery20Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-20';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBattery20Element.is, IconOutlineBattery20Element);

export default IconOutlineBattery20Element;
