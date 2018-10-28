import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNetworkLockedElement
 * @class IconRoundNetworkLockedElement
 * @extends {AoflElement}
 */
class IconRoundNetworkLockedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNetworkLockedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-network-locked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNetworkLockedElement.is, IconRoundNetworkLockedElement);

export default IconRoundNetworkLockedElement;
