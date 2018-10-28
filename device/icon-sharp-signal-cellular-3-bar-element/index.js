import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalCellular3BarElement
 * @class IconSharpSignalCellular3BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalCellular3BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalCellular3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-cellular-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalCellular3BarElement.is, IconSharpSignalCellular3BarElement);

export default IconSharpSignalCellular3BarElement;
