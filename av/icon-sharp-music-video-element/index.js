import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMusicVideoElement
 * @class IconSharpMusicVideoElement
 * @extends {AoflElement}
 */
class IconSharpMusicVideoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMusicVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-music-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMusicVideoElement.is, IconSharpMusicVideoElement);

export default IconSharpMusicVideoElement;
