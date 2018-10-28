import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalCellularAltElement
 * @class IconSharpSignalCellularAltElement
 * @extends {AoflElement}
 */
class IconSharpSignalCellularAltElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalCellularAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-cellular-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalCellularAltElement.is, IconSharpSignalCellularAltElement);

export default IconSharpSignalCellularAltElement;
