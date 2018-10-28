import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneKeyboardTabElement
 * @class IconTwotoneKeyboardTabElement
 * @extends {AoflElement}
 */
class IconTwotoneKeyboardTabElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneKeyboardTabElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-keyboard-tab';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneKeyboardTabElement.is, IconTwotoneKeyboardTabElement);

export default IconTwotoneKeyboardTabElement;
