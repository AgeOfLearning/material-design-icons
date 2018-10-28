import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNavigateBeforeElement
 * @class IconBaselineNavigateBeforeElement
 * @extends {AoflElement}
 */
class IconBaselineNavigateBeforeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNavigateBeforeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-navigate-before';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNavigateBeforeElement.is, IconBaselineNavigateBeforeElement);

export default IconBaselineNavigateBeforeElement;
