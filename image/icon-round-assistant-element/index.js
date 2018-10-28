import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAssistantElement
 * @class IconRoundAssistantElement
 * @extends {AoflElement}
 */
class IconRoundAssistantElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAssistantElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-assistant';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAssistantElement.is, IconRoundAssistantElement);

export default IconRoundAssistantElement;
