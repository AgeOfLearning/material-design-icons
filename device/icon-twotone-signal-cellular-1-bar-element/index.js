import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalCellular1BarElement
 * @class IconTwotoneSignalCellular1BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalCellular1BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalCellular1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-cellular-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalCellular1BarElement.is, IconTwotoneSignalCellular1BarElement);

export default IconTwotoneSignalCellular1BarElement;
