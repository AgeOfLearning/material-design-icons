import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineKeyboardArrowLeftElement
 * @class IconBaselineKeyboardArrowLeftElement
 * @extends {AoflElement}
 */
class IconBaselineKeyboardArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineKeyboardArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-keyboard-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineKeyboardArrowLeftElement.is, IconBaselineKeyboardArrowLeftElement);

export default IconBaselineKeyboardArrowLeftElement;
