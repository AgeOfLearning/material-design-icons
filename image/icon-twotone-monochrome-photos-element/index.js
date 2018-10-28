import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMonochromePhotosElement
 * @class IconTwotoneMonochromePhotosElement
 * @extends {AoflElement}
 */
class IconTwotoneMonochromePhotosElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMonochromePhotosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-monochrome-photos';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMonochromePhotosElement.is, IconTwotoneMonochromePhotosElement);

export default IconTwotoneMonochromePhotosElement;
