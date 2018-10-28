import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNetworkLockedElement
 * @class IconTwotoneNetworkLockedElement
 * @extends {AoflElement}
 */
class IconTwotoneNetworkLockedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNetworkLockedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-network-locked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNetworkLockedElement.is, IconTwotoneNetworkLockedElement);

export default IconTwotoneNetworkLockedElement;
