import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDevicesElement
 * @class IconSharpDevicesElement
 * @extends {AoflElement}
 */
class IconSharpDevicesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDevicesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-devices';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDevicesElement.is, IconSharpDevicesElement);

export default IconSharpDevicesElement;
