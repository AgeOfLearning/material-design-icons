import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPlayCircleFilledWhiteElement
 * @class IconRoundPlayCircleFilledWhiteElement
 * @extends {AoflElement}
 */
class IconRoundPlayCircleFilledWhiteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPlayCircleFilledWhiteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-play-circle-filled-white';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPlayCircleFilledWhiteElement.is, IconRoundPlayCircleFilledWhiteElement);

export default IconRoundPlayCircleFilledWhiteElement;
