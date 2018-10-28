import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNetworkCheckElement
 * @class IconSharpNetworkCheckElement
 * @extends {AoflElement}
 */
class IconSharpNetworkCheckElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNetworkCheckElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-network-check';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNetworkCheckElement.is, IconSharpNetworkCheckElement);

export default IconSharpNetworkCheckElement;
