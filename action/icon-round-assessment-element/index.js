import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAssessmentElement
 * @class IconRoundAssessmentElement
 * @extends {AoflElement}
 */
class IconRoundAssessmentElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAssessmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-assessment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAssessmentElement.is, IconRoundAssessmentElement);

export default IconRoundAssessmentElement;
