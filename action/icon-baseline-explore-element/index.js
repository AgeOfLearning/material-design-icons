import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineExploreElement
 * @class IconBaselineExploreElement
 * @extends {AoflElement}
 */
class IconBaselineExploreElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineExploreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-explore';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineExploreElement.is, IconBaselineExploreElement);

export default IconBaselineExploreElement;
