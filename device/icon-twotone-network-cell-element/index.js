import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNetworkCellElement
 * @class IconTwotoneNetworkCellElement
 * @extends {AoflElement}
 */
class IconTwotoneNetworkCellElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNetworkCellElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-network-cell';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNetworkCellElement.is, IconTwotoneNetworkCellElement);

export default IconTwotoneNetworkCellElement;
