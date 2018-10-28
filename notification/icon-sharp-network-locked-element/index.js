import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNetworkLockedElement
 * @class IconSharpNetworkLockedElement
 * @extends {AoflElement}
 */
class IconSharpNetworkLockedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNetworkLockedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-network-locked';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNetworkLockedElement.is, IconSharpNetworkLockedElement);

export default IconSharpNetworkLockedElement;
