import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPictureInPictureElement
 * @class IconSharpPictureInPictureElement
 * @extends {AoflElement}
 */
class IconSharpPictureInPictureElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPictureInPictureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-picture-in-picture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPictureInPictureElement.is, IconSharpPictureInPictureElement);

export default IconSharpPictureInPictureElement;
