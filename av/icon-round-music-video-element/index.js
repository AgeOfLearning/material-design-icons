import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMusicVideoElement
 * @class IconRoundMusicVideoElement
 * @extends {AoflElement}
 */
class IconRoundMusicVideoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMusicVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-music-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMusicVideoElement.is, IconRoundMusicVideoElement);

export default IconRoundMusicVideoElement;
