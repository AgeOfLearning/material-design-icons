import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalCellular2BarElement
 * @class IconBaselineSignalCellular2BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalCellular2BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalCellular2BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-cellular-2-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalCellular2BarElement.is, IconBaselineSignalCellular2BarElement);

export default IconBaselineSignalCellular2BarElement;
