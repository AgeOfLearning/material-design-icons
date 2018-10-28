import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalCellularNoSimElement
 * @class IconBaselineSignalCellularNoSimElement
 * @extends {AoflElement}
 */
class IconBaselineSignalCellularNoSimElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalCellularNoSimElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-cellular-no-sim';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalCellularNoSimElement.is, IconBaselineSignalCellularNoSimElement);

export default IconBaselineSignalCellularNoSimElement;
