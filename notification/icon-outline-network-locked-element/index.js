import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNetworkLockedElement
 * @class IconOutlineNetworkLockedElement
 * @extends {AoflElement}
 */
class IconOutlineNetworkLockedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNetworkLockedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-network-locked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNetworkLockedElement.is, IconOutlineNetworkLockedElement);

export default IconOutlineNetworkLockedElement;
