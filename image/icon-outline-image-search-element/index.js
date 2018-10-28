import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineImageSearchElement
 * @class IconOutlineImageSearchElement
 * @extends {AoflElement}
 */
class IconOutlineImageSearchElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineImageSearchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-image-search';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineImageSearchElement.is, IconOutlineImageSearchElement);

export default IconOutlineImageSearchElement;
