import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineYoutubeSearchedForElement
 * @class IconOutlineYoutubeSearchedForElement
 * @extends {AoflElement}
 */
class IconOutlineYoutubeSearchedForElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineYoutubeSearchedForElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-youtube-searched-for';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineYoutubeSearchedForElement.is, IconOutlineYoutubeSearchedForElement);

export default IconOutlineYoutubeSearchedForElement;
