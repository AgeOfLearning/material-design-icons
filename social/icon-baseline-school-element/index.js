import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSchoolElement
 * @class IconBaselineSchoolElement
 * @extends {AoflElement}
 */
class IconBaselineSchoolElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSchoolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-school';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSchoolElement.is, IconBaselineSchoolElement);

export default IconBaselineSchoolElement;
