import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDevicesOtherElement
 * @class IconSharpDevicesOtherElement
 * @extends {AoflElement}
 */
class IconSharpDevicesOtherElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDevicesOtherElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-devices-other';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDevicesOtherElement.is, IconSharpDevicesOtherElement);

export default IconSharpDevicesOtherElement;
