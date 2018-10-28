import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTransferWithinAStationElement
 * @class IconRoundTransferWithinAStationElement
 * @extends {AoflElement}
 */
class IconRoundTransferWithinAStationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTransferWithinAStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-transfer-within-a-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTransferWithinAStationElement.is, IconRoundTransferWithinAStationElement);

export default IconRoundTransferWithinAStationElement;
