import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalCellular3BarElement
 * @class IconBaselineSignalCellular3BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalCellular3BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalCellular3BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-cellular-3-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalCellular3BarElement.is, IconBaselineSignalCellular3BarElement);

export default IconBaselineSignalCellular3BarElement;
