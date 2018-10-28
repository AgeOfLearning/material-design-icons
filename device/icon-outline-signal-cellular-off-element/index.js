import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalCellularOffElement
 * @class IconOutlineSignalCellularOffElement
 * @extends {AoflElement}
 */
class IconOutlineSignalCellularOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalCellularOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-cellular-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalCellularOffElement.is, IconOutlineSignalCellularOffElement);

export default IconOutlineSignalCellularOffElement;
