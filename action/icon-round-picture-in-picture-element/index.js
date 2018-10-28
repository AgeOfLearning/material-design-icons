import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPictureInPictureElement
 * @class IconRoundPictureInPictureElement
 * @extends {AoflElement}
 */
class IconRoundPictureInPictureElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPictureInPictureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-picture-in-picture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPictureInPictureElement.is, IconRoundPictureInPictureElement);

export default IconRoundPictureInPictureElement;
