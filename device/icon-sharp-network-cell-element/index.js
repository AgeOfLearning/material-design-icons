import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNetworkCellElement
 * @class IconSharpNetworkCellElement
 * @extends {AoflElement}
 */
class IconSharpNetworkCellElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNetworkCellElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-network-cell';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNetworkCellElement.is, IconSharpNetworkCellElement);

export default IconSharpNetworkCellElement;
