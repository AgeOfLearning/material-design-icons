import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalCellularOffElement
 * @class IconBaselineSignalCellularOffElement
 * @extends {AoflElement}
 */
class IconBaselineSignalCellularOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalCellularOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-cellular-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalCellularOffElement.is, IconBaselineSignalCellularOffElement);

export default IconBaselineSignalCellularOffElement;
