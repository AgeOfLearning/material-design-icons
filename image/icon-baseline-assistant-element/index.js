import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAssistantElement
 * @class IconBaselineAssistantElement
 * @extends {AoflElement}
 */
class IconBaselineAssistantElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAssistantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-assistant';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAssistantElement.is, IconBaselineAssistantElement);

export default IconBaselineAssistantElement;
