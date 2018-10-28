import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineImportantDevicesElement
 * @class IconOutlineImportantDevicesElement
 * @extends {AoflElement}
 */
class IconOutlineImportantDevicesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineImportantDevicesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-important-devices';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineImportantDevicesElement.is, IconOutlineImportantDevicesElement);

export default IconOutlineImportantDevicesElement;
