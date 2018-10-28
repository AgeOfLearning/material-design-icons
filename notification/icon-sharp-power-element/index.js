import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPowerElement
 * @class IconSharpPowerElement
 * @extends {AoflElement}
 */
class IconSharpPowerElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPowerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-power';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPowerElement.is, IconSharpPowerElement);

export default IconSharpPowerElement;
