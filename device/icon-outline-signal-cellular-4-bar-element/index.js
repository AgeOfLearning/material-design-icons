import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalCellular4BarElement
 * @class IconOutlineSignalCellular4BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalCellular4BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalCellular4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-cellular-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalCellular4BarElement.is, IconOutlineSignalCellular4BarElement);

export default IconOutlineSignalCellular4BarElement;
