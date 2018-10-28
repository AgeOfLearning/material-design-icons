import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalCellular1BarElement
 * @class IconOutlineSignalCellular1BarElement
 * @extends {AoflElement}
 */
class IconOutlineSignalCellular1BarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalCellular1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-cellular-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalCellular1BarElement.is, IconOutlineSignalCellular1BarElement);

export default IconOutlineSignalCellular1BarElement;
