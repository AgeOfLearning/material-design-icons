import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGolfCourseElement
 * @class IconOutlineGolfCourseElement
 * @extends {AoflElement}
 */
class IconOutlineGolfCourseElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGolfCourseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-golf-course';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGolfCourseElement.is, IconOutlineGolfCourseElement);

export default IconOutlineGolfCourseElement;
