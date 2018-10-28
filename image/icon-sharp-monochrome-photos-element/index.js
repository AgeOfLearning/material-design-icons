import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMonochromePhotosElement
 * @class IconSharpMonochromePhotosElement
 * @extends {AoflElement}
 */
class IconSharpMonochromePhotosElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMonochromePhotosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-monochrome-photos';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMonochromePhotosElement.is, IconSharpMonochromePhotosElement);

export default IconSharpMonochromePhotosElement;
