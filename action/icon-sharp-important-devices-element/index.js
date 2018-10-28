import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpImportantDevicesElement
 * @class IconSharpImportantDevicesElement
 * @extends {AoflElement}
 */
class IconSharpImportantDevicesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpImportantDevicesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-important-devices';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpImportantDevicesElement.is, IconSharpImportantDevicesElement);

export default IconSharpImportantDevicesElement;
