import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalCellularAltElement
 * @class IconBaselineSignalCellularAltElement
 * @extends {AoflElement}
 */
class IconBaselineSignalCellularAltElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalCellularAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-cellular-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalCellularAltElement.is, IconBaselineSignalCellularAltElement);

export default IconBaselineSignalCellularAltElement;
