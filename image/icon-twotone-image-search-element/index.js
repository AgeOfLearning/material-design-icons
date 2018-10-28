import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneImageSearchElement
 * @class IconTwotoneImageSearchElement
 * @extends {AoflElement}
 */
class IconTwotoneImageSearchElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneImageSearchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-image-search';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneImageSearchElement.is, IconTwotoneImageSearchElement);

export default IconTwotoneImageSearchElement;
