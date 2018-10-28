import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalCellular0BarElement
 * @class IconSharpSignalCellular0BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalCellular0BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalCellular0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-cellular-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalCellular0BarElement.is, IconSharpSignalCellular0BarElement);

export default IconSharpSignalCellular0BarElement;
