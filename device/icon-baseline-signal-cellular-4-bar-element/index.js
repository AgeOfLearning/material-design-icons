import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalCellular4BarElement
 * @class IconBaselineSignalCellular4BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalCellular4BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalCellular4BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-cellular-4-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalCellular4BarElement.is, IconBaselineSignalCellular4BarElement);

export default IconBaselineSignalCellular4BarElement;
