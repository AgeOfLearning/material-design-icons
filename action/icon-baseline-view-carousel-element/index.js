import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineViewCarouselElement
 * @class IconBaselineViewCarouselElement
 * @extends {AoflElement}
 */
class IconBaselineViewCarouselElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineViewCarouselElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-view-carousel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineViewCarouselElement.is, IconBaselineViewCarouselElement);

export default IconBaselineViewCarouselElement;
