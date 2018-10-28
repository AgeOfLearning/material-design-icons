import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalCellularOffElement
 * @class IconTwotoneSignalCellularOffElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalCellularOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalCellularOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-cellular-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalCellularOffElement.is, IconTwotoneSignalCellularOffElement);

export default IconTwotoneSignalCellularOffElement;
