import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGolfCourseElement
 * @class IconRoundGolfCourseElement
 * @extends {AoflElement}
 */
class IconRoundGolfCourseElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGolfCourseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-golf-course';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGolfCourseElement.is, IconRoundGolfCourseElement);

export default IconRoundGolfCourseElement;
