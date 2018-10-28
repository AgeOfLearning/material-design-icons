import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineViewArrayElement
 * @class IconBaselineViewArrayElement
 * @extends {AoflElement}
 */
class IconBaselineViewArrayElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineViewArrayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-view-array';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineViewArrayElement.is, IconBaselineViewArrayElement);

export default IconBaselineViewArrayElement;
