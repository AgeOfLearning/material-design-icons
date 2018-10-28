import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFeedbackElement
 * @class IconBaselineFeedbackElement
 * @extends {AoflElement}
 */
class IconBaselineFeedbackElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFeedbackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-feedback';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFeedbackElement.is, IconBaselineFeedbackElement);

export default IconBaselineFeedbackElement;
