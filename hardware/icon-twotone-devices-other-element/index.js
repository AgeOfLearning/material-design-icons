import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDevicesOtherElement
 * @class IconTwotoneDevicesOtherElement
 * @extends {AoflElement}
 */
class IconTwotoneDevicesOtherElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDevicesOtherElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-devices-other';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDevicesOtherElement.is, IconTwotoneDevicesOtherElement);

export default IconTwotoneDevicesOtherElement;
