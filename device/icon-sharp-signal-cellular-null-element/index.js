import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalCellularNullElement
 * @class IconSharpSignalCellularNullElement
 * @extends {AoflElement}
 */
class IconSharpSignalCellularNullElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalCellularNullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-cellular-null';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalCellularNullElement.is, IconSharpSignalCellularNullElement);

export default IconSharpSignalCellularNullElement;
