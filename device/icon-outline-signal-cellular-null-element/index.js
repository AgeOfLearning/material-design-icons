import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSignalCellularNullElement
 * @class IconOutlineSignalCellularNullElement
 * @extends {AoflElement}
 */
class IconOutlineSignalCellularNullElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSignalCellularNullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-signal-cellular-null';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSignalCellularNullElement.is, IconOutlineSignalCellularNullElement);

export default IconOutlineSignalCellularNullElement;
