import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilterVintageElement
 * @class IconBaselineFilterVintageElement
 * @extends {AoflElement}
 */
class IconBaselineFilterVintageElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilterVintageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-vintage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilterVintageElement.is, IconBaselineFilterVintageElement);

export default IconBaselineFilterVintageElement;
