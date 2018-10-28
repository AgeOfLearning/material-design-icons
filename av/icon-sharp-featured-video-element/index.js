import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFeaturedVideoElement
 * @class IconSharpFeaturedVideoElement
 * @extends {AoflElement}
 */
class IconSharpFeaturedVideoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFeaturedVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-featured-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFeaturedVideoElement.is, IconSharpFeaturedVideoElement);

export default IconSharpFeaturedVideoElement;
