import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalCellular4BarElement
 * @class IconSharpSignalCellular4BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalCellular4BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalCellular4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-cellular-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalCellular4BarElement.is, IconSharpSignalCellular4BarElement);

export default IconSharpSignalCellular4BarElement;
