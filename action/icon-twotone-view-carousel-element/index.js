import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneViewCarouselElement
 * @class IconTwotoneViewCarouselElement
 * @extends {AoflElement}
 */
class IconTwotoneViewCarouselElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneViewCarouselElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-view-carousel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneViewCarouselElement.is, IconTwotoneViewCarouselElement);

export default IconTwotoneViewCarouselElement;
