import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePrintDisabledElement
 * @class IconBaselinePrintDisabledElement
 * @extends {AoflElement}
 */
class IconBaselinePrintDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePrintDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-print-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePrintDisabledElement.is, IconBaselinePrintDisabledElement);

export default IconBaselinePrintDisabledElement;
