import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPictureInPictureAltElement
 * @class IconSharpPictureInPictureAltElement
 * @extends {AoflElement}
 */
class IconSharpPictureInPictureAltElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPictureInPictureAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-picture-in-picture-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPictureInPictureAltElement.is, IconSharpPictureInPictureAltElement);

export default IconSharpPictureInPictureAltElement;
