import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAssessmentElement
 * @class IconBaselineAssessmentElement
 * @extends {AoflElement}
 */
class IconBaselineAssessmentElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAssessmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-assessment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAssessmentElement.is, IconBaselineAssessmentElement);

export default IconBaselineAssessmentElement;
