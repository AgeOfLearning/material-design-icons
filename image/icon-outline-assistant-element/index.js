import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAssistantElement
 * @class IconOutlineAssistantElement
 * @extends {AoflElement}
 */
class IconOutlineAssistantElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAssistantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-assistant';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAssistantElement.is, IconOutlineAssistantElement);

export default IconOutlineAssistantElement;
