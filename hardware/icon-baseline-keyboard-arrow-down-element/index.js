import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineKeyboardArrowDownElement
 * @class IconBaselineKeyboardArrowDownElement
 * @extends {AoflElement}
 */
class IconBaselineKeyboardArrowDownElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineKeyboardArrowDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-keyboard-arrow-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineKeyboardArrowDownElement.is, IconBaselineKeyboardArrowDownElement);

export default IconBaselineKeyboardArrowDownElement;
