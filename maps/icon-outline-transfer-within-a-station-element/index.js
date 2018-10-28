import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTransferWithinAStationElement
 * @class IconOutlineTransferWithinAStationElement
 * @extends {AoflElement}
 */
class IconOutlineTransferWithinAStationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTransferWithinAStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-transfer-within-a-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTransferWithinAStationElement.is, IconOutlineTransferWithinAStationElement);

export default IconOutlineTransferWithinAStationElement;
