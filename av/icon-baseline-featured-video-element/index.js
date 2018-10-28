import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFeaturedVideoElement
 * @class IconBaselineFeaturedVideoElement
 * @extends {AoflElement}
 */
class IconBaselineFeaturedVideoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFeaturedVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-featured-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFeaturedVideoElement.is, IconBaselineFeaturedVideoElement);

export default IconBaselineFeaturedVideoElement;
