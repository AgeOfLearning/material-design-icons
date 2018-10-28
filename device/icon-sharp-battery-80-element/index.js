import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBattery80Element
 * @class IconSharpBattery80Element
 * @extends {AoflElement}
 */
class IconSharpBattery80Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBattery80Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-80';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBattery80Element.is, IconSharpBattery80Element);

export default IconSharpBattery80Element;
