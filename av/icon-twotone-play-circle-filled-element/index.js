import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePlayCircleFilledElement
 * @class IconTwotonePlayCircleFilledElement
 * @extends {AoflElement}
 */
class IconTwotonePlayCircleFilledElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePlayCircleFilledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-play-circle-filled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePlayCircleFilledElement.is, IconTwotonePlayCircleFilledElement);

export default IconTwotonePlayCircleFilledElement;
