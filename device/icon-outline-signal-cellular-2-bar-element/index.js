import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalCellular2BarElement
 * @class IconOutlineSignalCellular2BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalCellular2BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalCellular2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-cellular-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalCellular2BarElement.is, IconOutlineSignalCellular2BarElement);

export default IconOutlineSignalCellular2BarElement;
