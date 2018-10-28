import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBattery60Element
 * @class IconOutlineBattery60Element
 * @extends {AoflElement}
 */
class IconOutlineBattery60Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBattery60Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-60';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBattery60Element.is, IconOutlineBattery60Element);

export default IconOutlineBattery60Element;
