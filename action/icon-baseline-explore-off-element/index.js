import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineExploreOffElement
 * @class IconBaselineExploreOffElement
 * @extends {AoflElement}
 */
class IconBaselineExploreOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineExploreOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-explore-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineExploreOffElement.is, IconBaselineExploreOffElement);

export default IconBaselineExploreOffElement;
