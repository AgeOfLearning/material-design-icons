import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAssessmentElement
 * @class IconSharpAssessmentElement
 * @extends {AoflElement}
 */
class IconSharpAssessmentElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAssessmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-assessment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAssessmentElement.is, IconSharpAssessmentElement);

export default IconSharpAssessmentElement;
