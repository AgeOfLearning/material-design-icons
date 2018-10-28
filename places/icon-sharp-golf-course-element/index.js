import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGolfCourseElement
 * @class IconSharpGolfCourseElement
 * @extends {AoflElement}
 */
class IconSharpGolfCourseElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGolfCourseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-golf-course';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGolfCourseElement.is, IconSharpGolfCourseElement);

export default IconSharpGolfCourseElement;
