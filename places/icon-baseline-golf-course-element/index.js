import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGolfCourseElement
 * @class IconBaselineGolfCourseElement
 * @extends {AoflElement}
 */
class IconBaselineGolfCourseElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGolfCourseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-golf-course';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGolfCourseElement.is, IconBaselineGolfCourseElement);

export default IconBaselineGolfCourseElement;
