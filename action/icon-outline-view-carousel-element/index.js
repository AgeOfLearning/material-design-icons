import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineViewCarouselElement
 * @class IconOutlineViewCarouselElement
 * @extends {AoflElement}
 */
class IconOutlineViewCarouselElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineViewCarouselElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-view-carousel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineViewCarouselElement.is, IconOutlineViewCarouselElement);

export default IconOutlineViewCarouselElement;
