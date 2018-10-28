import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalCellular1BarElement
 * @class IconBaselineSignalCellular1BarElement
 * @extends {AoflElement}
 */
class IconBaselineSignalCellular1BarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalCellular1BarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-cellular-1-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalCellular1BarElement.is, IconBaselineSignalCellular1BarElement);

export default IconBaselineSignalCellular1BarElement;
