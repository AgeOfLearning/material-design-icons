import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFeedbackElement
 * @class IconSharpFeedbackElement
 * @extends {AoflElement}
 */
class IconSharpFeedbackElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFeedbackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-feedback';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFeedbackElement.is, IconSharpFeedbackElement);

export default IconSharpFeedbackElement;
