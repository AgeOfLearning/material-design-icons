import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePlayCircleFilledWhiteElement
 * @class IconOutlinePlayCircleFilledWhiteElement
 * @extends {AoflElement}
 */
class IconOutlinePlayCircleFilledWhiteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePlayCircleFilledWhiteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-play-circle-filled-white';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePlayCircleFilledWhiteElement.is, IconOutlinePlayCircleFilledWhiteElement);

export default IconOutlinePlayCircleFilledWhiteElement;
