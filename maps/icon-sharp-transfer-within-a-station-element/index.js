import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTransferWithinAStationElement
 * @class IconSharpTransferWithinAStationElement
 * @extends {AoflElement}
 */
class IconSharpTransferWithinAStationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTransferWithinAStationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-transfer-within-a-station';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTransferWithinAStationElement.is, IconSharpTransferWithinAStationElement);

export default IconSharpTransferWithinAStationElement;
