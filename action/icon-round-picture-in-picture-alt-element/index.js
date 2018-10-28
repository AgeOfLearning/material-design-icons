import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPictureInPictureAltElement
 * @class IconRoundPictureInPictureAltElement
 * @extends {AoflElement}
 */
class IconRoundPictureInPictureAltElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPictureInPictureAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-picture-in-picture-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPictureInPictureAltElement.is, IconRoundPictureInPictureAltElement);

export default IconRoundPictureInPictureAltElement;
