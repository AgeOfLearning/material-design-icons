import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGridOnElement
 * @class IconOutlineGridOnElement
 * @extends {AoflElement}
 */
class IconOutlineGridOnElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGridOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-grid-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGridOnElement.is, IconOutlineGridOnElement);

export default IconOutlineGridOnElement;
