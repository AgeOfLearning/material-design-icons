import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBattery50Element
 * @class IconSharpBattery50Element
 * @extends {AoflElement}
 */
class IconSharpBattery50Element extends AoflElement {
  /**
   * Creates an instance of IconSharpBattery50Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-battery-50';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBattery50Element.is, IconSharpBattery50Element);

export default IconSharpBattery50Element;
