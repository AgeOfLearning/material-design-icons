import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundOfflineBoltElement
 * @class IconRoundOfflineBoltElement
 * @extends {AoflElement}
 */
class IconRoundOfflineBoltElement extends AoflElement {
  /**
   * Creates an instance of IconRoundOfflineBoltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-offline-bolt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundOfflineBoltElement.is, IconRoundOfflineBoltElement);

export default IconRoundOfflineBoltElement;
