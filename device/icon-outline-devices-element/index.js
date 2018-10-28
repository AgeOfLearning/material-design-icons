import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDevicesElement
 * @class IconOutlineDevicesElement
 * @extends {AoflElement}
 */
class IconOutlineDevicesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDevicesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-devices';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDevicesElement.is, IconOutlineDevicesElement);

export default IconOutlineDevicesElement;
