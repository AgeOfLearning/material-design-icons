import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFeaturedPlayListElement
 * @class IconSharpFeaturedPlayListElement
 * @extends {AoflElement}
 */
class IconSharpFeaturedPlayListElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFeaturedPlayListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-featured-play-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFeaturedPlayListElement.is, IconSharpFeaturedPlayListElement);

export default IconSharpFeaturedPlayListElement;
