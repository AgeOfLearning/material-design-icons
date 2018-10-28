import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpOfflinePinElement
 * @class IconSharpOfflinePinElement
 * @extends {AoflElement}
 */
class IconSharpOfflinePinElement extends AoflElement {
  /**
   * Creates an instance of IconSharpOfflinePinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-offline-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpOfflinePinElement.is, IconSharpOfflinePinElement);

export default IconSharpOfflinePinElement;
