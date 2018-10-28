import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAssessmentElement
 * @class IconTwotoneAssessmentElement
 * @extends {AoflElement}
 */
class IconTwotoneAssessmentElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAssessmentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-assessment';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAssessmentElement.is, IconTwotoneAssessmentElement);

export default IconTwotoneAssessmentElement;
