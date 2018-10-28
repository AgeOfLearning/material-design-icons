import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFilterDramaElement
 * @class IconBaselineFilterDramaElement
 * @extends {AoflElement}
 */
class IconBaselineFilterDramaElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFilterDramaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-filter-drama';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFilterDramaElement.is, IconBaselineFilterDramaElement);

export default IconBaselineFilterDramaElement;
