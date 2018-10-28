import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePlayCircleFilledWhiteElement
 * @class IconBaselinePlayCircleFilledWhiteElement
 * @extends {AoflElement}
 */
class IconBaselinePlayCircleFilledWhiteElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePlayCircleFilledWhiteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-play-circle-filled-white';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePlayCircleFilledWhiteElement.is, IconBaselinePlayCircleFilledWhiteElement);

export default IconBaselinePlayCircleFilledWhiteElement;
