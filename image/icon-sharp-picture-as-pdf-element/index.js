import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPictureAsPdfElement
 * @class IconSharpPictureAsPdfElement
 * @extends {AoflElement}
 */
class IconSharpPictureAsPdfElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPictureAsPdfElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-picture-as-pdf';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPictureAsPdfElement.is, IconSharpPictureAsPdfElement);

export default IconSharpPictureAsPdfElement;
