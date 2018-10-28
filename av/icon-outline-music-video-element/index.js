import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMusicVideoElement
 * @class IconOutlineMusicVideoElement
 * @extends {AoflElement}
 */
class IconOutlineMusicVideoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMusicVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-music-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMusicVideoElement.is, IconOutlineMusicVideoElement);

export default IconOutlineMusicVideoElement;
