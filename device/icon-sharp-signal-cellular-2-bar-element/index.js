import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalCellular2BarElement
 * @class IconSharpSignalCellular2BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalCellular2BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalCellular2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-cellular-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalCellular2BarElement.is, IconSharpSignalCellular2BarElement);

export default IconSharpSignalCellular2BarElement;
