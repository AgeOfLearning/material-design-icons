import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalCellular0BarElement
 * @class IconOutlineSignalCellular0BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalCellular0BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalCellular0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-cellular-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalCellular0BarElement.is, IconOutlineSignalCellular0BarElement);

export default IconOutlineSignalCellular0BarElement;
