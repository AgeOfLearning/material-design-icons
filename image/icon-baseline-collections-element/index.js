import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCollectionsElement
 * @class IconBaselineCollectionsElement
 * @extends {AoflElement}
 */
class IconBaselineCollectionsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCollectionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-collections';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCollectionsElement.is, IconBaselineCollectionsElement);

export default IconBaselineCollectionsElement;
