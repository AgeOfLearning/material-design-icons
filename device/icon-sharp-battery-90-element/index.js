import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBattery90Element
 * @class IconSharpBattery90Element
 * @extends {AoflElement}
 */
class IconSharpBattery90Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBattery90Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-90';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBattery90Element.is, IconSharpBattery90Element);

export default IconSharpBattery90Element;
