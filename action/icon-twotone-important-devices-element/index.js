import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneImportantDevicesElement
 * @class IconTwotoneImportantDevicesElement
 * @extends {AoflElement}
 */
class IconTwotoneImportantDevicesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneImportantDevicesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-important-devices';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneImportantDevicesElement.is, IconTwotoneImportantDevicesElement);

export default IconTwotoneImportantDevicesElement;
