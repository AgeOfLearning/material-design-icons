import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalCellular3BarElement
 * @class IconTwotoneSignalCellular3BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalCellular3BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalCellular3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-cellular-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalCellular3BarElement.is, IconTwotoneSignalCellular3BarElement);

export default IconTwotoneSignalCellular3BarElement;
