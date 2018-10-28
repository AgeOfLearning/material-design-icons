import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalCellularNullElement
 * @class IconTwotoneSignalCellularNullElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalCellularNullElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalCellularNullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-cellular-null';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalCellularNullElement.is, IconTwotoneSignalCellularNullElement);

export default IconTwotoneSignalCellularNullElement;
