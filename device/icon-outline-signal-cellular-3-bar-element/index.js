import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalCellular3BarElement
 * @class IconOutlineSignalCellular3BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalCellular3BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalCellular3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-cellular-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalCellular3BarElement.is, IconOutlineSignalCellular3BarElement);

export default IconOutlineSignalCellular3BarElement;
