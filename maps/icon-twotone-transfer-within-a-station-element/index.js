import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTransferWithinAStationElement
 * @class IconTwotoneTransferWithinAStationElement
 * @extends {AoflElement}
 */
class IconTwotoneTransferWithinAStationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTransferWithinAStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-transfer-within-a-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTransferWithinAStationElement.is, IconTwotoneTransferWithinAStationElement);

export default IconTwotoneTransferWithinAStationElement;
