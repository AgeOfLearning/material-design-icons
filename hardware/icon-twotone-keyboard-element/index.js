import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneKeyboardElement
 * @class IconTwotoneKeyboardElement
 * @extends {AoflElement}
 */
class IconTwotoneKeyboardElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneKeyboardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-keyboard';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneKeyboardElement.is, IconTwotoneKeyboardElement);

export default IconTwotoneKeyboardElement;
