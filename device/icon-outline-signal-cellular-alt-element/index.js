import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalCellularAltElement
 * @class IconOutlineSignalCellularAltElement
 * @extends {AoflElement}
 */
class IconOutlineSignalCellularAltElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalCellularAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-cellular-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalCellularAltElement.is, IconOutlineSignalCellularAltElement);

export default IconOutlineSignalCellularAltElement;
