import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCardTravelElement
 * @class IconBaselineCardTravelElement
 * @extends {AoflElement}
 */
class IconBaselineCardTravelElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCardTravelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-card-travel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCardTravelElement.is, IconBaselineCardTravelElement);

export default IconBaselineCardTravelElement;
