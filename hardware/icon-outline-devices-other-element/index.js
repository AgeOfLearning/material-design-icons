import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDevicesOtherElement
 * @class IconOutlineDevicesOtherElement
 * @extends {AoflElement}
 */
class IconOutlineDevicesOtherElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDevicesOtherElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-devices-other';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDevicesOtherElement.is, IconOutlineDevicesOtherElement);

export default IconOutlineDevicesOtherElement;
