import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalCellular0BarElement
 * @class IconBaselineSignalCellular0BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalCellular0BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalCellular0BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-cellular-0-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalCellular0BarElement.is, IconBaselineSignalCellular0BarElement);

export default IconBaselineSignalCellular0BarElement;
