import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGolfCourseElement
 * @class IconTwotoneGolfCourseElement
 * @extends {AoflElement}
 */
class IconTwotoneGolfCourseElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGolfCourseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-golf-course';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGolfCourseElement.is, IconTwotoneGolfCourseElement);

export default IconTwotoneGolfCourseElement;
