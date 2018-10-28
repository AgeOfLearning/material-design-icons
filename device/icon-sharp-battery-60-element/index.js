import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBattery60Element
 * @class IconSharpBattery60Element
 * @extends {AoflElement}
 */
class IconSharpBattery60Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBattery60Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-60';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBattery60Element.is, IconSharpBattery60Element);

export default IconSharpBattery60Element;
