import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAddToHomeScreenElement
 * @class IconOutlineAddToHomeScreenElement
 * @extends {AoflElement}
 */
class IconOutlineAddToHomeScreenElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAddToHomeScreenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-add-to-home-screen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAddToHomeScreenElement.is, IconOutlineAddToHomeScreenElement);

export default IconOutlineAddToHomeScreenElement;
