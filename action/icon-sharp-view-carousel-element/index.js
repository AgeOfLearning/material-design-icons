import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpViewCarouselElement
 * @class IconSharpViewCarouselElement
 * @extends {AoflElement}
 */
class IconSharpViewCarouselElement extends AoflElement {
  /**
   * Creates an instance of IconSharpViewCarouselElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-view-carousel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpViewCarouselElement.is, IconSharpViewCarouselElement);

export default IconSharpViewCarouselElement;
