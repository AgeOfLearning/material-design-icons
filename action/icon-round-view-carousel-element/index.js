import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundViewCarouselElement
 * @class IconRoundViewCarouselElement
 * @extends {AoflElement}
 */
class IconRoundViewCarouselElement extends AoflElement {
  /**
   * Creates an instance of IconRoundViewCarouselElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-view-carousel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundViewCarouselElement.is, IconRoundViewCarouselElement);

export default IconRoundViewCarouselElement;
