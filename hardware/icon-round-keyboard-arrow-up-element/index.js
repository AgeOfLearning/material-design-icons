import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundKeyboardArrowUpElement
 * @class IconRoundKeyboardArrowUpElement
 * @extends {AoflElement}
 */
class IconRoundKeyboardArrowUpElement extends AoflElement {
  /**
   * Creates an instance of IconRoundKeyboardArrowUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-keyboard-arrow-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundKeyboardArrowUpElement.is, IconRoundKeyboardArrowUpElement);

export default IconRoundKeyboardArrowUpElement;
