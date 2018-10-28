import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundYoutubeSearchedForElement
 * @class IconRoundYoutubeSearchedForElement
 * @extends {AoflElement}
 */
class IconRoundYoutubeSearchedForElement extends AoflElement {
  /**
   * Creates an instance of IconRoundYoutubeSearchedForElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-youtube-searched-for';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundYoutubeSearchedForElement.is, IconRoundYoutubeSearchedForElement);

export default IconRoundYoutubeSearchedForElement;
