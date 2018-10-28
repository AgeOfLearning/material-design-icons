import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFeaturedPlayListElement
 * @class IconRoundFeaturedPlayListElement
 * @extends {AoflElement}
 */
class IconRoundFeaturedPlayListElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFeaturedPlayListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-featured-play-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFeaturedPlayListElement.is, IconRoundFeaturedPlayListElement);

export default IconRoundFeaturedPlayListElement;
