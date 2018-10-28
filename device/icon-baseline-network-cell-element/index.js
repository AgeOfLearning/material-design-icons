import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNetworkCellElement
 * @class IconBaselineNetworkCellElement
 * @extends {AoflElement}
 */
class IconBaselineNetworkCellElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNetworkCellElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-network-cell';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNetworkCellElement.is, IconBaselineNetworkCellElement);

export default IconBaselineNetworkCellElement;
