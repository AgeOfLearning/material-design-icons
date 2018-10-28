import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineImageElement
 * @class IconOutlineImageElement
 * @extends {AoflElement}
 */
class IconOutlineImageElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineImageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-image';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineImageElement.is, IconOutlineImageElement);

export default IconOutlineImageElement;
