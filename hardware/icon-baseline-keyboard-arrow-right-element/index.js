import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineKeyboardArrowRightElement
 * @class IconBaselineKeyboardArrowRightElement
 * @extends {AoflElement}
 */
class IconBaselineKeyboardArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineKeyboardArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-keyboard-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineKeyboardArrowRightElement.is, IconBaselineKeyboardArrowRightElement);

export default IconBaselineKeyboardArrowRightElement;
