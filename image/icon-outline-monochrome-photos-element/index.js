import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMonochromePhotosElement
 * @class IconOutlineMonochromePhotosElement
 * @extends {AoflElement}
 */
class IconOutlineMonochromePhotosElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMonochromePhotosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-monochrome-photos';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMonochromePhotosElement.is, IconOutlineMonochromePhotosElement);

export default IconOutlineMonochromePhotosElement;
