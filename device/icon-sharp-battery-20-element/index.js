import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBattery20Element
 * @class IconSharpBattery20Element
 * @extends {AoflElement}
 */
class IconSharpBattery20Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBattery20Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-20';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBattery20Element.is, IconSharpBattery20Element);

export default IconSharpBattery20Element;
