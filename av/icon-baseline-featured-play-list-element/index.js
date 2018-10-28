import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFeaturedPlayListElement
 * @class IconBaselineFeaturedPlayListElement
 * @extends {AoflElement}
 */
class IconBaselineFeaturedPlayListElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFeaturedPlayListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-featured-play-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFeaturedPlayListElement.is, IconBaselineFeaturedPlayListElement);

export default IconBaselineFeaturedPlayListElement;
