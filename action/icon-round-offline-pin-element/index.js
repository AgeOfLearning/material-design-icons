import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundOfflinePinElement
 * @class IconRoundOfflinePinElement
 * @extends {AoflElement}
 */
class IconRoundOfflinePinElement extends AoflElement {
  /**
   * Creates an instance of IconRoundOfflinePinElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-offline-pin';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundOfflinePinElement.is, IconRoundOfflinePinElement);

export default IconRoundOfflinePinElement;
