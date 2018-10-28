import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePictureAsPdfElement
 * @class IconTwotonePictureAsPdfElement
 * @extends {AoflElement}
 */
class IconTwotonePictureAsPdfElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePictureAsPdfElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-picture-as-pdf';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePictureAsPdfElement.is, IconTwotonePictureAsPdfElement);

export default IconTwotonePictureAsPdfElement;
