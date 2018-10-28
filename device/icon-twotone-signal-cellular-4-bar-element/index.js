import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalCellular4BarElement
 * @class IconTwotoneSignalCellular4BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalCellular4BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalCellular4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-cellular-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalCellular4BarElement.is, IconTwotoneSignalCellular4BarElement);

export default IconTwotoneSignalCellular4BarElement;
