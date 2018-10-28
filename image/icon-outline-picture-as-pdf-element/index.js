import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePictureAsPdfElement
 * @class IconOutlinePictureAsPdfElement
 * @extends {AoflElement}
 */
class IconOutlinePictureAsPdfElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePictureAsPdfElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-picture-as-pdf';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePictureAsPdfElement.is, IconOutlinePictureAsPdfElement);

export default IconOutlinePictureAsPdfElement;
