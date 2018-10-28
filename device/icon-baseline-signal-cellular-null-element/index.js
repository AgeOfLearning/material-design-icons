import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSignalCellularNullElement
 * @class IconBaselineSignalCellularNullElement
 * @extends {AoflElement}
 */
class IconBaselineSignalCellularNullElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSignalCellularNullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-signal-cellular-null';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSignalCellularNullElement.is, IconBaselineSignalCellularNullElement);

export default IconBaselineSignalCellularNullElement;
