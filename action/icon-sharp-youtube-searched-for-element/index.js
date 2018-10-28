import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpYoutubeSearchedForElement
 * @class IconSharpYoutubeSearchedForElement
 * @extends {AoflElement}
 */
class IconSharpYoutubeSearchedForElement extends AoflElement {
  /**
   * Creates an instance of IconSharpYoutubeSearchedForElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-youtube-searched-for';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpYoutubeSearchedForElement.is, IconSharpYoutubeSearchedForElement);

export default IconSharpYoutubeSearchedForElement;
