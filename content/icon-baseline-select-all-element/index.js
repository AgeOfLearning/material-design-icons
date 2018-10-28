import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSelectAllElement
 * @class IconBaselineSelectAllElement
 * @extends {AoflElement}
 */
class IconBaselineSelectAllElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSelectAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-select-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSelectAllElement.is, IconBaselineSelectAllElement);

export default IconBaselineSelectAllElement;
