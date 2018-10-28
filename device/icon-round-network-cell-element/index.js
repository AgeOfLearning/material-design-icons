import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNetworkCellElement
 * @class IconRoundNetworkCellElement
 * @extends {AoflElement}
 */
class IconRoundNetworkCellElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNetworkCellElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-network-cell';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNetworkCellElement.is, IconRoundNetworkCellElement);

export default IconRoundNetworkCellElement;
