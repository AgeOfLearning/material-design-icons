import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePlayCircleFilledWhiteElement
 * @class IconTwotonePlayCircleFilledWhiteElement
 * @extends {AoflElement}
 */
class IconTwotonePlayCircleFilledWhiteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePlayCircleFilledWhiteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-play-circle-filled-white';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePlayCircleFilledWhiteElement.is, IconTwotonePlayCircleFilledWhiteElement);

export default IconTwotonePlayCircleFilledWhiteElement;
