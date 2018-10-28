import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePictureAsPdfElement
 * @class IconBaselinePictureAsPdfElement
 * @extends {AoflElement}
 */
class IconBaselinePictureAsPdfElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePictureAsPdfElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-picture-as-pdf';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePictureAsPdfElement.is, IconBaselinePictureAsPdfElement);

export default IconBaselinePictureAsPdfElement;
