import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAssistantElement
 * @class IconSharpAssistantElement
 * @extends {AoflElement}
 */
class IconSharpAssistantElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAssistantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-assistant';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAssistantElement.is, IconSharpAssistantElement);

export default IconSharpAssistantElement;
