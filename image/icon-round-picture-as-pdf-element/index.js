import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPictureAsPdfElement
 * @class IconRoundPictureAsPdfElement
 * @extends {AoflElement}
 */
class IconRoundPictureAsPdfElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPictureAsPdfElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-picture-as-pdf';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPictureAsPdfElement.is, IconRoundPictureAsPdfElement);

export default IconRoundPictureAsPdfElement;
