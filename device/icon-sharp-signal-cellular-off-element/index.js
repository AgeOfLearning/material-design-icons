import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalCellularOffElement
 * @class IconSharpSignalCellularOffElement
 * @extends {AoflElement}
 */
class IconSharpSignalCellularOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalCellularOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-cellular-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalCellularOffElement.is, IconSharpSignalCellularOffElement);

export default IconSharpSignalCellularOffElement;
