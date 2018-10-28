import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNetworkCellElement
 * @class IconOutlineNetworkCellElement
 * @extends {AoflElement}
 */
class IconOutlineNetworkCellElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNetworkCellElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-network-cell';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNetworkCellElement.is, IconOutlineNetworkCellElement);

export default IconOutlineNetworkCellElement;
