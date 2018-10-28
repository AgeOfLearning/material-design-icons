import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSubtitlesElement
 * @class IconRoundSubtitlesElement
 * @extends {AoflElement}
 */
class IconRoundSubtitlesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSubtitlesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-subtitles';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSubtitlesElement.is, IconRoundSubtitlesElement);

export default IconRoundSubtitlesElement;
