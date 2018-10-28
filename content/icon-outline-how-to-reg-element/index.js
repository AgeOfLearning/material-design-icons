import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHowToRegElement
 * @class IconOutlineHowToRegElement
 * @extends {AoflElement}
 */
class IconOutlineHowToRegElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHowToRegElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-how-to-reg';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHowToRegElement.is, IconOutlineHowToRegElement);

export default IconOutlineHowToRegElement;
