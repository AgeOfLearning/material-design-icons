import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFeaturedPlayListElement
 * @class IconTwotoneFeaturedPlayListElement
 * @extends {AoflElement}
 */
class IconTwotoneFeaturedPlayListElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFeaturedPlayListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-featured-play-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFeaturedPlayListElement.is, IconTwotoneFeaturedPlayListElement);

export default IconTwotoneFeaturedPlayListElement;
