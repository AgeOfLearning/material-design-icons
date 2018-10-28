import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAddToPhotosElement
 * @class IconTwotoneAddToPhotosElement
 * @extends {AoflElement}
 */
class IconTwotoneAddToPhotosElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAddToPhotosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-add-to-photos';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAddToPhotosElement.is, IconTwotoneAddToPhotosElement);

export default IconTwotoneAddToPhotosElement;
