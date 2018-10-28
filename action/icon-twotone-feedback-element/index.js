import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFeedbackElement
 * @class IconTwotoneFeedbackElement
 * @extends {AoflElement}
 */
class IconTwotoneFeedbackElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFeedbackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-feedback';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFeedbackElement.is, IconTwotoneFeedbackElement);

export default IconTwotoneFeedbackElement;
