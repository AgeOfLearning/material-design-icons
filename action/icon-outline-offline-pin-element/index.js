import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineOfflinePinElement
 * @class IconOutlineOfflinePinElement
 * @extends {AoflElement}
 */
class IconOutlineOfflinePinElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineOfflinePinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-offline-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineOfflinePinElement.is, IconOutlineOfflinePinElement);

export default IconOutlineOfflinePinElement;
