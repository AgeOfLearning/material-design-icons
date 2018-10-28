import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMusicOffElement
 * @class IconRoundMusicOffElement
 * @extends {AoflElement}
 */
class IconRoundMusicOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMusicOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-music-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMusicOffElement.is, IconRoundMusicOffElement);

export default IconRoundMusicOffElement;
