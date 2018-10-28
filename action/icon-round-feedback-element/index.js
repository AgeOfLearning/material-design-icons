import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFeedbackElement
 * @class IconRoundFeedbackElement
 * @extends {AoflElement}
 */
class IconRoundFeedbackElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFeedbackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-feedback';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFeedbackElement.is, IconRoundFeedbackElement);

export default IconRoundFeedbackElement;
