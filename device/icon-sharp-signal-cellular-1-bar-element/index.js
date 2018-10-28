import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSignalCellular1BarElement
 * @class IconSharpSignalCellular1BarElement
 * @extends {AoflElement}
 */
class IconSharpSignalCellular1BarElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSignalCellular1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-signal-cellular-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSignalCellular1BarElement.is, IconSharpSignalCellular1BarElement);

export default IconSharpSignalCellular1BarElement;
