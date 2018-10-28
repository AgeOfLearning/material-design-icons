import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAddToPhotosElement
 * @class IconRoundAddToPhotosElement
 * @extends {AoflElement}
 */
class IconRoundAddToPhotosElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAddToPhotosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-add-to-photos';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAddToPhotosElement.is, IconRoundAddToPhotosElement);

export default IconRoundAddToPhotosElement;
