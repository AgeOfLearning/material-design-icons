import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAddToPhotosElement
 * @class IconBaselineAddToPhotosElement
 * @extends {AoflElement}
 */
class IconBaselineAddToPhotosElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAddToPhotosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-add-to-photos';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAddToPhotosElement.is, IconBaselineAddToPhotosElement);

export default IconBaselineAddToPhotosElement;
