import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineYoutubeSearchedForElement
 * @class IconBaselineYoutubeSearchedForElement
 * @extends {AoflElement}
 */
class IconBaselineYoutubeSearchedForElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineYoutubeSearchedForElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-youtube-searched-for';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineYoutubeSearchedForElement.is, IconBaselineYoutubeSearchedForElement);

export default IconBaselineYoutubeSearchedForElement;
