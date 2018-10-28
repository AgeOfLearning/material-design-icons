import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalCellularAltElement
 * @class IconTwotoneSignalCellularAltElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalCellularAltElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalCellularAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-cellular-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalCellularAltElement.is, IconTwotoneSignalCellularAltElement);

export default IconTwotoneSignalCellularAltElement;
