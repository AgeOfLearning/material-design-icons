import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPlayCircleFilledWhiteElement
 * @class IconSharpPlayCircleFilledWhiteElement
 * @extends {AoflElement}
 */
class IconSharpPlayCircleFilledWhiteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPlayCircleFilledWhiteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-play-circle-filled-white';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPlayCircleFilledWhiteElement.is, IconSharpPlayCircleFilledWhiteElement);

export default IconSharpPlayCircleFilledWhiteElement;
