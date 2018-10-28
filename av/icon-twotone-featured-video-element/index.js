import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFeaturedVideoElement
 * @class IconTwotoneFeaturedVideoElement
 * @extends {AoflElement}
 */
class IconTwotoneFeaturedVideoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFeaturedVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-featured-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFeaturedVideoElement.is, IconTwotoneFeaturedVideoElement);

export default IconTwotoneFeaturedVideoElement;
