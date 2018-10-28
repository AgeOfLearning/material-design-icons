import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMusicVideoElement
 * @class IconTwotoneMusicVideoElement
 * @extends {AoflElement}
 */
class IconTwotoneMusicVideoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMusicVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-music-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMusicVideoElement.is, IconTwotoneMusicVideoElement);

export default IconTwotoneMusicVideoElement;
