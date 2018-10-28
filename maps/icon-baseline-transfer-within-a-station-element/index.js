import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTransferWithinAStationElement
 * @class IconBaselineTransferWithinAStationElement
 * @extends {AoflElement}
 */
class IconBaselineTransferWithinAStationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTransferWithinAStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-transfer-within-a-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTransferWithinAStationElement.is, IconBaselineTransferWithinAStationElement);

export default IconBaselineTransferWithinAStationElement;
