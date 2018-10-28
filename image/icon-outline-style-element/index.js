import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStyleElement
 * @class IconOutlineStyleElement
 * @extends {AoflElement}
 */
class IconOutlineStyleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStyleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-style';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStyleElement.is, IconOutlineStyleElement);

export default IconOutlineStyleElement;
