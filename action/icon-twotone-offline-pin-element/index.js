import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneOfflinePinElement
 * @class IconTwotoneOfflinePinElement
 * @extends {AoflElement}
 */
class IconTwotoneOfflinePinElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneOfflinePinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-offline-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneOfflinePinElement.is, IconTwotoneOfflinePinElement);

export default IconTwotoneOfflinePinElement;
