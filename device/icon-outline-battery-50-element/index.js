import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBattery50Element
 * @class IconOutlineBattery50Element
 * @extends {AoflElement}
 */
class IconOutlineBattery50Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBattery50Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-50';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBattery50Element.is, IconOutlineBattery50Element);

export default IconOutlineBattery50Element;
