import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSignalCellular0BarElement
 * @class IconTwotoneSignalCellular0BarElement
 * @extends {AoflElement}
 */
class IconTwotoneSignalCellular0BarElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSignalCellular0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-signal-cellular-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSignalCellular0BarElement.is, IconTwotoneSignalCellular0BarElement);

export default IconTwotoneSignalCellular0BarElement;
