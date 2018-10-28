import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAssessmentElement
 * @class IconOutlineAssessmentElement
 * @extends {AoflElement}
 */
class IconOutlineAssessmentElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAssessmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-assessment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAssessmentElement.is, IconOutlineAssessmentElement);

export default IconOutlineAssessmentElement;
