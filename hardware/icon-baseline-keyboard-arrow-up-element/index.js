import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineKeyboardArrowUpElement
 * @class IconBaselineKeyboardArrowUpElement
 * @extends {AoflElement}
 */
class IconBaselineKeyboardArrowUpElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineKeyboardArrowUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-keyboard-arrow-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineKeyboardArrowUpElement.is, IconBaselineKeyboardArrowUpElement);

export default IconBaselineKeyboardArrowUpElement;
