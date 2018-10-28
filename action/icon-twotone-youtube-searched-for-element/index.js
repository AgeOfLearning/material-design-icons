import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneYoutubeSearchedForElement
 * @class IconTwotoneYoutubeSearchedForElement
 * @extends {AoflElement}
 */
class IconTwotoneYoutubeSearchedForElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneYoutubeSearchedForElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-youtube-searched-for';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneYoutubeSearchedForElement.is, IconTwotoneYoutubeSearchedForElement);

export default IconTwotoneYoutubeSearchedForElement;
