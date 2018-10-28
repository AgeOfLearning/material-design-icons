import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBattery90Element
 * @class IconOutlineBattery90Element
 * @extends {AoflElement}
 */
class IconOutlineBattery90Element extends AoflElement {
  /**
   * Creates an instance of IconOutlineBattery90Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-battery-90';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBattery90Element.is, IconOutlineBattery90Element);

export default IconOutlineBattery90Element;
