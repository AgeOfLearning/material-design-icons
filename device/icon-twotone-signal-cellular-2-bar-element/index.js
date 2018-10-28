import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalCellular2BarElement
 * @class IconTwotoneSignalCellular2BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalCellular2BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalCellular2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-cellular-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalCellular2BarElement.is, IconTwotoneSignalCellular2BarElement);

export default IconTwotoneSignalCellular2BarElement;
