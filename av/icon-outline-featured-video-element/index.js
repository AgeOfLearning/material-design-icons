import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFeaturedVideoElement
 * @class IconOutlineFeaturedVideoElement
 * @extends {AoflElement}
 */
class IconOutlineFeaturedVideoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFeaturedVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-featured-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFeaturedVideoElement.is, IconOutlineFeaturedVideoElement);

export default IconOutlineFeaturedVideoElement;
