import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFeaturedPlayListElement
 * @class IconOutlineFeaturedPlayListElement
 * @extends {AoflElement}
 */
class IconOutlineFeaturedPlayListElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFeaturedPlayListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-featured-play-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFeaturedPlayListElement.is, IconOutlineFeaturedPlayListElement);

export default IconOutlineFeaturedPlayListElement;
