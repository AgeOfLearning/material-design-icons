import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFeaturedVideoElement
 * @class IconRoundFeaturedVideoElement
 * @extends {AoflElement}
 */
class IconRoundFeaturedVideoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFeaturedVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-featured-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFeaturedVideoElement.is, IconRoundFeaturedVideoElement);

export default IconRoundFeaturedVideoElement;
