import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBattery30Element
 * @class IconSharpBattery30Element
 * @extends {AoflElement}
 */
class IconSharpBattery30Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBattery30Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-30';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBattery30Element.is, IconSharpBattery30Element);

export default IconSharpBattery30Element;
