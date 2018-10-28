import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineExpandLessElement
 * @class IconBaselineExpandLessElement
 * @extends {AoflElement}
 */
class IconBaselineExpandLessElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineExpandLessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-expand-less';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineExpandLessElement.is, IconBaselineExpandLessElement);

export default IconBaselineExpandLessElement;
