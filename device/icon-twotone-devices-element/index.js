import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDevicesElement
 * @class IconTwotoneDevicesElement
 * @extends {AoflElement}
 */
class IconTwotoneDevicesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDevicesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-devices';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDevicesElement.is, IconTwotoneDevicesElement);

export default IconTwotoneDevicesElement;
