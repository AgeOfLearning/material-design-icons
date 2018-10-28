import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMusicVideoElement
 * @class IconBaselineMusicVideoElement
 * @extends {AoflElement}
 */
class IconBaselineMusicVideoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMusicVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-music-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMusicVideoElement.is, IconBaselineMusicVideoElement);

export default IconBaselineMusicVideoElement;
