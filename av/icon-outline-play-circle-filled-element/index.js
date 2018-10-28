import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePlayCircleFilledElement
 * @class IconOutlinePlayCircleFilledElement
 * @extends {AoflElement}
 */
class IconOutlinePlayCircleFilledElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePlayCircleFilledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-play-circle-filled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePlayCircleFilledElement.is, IconOutlinePlayCircleFilledElement);

export default IconOutlinePlayCircleFilledElement;
