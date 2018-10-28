import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFeedbackElement
 * @class IconOutlineFeedbackElement
 * @extends {AoflElement}
 */
class IconOutlineFeedbackElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFeedbackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-feedback';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFeedbackElement.is, IconOutlineFeedbackElement);

export default IconOutlineFeedbackElement;
